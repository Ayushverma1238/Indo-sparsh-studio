import React, { useState, useEffect, useRef } from "react";
import "./RowCallingData.css";

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
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`dp-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------- data from the brochure ---------- */
const plans = [
  {
    name: "Cold Data",
    price: "₹499",
    unit: "per 1000 records",
    tag: "cold",
    features: ["Basic targeted data", "Excel / CSV format", "Cost-effective outreach", "Ideal for mass campaigns"],
  },
  {
    name: "Warm Data",
    price: "₹999",
    unit: "per 1000 records",
    tag: "warm",
    popular: true,
    features: ["Intent-based targeting", "Regularly updated database", "Better conversion rate", "Ideal for telecalling"],
  },
  {
    name: "Hot Data",
    price: "₹9,999",
    unit: "per 1000 records",
    tag: "hot",
    features: ["Fastest sales closure", "Premium quality profiles", "Daily / weekly refresh", "High-intent decision makers"],
  },
];

const categories = [
  "Real Estate", "Business Owners", "Education", "Healthcare", "E-Commerce",
  "Manufacturing, Finance & BFSI", "Marketing Agencies", "IT & Tech Companies",
  "Hotels & Restaurants", "Shopkeepers & many more",
];

const reasons = [
  "Regularly updated database",
  "High & premium quality data",
  "Cost-effective pricing",
  "Less load on sales teams",
  "Targeted & scalable",
  "Optimized for outreach",
  "Industry-specific filtering",
  "Priority support",
  "PDF, Excel & CSV formats",
  "Dedicated support",
  "City / state targeting",
];

export default function RowCallingData() {

  return (
    <div className="dp">
     
      {/* ---------- Hero ---------- */}
      <section className="dp-hero">
        <div className="dp-hero__inner">
          <span className="dp-eyebrow">B2B &amp; B2C Data Solutions</span>
          <h1 className="dp-hero__headline">
            Data that turns cold outreach into <span className="dp-accent">closed deals.</span>
          </h1>
          <p className="dp-hero__subtext">
            Access high-quality B2B data designed to help businesses improve
            outreach, generate leads, and reduce sales effort. Cold, warm and
            hot data with industry-specific targeting, regular updates, and
            pricing that scales with you.
          </p>
          <div className="dp-hero__cta-row">
            <a href="#pricing" className="dp-btn dp-btn--primary">See pricing</a>
            <a href="#contact" className="dp-btn dp-btn--ghost">Talk to us</a>
          </div>
          <div className="dp-hero__tags">
            {["#LeadGeneration", "#ColdData", "#WarmData", "#HotData", "#BusinessGrowth"].map((t) => (
              <span className="dp-tag why-card" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Pricing ---------- */}
      <section className="dp-section" id="pricing">
        <Reveal className="dp-section__head">
          <span className="dp-kicker">Pricing</span>
          <h2 className="dp-h2">Pick the data that matches your funnel stage</h2>
          <p className="dp-lead">Every tier ships in PDF, Excel or CSV, ready to load into your CRM or dialer.</p>
        </Reveal>

        <div className="dp-plans">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className={`dp-plan why-card dp-plan--${plan.tag} ${plan.popular ? "dp-plan--popular" : ""}`}>
              {plan.popular && <span className="dp-plan__badge">Most popular</span>}
              <h3 className="dp-plan__name">{plan.name}</h3>
              <div className="dp-plan__price">
                {plan.price}
                <span className="dp-plan__unit">/{plan.unit}</span>
              </div>
              <ul className="dp-plan__features">
                {plan.features.map((f) => (
                  <li key={f}><span className="dp-check">✓</span>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="dp-btn dp-btn--block">Request this data</a>
            </Reveal>
          ))}
        </div>

        <Reveal className="dp-bulk">
          <div className="dp-bulk__text">
            <span className="dp-kicker dp-kicker--light">Bulk &amp; custom plan</span>
            <h3 className="dp-bulk__title">For 10,000+ leads — custom pricing on request</h3>
            <ul className="dp-bulk__list">
              <li><span className="dp-check">✓</span>Priority support</li>
              <li><span className="dp-check">✓</span>Bulk discount</li>
              <li><span className="dp-check">✓</span>Customized targeting</li>
              <li><span className="dp-check">✓</span>Dedicated manager</li>
            </ul>
          </div>
          <a href="/request-quote" className="dp-btn dp-btn--light">Request custom quote</a>
        </Reveal>
      </section>

      {/* ---------- Categories ---------- */}
      <section className="dp-section dp-section--muted">
        <Reveal className="dp-section__head">
          <span className="dp-kicker">Coverage</span>
          <h2 className="dp-h2">Data categories available</h2>
        </Reveal>
        <div className="dp-chips">
          {categories.map((c, i) => (
            <Reveal as="span" key={c} delay={i * 60} className="dp-chip why-card">{c}</Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Why choose us ---------- */}
      <section className="dp-section">
        <Reveal className="dp-section__head">
          <span className="dp-kicker">Why choose our data</span>
          <h2 className="dp-h2">Built for sales teams, not spreadsheets</h2>
        </Reveal>
        <div className="dp-reasons">
          {reasons.map((r, i) => (
            <Reveal key={r} delay={i * 45} className="dp-reason why-card">
              <span className="dp-check dp-check--dot" style={{marginLeft:"10px"}}>✓</span>{r}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="dp-contact" id="contact">
        <Reveal className="dp-contact__inner">
          <span className="dp-kicker dp-kicker--light">Get in touch</span>
          <h2 className="dp-contact__title">Tell us the data you need</h2>
          <p className="dp-contact__text">Reach out and we'll scope the right cold, warm or hot list for your campaign.</p>

          <div className="dp-contact__grid">
            <a href="tel:+918005351770" className="dp-contact__item why-card">
              <span className="dp-contact__label">Call / WhatsApp</span>
              <span className="dp-contact__value">+91-8005351770</span>
            </a>
            <a href="mailto:contact@indosparsh.com" className="dp-contact__item why-card">
              <span className="dp-contact__label">Email</span>
              <span className="dp-contact__value">contact@indosparsh.com</span>
            </a>
            <a href="https://www.indosparsh.com" target="_blank" rel="noreferrer" className="dp-contact__item why-card">
              <span className="dp-contact__label">Website</span>
              <span className="dp-contact__value">www.indosparsh.com</span>
            </a>
            <div className="dp-contact__item why-card">
              <span className="dp-contact__label">Office</span>
              <span className="dp-contact__value">Incuspaze, 11th Floor Rohtas Summit, Vibhuti Khand, Gomtinagar, Lucknow, Uttar Pradesh 226010, India</span>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}