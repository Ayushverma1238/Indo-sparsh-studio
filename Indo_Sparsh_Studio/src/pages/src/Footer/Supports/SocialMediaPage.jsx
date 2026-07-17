import React, { useEffect, useRef, useState } from "react";
import "./SocialMediaPage.css";

/**
 * SocialMediaHandlingPage
 * -------------------------------------------------
 * A standalone page explaining how the team handles social media
 * posts: the pipeline from draft to archive, moderation rules,
 * response times, and what data gets kept.
 *
 * Usage:
 *   import SocialMediaHandlingPage from "./SocialMediaHandlingPage";
 *   <Route path="/social-media-handling" element={<SocialMediaHandlingPage />} />
 *
 * Theme:
 *   Toggles [data-theme="light" | "dark"] on the page's root element.
 *   Defaults to the user's OS preference, remembers the choice for
 *   the session, and every color is a CSS variable so you can retint
 *   it without touching the animations.
 */

/* ---------------------------------- icons ---------------------------------- */
/* Small inline SVGs so this file has zero icon-library dependency. */

const IconSun = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" {...props}>
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
    <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
    </g>
  </svg>
);

const IconMoon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" {...props}>
    <path
      d="M20.2 14.7A8.6 8.6 0 1 1 9.3 3.8a7 7 0 0 0 10.9 10.9Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPencil = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
    <path
      d="M4 20l.9-3.6L15.6 5.7a1.5 1.5 0 0 1 2.1 0l.6.6a1.5 1.5 0 0 1 0 2.1L7.6 19.1 4 20Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const IconShield = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
    <path
      d="M12 3.5l7 2.6v5.2c0 4.5-3 7.9-7 9.2-4-1.3-7-4.7-7-9.2V6.1l7-2.6Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M9 12.2l2 2 4-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCalendar = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3.5 9.5h17M8 3v3.4M16 3v3.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconSend = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
    <path d="M21 3 3 10.5l7.2 2.8L13 20.5 21 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M10.2 13.3 21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconEye = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconArchive = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
    <rect x="3.5" y="4" width="17" height="4.4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4.8 8.4v9.1a2 2 0 0 0 2 2h10.4a2 2 0 0 0 2-2V8.4M10 12.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconFlag = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <path d="M5 21V4M5 4.5c2-1.2 4-1.2 6 0s4 1.2 6 0v8c-2 1.2-4 1.2-6 0s-4-1.2-6 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

/* --------------------------- signal / waveform bars --------------------------- */
/* The page's signature element: a live, ambient "on-air" signal that never
   fully repeats the same rhythm twice, echoed at smaller scale on hover states. */

