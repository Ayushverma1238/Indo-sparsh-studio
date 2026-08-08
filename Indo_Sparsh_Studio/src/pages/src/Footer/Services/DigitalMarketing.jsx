import React, { useState, useEffect, useRef, useCallback } from "react";
import "./DigitalMarketing.css";

/* ---------------------------------------------------------
   Indo Sparsh Studio — Digital Marketing
   Content sourced from the Digital Marketing service sheet.
--------------------------------------------------------- */

const CONTACT = {
  phone: "+91-8005351770",
  phoneHref: "tel:+918005351770",
  email: "contact@indosparsh.com",
  website: "www.indosparsh.com",
  websiteHref: "https://www.indosparsh.com",
  address:
    "Incuspaze, 11th Floor Rohtas Summit, Vibhuti Khand, Gomtinagar, Lucknow, Uttar Pradesh – 226010, India",
};

const HERO_TAGS = [
  "DIGITALMARKETING",
  "SEO",
  "PERFORMANCEMARKETING",
  "METAADS",
  "GOOGLEADS",
  "WHATSAPPMARKETING",
  "BUSINESSGROWTH",
];

const FOOTER_TAGS = [
  "DATA",
  "LEADGENERATION",
  "DIGITALMARKETING",
  "SEO",
  "PERFORMANCEMARKETING",
  "BUSINESSGROWTH",
  "MSME",
];

const PLANS = [
  {
    id: "basic",
    number: "01",
    name: "Basic",
    subtitle: "Digital Foundation",
    price: "9,999",
    blurb: "Build the groundwork every business needs before spending on ads.",
    features: [
      "SEO — on-page + local SEO (Google Business Profile), up to 5 keywords",
      "Email Marketing — 1 campaign/month with list segmentation",
      "WhatsApp Marketing — broadcast setup + up to 1,000 messages/month",
      "SMS Marketing — up to 1,000 SMS/month",
      "Monthly performance report",
    ],
  },
  {
    id: "growth",
    number: "02",
    name: "Growth",
    subtitle: "Performance Starter",
    price: "19,999",
    recommended: true,
    blurb:
      "Everything in Basic, plus paid acquisition on the two channels that matter most.",
    features: [
      "SEO — expanded to 10 keywords + on-page content + basic backlink building",
      "Meta Ads (Facebook + Instagram) — 2 campaign setups, creative guidance, monthly optimization",
      "Google Ads — 2 campaign setups, keyword research, conversion tracking",
      "Bi-weekly strategy call",
    ],
  },
  {
    id: "premium",
    number: "03",
    name: "Premium",
    subtitle: "Full-Funnel Performance Marketing",
    price: "34,999",
    blurb:
      "Everything in Growth, plus a dedicated team running the entire funnel.",
    features: [
      "SEO — advanced scope, up to 20 keywords, content marketing, authority link building",
      "UGC Ads — 2 scripted UGC-style ad creatives/month for Meta & Google",
      "Performance Marketing — CRO, landing page testing, full-funnel tracking & attribution",
      "Dedicated account manager",
      "Weekly optimization + reporting",
      "Telegram Ads / channel promotion setup",
    ],
  },
];

const PLAN_FOOTNOTE =
  "What's billed separately: Meta/Google ad spend, WhatsApp/SMS/Telegram message credits, and 18% GST — paid directly to the platform, never marked up. Prices above cover strategy, setup, creative and ongoing management only. SEO and performance marketing compound over time — most businesses see meaningful movement in 60–90 days, with stronger results by month 3–6. A minimum 3-month engagement is recommended, especially for SEO.";

const SOLO_SERVICES = [
  {
    name: "SEO Services",
    includes:
      "On-page + local SEO, keyword research, monthly report (scope customized to keyword count & competition)",
    price: "From ₹6,999",
    unit: "/month",
  },
  {
    name: "Email Marketing",
    includes: "4 campaigns/month, list segmentation, performance report",
    price: "₹2,999",
    unit: "/month",
  },
  {
    name: "WhatsApp Marketing",
    includes:
      "Broadcast setup & campaign management (message credits billed at actual)",
    price: "₹2,499",
    unit: "/month",
  },
  {
    name: "SMS Marketing",
    includes: "Campaign setup & scheduling (SMS credits billed at actual)",
    price: "₹1,999",
    unit: "/month",
  },
  {
    name: "Meta Ads Management",
    includes:
      "Facebook + Instagram campaign setup, creative guidance, monthly optimization (ad spend billed separately)",
    price: "₹5,999",
    unit: "/month",
  },
  {
    name: "Google Ads Management",
    includes:
      "Search campaign setup, keyword research, conversion tracking (ad spend billed separately)",
    price: "₹7,999",
    unit: "/month",
  },
  {
    name: "Telegram Ads / Channel Promotion",
    includes: "Channel/ad setup & promotion strategy",
    price: "₹3,999",
    unit: "/month",
  },
  {
    name: "UGC Ads",
    includes: "4 scripted UGC-style ad creatives/month",
    price: "₹7,999",
    unit: "/month",
  },
  {
    name: "Performance Marketing",
    includes:
      "Conversion rate optimization, landing page testing, full-funnel tracking & attribution",
    price: "₹9,999",
    unit: "/month",
  },
];

