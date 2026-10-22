import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./PortfolioWork.css";
import ScrollBeam from "../../../ScrollBeam";
import SEO from "../../../../utils/seo";

/* ------------------------------------------------------------------
   CONFIG
   ------------------------------------------------------------------ */

const ALL = "All work";
const CONTACT_HREF = "/contact"; // point this at your real contact route

/* The reel pins and moves sideways only on wide screens when motion is allowed. */
const PIN_QUERY =
  "(min-width: 861px) and (prefers-reduced-motion: no-preference)";

/* Every service the studio offers. A project's `service` must match one of these exactly. */
const SERVICES = [
  "Website Development",
  "App Development",
  "Landing Page",
  "E-Commerce Website",
  "Web Application",
  "UI/UX Design",
  "Website Redesign",
  "Content Creation, Editing & Managing",
  "SEO Optimization",
  "Business Profile Creation",
  "Digital Marketing",
  "Social Media Management",
  "Maintenance & Support",
  "Branding And Marketing",
  "Business Consultancy",
  "Graphic Designing",
  "Row Calling Data",
  "Presentation",
  "Website",
];

const WORK = [
  {
    title: "Hola 9",
    date: "Feb 2025",
    service: "Website",
    image:
      "https://res.cloudinary.com/ob3nb2li/image/upload/v1789541624/Screenshot_2026-09-16_122319.png",
    link: "https://hola9.com",
  },
  {
    title: "Laser Eye Institute",
    date: "Jul 2023",
    service: "Website",
    image: "/tech/project3.jpeg",
    link: "https://www.lasereyeinstitute.com/",
  },
  {
    title: "I Smart Business Solutions",
    date: "Jan 2024",
    service: "Website",
    image: "/tech/project4.jpeg",
    link: "https://ibspl.com/",
  },
  {
    title: "Co-Branding & Advertising Rights",
    date: "Mar 2026",
    service: "Presentation",
    image:
      "https://res.cloudinary.com/ob3nb2li/image/upload/v1791719620/Viranch_Metro_Advertising_Proposal.png",
    link: "https://drive.google.com/file/d/1bLglWQo3iIkuuOs_aaK6cwQEmcu5jjKD/view",
  },
  {
    title: "Saffron & Silk",
    date: "Mar 2025",
    service: "E-Commerce Website",
    image: "https://picsum.photos/seed/saffron-silk/640/460",
    link: "https://example.com/saffron-silk",
  },
  {
    title: "Foundry Roasters",
    date: "Aug 2024",
    service: "E-Commerce Website",
    image: "https://picsum.photos/seed/foundry-roasters/640/460",
    link: "https://example.com/foundry-roasters",
  },
  {
    title: "Northwind Dispatch",
    date: "Dec 2023",
    service: "Web Application",
    image: "https://picsum.photos/seed/northwind-dispatch/640/460",
    link: "https://example.com/northwind",
  },
  {
    title: "Ledgerly",
    date: "Apr 2025",
    service: "Web Application",
    image: "https://picsum.photos/seed/ledgerly/640/460",
    link: "https://example.com/ledgerly",
  },
  {
    title: "Aurora Analytics - UI Kit",
    date: "Feb 2025",
    service: "UI/UX Design",
    image: "https://picsum.photos/seed/aurora-uikit/640/460",
    link: "https://example.com/aurora-uikit",
  },
  {
    title: "Marrow & Co. Wireframes",
    date: "Jul 2023",
    service: "UI/UX Design",
    image: "https://picsum.photos/seed/marrow-wireframes/640/460",
    link: "https://example.com/marrow-wireframes",
  },
  {
    title: "Pinewood Realty Refresh",
    date: "May 2024",
    service: "Website Redesign",
    image: "https://picsum.photos/seed/pinewood-realty/640/460",
    link: "https://example.com/pinewood-realty",
  },
  {
    title: "Harbor & Vine, v2",
    date: "Jan 2024",
    service: "Website Redesign",
    image: "https://picsum.photos/seed/harbor-vine/640/460",
    link: "https://example.com/harbor-vine",
  },
  {
    title: "Marrow & Co. Reel Series",
    date: "Nov 2023",
    service: "Content Creation, Editing & Managing",
    image: "https://picsum.photos/seed/marrow-reels/640/460",
    link: "https://example.com/marrow-reels",
  },
  {
    title: "Foundry Roasters - Launch Film",
    date: "Sep 2024",
    service: "Content Creation, Editing & Managing",
    image: "https://picsum.photos/seed/foundry-film/640/460",
    link: "https://example.com/foundry-film",
  },
  {
    title: "Kavir Interiors - SEO Sprint",
    date: "Dec 2024",
    service: "SEO Optimization",
    image: "https://picsum.photos/seed/kavir-seo/640/460",
    link: "https://example.com/kavir-seo",
  },
  {
    title: "Hola 9 - Local Search",
    date: "Mar 2025",
    service: "SEO Optimization",
    image: "https://picsum.photos/seed/hola9-seo/640/460",
    link: "https://example.com/hola9-seo",
  },
  {
    title: "Basilico Trattoria - Profile",
    date: "Jun 2024",
    service: "Business Profile Creation",
    image: "https://picsum.photos/seed/basilico-profile/640/460",
    link: "https://example.com/basilico-profile",
  },
  {
    title: "Circuit Summit - Growth Push",
    date: "Oct 2024",
    service: "Digital Marketing",
    image: "https://picsum.photos/seed/circuit-growth/640/460",
    link: "https://example.com/circuit-growth",
  },
  {
    title: "Saffron & Silk - Socials",
    date: "Apr 2025",
    service: "Social Media Management",
    image: "https://picsum.photos/seed/saffron-socials/640/460",
    link: "https://example.com/saffron-socials",
  },
  {
    title: "Northwind - Care Plan",
    date: "Ongoing",
    service: "Maintenance & Support",
    image: "https://picsum.photos/seed/northwind-care/640/460",
    link: "https://example.com/northwind-care",
  },
  {
    title: "Bloomsbury - Brand System",
    date: "Jan 2025",
    service: "Branding And Marketing",
    image: "https://picsum.photos/seed/bloomsbury-brand/640/460",
    link: "https://example.com/bloomsbury-brand",
  },
  {
    title: "Pinewood Realty - Go-to-Market",
    date: "May 2024",
    service: "Business Consultancy",
    image: "https://picsum.photos/seed/pinewood-consult/640/460",
    link: "https://example.com/pinewood-consult",
  },
  {
    title: "Harbor & Vine - Menu Art",
    date: "Feb 2024",
    service: "Graphic Designing",
    image: "https://picsum.photos/seed/harbor-graphics/640/460",
    link: "https://example.com/harbor-graphics",
  },
  {
    title: "Ledgerly - Data Cleanup",
    date: "Apr 2025",
    service: "Row Calling Data",
    image: "https://picsum.photos/seed/ledgerly-data/640/460",
    link: "https://example.com/ledgerly-data",
  },
];

