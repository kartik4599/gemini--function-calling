import Express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyCHv9k3f7aW_cE_V7HqhVcDeXmLH_oO-HU";
const app = Express();

const controlLightFunctionDeclaration = {
  name: "controlLight",
  parameters: {
    type: "OBJECT",
    description: "Set the brightness and color temperature of a room light.",
    properties: {
      brightness: {
        type: "NUMBER",
        description:
          "Light level from 0 to 100. Zero is off and 100 is full brightness.",
      },
      colorTemperature: {
        type: "STRING",
        description:
          "Color temperature of the light fixture which can be `daylight`, `cool` or `warm`.",
      },
    },
    required: ["brightness", "colorTemperature"],
  },
};

async function setLightValues(brightness, colorTemp) {
  return {
    brightness: brightness,
    colorTemperature: colorTemp,
  };
}

const functions = {
  controlLight: ({ brightness, colorTemperature }) => {
    return setLightValues(brightness, colorTemperature);
  },
};

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  tools: {
    functionDeclarations: [controlLightFunctionDeclaration],
  },
});

const chat = model.startChat();
const prompt = "Brighter the lights so the room feels cozy and warm.";

app.get("/", async (req, res) => {
  try {
    const result = await chat.sendMessage(prompt);
    const call = result.response.functionCalls()[0];
    if (!call) res.json(call);

    const apiResponse = await functions[call.name](call.args);
    console.log({ apiResponse, call: call.args });

    const result2 = await chat.sendMessage([
      {
        functionResponse: {
          name: call.name,
          response: apiResponse,
        },
      },
    ]);

    res.json(result2);
  } catch (e) {
    console.log(e);
  }
});

app.listen(5000);
