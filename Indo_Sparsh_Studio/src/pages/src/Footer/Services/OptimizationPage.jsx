import React, { useState, useEffect } from "react";
import "./OptimizationPage.css";

const OptimizationPage = () => {
  const [activeMetric, setActiveMetric] = useState("vitals");
  const [isLiveChecking, setIsLiveChecking] = useState(false);
  const [simulatedPing, setSimulatedPing] = useState(14);

  // Mock real-time streaming console updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedPing(Math.floor(Math.random() * (18 - 11 + 1)) + 11);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const runPerformanceDiagnostic = () => {
    setIsLiveChecking(true);
    setTimeout(() => {
      setIsLiveChecking(false);
    }, 1500);
  };

  const systemsMetrics = {
    vitals: {
      title: "Core Web Vitals Metric Arrays",
      score: "99/100",
      description:
        "Parsed assets, compressed styles, and optimized element structures ensure immediate visual response times.",
      stats: [
        {
          label: "Largest Contentful Paint (LCP)",
          value: "0.62s",
          status: "Optimal",
        },
        { label: "First Input Delay (FID)", value: "11ms", status: "Optimal" },
        {
          label: "Cumulative Layout Shift (CLS)",
          value: "0.002",
          status: "Optimal",
        },
      ],
    },
    pipeline: {
      title: "Hardware-Accelerated Render Engine",
      score: "60 FPS",
      description:
        "Direct GPU CSS-transform offloading keeps animations buttery smooth under heavy full-stack processing loads.",
      stats: [
        { label: "Composite Layers Time", value: "1.4ms", status: "Optimal" },
        { label: "Layout Shift Prevention", value: "100%", status: "Stable" },
        {
          label: "GPU VRAM Buffer Allocation",
          value: "12%",
          status: "Low Load",
        },
      ],
    },
    seo: {
      title: "Semantic Content Architecture",
      score: "100%",
      description:
        "Valid markup layout structures, schema JSON metadata, and responsive typography maximize cross-platform indexes.",
      stats: [
        { label: "Mobile Scaling Pass Rate", value: "100%", status: "Passed" },
        {
          label: "Structured Data Validation",
          value: "Valid",
          status: "Healthy",
        },
        {
          label: "Server-Response Handshake",
          value: `${simulatedPing}ms`,
          status: "Excellent",
        },
      ],
    },
  };

  const consoleLines = [
    {
      text: "[SYSTEM INFO]: Initializing telemetry probe sequence...",
      className: "text-muted",
    },
    { text: "[OK]: Web Vitals cache state verified clean.", className: "" },
    {
      text: "[OK]: Thread pools sitting optimal at 60fps bounds.",
      className: "",
    },
    {
      text: `[METRIC UPDATE]: Server roundtrip latency calculated at ${simulatedPing}ms.`,
      className: "text-accent",
    },
  ];

  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let timeoutId;

    const typeNextChar = () => {
      if (lineIndex >= consoleLines.length) return;

      const line = consoleLines[lineIndex];

      if (charIndex < line.text.length) {
        currentText += line.text[charIndex];
        charIndex++;

        setVisibleLines((prev) => {
          const updated = [...prev];
          updated[lineIndex] = { text: currentText, className: line.className };
          return updated;
        });

        timeoutId = setTimeout(typeNextChar, 20);
      } else {
        lineIndex++;
        charIndex = 0;
        currentText = "";
        timeoutId = setTimeout(typeNextChar, 300);
      }
    };

    typeNextChar();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="opt-page-container">
      <div className="opt-mesh-grid"></div>

      <header className="opt-header animate-slide-down">
        <div className="opt-title-stack">
          <span className="opt-section-tag">System Telemetry</span>
          <h2>Infrastructure & Optimization Hub</h2>
          <p>
            Real-time analytics showcasing layout efficiency, load
            distributions, and rendering parameters.
          </p>
        </div>
        <button
          className={`opt-diagnostic-btn ${isLiveChecking ? "running" : ""}`}
          onClick={runPerformanceDiagnostic}
          disabled={isLiveChecking}
        >
          {isLiveChecking ? "Running Telemetry..." : "Trigger Live Diagnostic"}
        </button>
      </header>

      <main className="opt-dashboard-grid">
        <section className="opt-control-panel animate-fade-in-left">
          <h3>Optimization Arrays</h3>
          <div className="opt-tabs-list">
            <button
              className={`opt-tab-card why-card ${activeMetric === "vitals" ? "selected" : ""}`}
              onClick={() => setActiveMetric("vitals")}
            >
              <div className="tab-status-glow target-green"></div>
              <div>
                <h4>Core Web Vitals</h4>
                <p>Speed & structural agility benchmarks.</p>
              </div>
            </button>

            <button
              className={`opt-tab-card why-card ${activeMetric === "pipeline" ? "selected" : ""}`}
              onClick={() => setActiveMetric("pipeline")}
            >
              <div className="tab-status-glow target-purple"></div>
              <div>
                <h4>Rendering Pipeline</h4>
                <p>GPU offloading & graphic frame checks.</p>
              </div>
            </button>

            <button
              className={`opt-tab-card why-card ${activeMetric === "seo" ? "selected" : ""}`}
              onClick={() => setActiveMetric("seo")}
            >
              <div className="tab-status-glow target-blue"></div>
              <div>
                <h4>SEO & Server Latency</h4>
                <p>Semantic indexing & response pings.</p>
              </div>
            </button>
          </div>
        </section>

        <section className="opt-display-canvas why-card animate-fade-in-right">
          <div className="canvas-header-row">
            <h3>{systemsMetrics[activeMetric].title}</h3>
            <div className="score-badge-circle">
              <span className="score-val">
                {systemsMetrics[activeMetric].score}
              </span>
              <span className="score-lbl">Rating</span>
            </div>
          </div>

          <p className="canvas-summary-text">
            {systemsMetrics[activeMetric].description}
          </p>

          <div className="canvas-stats-stack">
            {systemsMetrics[activeMetric].stats.map((stat, i) => (
              <div
                className="canvas-stat-strip"
                key={i}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="strip-left">
                  <span className="strip-index">0{i + 1}</span>
                  <span className="strip-name">{stat.label}</span>
                </div>
                <div className="strip-right">
                  <span className="strip-value">{stat.value}</span>
                  <span className="strip-pill-status">{stat.status}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="system-console-box">
            <div className="console-top-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="console-title">telemetry_daemon_stream.sh</span>
            </div>
            <div className="console-body">
              {visibleLines.map((line, i) => (
                <p key={i} className={`console-line ${line.className}`}>
                  {line.text}
                  {i === visibleLines.length - 1 && (
                    <span className="console-cursor">|</span>
                  )}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OptimizationPage;