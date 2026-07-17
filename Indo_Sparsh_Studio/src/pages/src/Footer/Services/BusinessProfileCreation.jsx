import React, { useState } from 'react';
import './BusinessProfileCreation.css';

const ProfessionalShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const coreMetrics = [
    { value: '99%', label: 'LCP Score Benchmark' },
    { value: '60 FPS', label: 'Render Processing' },
    { value: '100%', label: 'Semantic SEO Index' }
  ];

  const projectPortfolio = [
    {
      id: 1,
      title: 'Nexus Labs Cloud Registry',
      category: 'saas',
      icon: '📦',
      url: 'https://nexuslabs.io',
      desc: 'High-velocity infrastructure dashboard displaying distributed microservice allocation logic and cross-region edge sync cycles.',
      features: ['React Core Architecture', 'Design System Integration', 'Dynamic Dark Tokens']
    },
    {
      id: 2,
      title: 'Apex Creative Engineering Studio',
      category: 'agency',
      icon: '⚡',
      url: 'https://apexarchitects.com',
      desc: 'Cinematic layout featuring hardware-accelerated CSS physics, flexible box frameworks, and full cross-platform viewport safety maps.',
      features: ['GPU Transforms', 'WCAG AA Compliance', 'Fluid Micro-animations']
    },
    {
      id: 3,
      title: 'Vortex Telemetry Suite',
      category: 'saas',
      icon: '✦',
      url: 'https://vortexcore.dev',
      desc: 'Real-time server engine log monitoring console aggregating live diagnostic data streaming bounds over high-fidelity network sockets.',
      features: ['Stream Pipelines', 'Responsive Flex Arrays', 'Custom Telemetry Buffers']
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projectPortfolio 
    : projectPortfolio.filter(p => p.category === activeTab);

  return (
    <div className="pro-showcase-wrapper">
      <div className="bg-structural-mesh"></div>
      <div className="ambient-accent-glow glow-top"></div>
      <div className="ambient-accent-glow glow-bottom"></div>

      {/* ========================================== */}
      {/* SECTION 1: SYSTEM EXECUTIVE SUMMARY HEADER */}
      {/* ========================================== */}
      <header className="pro-hero-section animate-slide-down">
        <span className="pro-badge">Production Portfolio</span>
        <h1>Engineering Premium <br />Digital <span className="gradient-highlight">Architectures</span></h1>
        <p className="pro-subtitle">
          We construct modular full-stack application layers, responsive typography tokens, and performant user interface maps calibrated for sub-second system deployment lifetimes.
        </p>

        {/* Live System Performance Telemetry Banners */}
        <div className="pro-metrics-grid animate-fade-in-up">
          {coreMetrics.map((metric, index) => (
            <div className="metric-card-node " key={index}>
              <h3>{metric.value}</h3>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
      </header>

      {/* ========================================== */}
      {/* SECTION 2: PORTFOLIO INTERACTIVE CONTROLS  */}
      {/* ========================================== */}
      <section className="pro-portfolio-area">
        <div className="portfolio-action-header animate-fade-in-up">
          <div className="header-meta-titles">
            <h2>Production Deployments Ledger</h2>
            <p>Select specific system indices to view custom layout models.</p>
          </div>
          
          <div className="portfolio-filter-rail">
            {['all', 'saas', 'agency'].map((tab) => (
              <button
                key={tab}
                className={`filter-matrix-btn why-card ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'all' ? 'All Frameworks' : tab.toUpperCase() + ' Engine'}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Card Display Layout Matrix */}
        <main className="portfolio-cards-matrix">
          {filteredProjects.map((project, idx) => (
            <article 
              className="portfolio-display-card why-card animate-card-up" 
              key={project.id}
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              <div className="card-ambient-overlay"></div>
              
              <div className="card-header-rail">
                <div className="card-monogram-frame">{project.icon}</div>
                <span className="card-category-badge">{project.category}</span>
              </div>

              <div className="card-body-rail">
                <h3>{project.title}</h3>
                <p className="card-routing-url">{project.url}</p>
                <p className="card-description-text">{project.desc}</p>
                
                {/* Feature Tags List Blocks */}
                <div className="card-feature-tags">
                  {project.features.map((feat, i) => (
                    <span key={i} className="feature-pill-tag">✦ {feat}</span>
                  ))}
                </div>
              </div>

              <div className="card-footer-rail">
                <a href={project.url} target="_blank" rel="noreferrer" className="card-action-link">
                  Launch Environment ↗
                </a>
                <span className="system-status-pill">
                  <span className="status-ping-dot"></span> Active Core
                </span>
              </div>
            </article>
          ))}
        </main>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: SYSTEM SPECIFICATION TIMELINE    */}
      {/* ========================================== */}
      <footer className="pro-compliance-footer animate-fade-in">
        <div className="compliance-box-content">
          <h5>✦ Architectural Deployment Checklist</h5>
          <p>
            All production repositories validate explicitly against WCAG 2.2 contrast thresholds, use hardware-isolated CSS rendering structures, and initialize instantly inside distributed server arrays.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalShowcase;