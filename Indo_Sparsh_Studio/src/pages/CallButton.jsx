import { FaPhoneAlt } from "react-icons/fa";
import "./FloatingButtons.css";

export default function CallButton() {
  return (
    <a href="tel:+918005351770" className="call-float" aria-label="Call Us">
      <FaPhoneAlt className="call-icon" />
    </a>
  );
}
