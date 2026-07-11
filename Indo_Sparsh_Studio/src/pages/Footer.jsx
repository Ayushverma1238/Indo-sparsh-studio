import "./Footer.css";

export default function Footer() {
  return (
    <footer className="cyber-footer">
      <div className="footer-glow-line"></div>

      <div className="footer-content">
        <p>
          Copyright {new Date().getFullYear()} <span>Indo Sparsh Studio</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
