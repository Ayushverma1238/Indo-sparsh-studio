import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WebServe.css";
import ScrollBeam from "../ScrollBeam";

// Full services list — shown as pills, text only.
const tags = [
  "Business Profile Creation",
  "Web Development",
  "App Development",
  "Digital Marketing",
  "Social Media Management",
  "UI/UX Design",
  "Graphics Design",
  "Branding & Marketing",
  "Row Calling Data",
  "Content Creation & Video Editing",
  "Business Consultancy",
];

const WebServe = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Cycles the "active" (highlighted) pill every second, so the
  // gradient background appears to float from one pill to the next.
  const [activeTagIndex, setActiveTagIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTagIndex((prev) => (prev + 1) % tags.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setShouldLoadVideo(true));
    } else {
      setTimeout(() => setShouldLoadVideo(true), 1500);
    }
  }, []);

  return (
    <>
      <section className="home-hero">
        {/* ===== BACKGROUND (untouched) ===== */}
        <img
          src="/video/hero-poster.webp"
          alt="Hero Background"
          className={`hero-media hero-poster ${
            isVideoLoaded ? "fade-out" : "fade-in"
          }`}
          fetchPriority="high"
        />

        {shouldLoadVideo && (
          <video
            ref={videoRef}
            className={`hero-media hero-video ${
              isVideoLoaded ? "fade-in" : "fade-out"
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setIsVideoLoaded(true)}
          >
            <source
              src="/video/hero-bg.mp4"
              type="video/mp4"
              media="(max-width: 768px)"
            />
            <source src="/video/hero-bg.mp4" type="video/mp4" />
          </video>
        )}

        {/* ===== FOREGROUND CONTENT (updated) ===== */}
        <div className="home-container">
          <h1 className="hero-title">
            <span className="title-line">Empowering</span>
            <br />
            <span className="title-highlight">Your Digital Journey</span>
          </h1>
          <p className="hero-bio">
            We Build, Promote & Grow Your Bussiness Online with Result-Driven
            Digital Solution.
          </p>
          <div className="pill-group">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={`pill ${index === activeTagIndex ? "pill--active" : ""}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="hero-bottom-row">
            <div className="home-buttons">
              <button
                className="main-btn-primary"
                onClick={() => navigate("/services")}
              >
                Get Started
              </button>

              <button
                className="btn-secondary"
                onClick={() => navigate("/portfolio")}
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScrollBeam />
    </>
  );
};

export default WebServe;
