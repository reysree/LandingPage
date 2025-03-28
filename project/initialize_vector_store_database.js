import dotenv from "dotenv";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";

dotenv.config({ path: ".env.local" });

const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

console.log("PINECONE_API_KEY:", process.env.PINECONE_API_KEY);
console.log("PINECONE_INDEX_NAME:", process.env.PINECONE_INDEX_NAME);
console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);

async function initializeVectorStore() {
  if (!PINECONE_API_KEY || !PINECONE_INDEX_NAME || !OPENAI_API_KEY) {
    throw new Error("Missing required environment variables");
  }

  const pc = new Pinecone({
    apiKey: PINECONE_API_KEY,
  });
  const pineconeIndex = pc.index(PINECONE_INDEX_NAME);

  const loader = new TextLoader(
    "C:/Users/sreer/OneDrive/Desktop/portfolio/project/src/documents/sreeram_bangaru_info.txt"
  );
  const rawDocs = await loader.load();
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });
  const docs = await textSplitter.splitDocuments(rawDocs);
  console.log("Documents After Splitting:", docs);

  const embeddings = new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY });
  await PineconeStore.fromDocuments(docs, embeddings, {
    pineconeIndex,
    namespace: "production",
  });

  console.log("Vector store initialized and populated with data.");
}

initializeVectorStore().catch(console.error);
