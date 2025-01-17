import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY } from "./key";
import function_declaration from "./function_declaration.json";

const genAI = new GoogleGenerativeAI(API_KEY);

export const getFreshModel = () => {
  return genAI
    .getGenerativeModel({ model: "gemini-2.0-flash-exp" })
    .startChat();
};

const GM = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  tools: [
    {
      functionDeclarations: Object.values(function_declaration) as any,
    },
  ],
});

export const getModel = (previousChat: { role: string; content: string }[]) => {
  if (!previousChat.length) return GM.startChat();

  const history = previousChat.map(({ role, content }) => ({
    role,
    parts: [{ text: content }],
  }));

  return GM.startChat({ history });
};
