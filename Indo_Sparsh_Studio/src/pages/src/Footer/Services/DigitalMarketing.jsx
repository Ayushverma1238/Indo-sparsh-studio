import React, { useState, useEffect } from "react";
import './DigitalMarketing.css'
// ---- EDIT THIS: put your real digital marketing link here ----
const DIGITAL_MARKETING_LINK = "https://example.com/digital-marketing";

// ---- Dummy data for the trend cards. Replace with your real work/content. ----
const trends = [
  {
    id: 1,
    tag: "AI",
    title: "AI-Powered Personalization",
    desc: "Using machine learning to tailor content, offers and product recommendations to each visitor in real time.",
    stat: "+38%",
    statLabel: "engagement lift",
  },
  {
    id: 2,
    tag: "Video",
    title: "Short-Form Video Dominance",
    desc: "Reels, Shorts and TikTok-style formats are driving the highest reach-per-rupee across every channel we track.",
    stat: "2.4x",
    statLabel: "avg. reach",
  },
  {
    id: 3,
    tag: "Search",
    title: "Voice & Visual Search",
    desc: "Optimizing content for spoken queries and image-based search as discovery moves beyond the keyboard.",
    stat: "27%",
    statLabel: "of queries",
  },
  {
    id: 4,
    tag: "Creators",
    title: "Micro-Influencer Partnerships",
    desc: "Smaller, niche creators are outperforming celebrity endorsements on trust and conversion rate.",
    stat: "5.3x",
    statLabel: "ROI vs. paid ads",
  },
  {
    id: 5,
    tag: "Privacy",
    title: "Privacy-First Marketing",
    desc: "Zero-party data and consent-based targeting are replacing third-party cookies across every major platform.",
    stat: "100%",
    statLabel: "cookieless-ready",
  },
  {
    id: 6,
    tag: "AR",
    title: "Interactive & AR Content",
    desc: "Try-before-you-buy AR experiences are turning passive scrollers into active, confident shoppers.",
    stat: "+64%",
    statLabel: "conversion rate",
  },
];

export default function DigitalMarketingShowcase() {
  const [theme, setTheme] = useState("light");

  // Respect the user's OS preference on first load
  useEffect(() => {
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="dm-root" data-theme={theme}>
      
      <div className="dm-noise" aria-hidden="true" />

      <main className="dm-main">
        <section className="dm-hero">
          <span className="dm-pulse-badge">
            <span className="dm-pulse-dot" />
            Live from the field
          </span>
          <h1 className="dm-hero-title">
            Digital marketing,
            <br />
            <span className="dm-hero-title-accent">tuned to what's next.</span>
          </h1>
          <p className="dm-hero-sub">
            A running log of the trends we're testing, tracking and shipping
            into real campaigns this quarter.
          </p>

          <a
            className="dm-link-card"
            href={DIGITAL_MARKETING_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="dm-link-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <path
                  d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="dm-link-text">
              <span className="dm-link-title">
                View our digital marketing work
              </span>
              <span className="dm-link-url">
                {DIGITAL_MARKETING_LINK.replace("https://", "")}
              </span>
            </span>
            <span className="dm-link-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </section>

        <section className="dm-grid" aria-label="Digital marketing trends">
          {trends.map((t, i) => (
            <article
              className="dm-card why-card"
              key={t.id}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="dm-card-top">
                <span className="dm-card-tag">{t.tag}</span>
                <span className="dm-card-wave" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <h3 className="dm-card-title">{t.title}</h3>
              <p className="dm-card-desc">{t.desc}</p>
              <div className="dm-card-footer">
                <span className="dm-card-stat">{t.stat}</span>
                <span className="dm-card-stat-label">{t.statLabel}</span>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="dm-footer">
        <p>
          Built to track what's trending in digital marketing — updated
          regularly.
        </p>
      </footer>
    </div>
  );
}
