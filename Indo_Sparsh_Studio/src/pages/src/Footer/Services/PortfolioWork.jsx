// import React, { useEffect, useMemo, useRef, useState } from "react";
// import "./PortfolioWork.css";
// import { Link } from "react-router-dom";


// const STATS = [
//   { value: "4", label: "years running" },
//   { value: "27", label: "sheets shipped" },
//   { value: "94%", label: "clients who return" },
//   { value: "12", label: "day avg. turnaround" },
// ];

// const PROCESS = [
//   {
//     n: "01",
//     title: "Brief",
//     text: "We sit with the problem before the pixels — audience, constraints, the one job the page has to do.",
//   },
//   {
//     n: "02",
//     title: "Layout",
//     text: "Wireframes and type tests, reviewed against the brief until nothing on the page is there by default.",
//   },
//   {
//     n: "03",
//     title: "Build",
//     text: "Component by component, in the open — staging links go out early so surprises happen on our clock, not launch day.",
//   },
//   {
//     n: "04",
//     title: "Proof",
//     text: "Cross-device pass, performance budget, accessibility check. Nothing ships until it's marked approved.",
//   },
// ];

// const PROJECTS = [
//   {
//     n: "01",
//     title: "Aurora Analytics",
//     category: "SaaS Dashboard",
//     year: "2025",
//     role: "Product design + front-end build",
//     blurb:
//       "A metrics dashboard for a fintech team drowning in spreadsheets — real-time charts, saved views, and a command palette for power users.",
//     tags: ["React", "D3", "TypeScript"],
//     stat: { value: "38%", label: "faster time-to-insight" },
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none">
//         <path d="M8 40V22M18 40V10M28 40V26M38 40V16" />
//         <path d="M6 40h36" />
//       </svg>
//     ),
//   },
//   {
//     n: "02",
//     title: "Foundry Roasters",
//     category: "E-commerce",
//     year: "2024",
//     role: "Full build, catalog to checkout",
//     blurb:
//       "A direct-to-consumer coffee shop with subscription bundles, a roast-date tracker, and a checkout that doesn't lose people at shipping.",
//     tags: ["React", "Stripe", "Sanity"],
//     stat: { value: "+22%", label: "checkout conversion" },
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none">
//         <path d="M12 16h24l-2 22a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2z" />
//         <path d="M18 16v-3a6 6 0 0 1 12 0v3" />
//       </svg>
//     ),
//   },
//   {
//     n: "03",
//     title: "Northwind Logistics",
//     category: "Internal Tool",
//     year: "2023",
//     role: "Systems design + build",
//     blurb:
//       "A dispatch console for a regional freight company — live truck positions, route conflicts flagged before they happen.",
//     tags: ["React", "WebSockets", "Mapbox"],
//     stat: { value: "6 hrs", label: "saved / dispatcher / week" },
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none">
//         <circle cx="10" cy="12" r="4" />
//         <circle cx="38" cy="12" r="4" />
//         <circle cx="24" cy="36" r="4" />
//         <path d="M13 14l9 18M35 14l-9 18M14 12h20" />
//       </svg>
//     ),
//   },
//   {
//     n: "04",
//     title: "Marrow & Co.",
//     category: "Editorial / Marketing",
//     year: "2023",
//     role: "Art direction + build",
//     blurb:
//       "A recipe-and-essay site for a small butchery — long-form layouts, a searchable recipe index, and print-ready PDF exports of every cut guide.",
//     tags: ["Next.js", "Contentful", "PDF"],
//     stat: { value: "3.1x", label: "avg. session length" },
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none">
//         <path d="M10 10h20l8 8v20H10z" />
//         <path d="M30 10v8h8" />
//         <path d="M16 26h16M16 32h11" />
//       </svg>
//     ),
//   },
// ];

// /* Every service the studio offers. Also used to build the filter ticker. */
// const SERVICES = [
//   { name: "Website Development" },
//   { name: "App Development" },
//   { name: "Landing Page" },
//   { name: "E-commerce Website" },
//   { name: "Web Application" },
//   { name: "UI/UX Design" },
//   { name: "Website Redesign" },
//   { name: "Content creation & video editing" },
//   { name: "SEO Optimization" },
//   { name: "Business Profile Creation" },
//   { name: "Digital Marketing Services" },
//   { name: "Social media management" },
//   { name: "Maintenance & Support" },
//   { name: "Branding and marketing" },
//   { name: "Business Consultancy" },
//   { name: "Graphic Designing" },
//   { name: "Row Calling data" },
// ];

