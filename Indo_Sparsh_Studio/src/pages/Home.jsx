import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ScrollBeam from "./ScrollBeam";
import {
  FaHandshake,
  FaGlobe,
  FaBriefcase,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaMobileAlt,
  FaBullhorn,
  FaPaintBrush,
  FaPalette,
  FaChartLine,
  FaVideo,
  FaDatabase,
} from "react-icons/fa";
import { MdCampaign } from "react-icons/md";

export default function Home() {
  useEffect(() => {
      document.title = "Indo Sparsh Studio";
    }, []);
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

  const posts = [
    {
      title: "Digital Marketing Tips",
      desc: "Learn proven digital marketing strategies that deliver real results without wasting your budget.",
      date: "28/02/2026",
      time: "1 min read",
      image: "/tech/blog1.jpeg",
      link: "/digital-marketing", // 👈 redirect page
    },
    {
      title: "IT Trends",
      desc: "Essential IT trends every business leader needs to know—AI, security, and cloud strategies.",
      date: "28/02/2026",
      time: "1 min read",
      image: "/tech/blog2.jpeg",
      link: "/it-trends", // 👈 redirect page
    },
    {
      title: "Business Growth Strategies",
      desc: "From pricing to partnerships—actionable growth strategies for Indian businesses ready to scale.",
      date: "28/02/2026",
      time: "1 min read",
      image: "/tech/blog3.jpeg",
      link: "/business-growth", // 👈 redirect page
    },
    {
      title: "Case Studies",
      desc: "From loss to profit—inspiring case studies of Indian businesses that transformed with smart strategies.",
      date: "28/02/2026",
      time: "1 min read",
      image: "/tech/blog4.jpeg",
      link: "/case-studies", // 👈 redirect page
    },
  ];

  // const heroImages = [
  //   "/tech/web-app-development.png",
  //   "/tech/software-development.png",
  //   "/tech/digital-marketing.png",
  // ];

  // const heroImages = ["/tech/cyber-bg.png", "/tech/tech-bg.jpg"];

  const [typedText, setTypedText] = useState("");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // const [activeIndex, setActiveIndex] = useState(0);

  // const [bg1, setBg1] = useState(heroImages[0]);
  // const [bg2, setBg2] = useState(heroImages[1]);
  // const [bg3, setBg3] = useState(heroImages[2]);

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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const random = heroImages[Math.floor(Math.random() * heroImages.length)];

  //     const nextIndex = (activeIndex + 1) % 3;

  //     if (nextIndex === 0) setBg1(random);
  //     if (nextIndex === 1) setBg2(random);
  //     if (nextIndex === 2) setBg3(random);

  //     setActiveIndex(nextIndex);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [activeIndex]);

  // const scrollRef = useRef(null);

  // const scrollLeft = () => {
  //   scrollRef.current.scrollBy({
  //     left: -window.innerWidth,
  //     behavior: "smooth",
  //   });
  // };

  // const scrollRight = () => {
  //   scrollRef.current.scrollBy({
  //     left: window.innerWidth,
  //     behavior: "smooth",
  //   });
  // };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const header = document.querySelector(".cyber-header"); // your header class
    const headerHeight = header ? header.offsetHeight : 0;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="home-hero">
        {/* 🌌 BACKGROUND IMAGE LAYER */}
        {/* <div className="hero-bg-wrapper">
          <div
            className={`hero-bg ${activeIndex === 0 ? "active" : ""}`}
            style={{ backgroundImage: `url(${bg1})` }}
          ></div>

          <div
            className={`hero-bg ${activeIndex === 1 ? "active" : ""}`}
            style={{ backgroundImage: `url(${bg2})` }}
          ></div>

          <div
            className={`hero-bg ${activeIndex === 2 ? "active" : ""}`}
            style={{ backgroundImage: `url(${bg3})` }}
          ></div>
        </div> */}

        {/* LEFT BUTTON */}
        {/* <button className="scroll-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button> */}

        {/* SCROLL AREA */}
        {/* <div className="hero-scroll" ref={scrollRef}>
          <img src={bg1} />
          <img src={bg2} />
          <img src={bg3} />
        </div> */}

        {/* RIGHT BUTTON */}
        {/* <button className="scroll-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button> */}

        {/* 🎥 VIDEO BACKGROUND */}
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="home-container">
          {/* <h1>
            Empowering <span>Businesses with Digital Solutions</span>
            <br />
            like
          </h1> */}
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

          {/* <div className="home-buttons">
            <button
              className="btn-primary"
              onClick={() => {
                document
                  .getElementById("we-serve-for")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                document
                  .getElementById("recent-project")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Portfolio
            </button>
          </div> */}
          <div className="home-buttons">
            <button
              className="btn-primary"
              onClick={() => scrollToSection("we-serve-for")}
            >
              Get Started
            </button>

            <button
              className="btn-secondary"
              onClick={() => scrollToSection("recent-project")}
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <ScrollBeam />

      {/* ================= PROJECTS WE DISCUSS ================= */}
      {/* <section className="projects-discuss" id="project">
        <div className="pd-hero">
          <h1>
            Projects <span>We Discuss</span>
          </h1>
          <p>
            We collaborate, brainstorm, and design next-generation digital
            products. These are the types of projects we love to explore.
          </p>
        </div>

        <div className="pd-grid">
          <div className="pd-card">
            <h3>🤖 AI-Powered Platforms</h3>
            <p>
              Chatbots, automation tools, recommendation systems, intelligent
              dashboards.
            </p>
          </div>

          <div className="pd-card glow">
            <h3>🌐 Web & App Products</h3>
            <p>
              High-performance websites, SaaS tools, dashboards, and mobile
              apps.
            </p>
          </div>

          <div className="pd-card">
            <h3>🎨 UI/UX Systems</h3>
            <p>
              Design systems, futuristic interfaces, brand experiences, and
              product flows.
            </p>
          </div>

          <div className="pd-card glow">
            <h3>📊 Startup & Business Tools</h3>
            <p>
              CRM systems, admin panels, internal tools, and analytics
              platforms.
            </p>
          </div>

          <div className="pd-card">
            <h3>🛒 E-Commerce & Marketplaces</h3>
            <p>
              Scalable online stores, booking systems, and service platforms.
            </p>
          </div>

          <div className="pd-card glow">
            <h3>🚀 Experimental Concepts</h3>
            <p>MVPs, proof-of-concepts, and next-gen product ideas.</p>
          </div>
        </div>

        <div className="pd-cta">
          <h2>Have a project in mind?</h2>
          <p>Let’s discuss it and transform your idea into reality.</p>
          <a href="https://wa.me/918005351770">Start a Discussion</a>
        </div>
      </section>

      <ScrollBeam /> */}

      {/* ================= WE SERVE FOR ================= */}
      <section className="orbit-section" id="we-serve-for">
        <div className="orbit-hero">
          <h1>
            We <span>Serve</span> For
          </h1>

          <p>
            Three core pillars that power everything we build — aligned,
            connected, and constantly in motion.
          </p>
        </div>

        <div className="jump-container">
          {/* Consultancy */}
          <div className="jump-icon">
            <div className="icon">
              <FaHandshake />
            </div>
            <p>Consultancy</p>
          </div>

          {/* Development */}
          <div className="jump-icon">
            <div className="icon">
              <FaGlobe />
            </div>
            <p>Development</p>
          </div>

          {/* Management */}
          <div className="jump-icon">
            <div className="icon">
              <MdCampaign />
            </div>
            <p>Marketing</p>
          </div>
        </div>
      </section>

      <ScrollBeam />

      {/* ================= OUR SERVICES ================= */}
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
          </div>
        </div>
      </section>

      <ScrollBeam />

      {/* ================= INDUSTRIES WE SERVE ================= */}

      <section className="industries-section">
        <div className="industries-hero">
          <h1>
            Industries <span>We Serve</span>
          </h1>

          <p>
            We design and develop powerful digital products across multiple
            industries, combining technology, creativity, and innovation.
          </p>
        </div>

        <div className="industries-grid">
          <div className="industry-item">
            <div className="industry-img-wrap">
              <img src="/tech/real-estate.jpeg" />
            </div>
            <p>Real Estate</p>
          </div>

          <div className="industry-item">
            <div className="industry-img-wrap">
              <img src="/tech/education.jpeg" />
            </div>
            <p>Education</p>
          </div>

          <div className="industry-item">
            <div className="industry-img-wrap">
              <img src="/tech/ecommerce.jpeg" />
            </div>
            <p>Ecommerce</p>
          </div>

          <div className="industry-item">
            <div className="industry-img-wrap">
              <img src="/tech/automotive.jpeg" />
            </div>
            <p>Automotive</p>
          </div>

          <div className="industry-item">
            <div className="industry-img-wrap">
              <img src="/tech/finance.jpeg" />
            </div>
            <p>Banking & Finance</p>
          </div>

          <div className="industry-item">
            <div className="industry-img-wrap">
              <img src="/tech/healthcare.jpeg" />
            </div>
            <p>Healthcare</p>
          </div>

          <div className="industry-item">
            <div className="industry-img-wrap">
              <img src="/tech/tourism.jpeg" />
            </div>
            <p>Hospitality & Tourism</p>
          </div>

          <div className="industry-item">
            <div className="industry-img-wrap">
              <img src="/tech/media.jpeg" />
            </div>
            <p>Entertainment</p>
          </div>

          <div className="industry-item">
            <div className="industry-img-wrap">
              <img src="/tech/organization.jpeg" />
            </div>
            <p>Non-Profit Organization</p>
          </div>

          <div className="industry-item">
            <div className="industry-img-wrap">
              <img src="/tech/sports.jpeg" />
            </div>
            <p>Sports & Fitness</p>
          </div>

          <div className="industry-item">
            <div className="industry-img-wrap">
              <img src="/tech/solar.jpeg" />
            </div>
            <p>Solar Energy</p>
          </div>

          <div className="industry-item">
            <div className="industry-img-wrap">
              <img src="/tech/technology.jpeg" />
            </div>
            <p>Technology & Software</p>
          </div>
        </div>
      </section>

      <ScrollBeam />

      {/* ================= OUR RECENT PROJECTS MARQUEE ================= */}

      <section className="recent-projects-section" id="recent-project">
        <div className="recent-hero">
          <h1>
            Our <span>Recent Projects</span>
          </h1>
          <p>Latest work moving forward with innovation and performance.</p>
        </div>

        <div className="projects-marquee">
          <div className="projects-track">
            {[
              {
                title: "Hola 9",
                date: "Feb 2025",
                tag: "Website",
                image: "/tech/project1.jpeg",
                link: "https://hola9.com",
              },
              {
                title: "Procareers",
                date: "Feb 2025",
                tag: "Website",
                image: "/tech/project2.jpeg",
                link: "https://procareers.in/",
              },
              {
                title: "Laser Eye Institute",
                date: "Jul 2023",
                tag: "Website",
                image: "/tech/project3.jpeg",
                link: "https://www.lasereyeinstitute.com/",
              },
              {
                title: "I Smart Business Solutions",
                date: "Jan 2024",
                tag: "Website",
                image: "/tech/project4.jpeg",
                link: "https://ibspl.com/",
              },
            ]
              .concat([
                {
                  title: "Hola 9",
                  date: "Feb 2025",
                  tag: "Website",
                  image: "/tech/project1.jpeg",
                  link: "https://hola9.com",
                },
                {
                  title: "Procareers",
                  date: "Feb 2025",
                  tag: "Website",
                  image: "/tech/project2.jpeg",
                  link: "https://procareers.in/",
                },
                {
                  title: "Laser Eye Institute",
                  date: "Jul 2023",
                  tag: "Website",
                  image: "/tech/project3.jpeg",
                  link: "https://www.lasereyeinstitute.com/",
                },
                {
                  title: "I Smart Business Solutions",
                  date: "Jan 2024",
                  tag: "Website",
                  image: "/tech/project4.jpeg",
                  link: "https://ibspl.com/",
                },
              ])
              .map((p, i) => (
                <div className="project-card" key={i}>
                  <div
                    className="project-img"
                    style={{ backgroundImage: `url(${p.image})` }}
                  ></div>
                  <h3>{p.title}</h3>
                  <span className="project-date">{p.date}</span>
                  <button onClick={() => window.open(p.link, "_blank")}>
                    {p.tag}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>

      <ScrollBeam />

      {/* ================= OUR RECENT BLOGS ================= */}
      <section className="blog-section">
        {/* Header */}
        <div className="blog-header">
          <h1>
            Our <span>Recent Blog</span>
          </h1>
          <p>Insights, ideas, and innovations from Indo Sparsh Studio.</p>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {posts.map((post, i) => (
            <article className="blog-card" key={i}>
              <div
                className="blog-image"
                style={{ backgroundImage: `url(${post.image})` }}
              ></div>

              <div className="blog-content">
                <h2>{post.title}</h2>
                <p className="blog-desc">{post.desc}</p>

                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.time}</span>

                  {/* clickable button */}
                  <Link to={post.link} className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
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

      <ScrollBeam />

      {/* ================= PORTFOLIO SHOWCASE ================= */}
      {/* <section className="portfolio-section" id="portfolio">
        <div className="portfolio-hero">
          <h1>
            Our <span>Portfolio</span>
          </h1>
          <p>
            A curated selection of digital products we’ve crafted — blending
            technology, design, and performance.
          </p>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-card">
            <div className="portfolio-media">
              <span className="scan-line"></span>
            </div>
            <h3>AI SaaS Dashboard</h3>
            <p>Analytics, automation, and real-time insights.</p>
            <span className="tag">AI / SaaS</span>
          </div>

          <div className="portfolio-card glow">
            <div className="portfolio-media">
              <span className="scan-line"></span>
            </div>
            <h3>E-Commerce Platform</h3>
            <p>High-conversion storefront with secure payments.</p>
            <span className="tag">E-Commerce</span>
          </div>

          <div className="portfolio-card">
            <div className="portfolio-media">
              <span className="scan-line"></span>
            </div>
            <h3>Mobile App UI/UX</h3>
            <p>Human-centered design with futuristic visuals.</p>
            <span className="tag">UI / UX</span>
          </div>

          <div className="portfolio-card glow">
            <div className="portfolio-media">
              <span className="scan-line"></span>
            </div>
            <h3>Business Automation Tool</h3>
            <p>Internal dashboards, workflows, and reporting.</p>
            <span className="tag">Automation</span>
          </div>

          <div className="portfolio-card">
            <div className="portfolio-media">
              <span className="scan-line"></span>
            </div>
            <h3>Brand Website</h3>
            <p>Fast, immersive, and conversion-driven web presence.</p>
            <span className="tag">Branding</span>
          </div>

          <div className="portfolio-card glow">
            <div className="portfolio-media">
              <span className="scan-line"></span>
            </div>
            <h3>Experimental MVP</h3>
            <p>Rapid prototyping for next-gen product ideas.</p>
            <span className="tag">MVP</span>
          </div>
        </div>

        <div className="portfolio-cta">
          <h2>Want to see more?</h2>
          <p>Let’s build something remarkable together.</p>
          <a href="/contact">View Full Portfolio</a>
        </div>
      </section>

      <ScrollBeam /> */}

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials-section">
        <div className="testimonials-hero">
          <h1>
            What Our <span>Clients Say</span>
          </h1>
          <p>
            Trusted by startups, founders, and enterprises worldwide — here’s
            what they say about working with us.
          </p>
        </div>

        <div className="testimonials-marquee">
          <div className="testimonials-track">
            {[
              {
                name: "Rohit Sharma",
                role: "Startup Founder",
                text: "They didn't just design-they gave us a whole new look. Logo to packaging, everything feels premium and polished. Our brand finally stands out. Perfect mix of art and strategy.",
                img: "/tech/rohit-sharma.jpg",
              },
              {
                name: "Ananya Verma",
                role: "Product Manager",
                text: "Finding genuine leads was our biggest headache - until Indo Sparsh stepped in. They now supply bulk data to our telecaller team regularly. Fresh numbers, minimal junk, and good conversion. Our callers are actually hitting targets now.",
                img: "/tech/ananya-verma.jpg",
              },
              {
                name: "Priya Singh",
                role: "Marketing Lead",
                text: "Our old logistics software was too rigid. They created a custom solution with basic automation that fits our workflow perfectly. Not just a quick fix-it's a perfect fit! Saved us time, money and daily headaches.",
                img: "/tech/priya-singh.jpg",
              },
              {
                name: "Alex Morgan",
                role: "Tech Entrepreneur",
                text: "Honestly, Three months back, our leads were almost dead. Today, we can't keep up! Their marketing team knows their stuff-practical, result-driven and honest with limited budgets. They deliver what they promise.",
                img: "/tech/alex-morgan.jpg",
              },
              {
                name: "Neha Kapoor",
                role: "Business Owner",
                text: "I recently needed a website and came across Indo Sparsh. They built a really solid website-responsive, fast and exactly matched our vision. The team patiently handled every small change we asked for. I highly recommend their services!",
                img: "/tech/neha-kapoor.jpg",
              },
              {
                name: "Saurabh Jain",
                role: "Startup Mentor",
                text: "Three months back, zero leads. Now? Regular inquiries coming in. Their marketing team is down-to-earth, result-focused and budget-conscious. No empty promises just like others - just results.  Highly recommended for startups looking for real ROI.",
                img: "/tech/saurabh-jain.jpg",
              },
              {
                name: "Emily Watson",
                role: "Design Head",
                text: "I needed a website for my India operations and was nervous about working remotely. It's made it seamless. They understood my requirements perfectly, communicated clearly across time zones and delivered a clean, fast and professional site ahead of schedule. No miscommunication, no delays-just solid work. Highly recommended for anyone looking for reliable development partners with lower budget in India.",
                img: "/tech/emily-watson.jpg",
              },
              {
                name: "Amit Patel",
                role: "Founder",
                text: "I came across their post in early 2024 and reached out about my struggling business. They didn’t just give reports-they gave a clear, actionable roadmap. Their strategies turned our loss into profit in 12 months. A true business dost in the digital world.",
                img: "/tech/amit-patel.jpg",
              },
            ]
              /* 🔁 duplicate array for infinite marquee */
              .concat([
                {
                  name: "Rohit Sharma",
                  role: "Startup Founder",
                  text: "They didn't just design-they gave us a whole new look. Logo to packaging, everything feels premium and polished. Our brand finally stands out. Perfect mix of art and strategy.",
                  img: "/tech/rohit-sharma.jpg",
                },
                {
                  name: "Ananya Verma",
                  role: "Product Manager",
                  text: "Finding genuine leads was our biggest headache - until Indo Sparsh stepped in. They now supply bulk data to our telecaller team regularly. Fresh numbers, minimal junk and good conversion. Our callers are actually hitting targets now.",
                  img: "/tech/ananya-verma.jpg",
                },
                {
                  name: "Priya Singh",
                  role: "Marketing Lead",
                  text: "Our old logistics software was too rigid. They created a custom solution with basic automation that fits our workflow perfectly. Not just a quick fix-it's a perfect fit! Saved us time, money and daily headaches.",
                  img: "/tech/priya-singh.jpg",
                },
                {
                  name: "Alex Morgan",
                  role: "Tech Entrepreneur",
                  text: "Honestly, Three months back, our leads were almost dead. Today, we can't keep up! Their marketing team knows their stuff-practical, result-driven and honest with limited budgets. They deliver what they promise.",
                  img: "/tech/alex-morgan.jpg",
                },
                {
                  name: "Neha Kapoor",
                  role: "Business Owner",
                  text: "I recently needed a website and came across Indo Sparsh. They built a really solid website-responsive, fast and exactly matched our vision. The team patiently handled every small change we asked for. I highly recommend their services!",
                  img: "/tech/neha-kapoor.jpg",
                },
                {
                  name: "Saurabh Jain",
                  role: "Startup Mentor",
                  text: "Three months back, zero leads. Now? Regular inquiries coming in. Their marketing team is down-to-earth, result-focused, and budget-conscious. No empty promises just like others - just results.  Highly recommended for startups looking for real ROI.",
                  img: "/tech/saurabh-jain.jpg",
                },
                {
                  name: "Emily Watson",
                  role: "Design Head",
                  text: "I needed a website for my India operations and was nervous about working remotely. It's made it seamless. They understood my requirements perfectly, communicated clearly across time zones and delivered a clean, fast and professional site ahead of schedule. No miscommunication, no delays-just solid work. Highly recommended for anyone looking for reliable development partners with lower budget in India.",
                  img: "/tech/emily-watson.jpg",
                },
                {
                  name: "Amit Patel",
                  role: "Founder",
                  text: "I came across their post in early 2024 and reached out about my struggling business. They didn’t just give reports-they gave a clear, actionable roadmap. Their strategies turned our loss into profit in 12 months. A true business dost in the digital world.",
                  img: "/tech/amit-patel.jpg",
                },
              ])
              .map((t, i) => (
                <div
                  className={`testimonial-card ${i % 2 === 0 ? "glow" : ""}`}
                  key={i}
                >
                  <div className="testimonial-glow"></div>

                  {/* avatar */}
                  <div className="testimonial-avatar">
                    <img src={t.img} alt={t.name} />
                  </div>

                  {/* stars */}
                  <div className="testimonial-stars">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="half">★</span>
                  </div>

                  <p className="testimonial-text">{t.text}</p>
                  <h3>{t.name}</h3>
                  <span>{t.role}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      <ScrollBeam />

      {/* ================= OUR CLIENTS ================= */}
      {/* <section className="clients-section">
        <div className="clients-hero">
          <h1>
            Our <span>Clients</span>
          </h1>
          <p>
            We collaborate with startups, brands, and businesses to build
            powerful digital experiences.
          </p>
        </div> */}

      {/* ===== CLIENT CARDS GRID ===== */}
      {/* <div className="clients-grid">
          <div className="client-card">
            <div className="client-logo">LOGO</div>
            <h3>Tech Startup</h3>
            <span>AI Platform</span>
          </div>

          <div className="client-card glow">
            <div className="client-logo">LOGO</div>
            <h3>E-Commerce Brand</h3>
            <span>Web & App</span>
          </div>

          <div className="client-card">
            <div className="client-logo">LOGO</div>
            <h3>EdTech Company</h3>
            <span>Learning Platform</span>
          </div>

          <div className="client-card glow">
            <div className="client-logo">LOGO</div>
            <h3>Business Firm</h3>
            <span>CRM System</span>
          </div>

          <div className="client-card">
            <div className="client-logo">LOGO</div>
            <h3>Healthcare Brand</h3>
            <span>Management App</span>
          </div>

          <div className="client-card glow">
            <div className="client-logo">LOGO</div>
            <h3>Creative Studio</h3>
            <span>UI/UX System</span>
          </div>
        </div>
      </section>

      <ScrollBeam /> */}

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
    </>
  );
}
