import { useEffect } from "react";
import "./About.css";
import ScrollBeam from "./ScrollBeam";
import {
  FaBrain,
  FaCogs,
  FaBolt,
  FaShieldAlt,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

export default function About() {
  useEffect(() => {
    document.title = "About | Indo Sparsh Studio";
  }, []);
  return (
    <>
      <section className="about2">
        {/* HERO SPLIT */}
        <div className="about2-hero">
          <div className="about2-left">
            <h1>
              We Are <span>Indo Sparsh</span>
            </h1>
            <p>
              A creative-tech studio crafting futuristic digital experiences. We
              blend design, development, and intelligence to build products that
              feel alive.
            </p>

            <div className="about2-stats">
              <div>
                <h2>50+</h2>
                <span>Projects</span>
              </div>
              <div>
                <h2>20+</h2>
                <span>Clients</span>
              </div>
              <div>
                <h2>5+</h2>
                <span>Years</span>
              </div>
            </div>
          </div>

          <div className="about2-right">
            <div className="energy-core">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* GLASS CARDS */}
        <div className="about2-cards">
          <div className="a2-card">
            <div className="a2-icon">
              <FaRocket />
            </div>
            <h3>Mission</h3>
            <p>
              Empower brands with intelligent digital solutions that scale,
              perform, and inspire.
            </p>
          </div>

          <div className="a2-card glow">
            <div className="a2-icon">
              <FaBrain />
            </div>
            <h3>Vision</h3>
            <p>
              To shape the future of human-centered technology through immersive
              experiences.
            </p>
          </div>

          <div className="a2-card">
            <div className="a2-icon">
              <FaBolt />
            </div>
            <h3>What We Do</h3>
            <p>
              Web & app development, AI integrations, UI/UX systems, and digital
              growth platforms.
            </p>
          </div>
        </div>
      </section>

      <ScrollBeam />

      {/* ================= WHY INDO SPARSH LEADS ================= */}
      <section className="about-leader">
        <div className="leader-header">
          <h1>
            What Makes <span>Indo Sparsh Studio</span> <br />
            The Leading Agency?
          </h1>
          <p>
            We don’t follow trends — we engineer digital dominance through
            innovation, precision, and long-term partnerships.
          </p>
        </div>

        <div className="leader-grid">
          <div className="leader-card glow">
            <div className="leader-icon">
              <FaBrain />
            </div>
            <h3>Expert-Driven Strategy</h3>
            <p>
              Every project is crafted by experienced IT, design, and growth
              experts — not templates or shortcuts.
            </p>
          </div>

          <div className="leader-card">
            <div className="leader-icon">
              <FaCogs />
            </div>
            <h3>End-to-End Execution</h3>
            <p>
              From ideation to deployment, security to scalability — everything
              is handled under one roof.
            </p>
          </div>

          <div className="leader-card glow">
            <div className="leader-icon">
              <FaBolt />
            </div>
            <h3>Speed with Stability</h3>
            <p>
              Fast delivery without compromising performance, security, or
              future scalability.
            </p>
          </div>

          <div className="leader-card">
            <div className="leader-icon">
              <FaShieldAlt />
            </div>
            <h3>Security-First Architecture</h3>
            <p>
              Cyber-aware systems, secure APIs, and payment-ready
              infrastructures are built into our core.
            </p>
          </div>

          <div className="leader-card glow">
            <div className="leader-icon">
              <FaChartLine />
            </div>
            <h3>Result-Oriented Mindset</h3>
            <p>
              We focus on conversions, growth, automation, and ROI — not just
              visuals.
            </p>
          </div>

          <div className="leader-card">
            <div className="leader-icon">
              <FaRocket />
            </div>
            <h3>Future-Ready Technology</h3>
            <p>
              Modern stacks, AI integrations, and scalable systems that grow
              with your business.
            </p>
          </div>
        </div>
      </section>

      <ScrollBeam />

      {/* ================= LET'S GET IN TOUCH ================= */}
      <section className="about-cta">
        <div className="cta-glass">
          <h1>
            Let’s <span>Get In Touch</span>
          </h1>

          <p>
            Ready to transform your idea into a powerful digital experience?
            Let’s collaborate and build something extraordinary together.
          </p>

          <a href="https://wa.me/918005351770" className="cta-btn">
            Join Us
            <span className="cta-glow"></span>
          </a>
        </div>
      </section>
    </>
  );
}