// /* Placeholder work log, one to two sheets per service. Swap `image` and
//    `link` with real assets whenever a real case study is ready — the
//    layout and filtering logic handle any count per service. */
// const WORK = [
//   {
//     title: "Hola 9",
//     date: "Feb 2025",
//     tag: "Website Development",
//     image: "https://picsum.photos/seed/hola9/640/460",
//     link: "https://hola9.com",
//   },
//   {
//     title: "Kavir Interiors",
//     date: "Oct 2024",
//     tag: "Website Development",
//     image: "https://picsum.photos/seed/kavir-interiors/640/460",
//     link: "https://example.com/kavir-interiors",
//   },
//   {
//     title: "Verve Fitness",
//     date: "Nov 2024",
//     tag: "App Development",
//     image: "https://picsum.photos/seed/verve-fitness/640/460",
//     link: "https://example.com/verve-fitness",
//   },
//   {
//     title: "Tiffin Trail",
//     date: "Jun 2024",
//     tag: "App Development",
//     image: "https://picsum.photos/seed/tiffin-trail/640/460",
//     link: "https://example.com/tiffin-trail",
//   },
//   {
//     title: "Bloomsbury Launch",
//     date: "Jan 2025",
//     tag: "Landing Page",
//     image: "https://picsum.photos/seed/bloomsbury-launch/640/460",
//     link: "https://example.com/bloomsbury",
//   },
//   {
//     title: "Circuit Summit '24",
//     date: "Sep 2024",
//     tag: "Landing Page",
//     image: "https://picsum.photos/seed/circuit-summit/640/460",
//     link: "https://example.com/circuit-summit",
//   },
//   {
//     title: "Saffron & Silk",
//     date: "Mar 2025",
//     tag: "E-commerce Website",
//     image: "https://picsum.photos/seed/saffron-silk/640/460",
//     link: "https://example.com/saffron-silk",
//   },
//   {
//     title: "Foundry Roasters",
//     date: "Aug 2024",
//     tag: "E-commerce Website",
//     image: "https://picsum.photos/seed/foundry-roasters/640/460",
//     link: "https://example.com/foundry-roasters",
//   },
//   {
//     title: "Northwind Dispatch",
//     date: "Dec 2023",
//     tag: "Web Application",
//     image: "https://picsum.photos/seed/northwind-dispatch/640/460",
//     link: "https://example.com/northwind",
//   },
//   {
//     title: "Ledgerly",
//     date: "Apr 2025",
//     tag: "Web Application",
//     image: "https://picsum.photos/seed/ledgerly/640/460",
//     link: "https://example.com/ledgerly",
//   },
//   {
//     title: "Aurora Analytics — UI Kit",
//     date: "Feb 2025",
//     tag: "UI/UX Design",
//     image: "https://picsum.photos/seed/aurora-uikit/640/460",
//     link: "https://example.com/aurora-uikit",
//   },
//   {
//     title: "Marrow & Co. Wireframes",
//     date: "Jul 2023",
//     tag: "UI/UX Design",
//     image: "https://picsum.photos/seed/marrow-wireframes/640/460",
//     link: "https://example.com/marrow-wireframes",
//   },
//   {
//     title: "Pinewood Realty Refresh",
//     date: "May 2024",
//     tag: "Website Redesign",
//     image: "https://picsum.photos/seed/pinewood-realty/640/460",
//     link: "https://example.com/pinewood-realty",
//   },
//   {
//     title: "Harbor & Vine, v2",
//     date: "Jan 2024",
//     tag: "Website Redesign",
//     image: "https://picsum.photos/seed/harbor-vine/640/460",
//     link: "https://example.com/harbor-vine",
//   },
//   {
//     title: "Marrow & Co. Reel Series",
//     date: "Nov 2023",
//     tag: "Content creation & video editing",
//     image: "https://picsum.photos/seed/marrow-reels/640/460",
//     link: "https://example.com/marrow-reels",
//   },
//   {
//     title: "Foundry Roasters — Launch Film",
//     date: "Sep 2024",
//     tag: "Content creation & video editing",
//     image: "https://picsum.photos/seed/foundry-film/640/460",
//     link: "https://example.com/foundry-film",
//   },
//   {
//     title: "Kavir Interiors — SEO Sprint",
//     date: "Dec 2024",
//     tag: "SEO Optimization",
//     image: "https://picsum.photos/seed/kavir-seo/640/460",
//     link: "https://example.com/kavir-seo",
//   },
//   {
//     title: "Hola 9 — Local Search",
//     date: "Mar 2025",
//     tag: "SEO Optimization",
//     image: "https://picsum.photos/seed/hola9-seo/640/460",
//     link: "https://example.com/hola9-seo",
//   },
//   {
//     title: "Basilico Trattoria — Profile",
//     date: "Jun 2024",
//     tag: "Business Profile Creation",
//     image: "https://picsum.photos/seed/basilico-profile/640/460",
//     link: "https://example.com/basilico-profile",
//   },
//   {
//     title: "Circuit Summit — Growth Push",
//     date: "Oct 2024",
//     tag: "Digital Marketing Services",
//     image: "https://picsum.photos/seed/circuit-growth/640/460",
//     link: "https://example.com/circuit-growth",
//   },
//   {
//     title: "Saffron & Silk — Socials",
//     date: "Apr 2025",
//     tag: "Social media management",
//     image: "https://picsum.photos/seed/saffron-socials/640/460",
//     link: "https://example.com/saffron-socials",
//   },
//   {
//     title: "Northwind — Care Plan",
//     date: "Ongoing",
//     tag: "Maintenance & Support",
//     image: "https://picsum.photos/seed/northwind-care/640/460",
//     link: "https://example.com/northwind-care",
//   },
//   {
//     title: "Bloomsbury — Brand System",
//     date: "Jan 2025",
//     tag: "Branding and marketing",
//     image: "https://picsum.photos/seed/bloomsbury-brand/640/460",
//     link: "https://example.com/bloomsbury-brand",
//   },
//   {
//     title: "Pinewood Realty — Go-to-Market",
//     date: "May 2024",
//     tag: "Business Consultancy",
//     image: "https://picsum.photos/seed/pinewood-consult/640/460",
//     link: "https://example.com/pinewood-consult",
//   },
//   {
//     title: "Harbor & Vine — Menu Art",
//     date: "Feb 2024",
//     tag: "Graphic Designing",
//     image: "https://picsum.photos/seed/harbor-graphics/640/460",
//     link: "https://example.com/harbor-graphics",
//   },
//   {
//     title: "Ledgerly — Data Cleanup",
//     date: "Apr 2025",
//     tag: "Row Calling data",
//     image: "https://picsum.photos/seed/ledgerly-data/640/460",
//     link: "https://example.com/ledgerly-data",
//   },
// ];

