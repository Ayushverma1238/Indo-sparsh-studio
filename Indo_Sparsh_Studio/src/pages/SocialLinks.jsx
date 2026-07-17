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
          style={{color:"#1877f2", border:"2px solid #1877f2"}}
          href="https://www.facebook.com/indosparshofficial"
          target="_blank"
          rel="noreferrer"
          className="s-icon facebook"
          title="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
        style={{color:"#e1306c", border:"2px solid #e1306c"}}
          href="https://www.instagram.com/indosparshofficial"
          target="_blank"
          rel="noreferrer"
          className="s-icon instagram"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
        style={{color:"#0a66c2", border:'2px solid #0a66c2'}}
          href="https://www.linkedin.com/company/indosparshofficial/"
          target="_blank"
          rel="noreferrer"
          className="s-icon linkedin"
          title="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
        style={{color:"#22d3ee", border:"2px solid #22d3ee"}}
          href="https://x.com/indoSparsh"
          target="_blank"
          rel="noreferrer"
          className="s-icon twitter"
          title="X"
        >
          <FaXTwitter />
        </a>
        <a
        style={{color:"#ff0033", border:"2px solid #ff0033"}}
          href="https://youtube.com/@indosparshstudio"
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
