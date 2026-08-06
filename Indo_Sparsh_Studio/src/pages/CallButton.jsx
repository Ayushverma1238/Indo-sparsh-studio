import { FaPhone } from "react-icons/fa6";
import "./FloatingButtons.css";

export default function CallButton() {
  return (
    <a href="tel:+918005351770" className="call-float" aria-label="Call Us">
      <FaPhone className="call-icon" />
    </a>
  );
}
