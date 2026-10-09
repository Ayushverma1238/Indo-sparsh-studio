
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WebServe.css";
import ScrollBeam from "../ScrollBeam";

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
  const [activeTagIndex, setActiveTagIndex] = useState(0);

  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Defer background video loading until the browser is idle.
  useEffect(() => {
    let timeoutId;
    let idleId;
    let cancelled = false;

    const loadVideo = () => {
      if (!cancelled) {
        setShouldLoadVideo(true);
      }
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(loadVideo, {
        timeout: 2500,
      });
    } else {
      timeoutId = window.setTimeout(loadVideo, 1500);
    }

    return () => {
      cancelled = true;

      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  // Preserve the rotating pill effect, with fewer React updates.
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) return;

    const intervalId = window.setInterval(() => {
      setActiveTagIndex((previous) => (previous + 1) % tags.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="home-hero">
        {/* Eager-loaded poster: important for initial rendering */}
        <img
          src="/video/hero-poster.webp"
          alt=""
          aria-hidden="true"
          className={`hero-media hero-poster ${
            isVideoLoaded ? "fade-out" : "fade-in"
          }`}
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1080"
        />

        {/* Load the background video after the initial render */}
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
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src="/video/hero-bg.mp4" type="video/mp4" />
          </video>
        )}

        <div className="home-container">
          <h1 className="hero-title">
            <span className="title-line">Empowering</span>
            <br />
            <span className="title-highlight">
              Your Digital Journey
            </span>
          </h1>

          <p className="hero-bio">
            We Build, Promote &amp; Grow Your Business Online with
            Result-Driven Digital Solutions.
          </p>

          <div className="pill-group">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={`pill ${
                  index === activeTagIndex ? "pill--active" : ""
                }`}
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
