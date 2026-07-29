import { useEffect, useState } from "react";
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
  footerTags,
} from "../data/SocialData";

import "./SocialMediaPage.css";
import ScrollBeam from "../../../ScrollBeam";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function SocialMediaManagement() {
  useEffect(() => {
    document.title = "Social Media Management | Indo Sparsh Studio";
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={`smm-page-sm`}>
      {/* Theme Toggle */}

      {/* HERO */}
      <section className="hero-sm">
        <motion.div
          className="hero-left-sm"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <span className="hero-badge-sm">{heroData.badge}</span>
          <h1>{heroData.title}</h1>
          <h3>{heroData.subtitle}</h3>
          <p>{heroData.description}</p>

          <div className="hero-buttons-sm">
            <button className="primary-btn-sm">
              {heroData.primaryBtn}
              <FaArrowRight />
            </button>
            <button
              onClick={() => scrollTo("pricing-sm")}
              className="secondary-btn-sm"
            >
              {heroData.secondaryBtn}
            </button>
          </div>

          <motion.div
            className="hero-tags-sm"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {socialTags.map((tag) => (
              <motion.span
                key={tag}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                whileHover={{
                  scale: 1.08,
                  y: -10,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="tag-sm"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-right-sm"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-card-sm">
            <motion.div
              className="floating-sm insta-sm"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <FaInstagram />
            </motion.div>

            <motion.div
              className="floating-sm fb-sm"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <FaFacebook />
            </motion.div>

            <motion.div
              className="floating-sm linkedin-sm"
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <FaLinkedin />
            </motion.div>

            <motion.div
              className="floating-sm youtube-sm"
              animate={{ y: [15, -15, 15] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <FaYoutube />
            </motion.div>

            <motion.div
              className="center-circle-sm"
              animate={{ scale: [1, 1.08, 1], y: [0, -20, 0], x: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h2>Grow</h2>
              <p>Your Brand</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <ScrollBeam />
      {/* STATS */}
      <section className="stats-sm">
        <motion.div
          className="stats-grid-sm"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((item) => (
            <motion.div
              key={item.title}
              className="stat-card-sm"
              variants={fadeUp}
              whileHover={{ y: -8 }}
            >
              <h2>{item.number}</h2>
              <p>{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <ScrollBeam />

      {/* WHY SOCIAL MEDIA */}
      <section className="why-social-sm">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>{whySocialMedia.title}</h2>
          <p>{whySocialMedia.description}</p>
        </motion.div>
      </section>
      <ScrollBeam />

      {/* FEATURES */}
      <section className="features-sm">
        <motion.div
          className="section-heading-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-badge-sm">WHAT WE DO</span>
          <h2>Everything You Need To Build A Powerful Social Presence</h2>
          <p>
            From strategy and content creation to audience engagement and
            monthly reporting—we handle everything so you can focus on growing
            your business.
          </p>
        </motion.div>

        <motion.div
          className="feature-grid-sm"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="feature-card-sm"
            >
              <div className="feature-icon-sm">
                {feature.icon === "strategy" && "📈"}
                {feature.icon === "design" && "🎨"}
                {feature.icon === "video" && "🎬"}
                {feature.icon === "community" && "💬"}
                {feature.icon === "report" && "📊"}
                {feature.icon === "growth" && "🚀"}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <ScrollBeam />

      {/* PRICING */}
      <section id="pricing-sm" className="pricing-sm">
        <motion.div
          className="section-heading-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-badge-sm">PRICING</span>
          <h2>Choose The Perfect Plan</h2>
          <p>Transparent pricing with no hidden charges.</p>
        </motion.div>

        <div className="pricing-grid-sm">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`price-card-sm ${plan.badge ? "active-sm" : ""}`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {plan.badge && (
                <div className="popular-badge-sm">{plan.badge}</div>
              )}

              <h3>{plan.name}</h3>

              <div className="price-sm">
                <span className="currency-sm">{plan.price}</span>
                <small>{plan.duration}</small>
              </div>

              <p className="plan-description-sm">{plan.description}</p>

              <ul className="feature-list-sm">
                {plan.features.map((item, index) => (
                  <li key={index}>
                    <span className="check-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="plan-btn-sm">{plan.button}</button>
            </motion.div>
          ))}
        </div>
      </section>
      <ScrollBeam />

      {/* ADDONS */}
      <section className="addons-sm">
        <motion.div
          className="section-heading-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="section-badge-sm">OPTIONAL ADD-ONS</span>
          <h2>Scale Your Marketing</h2>
        </motion.div>

        <div className="addon-table-sm">
          <div className="addon-head-sm">
            <span>Service</span>
            <span>Price</span>
          </div>

          {addons.map((item, index) => (
            <motion.div
              key={index}
              className="addon-row-sm"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <span>{item.service}</span>
              <strong>{item.price}</strong>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pricing-note-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            <strong>Recommended:</strong> Minimum engagement of{" "}
            <strong>3 months</strong> for consistent posting, audience growth
            and measurable business results.
          </p>
        </motion.div>
      </section>
      <ScrollBeam />

      {/* PROCESS */}
      <section className="process-sm">
        <motion.div
          className="section-heading-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-badge-sm">OUR PROCESS</span>
          <h2>How We Grow Your Brand</h2>
          <p>
            A simple, transparent process that ensures your social media
            consistently delivers results.
          </p>
        </motion.div>

        <div className="timeline-sm">
          {process.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-card-sm"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="timeline-number-sm">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <ScrollBeam />

      {/* WHY CHOOSE US */}
      <section className="why-us-sm">
        <motion.div
          className="section-heading-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="section-badge-sm">WHY US</span>
          <h2>Why Businesses Choose Indo Sparsh Studio</h2>
        </motion.div>

        <div className="why-grid-sm">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              className="why-card-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="why-icon-sm">⭐</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <ScrollBeam />

      {/* FAQ */}
      <section className="faq-sm">
        <motion.div
          className="section-heading-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="section-badge-sm">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </motion.div>

        <div className="faq-wrapper-sm">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              className="faq-item-sm"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </section>
      <ScrollBeam />

      {/* CTA */}
      <section className="cta-sm-sm">
        <motion.div
          className="cta-sm-box-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2>Ready To Grow Your Business?</h2>
          <p>
            Let Indo Sparsh Studio handle your complete social media management
            while you focus on running your business.
          </p>
          <button className="primary-btn-sm">Start Your Project</button>
        </motion.div>
      </section>
      <ScrollBeam />

      {/* FOOTER */}
      <footer className="footer-sm-sm">
        <div className="footer-sm-tags-sm">
          {footerTags.map((tag, index) => (
            <span key={index} className="tag-sm">
              {tag}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}
