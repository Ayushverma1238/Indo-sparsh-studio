import React, { useEffect, useRef } from "react";
import "./WebApplicationPage.css";

/**
 * WebAppBuildStory
 * Drop this component between your existing <Navbar /> and <Footer />.
 * Documents, in "blueprint sheet" form, how a web application gets built —
 * distinct from the marketing-landing-page and e-commerce versions, this
 * one covers architecture, data, and testing for a general web app.
 *
 * Theming matches the other pages on the site: driven by the same
 * body.dark-mode / body.light-mode classes your app already toggles.
 *
 * Usage:
 *   <Navbar />
 *   <WebAppBuildStory />
 *   <Footer />
 */

const STAGES = [
  {
    n: "01",
    title: "Discover",
    copy:
      "Map the core workflows and the users behind them before deciding on a single component or table.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="16" r="7" />
        <path d="M10 40c0-8 6-13 14-13s14 5 14 13" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Architecture",
    copy:
      "Draw the boundaries — frontend, API, services, database — so each piece can change without breaking the others.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="8" width="14" height="10" />
        <rect x="28" y="8" width="14" height="10" />
        <rect x="17" y="30" width="14" height="10" />
        <path d="M13 18v6h22v-6M24 24v6" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Data & State",
    copy:
      "Model the data and auth first, then decide what lives in server state versus local UI state — not the other way round.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="12" rx="14" ry="5" />
        <path d="M10 12v24c0 2.8 6.3 5 14 5s14-2.2 14-5V12" />
        <path d="M10 24c0 2.8 6.3 5 14 5s14-2.2 14-5" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Build",
    copy:
      "Component library first, then screens wired to real endpoints — business logic lives in hooks and services, not JSX.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="8" />
        <rect x="8" y="20" width="14" height="20" />
        <rect x="26" y="20" width="14" height="8" />
        <rect x="26" y="32" width="14" height="8" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Testing & Quality",
    copy:
      "Unit tests for logic, integration tests for flows, and a manual pass for keyboard, contrast, and screen readers.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M18 6h12v8l8 20a4 4 0 0 1-4 6H14a4 4 0 0 1-4-6l8-20z" />
        <path d="M17 26h14" />
      </svg>
    ),
  },
  {
    n: "06",
    title: "Deploy & Scale",
    copy:
      "Ship through CI/CD with monitoring already wired in, then let real usage tell you where it needs to grow.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 6l14 8v20l-14 8-14-8V14z" />
        <path d="M24 6v34M10 14l14 8 14-8" />
      </svg>
    ),
  },
];

const MATERIALS = [
  ["Frontend", "React, function components + hooks"],
  ["API layer", "REST or GraphQL, versioned and documented"],
  ["Data store", "PostgreSQL, with migrations tracked in source control"],
  ["Auth", "JWT or OAuth, session handling on the server, not local storage"],
  ["State", "Server cache (React Query) kept separate from local UI state"],
  ["Testing", "Jest for units, Playwright/Cypress for end-to-end flows"],
  ["CI/CD", "GitHub Actions — lint, test, and preview build on every PR"],
  ["Styling", "CSS custom properties for every token, light + dark from day one"],
];

const NOTES = [
  "Design the data model before the UI — the screens are just a view onto it.",
  "Every async state needs a loading, error, and empty version, not just the happy path.",
  "A feature isn't done until it has a test that would catch you breaking it later.",
  "Ship behind a flag, not a hope — reversible beats perfect.",
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
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return rootRef;
}

function CropMarks() {
  return (
    <>
      <span className="bp-crop bp-crop-tl" aria-hidden="true" />
      <span className="bp-crop bp-crop-tr" aria-hidden="true" />
      <span className="bp-crop bp-crop-bl" aria-hidden="true" />
      <span className="bp-crop bp-crop-br" aria-hidden="true" />
    </>
  );
}

export default function WebAppBuildStory() {
  const rootRef = useReveal();

  return (
    <main className="wa" ref={rootRef}>
      {/* HERO ------------------------------------------------------ */}
      <section className="wa-hero">
        <div className="wa-grid-bg" aria-hidden="true" />
        <CropMarks />

        <p className="wa-eyebrow js-reveal">Process Document — Web Application Build</p>

        <h1 className="wa-title" aria-label="How we build a web application">
          {["How", "we", "build", "a", "web", "app"].map((w, i) => (
            <span
              className="wa-word"
              style={{ animationDelay: `${0.12 + i * 0.08}s` }}
              key={i}
            >
              {w}
            </span>
          ))}
        </h1>

        <p className="wa-subtitle js-reveal">
          Not a UI wrapped around an idea — a system drawn from the data up,
          with the interface as the last layer, not the first.
        </p>

        <div className="wa-metarow js-reveal">
          <div>
            <span className="wa-meta-label">Scale</span>
            <span className="wa-meta-value">1:1</span>
          </div>
          <div>
            <span className="wa-meta-label">Sheets</span>
            <span className="wa-meta-value">01–06</span>
          </div>
          <div>
            <span className="wa-meta-label">Rev</span>
            <span className="wa-meta-value">03</span>
          </div>
          <div>
            <span className="wa-meta-label">Status</span>
            <span className="wa-meta-value wa-meta-live">In use</span>
          </div>
        </div>

        <div className="wa-scrollcue js-reveal" aria-hidden="true">
          <span />
          <em>scroll</em>
        </div>
      </section>

      {/* INTRO ------------------------------------------------------ */}
      <section className="wa-intro">
        <span className="wa-quote-mark" aria-hidden="true">
          &ldquo;
        </span>
        <p className="js-reveal">
          Every application we build starts with the same question:{" "}
          <em>what does this data need to do, before it ever needs to look
          like anything?</em> Everything below is the method that answers it.
        </p>
      </section>

      {/* PROCESS ------------------------------------------------------ */}
      <section className="wa-process">
        <header className="wa-section-head js-reveal">
          <span className="wa-eyebrow">The Process</span>
          <h2>Six sheets, in order</h2>
        </header>

        <div className="wa-stage-grid">
          {STAGES.map((s, i) => (
            <article
              className="wa-stage js-reveal why-card"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
              key={s.n}
            >
              <CropMarks />
              <span className="wa-stage-n">{s.n}</span>
              <div className="wa-stage-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* MATERIALS ------------------------------------------------------ */}
      <section className="wa-materials">
        <header className="wa-section-head js-reveal">
          <span className="wa-eyebrow">Materials</span>
          <h2>What this application is built with</h2>
        </header>

        <dl className="wa-spec js-reveal">
          {MATERIALS.map(([label, value]) => (
            <div className="wa-spec-row" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* NOTES ------------------------------------------------------ */}
      <section className="wa-notes">
        <header className="wa-section-head js-reveal">
          <span className="wa-eyebrow">Field Notes</span>
          <h2>Rules we keep re-checking</h2>
        </header>

        <ul className="wa-notes-list">
          {NOTES.map((n, i) => (
            <li
              className="js-reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
              key={i}
            >
              <span className="wa-check" aria-hidden="true">
                ✓
              </span>
              {n}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA ------------------------------------------------------ */}
      <section className="wa-cta">
        <CropMarks />
        <div className="wa-stamp js-reveal" aria-hidden="true">
          <span>Approved</span>
          <span>For Build</span>
        </div>
        <h2 className="js-reveal">Want an application built this way?</h2>
        <p className="js-reveal">
          The contact details are down in the footer — sheet 07, if we're
          keeping count.
        </p>
      </section>
    </main>
  );
}