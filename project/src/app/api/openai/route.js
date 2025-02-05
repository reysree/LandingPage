import { NextResponse } from "next/server";
import OPENAI from "openai";
import { PineconeStore } from "@langchain/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Pinecone } from "@pinecone-database/pinecone";
import { TextLoader } from "langchain/document_loaders/fs/text";

const systemprompt = `Your Name is Cypher. You are an AI assistant representing Sreeram Bangaru. Your role is to answer questions about Sreeram's background, experiences, skills, and aspirations as accurately as possible. Use the following guidelines:

1. Provide information only based on the context given from Sreeram's Info Document.
2. If asked about something not mentioned in the context, politely state that you don't have that information about Sreeram.
3. Maintain a professional and friendly tone, similar to how Sreeram would present himself.
4. Focus on Sreeram's academic background, projects, internships, extracurricular activities, and future goals as described in the document.
5. If asked about opinions or preferences, base your responses on the interests and values Sreeram expresses in his statement.
6. Do not invent or assume any information about Sreeram that is not explicitly stated in the provided context.
7. Always use markdown formatting when answering complex questions to make things eaier for the user to read.

Given the following context from Sreeram's Info document, please answer the user's question:

Context: {context}

User Question: {question}

Please provide a concise and helpful answer based on the given context and your general knowledge. Do not include any introductory phrases like "Based on the information provided" or "Sure, here's the answer". Start your response directly with the relevant information.`;
const openai = new OPENAI(process.env.OPENAI_API_KEY);
const OPEN_AI_KEY = process.env.OPENAI_API_KEY;
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME;

let vectorStore;
let fullDocument;

async function getVectorStore() {
  if (vectorStore) return vectorStore;

  console.log("Initializing vector store connection...");
  const pc = new Pinecone({
    apiKey: PINECONE_API_KEY,
  });
  const pineconeIndex = pc.index(PINECONE_INDEX_NAME);

  const embeddings = new OpenAIEmbeddings({ openAIApiKey: OPEN_AI_KEY });
  vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
    namespace: "production",
  });
  console.log("Vector store connection established.");

  return vectorStore;
}

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the incoming request JSON
    console.log("Received request:", body.messages[body.messages.length - 1]);

    const lastMessage = body.messages[body.messages.length - 1];
    if (!lastMessage || typeof lastMessage.content !== "string") {
      throw new Error(
        "Invalid format: last message is not a string or invalid content"
      );
    }
    const userQuestion = lastMessage.content;

    const vectorStore = await getVectorStore();
    console.log("Performing similarity search...");
    const relevantDocs = await vectorStore.similaritySearch(userQuestion, 3);
    console.log("Relevant documents retrieved:", relevantDocs.length);
    let context = relevantDocs.map((doc) => doc.pageContent).join("\n\n");
    const systemPrompt = `${systemprompt
      .replace("{context}", context)
      .replace("{question}", userQuestion)}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: systemprompt }, ...body.messages],
      //stream: true,
    });
    // const stream = new ReadableStream({
    //   async start(controller) {
    //     const encoder = new TextEncoder();
    //     try {
    //       for await (const chunk of response) {
    //         const content = chunk.choices[0]?.delta?.content;
    //         if (content) {
    //           const text = encoder.encode(content);
    //           controller.enqueue(text);
    //         }
    //       }
    //     } catch (err) {
    //       console.error("Error in stream processing:", err);
    //       controller.error(err);
    //     } finally {
    //       console.log("Stream completed.");
    //       controller.close();
    //     }
    //   },
    // });
    const aiMessage =
      response.choices?.[0]?.message?.content || "No response available";
    //console.log("OpenAI Response:", aiMessage);

    return NextResponse.json({
      role: "assistant",
      content: aiMessage,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
