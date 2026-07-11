import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918005351770"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <span className="wa-ring"></span>
      <FaWhatsapp className="wa-icon" />
    </a>
  );
}
