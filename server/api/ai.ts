import {
  createOpenAIModel,
  generateChatResponse,
} from "../services/ai-services";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { messages } = body;

  const id = messages.length.toString();

  const openAiApiKey = useRuntimeConfig().openaiApiKey;
  const openAiModel = createOpenAIModel(openAiApiKey);

  // const ollamaModel = createOllamaModel();

  const response = await generateChatResponse(openAiModel, messages);

  // const model = createOllamaModel();

  return {
    id,
    role: "assistant",
    content: response,
  };
});
