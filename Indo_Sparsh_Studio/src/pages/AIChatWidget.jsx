import { useState } from "react";
import "./AIChatWidget.css";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hello 👋 I’m Indo AI. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Fake AI reply (replace later with real AI / API)
    setTimeout(() => {
      const aiMsg = {
        from: "ai",
        text: "Thanks for reaching out! Our team will contact you shortly. 🚀",
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="ai-chat-btn" onClick={() => setOpen(true)}>
        🤖
      </div>

      {/* Chat Box */}
      <div className={`ai-chat-box ${open ? "active" : ""}`}>
        <div className="ai-chat-header">
          <span>Indo AI Assistant</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="ai-chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.from}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <form className="ai-chat-input" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">➤</button>
        </form>
      </div>
    </>
  );
}
