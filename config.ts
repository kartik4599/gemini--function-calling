import { GoogleGenerativeAI } from "@google/generative-ai";
import { function_declaration } from "./functions";

const API_KEY = "Your Key";

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

export const getModel = (previousChat: { role: string; content: string }[]) => {
  if (!previousChat.length) return GM.startChat();

  const history = previousChat.map(({ role, content }) => ({
    role,
    parts: [{ text: content }],
  }));

  return GM.startChat({ history });
};
