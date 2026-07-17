import React, { useState, useEffect, useRef } from "react";
import "./BusinessConsultancy.css";
import { Link } from "react-router-dom";

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
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`bc-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------- animated KPI ring ---------- */
function KpiRing({ percent, label, prefix = "", suffix = "%" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(0);
  const radius = 46;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
          const duration = 1200;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(percent * eased));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.unobserve(el);
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percent]);

  const offset = circumference - (Math.min(percent, 100) / 100) * circumference;

  return (
    <div className="bc-kpi" ref={ref}>
      <svg className="bc-kpi__ring" viewBox="0 0 110 110">
        <circle className="bc-kpi__track" cx="55" cy="55" r={radius} />
        <circle
          className="bc-kpi__fill"
          cx="55"
          cy="55"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: visible ? offset : circumference,
          }}
        />
      </svg>
      <div className="bc-kpi__value">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="bc-kpi__label">{label}</div>
    </div>
  );
}

/* ---------- data ---------- */
const services = [
  {
    title: "Strategy & Planning",
    text: "A clear three-year plan built around where the market is actually heading.",
  },
  {
    title: "Operations Consulting",
    text: "Process audits that find the bottleneck no one's been willing to name.",
  },
  {
    title: "Financial Advisory",
    text: "Forecasting, unit economics, and a runway plan you can defend to investors.",
  },
  {
    title: "Market Expansion",
    text: "Entry plans for new regions or segments, sized to your actual capacity.",
  },
  {
    title: "Change Management",
    text: "Restructures and transitions that keep the team functioning, not just informed.",
  },
  {
    title: "Risk & Compliance",
    text: "Frameworks that hold up under audit, not just under a slide deck.",
  },
];

const roadmap = [
  {
    step: "01",
    title: "Assess",
    text: "A structured audit of the business, the market, and the gap between them.",
  },
  {
    step: "02",
    title: "Strategize",
    text: "A prioritized plan, with tradeoffs made explicit instead of hidden.",
  },
  {
    step: "03",
    title: "Execute",
    text: "Hands-on delivery alongside your team, not a handoff after the deck.",
  },
  {
    step: "04",
    title: "Scale",
    text: "Systems and metrics that keep working after the engagement ends.",
  },
];

const cases = [
  {
    industry: "Manufacturing",
    challenge: "Margins eroding under rising input costs",
    result: "+19% gross margin in two quarters",
  },
  {
    industry: "SaaS",
    challenge: "Growth stalled after Series A",
    result: "3.1x pipeline growth in 6 months",
  },
  {
    industry: "Retail",
    challenge: "Expansion into two new regions",
    result: "Break-even 4 months ahead of plan",
  },
];

const testimonials = [
  {
    quote:
      "They didn't just hand us a strategy deck. They stayed until the numbers moved.",
    name: "Anjali Mehra",
    role: "COO, Fieldstone Manufacturing",
  },
  {
    quote:
      "The clearest, most honest read on our business we've gotten from an outside firm.",
    name: "David Okafor",
    role: "Founder, Ridgeline SaaS",
  },
];

export default function BusinessConsultancy() {
  const message = encodeURIComponent(
    "Hi Indosparsh Studio! /n/nI'd like to book a free consultation regarding my project./n/nI'm interested in learning more about your services, pricing, timeline, and how you can help bring my idea to life./n/nPlease let me know your available time slots. Looking forward to connecting with you./n/nThank you!",
  );
  return (
    <div className="bc">
      {/* ---------- Hero ---------- */}
      <section className="bc-hero">
        <div className="bc-hero__inner">
          <div className="bc-hero__content">
            <span className="bc-eyebrow">Business Consultancy</span>
            <h1 className="bc-hero__headline">
              Strategy that shows up{" "}
              <span className="bc-accent">in your numbers.</span>
            </h1>
            <p className="bc-hero__subtext">
              We work alongside leadership teams to fix what's actually slowing
              growth — not just what's easiest to present in a slide.
            </p>
            <div className="bc-hero__cta-row">
              <Link
                to={`https://wa.me/918005351770?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bc-btn bc-btn--primary"
              >
                Book a consultation
              </Link>
              <a href="/services" className="bc-btn bc-btn--ghost">
                Explore services
              </a>
            </div>
          </div>

          <div className="bc-hero__chart">
            <svg viewBox="0 0 420 260" className="bc-chart" aria-hidden="true">
              <g className="bc-chart__grid">
                {[40, 90, 140, 190].map((y) => (
                  <line key={y} x1="0" y1={y} x2="420" y2={y} />
                ))}
              </g>
              <path
                className="bc-chart__area"
                d="M0,210 C60,200 90,150 140,140 C190,130 220,90 270,80 C320,70 360,40 420,20 L420,240 L0,240 Z"
              />
              <path
                className="bc-chart__line"
                d="M0,210 C60,200 90,150 140,140 C190,130 220,90 270,80 C320,70 360,40 420,20"
              />
              <circle className="bc-chart__dot" cx="420" cy="20" r="6" />
            </svg>
          </div>
        </div>
      </section>

      {/* ---------- KPI band ---------- */}
      <section className="bc-kpis">
        <Reveal delay={0}>
          <KpiRing percent={38} label="avg revenue growth" prefix="+" />
        </Reveal>
        <Reveal delay={100}>
          <KpiRing percent={24} label="cost efficiency gained" prefix="+" />
        </Reveal>
        <Reveal delay={200}>
          <KpiRing percent={94} label="client retention rate" />
        </Reveal>
        <Reveal delay={300}>
          <KpiRing percent={30} label="faster time to market" prefix="-" />
        </Reveal>
      </section>

      {/* ---------- Services ---------- */}
      <section className="bc-section" id="services">
        <Reveal className="bc-section__head">
          <span className="bc-kicker">What we help with</span>
          <h2 className="bc-h2">
            Consulting across the parts that actually move the business
          </h2>
        </Reveal>
        <div className="bc-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70} className="bc-card why-card">
              <h3 className="bc-card__title">{s.title}</h3>
              <p className="bc-card__text">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Roadmap ---------- */}
      <section className="bc-section bc-section--muted">
        <Reveal className="bc-section__head">
          <span className="bc-kicker">Engagement roadmap</span>
          <h2 className="bc-h2">Four phases, one accountable plan</h2>
        </Reveal>
        <div className="bc-process">
          <div className="bc-process__line" aria-hidden="true" />
          {roadmap.map((r, i) => (
            <Reveal key={r.step} delay={i * 100} className="bc-process__item">
              <span className="bc-process__step">{r.step}</span>
              <h3 className="bc-process__title">{r.title}</h3>
              <p className="bc-process__text">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Case studies ---------- */}
      <section className="bc-section">
        <Reveal className="bc-section__head">
          <span className="bc-kicker">Results</span>
          <h2 className="bc-h2">A few outcomes we're proud of</h2>
        </Reveal>
        <div className="bc-grid bc-grid--3">
          {cases.map((c, i) => (
            <Reveal key={c.industry} delay={i * 90} className="bc-case">
              <span className="bc-case__industry">{c.industry}</span>
              <p className="bc-case__challenge">{c.challenge}</p>
              <span className="bc-case__result">{c.result}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="bc-section bc-section--muted">
        <Reveal className="bc-section__head">
          <span className="bc-kicker">What clients say</span>
          <h2 className="bc-h2">Straight talk from people we've worked with</h2>
        </Reveal>
        <div className="bc-grid bc-grid--2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="bc-quote why-card">
              <p className="bc-quote__text">"{t.quote}"</p>
              <div className="bc-quote__author">
                <span className="bc-quote__name">{t.name}</span>
                <span className="bc-quote__role">{t.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="bc-cta" id="contact">
        <Reveal className="bc-cta__inner">
          <h2 className="bc-cta__title">
            Let's find what's actually slowing you down.
          </h2>
          <p className="bc-cta__text">
            A first consultation is free — bring the numbers you already have.
          </p>
          <div className="bc-hero__cta-row">
            {/* TODO:"ADD a whatspp link with some content" */}
            <Link
              to={`https://wa.me/918005351770?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bc-btn bc-btn--primary"
            >
              Book a consultation
            </Link>
            {/* <button  className="bc-btn bc-btn--primary">Book a consultation</button>  */}
            <Link to="tel:+918005351770" className="bc-btn bc-btn--ghost-dark">
              Talk to our team
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
