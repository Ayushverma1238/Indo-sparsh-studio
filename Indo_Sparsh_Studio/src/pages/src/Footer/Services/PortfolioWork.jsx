import React, { useEffect, useMemo, useRef, useState } from "react";
import "./PortfolioWork.css";
import ScrollBeam from "../../../ScrollBeam";
import SEO from "../../../../utils/seo";

/* Every service the studio offers. Also used to build the filter ticker. */
const SERVICES = [
  { name: "Website Development", path: "/services/website-development" },
  { name: "App Development", path: "/services/app-development" },
  { name: "Landing Page", path: "/services/landing-page" },
  { name: "E-commerce Website", path: "/services/ecommerce-website" },
  { name: "Web Application", path: "/services/web-application" },
  { name: "UI/UX Design", path: "/services/ui-ux-design" },
  { name: "Website Redesign", path: "/services/website-redesign" },
  { name: "Content creation & video editing", path: "/services/content-hub" },
  { name: "SEO Optimization", path: "/services/seo-optimization" },
  { name: "Business Profile Creation", path: "/services/profile-creation" },
  { name: "Digital Marketing Services", path: "/services/digital-marketing" },
  { name: "Social media management", path: "/services/social-media" },
  { name: "Maintenance & Support", path: "/services/maintenance-support" },
  { name: "Branding and marketing", path: "/services/branding-marketing" },
  { name: "Business Consultancy", path: "/services/business-consultancy" },
  { name: "Graphic Designing", path: "/services/graphic-design" },
  { name: "Row Calling data", path: "/services/row-calling-data" },
];

/* Placeholder work log, one to two sheets per service. Swap `image` and
   `link` with real assets whenever a real case study is ready — the
   layout and filtering logic handle any count per service. */
