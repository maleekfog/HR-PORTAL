
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

// Helper to generate responses from the HR Assistant model
export const generateHRResponse = async (userMessage: string, history: { role: 'user' | 'model'; text: string }[]) => {
  try {
    // Always use named parameter for apiKey and initialize inside the call for fresh key access
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const contents = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }));

    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        topP: 0.8,
      }
    });

    // Access the .text property directly to get the generated response
    return response.text || "I'm sorry, I couldn't process that. Please try again or contact HR directly.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to AI Assistant. Please check your connection.";
  }
};