const SOLO_FOOTNOTE =
  "Bundling into a Basic/Growth/Premium plan works out cheaper than paying for services individually — the plans are priced as a package discount, not just a repackaging of these same numbers.";

const CAMPAIGN_PRICING = [
  {
    name: "Meta Ads",
    includes:
      "Strategy, 1 ad creative set, campaign setup & launch (ad spend billed separately)",
    price: "₹1,999",
    unit: "/campaign",
  },
  {
    name: "Google Ads",
    includes:
      "Strategy, keyword research, campaign setup & launch (ad spend billed separately)",
    price: "₹2,499",
    unit: "/campaign",
  },
  {
    name: "Telegram Ads",
    includes: "Channel/ad setup for one promotional push",
    price: "₹1,499",
    unit: "/campaign",
  },
  {
    name: "WhatsApp Marketing",
    includes:
      "Broadcast setup & send, one campaign (message credits billed separately)",
    price: "₹1,499",
    unit: "/campaign",
  },
  {
    name: "SMS Marketing",
    includes:
      "Campaign setup & send, one blast (SMS credits billed separately)",
    price: "₹999",
    unit: "/campaign",
  },
  {
    name: "Email Marketing",
    includes: "Copy, design & send, one campaign",
    price: "₹999",
    unit: "/campaign",
  },
];

const CAMPAIGN_FOOTNOTE =
  "Per-campaign pricing covers strategy, setup & launch only. Want us watching and adjusting it while it runs? Add ongoing optimization at ₹999/week. Running longer than 3 weeks? A monthly plan works out more cost-effective — ask us to compare.";

const ADD_ONS = [
  { name: "One-Time SEO Audit & Strategy Report", price: "₹4,999" },
  { name: "Extra Ad Platform (LinkedIn Ads)", price: "₹4,999/month" },
  {
    name: "Additional UGC Ad Creative (beyond plan limit)",
    price: "₹2,499/video",
  },
  { name: "Landing Page Design (for ad campaigns)", price: "₹4,999" },
];

const WHY_US = [
  "One team runs SEO, ads, and messaging together — not as disconnected vendors working off different playbooks",
  "Transparent fees — management cost and platform/ad spend are always shown separately, never bundled to hide the split",
  "Every channel reports back to the same dashboard — see what's actually driving leads, not just likes",
  "Directly integrated with your Google Business Profile, social accounts & branding — one studio, one strategy",
  "No guaranteed-ranking or guaranteed-follower gimmicks — just consistent, measurable execution",
];

/* Hero signal diagram: four channel nodes converging into one strategy node.
   This is the page's signature element — a literal picture of the tagline. */
const HERO_NODES = [
  { id: "seo", label: "SEO", x: 90, y: 70, path: "M90,70 Q220,70 300,190" },
  { id: "ads", label: "ADS", x: 510, y: 70, path: "M510,70 Q380,70 300,190" },
  {
    id: "wa",
    label: "WHATSAPP",
    x: 90,
    y: 330,
    path: "M90,330 Q220,330 300,190",
  },
  {
    id: "email",
    label: "EMAIL",
    x: 510,
    y: 330,
    path: "M510,330 Q380,330 300,190",
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);
  return reduced;
}

