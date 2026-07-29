import React, { useState, useEffect, useRef } from "react";
import "./RowCallingData.css";
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
    features: [
      "Basic targeted data",
      "Excel / CSV format",
      "Cost-effective outreach",
      "Ideal for mass campaigns",
    ],
    message: encodeURIComponent(`Hi! I'm interested in the Cold Data package (₹499/1000 records) for a mass outreach campaign.
      Can you share how I can get started?`)
  },
  {
    name: "Warm Data",
    price: "₹999",
    unit: "per 1000 records",
    tag: "warm",
    popular: true,
    features: [
      "Intent-based targeting",
      "Regularly updated database",
      "Better conversion rate",
      "Ideal for telecalling",
    ],
    message: encodeURIComponent(`Hi! I saw the Warm Data plan (₹999/1000 records) for telecalling with better conversion.
       Can you tell me more about the targeting and how soon I can get the data?`)
  },
  {
    name: "Hot Data",
    price: "₹9,999",
    unit: "per 1000 records",
    tag: "hot",
    features: [
      "Fastest sales closure",
      "Premium quality profiles",
      "Daily / weekly refresh",
      "High-intent decision makers",
    ],
    message: encodeURIComponent(`Hi! I need high-intent, decision-maker leads for quick sales closure — interested in the Hot Data plan (₹9,999/1000 records).
      Can you share more details and how fast I can get access?`)
  },
];

const categories = [
  "Real Estate",
  "Business Owners",
  "Education",
  "Healthcare",
  "E-Commerce",
  "Manufacturing, Finance & BFSI",
  "Marketing Agencies",
  "IT & Tech Companies",
  "Hotels & Restaurants",
  "Shopkeepers & many more",
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
  useEffect(() => {
    document.title = "Row Calling Data | Indo Sparsh Studio";
  }, []);
  return (
    <div className="dp">
      {/* ---------- Hero ---------- */}
      <section className="dp-hero">
        <div className="dp-hero__inner">
          <span className="dp-eyebrow">B2B &amp; B2C Data Solutions</span>
          <h1 className="dp-hero__headline">
            Data that turns cold outreach into{" "}
            <span className="dp-accent">closed deals.</span>
          </h1>
          <p className="dp-hero__subtext">
            Access high-quality B2B data designed to help businesses improve
            outreach, generate leads, and reduce sales effort. Cold, warm and
            hot data with industry-specific targeting, regular updates, and
            pricing that scales with you.
          </p>
          <div className="dp-hero__cta-row">
            <a href="#pricing" className="dp-btn dp-btn--primary">
              See pricing
            </a>
            <a href="#contact" className="dp-btn dp-btn--ghost">
              Talk to us
            </a>
          </div>
          <div className="dp-hero__tags">
            {[
              "#LeadGeneration",
              "#ColdData",
              "#WarmData",
              "#HotData",
              "#BusinessGrowth",
            ].map((t) => (
              <span className="dp-tag why-card" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Categories ---------- */}
      <section className="dp-section dp-section--muted">
        <Reveal className="dp-section__head">
          <span className="dp-kicker">Coverage</span>
          <h2 className="dp-h2">Data categories available</h2>
        </Reveal>
        <div className="dp-chips">
          {categories.map((c, i) => (
            <Reveal
              as="span"
              key={c}
              delay={i * 60}
              className="dp-chip why-card"
            >
              {c}
            </Reveal>
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
              <span
                className="dp-check dp-check--dot"
                style={{ marginLeft: "10px" }}
              >
                ✓
              </span>
              {r}
            </Reveal>
          ))}
        </div>
      </section>
      {/* ---------- Pricing ---------- */}
      <section className="dp-section" id="pricing">
        <Reveal className="dp-section__head">
          <span className="dp-kicker">Pricing</span>
          <h2 className="dp-h2">
            Pick the data that matches your funnel stage
          </h2>
          <p className="dp-lead">
            Every tier ships in PDF, Excel or CSV, ready to load into your CRM
            or dialer.
          </p>
        </Reveal>

        <div className="dp-plans">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 100}
              className={`dp-plan  dp-plan--${plan.tag} ${plan.popular ? "dp-plan--popular" : "why-card"}`}
            >
              {plan.popular && (
                <span className="dp-plan__badge">Most popular</span>
              )}
              <h3 className="dp-plan__name">{plan.name}</h3>
              <div className="dp-plan__price">
                {plan.price}
                <span className="dp-plan__unit">/{plan.unit}</span>
              </div>
              <ul className="dp-plan__features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="dp-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link target="_blank" to={`https://wa.me/918005351770?text=${plan.message}`} className="dp-btn dp-btn--block">
                Request this data
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="dp-bulk">
          <div className="dp-bulk__text">
            <span className="dp-kicker dp-kicker--light">
              Bulk &amp; custom plan
            </span>
            <h3 className="dp-bulk__title">
              For 10,000+ leads — custom pricing on request
            </h3>
            <ul className="dp-bulk__list">
              <li>
                <span className="dp-check">✓</span>Priority support
              </li>
              <li>
                <span className="dp-check">✓</span>Bulk discount
              </li>
              <li>
                <span className="dp-check">✓</span>Customized targeting
              </li>
              <li>
                <span className="dp-check">✓</span>Dedicated manager
              </li>
            </ul>
          </div>
          <Link target="_blank" to={`https://wa.me/918005351770?text=${"Hi! I need 10,000+ leads with custom targeting. Can we discuss a bulk/custom plan and pricing?"}`} className="dp-btn dp-btn--light">
            Request custom quote
          </Link>
        </Reveal>
      </section>

    
    </div>
  );
}
