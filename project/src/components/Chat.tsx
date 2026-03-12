"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, X } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE =
  "Hello! I'm Cypher, your all-knowing guide to Sreeram Bangaru. Feel free to ask me anything about him. We can talk about pricing later!";

/** AI Chatbot - CTA (Cypher GIF) and open behavior preserved from original.
 *  Panel interface restyled to match the design system. */
export function Chat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: INITIAL_MESSAGE },
  ]);
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;
    const userMsg: Message = { role: "user", content: message };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setMessage("");
    setLoading(true);
    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      if (!res.ok) throw new Error("API error");
      const aiMsg: Message = await res.json();
      setMessages([...updated, aiMsg]);
    } catch {
      setMessages([...updated, { role: "assistant", content: "Sorry, something went wrong. Try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── CTA: Cypher GIF - unchanged from original ── */}
      <motion.div
        className="fixed bottom-0 right-0 z-[70]"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 5.5, ease: "linear" }}
      >
        <motion.div
          className="absolute -top-12 right-10 text-white text-sm px-3 py-1.5 rounded-xl shadow-lg"
          style={{ background: "var(--accent-primary)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Pss.. Click me to know a secret
        </motion.div>
        <Image
          src="/cypher-watch.gif"
          alt="Chat with Cypher"
          width={200}
          height={200}
          onClick={() => setOpen((p) => !p)}
          className="cursor-pointer"
          priority={false}
        />
      </motion.div>

      {/* ── Chat Panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-0 right-4 z-[70] w-80 sm:w-96 rounded-t-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{
              height: "420px",
              background: "var(--bg-elevated)",
              border: "1px solid var(--border-strong)",
              borderBottom: "none",
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 border-b"
              style={{ borderColor: "var(--border-default)" }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#22c55e" }}
                />
                <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                  Cypher
                </span>
                <span className="eyebrow" style={{ color: "var(--text-muted)" }}>
                  / AI assistant
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex items-center justify-center w-7 h-7 rounded-lg transition-colors hover:bg-[var(--bg-overlay)]"
                style={{ color: "var(--text-muted)" }}
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[80%] text-sm leading-relaxed px-3 py-2 rounded-xl"
                    style={
                      msg.role === "assistant"
                        ? {
                            background: "var(--bg-overlay)",
                            color: "var(--text-secondary)",
                            borderRadius: "4px 12px 12px 12px",
                          }
                        : {
                            background: "var(--accent-primary)",
                            color: "#fff",
                            borderRadius: "12px 4px 12px 12px",
                          }
                    }
                  >
                    {msg.role === "assistant" ? (
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div
                    className="px-3 py-2 rounded-xl text-sm"
                    style={{ background: "var(--bg-overlay)", color: "var(--text-muted)", borderRadius: "4px 12px 12px 12px" }}
                  >
                    Thinking…
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div
              className="px-3 py-3 border-t"
              style={{ borderColor: "var(--border-default)" }}
            >
              <div
                className="flex items-center gap-2 rounded-xl px-3 py-2"
                style={{ background: "var(--bg-overlay)", border: "1px solid var(--border-default)" }}
              >
                <input
                  type="text"
                  placeholder="Ask about Sreeram…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 text-sm bg-transparent outline-none"
                  style={{ color: "var(--text-primary)" }}
                  aria-label="Chat message input"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading || !message.trim()}
                  aria-label="Send message"
                  className="flex items-center justify-center w-7 h-7 rounded-lg transition-colors disabled:opacity-40"
                  style={{ background: "var(--accent-primary)", color: "#fff" }}
                >
                  <Send size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