// function useReveal() {
//   const rootRef = useRef(null);

//   useEffect(() => {
//     const els = rootRef.current
//       ? rootRef.current.querySelectorAll(".js-reveal")
//       : [];
//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("is-in");
//             io.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
//     );
//     els.forEach((el) => io.observe(el));
//     return () => io.disconnect();
//   }, []);

//   return rootRef;
// }

// function CropMarks() {
//   return (
//     <>
//       <span className="crop crop-tl" aria-hidden="true" />
//       <span className="crop crop-tr" aria-hidden="true" />
//       <span className="crop crop-bl" aria-hidden="true" />
//       <span className="crop crop-br" aria-hidden="true" />
//     </>
//   );
// }

// export default function PortfolioWork() {
//   useEffect(() => {
//     document.title = "Portfolio Website | Indo Sparsh Studio";
//   }, []);

//   const rootRef = useReveal();
//   const gridRef = useRef(null);
//   const [activeService, setActiveService] = useState("All");
//   const workRef = useRef(null);

//   const filteredWork = useMemo(() => {
//     if (activeService === "All") return WORK;
//     return WORK.filter((w) => w.tag === activeService);
//   }, [activeService]);

//   const handleServiceClick = (name) => {
//     setActiveService(name);
//     if (workRef.current) {
//       workRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <main className="pf" ref={rootRef}>
//       {/* HEADER ------------------------------------------------------ */}
//       <section className="pf-header">
//         <p className="pf-eyebrow js-reveal">Sheet 000 — Studio Index</p>

