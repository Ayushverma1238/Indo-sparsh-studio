import React, { useEffect, useRef, useState } from "react";
import "./WebsiteDevelopment.css";
import ScrollBeam from "../../../ScrollBeam";
import SEO from "../../../../utils/seo";
import CommonMarquee from "./common/commonMarquee";

/* ---------------------------------------------------------
   Small hook: reveals an element with a class once it enters
   the viewport. Used everywhere instead of copy-pasted
   IntersectionObserver boilerplate.
--------------------------------------------------------- */
function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
}

function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
  ...rest
}) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------
   Theme toggle — draftsman's switch between "paper" (light)
   and true blueprint (dark: white ink on blueprint blue).
--------------------------------------------------------- */
// eslint-disable-next-line no-unused-vars
function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={
        isDark
          ? "Switch to paper (light) mode"
          : "Switch to blueprint (dark) mode"
      }
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb">{isDark ? "🖊" : "☀"}</span>
      </span>
      <span className="theme-toggle-label">
        {isDark ? "Blueprint" : "Paper"}
      </span>
    </button>
  );
}

/* ---------------------------------------------------------
   DATA — everything below comes from the Website
   Development Services price sheet.
--------------------------------------------------------- */
const tags = [
  "#WebsiteDevelopment",
  "#React",
  "#Shopify",
  "#Ecommerce",
  "#WebDesign",
  "#BusinessGrowth",
  "#LeadGeneration",
  "#MSME",
  "#Data",
];

const INCLUDED = [
  {
    tag: "Responsive design",
    body: "Modern & professional — looks great on mobile, tablet & desktop.",
  },
  {
    tag: "SEO-friendly",
    body: "SEO-friendly structure from day one — built to rank, not just to look good.",
  },
  {
    tag: "Fast loading",
    body: "Optimized images & clean code so pages open quickly.",
  },
  {
    tag: "Secure & up-to-date",
    body: "SSL-ready and built on the latest web standards.",
  },
  {
    tag: "Maps & social",
    body: "Google Maps & social media integration included.",
  },
  {
    tag: "Easy to use",
    body: "A user-friendly, easy-to-navigate layout for your visitors.",
  },
  {
    tag: "On-time delivery",
    body: "On-time delivery with regular progress updates.",
  },
];

const PACKAGES = [
  {
    sheet: "01",
    name: "LANDING PAGE",
    price: "₹2,999",
    topClass: "",
    desc: "Perfect for solo professionals, freelancers, or new businesses that just need one sharp, credible page online — fast and affordable.",
    lead: "",
    list: [
      "Single page",
      "Static website",
      "Info-based",
      "Custom mobile-responsive design",
      "Contact form + WhatsApp click-to-chat button",
    ],
    cta: "Start with this sheet",
    href: "/contact",
    btn: "btn-ghost",
  },
  {
    sheet: "02",
    name: "STARTER WEBSITE",
    price: "₹4,999",
    topClass: "plan-top__sheet-2",
    desc: "Perfect for new businesses that need a professional first impression online.",
    lead: "",
    list: [
      "Up to 5 pages (Home, About, Services, Gallery, Contact)",
      "Custom mobile-responsive design",
      "Contact form + WhatsApp click-to-chat button",
      "Basic on-page SEO setup",
      "1 round of revisions",
    ],
    cta: "Start with this sheet",
    href: "/contact",
    btn: "btn-ghost",
  },
  {
    sheet: "03",
    name: "BUSINESS WEBSITE",
    price: "₹9,999 – ₹19,999",
    priceRange: true,
    topClass: "plan-top__sheet-3",
    featured: true,
    desc: "",
    lead: "Everything in Starter, plus:",
    list: [
      "Up to 10 pages, built on React CMS — edit your own content anytime",
      "Fully custom design (not a generic template)",
      "Blog / News section setup",
      "Google Analytics + Search Console setup",
      "2 rounds of revisions",
    ],
    cta: "Start with this sheet",
    href: "/contact",
    btn: "btn-primary",
  },
  {
    sheet: "04",
    name: "PREMIUM WEBSITE",
    price: "₹49,999",
    topClass: "plan-top__sheet-4",
    desc: "",
    lead: "Everything in Business, plus:",
    list: [
      "Up to 20 pages, advanced React / NextJS build",
      "Custom animations & interactive elements",
      "Speed optimization (sub-3-second load target)",
      "Priority development queue",
      "3 rounds of revisions",
    ],
    cta: "Start with this sheet",
    href: "/contact",
    btn: "btn-ghost",
  },
];