function SignalBars({ count = 28, className = "" }) {
  const bars = Array.from({ length: count });
  return (
    <div className={`smp-signal ${className}`} aria-hidden="true">
      {bars.map((_, i) => (
        <span
          key={i}
          className="smp-signal__bar"
          style={{
            animationDelay: `${(i % 9) * 0.09}s`,
            animationDuration: `${1.1 + (i % 5) * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}

/* -------------------------------- reveal-on-scroll -------------------------------- */

function useReveal() {
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
      { threshold: 0.18 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`smp-reveal ${visible ? "smp-reveal--in" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------ data ------------------------------------ */

const PIPELINE = [
  {
    ch: "CH.01",
    label: "Draft",
    icon: IconPencil,
    body:
      "Every post starts as a document, not a text box. Writers work from the content calendar and the brand voice guide, so nothing goes out written in a rush.",
  },
  {
    ch: "CH.02",
    label: "Review",
    icon: IconShield,
    body:
      "A second person checks facts, links, and alt text before anything is approved. Anything touching a live issue also gets a look from the comms lead.",
  },
  {
    ch: "CH.03",
    label: "Schedule",
    icon: IconCalendar,
    body:
      "Approved posts go into the queue with a time and a channel attached. We don't post ad hoc from a phone in the moment — the queue is the only path to publish.",
  },
  {
    ch: "CH.04",
    label: "Publish",
    icon: IconSend,
    body:
      "The post goes live at its scheduled time on the assigned channel. Platform-specific formatting (crops, captions, hashtags) is set at this stage, not improvised.",
  },
  {
    ch: "CH.05",
    label: "Monitor",
    icon: IconEye,
    body:
      "Comments and replies are triaged against our moderation guidelines for the first 24 hours, when most engagement happens, then checked daily after that.",
  },
  {
    ch: "CH.06",
    label: "Archive",
    icon: IconArchive,
    body:
      "Published posts and their engagement numbers are logged for reporting, then archived. We keep the record; we don't keep private message contents.",
  },
];

const PRINCIPLES = [
  {
    title: "Plain language",
    body: "We write the way we'd talk to someone standing in front of us. No jargon dressed up as tone.",
  },
  {
    title: "Accuracy before speed",
    body: "If a claim needs a source, we find it before we post — not after someone asks in the comments.",
  },
  {
    title: "Accessible by default",
    body: "Alt text and captions are part of the post, not an afterthought. No walls of unreadable all-caps.",
  },
  {
    title: "One voice, many rooms",
    body: "The brand sounds like itself everywhere, but a caption is written for the room it's posted in.",
  },
];

const RESPONSE_SLA = [
  { tag: "Safety report", time: "within 1 hour", tone: "signal" },
  { tag: "Direct question", time: "within 4 business hours", tone: "signal-2" },
  { tag: "General comment", time: "within 1 business day", tone: "warn" },
];

const DATA_POINTS = [
  "Public engagement counts — likes, shares, replies, saves.",
  "Aggregated audience trends from each platform's own analytics.",
  "Nothing from direct messages beyond what the platform itself stores.",
  "No individual profile is built or sold from what we see in comments.",
];

/* ------------------------------------ page ------------------------------------ */

export default function SocialMediaHandlingPage() {
  
  return (
    <div className="smp-page" >
    

      {/* ---------- hero ---------- */}
      <section className="smp-hero">
        <SignalBars className="smp-hero__signal" />
        <div className="smp-hero__content">
          <p className="smp-eyebrow">How we handle social media</p>
          <h1 className="smp-hero__title">
            One signal,
            <br />
            every channel.
          </h1>
          <p className="smp-hero__sub">
            Every post we publish — announcement, reply, or correction — moves through the same
            pipeline before it goes live. This page is that pipeline, in plain terms.
          </p>
          <div className="smp-status-row">
            <span className="smp-pill smp-pill--live">
              <span className="smp-pill__dot" /> LIVE
            </span>
            <span className="smp-pill smp-pill--scheduled">
              <span className="smp-pill__dot" /> SCHEDULED
            </span>
            <span className="smp-pill smp-pill--archived">
              <span className="smp-pill__dot" /> ARCHIVED
            </span>
          </div>
        </div>
      </section>

      {/* ---------- pipeline ---------- */}
      <section className="smp-section" id="pipeline">
        <Reveal as="div" className="smp-section__head">
          <p className="smp-eyebrow">The pipeline</p>
          <h2 className="smp-section__title">From draft to archive, six steps.</h2>
        </Reveal>

        <div className="smp-pipeline">
          {PIPELINE.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal as="article" className="smp-card why-card" delay={i * 70} key={step.ch}>
                <div className="smp-card__top">
                  <span className="smp-card__ch">{step.ch}</span>
                  <span className="smp-card__icon">
                    <Icon />
                  </span>
                </div>
                <h3 className="smp-card__title">{step.label}</h3>
                <p className="smp-card__body">{step.body}</p>
                <SignalBars count={10} className="smp-card__signal" />
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- principles ---------- */}
      <section className="smp-section smp-section--muted" id="principles">
        <Reveal as="div" className="smp-section__head">
          <p className="smp-eyebrow">Voice &amp; review</p>
          <h2 className="smp-section__title">What we check before anything ships.</h2>
        </Reveal>

        <div className="smp-principles">
          {PRINCIPLES.map((p, i) => (
            <Reveal as="div" className="smp-principle" delay={i * 60} key={p.title}>
              <span className="smp-principle__index">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="smp-principle__title">{p.title}</h3>
                <p className="smp-principle__body">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- moderation & response ---------- */}
      <section className="smp-section" id="moderation">
        <Reveal as="div" className="smp-section__head">
          <p className="smp-eyebrow">Moderation &amp; response</p>
          <h2 className="smp-section__title">How fast we answer, and what we remove.</h2>
        </Reveal>

        <div className="smp-split">
          <Reveal as="div" className="smp-sla">
            {RESPONSE_SLA.map((row) => (
              <div className="smp-sla__row why-card" key={row.tag}>
                <span className={`smp-sla__dot smp-sla__dot--${row.tone}`} />
                <span className="smp-sla__tag">{row.tag}</span>
                <span className="smp-sla__time">{row.time}</span>
              </div>
            ))}
          </Reveal>

          <Reveal as="div" className="smp-remove" delay={90}>
            <h3 className="smp-remove__title">We remove</h3>
            <ul className="smp-remove__list">
              <li>Spam, scams, and impersonation.</li>
              <li>Hate speech, harassment, or threats.</li>
              <li>Anyone's private contact or financial details.</li>
            </ul>
            <h3 className="smp-remove__title smp-remove__title--keep">We keep</h3>
            <ul className="smp-remove__list">
              <li>Criticism of us, even when it's blunt.</li>
              <li>Questions we haven't answered yet.</li>
              <li>Disagreement that stays aimed at the topic.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- data ---------- */}
      <section className="smp-section smp-section--muted" id="data">
        <Reveal as="div" className="smp-section__head ">
          <p className="smp-eyebrow">Data we keep</p>
          <h2 className="smp-section__title">Nothing beyond what's already public.</h2>
        </Reveal>

        <Reveal as="ul" className="smp-data-list">
          {DATA_POINTS.map((d) => (
            <li className="smp-data-list__item" key={d}>
              <span className="smp-data-list__mark" />
              {d}
            </li>
          ))}
        </Reveal>
      </section>

      {/* ---------- report ---------- */}
      <section className="smp-section">
        <Reveal as="div" className="smp-report why-card">
          <div>
            <p className="smp-eyebrow">See something off?</p>
            <h2 className="smp-report__title">Tell us and we'll look at it directly.</h2>
          </div>
          <a className="smp-button" href="mailto:contact@indosparsh.com">
            <IconFlag />
            Report a concern
          </a>
        </Reveal>
      </section>

      <footer className="smp-footer">
        <span>Last reviewed today · Social Operations team</span>
      </footer>
    </div>
  );
}