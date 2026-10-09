import { useState, useRef, useEffect } from "react";
import "./AIChatWidget.css";
import { useChat } from "../context/ChatContext";

function parseMessage(raw) {
  if (!raw) return [];

  // Normalise line endings and split into blank-line-separated blocks
  const blocks = raw
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  const parsed = [];

  blocks.forEach((block) => {
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    const isList = lines.every((l) => /^[-•*]\s+/.test(l));

    if (isList && lines.length > 0) {
      parsed.push({
        type: "ul",
        items: lines.map((l) => l.replace(/^[-•*]\s+/, "")),
      });
    } else {
      // A block with no blank-line separation can still contain a mix
      // of a lead-in line plus bullet lines (common LLM formatting) -
      // split those out too.
      const leadLines = [];
      const bulletLines = [];
      lines.forEach((l) => {
        if (/^[-•*]\s+/.test(l)) bulletLines.push(l.replace(/^[-•*]\s+/, ""));
        else leadLines.push(l);
      });

      if (leadLines.length) {
        parsed.push({ type: "p", text: leadLines.join(" ") });
      }
      if (bulletLines.length) {
        parsed.push({ type: "ul", items: bulletLines });
      }
    }
  });

  return parsed;
}

// Helper function to detect and render social links
function renderTextWithLinks(text) {
  if (!text) return null;

  // Social media URL patterns
  const urlPatterns = [
    // Instagram
    {
      regex: /(?:https?:\/\/)?(?:www\.)?(?:instagram\.com\/)([^\s]+)/gi,
      icon: "📸",
      label: "Instagram"
    },
    // Facebook
    {
      regex: /(?:https?:\/\/)?(?:www\.)?(?:facebook\.com\/)([^\s]+)/gi,
      icon: "👍",
      label: "Facebook"
    },
    // Twitter/X
    {
      regex: /(?:https?:\/\/)?(?:www\.)?(?:twitter\.com\/|x\.com\/)([^\s]+)/gi,
      icon: "🐦",
      label: "Twitter"
    },
    // YouTube
    {
      regex: /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/|youtu\.be\/)([^\s]+)/gi,
      icon: "▶️",
      label: "YouTube"
    },
    // LinkedIn
    {
      regex: /(?:https?:\/\/)?(?:www\.)?(?:linkedin\.com\/)([^\s]+)/gi,
      icon: "💼",
      label: "LinkedIn"
    },
    // TikTok
    {
      regex: /(?:https?:\/\/)?(?:www\.)?(?:tiktok\.com\/)([^\s]+)/gi,
      icon: "🎵",
      label: "TikTok"
    },
    // General URL (fallback)
    {
      regex: /(https?:\/\/[^\s]+)/gi,
      icon: "🔗",
      label: "Link"
    }
  ];

  // Check if text contains social media links
  let hasSocialLinks = false;
  let parts = [];

  // Try to detect social media links
  for (const pattern of urlPatterns) {
    const matches = text.match(pattern.regex);
    if (matches && matches.length > 0) {
      hasSocialLinks = true;
      
      // Split text by the matched URLs
      let remainingText = text;
      let lastIndex = 0;
      
      pattern.regex.lastIndex = 0;
      let match;
      while ((match = pattern.regex.exec(text)) !== null) {
        const url = match[0];
        const index = match.index;
        
        // Add text before the URL
        if (index > lastIndex) {
          const textBefore = text.substring(lastIndex, index);
          if (textBefore.trim()) {
            parts.push({ type: 'text', content: textBefore });
          }
        }
        
        // Add the URL as a clickable link with icon
        parts.push({ 
          type: 'social-link', 
          url: url.startsWith('http') ? url : `https://${url}`,
          display: url,
          icon: pattern.icon,
          label: pattern.label
        });
        
        lastIndex = index + url.length;
      }
      
      // Add remaining text after the last URL
      if (lastIndex < text.length) {
        const remaining = text.substring(lastIndex);
        if (remaining.trim()) {
          parts.push({ type: 'text', content: remaining });
        }
      }
      
      break; // Stop after first matching pattern
    }
  }

  // If no social links found, return plain text
  if (!hasSocialLinks) {
    // Check for other URLs as fallback
    const urlRegex = /(https?:\/\/[^\s]+)/gi;
    const matches = text.match(urlRegex);
    
    if (matches && matches.length > 0) {
      let remainingText = text;
      let lastIndex = 0;
      
      urlRegex.lastIndex = 0;
      let match;
      while ((match = urlRegex.exec(text)) !== null) {
        const url = match[0];
        const index = match.index;
        
        if (index > lastIndex) {
          const textBefore = text.substring(lastIndex, index);
          if (textBefore.trim()) {
            parts.push({ type: 'text', content: textBefore });
          }
        }
        
        parts.push({ 
          type: 'link', 
          url: url,
          display: url
        });
        
        lastIndex = index + url.length;
      }
      
      if (lastIndex < text.length) {
        const remaining = text.substring(lastIndex);
        if (remaining.trim()) {
          parts.push({ type: 'text', content: remaining });
        }
      }
      
      return (
        <span>
          {parts.map((part, index) => {
            if (part.type === 'social-link') {
              return (
                <a 
                  key={index}
                  href={part.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={part.label}
                >
                  <span className="social-icon">{part.icon}</span>
                  <span className="social-label">{part.label}</span>
                  <span className="social-url">{part.display}</span>
                </a>
              );
            } else if (part.type === 'link') {
              return (
                <a 
                  key={index}
                  href={part.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {part.url}
                </a>
              );
            } else {
              return <span key={index}>{part.content}</span>;
            }
          })}
        </span>
      );
    }
    
    return <span>{text}</span>;
  }

  return (
    <span>
      {parts.map((part, index) => {
        if (part.type === 'social-link') {
          return (
            <a 
              key={index}
              href={part.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={part.label}
            >
              <span className="social-icon">{part.icon}</span>
              <span className="social-label">{part.label}</span>
              <span className="social-url">{part.display}</span>
            </a>
          );
        } else {
          return <span key={index}>{part.content}</span>;
        }
      })}
    </span>
  );
}

function MessageContent({ text }) {
  const blocks = parseMessage(text);

  // Fallback: if parsing produced nothing (e.g. a one-liner), just
  // show the raw text with link detection
  if (blocks.length === 0) {
    return <p>{renderTextWithLinks(text)}</p>;
  }

  return (
    <>
      {blocks.map((block, i) =>
        block.type === "ul" ? (
          <ul key={i}>
            {block.items.map((item, j) => (
              <li key={j}>{renderTextWithLinks(item)}</li>
            ))}
          </ul>
        ) : (
          <p key={i}>{renderTextWithLinks(block.text)}</p>
        )
      )}
    </>
  );
}

export default function AIChatWidget() {
  const { open, setOpen } = useChat();
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hello 👋 I'm Indo AI. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const bodyRef = useRef(null);

  // Always scroll to the latest message when the list changes
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    // 1. Push the user's message into the array immediately
    const userMsg = { from: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/backend-php/api/chat.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
        }),
      });

      if (!res.ok) throw new Error(`Server responded ${res.status}`);

      const data = await res.json();

      // 2. Push the AI's reply into the same array - adjust the key
      //    below (data.reply) to whatever field your backend returns.
      const aiText = data.reply || "Hmm, I didn't get a response for that.";
      setMessages((prev) => [...prev, { from: "ai", text: aiText }]);
    } catch (error) {
      console.log("Error sending message", error);
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "⚠️ Couldn't reach the server. Please try again." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={``}>
      {/* Floating Button */}
      <div className="ai-chat-btn" onClick={() => setOpen(!open)}>
        🤖
      </div>

      {/* Chat Box */}
      <div className={`ai-chat-box ${open ? "active" : ""}`}>
        <div className="ai-chat-header">
          <span className="ai-chat-title">
            <span className="ai-status-dot" />
            Indo AI Assistant
          </span>
        </div>

        <div className="ai-chat-body" ref={bodyRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`chat-row ${msg.from}`}>
              <div className={`chat-msg ${msg.from}`}>
                <MessageContent text={msg.text} />
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chat-row ai">
              <div className="chat-msg ai typing-msg">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}
        </div>

        <form className="ai-chat-input" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Send message"
          >
            ➤
          </button>
        </form>
      </div>
    </div>
  );
}