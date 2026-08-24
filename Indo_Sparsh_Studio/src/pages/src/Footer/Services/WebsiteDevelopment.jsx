import React, { useEffect, useRef, useState, useCallback } from "react";
import "./WebsiteDevelopment.css";
import ScrollBeam from "../../../ScrollBeam";
import ProjectDiscuss from "../../../Home/ProjectDiscuss";

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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
}

function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
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
function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to paper (light) mode" : "Switch to blueprint (dark) mode"}
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
   Data: the different kinds of website work we take on.
--------------------------------------------------------- */
const WEBSITE_TYPES = [
  {
    code: "A",
    title: "Business Website",
    summary:
      "A multi-page site that represents your company — services, about, team, and contact, all tied to one visual system.",
    scope: ["5–12 pages", "CMS for easy edits", "Lead-capture forms", "Google Maps & business info"],
  },
  {
    code: "B",
    title: "Landing Page",
    summary:
      "One focused page built around a single offer or campaign — built to convert visitors into leads or signups fast.",
    scope: ["Single scrolling page", "One clear call-to-action", "A/B-ready sections", "3–5 day turnaround"],
  },
  {
    code: "C",
    title: "Website Redesign",
    summary:
      "We keep what already works — your content and rankings — and rebuild the structure, visuals, and speed around it.",
    scope: ["Content & SEO audit", "New visual system", "Migration with redirects", "Before/after performance report"],
  },
  {
    code: "D",
    title: "E-commerce Website",
    summary:
      "A storefront built to sell — product catalogs, cart, checkout, and payment gateways wired up end to end.",
    scope: ["Product catalog & filters", "Cart & secure checkout", "Payment gateway integration", "Order & inventory dashboard"],
  },
  {
    code: "E",
    title: "Web Application",
    summary:
      "Beyond a brochure site — logins, dashboards, and custom logic for tools your team or customers use daily.",
    scope: ["User authentication", "Database-backed features", "Custom dashboards", "API integrations"],
  },
  {
    code: "F",
    title: "Portfolio Website",
    summary:
      "A personal or studio site built to showcase work — photography, design, writing, or a personal brand.",
    scope: ["Gallery / project grid", "Case-study layouts", "Resume & contact section", "Fast image-heavy loading"],
  },
];

