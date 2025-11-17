
import { GoogleGenAI } from "@google/genai";
import { STRATEGIC_PROMPT } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generatePlan = async (businessGoal: string): Promise<string> => {
  const fullPrompt = `${STRATEGIC_PROMPT}\n"${businessGoal}"`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: fullPrompt
    });
    return response.text;
  } catch (error) {
    console.error("Error generating strategic plan:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate plan: ${error.message}`);
    }
    throw new Error("An unknown error occurred while communicating with the Gemini API.");
  }
};
