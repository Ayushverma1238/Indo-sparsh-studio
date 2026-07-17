import "./Services.css";
import ScrollBeam from "./ScrollBeam";
import {
  FaUserAstronaut,
  FaProjectDiagram,
  FaHandshake,
  FaRocket,
  FaChartLine,
  FaMicrochip,
  FaBriefcase,
  FaCode,
  FaMobileAlt,
  FaBullhorn,
  FaPaintBrush,
  FaPalette,
  FaVideo,
  FaDatabase,
} from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  useEffect(() => {
    document.title = "Services | Indo Sparsh Studio";
  }, []);
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
              className="main-btn-primary why-card main-services-btn"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                scrollToSection("we-serve-for");
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
              className="main-btn-primary why-card services-btn"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                navigate("/services/website-development");
                scrollToSection("we-serve-for");
              }}
            >
              Explore more
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon holo dev">
              <span className="holo-core"></span>

              <FaMobileAlt className="center-icon" />

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
              className="main-btn-primary why-card services-btn"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                scrollToSection("we-serve-for");
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
              className="main-btn-primary why-card services-btn"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                scrollToSection("we-serve-for");
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
              className="main-btn-primary why-card services-btn"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                scrollToSection("we-serve-for");
                navigate("/services/social-media");
              }}
            >
              Explore more
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon holo cloud">
              <span className="holo-core"></span>

              <FaPaintBrush className="center-icon" />

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
              className="main-btn-primary why-card services-btn"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                scrollToSection("we-serve-for");
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
              className="main-btn-primary why-card services-btn"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                scrollToSection("we-serve-for");
                navigate("/services/graphic-design");
              }}
            >
              Explore more
            </button>
          </div>

          <div className="service-card">
            <div className="service-icon holo ai">
              <span className="holo-core"></span>

              <FaHandshake className="center-icon" />

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
              className="main-btn-primary why-card services-btn"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                scrollToSection("we-serve-for");
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
              className="main-btn-primary why-card services-btn"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                scrollToSection("we-serve-for");
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
              className="main-btn-primary why-card services-btn"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                scrollToSection("we-serve-for");
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
              className="main-btn-primary why-card services-btn"
              style={{
                padding: "10px 30px",
                color: "white",
                marginTop: "auto",
              }}
              onClick={() => {
                scrollToSection("we-serve-for");
                navigate("/services/business-consultancy");
              }}
            >
              Explore more
            </button>
          </div>
        </div>
      </section>

      <ScrollBeam />

      {/* ================= TECHNOLOGY WE USED ================= */}
      <section className="tech-section">
        <div className="tech-hero">
          <h1>
            Technology <span>We Used</span>
          </h1>
          <p>
            We work with modern, powerful, and scalable technologies to build
            high-performance digital products.
          </p>
        </div>

        {/* ===== AUTO SCROLL TECHNOLOGY LOGOS ===== */}
        <div className="clients-marquee">
          <div className="marquee-track">
            <div className="marquee-item">
              <img src="/tech/html.webp" alt="HTML" />
            </div>
            <div className="marquee-item">
              <img src="/tech/css.png" alt="CSS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/bootstrap.png" alt="Bootstrap" />
            </div>
            <div className="marquee-item">
              <img src="/tech/javascript.png" alt="JavaScript" />
            </div>
            <div className="marquee-item">
              <img src="/tech/nodejs.png" alt="NodeJS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/expressjs.png" alt="ExpressJS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/git.png" alt="Git" />
            </div>
            <div className="marquee-item">
              <img src="/tech/github.png" alt="GitHub" />
            </div>
            <div className="marquee-item">
              <img src="/tech/mongodb.png" alt="MongoDB" />
            </div>
            <div className="marquee-item">
              <img src="/tech/mysql.png" alt="MySQL" />
            </div>
            <div className="marquee-item">
              <img src="/tech/postman.png" alt="Postman" />
            </div>
            <div className="marquee-item">
              <img src="/tech/aws.png" alt="AWS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/redis.png" alt="Redis" />
            </div>
            <div className="marquee-item">
              <img src="/tech/react.png" alt="React" />
            </div>

            {/* duplicate for smooth infinite loop */}
            <div className="marquee-item">
              <img src="/tech/html.webp" alt="HTML" />
            </div>
            <div className="marquee-item">
              <img src="/tech/css.png" alt="CSS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/bootstrap.png" alt="Bootstrap" />
            </div>
            <div className="marquee-item">
              <img src="/tech/javascript.png" alt="JavaScript" />
            </div>
            <div className="marquee-item">
              <img src="/tech/nodejs.png" alt="NodeJS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/expressjs.png" alt="ExpressJS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/git.png" alt="Git" />
            </div>
            <div className="marquee-item">
              <img src="/tech/github.png" alt="GitHub" />
            </div>
            <div className="marquee-item">
              <img src="/tech/mongodb.png" alt="MongoDB" />
            </div>
            <div className="marquee-item">
              <img src="/tech/mysql.png" alt="MySQL" />
            </div>
            <div className="marquee-item">
              <img src="/tech/postman.png" alt="Postman" />
            </div>
            <div className="marquee-item">
              <img src="/tech/aws.png" alt="AWS" />
            </div>
            <div className="marquee-item">
              <img src="/tech/redis.png" alt="Redis" />
            </div>
            <div className="marquee-item">
              <img src="/tech/react.png" alt="React" />
            </div>
          </div>
        </div>
      </section>

      <ScrollBeam />

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">
        <div className="why-header">
          <h1>
            Why <span>Choose Us?</span>
          </h1>
          <p>
            We don’t just build digital products — we engineer growth,
            performance, and long-term success.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <FaUserAstronaut className="why-icon" />
            <h3>Experienced IT & Digital Experts</h3>
            <p>
              Skilled professionals delivering industry-grade digital solutions.
            </p>
          </div>

          <div className="why-card">
            <FaProjectDiagram className="why-icon" />
            <h3>End-to-End Business Solutions</h3>
            <p>From idea to deployment, everything under one roof.</p>
          </div>

          <div className="why-card">
            <FaHandshake className="why-icon" />
            <h3>Transparent Pricing</h3>
            <p>No hidden costs. Clear, scalable, and fair pricing models.</p>
          </div>

          <div className="why-card">
            <FaRocket className="why-icon" />
            <h3>Fast Delivery & Support</h3>
            <p>Rapid execution with long-term technical support.</p>
          </div>

          <div className="why-card">
            <FaChartLine className="why-icon" />
            <h3>Result-Oriented Approach</h3>
            <p>We focus on performance, conversions, and real growth.</p>
          </div>

          <div className="why-card">
            <FaMicrochip className="why-icon" />
            <h3>Latest Technology Stack</h3>
            <p>We build using modern, scalable, future-ready technologies.</p>
          </div>
        </div>
      </section>

      <ScrollBeam />

      {/* ================= PROJECTS WE DISCUSS ================= */}
      <section className="projects-discuss">
        <div className="pd-cta">
          <h2>Have a project in mind?</h2>
          <p>Let’s discuss it and transform your idea into reality.</p>
          <a href="https://wa.me/918005351770">Start a Discussion</a>
        </div>
      </section>
    </>
  );
}
