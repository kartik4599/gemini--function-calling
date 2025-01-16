import Express from "express";
import cors from "cors";
import { function_method } from "./functions";
import { getFreshModel, getModel } from "./config";

const app = Express();

app.use(cors({ origin: "*" }));
app.use(Express.json());

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
      call.map(async ({ name, args }) => ({
        functionResponse: {
          name,
          response: await function_method[name](args),
        },
      }))
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