//         <h1 className="pf-title">
//           {["Selected", "work"].map((w, i) => (
//             <span
//               className="pf-word"
//               style={{ animationDelay: `${0.12 + i * 0.1}s` }}
//               key={i}
//             >
//               {w}
//             </span>
//           ))}
//         </h1>

//         <p className="pf-subtitle js-reveal">
//           A few of the projects we've shipped — each one built the same way,
//           sheet by sheet, from brief to launch.
//         </p>

//         <p className="pf-page-note js-reveal">
//           This page is the studio's running record: how we work, who's on the
//           team, and the actual work, sorted by the service it came out of.
//           Scroll for the process, or skip straight to the service ticker at the
//           bottom to see what we've shipped in that lane.
//         </p>

//         <div className="pf-stamp js-reveal" aria-hidden="true">
//           <span>Proof</span>
//           <span>Approved</span>
//         </div>
//       </section>

//       {/* ABOUT --------------------------------------------------------- */}
//       <section className="pf-about">
//         <div className="pf-about-copy js-reveal">
//           <span className="pf-label">Sheet 000 / About</span>
//           <h2>
//             A small studio that treats every project like a print run — proofed
//             before it ships.
//           </h2>
//           <p>
//             Indo Sparsh Studio is a two-person shop working across product
//             design and front-end engineering. We take on a handful of projects
//             at a time so each one gets an actual review pass instead of a rush
//             job — dashboards, storefronts, dispatch tools, editorial sites,
//             whatever the brief calls for.
//           </p>
//           <p>
//             No account managers, no hand-offs between five different people.
//             Whoever designs the sheet is the one who builds it.
//           </p>
//         </div>

//         <div className="pf-stats js-reveal">
//           {STATS.map((s) => (
//             <div className="pf-stat-block" key={s.label}>
//               <span className="pf-stat-block-value">{s.value}</span>
//               <span className="pf-stat-block-label">{s.label}</span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* PROCESS --------------------------------------------------------- */}
//       <section className="pf-process">
//         <span className="pf-label js-reveal">How a sheet gets made</span>
//         <div className="pf-process-list">
//           {PROCESS.map((step, i) => (
//             <div
//               className="pf-process-step js-reveal why-card"
//               style={{ transitionDelay: `${i * 90}ms` }}
//               key={step.n}
//             >
//               <span className="pf-process-n">{step.n}</span>
//               <div>
//                 <h3>{step.title}</h3>
//                 <p>{step.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CARD GRID ------------------------------------------------------ */}
//       <section className="pf-work">
//         <span className="pf-label js-reveal">
//           Sheets 01–{PROJECTS.length.toString().padStart(2, "0")} / Selected
//           work
//         </span>

//         <div className="pf-grid">
//           {PROJECTS.map((p, i) => (
//             <article
//               className="pf-card js-reveal why-card"
//               style={{ transitionDelay: `${i * 110}ms` }}
//               key={p.n}
//             >
//               <CropMarks />

//               <div className="pf-card-top">
//                 <span className="pf-card-n">{p.n}</span>
//                 <span className="pf-card-year">{p.year}</span>
//               </div>

//               <div className="pf-thumb">
//                 <div className="pf-thumb-icon">{p.icon}</div>
//               </div>

//               <div className="pf-card-body">
//                 <span className="pf-card-category">{p.category}</span>
//                 <h3>{p.title}</h3>
//                 <p className="pf-card-role">{p.role}</p>
//                 <p className="pf-card-blurb">{p.blurb}</p>

//                 <ul className="pf-tags">
//                   {p.tags.map((t) => (
//                     <li key={t}>{t}</li>
//                   ))}
//                 </ul>

//                 <div className="pf-card-foot">
//                   <div className="pf-stat">
//                     <span className="pf-stat-value">{p.stat.value}</span>
//                     <span className="pf-stat-label">{p.stat.label}</span>
//                   </div>

