import React from "react";
import './WebsiteDevelopment.css'

const WebsiteDevelopment = () => {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <main id="main">
        <section className="hero">
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Service — Website Development</p>
              <h1>
                We draft your site like a set of building plans, then build it
                to spec.
              </h1>
              <p className="hero-sub">
                Every project starts on paper: sitemap, structure, and
                measurements agreed before a single line of code ships. What you
                approve on the drawing is what you get in the browser.
              </p>
              <div className="hero-cta">
                <a href="#pricing" className="btn btn-primary">
                  See packages
                </a>
                <a href="#process" className="btn btn-ghost">
                  How we build
                </a>
              </div>
              <dl className="hero-stats">
                <div>
                  <dt>Avg. load time</dt>
                  <dd>&le; 1.2s</dd>
                </div>
                <div>
                  <dt>Accessibility</dt>
                  <dd>WCAG 2.1 AA</dd>
                </div>
                <div>
                  <dt>Typical delivery</dt>
                  <dd>4&ndash;6 weeks</dd>
                </div>
              </dl>
            </div>

            <div
              className="hero-plan"
              role="img"
              aria-label="Blueprint diagram of a website layout with annotated sections"
            >
              <svg
                viewBox="0 0 480 420"
                className="plan-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 10h20M10 10v20" className="reg-mark" />
                <path d="M470 10h-20M470 10v20" className="reg-mark" />
                <path d="M10 410h20M10 410v-20" className="reg-mark" />
                <path d="M470 410h-20M470 410v-20" className="reg-mark" />

                <rect
                  x="60"
                  y="40"
                  width="360"
                  height="330"
                  className="plan-frame"
                />
                <rect x="60" y="40" width="360" height="46" className="plan-line" />
                <text x="72" y="68" className="plan-label">
                  NAV — 1440 &times; 72
                </text>

                <rect
                  x="60"
                  y="86"
                  width="360"
                  height="140"
                  className="plan-line"
                />
                <text x="72" y="106" className="plan-label">
                  HERO
                </text>
                <line x1="80" y1="130" x2="260" y2="130" className="plan-dash" />
                <line x1="80" y1="150" x2="220" y2="150" className="plan-dash" />
                <rect x="80" y="170" width="120" height="30" className="plan-cta" />

                <rect
                  x="60"
                  y="226"
                  width="118"
                  height="90"
                  className="plan-line"
                />
                <rect
                  x="181"
                  y="226"
                  width="118"
                  height="90"
                  className="plan-line"
                />
                <rect
                  x="302"
                  y="226"
                  width="118"
                  height="90"
                  className="plan-line"
                />
                <text x="72" y="246" className="plan-label plan-label-sm">
                  01
                </text>
                <text x="193" y="246" className="plan-label plan-label-sm">
                  02
                </text>
                <text x="314" y="246" className="plan-label plan-label-sm">
                  03
                </text>

                <rect
                  x="60"
                  y="316"
                  width="360"
                  height="54"
                  className="plan-line"
                />
                <text x="72" y="336" className="plan-label plan-label-sm">
                  FOOTER
                </text>

                <line x1="430" y1="86" x2="430" y2="226" className="dim-line" />
                <text
                  x="436"
                  y="160"
                  className="dim-text"
                  transform="rotate(90 436 160)"
                >
                  CONTENT HEIGHT
                </text>
              </svg>
              <p className="plan-caption">
                SHEET 01 — Homepage layout, scale not to size
              </p>
            </div>
          </div>
        </section>

        <section className="stages" id="process">
          <div className="wrap">
            <p className="eyebrow">The process</p>
            <h2>Five stages, one continuous drawing</h2>
            <p className="section-sub">
              Each stage hands off a concrete artifact to the next — nothing
              moves forward on a verbal agreement alone.
            </p>

            <ol className="stage-list">
              <li className="stage-row">
                <span className="stage-num">01</span>
                <div className="stage-body">
                  <h3>Discovery</h3>
                  <p>
                    We map your goals, audience, and existing content into a
                    brief you sign off on before design starts.
                  </p>
                </div>
                <span className="stage-artifact">Artifact: project brief</span>
              </li>
              <li className="stage-row">
                <span className="stage-num">02</span>
                <div className="stage-body">
                  <h3>Structure &amp; sitemap</h3>
                  <p>
                    Pages, navigation, and content hierarchy get drawn out as a
                    wireframe before any visual styling.
                  </p>
                </div>
                <span className="stage-artifact">Artifact: wireframe set</span>
              </li>
              <li className="stage-row">
                <span className="stage-num">03</span>
                <div className="stage-body">
                  <h3>Visual system</h3>
                  <p>
                    Typography, color, and components are designed as a reusable
                    kit, then applied across every page.
                  </p>
                </div>
                <span className="stage-artifact">Artifact: style guide</span>
              </li>
              <li className="stage-row">
                <span className="stage-num">04</span>
                <div className="stage-body">
                  <h3>Build</h3>
                  <p>
                    Front-end and back-end are built against the approved plan —
                    responsive, accessible, and fast by default.
                  </p>
                </div>
                <span className="stage-artifact">Artifact: staging site</span>
              </li>
              <li className="stage-row">
                <span className="stage-num">05</span>
                <div className="stage-body">
                  <h3>QA &amp; launch</h3>
                  <p>
                    Cross-browser testing, performance passes, and a guided
                    handover before your site goes live.
                  </p>
                </div>
                <span className="stage-artifact">Artifact: launch checklist</span>
              </li>
            </ol>
          </div>
        </section>

        <section className="capabilities" id="capabilities">
          <div className="wrap">
            <p className="eyebrow">What's included</p>
            <h2>Everything a modern site needs, nothing it doesn't</h2>
            <div className="capability-grid">
              <div className="cap-card">
                <span className="cap-tag">Front-end</span>
                <p>
                  Responsive layouts built with semantic HTML and modern CSS,
                  tested from 320px up.
                </p>
              </div>
              <div className="cap-card">
                <span className="cap-tag">Back-end</span>
                <p>
                  Forms, content management, and integrations wired up to the
                  tools your team already uses.
                </p>
              </div>
              <div className="cap-card">
                <span className="cap-tag">Performance</span>
                <p>
                  Optimized assets and lean code aimed at sub-1.5s load times on
                  real-world connections.
                </p>
              </div>
              <div className="cap-card">
                <span className="cap-tag">SEO foundations</span>
                <p>
                  Clean markup, metadata, and sitemap structure so search
                  engines can read the site properly.
                </p>
              </div>
              <div className="cap-card">
                <span className="cap-tag">Accessibility</span>
                <p>
                  Keyboard navigation, color contrast, and screen-reader support
                  checked against WCAG 2.1 AA.
                </p>
              </div>
              <div className="cap-card">
                <span className="cap-tag">Hosting &amp; care</span>
                <p>
                  Deployment setup plus an optional maintenance plan for
                  updates, backups, and monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="packages" id="pricing">
          <div className="wrap">
            <p className="eyebrow">Packages</p>
            <h2>Three sheets to choose from</h2>

            <div className="package-grid">
              <article className="package-card why-card">
                <p className="sheet-no">SHEET 01 / 03</p>
                <h3>Starter</h3>
                <p className="package-price">From $1,800</p>
                <p className="package-desc">
                  A focused site for a new business — up to 5 pages, built on a
                  single visual system.
                </p>
                <ul className="package-list">
                  <li>Up to 5 pages</li>
                  <li>Mobile-first responsive build</li>
                  <li>Contact form &amp; basic SEO</li>
                  <li>2-week delivery</li>
                </ul>
                <a href="contact.html" className="btn btn-ghost btn-block">
                  Start with this sheet
                </a>
              </article>

              <article className="package-card package-featured why-card">
                <p className="sheet-no">SHEET 02 / 03</p>
                <span className="badge">Most requested</span>
                <h3>Growth</h3>
                <p className="package-price">From $4,200</p>
                <p className="package-desc">
                  For businesses that need content management, more pages, and a
                  stronger visual identity.
                </p>
                <ul className="package-list">
                  <li>Up to 12 pages</li>
                  <li>Custom component library</li>
                  <li>CMS setup &amp; team training</li>
                  <li>4&ndash;6 week delivery</li>
                </ul>
                <a href="contact.html" className="btn btn-primary btn-block">
                  Start with this sheet
                </a>
              </article>

              <article className="package-card why-card">
                <p className="sheet-no">SHEET 03 / 03</p>
                <h3>Custom</h3>
                <p className="package-price">Scoped on request</p>
                <p className="package-desc">
                  Multi-language sites, e-commerce, or bespoke integrations —
                  drawn up to your exact spec.
                </p>
                <ul className="package-list">
                  <li>Unlimited pages</li>
                  <li>E-commerce &amp; integrations</li>
                  <li>Dedicated project lead</li>
                  <li>Timeline scoped together</li>
                </ul>
                <a href="tel:+918005351770" className="btn btn-ghost btn-block">
                  Request a scope call
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-banner">
          <div className="wrap cta-inner">
            <div>
              <h2>Have a site in mind? Let's put it on paper.</h2>
              <p>
                Send a few details and we'll reply with a first sketch of your
                sitemap within two business days.
              </p>
            </div>
            <a href="/request-quote" className="btn btn-primary btn-lg">
              Request a quote
            </a>
          </div>
        </section>
      </main>

    
    </>
  );
};

export default WebsiteDevelopment;
