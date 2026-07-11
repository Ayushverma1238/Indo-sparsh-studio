import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import "./SocialLinks.css";

export default function SocialLinks() {
  return (
    <div className="social-mini">
      <h3>Connect With Us</h3>

      <div className="social-mini-row">
        <a
          href="https://www.facebook.com/indosparshofficial"
          target="_blank"
          rel="noreferrer"
          className="s-icon facebook"
          title="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/indosparshofficial"
          target="_blank"
          rel="noreferrer"
          className="s-icon instagram"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/indosparshofficial/"
          target="_blank"
          rel="noreferrer"
          className="s-icon linkedin"
          title="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://x.com/indoSparsh"
          target="_blank"
          rel="noreferrer"
          className="s-icon twitter"
          title="X"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://youtube.com/@indosparshofficial"
          target="_blank"
          rel="noreferrer"
          className="s-icon youtube"
          title="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}
