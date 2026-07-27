import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaMoon,
  FaSun,
  FaArrowRight,
} from "react-icons/fa";

import {
  heroData,
  socialTags,
  stats,
  whySocialMedia,
  features,
  pricingPlans,
  addons,
  process,
  whyChooseUs,
  faqs,
  contactData,
  footerTags
} from "../data/SocialData";

import "./SocialMediaPage.css";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function SocialMediaManagement() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`smm-page ${darkMode ? "dark" : ""}`}>

      {/* Theme Button */}

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* HERO */}

      <section className="hero">

        <motion.div
          className="hero-left"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >

          <span className="hero-badge">
            {heroData.badge}
          </span>

          <h1>
            {heroData.title}
          </h1>

          <h3>
            {heroData.subtitle}
          </h3>

          <p>
            {heroData.description}
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              {heroData.primaryBtn}
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              {heroData.secondaryBtn}
            </button>

          </div>

          <motion.div
            className="hero-tags"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >

            {socialTags.map((tag) => (
              <motion.span
                key={tag}
                className="tag"
                variants={fadeUp}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
              >
                {tag}
              </motion.span>
            ))}

          </motion.div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >

          <div className="hero-card">

            <motion.div
              className="floating insta"
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <FaInstagram />
            </motion.div>

            <motion.div
              className="floating fb"
              animate={{
                y: [10, -10, 10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              <FaFacebook />
            </motion.div>

            <motion.div
              className="floating linkedin"
              animate={{
                y: [-15, 15, -15],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            >
              <FaLinkedin />
            </motion.div>

            <motion.div
              className="floating youtube"
              animate={{
                y: [15, -15, 15],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
              }}
            >
              <FaYoutube />
            </motion.div>

            <motion.div
              className="center-circle"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <h2>Grow</h2>
              <p>Your Brand</p>
            </motion.div>

          </div>

        </motion.div>

      </section>

      {/* STATS */}

      <section className="stats">

        <motion.div
          className="stats-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {stats.map((item) => (

            <motion.div
              key={item.title}
              className="stat-card"
              variants={fadeUp}
              whileHover={{
                y: -8,
              }}
            >
              <h2>{item.number}</h2>

              <p>{item.title}</p>

            </motion.div>

          ))}

        </motion.div>

      </section>

      {/* WHY SOCIAL MEDIA */}

      <section className="why-social">

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <h2>
            {whySocialMedia.title}
          </h2>

          <p>
            {whySocialMedia.description}
          </p>

        </motion.div>

      </section>
            {/* ================= FEATURES ================= */}

      <section className="features">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">
            WHAT WE DO
          </span>

          <h2>
            Everything You Need To Build
            A Powerful Social Presence
          </h2>

          <p>
            From strategy and content creation to audience engagement
            and monthly reporting—we handle everything so you can
            focus on growing your business.
          </p>

        </motion.div>

        <motion.div
          className="feature-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {features.map((feature, index) => (

            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="feature-card"
            >

              <div className="feature-icon">

                {feature.icon === "strategy" && "📈"}
                {feature.icon === "design" && "🎨"}
                {feature.icon === "video" && "🎬"}
                {feature.icon === "community" && "💬"}
                {feature.icon === "report" && "📊"}
                {feature.icon === "growth" && "🚀"}

              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </section>

      {/* ================= PRICING ================= */}

      <section className="pricing">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span className="section-badge">
            PRICING
          </span>

          <h2>
            Choose The Perfect Plan
          </h2>

          <p>
            Transparent pricing with no hidden charges.
          </p>

        </motion.div>

        <div className="pricing-grid">

          {pricingPlans.map((plan) => (

            <motion.div

              key={plan.id}

              className={`price-card ${plan.badge ? "active" : ""}`}

              initial={{
                opacity: 0,
                y: 80,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              whileHover={{
                y: -12,
              }}

              transition={{
                duration: .6,
              }}

              viewport={{
                once: true,
              }}

            >

              {plan.badge && (

                <div className="popular-badge">
                  {plan.badge}
                </div>

              )}

              <h3>
                {plan.name}
              </h3>

              <div className="price">

                <span className="currency">
                  {plan.price}
                </span>

                <small>
                  {plan.duration}
                </small>

              </div>

              <p className="plan-description">
                {plan.description}
              </p>

              <ul className="feature-list">

                {plan.features.map((item, index) => (

                  <li key={index}>

                    <span className="check">
                      ✓
                    </span>

                    {item}

                  </li>

                ))}

              </ul>

              <button className="plan-btn">

                {plan.button}

              </button>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ================= ADDONS ================= */}

      <section className="addons">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <span className="section-badge">
            OPTIONAL ADD-ONS
          </span>

          <h2>
            Scale Your Marketing
          </h2>

        </motion.div>

        <div className="addon-table">

          <div className="addon-head">

            <span>
              Service
            </span>

            <span>
              Price
            </span>

          </div>

          {addons.map((item, index) => (

            <motion.div

              key={index}

              className="addon-row"

              initial={{
                opacity: 0,
                x: -40,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                delay: index * .15,
              }}

              viewport={{
                once: true,
              }}

            >

              <span>
                {item.service}
              </span>

              <strong>
                {item.price}
              </strong>

            </motion.div>

          ))}

        </div>

        <motion.div
          className="pricing-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
        >

          <p>
            <strong>Recommended:</strong> Minimum engagement of
            <strong> 3 months </strong>
            for consistent posting, audience growth and measurable
            business results.
          </p>

        </motion.div>

      </section>
            {/* ================= PROCESS ================= */}

      <section className="process">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">
            OUR PROCESS
          </span>

          <h2>
            How We Grow Your Brand
          </h2>

          <p>
            A simple, transparent process that ensures your social
            media consistently delivers results.
          </p>

        </motion.div>

        <div className="timeline">

          {process.map((item, index) => (

            <motion.div

              key={index}

              className="timeline-card"

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * .15,
              }}

              viewport={{
                once: true,
              }}

            >

              <div className="timeline-number">
                {item.step}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="why-us">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <span className="section-badge">
            WHY US
          </span>

          <h2>
            Why Businesses Choose
            Indo Sparsh Studio
          </h2>

        </motion.div>

        <div className="why-grid">

          {whyChooseUs.map((item, index) => (

            <motion.div

              key={index}

              className="why-card"

              initial={{
                opacity: 0,
                scale: .9,
              }}

              whileInView={{
                opacity: 1,
                scale: 1,
              }}

              whileHover={{
                y: -10,
              }}

              transition={{
                delay: index * .1,
              }}

              viewport={{
                once: true,
              }}

            >

              <div className="why-icon">
                ⭐
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="faq">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <span className="section-badge">
            FAQ
          </span>

          <h2>
            Frequently Asked Questions
          </h2>

        </motion.div>

        <div className="faq-wrapper">

          {faqs.map((faq, index) => (

            <motion.details

              key={index}

              className="faq-item"

              initial={{
                opacity: 0,
                x: -40,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                delay: index * .15,
              }}

              viewport={{
                once: true,
              }}

            >

              <summary>
                {faq.question}
              </summary>

              <p>
                {faq.answer}
              </p>

            </motion.details>

          ))}

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="cta-sm">

        <motion.div

          className="cta-sm-box"

          initial={{
            opacity: 0,
            scale: .9,
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
          }}

          viewport={{
            once: true,
          }}

        >

          <h2>
            Ready To Grow Your Business?
          </h2>

          <p>
            Let Indo Sparsh Studio handle your complete
            social media management while you focus
            on running your business.
          </p>

          <button className="primary-btn">

            Start Your Project

          </button>

        </motion.div>

      </section>

    
      {/* ================= FOOTER ================= */}

      <footer className="footer-sm">

        <div className="footer-sm-tags">

          {footerTags.map((tag, index) => (

            <span
              key={index}
              className="tag"
            >
              {tag}
            </span>

          ))}

        </div>

      
      </footer>

    </div>
  );
}