const WebsiteDevelopment = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.title = "Website Development | Indo Sparsh Studio";
  }, []);

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? window.localStorage.getItem("isd-theme") : null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(stored || (prefersDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem("isd-theme", theme);
    } catch (e) {
      /* storage unavailable — theme still applies for this session */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <main id="main">
        <section className="hero">
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Service — Website Development</p>
              <h1>
                We draft your site like a set of building plans, then build it
                to spec.
              </h1>
              <p className="hero-sub">
                Every project starts on paper: sitemap, structure, and
                measurements agreed before a single line of code ships. What you
                approve on the drawing is what you get in the browser.
              </p>
              <div className="hero-cta">
                <a href="#pricing" className="btn btn-primary">
                  See packages
                </a>
                <a href="#process" className="btn btn-ghost">
                  How we build
                </a>
              </div>
              <dl className="hero-stats">
                <div>
                  <dt>Avg. load time</dt>
                  <dd>&le; 1.2s</dd>
                </div>
                <div>
                  <dt>Accessibility</dt>
                  <dd>WCAG 2.1 AA</dd>
                </div>
                <div>
                  <dt>Typical delivery</dt>
                  <dd>4&ndash;6 weeks</dd>
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
                <path d="M10 10h20M10 10v20" className="reg-mark draw-in" style={{ animationDelay: "0ms" }} />
                <path d="M470 10h-20M470 10v20" className="reg-mark draw-in" style={{ animationDelay: "60ms" }} />
                <path d="M10 410h20M10 410v-20" className="reg-mark draw-in" style={{ animationDelay: "120ms" }} />
                <path d="M470 410h-20M470 410v-20" className="reg-mark draw-in" style={{ animationDelay: "180ms" }} />

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
                <text x="72" y="68" className="plan-label fade-in" style={{ animationDelay: "700ms" }}>
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
                <text x="72" y="106" className="plan-label fade-in" style={{ animationDelay: "800ms" }}>
                  HERO
                </text>
                <line x1="80" y1="130" x2="260" y2="130" className="plan-dash draw-in" style={{ animationDelay: "520ms" }} />
                <line x1="80" y1="150" x2="220" y2="150" className="plan-dash draw-in" style={{ animationDelay: "560ms" }} />
                <rect x="80" y="170" width="120" height="30" className="plan-cta fade-in" style={{ animationDelay: "900ms" }} />

                <rect x="60" y="226" width="118" height="90" className="plan-line draw-in" style={{ animationDelay: "600ms" }} />
                <rect x="181" y="226" width="118" height="90" className="plan-line draw-in" style={{ animationDelay: "640ms" }} />
                <rect x="302" y="226" width="118" height="90" className="plan-line draw-in" style={{ animationDelay: "680ms" }} />
                <text x="72" y="246" className="plan-label plan-label-sm fade-in" style={{ animationDelay: "1000ms" }}>01</text>
                <text x="193" y="246" className="plan-label plan-label-sm fade-in" style={{ animationDelay: "1020ms" }}>02</text>
                <text x="314" y="246" className="plan-label plan-label-sm fade-in" style={{ animationDelay: "1040ms" }}>03</text>

                <rect x="60" y="316" width="360" height="54" className="plan-line draw-in" style={{ animationDelay: "720ms" }} />
                <text x="72" y="336" className="plan-label plan-label-sm fade-in" style={{ animationDelay: "1100ms" }}>FOOTER</text>

                <line x1="430" y1="86" x2="430" y2="226" className="dim-line draw-in" style={{ animationDelay: "760ms" }} />
                <text x="436" y="160" className="dim-text fade-in" transform="rotate(90 436 160)" style={{ animationDelay: "1150ms" }}>
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

        <section className="stages" id="process">
          <div className="wrap">
            <Reveal as="p" className="eyebrow">The process</Reveal>
            <Reveal as="h2" delay={60}>Five stages, one continuous drawing</Reveal>
            <Reveal as="p" className="section-sub" delay={100}>
              Each stage hands off a concrete artifact to the next — nothing
              moves forward on a verbal agreement alone.
            </Reveal>

            <ol className="stage-list">
              {[
                {
                  n: "01",
                  title: "Discovery",
                  body: "We map your goals, audience, and existing content into a brief you sign off on before design starts.",
                  artifact: "Artifact: project brief",
                },
                {
                  n: "02",
                  title: "Structure & sitemap",
                  body: "Pages, navigation, and content hierarchy get drawn out as a wireframe before any visual styling.",
                  artifact: "Artifact: wireframe set",
                },
                {
                  n: "03",
                  title: "Visual system",
                  body: "Typography, color, and components are designed as a reusable kit, then applied across every page.",
                  artifact: "Artifact: style guide",
                },
                {
                  n: "04",
                  title: "Build",
                  body: "Front-end and back-end are built against the approved plan — responsive, accessible, and fast by default.",
                  artifact: "Artifact: staging site",
                },
                {
                  n: "05",
                  title: "QA & launch",
                  body: "Cross-browser testing, performance passes, and a guided handover before your site goes live.",
                  artifact: "Artifact: launch checklist",
                },
              ].map((stage, i) => (
                <Reveal as="li" className="stage-row" key={stage.n} delay={i * 70}>
                  <span className="stage-num">{stage.n}</span>
                  <div className="stage-body">
                    <h3>{stage.title}</h3>
                    <p>{stage.body}</p>
                  </div>
                  <span className="stage-artifact">{stage.artifact}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
        <ScrollBeam />

        <section className="website-types" id="website-types">
          <div className="wrap">
            <Reveal as="p" className="eyebrow">What we build</Reveal>
            <Reveal as="h2" delay={60}>Six kinds of websites, one drafting process</Reveal>
            <Reveal as="p" className="section-sub" delay={100}>
              Whatever the brief — a single landing page or a full storefront —
              it moves through the same discovery-to-launch drawing set.
            </Reveal>

            <div className="type-grid">
              {WEBSITE_TYPES.map((type, i) => (
                <Reveal as="article" className="type-card" key={type.code} delay={i * 80}>
                  <span className="type-code">{type.code}</span>
                  <h3>{type.title}</h3>
                  <p className="type-summary">{type.summary}</p>
                  <ul className="type-scope">
                    {type.scope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <ScrollBeam />

        <section className="capabilities" id="capabilities">
          <div className="wrap">
            <Reveal as="p" className="eyebrow">What's included</Reveal>
            <Reveal as="h2" delay={60}>Everything a modern site needs, nothing it doesn't</Reveal>
            <div className="capability-grid">
              {[
                {
                  tag: "Front-end",
                  body: "Responsive layouts built with semantic HTML and modern CSS, tested from 320px up.",
                },
                {
                  tag: "Back-end",
                  body: "Forms, content management, and integrations wired up to the tools your team already uses.",
                },
                {
                  tag: "Performance",
                  body: "Optimized assets and lean code aimed at sub-1.5s load times on real-world connections.",
                },
                {
                  tag: "SEO foundations",
                  body: "Clean markup, metadata, and sitemap structure so search engines can read the site properly.",
                },
                {
                  tag: "Accessibility",
                  body: "Keyboard navigation, color contrast, and screen-reader support checked against WCAG 2.1 AA.",
                },
                {
                  tag: "Hosting & care",
                  body: "Deployment setup plus an optional maintenance plan for updates, backups, and monitoring.",
                },
              ].map((cap, i) => (
                <Reveal as="div" className="cap-card" key={cap.tag} delay={i * 70}>
                  <span className="cap-tag">{cap.tag}</span>
                  <p>{cap.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <ScrollBeam />

        <section className="packages" id="pricing">
          <div className="wrap">
            <Reveal as="p" className="eyebrow">Packages</Reveal>
            <Reveal as="h2" delay={60}>Three sheets to choose from</Reveal>
            <Reveal as="p" className="section-sub" delay={100}>
              Same three price slabs cover every project type above — which
              sheet fits depends on scope, not the kind of site.
            </Reveal>

            <div className="package-grid">
              <Reveal as="article" className="package-card why-card" delay={0}>
                <p className="sheet-no">SHEET 01 / 03</p>
                <h3>Starter</h3>
                <p className="package-price">₹4,999</p>
                <p className="package-desc">
                  Best for a landing page or a single-page portfolio —
                  launching fast and making a strong first impression.
                </p>
                <ul className="package-list">
                  <li>1 landing page</li>
                  <li>Mobile-first responsive build</li>
                  <li>Contact form integration</li>
                  <li>Basic on-page SEO</li>
                  <li>3&ndash;5 day delivery</li>
                </ul>
                <p className="package-note">
                  Fits: Landing Page, Portfolio Website. Need more than one
                  page? Move up to Growth.
                </p>
                <a href="/contact" className="btn btn-ghost btn-block">
                  Start with this sheet
                </a>
              </Reveal>

              <Reveal as="article" className="package-card package-featured" delay={90}>
                <p className="sheet-no">SHEET 02 / 03</p>
                <span className="badge">Most Recommended</span>
                <h3>Growth</h3>
                <p className="package-price">₹9,999</p>
                <p className="package-desc">
                  Best for a business website or a redesign — a multi-page
                  site built to tell your story and generate leads.
                </p>
                <ul className="package-list">
                  <li>5&ndash;8 pages</li>
                  <li>Custom component library</li>
                  <li>On-page SEO across all pages</li>
                  <li>Contact form &amp; lead capture</li>
                  <li>1&ndash;2 week delivery</li>
                </ul>
                <p className="package-note">
                  Fits: Business Website, Website Redesign. Need more pages or
                  advanced features? Move up to Custom.
                </p>
                <a href="/contact" className="btn btn-primary btn-block">
                  Start with this sheet
                </a>
              </Reveal>

              <Reveal as="article" className="package-card why-card" delay={180}>
                <p className="sheet-no">SHEET 03 / 03</p>
                <h3>Custom</h3>
                <p className="package-price">₹19,999</p>
                <p className="package-desc">
                  Best for an e-commerce store or a web application — a
                  complete full-stack build scoped around your project.
                </p>
                <ul className="package-list">
                  <li>Unlimited pages</li>
                  <li>Frontend + backend development</li>
                  <li>Database &amp; API integration</li>
                  <li>Dedicated project lead</li>
                  <li>Timeline scoped together</li>
                </ul>
                <p className="package-note">
                  Fits: E-commerce Website, Web Application. Secure login
                  (JWT / NextAuth) and deployment are available as paid
                  add-ons based on your requirements.
                </p>
                <a href="tel:+918005351770" className="btn btn-ghost btn-block">
                  Request a scope call
                </a>
              </Reveal>
            </div>
          </div>
        </section>
        <ScrollBeam />

        <ProjectDiscuss/>
      </main>
    </>
  );
};

export default WebsiteDevelopment;