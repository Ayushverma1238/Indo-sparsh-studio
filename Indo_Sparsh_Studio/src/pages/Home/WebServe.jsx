import React, { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import "./WebServe.css";
import ScrollBeam from "../ScrollBeam";

const WebServe = () => {
  const services = [
    "Business Profile Creation",
    "Web Development",
    "App Development",
    "Digital Marketing Services",
    "Social Media Management",
    "UI/UX Design",
    "Graphics Design Services",
    "Branding & Marketing",
    "Row Calling Data",
    "Content Creation & Video Editing Services",
    "Business Consultancy",
  ];

  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = services[serviceIndex];
    let typingSpeed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing
        setTypedText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === current.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        // deleting
        setTypedText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setServiceIndex((prev) => (prev + 1) % services.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, serviceIndex]);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setShouldLoadVideo(true));
    } else {
      setTimeout(() => setShouldLoadVideo(true), 1500);
    }
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <section className="home-hero">
        <img
          src="/video/hero-poster.webp"
          alt="Hero Background"
          className={`hero-media hero-poster ${isVideoLoaded ? "fade-out" : "fade-in"}`}
          fetchPriority="high"
        />

        {/* Video loads conditionally after initial render */}
        {shouldLoadVideo && (
          <video
            ref={videoRef}
            className={`hero-media hero-video ${isVideoLoaded ? "fade-in" : "fade-out"}`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setIsVideoLoaded(true)}
          >
            {/* Serve a lightweight mobile compressed version on small screens */}
            <source
              src="/video/hero-bg.mp4"
              type="video/mp4"
              media="(max-width: 768px)"
            />
            <source src="/video/hero-bg.mp4" type="video/mp4" />
          </video>
        )}

        <div className="home-container">
          <h1 className="hero-title">
            <span className="empowering">Empowering</span>
            <br />

            <span className="business">Businesses with</span>
            <br />

            <span className="digital">Digital Solutions</span>
            <br />

            <span className="like">like</span>
          </h1>

          <div className="hero-typing-wrapper">
            <h2 className="hero-service">
              <span className="typing-text">{typedText}</span>
              <span className="typing-cursor">|</span>
            </h2>
          </div>

          <p>
            We help ambitious startups turn bold ideas into powerful digital
            experiences. By combining strategy, creativity, and smart
            technology, we build scalable solutions designed to grow fast and
            perform even faster.
          </p>

          <div className="home-buttons">
            <button
              className="main-btn-primary"
              onClick={() =>
                navigate("/", {
                  state: {
                    scrollTo: "we-serve-for",
                  },
                })
              }
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
      </section>
      <ScrollBeam />
    </>
  );
};

export default WebServe;
