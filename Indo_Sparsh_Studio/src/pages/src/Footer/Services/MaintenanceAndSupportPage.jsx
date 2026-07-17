import React, { useState, useEffect, useRef } from "react";
import "./MaintenanceAndSupportPage.css";
import { useNavigate } from "react-router-dom";

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
      className={`ms-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------- count-up number (supports decimals) ---------- */
function CountUp({ value, decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(value * eased);
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
  }, [value]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ---------- accordion item ---------- */
function AccordionItem({ q, a, open, onClick }) {
  return (
    <div
      style={{ padding: "5px 20px" }}
      className={`ms-faq__item why-card ${open ? "is-open" : ""}`}
    >
      <button className="ms-faq__question" onClick={onClick}>
        {q}
        <span className="ms-faq__icon" aria-hidden="true">
          +
        </span>
      </button>
      <div className="ms-faq__answer-wrap">
        <p className="ms-faq__answer">{a}</p>
      </div>
    </div>
  );
}

/* ---------- data ---------- */
const plans = [
  {
    name: "Essential",
    price: "₹4,999",
    unit: "/month",
    features: [
      "Business-hours support",
      "Monthly security patches",
      "Uptime monitoring",
      "Email support · 48h response",
    ],
  },
  {
    name: "Priority",
    price: "₹9,999",
    unit: "/month",
    popular: true,
    features: [
      "Priority ticket queue",
      "Weekly security patches",
      "24/7 uptime monitoring",
      "Email + chat · 12h response",
      "Monthly performance report",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "pricing",
    features: [
      "Dedicated support engineer",
      "Real-time monitoring & alerts",
      "Same-day critical fixes",
      "Phone + Slack · 2h response",
      "Quarterly strategy review",
    ],
  },
];

const included = [
  {
    title: "Security & patch management",
    text: "Core, plugin and dependency updates applied on a tested, scheduled cadence.",
  },
  {
    title: "Uptime & performance monitoring",
    text: "Continuous checks with alerts the moment something looks off.",
  },
  {
    title: "Automated daily backups",
    text: "Offsite, versioned backups so a bad deploy is never a lost site.",
  },
  {
    title: "Bug fixes & QA",
    text: "Reported issues reproduced, fixed, and verified before we close the ticket.",
  },
  {
    title: "Content & copy updates",
    text: "Small edits and updates handled without opening a dev ticket.",
  },
  {
    title: "Plugin & dependency upgrades",
    text: "Kept current so you're never stuck migrating three major versions at once.",
  },
  {
    title: "Monthly health reports",
    text: "Uptime, performance and security summary sent to your inbox.",
  },
  {
    title: "Emergency incident response",
    text: "A real person on call when something breaks outside business hours.",
  },
];

const sla = [
  {
    level: "Critical — site down",
    response: "30 minutes",
    resolution: "4 hours",
  },
  {
    level: "High — major feature broken",
    response: "2 hours",
    resolution: "24 hours",
  },
  {
    level: "Normal — minor bug",
    response: "8 business hours",
    resolution: "3 business days",
  },
  {
    level: "Low — cosmetic / content",
    response: "24 business hours",
    resolution: "5 business days",
  },
];

const process = [
  {
    step: "01",
    title: "Submit a ticket",
    text: "Through the portal, email, or Slack — whichever you already use.",
  },
  {
    step: "02",
    title: "We triage",
    text: "Every ticket is graded by severity within the response window above.",
  },
  {
    step: "03",
    title: "Fix & test",
    text: "Changes go through staging before anything touches production.",
  },
  {
    step: "04",
    title: "You confirm",
    text: "We close the loop with you, not just a status change on our end.",
  },
];

const faqs = [
  {
    q: "What counts as an emergency?",
    a: "Anything that takes your site fully offline, breaks checkout or logins, or exposes a security vulnerability. Those get routed straight to the critical queue regardless of your plan.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes, at the start of any billing cycle. We'll prorate the difference if you upgrade mid-cycle.",
  },
  {
    q: "Do you support sites you didn't build?",
    a: "In most cases, yes. We run a short technical audit first so we understand what we're inheriting before quoting a plan.",
  },
  {
    q: "What's not covered under maintenance?",
    a: "Net-new features, redesigns, and third-party integration builds are scoped and quoted separately from ongoing maintenance.",
  },
  {
    q: "How do I submit a support request?",
    a: "Every plan includes access to our support portal, plus email. Priority and Enterprise plans add live chat, Slack, and phone.",
  },
];

export default function MaintenanceSupportPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="ms">
      {/* ---------- Hero ---------- */}
      <section className="ms-hero">
        <div className="ms-hero__inner">
          <span className="ms-eyebrow">Maintenance &amp; Support</span>
          <h1 className="ms-hero__headline">
            Your site, always online.{" "}
            <span className="ms-accent">Always answered.</span>
          </h1>
          <p className="ms-hero__subtext">
            Security patches, backups, monitoring and a real support queue — so
            a broken build or a midnight outage is our problem to fix, not
            yours.
          </p>

          <div className="ms-hero__cta-row">
            <a href="#plans" className="ms-btn ms-btn--primary">
              See support plans
            </a>
            <a href="#contact" className="ms-btn ms-btn--ghost">
              Report an issue
            </a>
          </div>

          <div className="ms-status">
            <span className="ms-status__dot" aria-hidden="true" />
            <span className="ms-status__text">All systems operational</span>
            <span className="ms-status__divider" />
            <span className="ms-status__stat">
              <CountUp value={99.98} decimals={2} suffix="%" /> uptime, last 12
              months
            </span>
          </div>
        </div>

        <svg
          className="ms-pulse"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="ms-pulse__line"
            d="M0,60 L220,60 L250,20 L280,100 L310,40 L340,60 L520,60 L550,20 L580,100 L610,40 L640,60 L1200,60"
          />
        </svg>
      </section>

      {/* ---------- Plans ---------- */}
      <section className="ms-section" id="plans">
        <Reveal className="ms-section__head">
          <span className="ms-kicker">Support plans</span>
          <h2 className="ms-h2">
            Coverage that matches how critical your site is
          </h2>
          <p className="ms-lead">
            Every plan includes monitoring and backups. Higher tiers shorten
            response times and widen coverage.
          </p>
        </Reveal>

        <div className="ms-plans">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 100}
              className={`ms-plan why-card ${plan.popular ? "ms-plan--popular" : ""}`}
            >
              {plan.popular && (
                <span className="ms-plan__badge">Recommended</span>
              )}
              <h3 className="ms-plan__name">{plan.name}</h3>
              <div className="ms-plan__price">
                {plan.price}
                <span className="ms-plan__unit">{plan.unit}</span>
              </div>
              <ul className="ms-plan__features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="ms-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="ms-btn ms-btn--block">
                Choose {plan.name}
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- What's included ---------- */}
      <section className="ms-section ms-section--muted">
        <Reveal className="ms-section__head">
          <span className="ms-kicker">What's included</span>
          <h2 className="ms-h2">Everything a live site needs, on autopilot</h2>
        </Reveal>
        <div className="ms-grid">
          {included.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 70}
              className="ms-card why-card"
            >
              <h3 className="ms-card__title">{item.title}</h3>
              <p className="ms-card__text">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- SLA table ---------- */}
      <section className="ms-section">
        <Reveal className="ms-section__head">
          <span className="ms-kicker">Response times</span>
          <h2 className="ms-h2">Our SLA, in plain numbers</h2>
        </Reveal>
        <Reveal className="ms-table-wrap">
          <table className="ms-table">
            <thead>
              <tr>
                <th>Severity</th>
                <th>Response</th>
                <th>Resolution target</th>
              </tr>
            </thead>
            <tbody>
              {sla.map((row) => (
                <tr key={row.level}>
                  <td>{row.level}</td>
                  <td>{row.response}</td>
                  <td>{row.resolution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>

      {/* ---------- Process ---------- */}
      <section className="ms-section ms-section--muted">
        <Reveal className="ms-section__head">
          <span className="ms-kicker">How it works</span>
          <h2 className="ms-h2">From ticket to fixed, every time</h2>
        </Reveal>
        <div className="ms-process">
          <div className="ms-process__line" aria-hidden="true" />
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 100} className="ms-process__item">
              <span className="ms-process__step">{p.step}</span>
              <h3 className="ms-process__title">{p.title}</h3>
              <p className="ms-process__text">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="ms-section">
        <Reveal className="ms-section__head">
          <span className="ms-kicker">FAQ</span>
          <h2 className="ms-h2">Common questions</h2>
        </Reveal>
        <Reveal className="ms-faq">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openFaq === i}
              onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="ms-cta" id="contact">
        <Reveal className="ms-cta__inner">
          <h2 className="ms-cta__title">Something broken right now?</h2>
          <p className="ms-cta__text">
            Open a ticket and we'll triage it against the SLA above — no plan
            required to report a critical issue.
          </p>
          <div className="ms-hero__cta-row">
            <button className="ms-btn ms-btn--primary">Report an issue</button>
            <button
              onClick={() => navigate("/contact")}
              className="ms-btn ms-btn--ghost-dark"
            >
              Talk to support
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
