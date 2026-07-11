import { useEffect, useState } from "react";
import "./AIHackerCursor.css";

export default function AIHackerCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [click, setClick] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const down = () => {
      setClick(true);
      setTimeout(() => setClick(false), 160);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
    };
  }, []);

  return (
    <>
      {/* AI glow trail */}
      <div className="ai-glow" style={{ left: pos.x, top: pos.y }} />

      {/* AI neural cursor */}
      <div
        className={`ai-cursor ${click ? "fire" : ""}`}
        style={{ left: pos.x, top: pos.y }}
      >
        <span className="ai-ring"></span>
        <span className="ai-ring r2"></span>
        <span className="ai-core"></span>
      </div>
    </>
  );
}