//                   <a
//                     className="pf-link"
//                     href="#"
//                     onClick={(e) => e.preventDefault()}
//                   >
//                     View case
//                     <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
//                       <path d="M4 10h12M11 5l5 5-5 5" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* TEAM ------------------------------------------------------ */}
//       {/* <section className="pf-team">
//         <span className="pf-label js-reveal">The people on the sheet</span>
//         <h2 className="pf-team-heading js-reveal">My team</h2>

//         <div className="pf-team-grid">
//           {TEAM.map((member, i) => (
//             <article
//               className="pf-team-card js-reveal"
//               style={{ transitionDelay: `${i * 110}ms` }}
//               key={member.name}
//             >
//               <CropMarks />
//               <div className="pf-team-avatar" aria-hidden="true">
//                 <span>{member.initials}</span>
//               </div>

//               <h3>{member.name}</h3>
//               <p className="pf-team-role">{member.role}</p>
//               <p className="pf-team-study">{member.study}</p>
//               <p className="pf-team-bio">{member.bio}</p>

//               <ul className="pf-tags">
//                 {member.focus.map((f) => (
//                   <li key={f}>{f}</li>
//                 ))}
//               </ul>
//             </article>
//           ))}
//         </div>
//       </section> */}

//       {/* CLOSING CTA ------------------------------------------------------ */}
//       <section className="pf-cta js-reveal">
//         <h2>Have a sheet worth printing?</h2>
//         <p>
//           More case studies get added here as work ships — the full list always
//           lives in the footer. If you've got a brief, we'd like to hear it.
//         </p>
//         <Link className="pf-cta-link" to="/request-quote">
//           Start a project
//           <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
//             <path d="M4 10h12M11 5l5 5-5 5" />
//           </svg>
//         </Link>
//       </section>

//       {/* BROWSE BY SERVICE ------------------------------------------------------ */}
//       <section className="pf-services" ref={workRef}>
//         <span className="pf-label js-reveal">Browse the work by service</span>
//         <h2 className="pf-services-heading js-reveal">
//           Every service, one ticker. Tap one to filter.
//         </h2>

//         <div className="pf-ticker">
//           <div className="pf-ticker-track">
//             {[...SERVICES, ...SERVICES].map((s, i) => (
//               <button
//                 type="button"
//                 key={`${s.name}-${i}`}
//                 className={
//                   "pf-ticker-pill" +
//                   (activeService === s.name ? " is-active" : "")
//                 }
//                 onClick={() => handleServiceClick(s.name)}
//               >
//                 {s.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="pf-services-filterbar js-reveal">
//           <button
//             type="button"
//             className={
//               "pf-ticker-pill pf-ticker-pill-static" +
//               (activeService === "All" ? " is-active" : "")
//             }
//             onClick={() => handleServiceClick("All")}
//           >
//             All work
//           </button>
//           <span className="pf-services-active">
//             Showing: <strong>{activeService}</strong> · {filteredWork.length}{" "}
//             sheet{filteredWork.length === 1 ? "" : "s"}
//           </span>
//         </div>

//         {filteredWork.length > 0 ? (
//           <div ref={gridRef} className="pf-work-grid ">
//             {filteredWork.map((w, i) => (
//               <a
//                 className="project-card why-card"
//                 style={{ transitionDelay: `${(i % 8) * 70}ms` }}
//                 href={w.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 key={`${w.title}-${i}`}
//               >
//                 <div className="pf-work-card-image">
//                   <img src={w.image} alt={w.title} loading="lazy" />
//                   <span className="pf-work-card-tag">{w.tag}</span>
//                 </div>
//                 <div className="pf-work-card-body">
//                   <h3>{w.title}</h3>
//                   <span className="pf-work-card-date">{w.date}</span>
//                 </div>
//               </a>
//             ))}
//           </div>
//         ) : (
//           <p className="pf-services-empty js-reveal">
//             No sheets filed under this service yet — check back soon.
//           </p>
//         )}
//       </section>
//     </main>
//   );
// }



import React, { useEffect, useMemo, useRef, useState } from "react";
import "./PortfolioWork.css";
import { Link } from "react-router-dom";

