import React, { useEffect, useRef } from "react";
import "./EcommercePage.css";

/**
 * EcommerceBuildStory
 * Drop this component between your existing <Navbar /> and <Footer />.
 * It documents, in "blueprint sheet" form, how the e-commerce site was built.
 * Reuses the same design system / dark-light theming as LandingPageBuildStory,
 * driven by the same body.dark-mode / body.light-mode classes.
 *
 * Usage:
 *   <Navbar />
 *   <EcommerceBuildStory />
 *   <Footer />
 */

const STAGES = [
  {
    n: "01",
    title: "Discover",
    copy:
      "Scope the catalog, the buyer, and the one path from browse to purchase before touching a product card.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="21" cy="21" r="12" />
        <path d="M30 30l9 9" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Catalog",
    copy:
      "Model the product data — variants, pricing, stock, images — so every listing pulls from one clean source.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="10" width="14" height="14" />
        <rect x="26" y="10" width="14" height="14" />
        <rect x="8" y="26" width="14" height="12" />
        <rect x="26" y="26" width="14" height="12" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Cart & Checkout",
    copy:
      "Persist the cart, keep tax and shipping visible early, and cut checkout down to as few steps as it can hold.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 10h5l4 20h20l4-14H15" />
        <circle cx="20" cy="36" r="2.4" />
        <circle cx="33" cy="36" r="2.4" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Payments & Trust",
    copy:
      "Wire a real payment gateway, show reviews and return policy up front, and never surprise anyone at the last step.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="14" width="36" height="22" rx="2" />
        <path d="M6 20h36" />
        <path d="M12 28h8" />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Search & Merchandising",
    copy:
      "Add filters, search, and related-product logic that actually reflects how people shop, not how the database is shaped.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="20" cy="20" r="10" />
        <path d="M27 27l11 11" />
        <path d="M15 20h10M20 15v10" />
      </svg>
    ),
  },
  {
    n: "06",
    title: "Launch & Iterate",
    copy:
      "Ship with analytics and A/B testing wired in from day one, then let real orders tell you what to fix next.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 34l8-10 7 6 8-14 9 8" />
        <path d="M8 40h32" />
      </svg>
    ),
  },
];

const MATERIALS = [
  ["Framework", "React, function components + hooks"],
  ["Payments", "Stripe / Razorpay for checkout and refunds"],
  ["Catalog data", "Structured product schema — variants, SKUs, stock levels"],
  ["Cart state", "Persisted client-side, synced to the server on checkout"],
  ["Styling", "Plain CSS, custom properties for every token, light + dark"],
  ["Analytics", "Funnel and conversion tracking wired in at launch, not after"],
];

const NOTES = [
  "The product page's one job is to answer 'is this the right one for me?' — fast.",
  "Never hide shipping cost or tax until the last checkout step.",
  "Every filter should map to a real question a shopper is already asking.",
  "Empty cart, empty search, out-of-stock — design those states, don't leave them default.",
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

export default function EcommerceBuildStory() {
  const rootRef = useReveal();

  return (
    <main className="bp" ref={rootRef}>
      {/* HERO ------------------------------------------------------ */}
      <section className="bp-hero">
        <CropMarks />

        <p className="bp-eyebrow js-reveal">Process Document — Commerce Platform Build</p>

        <h1 className="bp-title" aria-label="How we build an e-commerce website">
          {["How", "we", "build", "an", "e-commerce", "site"].map((w, i) => (
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
          Not a theme with a cart plugged in — a sequence of deliberate calls
          about catalog, checkout, and trust, drafted one layer at a time.
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
            <span className="bp-meta-value">02</span>
          </div>
          <div>
            <span className="bp-meta-label">Status</span>
            <span className="bp-meta-value bp-meta-live">Live</span>
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
          Every store we ship starts with the same question:{" "}
          <em>what has to be true for someone to trust us with their card?</em>{" "}
          Everything below is the method that answers it, sheet by sheet.
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
          <h2>What this store was built with</h2>
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
          <h2>Rules we keep re-checking</h2>
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
        <h2 className="js-reveal">Want a store built this way?</h2>
        <p className="js-reveal">
          The contact details are down in the footer — sheet 07, if we're
          keeping count.
        </p>
      </section>
    </main>
  );
}