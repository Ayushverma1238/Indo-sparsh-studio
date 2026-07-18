import React, { useState, useEffect, useRef } from "react";
import "./SocialMediaPage.css";
import { useNavigate } from "react-router-dom";

/* ---------- count-up stat, animates once when scrolled into view ---------- */
function StatNumber({ value, suffix = "" }) {
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
          const duration = 1100;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(value * eased));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="ss-stat-number">
      {display.toLocaleString()}{suffix}
    </span>
  );
}

/* ---------- work data ---------- */
const work = [
  {
    platform: "Instagram",
    gradient: "linear-gradient(135deg,#ff5c82,#ffb020)",
    client: "Fernweh Coffee",
    category: "Reels campaign",
    caption: "3-week reel series turned a local roaster into a weekend destination.",
    likes: 18400,
    comments: 612,
    shares: 940,
    rotate: -4,
  },
  {
    platform: "TikTok",
    gradient: "linear-gradient(135deg,#7c5cff,#ff5c82)",
    client: "Loom & Co.",
    category: "Product drops",
    caption: "Launch-day content that sold through inventory in under six hours.",
    likes: 52100,
    comments: 1830,
    shares: 4200,
    rotate: 3,
  },
  {
    platform: "LinkedIn",
    gradient: "linear-gradient(135deg,#14b8a6,#2f5fff)",
    client: "Northbound SaaS",
    category: "Thought leadership",
    caption: "A founder-voice series that tripled inbound demo requests in a quarter.",
    likes: 3200,
    comments: 284,
    shares: 610,
    rotate: -2,
  },
  {
    platform: "Pinterest",
    gradient: "linear-gradient(135deg,#ff8fb1,#ffd166)",
    client: "Marlow Studio",
    category: "Seasonal boards",
    caption: "Evergreen pins still driving traffic eight months after posting.",
    likes: 9600,
    comments: 118,
    shares: 2750,
    rotate: 5,
  },
  {
    platform: "YouTube",
    gradient: "linear-gradient(135deg,#ff3d68,#7c5cff)",
    client: "RideOut Gear",
    category: "Shorts strategy",
    caption: "A shorts-first pivot that grew subscribers 4x in ten weeks.",
    likes: 27300,
    comments: 940,
    shares: 1500,
    rotate: -3,
  },
  {
    platform: "X",
    gradient: "linear-gradient(135deg,#1b1b23,#5b5f6b)",
    client: "Datapoint",
    category: "Community & support",
    caption: "Real-time replies that turned a support channel into a growth channel.",
    likes: 6100,
    comments: 502,
    shares: 380,
    rotate: 2,
  },
];

export default function SocialShowcase() {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate()
  return (
    <section className="ss" data-theme={theme}>
      <div className="ss__orb ss__orb--a" aria-hidden="true" />
      <div className="ss__orb ss__orb--b" aria-hidden="true" />

      <div className="ss__inner">
        <div className="ss__intro">
          <span className="ss__eyebrow">Social Media Management</span>
          <h1 className="ss__headline">
            Content that gets <span className="ss__headline-accent">talked about.</span>
          </h1>
          <p className="ss__subtext">
            We plan, create and post across every platform that matters to your
            audience, then double down on whatever's actually working.
          </p>

          <div className="ss__cta-row">
            <button onClick={() => navigate('/contact')} className="ss-btn ss-btn--primary">Book a strategy call</button>
          </div>

          <div className="ss__stats">
            <div className="ss__stats-item">
              <StatNumber value={118} suffix="M+" />
              <span>impressions delivered</span>
            </div>
            <div className="ss__stats-item">
              <StatNumber value={340} suffix="%" />
              <span>avg engagement lift</span>
            </div>
            <div className="ss__stats-item">
              <StatNumber value={60} suffix="+" />
              <span>brands managed</span>
            </div>
          </div>
        </div>

        <div className="ss__gallery">
          {work.map((item, i) => (
            <article
              className="ss-card why-card"
              key={item.client}
              style={{ "--rotate": `${item.rotate}deg`, "--i": i, padding:'0' }}
            >
              <div className="ss-card__media" style={{ background: item.gradient }}>
                <span className="ss-card__platform">{item.platform}</span>
                <span className="ss-card__like" aria-hidden="true">♥</span>
              </div>
              <div className="ss-card__body">
                <span className="ss-card__category">{item.category}</span>
                <h3 className="ss-card__client">{item.client}</h3>
                <p className="ss-card__caption">{item.caption}</p>
                <div className="ss-card__engagement">
                  <span><StatNumber value={item.likes} /> likes</span>
                  <span><StatNumber value={item.comments} /> comments</span>
                  <span><StatNumber value={item.shares} /> shares</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}