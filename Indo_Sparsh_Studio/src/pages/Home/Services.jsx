import React, { useState, useEffect } from "react";
import "../Services.css";
import {
  FaHandshakeSimple,
  FaBriefcase,
  FaCode,
  FaMobileScreenButton,
  FaBullhorn,
  FaPaintbrush,
  FaPalette,
  FaChartLine,
  FaVideo,
  FaDatabase,
} from "react-icons/fa6";
import { MdCampaign } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ScrollBeam from "../ScrollBeam";

const HomeServices = () => {
  const navigate = useNavigate();


  return (
    <>
      <section className="services-section">
        {/* Header */}
        <div className="services-header">
          <h1>
            Our <span>Services</span>
          </h1>
          <p>
            We craft powerful digital solutions that combine design, technology,
            and strategy to help brands grow and dominate the future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon holo ai">
              <span className="holo-core"></span>

              <FaBriefcase className="center-icon" />

              <div className="energy-particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <h3>Business Profile Creation</h3>
            <p>
              Google Business Profile, Social Media Pages, WhatsApp Business
              Account, Professional Business Mail, Other Digital Solutions with
              Integration & Automation.
            </p>
            <button
              className="main-service-btn-primary"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                navigate("/services/profile-creation");
              }}
            >
              Explore more
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon holo dev">
              <span className="holo-core"></span>

              <FaCode className="center-icon" />

              <div className="energy-particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <h3>Web Development</h3>
            <p>Static Website, Dynamic Website, Landing Page, Portfolio etc.</p>
            <button
              className="main-service-btn-primary"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                navigate("/services/website-development");
              }}
            >
              Explore more
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon holo dev">
              <span className="holo-core"></span>

              <FaMobileScreenButton className="center-icon" />

              <div className="energy-particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <h3>App Development</h3>
            <p>Android Apps, iOS Apps, Cross-Platform Solutions etc.</p>
            <button
              className="main-btn-primary"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                navigate("/services/app-development");
              }}
            >
              Explore more
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon holo cyber">
              <span className="holo-core"></span>

              <FaBullhorn className="center-icon" />

              <div className="energy-particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <h3>Digital Marketing Services</h3>
            <p>
              WhatsApp Marketing, SMS Marketing, Google Ads, Meta Ads, Telegram
              Ads, SEO etc.
            </p>
            <button
              className="main-btn-primary"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                navigate("/services/digital-marketing");
              }}
            >
              Explore more
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon holo design">
              <span className="holo-core"></span>

              <FaChartLine className="center-icon" />

              <div className="energy-particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <h3>Social Media Management</h3>
            <p>
              Content Planning, Post Design, Scheduling, Engagement Growth etc.
            </p>
            <button
              className="main-btn-primary"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                navigate("/services/social-media");
              }}
            >
              Explore more
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon holo cloud">
              <span className="holo-core"></span>

              <FaPaintbrush className="center-icon" />

              <div className="energy-particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <h3>UI/UX Design</h3>
            <p>
              User-Centric Design, Wireframes & Prototypes, Conversion-Optimized
              Interfaces etc.
            </p>
            <button
              className="main-btn-primary"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                navigate("/services/ui-ux-design");
              }}
            >
              Explore more
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon holo brand">
              <span className="holo-core"></span>

              <FaPalette className="center-icon" />

              <div className="energy-particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <h3>Graphics Design Services</h3>
            <p>
              Logo Design, Posters & Banners, Social Media Creatives, Business
              Branding Materials etc.
            </p>
            <button
              className="main-btn-primary"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                navigate("/services/graphic-design");
              }}
            >
              Explore more
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon holo ai">
              <span className="holo-core"></span>

              <FaHandshakeSimple className="center-icon" />

              <div className="energy-particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <h3>Branding & Marketing</h3>
            <p>
              Brand Strategy, Brand Identity, Online & Offline Marketing etc.
            </p>
            <button
              className="main-btn-primary"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                navigate("/services/branding");
              }}
            >
              Explore more
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon holo dev">
              <span className="holo-core"></span>

              <FaDatabase className="center-icon" />

              <div className="energy-particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <h3>Row Calling Data</h3>
            <p>Verified Business Leads, Industry-Specific Data etc.</p>
            <button
              className="main-btn-primary"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                navigate("/services/row-calling-data");
              }}
            >
              Explore more
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon holo cyber">
              <span className="holo-core"></span>

              <FaVideo className="center-icon" />

              <div className="energy-particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <h3>Content Creation & Video Editing Services</h3>
            <p>Promotional Videos, Reels & Shorts, Corporate Videos etc.</p>
            <button
              className="main-btn-primary"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                navigate("/services/content-hub");
              }}
            >
              Explore more
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon holo design">
              <span className="holo-core"></span>

              <FaBriefcase className="center-icon" />

              <div className="energy-particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <h3>Business Consultancy</h3>
            <p>
              Business Growth Planning, Digital Transformation Strategy etc.
            </p>

            <button
              className="main-btn-primary"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                navigate("/services/business-consultancy");
              }}
            >
              Explore more
            </button>
          </div>
        </div>
      </section>
      <ScrollBeam />
    </>
  );
};

export default HomeServices;
