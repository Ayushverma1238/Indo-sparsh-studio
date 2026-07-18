import { useState } from "react";
import "./AIChatWidget.css";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hello 👋 I’m Indo AI. How can I help you today?" },
  ]);
  // const [inputMsg, setInputMsg] = useState("")
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/backend-php/api/chat.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
        }),
      });
  
      const data = await res.json();
  
      console.log(data);
    } catch (error) {
      console.log("Error sending message", error)
    }
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
