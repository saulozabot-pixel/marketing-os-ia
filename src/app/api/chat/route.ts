import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, template } = await req.json();

  // Custom prompt engineering based on the selected template
  let systemPrompt = "Você é um especialista em marketing digital e copywriter de elite.";
  
  if (template === "youtube") {
    systemPrompt += " Sua tarefa é criar roteiros virais para o YouTube, com ganchos fortes, conteúdo educativo/entretido e CTAs persuasivos.";
  } else if (template === "ads") {
    systemPrompt += " Sua tarefa é criar copies de anúncios de alta conversão (Direct Response), focando na dor do cliente e oferecendo uma solução irresistível.";
  } else if (template === "social") {
    systemPrompt += " Sua tarefa é criar conteúdo engajador para redes sociais, com legendas curtas, emojis e foco em compartilhamento.";
  }

  const result = streamText({
    model: google("gemini-1.5-pro"), // Defaulting to Gemini for power
    system: systemPrompt,
    messages,
  });

  return result.toDataStreamResponse();
}
