import Express from "express";
import cors from "cors";
import { function_method } from "./functions";
import { getModel } from "./config";

const app = Express();

app.use(cors({ origin: "*" }));
app.use(Express.json());

app.post("/chat", async (req, res) => {
  try {
    const { history, prompt } = req.body;
    if (!history || !prompt) throw new Error("Missing history or prompt");

    const model = getModel(history);
    const { response } = await model.sendMessage(prompt);
    const call = response.functionCalls();
    if (!call) return res.json({ response: response.text() });
    console.log(call);

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

    res.json({ response: finalResponse.text() });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

app.listen(5000);
