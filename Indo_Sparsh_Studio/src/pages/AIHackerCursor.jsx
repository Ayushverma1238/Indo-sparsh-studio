import { useEffect, useRef, useState } from "react";
import "./AIHackerCursor.css";

// export default function AIHackerCursor() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const [click, setClick] = useState(false);

//   useEffect(() => {
//     const move = (e) => {
//       setPos({ x: e.clientX, y: e.clientY });
//     };

//     const down = () => {
//       setClick(true);
//       setTimeout(() => setClick(false), 160);
//     };

//     window.addEventListener("mousemove", move);
//     window.addEventListener("mousedown", down);

//     return () => {
//       window.removeEventListener("mousemove", move);
//       window.removeEventListener("mousedown", down);
//     };
//   }, []);

//   return (
//     <>
//       {/* AI glow trail */}
//       <div className="ai-glow" style={{ left: pos.x, top: pos.y }} />

//       {/* AI neural cursor */}
//       <div
//         className={`ai-cursor ${click ? "fire" : ""}`}
//         style={{ left: pos.x, top: pos.y }}
//       >
//         <span className="ai-ring"></span>
//         <span className="ai-ring r2"></span>
//         <span className="ai-core"></span>
//       </div>
//     </>
//   );
// }

// import { useEffect, useRef } from "react";
// import "./AiHackerCursor.css"

export default function AIHackerCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const addHover = () => cursor.classList.add("hover");
    const removeHover = () => cursor.classList.remove("hover");

    const click = () => {
      cursor.classList.add("click");
      setTimeout(() => cursor.classList.remove("click"), 250);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", click);

    const elements = document.querySelectorAll("a, button");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", click);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div ref={cursorRef} className="glass-cursor">
      <div className="glass-dot"></div>
    </div>
  );
}


