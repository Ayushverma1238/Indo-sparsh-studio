import React, { useEffect, useRef } from "react";
import "./LandingPage.css";

/**
 * LandingPageBuildStory
 * Drop this component between your existing <Navbar /> and <Footer />.
 * It documents, in "blueprint sheet" form, how the landing page itself was built.
 *
 * Usage:
 *   <Navbar />
 *   <LandingPageBuildStory />
 *   <Footer />
 */

const STAGES = [
  {
    n: "01",
    title: "Brief",
    copy:
      "Pin down one job the page has to do, who it's for, and what 'done' looks like before a single pixel moves.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M12 8h18l6 6v26H12z" />
        <path d="M30 8v6h6" />
        <path d="M18 24h12M18 30h12M18 18h6" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Structure",
    copy:
      "Wireframe the skeleton — hero, proof, path to action — with boxes and arrows, no color or type yet.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="10" width="32" height="9" />
        <rect x="8" y="22" width="14" height="16" />
        <rect x="26" y="22" width="14" height="7" />
        <rect x="26" y="31" width="14" height="7" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "System",
    copy:
      "Fix the tokens — palette, type scale, spacing unit, motion rules — so every later decision is a lookup, not a guess.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="16" cy="16" r="6" />
        <rect x="26" y="10" width="12" height="12" />
        <path d="M12 30h24M12 36h16" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Build",
    copy:
      "Semantic markup first, then components, then the responsive scaffold. The DOM should read like an outline.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M16 14 8 24l8 10M32 14l8 10-8 10M27 12l-6 24" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Motion",
    copy:
      "Add movement where it explains something — order, cause, feedback — and cut every animation that's only decoration.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 30c6 0 6-14 12-14s6 14 12 14 6-14 12-14" />
      </svg>
    ),
  },
  {
    n: "06",
    title: "Ship",
    copy:
      "Performance pass, keyboard and contrast check, then launch — and watch how real people actually use it.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 6c6 4 8 10 8 18 0 4-2 8-4 10l-4 4-4-4c-2-2-4-6-4-10 0-8 2-14 8-18z" />
        <circle cx="24" cy="20" r="3" />
        <path d="M18 32l-4 8M30 32l4 8" />
      </svg>
    ),
  },
];

const MATERIALS = [
  ["Framework", "React, function components + hooks"],
  ["Styling", "Plain CSS, custom properties for every token"],
  ["Motion", "CSS keyframes + IntersectionObserver for scroll reveals"],
  ["Type", "Space Grotesk (display) · Inter (body) · IBM Plex Mono (data)"],
  ["Accessibility", "Visible focus states, reduced-motion fallback"],
  ["Performance", "No layout-shifting images above the fold"],
];

const NOTES = [
  "One job per page. If it needs two headlines, it needs two pages.",
  "The hero is a thesis — it should make the rest of the scroll optional, not necessary.",
  "Every animation should answer 'what does this explain?' — if nothing, cut it.",
  "Ship the boring version first. Add motion once the structure holds without it.",
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
      <span className="crop crop-tl" aria-hidden="true" />
      <span className="crop crop-tr" aria-hidden="true" />
      <span className="crop crop-bl" aria-hidden="true" />
      <span className="crop crop-br" aria-hidden="true" />
    </>
  );
}

export default function LandingPageBuildStory() {
  const rootRef = useReveal();

  return (
    <main className="bp" ref={rootRef}>
      {/* HERO ------------------------------------------------------ */}
      <section className="bp-hero">
        <CropMarks />

        <p className="bp-eyebrow js-reveal">Process Document — Landing Page Build</p>

        <h1 className="bp-title" aria-label="How I build a landing page">
          {["How", "I", "build", "a", "landing", "page"].map((w, i) => (
            <span
              className="bp-word"
              style={{ animationDelay: `${0.12 + i * 0.08}s` }}
              key={i}
            >
              {w}
            </span>
          ))}
        </h1>

        <p className="bp-subtitle js-reveal">
          Not a template filled in — a sequence of deliberate calls, drafted
          like a set of construction sheets, one decision per layer.
        </p>

        <div className="bp-metarow js-reveal">
          <div>
            <span className="bp-meta-label">Scale</span>
            <span className="bp-meta-value">1:1</span>
          </div>
          <div>
            <span className="bp-meta-label">Sheets</span>
            <span className="bp-meta-value">01–06</span>
          </div>
          <div>
            <span className="bp-meta-label">Rev</span>
            <span className="bp-meta-value">04</span>
          </div>
          <div>
            <span className="bp-meta-label">Status</span>
            <span className="bp-meta-value bp-meta-live">In use</span>
          </div>
        </div>

        <div className="bp-scrollcue js-reveal" aria-hidden="true">
          <span />
          <em>scroll</em>
        </div>
      </section>

      {/* INTRO ------------------------------------------------------ */}
      <section className="bp-intro">
        <span className="bp-quote-mark" aria-hidden="true">
          &ldquo;
        </span>
        <p className="js-reveal">
          Every page on this site started the same way this one did — as a
          blank sheet with a single question at the top:{" "}
          <em>what is this page's one job?</em> Everything below is that
          method, laid out the way I actually work through it.
        </p>
      </section>

      {/* PROCESS ------------------------------------------------------ */}
      <section className="bp-process">
        <header className="bp-section-head js-reveal">
          <span className="bp-eyebrow">The Process</span>
          <h2>Six sheets, in order</h2>
        </header>

        <div className="bp-stage-grid">
          {STAGES.map((s, i) => (
            <article
              className="bp-stage js-reveal why-card"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
              key={s.n}
            >
              <CropMarks />
              <span className="bp-stage-n">{s.n}</span>
              <div className="bp-stage-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* MATERIALS ------------------------------------------------------ */}
      <section className="bp-materials">
        <header className="bp-section-head js-reveal">
          <span className="bp-eyebrow">Materials</span>
          <h2>What this sheet was drawn with</h2>
        </header>

        <dl className="bp-spec js-reveal">
          {MATERIALS.map(([label, value]) => (
            <div className="bp-spec-row" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* NOTES ------------------------------------------------------ */}
      <section className="bp-notes">
        <header className="bp-section-head js-reveal">
          <span className="bp-eyebrow">Field Notes</span>
          <h2>Margin notes I keep re-reading</h2>
        </header>

        <ul className="bp-notes-list">
          {NOTES.map((n, i) => (
            <li
              className="js-reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
              key={i}
            >
              <span className="bp-check" aria-hidden="true">
                ✓
              </span>
              {n}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA ------------------------------------------------------ */}
      <section className="bp-cta">
        <CropMarks />
        <div className="bp-stamp js-reveal" aria-hidden="true">
          <span>Approved</span>
          <span>For Build</span>
        </div>
        <h2 className="js-reveal">Want a page built this way?</h2>
        <p className="js-reveal">
          The contact details are down in the footer — sheet 07, if we're
          keeping count.
        </p>
      </section>
    </main>
  );
}