function useReveal() {
  const rootRef = useRef(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("dm-in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return rootRef;
}

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
      <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6" />
      </g>
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <path
        d="M20 14.2A8.4 8.4 0 1 1 9.8 4a6.6 6.6 0 0 0 10.2 10.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <path
        d="M6.6 4h3l1.4 4-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 4 1.4v3a2 2 0 0 1-2.2 2C10.9 19 5 13.1 4.6 6.2A2 2 0 0 1 6.6 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <rect
        x="3.2"
        y="5.5"
        width="17.6"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <circle cx="12" cy="12" r="8.4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.6 12h16.8M12 3.6c2.4 2.3 3.6 5.2 3.6 8.4s-1.2 6.1-3.6 8.4c-2.4-2.3-3.6-5.2-3.6-8.4S9.6 5.9 12 3.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <path
        d="M12 21s7-6.4 7-11.6A7 7 0 0 0 5 9.4C5 14.6 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="9.4"
        r="2.4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function HeroDiagram({ reduced }) {
  return (
    <svg
      className="dm-diagram"
      viewBox="0 0 600 400"
      role="img"
      aria-label="Four marketing channels — SEO, Ads, WhatsApp/SMS, Email — converging into one strategy"
    >
      {HERO_NODES.map((n) => (
        <path key={n.id} d={n.path} className="dm-diagram-path" />
      ))}

      {!reduced &&
        HERO_NODES.map((n, i) => (
          <circle key={`dot-${n.id}`} r="4.5" className="dm-diagram-dot">
            <animateMotion
              dur="3.2s"
              begin={`${i * 0.5}s`}
              repeatCount="indefinite"
              path={n.path}
            />
          </circle>
        ))}

      {HERO_NODES.map((n) => (
        <g key={`node-${n.id}`} transform={`translate(${n.x} ${n.y})`}>
          <circle r="26" className="dm-diagram-node" />
          <text textAnchor="middle" dy="4" className="dm-diagram-node-label">
            {n.label}
          </text>
        </g>
      ))}
    
      <g transform="translate(300 190)">
        <circle r="0" className="dm-diagram-ring" />
        <circle r="44" className="dm-diagram-core" />
        <text textAnchor="middle" dy="-3" className="dm-diagram-core-label">
          ONE
        </text>
        <text textAnchor="middle" dy="14" className="dm-diagram-core-label">
          STRATEGY
        </text>
      </g>
    </svg>
  );
}

function PlanCard({ plan, index }) {
  return (
    <article
      className={`dm-plan${plan.recommended ? " dm-plan--recommended" : ""}`}
      data-reveal
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      {plan.recommended && <span className="dm-plan-badge">Most Recommended</span>}
      <span className="dm-plan-number">{plan.number}</span>
      <h3 className="dm-plan-name">{plan.name}</h3>
      <p className="dm-plan-subtitle">{plan.subtitle}</p>
      <div className="dm-plan-price">
        <span className="dm-plan-price-currency">₹</span>
        <span className="dm-plan-price-value">{plan.price}</span>
        <span className="dm-plan-price-unit">/month</span>
      </div>
      <p className="dm-plan-blurb">{plan.blurb}</p>
      <ul className="dm-plan-features">
        {plan.features.map((f, i) => (
          <li
            key={i}
            className={
              f.startsWith("Everything") ? "dm-plan-feature--inherit" : ""
            }
          >
            {f}
          </li>
        ))}
      </ul>
      <a className="dm-plan-cta" href={CONTACT.phoneHref}>
        Start with {plan.name}
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

function PriceTable({ rows, caption }) {
  return (
    <div className="dm-table-wrap" data-reveal>
      <table className="dm-table">
        <caption className="dm-sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Service</th>
            <th scope="col">What's included</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td data-label="Service">{row.name}</td>
              <td data-label="What's included">{row.includes}</td>
              <td data-label="Price" className="dm-table-price">
                {row.price}
                {row.unit && <span className="dm-table-unit">{row.unit}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DigitalMarketingShowcase() {
  const reduced = usePrefersReducedMotion();
  const revealRoot = useReveal();

  useEffect(() => {
    document.title = "Digital Marketing | Indo Sparsh Studio";
  }, []);

  return (
    <div className="dm-root" ref={revealRoot}>
      <div className="dm-noise" aria-hidden="true" />

      <main className="dm-main">
        <section className="dm-hero">
          <div className="dm-hero-copy" data-reveal>
            <span className="dm-eyebrow">
              <span className="dm-eyebrow-dot" />
              Digital Marketing
            </span>
            <h1 className="dm-hero-title">
              Every channel.
              <br />
              <span className="dm-hero-title-accent">One strategy.</span>
              <br />
              Measurable results.
            </h1>
            <p className="dm-hero-sub">
              Scattered marketing — a boosted post here, a random SMS blast
              there — doesn't compound. It just spends money. We run your SEO,
              ads, and messaging channels as one coordinated system, so every
              channel feeds the next: SEO brings people to your site, ads bring
              them back, email/WhatsApp/SMS keep them close, and every rupee
              spent is tracked back to a result.
            </p>
            <p className="dm-hero-note">Not more noise. More pipeline.</p>
            <div className="dm-hero-tags">
              {HERO_TAGS.map((t) => (
                <span key={t} className="dm-tag">
                  #{t}
                </span>
              ))}
            </div>
          </div>
          <div className="dm-hero-visual" data-reveal>
            <HeroDiagram reduced={reduced} />
          </div>
        </section>

        <section className="dm-plans" id="plans">
          <div className="dm-section-head" data-reveal>
            <span className="dm-section-eyebrow">01 — Choose your plan</span>
            <h2>Bundled packages, built to compound</h2>
          </div>
          <div className="dm-plans-grid">
            {PLANS.map((plan, i) => (
              <PlanCard plan={plan} index={i} key={plan.id} />
            ))}
          </div>
          <p className="dm-footnote" data-reveal>
            {PLAN_FOOTNOTE}
          </p>
        </section>

        <section className="dm-solo">
          <div className="dm-section-head" data-reveal>
            <span className="dm-section-eyebrow">
              02 — Prefer just one service?
            </span>
            <h2>Every channel, available on its own</h2>
            <p className="dm-section-sub">
              Not every business wants the full package. No bundle required.
            </p>
          </div>
          <PriceTable
            rows={SOLO_SERVICES}
            caption="Standalone monthly services and pricing"
          />
          <p className="dm-footnote" data-reveal>
            {SOLO_FOOTNOTE}
          </p>
        </section>

        <section className="dm-campaign">
          <div className="dm-section-head" data-reveal>
            <span className="dm-section-eyebrow">03 — No retainer needed</span>
            <h2>Per-campaign pricing</h2>
            <p className="dm-section-sub">
              For a one-off promotion — a festival sale, a product launch, a
              single event — pay per campaign instead.
            </p>
          </div>
          <PriceTable
            rows={CAMPAIGN_PRICING}
            caption="One-off per-campaign pricing"
          />
          <p className="dm-footnote" data-reveal>
            {CAMPAIGN_FOOTNOTE}
          </p>
        </section>

        <section className="dm-addons">
          <div className="dm-section-head" data-reveal>
            <span className="dm-section-eyebrow">04 — Optional add-ons</span>
            <h2>Extend any plan</h2>
          </div>
          <div className="dm-addons-grid">
            {ADD_ONS.map((addon, i) => (
              <div
                className="dm-addon"
                data-reveal
                key={addon.name}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="dm-addon-name">{addon.name}</span>
                <span className="dm-addon-price">{addon.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="dm-why">
          <div className="dm-section-head" data-reveal>
            <span className="dm-section-eyebrow">Why Indo Sparsh Studio</span>
            <h2>One studio, one strategy, every channel accounted for</h2>
          </div>
          <ul className="dm-why-list">
            {WHY_US.map((point, i) => (
              <li
                key={i}
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="dm-why-mark" aria-hidden="true">
                  ◎
                </span>
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="dm-contact" data-reveal>
          <div className="dm-contact-card">
            <div>
              <span className="dm-section-eyebrow">Get started today</span>
              <h2>Let's put your channels to work together.</h2>
            </div>
            <div className="dm-contact-grid">
              <a className="dm-contact-item" href={CONTACT.phoneHref}>
                <PhoneIcon />
                <span>{CONTACT.phone}</span>
                <small>Call / WhatsApp</small>
              </a>
              <a className="dm-contact-item" href={`mailto:${CONTACT.email}`}>
                <MailIcon />
                <span>{CONTACT.email}</span>
                <small>Email</small>
              </a>
              <a
                className="dm-contact-item"
                href={CONTACT.websiteHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeIcon />
                <span>{CONTACT.website}</span>
                <small>Website</small>
              </a>
              <div className="dm-contact-item dm-contact-item--static">
                <PinIcon />
                <span>{CONTACT.address}</span>
                <small>Studio</small>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="dm-footer">
        <div className="dm-footer-tags">
          {FOOTER_TAGS.map((t, i) => (
            <span key={`${t}-${i}`} className="dm-tag">
              #{t}
            </span>
          ))}
        </div>
        <p>Indo Sparsh Studio — Digital Business Solution Agency</p>
      </footer>
    </div>
  );
}
