
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getSimpleExplanation = async (title: string, description: string): Promise<string> => {
  const prompt = `
    Please explain the following academic research topic in simple, accessible terms for a non-expert, layperson audience. 
    Avoid jargon and use analogies if helpful. Aim for a response around 100-150 words.

    Topic Title: "${title}"
    
    Topic Description: "${description}"

    Simplified Explanation:
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.5,
        topP: 0.95,
        topK: 64,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error generating content from Gemini API:", error);
    throw new Error("Failed to fetch explanation from the AI model.");
  }
};