const WORK = [
  {
    title: "Hola 9",
    date: "Feb 2025",
    tag: "Website Development",
    image: "https://picsum.photos/seed/hola9/640/460",
    link: "https://hola9.com",
  },
  {
    title: "Kavir Interiors",
    date: "Oct 2024",
    tag: "Website Development",
    image: "https://picsum.photos/seed/kavir-interiors/640/460",
    link: "https://example.com/kavir-interiors",
  },
  {
    title: "Verve Fitness",
    date: "Nov 2024",
    tag: "App Development",
    image: "https://picsum.photos/seed/verve-fitness/640/460",
    link: "https://example.com/verve-fitness",
  },
  {
    title: "Tiffin Trail",
    date: "Jun 2024",
    tag: "App Development",
    image: "https://picsum.photos/seed/tiffin-trail/640/460",
    link: "https://example.com/tiffin-trail",
  },
  {
    title: "Bloomsbury Launch",
    date: "Jan 2025",
    tag: "Landing Page",
    image: "https://picsum.photos/seed/bloomsbury-launch/640/460",
    link: "https://example.com/bloomsbury",
  },
  {
    title: "Circuit Summit '24",
    date: "Sep 2024",
    tag: "Landing Page",
    image: "https://picsum.photos/seed/circuit-summit/640/460",
    link: "https://example.com/circuit-summit",
  },
  {
    title: "Saffron & Silk",
    date: "Mar 2025",
    tag: "E-commerce Website",
    image: "https://picsum.photos/seed/saffron-silk/640/460",
    link: "https://example.com/saffron-silk",
  },
  {
    title: "Foundry Roasters",
    date: "Aug 2024",
    tag: "E-commerce Website",
    image: "https://picsum.photos/seed/foundry-roasters/640/460",
    link: "https://example.com/foundry-roasters",
  },
  {
    title: "Northwind Dispatch",
    date: "Dec 2023",
    tag: "Web Application",
    image: "https://picsum.photos/seed/northwind-dispatch/640/460",
    link: "https://example.com/northwind",
  },
  {
    title: "Ledgerly",
    date: "Apr 2025",
    tag: "Web Application",
    image: "https://picsum.photos/seed/ledgerly/640/460",
    link: "https://example.com/ledgerly",
  },
  {
    title: "Aurora Analytics — UI Kit",
    date: "Feb 2025",
    tag: "UI/UX Design",
    image: "https://picsum.photos/seed/aurora-uikit/640/460",
    link: "https://example.com/aurora-uikit",
  },
  {
    title: "Marrow & Co. Wireframes",
    date: "Jul 2023",
    tag: "UI/UX Design",
    image: "https://picsum.photos/seed/marrow-wireframes/640/460",
    link: "https://example.com/marrow-wireframes",
  },
  {
    title: "Pinewood Realty Refresh",
    date: "May 2024",
    tag: "Website Redesign",
    image: "https://picsum.photos/seed/pinewood-realty/640/460",
    link: "https://example.com/pinewood-realty",
  },
  {
    title: "Harbor & Vine, v2",
    date: "Jan 2024",
    tag: "Website Redesign",
    image: "https://picsum.photos/seed/harbor-vine/640/460",
    link: "https://example.com/harbor-vine",
  },
  {
    title: "Marrow & Co. Reel Series",
    date: "Nov 2023",
    tag: "Content creation & video editing",
    image: "https://picsum.photos/seed/marrow-reels/640/460",
    link: "https://example.com/marrow-reels",
  },
  {
    title: "Foundry Roasters — Launch Film",
    date: "Sep 2024",
    tag: "Content creation & video editing",
    image: "https://picsum.photos/seed/foundry-film/640/460",
    link: "https://example.com/foundry-film",
  },
  {
    title: "Kavir Interiors — SEO Sprint",
    date: "Dec 2024",
    tag: "SEO Optimization",
    image: "https://picsum.photos/seed/kavir-seo/640/460",
    link: "https://example.com/kavir-seo",
  },
  {
    title: "Hola 9 — Local Search",
    date: "Mar 2025",
    tag: "SEO Optimization",
    image: "https://picsum.photos/seed/hola9-seo/640/460",
    link: "https://example.com/hola9-seo",
  },
  {
    title: "Basilico Trattoria — Profile",
    date: "Jun 2024",
    tag: "Business Profile Creation",
    image: "https://picsum.photos/seed/basilico-profile/640/460",
    link: "https://example.com/basilico-profile",
  },
  {
    title: "Circuit Summit — Growth Push",
    date: "Oct 2024",
    tag: "Digital Marketing Services",
    image: "https://picsum.photos/seed/circuit-growth/640/460",
    link: "https://example.com/circuit-growth",
  },
  {
    title: "Saffron & Silk — Socials",
    date: "Apr 2025",
    tag: "Social media management",
    image: "https://picsum.photos/seed/saffron-socials/640/460",
    link: "https://example.com/saffron-socials",
  },
  {
    title: "Northwind — Care Plan",
    date: "Ongoing",
    tag: "Maintenance & Support",
    image: "https://picsum.photos/seed/northwind-care/640/460",
    link: "https://example.com/northwind-care",
  },
  {
    title: "Bloomsbury — Brand System",
    date: "Jan 2025",
    tag: "Branding and marketing",
    image: "https://picsum.photos/seed/bloomsbury-brand/640/460",
    link: "https://example.com/bloomsbury-brand",
  },
  {
    title: "Pinewood Realty — Go-to-Market",
    date: "May 2024",
    tag: "Business Consultancy",
    image: "https://picsum.photos/seed/pinewood-consult/640/460",
    link: "https://example.com/pinewood-consult",
  },
  {
    title: "Harbor & Vine — Menu Art",
    date: "Feb 2024",
    tag: "Graphic Designing",
    image: "https://picsum.photos/seed/harbor-graphics/640/460",
    link: "https://example.com/harbor-graphics",
  },
  {
    title: "Ledgerly — Data Cleanup",
    date: "Apr 2025",
    tag: "Row Calling data",
    image: "https://picsum.photos/seed/ledgerly-data/640/460",
    link: "https://example.com/ledgerly-data",
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
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return rootRef;
}

export default function PortfolioWork() {
  const rootRef = useReveal();

  const [activeService, setActiveService] = useState("All");
  const workRef = useRef(null);
  const gridRef = useRef(null);

  const filteredWork = useMemo(() => {
    if (activeService === "All") return WORK;
    return WORK.filter((w) => w.tag === activeService);
  }, [activeService]);

  useEffect(() => {
    if (!gridRef.current) return;
    const els = gridRef.current.querySelectorAll(".js-reveal");
    const raf = requestAnimationFrame(() => {
      els.forEach((el) => el.classList.add("is-in"));
    });
    return () => cancelAnimationFrame(raf);
  }, [filteredWork]);

  const handleServiceClick = (name) => {
    setActiveService(name);
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <SEO
        title="Portfolio | Indo Sparsh Studio"
        description="Explore the portfolio of Indo Sparsh Studio and discover our work in web development, app development, digital marketing, UI/UX design, branding, graphic design and creative solutions."
        keywords="Indo Sparsh Studio portfolio, web development portfolio, app development portfolio, digital marketing portfolio, UI UX design portfolio, graphic design portfolio, branding portfolio, creative agency portfolio"
      />
      <main className="pf" ref={rootRef}>
        {/* HEADER ------------------------------------------------------ */}
        <section className="pf-header">
          <div className="pf-header-top js-reveal">
            <span className="pf-header-kicker">
              <span className="pf-kicker-mark" aria-hidden="true"></span>
              Studio index, sheet by sheet
            </span>
            <span className="pf-header-status">
              <span className="pf-status-dot" aria-hidden="true"></span>
              Open for new briefs
            </span>
          </div>

          {/* <h1 className="pf-title">
          {["Everything", "we've", "shipped,", "filed", "here."].map(
            (w, i) => (
              <span
                className="pf-word"
                style={{ animationDelay: `${0.12 + i * 0.08}s` }}
                key={i}
              >
                {w}
              </span>
            ),
          )}
        </h1> */}
          <h1 className="pf-hero__headline">
            <span className="pf-word pf-word--a">Everything</span>{" "}
            <span className="pf-word pf-word--b">we've shipped,</span>
            <br />
            <span className="pf-word pf-word--c">filed</span>{" "}
            <span className="pf-word pf-word--d">here.</span>{" "}
          </h1>

          <div className="pf-header-grid">
            <div className="pf-header-copy js-reveal">
              <p className="pf-subtitle">
                Every project this studio has taken from brief to launch,
                catalogued by the service that produced it.
              </p>
              <p className="pf-page-note">
                Pick a lane in the index below and see exactly what's shipped
                there — no case-study padding, just the sheets on file.
              </p>
            </div>

            <div className="pf-header-ticket js-reveal">
              <div className="pf-ticket-row">
                <span>Sheets on file</span>
                <strong>{WORK.length}</strong>
              </div>
              <div className="pf-ticket-row">
                <span>Services covered</span>
                <strong>{SERVICES.length}</strong>
              </div>
              <div className="pf-ticket-row">
                <span>Delivery</span>
                <strong>Sheet by sheet</strong>
              </div>
              <span className="pf-ticket-stamp">Approved for print</span>
            </div>
          </div>
        </section>

        <ScrollBeam />

        {/* BROWSE BY SERVICE ------------------------------------------------------ */}
        <section className="pf-services" ref={workRef}>
          <span className="pf-label js-reveal">Browse the work by service</span>
          <h2 className="pf-services-heading js-reveal">
            Every service, one ticker. Tap one to filter.
          </h2>

          <div className="pf-ticker">
            <div className="pf-ticker-track">
              {[...SERVICES, ...SERVICES].map((s, i) => (
                <button
                  type="button"
                  key={`${s.name}-${i}`}
                  className={
                    "pf-ticker-pill" +
                    (activeService === s.name ? " is-active" : "")
                  }
                  onClick={() => handleServiceClick(s.name)}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          <div className="pf-services-filterbar js-reveal">
            <button
              type="button"
              className={
                "pf-ticker-pill pf-ticker-pill-static" +
                (activeService === "All" ? " is-active" : "")
              }
              onClick={() => handleServiceClick("All")}
            >
              All work
            </button>
            <span className="pf-services-active">
              Showing: <strong>{activeService}</strong> · {filteredWork.length}{" "}
              sheet{filteredWork.length === 1 ? "" : "s"}
            </span>
          </div>

          {filteredWork.length > 0 ? (
            <div ref={gridRef} className="pf-work-grid" key={activeService}>
              {filteredWork.map((w, i) => (
                <a
                  className="project-card js-reveal why-card"
                  style={{ transitionDelay: `${(i % 8) * 70}ms` }}
                  href={w.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`${w.title}-${i}`}
                >
                  <div className="pf-work-card-image">
                    <img src={w.image} alt={w.title} loading="lazy" />
                    <span className="pf-work-card-tag">{w.tag}</span>
                  </div>
                  <div className="pf-work-card-body">
                    <h3>{w.title}</h3>
                    <span className="pf-work-card-date">{w.date}</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="pf-services-empty" key={activeService}>
              No sheets filed under this service yet — check back soon.
            </p>
          )}
        </section>
      </main>
    </>
  );
}
