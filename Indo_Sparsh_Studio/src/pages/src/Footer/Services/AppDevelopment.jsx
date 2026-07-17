import React, { useState, useEffect, useRef } from "react";
import "./AppDevelopment.css";
import { useNavigate } from "react-router-dom";

/* ---------- scroll-reveal wrapper ---------- */
function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`adh-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------- icons (inline, stroke = currentColor) ---------- */
const icons = {
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M10.5 18h3" strokeLinecap="round" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2.5" y="4" width="19" height="14" rx="2" />
      <path d="M2.5 8.5h19" strokeLinecap="round" />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <circle cx="12" cy="18" r="2.4" />
      <path d="M8 7.2 10.5 16M16 7.2 13.5 16M8.4 6h7.2" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 21 4.5 15.5 15 5a2.1 2.1 0 0 1 3 3L7.5 18.5 3 21Z" />
    </svg>
  ),
};

const services = [
  { icon: "mobile", title: "Mobile app development", text: "Native iOS and Android apps, or one React Native codebase for both, built to feel native either way." },
  { icon: "web", title: "Web app development", text: "Fast, accessible web apps and dashboards that hold up under real usage, not just a demo." },
  { icon: "api", title: "Backend & APIs", text: "Data models, APIs and infrastructure sized for where you are now and where you're headed." },
  { icon: "design", title: "Product design", text: "Wireframes through to a polished UI kit, with usability testing built into the timeline." },
];

const process = [
  { step: "01", title: "Discover", text: "We map the problem, the users, and what success looks like in 90 days." },
  { step: "02", title: "Design", text: "Wireframes, prototypes, and a design system you can build on past launch." },
  { step: "03", title: "Build", text: "Two-week sprints, a staging build you can click through at every step." },
  { step: "04", title: "Launch", text: "Store submissions, QA, and a rollout plan that limits day-one risk." },
  { step: "05", title: "Support", text: "Monitoring, fixes, and a backlog for what to build next." },
];

const stack = [
  "React Native", "Swift", "Kotlin", "Flutter", "Node.js", "GraphQL",
  "PostgreSQL", "AWS", "Firebase", "TypeScript", "Docker", "Redis",
];

const testimonials = [
  { quote: "They shipped our MVP in nine weeks and it hasn't needed a rewrite since.", name: "Priya Nair", role: "Founder, Fieldnote" },
  { quote: "The handoff docs alone saved our in-house team a month of ramp-up.", name: "Marcus Ito", role: "VP Engineering, Lattis" },
  { quote: "Best communicators we've worked with on a contract build, by far.", name: "Sara Delgado", role: "Product Lead, Overtone" },
];

/* ---------- page ---------- */
export default function AppDevPage() {
    const navigate = useNavigate()
  return (
    <div className="appdev-page" >
     

      {/* ---------- Hero ---------- */}
      <section className="appdev-hero">
        <div className="appdev-hero__bg" aria-hidden="true" />
        <div className="appdev-hero__inner">
          <div className="appdev-hero__content">
            <span className="appdev-hero__eyebrow">App Development</span>
            <h1 className="appdev-hero__headline">
              We turn ideas into
              <span className="appdev-hero__headline-accent"> apps that ship.</span>
            </h1>
            <p className="appdev-hero__subtext">
              From first sketch to app-store release, we design, build and scale
              iOS, Android and web apps for teams who'd rather move fast than
              move slow.
            </p>
            <div className="appdev-hero__cta-row">
              <button className="appdev-btn appdev-btn--primary">Start a project</button>
              <button className="appdev-btn appdev-btn--ghost">See our work</button>
            </div>
            <dl className="appdev-hero__stats">
              <div className="appdev-hero__stat"><dt>120+</dt><dd>apps shipped</dd></div>
              <div className="appdev-hero__stat"><dt>4.8</dt><dd>avg store rating</dd></div>
              <div className="appdev-hero__stat"><dt>9 yrs</dt><dd>building for clients</dd></div>
            </dl>
          </div>

          <div className="appdev-hero__visual">
            <svg className="appdev-hero__connector" viewBox="0 0 400 320" aria-hidden="true">
              <path d="M40 100 C 140 100, 140 220, 240 220 S 340 260, 360 260" className="appdev-hero__connector-path" />
            </svg>
            <div className="appdev-editor" aria-hidden="true">
              <div className="appdev-editor__bar"><span /><span /><span /></div>
              <div className="appdev-editor__body">
                {["function launch(idea) {", "  const app = build(idea);", "  app.ship();", "  return app.grow();", "}"].map((line, i) => (
                  <div className="appdev-editor__line" style={{ "--i": i }} key={i}>{line}</div>
                ))}
              </div>
            </div>
            <div className="appdev-phone" aria-hidden="true">
              <div className="appdev-phone__notch" />
              <div className="appdev-phone__screen">
                <div className="appdev-phone__card" />
                <div className="appdev-phone__row" />
                <div className="appdev-phone__row appdev-phone__row--short" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="adh-section">
        <Reveal className="adh-section__head">
          <span className="adh-kicker">What we build</span>
          <h2 className="adh-h2">One team, the whole stack</h2>
          <p className="adh-lead">Design, mobile, web and backend, working from the same brief instead of handoffs between agencies.</p>
        </Reveal>

        <div className="adh-grid adh-grid--4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="adh-card why-card">
              <div className="adh-card__icon">{icons[s.icon]}</div>
              <h3 className="adh-card__title">{s.title}</h3>
              <p className="adh-card__text">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="adh-section adh-section--muted">
        <Reveal className="adh-section__head">
          <span className="adh-kicker">How we work</span>
          <h2 className="adh-h2">Five steps, no surprises</h2>
          <p className="adh-lead">The same process for a two-person startup and a 200-person team, scaled to fit.</p>
        </Reveal>

        <div className="adh-process">
          <div className="adh-process__line" aria-hidden="true" />
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 100} className="adh-process__item">
              <span className="adh-process__step">{p.step}</span>
              <h3 className="adh-process__title">{p.title}</h3>
              <p className="adh-process__text">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Tech stack marquee ---------- */}
      <section className="adh-section adh-section--tight">
        <Reveal className="adh-section__head">
          <span className="adh-kicker">Tools we reach for</span>
          <h2 className="adh-h2">Built on a proven stack</h2>
        </Reveal>

        <div className="adh-marquee">
          <div className="adh-marquee__track">
            {[...stack, ...stack].map((item, i) => (
              <span className="adh-marquee__item why-card" key={i}>{item}</span>
            ))}
          </div>
        </div>
      </section>
{/* 
      ---------- Testimonials ----------
      <section className="adh-section">
        <Reveal className="adh-section__head">
          <span className="adh-kicker">Client feedback</span>
          <h2 className="adh-h2">What it's like to work with us</h2>
        </Reveal>

        <div className="adh-grid adh-grid--3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="adh-quote why-card">
              <p className="adh-quote__text">“{t.quote}”</p>
              <div className="adh-quote__author">
                <span className="adh-quote__name">{t.name}</span>
                <span className="adh-quote__role">{t.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section> */}

      {/* ---------- Final CTA ---------- */}
      <section className="adh-cta">
        <Reveal className="adh-cta__inner">
          <h2 className="adh-cta__title">Have an app in mind?</h2>
          <p className="adh-cta__text">Tell us what you're building. We'll reply with a scoped timeline within two business days.</p>
          <div className="appdev-hero__cta-row">
            <button className="appdev-btn appdev-btn--primary">Start a project</button>
            <button onClick={()=> navigate("/contact")} className="appdev-btn appdev-btn--ghost">Book a call</button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}