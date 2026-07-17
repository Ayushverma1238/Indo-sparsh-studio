import React, { useState, useRef, useEffect } from 'react';
import './WebsiteRedesign.css';

const WebsiteRedesign = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="redesign-showcase-wrapper">
      
      {/* Dynamic Instruction Bar */}
      <div className="showcase-header">
        <span className="case-study-label">Interactive Case Study</span>
        <h2>Website Redesign System</h2>
        <p>Drag the center split handle left and right to witness the structural shift from visual chaos to algorithmic clarity.</p>
      </div>

      {/* Comparison Slider Frame */}
      <div 
        className="comparison-container" 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        
        {/* ========================================== */}
        {/* LAYER 1: THE NEW REDESIGN (Base Layer)     */}
        {/* ========================================== */}
        <div className="site-layer modern-version">
          <div className="modern-scrollable-content">
            
            {/* Hero Section */}
            <div className="modern-hero">
              <div className="modern-glow"></div>
              <span className="modern-badge">Version 2.0 Architectural Run</span>
              <h1>Architecting Digital <br /><span className="gradient-highlight">Experiences</span></h1>
              <p>We transform legacy frameworks into high-performance web ecosystems complete with fluid design systems and responsive layout parameters.</p>
              <div className="modern-cta-row">
                <button className="m-btn m-btn-primary">Initialize Project</button>
                <button className="m-btn m-btn-secondary">Explore Metrics</button>
              </div>
            </div>

            {/* NEW ADDITION: Performance Metrics Banner */}
            <div className="modern-metrics-bar">
              <div className="metric-item">
                <h4>+240%</h4>
                <p>Conversion Rate</p>
              </div>
              <div className="metric-item">
                <h4>-62%</h4>
                <p>Bounce Rate Reduction</p>
              </div>
              <div className="metric-item">
                <h4>0.4s</h4>
                <p>Avg Load Velocity</p>
              </div>
            </div>

            {/* NEW ADDITION: Engineering Audit Breakdown */}
            <div className="modern-audit-section why-card">
              <h3>System Enhancements</h3>
              <div className="audit-list">
                <div className="audit-item">
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Responsive Em Blocks</strong>
                    <p>Replaced fragile static table coordinates with dynamic CSS flex arrays mapping perfectly to any device footprint.</p>
                  </div>
                </div>
                <div className="audit-item">
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Accessible Contrast (WCAG AA)</strong>
                    <p>Substituted vibrating neon text filters with parsed typography layers maintaining absolute compliance ratios.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Feature Grid */}
            <div className="modern-grid-section">
              <div className="m-card why-card">
                <div className="m-card-icon">✦</div>
                <h3>Algorithmic Layouts</h3>
                <p>Clean system execution with semantic elements optimized for visual performance.</p>
              </div>
              <div className="m-card why-card">
                <div className="m-card-icon">⚡</div>
                <h3>Design System Tokens</h3>
                <p>Unified global constants managing uniform scales, animations, and typography variables.</p>
              </div>
            </div>

            {/* NEW ADDITION: Interactive Token Spec Section */}
            <div className="modern-tokens-section">
              <h3>Visual Core Tokens</h3>
              <div className="token-swatches">
                <div className="swatch" style={{backgroundColor: '#0b0f19'}}><span>#0B0F19<br/>Primary</span></div>
                <div className="swatch" style={{backgroundColor: '#6366f1'}}><span>#6366F1<br/>Accent</span></div>
                <div className="swatch" style={{backgroundColor: '#a855f7'}}><span>#A855F7<br/>Gradient</span></div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================== */}
        {/* LAYER 2: THE OLD UGLY WEBSITE (Clipped Overlay) */}
        {/* ========================================== */}
        <div 
          className="site-layer old-version" 
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="old-version-content">
            <div className="old-header">
              <font size="6" color="#FF0000" face="Comic Sans MS"><b>!!! WELCOME TO MY HOME PAGE !!!</b></font>
              <marquee scrollamount="5" bgcolor="#FFFF00">UPDATED LAST IN 2001 -- BEST VIEWED IN NETSCAPE NAVIGATOR AT 800x600 RESOLUTION!!</marquee>
            </div>

            <center>
              <table border="5" cellPadding="10" cellSpacing="5" className="old-table">
                <tbody>
                  <tr>
                    <td align="center" colSpan="2" className="old-hero-td">
                      <font size="5" color="#0000FF" face="Impact">SERVICES WE OFFER</font>
                      <p>We do web design and development text graphics and stuff. Click links below now.</p>
                      <blink><button className="old-button">CLICK HERE TO JOIN!!!</button></blink>
                    </td>
                  </tr>
                  <tr>
                    <td width="50%" className="old-feature-td">
                      <b><font color="#FF00FF">Feature 1</font></b>
                      <p>Basic HTML table formatting that breaks on mobile phones easily!</p>
                    </td>
                    <td width="50%" className="old-feature-td">
                      <b><font color="#008000">Feature 2</font></b>
                      <p>Bright neon colors that will make your eyes hurt after reading!</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </center>
            
            <div className="old-visitor-counter">
              <font size="3" color="#FFFFFF">You are visitor number: <b>00048291</b></font>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* INTERACTIVE DRAG BAR CONTROL               */}
        {/* ========================================== */}
        <div 
          className="slider-control-bar" 
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          <div className="slider-handle-button">
            <span className="arrow-left">◀</span>
            <span className="arrow-right">▶</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WebsiteRedesign;