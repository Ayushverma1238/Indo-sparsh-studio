import React, { useEffect, useRef } from "react";
import "./PortfolioWork.css";

/**
 * PortfolioWork
 * Drop this component between your existing <Navbar /> and <Footer />.
 * Shows a "Selected Work" grid of project cards. Ships with 3 sample
 * projects with placeholder detail — swap the PROJECTS array with real
 * case studies whenever you have them; the grid/animation handle any count.
 *
 * Theming matches the other build-story pages: driven by the same
 * body.dark-mode / body.light-mode classes your app already toggles.
 *
 * Usage:
 *   <Navbar />
 *   <PortfolioWork />
 *   <Footer />
 */

const PROJECTS = [
  {
    n: "01",
    title: "Aurora Analytics",
    category: "SaaS Dashboard",
    year: "2025",
    role: "Product design + front-end build",
    blurb:
      "A metrics dashboard for a fintech team drowning in spreadsheets — real-time charts, saved views, and a command palette for power users.",
    tags: ["React", "D3", "TypeScript"],
    stat: { value: "38%", label: "faster time-to-insight" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 40V22M18 40V10M28 40V26M38 40V16" />
        <path d="M6 40h36" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Foundry Roasters",
    category: "E-commerce",
    year: "2024",
    role: "Full build, catalog to checkout",
    blurb:
      "A direct-to-consumer coffee shop with subscription bundles, a roast-date tracker, and a checkout that doesn't lose people at shipping.",
    tags: ["React", "Stripe", "Sanity"],
    stat: { value: "+22%", label: "checkout conversion" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M12 16h24l-2 22a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2z" />
        <path d="M18 16v-3a6 6 0 0 1 12 0v3" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Northwind Logistics",
    category: "Internal Tool",
    year: "2023",
    role: "Systems design + build",
    blurb:
      "A dispatch console for a regional freight company — live truck positions, route conflicts flagged before they happen.",
    tags: ["React", "WebSockets", "Mapbox"],
    stat: { value: "6 hrs", label: "saved / dispatcher / week" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="10" cy="12" r="4" />
        <circle cx="38" cy="12" r="4" />
        <circle cx="24" cy="36" r="4" />
        <path d="M13 14l9 18M35 14l-9 18M14 12h20" />
      </svg>
    ),
  },
];

function useReveal() {
  const rootRef = useRef(null);

  useEffect(() => {
    const els = rootRef.current
      ? rootRef.current.querySelectorAll(".js-reveal")
      : [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return rootRef;
}

function CropMarks() {
  return (
    <>
      <span className="crop crop-tl" aria-hidden="true" />
      <span className="crop crop-tr" aria-hidden="true" />
      <span className="crop crop-bl" aria-hidden="true" />
      <span className="crop crop-br" aria-hidden="true" />
    </>
  );
}

export default function PortfolioWork() {
  const rootRef = useReveal();

  return (
    <main className="pf" ref={rootRef}>
      {/* HEADER ------------------------------------------------------ */}
      <section className="pf-header">
        <div className="pf-grid-bg" aria-hidden="true" />
        <p className="pf-eyebrow js-reveal">Portfolio — Sheets 01–{PROJECTS.length.toString().padStart(2, "0")}</p>

        <h1 className="pf-title">
          {["Selected", "work"].map((w, i) => (
            <span
              className="pf-word"
              style={{ animationDelay: `${0.12 + i * 0.1}s` }}
              key={i}
            >
              {w}
            </span>
          ))}
        </h1>

        <p className="pf-subtitle js-reveal">
          A few of the projects we've shipped — each one built the same way,
          sheet by sheet, from brief to launch.
        </p>
      </section>

      {/* CARD GRID ------------------------------------------------------ */}
      <section className="pf-grid">
        {PROJECTS.map((p, i) => (
          <article
            className="pf-card js-reveal why-card"
            style={{ transitionDelay: `${i * 110}ms` }}
            key={p.n}
          >
            <CropMarks />

            <div className="pf-card-top">
              <span className="pf-card-n">{p.n}</span>
              <span className="pf-card-year">{p.year}</span>
            </div>

            <div className="pf-thumb">
              <div className="pf-thumb-icon">{p.icon}</div>
            </div>

            <div className="pf-card-body">
              <span className="pf-card-category">{p.category}</span>
              <h3>{p.title}</h3>
              <p className="pf-card-role">{p.role}</p>
              <p className="pf-card-blurb">{p.blurb}</p>

              <ul className="pf-tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className="pf-card-foot">
                <div className="pf-stat">
                  <span className="pf-stat-value">{p.stat.value}</span>
                  <span className="pf-stat-label">{p.stat.label}</span>
                </div>

                <a className="pf-link" href="#" onClick={(e) => e.preventDefault()}>
                  View case
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* FOOTNOTE ------------------------------------------------------ */}
      <section className="pf-footnote js-reveal">
        <p>More case studies get added here as work ships — full list lives in the footer.</p>
      </section>
    </main>
  );
}