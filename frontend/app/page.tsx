"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      const reply = data.reply ?? data.detail ?? "No response";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error: could not reach the backend." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-col h-screen bg-slate-50">
      {/* Header with Accenture purple accent bar */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="h-1 w-full" style={{ background: "#A100FF" }} />
        <div className="px-6 py-4 flex items-center gap-4">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0"
            style={{ background: "#A100FF" }}
          >
            MC
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-800">Mental Coach</h1>
            <p className="text-sm text-slate-500">Your supportive AI companion</p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.length === 0 && (
          <div className="text-center mt-16">
            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
              style={{ background: "#A100FF" }}
            >
              ✦
            </div>
            <p className="text-lg font-medium text-slate-700">Hey, I&apos;m your Mental Coach.</p>
            <p className="text-sm text-slate-400 mt-2 max-w-sm mx-auto leading-relaxed">
              I&apos;m here to help you reflect, stay grounded, and work through whatever&apos;s on your mind — stress, goals, emotions, or just the need to talk.
            </p>
            <p className="text-sm text-slate-400 mt-2">How are you feeling today?</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "text-white rounded-br-sm"
                  : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm shadow-sm"
              }`}
              style={msg.role === "user" ? { background: "#A100FF" } : {}}
            >
              {msg.role === "user" ? (
                <span className="whitespace-pre-wrap">{msg.content}</span>
              ) : (
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => <p className="font-bold text-base mb-1">{children}</p>,
                    h2: ({ children }) => <p className="font-semibold mb-1">{children}</p>,
                    h3: ({ children }) => <p className="font-semibold mb-1">{children}</p>,
                    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                    ul: ({ children }) => <ul className="list-disc pl-4 space-y-0.5 my-1">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-4 space-y-0.5 my-1">{children}</ol>,
                    li: ({ children }) => <li>{children}</li>,
                    p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                    hr: () => <hr className="my-2 border-slate-200" />,
                    code: ({ children }) => <code className="bg-slate-100 px-1 rounded text-xs font-mono">{children}</code>,
                  }}
                >
                  {msg.content}
                </ReactMarkdown>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
              <span className="flex gap-1 items-center">
                <span className="w-2 h-2 rounded-full animate-bounce [animation-delay:0ms]" style={{ background: "#A100FF" }} />
                <span className="w-2 h-2 rounded-full animate-bounce [animation-delay:150ms]" style={{ background: "#A100FF" }} />
                <span className="w-2 h-2 rounded-full animate-bounce [animation-delay:300ms]" style={{ background: "#A100FF" }} />
              </span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <form
        onSubmit={sendMessage}
        className="bg-white border-t border-slate-200 px-4 py-4 flex gap-3 items-end"
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage(e as unknown as React.FormEvent);
            }
          }}
          placeholder="Type a message… (Enter to send, Shift+Enter for new line)"
          rows={1}
          className="flex-1 resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-transparent placeholder-slate-400"
          style={{ outline: "none" }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #A100FF55")}
          onBlur={(e) => (e.target.style.boxShadow = "")}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="text-white rounded-xl px-5 py-3 text-sm font-medium transition-opacity disabled:opacity-40"
          style={{ background: "#A100FF" }}
        >
          Send
        </button>
      </form>
    </main>
  );
}
