import React, { useState, useEffect } from 'react';
import './UiUxPage.css';
import {useNavigate} from 'react-router-dom'

const UiUxService = () => {
  // Set default theme to dark mode
  const [activeTab, setActiveTab] = useState('process');
  const navigate= useNavigate()

  const processSteps = [
    { num: '01', title: 'Research & Strategy', desc: 'Deep dive into user personas, competitor analysis, and market mapping.' },
    { num: '02', title: 'Wireframing & UX', desc: 'Building blueprints and user flows to map structural system layouts.' },
    { num: '03', title: 'UI & Prototyping', desc: 'Crafting pixel-perfect visual styles, design tokens, and interactive models.' },
    { num: '04', title: 'Testing & Iteration', desc: 'Validating with real users to refine accessibility and interaction details.' }
  ];

  const portfolioItems = [
    { title: 'Fintech Dashboard', category: 'Web App', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' },
    { title: 'E-Commerce Experience', category: 'Mobile App', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80' },
    { title: 'SaaS Platform Analytics', category: 'Web / UX', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' }
  ];

  

  return (
    <div className={`service-page-wrapper`}>
      
     
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-glow"></div>
        <div className="container">
          <span className="badge-fade-in">Our Expertise</span>
          <h1 className="hero-title animate-pop-up">
            Elevating Products Through <br />
            <span className="gradient-text">UI/UX Design</span>
          </h1>
          <p className="hero-subtitle animate-fade-in-up">
            We bridge the gap between human emotion and digital interfaces. Our designs aren't just beautiful—they are built to perform, convert, and scale.
          </p>
          <div className="hero-cta-group animate-fade-in-up">
            <button className="btn btn-primary project-card-btn">Start a Project</button>
            <button className="btn btn-secondary">View Case Studies</button>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-card">
            <h3>99%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-card">
            <h3>150+</h3>
            <p>Interfaces Deployed</p>
          </div>
          <div className="stat-card">
            <h3>40%</h3>
            <p>Average Conversion Lift</p>
          </div>
        </div>
      </section>

      {/* Workflow Strategy Selector */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-header">
            <h2>How We Build Value</h2>
            <div className="tab-buttons">
              <button className={`tab-btn ${activeTab === 'process' ? 'active' : ''}`} onClick={() => setActiveTab('process')}>Design Process</button>
              <button className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`} onClick={() => setActiveTab('tools')}>Our Tech Stack</button>
            </div>
          </div>

          {activeTab === 'process' ? (
            <div className="process-grid ">
              {processSteps.map((step, idx) => (
                <div className="process-card why-card" key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="card-num">{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="tools-view animate-fade-in">
              <div className="tool-tag why-card">Figma</div>
              <div className="tool-tag why-card">Adobe CC</div>
              <div className="tool-tag why-card">Principle</div>
              <div className="tool-tag why-card">ProtoPie</div>
              <div className="tool-tag why-card">Webflow</div>
              <div className="tool-tag why-card">Framer</div>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Showcase Grid */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-title-area">
            <h2>Recent Frameworks</h2>
            <p>A glimpse into our visual production outcomes.</p>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <div className="portfolio-card why-card" key={index}>
                <div className="portfolio-img-wrapper">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-hover-overlay">
                    <span className="view-project-link">Explore Case Study ↗</span>
                  </div>
                </div>
                <div className="portfolio-info">
                  <span>{item.category}</span>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="footer-cta-section">
        <div className="container cta-box">
          <h2>Ready to transform your vision?</h2>
          <p>Let's collaborate to build an experience your users will love.</p>
          <button onClick={() => navigate("/contact")} className="btn btn-primary white-btn">Get In Touch</button>
        </div>
      </section>

    </div>
  );
};

export default UiUxService;