/* ------------------------------------------------------------------
   DERIVED DATA
   ------------------------------------------------------------------ */

const SERVICE_COUNTS = WORK.reduce((map, w) => {
  map[w.service] = (map[w.service] || 0) + 1;
  return map;
}, {});

const LINES_IN_USE = SERVICES.filter((s) => SERVICE_COUNTS[s]).length;

const byTitle = (title) => WORK.find((w) => w.title === title);
const HERO_PICKS = ["Hola 9", "Foundry Roasters", "Ledgerly"]
  .map(byTitle)
  .filter(Boolean);

/* How far each hero element drifts against the scroll. Positive reads as
   further away (slower), negative as closer (faster). */
const HERO_DEPTHS = [0.12, -0.08, 0.2];
const BADGE_DEPTH = -0.1;

/* ------------------------------------------------------------------
   HELPERS
   ------------------------------------------------------------------ */

const cx = (...parts) => parts.filter(Boolean).join(" ");
const pad = (n) => String(n).padStart(2, "0");

/* Flips to true once the element is on screen (runs once). */
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* ------------------------------------------------------------------
   PIECES
   ------------------------------------------------------------------ */

function Reveal({ className = "", children }) {
  const [ref, inView] = useInView(0.2);
  return (
    <div ref={ref} className={cx("gl-reveal", inView && "is-in", className)}>
      {children}
    </div>
  );
}