/**
 * PortfolioWork
 * Drop this component between your existing <Navbar /> and <Footer />.
 *
 * Sections: Header -> About/Stats -> Process -> Selected Work (case
 * studies) -> Team -> Closing CTA -> Browse-by-service (moving ticker
 * of every service; click one to filter the work cards under it).
 *
 * Theming is driven entirely by CSS: whatever ancestor already toggles
 * `body.dark-mode` / `body.light-mode` in your app will theme this
 * component automatically — no props, no local toggle, no JS branching.
 *
 * Usage:
 *   <Navbar />
 *   <PortfolioWork />
 *   <Footer />
 */

const STATS = [
  { value: "4", label: "years running" },
  { value: "27", label: "sheets shipped" },
  { value: "94%", label: "clients who return" },
  { value: "12", label: "day avg. turnaround" },
];

const PROCESS = [
  {
    n: "01",
    title: "Brief",
    text: "We sit with the problem before the pixels — audience, constraints, the one job the page has to do.",
  },
  {
    n: "02",
    title: "Layout",
    text: "Wireframes and type tests, reviewed against the brief until nothing on the page is there by default.",
  },
  {
    n: "03",
    title: "Build",
    text: "Component by component, in the open — staging links go out early so surprises happen on our clock, not launch day.",
  },
  {
    n: "04",
    title: "Proof",
    text: "Cross-device pass, performance budget, accessibility check. Nothing ships until it's marked approved.",
  },
];

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
  {
    n: "04",
    title: "Marrow & Co.",
    category: "Editorial / Marketing",
    year: "2023",
    role: "Art direction + build",
    blurb:
      "A recipe-and-essay site for a small butchery — long-form layouts, a searchable recipe index, and print-ready PDF exports of every cut guide.",
    tags: ["Next.js", "Contentful", "PDF"],
    stat: { value: "3.1x", label: "avg. session length" },
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M10 10h20l8 8v20H10z" />
        <path d="M30 10v8h8" />
        <path d="M16 26h16M16 32h11" />
      </svg>
    ),
  },
];

