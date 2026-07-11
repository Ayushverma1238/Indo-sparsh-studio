import { useEffect, useState } from "react";
import "./ScrollBeam.css";

export default function ScrollBeam() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = Math.min(scrollTop / docHeight, 1);
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="scroll-beam"
      style={{
        "--glow": 0.4 + progress * 1.2,
        "--scale": 0.85 + progress * 0.4,
        "--speed": `${2.5 - progress * 1.5}s`,
      }}
    >
      <span className="beam-core"></span>
    </div>
  );
}
