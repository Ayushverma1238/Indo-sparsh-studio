import React, { useState } from 'react';
import './ContentHub.css';

const ContentHub = () => {
  const [filter, setFilter] = useState('All');

  const productionCards = [
    {
      id: 1,
      title: 'AI Market Disruption Documentary',
      type: 'Longform Video',
      status: 'In Editing',
      progress: 68,
      rawSize: '42.5 GB',
      runtime: '14:20',
      thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      tags: ['Premiere Pro', 'After Effects', 'Color Grading']
    },
    {
      id: 2,
      title: '10 Productivity Hacks for Developers',
      type: 'YouTube Short',
      status: 'Rendering',
      progress: 92,
      rawSize: '4.1 GB',
      runtime: '0:58',
      thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
      tags: ['CapCut', 'Auto-Captions', 'Sound Design']
    },
    {
      id: 3,
      title: 'Building AgentForge - Ep. 4',
      type: 'Podcast / Devlog',
      status: 'Completed',
      progress: 100,
      rawSize: '12.8 GB',
      runtime: '32:45',
      thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=600&q=80',
      tags: ['Audition', 'Descript', 'Audio Mastering']
    },
    {
      id: 4,
      title: 'Next-Gen UI/UX Design Trends 2026',
      type: 'Longform Video',
      status: 'Footage Ingestion',
      progress: 15,
      rawSize: '88.2 GB',
      runtime: '18:10',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      tags: ['4K Raw', 'B-Roll Sync', 'Storyboard']
    }
  ];

  const filteredCards = filter === 'All' 
    ? productionCards 
    : productionCards.filter(card => card.type.includes(filter) || card.status === filter);

  return (
    <div className="content-hub-container">
      {/* Structural Header Area */}
      <header className="hub-header">
        <div className="hub-title-block">
          <span className="hub-badge">Production Deck</span>
          <h2>Studio Asset Pipeline</h2>
          <p>Monitor system ingestion, timelines, rendering buffers, and post-production lifecycles.</p>
        </div>

        {/* Global Storage & Performance Counters */}
        <div className="hub-stats-panel">
          <div className="hub-stat-item why-card">
            <span className="stat-lbl">Active Storage Buffer</span>
            <span className="stat-val">147.6 GB <small>/ 1 TB</small></span>
          </div>
          <div className="hub-stat-item why-card">
            <span className="stat-lbl">Render Engine Load</span>
            <span className="stat-val text-neon">Optimal</span>
          </div>
        </div>
      </header>

      {/* Filter Matrix Controls */}
      <div className="filter-bar">
        {['All', 'Longform Video', 'YouTube Short', 'In Editing', 'Completed'].map((tab) => (
          <button 
            key={tab} 
            className={`filter-btn why-card ${filter === tab ? 'active-filter' : ''}`}
            onClick={() => setFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Production Grid Layout */}
      <main className="production-grid">
        {filteredCards.map((card) => (
          <div className={`prod-card ${card.status === 'Completed' ? 'status-done' : ''} why-card`} key={card.id}>
            
            {/* Visual Thumbnail & Media Overlays */}
            <div className="prod-thumb-frame">
              <img src={card.thumbnail} alt={card.title} className="prod-img" />
              <div className="thumb-gradient-overlay"></div>
              
              <span className="asset-type-badge">{card.type}</span>
              <span className="runtime-badge">{card.runtime}</span>
              
              <div className={`status-pill ${card.status.toLowerCase().replace(' ', '-')}`}>
                <span className="pulse-dot"></span>
                {card.status}
              </div>
            </div>

            {/* Core Card Details */}
            <div className="prod-body">
              <h3 className="prod-title">{card.title}</h3>
              
              {/* Asset Technical Specs */}
              <div className="prod-specs-row">
                <span><strong>File Weight:</strong> {card.rawSize}</span>
                <span>•</span>
                <span><strong>Priority:</strong> High</span>
              </div>

              {/* Progress Bar & Engine Readout */}
              <div className="progress-container">
                <div className="progress-labels">
                  <span>Processing Timeline</span>
                  <span>{card.progress}%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${card.progress}%` }}></div>
                </div>
              </div>

              {/* Tag Architecture Mapping */}
              <div className="prod-tags-wrapper">
                {card.tags.map((tag, idx) => (
                  <span className="prod-tag" key={idx}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Card Footer Action Strip */}
            <div className="prod-actions-footer">
              <button className="action-btn secondary-hub-btn">Inspect Timeline</button>
              <button className="action-btn primary-hub-btn">
                {card.status === 'Completed' ? 'Export / Publish' : 'Open in Editor'}
              </button>
            </div>

          </div>
        ))}
      </main>
    </div>
  );
};

export default ContentHub;