const TEAM = [
  {
    initials: "AM",
    name: "Aarav Mehta",
    role: "Lead Product Designer",
    study: "M.Des, IIT Bombay",
    bio: "Spends more time on type scales than most people spend on vacation. Came from a print-design background, which is why every sheet still gets crop marks.",
    focus: ["Design systems", "Interaction", "Typography"],
  },
  {
    initials: "SK",
    name: "Sana Kapoor",
    role: "Front-End Engineer",
    study: "B.Tech CSE, IIIT Hyderabad",
    bio: "Turns the proofs into working sheets. Cares more about a 60fps scroll than almost anything else on the brief.",
    focus: ["React", "Performance", "Accessibility"],
  },
];

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
  { title: "Hola 9", date: "Feb 2025", tag: "Website Development", image: "https://picsum.photos/seed/hola9/640/460", link: "https://hola9.com" },
  { title: "Kavir Interiors", date: "Oct 2024", tag: "Website Development", image: "https://picsum.photos/seed/kavir-interiors/640/460", link: "https://example.com/kavir-interiors" },
  { title: "Verve Fitness", date: "Nov 2024", tag: "App Development", image: "https://picsum.photos/seed/verve-fitness/640/460", link: "https://example.com/verve-fitness" },
  { title: "Tiffin Trail", date: "Jun 2024", tag: "App Development", image: "https://picsum.photos/seed/tiffin-trail/640/460", link: "https://example.com/tiffin-trail" },
  { title: "Bloomsbury Launch", date: "Jan 2025", tag: "Landing Page", image: "https://picsum.photos/seed/bloomsbury-launch/640/460", link: "https://example.com/bloomsbury" },
  { title: "Circuit Summit '24", date: "Sep 2024", tag: "Landing Page", image: "https://picsum.photos/seed/circuit-summit/640/460", link: "https://example.com/circuit-summit" },
  { title: "Saffron & Silk", date: "Mar 2025", tag: "E-commerce Website", image: "https://picsum.photos/seed/saffron-silk/640/460", link: "https://example.com/saffron-silk" },
  { title: "Foundry Roasters", date: "Aug 2024", tag: "E-commerce Website", image: "https://picsum.photos/seed/foundry-roasters/640/460", link: "https://example.com/foundry-roasters" },
  { title: "Northwind Dispatch", date: "Dec 2023", tag: "Web Application", image: "https://picsum.photos/seed/northwind-dispatch/640/460", link: "https://example.com/northwind" },
  { title: "Ledgerly", date: "Apr 2025", tag: "Web Application", image: "https://picsum.photos/seed/ledgerly/640/460", link: "https://example.com/ledgerly" },
  { title: "Aurora Analytics — UI Kit", date: "Feb 2025", tag: "UI/UX Design", image: "https://picsum.photos/seed/aurora-uikit/640/460", link: "https://example.com/aurora-uikit" },
  { title: "Marrow & Co. Wireframes", date: "Jul 2023", tag: "UI/UX Design", image: "https://picsum.photos/seed/marrow-wireframes/640/460", link: "https://example.com/marrow-wireframes" },
  { title: "Pinewood Realty Refresh", date: "May 2024", tag: "Website Redesign", image: "https://picsum.photos/seed/pinewood-realty/640/460", link: "https://example.com/pinewood-realty" },
  { title: "Harbor & Vine, v2", date: "Jan 2024", tag: "Website Redesign", image: "https://picsum.photos/seed/harbor-vine/640/460", link: "https://example.com/harbor-vine" },
  { title: "Marrow & Co. Reel Series", date: "Nov 2023", tag: "Content creation & video editing", image: "https://picsum.photos/seed/marrow-reels/640/460", link: "https://example.com/marrow-reels" },
  { title: "Foundry Roasters — Launch Film", date: "Sep 2024", tag: "Content creation & video editing", image: "https://picsum.photos/seed/foundry-film/640/460", link: "https://example.com/foundry-film" },
  { title: "Kavir Interiors — SEO Sprint", date: "Dec 2024", tag: "SEO Optimization", image: "https://picsum.photos/seed/kavir-seo/640/460", link: "https://example.com/kavir-seo" },
  { title: "Hola 9 — Local Search", date: "Mar 2025", tag: "SEO Optimization", image: "https://picsum.photos/seed/hola9-seo/640/460", link: "https://example.com/hola9-seo" },
  { title: "Basilico Trattoria — Profile", date: "Jun 2024", tag: "Business Profile Creation", image: "https://picsum.photos/seed/basilico-profile/640/460", link: "https://example.com/basilico-profile" },
  { title: "Circuit Summit — Growth Push", date: "Oct 2024", tag: "Digital Marketing Services", image: "https://picsum.photos/seed/circuit-growth/640/460", link: "https://example.com/circuit-growth" },
  { title: "Saffron & Silk — Socials", date: "Apr 2025", tag: "Social media management", image: "https://picsum.photos/seed/saffron-socials/640/460", link: "https://example.com/saffron-socials" },
  { title: "Northwind — Care Plan", date: "Ongoing", tag: "Maintenance & Support", image: "https://picsum.photos/seed/northwind-care/640/460", link: "https://example.com/northwind-care" },
  { title: "Bloomsbury — Brand System", date: "Jan 2025", tag: "Branding and marketing", image: "https://picsum.photos/seed/bloomsbury-brand/640/460", link: "https://example.com/bloomsbury-brand" },
  { title: "Pinewood Realty — Go-to-Market", date: "May 2024", tag: "Business Consultancy", image: "https://picsum.photos/seed/pinewood-consult/640/460", link: "https://example.com/pinewood-consult" },
  { title: "Harbor & Vine — Menu Art", date: "Feb 2024", tag: "Graphic Designing", image: "https://picsum.photos/seed/harbor-graphics/640/460", link: "https://example.com/harbor-graphics" },
  { title: "Ledgerly — Data Cleanup", date: "Apr 2025", tag: "Row Calling data", image: "https://picsum.photos/seed/ledgerly-data/640/460", link: "https://example.com/ledgerly-data" },
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
  useEffect(() => {
    document.title = "Portfolio Website | Indo Sparsh Studio";
  }, []);
  const rootRef = useReveal();

  const [activeService, setActiveService] = useState("All");
  const workRef = useRef(null);
  const gridRef = useRef(null);

  const filteredWork = useMemo(() => {
    if (activeService === "All") return WORK;
    return WORK.filter((w) => w.tag === activeService);
  }, [activeService]);

  // The cards below use the site-wide .js-reveal convention, but that
  // class is normally driven by the IntersectionObserver in useReveal(),
  // which only scans the page once on mount. Cards that appear later —
  // e.g. after clicking a service filter — are never seen by that
  // observer and stay stuck at opacity: 0. Since a filter click means
  // this section is already on screen, just reveal its cards directly
  // instead of waiting on a scroll observer.
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
    <main className="pf" ref={rootRef}>
      {/* HEADER ------------------------------------------------------ */}
      <section className="pf-header">
        <div className="pf-grid-bg" aria-hidden="true" />
        <p className="pf-eyebrow js-reveal">Sheet 000 — Studio Index</p>

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

        <p className="pf-page-note js-reveal">
          This page is the studio's running record: how we work, who's on
          the team, and the actual work, sorted by the service it came out
          of. Scroll for the process, or skip straight to the service
          ticker at the bottom to see what we've shipped in that lane.
        </p>

        <div className="pf-stamp js-reveal" aria-hidden="true">
          <span>Proof</span>
          <span>Approved</span>
        </div>
      </section>

      {/* ABOUT --------------------------------------------------------- */}
      <section className="pf-about">
        <div className="pf-about-copy js-reveal">
          <span className="pf-label">Sheet 000 / About</span>
          <h2>
            A small studio that treats every project like a print run —
            proofed before it ships.
          </h2>
          <p>
            Indo Sparsh Studio is a two-person shop working across product
            design and front-end engineering. We take on a handful of
            projects at a time so each one gets an actual review pass
            instead of a rush job — dashboards, storefronts, dispatch tools,
            editorial sites, whatever the brief calls for.
          </p>
          <p>
            No account managers, no hand-offs between five different
            people. Whoever designs the sheet is the one who builds it.
          </p>
        </div>

        <div className="pf-stats js-reveal">
          {STATS.map((s) => (
            <div className="pf-stat-block" key={s.label}>
              <span className="pf-stat-block-value">{s.value}</span>
              <span className="pf-stat-block-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS --------------------------------------------------------- */}
      <section className="pf-process">
        <span className="pf-label js-reveal">How a sheet gets made</span>
        <div className="pf-process-list">
          {PROCESS.map((step, i) => (
            <div
              className="pf-process-step js-reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
              key={step.n}
            >
              <span className="pf-process-n">{step.n}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CARD GRID ------------------------------------------------------ */}
      <section className="pf-work">
        <span className="pf-label js-reveal">
          Sheets 01–{PROJECTS.length.toString().padStart(2, "0")} / Selected work
        </span>

        <div className="pf-grid">
          {PROJECTS.map((p, i) => (
            <article
              className="pf-card js-reveal"
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

                  <a
                    className="pf-link"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    View case
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10h12M11 5l5 5-5 5" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TEAM ------------------------------------------------------ */}
      <section className="pf-team">
        <span className="pf-label js-reveal">The people on the sheet</span>
        <h2 className="pf-team-heading js-reveal">My team</h2>

        <div className="pf-team-grid">
          {TEAM.map((member, i) => (
            <article
              className="pf-team-card js-reveal"
              style={{ transitionDelay: `${i * 110}ms` }}
              key={member.name}
            >
              <CropMarks />
              <div className="pf-team-avatar" aria-hidden="true">
                <span>{member.initials}</span>
              </div>

              <h3>{member.name}</h3>
              <p className="pf-team-role">{member.role}</p>
              <p className="pf-team-study">{member.study}</p>
              <p className="pf-team-bio">{member.bio}</p>

              <ul className="pf-tags">
                {member.focus.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSING CTA ------------------------------------------------------ */}
      <section className="pf-cta js-reveal">
        <h2>Have a sheet worth printing?</h2>
        <p>
          More case studies get added here as work ships — the full list
          always lives in the footer. If you've got a brief, we'd like to
          hear it.
        </p>
        <Link className="pf-cta-link" to="/request-quote">
          Start a project
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h12M11 5l5 5-5 5" />
          </svg>
        </Link>
      </section>

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
  );
}