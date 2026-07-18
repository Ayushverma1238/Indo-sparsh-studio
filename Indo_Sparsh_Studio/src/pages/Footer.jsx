import "./Footer.css";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaFacebookF, FaRegCopy } from "react-icons/fa6";
import {
  footerServices,
  supports,
  policies,
  companies,
} from "../utils/quoteData.js";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import SocialLinks from "./SocialLinks.jsx";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isCopied, setIsCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  // ---- Theme: read from localStorage (key: "theme", values: "light" | "dark") ----
  // Applies the value as data-theme on <html> so the CSS overrides cascade
  // to the whole page, not just this component.
  useEffect(() => {
    const applyTheme = () => {
      const saved = localStorage.getItem("theme") || "dark";
      document.documentElement.setAttribute("data-theme", saved);
    };

    applyTheme();

    // Sync across tabs (native storage event only fires in OTHER tabs)
    window.addEventListener("storage", applyTheme);

    // Sync within the same tab: dispatch a custom event
    // e.g. window.dispatchEvent(new Event("themeChange"))
    // right after your toggle button calls localStorage.setItem("theme", ...)
    window.addEventListener("themeChange", applyTheme);

    return () => {
      window.removeEventListener("storage", applyTheme);
      window.removeEventListener("themeChange", applyTheme);
    };
  }, []);

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText("contact@indosparsh.com");
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  const handleSubscribe = async () => {
    try {
      setIsSending(true);
      const response = await fetch(`/backend-php/api/subscribe.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      });

      // console.log(response);

      if (response.ok) {
        setEmail("");
        console.log("Indo sparsh subscribed");
      }
    } catch (error) {
      console.error("error during subscribe", error.message);
    } finally {
      setTimeout(setIsSending(false), 700);
    }
  };

  return (
    <footer className="cyber-footer">
      <div className="footer-glow-line"></div>

      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-heading-website">
            <img src="/logo.png" alt="logo" />
            <h1>Indo Sparsh Studio</h1>
            
          </div>
          <p>
            IndoSparsh Studio helps businesses build a strong digital presence
            through modern websites, creative branding, logo design, video
            editing, and custom digital solutions. We transform ideas into
            impactful online experiences.
          </p>
          <div className="footer-email">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              value={email}
              id=""
              placeholder="Enter your email"
            />
            <button onClick={handleSubscribe} className="subscribe-btn">
              Subscribe for Updates
              <GoArrowUpRight
                className={isSending ? "send-arrow sending" : "send-arrow"}
              />
            </button>
          </div>
          <div className="footer-contact">
            <div className="mail-link">
              <Link to="mailto:contact@indosparsh.com?subject=Website Inquiry">
                contact@indosparsh.com
              </Link>
              <div onClick={handleCopy} className="mail-copy-icon">
                {isCopied ? (
                  <DotLottieReact
                    src="https://lottie.host/16120193-7a91-4fd0-93b3-a8a89a2a9bad/KuZC2V2tmt.lottie"
                    loop
                    autoplay
                  />
                ) : (
                  <DotLottieReact
                    src="https://lottie.host/627aacae-1dfd-4b06-b525-7122fffc80ce/QE5UWuRlT4.lottie"
                    loop
                    autoplay
                  />
                )}
              </div>
            </div>
            <p>
              or give us a call{" "}
              <Link to="tel:+918005352770"> +91 8005351770</Link>
            </p>
            
          </div>

          <div className="footer-review">
            <p>
              <span>4.7</span> from <span>90+</span> reviews
            </p>
            <div className="google-review">
              <img src="/images/google.svg" alt="" />
              <div className="review-star">
                <img src="/images/star.svg" alt="star" />
                <img src="/images/star.svg" alt="star" />
                <img src="/images/star.svg" alt="star" />
                <img src="/images/star.svg" alt="star" />
                <img src="/images/star.svg" alt="star" />
              </div>
            </div>
          </div>
          <div className="social-links">
              <SocialLinks />
            </div>
        </div>

        <div className="footer-right">
          <div className="footer-right-parts">
            <div className="footer-right-heading">SERVICES</div>
            <div className="footer-right-heading-content">
              {footerServices.map((item, idx) => (
                <Link to={item.path} key={idx}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-right-parts">
            <div className="footer-right-heading">COMPANY</div>
            <div className="footer-right-heading-content">
              {companies.map((item, idx) => (
                <Link to={`${item.path}`} key={idx}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-right-parts">
            <div className="footer-right-heading">SUPPORTS</div>
            <div className="footer-right-heading-content">
              {supports.map((item, idx) => (
                <Link to={item.path} key={idx}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-right-parts">
            <div className="footer-right-heading">POLICIES</div>
            <div className="footer-right-heading-content">
              {policies.map((item, idx) => (
                <Link to={item.path} key={idx}>
                  {item.name}
                </Link>
              ))}
              {/* <div className="policy-icons" >
                <Link to='#'><FaFacebookF/></Link>
                <Link to='#'><IoLogoInstagram/></Link>
                <Link to='#'><IoLogoWhatsapp/></Link>
              </div> */}
            </div>
          </div>
        </div>

        {/* <p>
          Copyright {new Date().getFullYear()} <span>Indo Sparsh Studio</span>.
          All rights reserved.
        </p> */}
      </div>

      <div className="copyright">
        <p>
          Copyright {new Date().getFullYear()} <span>Indo Sparsh Studio</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
