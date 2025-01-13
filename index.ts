import { GoogleGenerativeAI } from "@google/generative-ai";
import Express from "express";
import cors from "cors";
import { function_declaration, function_method } from "./functions";

const app = Express();
const API_KEY = "Your Key";

app.use(cors({ origin: "*" }));
app.use(Express.json());

const genAI = new GoogleGenerativeAI(API_KEY);

const GM = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  tools: [
    {
      functionDeclarations: [
        function_declaration.apply_for_leave,
        function_declaration.apply_for_wfh,
        function_declaration.book_meeting_room,
        function_declaration.request_it_support,
        function_declaration.see_leave_balance,
      ],
    },
  ],
});

const getModel = (previousChat: { role: string; content: string }[]) => {
  if (!previousChat.length) return GM.startChat();

  const history = previousChat.map(({ role, content }) => ({
    role,
    parts: [{ text: content }],
  }));

  return GM.startChat({ history });
};

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
