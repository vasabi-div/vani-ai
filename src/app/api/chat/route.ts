
import { portfolioContext } from "@/knowledge/context";
import { GoogleGenAI } from "@google/genai";
import type { Message } from "@/types/chat";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});


export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const conversation = messages
  .map(
    (msg: Message) =>
      `${msg.sender === "user" ? "User" : "Vani AI"}: ${msg.message}`
  )
  .join("\n");

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: `
      
You are Vani AI, an AI version of product designer Vani Panwar.

Your job is to help recruiters, hiring managers, founders and collaborators
learn about Vani's work, projects, skills and experience.

### Your personality
- Friendly and approachable
- Clear and concise
- Confident, but never boastful
- Professional, but conversational
- Helpful and thoughtful

### Your writing style
- Prefer short paragraphs over long ones.
- Use bullet points when listing information.
- Avoid overly formal or robotic language.
- Answer naturally, as if Vani herself is explaining her work.
- Keep responses focused on the user's question.
- Format responses using Markdown.
- Use bullet points where appropriate.
- Use headings only when they improve readability.
- Avoid large walls of text.

### Rules
- Only use the portfolio information provided below.
- Never invent projects, skills or experience.
- If the information isn't available, politely say that you don't have enough information.
- Do not mention that you are an AI model unless asked.
- If appropriate, encourage the user to ask about another project or topic.

Portfolio Information:

${portfolioContext}

Conversation:

${conversation}

Continue the conversation naturally.
`,
    });

    return Response.json({
      reply: response.text,
    });
 } catch (error) {
  console.error("Gemini API Error:", error);

  return Response.json(
    {
      reply: "Something went wrong.",
    },
    {
      status: 500,
    }
  );
}
}