import Express from "express";
import cors from "cors";
import { getFreshModel, getModel } from "./config";
import function_apis from "./function_apis.json";
import router from "./functions";
import axios from "axios";

const app = Express();

app.use(cors({ origin: "*" }));
app.use(Express.json());

app.use(router);

// @ts-ignore
app.post("/chat", async (req, res) => {
  try {
    const { history, prompt } = req.body;
    if (!history || !prompt) throw new Error("Missing history or prompt");

    const model = getModel(history);
    const { response } = await model.sendMessage(prompt);
    const call = response.functionCalls();
    if (!call) return res.json({ response: response.text() });

    const FunctionResponse = await Promise.all(
      call.map(async ({ name, args }) => {
        try {
          const path = function_apis[name];
          if (!path) {
            return {
              functionResponse: {
                name,
                response: { status: false, error: "404:Function not found" },
              },
            };
          }
          const { data } = await axios.post(path, args);
          return {
            functionResponse: {
              name,
              response: data,
            },
          };
        } catch (e) {
          return {
            functionResponse: {
              name,
              response: {
                status: false,
                error: "Error occurred while api calling",
              },
            },
          };
        }
      })
    );

    const { response: finalResponse } = await model.sendMessage(
      FunctionResponse
    );

    return res.json({ response: finalResponse.text() });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

app.post("/audio", async (req, res) => {
  try {
    const { data } = req.body;
    const genModel = getFreshModel();
    const { response } = await genModel.sendMessage([
      {
        inlineData: {
          mimeType: "audio/mp3",
          data: data,
        },
      },
      {
        text: `**Instructions:**
        * **Focus on accuracy:** Provide only the spoken words from the audio. 
        * **No additions:** Do not add any words or phrases that are not clearly spoken in the audio.
        * **Empty string for silence:** If no speech is detected in a segment, return an empty string for that segment.
        * **Language:** Ensure the output is strictly in English.
        **Output format:**
        Return the transcribed text as a single string.`,
      },
    ]);

    res.json({ output: response.text() });
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: "Something went wrong" });
  }
});

app.listen(4999);
