import React, { useState, useEffect, useRef } from "react";
import "./GraphicDesign.css";
import {useNavigate} from 'react-router-dom'

/* ---------- scroll-reveal wrapper ---------- */
function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`gd-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------- data ---------- */
const tools = [
  "Illustrator", "Photoshop", "Figma", "InDesign", "Procreate",
  "After Effects", "Canva Pro", "Lightroom", "Blender",
];

const portfolio = [
  { title: "Solstice Coffee", category: "Logo & Identity", size: "tall", gradient: "linear-gradient(160deg,#FF4B3E,#FFC738)" },
  { title: "Neon Nights Poster", category: "Print Design", size: "short", gradient: "linear-gradient(160deg,#2F5CFF,#FF4B3E)" },
  { title: "Verdant Skincare", category: "Packaging", size: "medium", gradient: "linear-gradient(160deg,#16161A,#2F5CFF)" },
  { title: "Weekend Market", category: "Social Creative", size: "medium", gradient: "linear-gradient(160deg,#FFC738,#FF4B3E)" },
  { title: "Cartography Series", category: "Illustration", size: "tall", gradient: "linear-gradient(160deg,#2F5CFF,#FFC738)" },
  { title: "Fernbank Rebrand", category: "Brand Identity", size: "short", gradient: "linear-gradient(160deg,#FF4B3E,#16161A)" },
  { title: "Pulse App", category: "UI Design", size: "medium", gradient: "linear-gradient(160deg,#FFC738,#2F5CFF)" },
  { title: "Harvest Fest", category: "Print Design", size: "short", gradient: "linear-gradient(160deg,#16161A,#FF4B3E)" },
];

const process = [
  { step: "01", title: "Brief", text: "We get specific about audience, tone, and where the design will actually live." },
  { step: "02", title: "Concept", text: "Two or three directions, explored fast, before we commit to one." },
  { step: "03", title: "Design", text: "The chosen direction, refined round by round against real feedback." },
  { step: "04", title: "Deliver", text: "Every file format you need, organized and ready to hand to print or dev." },
];

const capabilities = [
  { title: "Logo & Identity", text: "Marks, type systems, and guidelines built to hold up at any size." },
  { title: "Print Design", text: "Posters, packaging, and collateral designed for the press, not just the screen." },
  { title: "Packaging", text: "Structural and surface design that stands out on a crowded shelf." },
  { title: "Social Creative", text: "Templates and one-offs built for how each platform actually gets scrolled." },
  { title: "UI Design", text: "Interface design that a dev team can build from without guesswork." },
  { title: "Illustration", text: "Custom illustration for editorial, product, or brand work." },
];

const testimonials = [
  { quote: "Every round of feedback got a same-day turnaround without losing quality.", name: "Renee Castillo", role: "Marketing Lead, Solstice" },
  { quote: "The identity they built is still the first thing people mention about our brand.", name: "Tomás Rivera", role: "Founder, Verdant" },
];

export default function GraphicDesignPage() {
  const navigate = useNavigate()
  return (
    <div className="gd">


      {/* ---------- Hero ---------- */}
      <section className="gd-hero">
        <span className="gd-shape gd-shape--circle" aria-hidden="true" />
        <span className="gd-shape gd-shape--square" aria-hidden="true" />
        <span className="gd-shape gd-shape--triangle" aria-hidden="true" />

        <div className="gd-hero__inner">
          <span className="gd-eyebrow">Graphic Design</span>
          <h1 className="gd-hero__headline">
            <span className="gd-word gd-word--a">Design</span>
            <span className="gd-word gd-word--b">that</span>
            <span className="gd-word gd-word--c">gets</span>
            <br />
            <span className="gd-word gd-word--d">noticed.</span>
          </h1>
          <p className="gd-hero__subtext">
            Logos, packaging, print, and digital creative — designed to hold
            attention for longer than a scroll.
          </p>
          <div className="gd-hero__cta-row">
            <a href="/blog" className="gd-btn gd-btn--primary">View portfolio</a>
            <a href="/request-quote" className="gd-btn gd-btn--ghost">Start a project</a>
          </div>
        </div>
      </section>

      {/* ---------- Tools marquee ---------- */}
      <div className="gd-marquee">
        <div className="gd-marquee__track">
          {[...tools, ...tools].map((t, i) => (
            <span className="gd-marquee__item" key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* ---------- Portfolio masonry ---------- */}
      <section className="gd-section" id="work">
        <Reveal className="gd-section__head">
          <span className="gd-kicker">Selected work</span>
          <h2 className="gd-h2">A few pieces from the studio</h2>
          <p className="gd-lead">A mix of identity, print, and digital work across a handful of clients.</p>
        </Reveal>

        <div className="gd-masonry">
          {portfolio.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className={`gd-piece gd-piece--${item.size}`}>
              <div className="gd-piece__media" style={{ background: item.gradient }}>
                <span className="gd-piece__category">{item.category}</span>
              </div>
              <h3 className="gd-piece__title">{item.title}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="gd-section gd-section--muted">
        <Reveal className="gd-section__head">
          <span className="gd-kicker">How we work</span>
          <h2 className="gd-h2">Four steps from brief to final files</h2>
        </Reveal>
        <div className="gd-process">
          <div className="gd-process__line" aria-hidden="true" />
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 100} className="gd-process__item">
              <span className="gd-process__step">{p.step}</span>
              <h3 className="gd-process__title">{p.title}</h3>
              <p className="gd-process__text">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Capabilities ---------- */}
      <section className="gd-section">
        <Reveal className="gd-section__head">
          <span className="gd-kicker">What we design</span>
          <h2 className="gd-h2">Everything from a wordmark to a full campaign</h2>
        </Reveal>
        <div className="gd-grid">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 70} className="gd-card why-card">
              <h3 className="gd-card__title">{c.title}</h3>
              <p className="gd-card__text">{c.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="gd-section gd-section--muted">
        <Reveal className="gd-section__head">
          <span className="gd-kicker">Client feedback</span>
          <h2 className="gd-h2">What it's like working with the studio</h2>
        </Reveal>
        <div className="gd-grid gd-grid--2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="gd-quote why-card">
              <p className="gd-quote__text">"{t.quote}"</p>
              <div className="gd-quote__author">
                <span className="gd-quote__name">{t.name}</span>
                <span className="gd-quote__role">{t.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="gd-cta" id="contact">
        <Reveal className="gd-cta__inner">
          <h2 className="gd-cta__title">Have something that needs designing?</h2>
          <p className="gd-cta__text">Tell us what it is — we'll reply with next steps within a day.</p>
          <div className="gd-hero__cta-row">
            <button onClick={() => navigate("/request-quote")} className="gd-btn gd-btn--dark">Start a project</button>
            <button onClick={() => navigate('/blog')} className="gd-btn gd-btn--ghost-light">View portfolio</button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}