const ECOMMERCE = [
  {
    code: "A",
    title: "Shopify Store",
    price: "₹29,999",
    summary: "Up to 50 products, theme customization, payment gateway setup.",
  },
  {
    code: "B",
    title: "WooCommerce (React) Store",
    price: "₹34,999",
    summary: "Up to 50 products, theme customization, payment gateway setup.",
  },
  {
    code: "C",
    title: "Custom E-commerce Platform",
    price: "From ₹79,999",
    summary: "Fully custom build, unlimited products, advanced features.",
  },
];

const REDESIGN_POINTS = [
  "Full visual redesign using your existing content",
  "Mobile responsiveness fixed",
  "Speed & SEO audit included",
  "Final price depends on current site size & platform — confirmed after a free review",
];

const MAINTENANCE = [
  {
    plan: "Basic",
    price: "₹1,999",
    body: "Uptime monitoring, backups, plugin & security updates.",
  },
  {
    plan: "Standard",
    price: "₹3,999",
    body: "Everything in Basic + up to 4 content updates/month.",
  },
  {
    plan: "Premium",
    price: "₹6,999",
    body: "Everything in Standard + priority support, performance checks, monthly report.",
  },
];

const ADDONS = [
  { name: "Extra Page", price: "₹1,499/page" },
  { name: "Payment Gateway Integration", price: "₹2,999" },
  {
    name: "Domain + Hosting Setup (1 year)",
    price: "₹2,999",
    note: "+ actual domain/hosting cost",
  },
  { name: "SSL Certificate Setup", price: "₹999" },
  { name: "Speed Optimization (existing site)", price: "₹1,999" },
  { name: "Live Chat / WhatsApp Widget Integration", price: "₹999" },
  { name: "Blog Setup", price: "₹1,499" },
];

const WHY = [
  {
    tag: "Client satisfaction",
    body: "100% client satisfaction focus — we revise until you're happy, within scope.",
  },
  {
    tag: "On-time delivery",
    body: "Clear timelines agreed upfront, no indefinite delays.",
  },
  {
    tag: "Reliable support",
    body: "Real humans, real response times.",
  },
  {
    tag: "Affordable pricing",
    body: "Professional-quality work at SME-friendly rates.",
  },
  {
    tag: "One studio",
    body: "Website, hosting, SEO, ads & design — nothing lost in handoff between vendors.",
  },
];