function FilterMenu({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  /* close on outside press or Escape */
  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (name) => {
    setOpen(false);
    onChange(name);
  };

  return (
    <div className="gl-filter" ref={wrapRef}>
      <button
        type="button"
        className="gl-glass gl-filter-btn"
        aria-expanded={open}
        aria-controls="gl-filter-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="gl-filter-label">Filter</span>
        <span className="gl-filter-value">{value}</span>
        <span className={cx("gl-caret", open && "is-open")} aria-hidden="true" />
      </button>

      <div
        id="gl-filter-menu"
        className={cx("gl-glass gl-filter-menu", open && "is-open")}
      >
        <ul>
          {[ALL, ...SERVICES].map((name) => {
            const count = name === ALL ? WORK.length : SERVICE_COUNTS[name] || 0;
            const active = value === name;
            return (
              <li key={name}>
                <button
                  type="button"
                  className={cx("gl-menu-item", active && "is-active")}
                  aria-pressed={active}
                  disabled={count === 0}
                  onClick={() => choose(name)}
                >
                  <span>{name}</span>
                  <span className="gl-menu-count">{count}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function ReelCard({ project }) {
  const { title, date, service, image, link } = project;

  /* feeds the light sheen that follows the pointer across the card */
  const onPointerMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <a
      className="gl-card"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title}, ${service}, ${date}, opens in a new tab`}
      onPointerMove={onPointerMove}
    >
      <div className="gl-card-media">
        <span className="gl-card-initial" aria-hidden="true">
          {title.charAt(0)}
        </span>
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <span className="gl-card-chip gl-glass">{service}</span>

      <div className="gl-card-panel gl-glass">
        <h3 className="gl-card-title">{title}</h3>
        <span className="gl-card-date">{date}</span>
      </div>
    </a>
  );
}

/* ------------------------------------------------------------------
   PAGE
   ------------------------------------------------------------------ */

export default function PortfolioGlassThemed() {
  const rootRef = useRef(null);
  const secRef = useRef(null); // tall section that sets the scroll distance
  const stickyRef = useRef(null); // pinned frame
  const viewportRef = useRef(null); // clips the track
  const trackRef = useRef(null); // moves sideways
  const barRef = useRef(null); // progress fill

  const [activeService, setActiveService] = useState(ALL);
  const [current, setCurrent] = useState(1);

  const visible = useMemo(
    () =>
      activeService === ALL
        ? WORK
        : WORK.filter((w) => w.service === activeService),
    [activeService]
  );
  const total = visible.length;

  /* Scroll-linked motion: parallax depth layers, plus the pinned reel. */
  useLayoutEffect(() => {
    const root = rootRef.current;
    const sec = secRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const bar = barRef.current;
    if (!root || !sec || !viewport || !track) return undefined;

    const pinnedMQ = window.matchMedia(PIN_QUERY);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const depthEls = Array.from(root.querySelectorAll("[data-depth]"));
    let frame = 0;
    let lastIndex = -1;

    const maxShift = () => Math.max(0, track.offsetWidth - viewport.clientWidth);

    /* set the scroll distance so the track has room to travel sideways */
    const measure = () => {
      if (pinnedMQ.matches) {
        sec.style.height = `${maxShift() + window.innerHeight}px`;
      } else {
        sec.style.height = "";
        track.style.transform = "";
        if (bar) bar.style.transform = "";
      }
    };

    const update = () => {
      frame = 0;
      const y = window.scrollY;

      if (!reduced) {
        depthEls.forEach((el) => {
          const depth = Number(el.dataset.depth) || 0;
          el.style.transform = `translate3d(0, ${(y * depth).toFixed(1)}px, 0)`;
        });
      }

      if (pinnedMQ.matches) {
        const start = sec.getBoundingClientRect().top + y;
        const range = sec.offsetHeight - window.innerHeight;
        const p =
          range > 0 ? Math.min(1, Math.max(0, (y - start) / range)) : 0;

        track.style.transform = `translate3d(${(-p * maxShift()).toFixed(1)}px, 0, 0)`;
        if (bar) bar.style.transform = `scaleX(${p.toFixed(4)})`;

        const count = track.children.length;
        const index = count ? Math.round(p * (count - 1)) + 1 : 0;
        if (index !== lastIndex) {
          lastIndex = index;
          setCurrent(index);
        }
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [visible]);

  const pickService = (name) => {
    setActiveService(name);
    /* start the reel again from its first card for the new selection */
    const sec = secRef.current;
    const viewport = viewportRef.current;
    if (window.matchMedia(PIN_QUERY).matches) {
      if (sec) {
        window.scrollTo({
          top: sec.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
      }
    } else if (viewport) {
      viewport.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const jumpToReel = (e) => {
    e.preventDefault();
    secRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <SEO
        title="Portfolio | Indo Sparsh Studio"
        description="Explore the portfolio of Indo Sparsh Studio and discover our work in web development, app development, digital marketing, UI/UX design, branding, graphic design and creative solutions."
        keywords="Indo Sparsh Studio portfolio, web development portfolio, app development portfolio, digital marketing portfolio, UI UX design portfolio, graphic design portfolio, branding portfolio, creative agency portfolio"
      />

      <main className="gl" ref={rootRef}>
        {/* colour field and grain behind the glass */}
        <div className="gl-bg" aria-hidden="true">
          <span className="gl-orb gl-orb--a" data-depth="0.05" />
          <span className="gl-orb gl-orb--b" data-depth="-0.04" />
          <span className="gl-orb gl-orb--c" data-depth="0.09" />
          <span className="gl-orb gl-orb--d" data-depth="-0.03" />
        </div>

        {/* HERO */}
        <section className="gl-hero">
          <div className="gl-hero-copy">
            <span className="gl-status gl-glass">
              <span className="gl-status-dot" aria-hidden="true" />
              Open for new briefs
            </span>

            <h1 className="gl-title">
              <span className="gl-line">
                <span className="gl-word" style={{ "--d": "0ms" }}>
                  The work,
                </span>
              </span>
              <span className="gl-line">
                <span className="gl-word" style={{ "--d": "180ms" }}>
                  in motion.
                </span>
              </span>
            </h1>

            <p className="gl-lead">
              {WORK.length} projects across web, apps, marketing and design.
              Keep scrolling to move through them.
            </p>

            <div className="gl-actions">
              <a className="gl-btn gl-btn-solid" href={CONTACT_HREF}>
                Start a project
              </a>
              <a className="gl-btn gl-btn--solid" href="#reel" onClick={jumpToReel}>
                Watch the reel
              </a>
            </div>

            <div className="gl-cue" aria-hidden="true">
              <span className="gl-cue-line" />
              <span>Scroll to browse</span>
            </div>
          </div>

          <div className="gl-collage" aria-hidden="true">
            {HERO_PICKS.map((project, i) => (
              <div
                key={project.title}
                className={`gl-float gl-float--${i}`}
                data-depth={HERO_DEPTHS[i]}
              >
                <div className="gl-float-frame gl-glass">
                  <img src={project.image} alt="" decoding="async" />
                </div>
              </div>
            ))}

            <div className="gl-float gl-float--badge" data-depth={BADGE_DEPTH}>
              <div className="gl-badge gl-glass">
                <div>
                  <span className="gl-badge-value">{WORK.length}</span>
                  <span className="gl-badge-label">Projects filed</span>
                </div>
                <div>
                  <span className="gl-badge-value">{LINES_IN_USE}</span>
                  <span className="gl-badge-label">Service lines</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ScrollBeam />

        {/* REEL: pinned on wide screens, a swipeable row everywhere else */}
        <section id="reel" ref={secRef} className="gl-reel">
          <div ref={stickyRef} className="gl-reel-sticky">
            <header className="gl-reel-head">
              <div>
                <h2 className="gl-h2">Selected work</h2>
                <span className="gl-index">
                  {pad(current)} / {pad(total)}
                </span>
              </div>
              <FilterMenu value={activeService} onChange={pickService} />
            </header>

            <div ref={viewportRef} className="gl-reel-viewport">
              <ol ref={trackRef} className="gl-track">
                {visible.map((project, i) => (
                  <li
                    key={`${activeService}-${project.title}`}
                    className="gl-slot"
                    style={{ "--i": i }}
                  >
                    <ReelCard project={project} />
                  </li>
                ))}
              </ol>
            </div>

            <div className="gl-progress gl-glass">
              <span ref={barRef} className="gl-progress-fill" />
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="gl-close">
          <Reveal className="gl-close-wrap">
            <div className="gl-close-panel gl-glass">
              <h2 className="gl-h2">Have a project in mind?</h2>
              <div className="gl-close-side">
                <p>
                  Tell us what you're building and we'll reply with a plan and
                  a timeline.
                </p>
                <a className="gl-btn gl-btn--solid" href={CONTACT_HREF}>
                  Start a project
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}