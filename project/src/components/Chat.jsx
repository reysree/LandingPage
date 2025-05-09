"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react"; // Chat icon
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";

const Chat = () => {
  const initial_message =
    "Hello! I'm Cypher, your all-knowing guide to Sreeram Bangaru. Feel free to ask me anything about him. We can talk about pricing later!";
  const [chatOpen, SetChatOpen] = useState(false);
  const [message, SetMessage] = useState("");
  const [chatMessages, SetChatMessages] = useState([
    { role: "assistant", content: initial_message },
  ]);

  const handleChatBox = () => {
    SetChatOpen(!chatOpen);
  };

  const handleMessageChange = (e) => {
    SetMessage(e.target.value);
  };

  const handleChatMessage = async () => {
    if (message.trim() !== "") {
      const userMessage = { role: "user", content: message };
      const updatedMessage = [...chatMessages, userMessage];
      SetChatMessages(updatedMessage);
      SetMessage("");
      try {
        const response = await fetch("/api/openai", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ messages: updatedMessage }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data from server");
        }
        const aiMessage = await response.json();
        //console.log("the response received to chat window : ", aiMessage);
        SetChatMessages([...updatedMessage, aiMessage]);
      } catch (error) {
        console.error(error);
      }
      //console.log(chatMessages);
    }
  };

  return (
    <div>
      <motion.div
        className="fixed bottom-0 right-0"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 5.5, ease: "linear" }}
      >
        <motion.div
          className="absolute -top-12 right-10 bg-blue-500 text-white px-4 py-2 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p>Pss.. Click me to know a secret</p>
        </motion.div>
        <Image
          src={"/cypher-watch.gif"}
          alt="cypher-watch"
          width={200}
          height={200}
          onClick={handleChatBox}
        ></Image>
      </motion.div>
      <motion.div
        className="fixed bottom-0 right-0 bg-white mr-2 w-[25%] h-[50%] shadow-lg rounded-t-lg flex flex-col justify-between"
        initial={{ y: "100%" }} // Starts completely off-screen
        animate={{ y: chatOpen ? 0 : "100%" }} // Slides up into view or back down
        transition={{ duration: 1 }} // Smooth animation
      >
        <div className="flex justify-between items-center border-b-2">
          <h2 className="text-lg pl-4 font-bold">Chat</h2>
          <Button
            onClick={handleChatBox}
            className="text-white font-bold bg-red-700"
          >
            Close
          </Button>
        </div>
        <div className="flex-grow p-4 overflow-y-auto">
          {chatMessages.map((msg, index) =>
            msg.role === "assistant" ? (
              <div
                key={index}
                className="bg-gray-200 text-black p-2 mb-2 rounded shadow-sm"
              >
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            ) : (
              <div
                key={index}
                className="bg-blue-600 text-white p-2 mb-2 rounded shadow-sm"
              >
                {msg.content}
              </div>
            )
          )}
        </div>
        <div className="p-4 border-t flex flex-row">
          <Input
            type="text"
            placeholder="Type your message"
            value={message}
            onChange={handleMessageChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleChatMessage();
              }
            }}
          />
          <Button
            className="bg-blue-600 text-white"
            onClick={handleChatMessage}
          >
            Send
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Chat;