const WebsiteDevelopment = () => {
  return (
    <>
      <SEO
        title="Website Development Services | Indo Sparsh Studio"
        description="Website development services from Indo Sparsh Studio, Lucknow — landing pages from ₹2,999, business websites on React, Shopify & WooCommerce stores, redesigns and maintenance."
        keywords="website development, website development services, web development company Lucknow, React website, Shopify store development, WooCommerce, ecommerce website, website redesign, website maintenance, Indo Sparsh Studio"
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <main id="main">
        {/* ======================= HERO ======================= */}
        <section className="hero">
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Service — Website Development</p>

              <h1 className="wd-hero__headline">
                <span className="wd-word wd-word--a">We draft</span>{" "}
                <span className="wd-word wd-word--b">
                  your site like a set of building
                </span>{" "}
                <span className="wd-word wd-word--c">plans, then</span>{" "}
                <span className="wd-word wd-word--d">build it to spec.</span>
              </h1>
              <p className="hero-sub">
                Your business, live online — fast, professional, built to
                convert. A website that loads slowly or breaks on a phone costs
                you customers before they read a word. We build on React,
                Shopify, or fully custom — whichever fits your business.
              </p>
              <p className="hero-tagline">
                Not just a website. A working sales tool.
              </p>
              <div className="hero-cta">
                <a href="#pricing" className="btn btn-primary">
                  See packages
                </a>
                <a href="#included" className="btn btn-ghost">
                  What's included
                </a>
              </div>
              <dl className="hero-stats">
                <div>
                  <dt>Starting at</dt>
                  <dd>₹2,999</dd>
                </div>
                <div>
                  <dt>Platforms</dt>
                  <dd>React · Shopify</dd>
                </div>
                <div>
                  <dt>Design</dt>
                  <dd>Fully responsive</dd>
                </div>
              </dl>
            </div>

            <div
              className="hero-plan"
              role="img"
              aria-label="Blueprint diagram of a website layout with annotated sections"
            >
              <svg
                viewBox="0 0 480 420"
                className="plan-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 10h20M10 10v20"
                  className="reg-mark draw-in"
                  style={{ animationDelay: "0ms" }}
                />
                <path
                  d="M470 10h-20M470 10v20"
                  className="reg-mark draw-in"
                  style={{ animationDelay: "60ms" }}
                />
                <path
                  d="M10 410h20M10 410v-20"
                  className="reg-mark draw-in"
                  style={{ animationDelay: "120ms" }}
                />
                <path
                  d="M470 410h-20M470 410v-20"
                  className="reg-mark draw-in"
                  style={{ animationDelay: "180ms" }}
                />

                <rect
                  x="60"
                  y="40"
                  width="360"
                  height="330"
                  className="plan-frame draw-in"
                  style={{ animationDelay: "200ms" }}
                />
                <rect
                  x="60"
                  y="40"
                  width="360"
                  height="46"
                  className="plan-line draw-in"
                  style={{ animationDelay: "320ms" }}
                />
                <text
                  x="72"
                  y="68"
                  className="plan-label fade-in"
                  style={{ animationDelay: "700ms" }}
                >
                  NAV — 1440 &times; 72
                </text>

                <rect
                  x="60"
                  y="86"
                  width="360"
                  height="140"
                  className="plan-line draw-in"
                  style={{ animationDelay: "420ms" }}
                />
                <text
                  x="72"
                  y="106"
                  className="plan-label fade-in"
                  style={{ animationDelay: "800ms" }}
                >
                  HERO
                </text>
                <line
                  x1="80"
                  y1="130"
                  x2="260"
                  y2="130"
                  className="plan-dash draw-in"
                  style={{ animationDelay: "520ms" }}
                />
                <line
                  x1="80"
                  y1="150"
                  x2="220"
                  y2="150"
                  className="plan-dash draw-in"
                  style={{ animationDelay: "560ms" }}
                />
                <rect
                  x="80"
                  y="170"
                  width="120"
                  height="30"
                  className="plan-cta fade-in"
                  style={{ animationDelay: "900ms" }}
                />

                <rect
                  x="60"
                  y="226"
                  width="118"
                  height="90"
                  className="plan-line draw-in"
                  style={{ animationDelay: "600ms" }}
                />
                <rect
                  x="181"
                  y="226"
                  width="118"
                  height="90"
                  className="plan-line draw-in"
                  style={{ animationDelay: "640ms" }}
                />
                <rect
                  x="302"
                  y="226"
                  width="118"
                  height="90"
                  className="plan-line draw-in"
                  style={{ animationDelay: "680ms" }}
                />
                <text
                  x="72"
                  y="246"
                  className="plan-label plan-label-sm fade-in"
                  style={{ animationDelay: "1000ms" }}
                >
                  01
                </text>
                <text
                  x="193"
                  y="246"
                  className="plan-label plan-label-sm fade-in"
                  style={{ animationDelay: "1020ms" }}
                >
                  02
                </text>
                <text
                  x="314"
                  y="246"
                  className="plan-label plan-label-sm fade-in"
                  style={{ animationDelay: "1040ms" }}
                >
                  03
                </text>

                <rect
                  x="60"
                  y="316"
                  width="360"
                  height="54"
                  className="plan-line draw-in"
                  style={{ animationDelay: "720ms" }}
                />
                <text
                  x="72"
                  y="336"
                  className="plan-label plan-label-sm fade-in"
                  style={{ animationDelay: "1100ms" }}
                >
                  FOOTER
                </text>

                <line
                  x1="430"
                  y1="86"
                  x2="430"
                  y2="226"
                  className="dim-line draw-in"
                  style={{ animationDelay: "760ms" }}
                />
                <text
                  x="436"
                  y="160"
                  className="dim-text fade-in"
                  transform="rotate(90 436 160)"
                  style={{ animationDelay: "1150ms" }}
                >
                  CONTENT HEIGHT
                </text>
              </svg>
              <p className="plan-caption">
                SHEET 01 — Homepage layout, scale not to size
              </p>
            </div>
          </div>
        </section>
        <ScrollBeam />

        <CommonMarquee data={tags} />

        {/* ================= INCLUDED IN EVERY WEBSITE ================= */}
        <section className="capabilities" id="included">
          <div className="wrap">
            <Reveal as="p" className="eyebrow">
              What's included
            </Reveal>
            <Reveal as="h2" delay={60}>
              Included in every website
            </Reveal>
            <Reveal as="p" className="section-sub" delay={100}>
              Whichever package you pick, these come standard — no hidden
              extras for the basics.
            </Reveal>
            <div className="capability-grid">
              {INCLUDED.map((cap, i) => (
                <Reveal
                  as="div"
                  className="cap-card"
                  key={cap.tag}
                  delay={i * 70}
                >
                  <span className="cap-tag">{cap.tag}</span>
                  <p>{cap.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <ScrollBeam />

        {/* ======================= PACKAGES ======================= */}
        <section className="packages" id="pricing">
          <div className="wrap">
            <Reveal as="p" className="eyebrow">
              Packages
            </Reveal>
            <Reveal as="h2" delay={60}>
              Choose your website package
            </Reveal>
            <Reveal as="p" className="section-sub" delay={100}>
              Four sheets, from a single sharp page to a 20-page advanced
              React build. Each one builds on the one before it.
            </Reveal>

            <div className="package-grid package-grid--four">
              {PACKAGES.map((pkg, i) => (
                <Reveal
                  as="article"
                  className={`package-card ${pkg.featured ? "package-featured" : ""}`.trim()}
                  key={pkg.name}
                  delay={i * 90}
                >
                  <div className={`plan-top ${pkg.topClass}`.trim()}>
                    <p className="sheet-no">SHEET {pkg.sheet} / 04</p>
                    {pkg.featured && (
                      <span className="badge">MOST RECOMMENDED</span>
                    )}
                    <h3>{pkg.name}</h3>
                    <p
                      className={`package-price ${pkg.priceRange ? "package-price--range" : ""}`.trim()}
                    >
                      {pkg.price}
                    </p>
                  </div>
                  <div className="plan-bottom">
                    {pkg.desc && <p className="package-desc">{pkg.desc}</p>}
                    {pkg.lead && <p className="package-lead">{pkg.lead}</p>}
                    <ul className="package-list">
                      {pkg.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <a
                      href={pkg.href}
                      className={`btn ${pkg.btn} btn-block package-btn`}
                    >
                      {pkg.cta}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <ScrollBeam />

        {/* =================== E-COMMERCE & SHOPIFY =================== */}
        <section className="website-types" id="ecommerce">
          <div className="wrap">
            <Reveal as="p" className="eyebrow">
              Online stores
            </Reveal>
            <Reveal as="h2" delay={60}>
              E-commerce &amp; Shopify development
            </Reveal>
            <Reveal as="p" className="section-sub" delay={100}>
              Pick the platform that fits how you sell — from a ready-made
              Shopify store to a fully custom build.
            </Reveal>

            <div className="type-grid">
              {ECOMMERCE.map((item, i) => (
                <Reveal
                  as="article"
                  className="type-card"
                  key={item.code}
                  delay={i * 80}
                >
                  <span className="type-code">{item.code}</span>
                  <h3>{item.title}</h3>
                  <p className="type-price">{item.price}</p>
                  <p className="type-summary">{item.summary}</p>
                </Reveal>
              ))}
            </div>

            <Reveal as="p" className="fine-print" delay={200}>
              Platform subscription costs (Shopify plans start around
              ₹1,994/month) and payment gateway transaction fees are billed
              separately by the provider — not marked up by us.
            </Reveal>
          </div>
        </section>
        <ScrollBeam />

        {/* ===================== WEBSITE REDESIGN ===================== */}
        <section className="redesign" id="redesign">
          <div className="wrap">
            <Reveal as="p" className="eyebrow">
              Website redesign
            </Reveal>
            <Reveal as="div" className="redesign-card" delay={60}>
              <div className="redesign-copy">
                <h2>Website Redesign</h2>
                <p className="redesign-price">From ₹4,999 to ₹9,999</p>
                <p>
                  Outdated site losing you customers? We rebuild it on your
                  existing content — modern look, better performance, same
                  business.
                </p>
                <a href="/contact" className="btn btn-primary">
                  Get a free review
                </a>
              </div>
              <ul className="package-list redesign-list">
                {REDESIGN_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
        <ScrollBeam />

        {/* ================= MAINTENANCE & SUPPORT ================= */}
        <section className="capabilities" id="maintenance">
          <div className="wrap">
            <Reveal as="p" className="eyebrow">
              After launch
            </Reveal>
            <Reveal as="h2" delay={60}>
              Website maintenance &amp; support
            </Reveal>
            <Reveal as="p" className="section-sub" delay={100}>
              Reliable support, always — real response times, not a ticket that
              disappears into a queue.
            </Reveal>
            <div className="capability-grid capability-grid--three">
              {MAINTENANCE.map((m, i) => (
                <Reveal
                  as="div"
                  className="cap-card"
                  key={m.plan}
                  delay={i * 70}
                >
                  <span className="cap-tag">{m.plan}</span>
                  <p className="cap-price">
                    {m.price}
                    <span>/month</span>
                  </p>
                  <p>{m.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <ScrollBeam />

        {/* ======================== ADD-ONS ======================== */}
        <section className="addons" id="addons">
          <div className="wrap">
            <Reveal as="p" className="eyebrow">
              Extras
            </Reveal>
            <Reveal as="h2" delay={60}>
              Optional add-ons
            </Reveal>
            <Reveal as="p" className="section-sub" delay={100}>
              Add only what you need to any package.
            </Reveal>
            <Reveal as="ul" className="addon-list" delay={120}>
              {ADDONS.map((a) => (
                <li className="addon-row" key={a.name}>
                  <span className="addon-name">
                    {a.name}
                    {a.note && <em className="addon-note"> ({a.note})</em>}
                  </span>
                  <span className="addon-price">{a.price}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </section>
        <ScrollBeam />

        {/* ===================== WHY CHOOSE US ===================== */}
        <section className="capabilities" id="why">
          <div className="wrap">
            <Reveal as="p" className="eyebrow">
              Why us
            </Reveal>
            <Reveal as="h2" delay={60}>
              Why choose Indo Sparsh Studio
            </Reveal>
            <div className="capability-grid">
              {WHY.map((w, i) => (
                <Reveal
                  as="div"
                  className="cap-card"
                  key={w.tag}
                  delay={i * 70}
                >
                  <span className="cap-tag">{w.tag}</span>
                  <p>{w.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default WebsiteDevelopment;