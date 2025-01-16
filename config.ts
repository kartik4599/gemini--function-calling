import { GoogleGenerativeAI } from "@google/generative-ai";
import { function_declaration } from "./functions";
import { API_KEY } from "./key";

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
      functionDeclarations: [
        function_declaration.apply_for_leave,
        function_declaration.apply_for_wfh,
        function_declaration.book_meeting_room,
        function_declaration.request_it_support,
        function_declaration.see_leave_balance,
        function_declaration.see_attendance_log,
        function_declaration.see_latest_notification,
        function_declaration.see_lunch_menu,
        function_declaration.meal_planning,
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
