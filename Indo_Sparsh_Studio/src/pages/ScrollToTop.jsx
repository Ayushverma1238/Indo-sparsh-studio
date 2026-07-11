import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation(); // ⭐ important

  // Show arrow on scroll
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ⭐ AUTO SCROLL TO TOP ON ROUTE CHANGE
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or "smooth"
    });
  }, [pathname]);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-arrow ${show ? "show" : ""}`}
      onClick={goTop}
      aria-label="Scroll to top"
    >
      <span className="arrow-core"></span>
      <FaArrowUp />
    </button>
  );
}
