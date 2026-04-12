"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=919952431546&text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20the%20fitness%20programmes%20at%20Proponitis%20Fitness%2C%20Coimbatore.";

const programmes = [
  {
    icon: "ri-scales-line",
    title: "Weight Loss Training",
    description:
      "A personalised weight loss programme designed around your body type, fitness level, and goals. Combines strength, cardio, and lifestyle guidance for sustainable fat loss.",
    durations: ["Monthly", "Quarterly", "Half-Yearly"],
    tag: "Most Popular",
  },
  {
    icon: "ri-football-line",
    title: "Sports Specific Training",
    description:
      "Targeted conditioning for athletes and sports persons. Improves sport-specific strength, agility, speed, and endurance. Designed for cricket, football, athletics, and other disciplines.",
    durations: ["Monthly", "3 Months", "6 Months"],
    tag: "For Athletes",
  },
  {
    icon: "ri-body-scan-line",
    title: "Full Body Stretching",
    description:
      "Session-based flexibility and mobility programme. Reduces injury risk, improves posture, and accelerates recovery. Available as 10-session or 20-session packs.",
    durations: ["10 Sessions", "20 Sessions"],
    tag: "Session Based",
  },
  {
    icon: "ri-user-star-line",
    title: "Basic Personal Training",
    description:
      "Structured 1-on-1 coaching sessions with a customised programme tailored to your specific goals. Regular check-ins and plan adjustments included.",
    durations: ["Monthly", "3 Months", "6 Months", "Annual"],
    tag: "1-on-1",
  },
  {
    icon: "ri-vip-crown-line",
    title: "Premium Personal Training",
    description:
      "Advanced personalised coaching with detailed programming, nutrition guidance, and continuous monitoring. For those who want maximum results with full trainer support.",
    durations: ["Monthly", "3 Months", "6 Months", "Annual"],
    tag: "Advanced",
  },
];

const FitnessCentreContent = () => {
  return (
    <>
      {/* Programmes */}
      <section className="seo__section">
        <div className="section__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section__header">Our Training Programmes</h2>
            <p className="section__description" style={{ marginBottom: "3rem" }}>
              As the best fitness centre in Coimbatore, we offer specialised
              programmes for every goal. Enquire via WhatsApp to know which
              programme is right for you — and to get current fee details.
            </p>

            <div className="seo__programmes-list">
              {programmes.map((prog, i) => (
                <motion.div
                  key={i}
                  className="seo__programme-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="seo__programme-header">
                    <div className="seo__programme-icon">
                      <i className={prog.icon}></i>
                    </div>
                    <div>
                      <span className="seo__programme-tag">{prog.tag}</span>
                      <h3>{prog.title}</h3>
                    </div>
                  </div>
                  <p>{prog.description}</p>
                  <div className="seo__programme-durations">
                    <span className="seo__duration-label">
                      <i className="ri-calendar-line"></i> Duration options:
                    </span>
                    {prog.durations.map((d, j) => (
                      <span key={j} className="seo__duration-badge">{d}</span>
                    ))}
                  </div>
                  <p className="seo__programme-enquire">
                    <i className="ri-information-line"></i> Enquire via WhatsApp for current fee details.
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Mid-page */}
      <section className="seo__section seo__section--alt">
        <div className="section__container" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section__header">Not Sure Which Programme?</h2>
            <p className="section__description" style={{ marginBottom: "2rem" }}>
              WhatsApp Mr. Selva Kumar directly. Describe your goal and he will
              recommend the right programme for your body, schedule, and
              budget.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn seo__wa-btn"
              id="fitnesscenter-midpage-whatsapp-btn"
            >
              <i className="ri-whatsapp-line"></i> Enquire About Our Programmes
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why choose */}
      <section className="seo__section">
        <div className="section__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section__header">Why Proponitis Is the Best Fitness Centre in Coimbatore</h2>
            <div className="seo__benefits-list">
              {[
                "Certified trainer with M.P.Ed qualification from Pondicherry University",
                "14 years of experience — 500+ clients successfully trained",
                "Every programme is personalised — no one-size-fits-all training",
                "Special programmes for weight loss, sports, and corrective exercise",
                "Exclusive morning batch for women: 9 AM – 1 PM",
                "Clean, well-maintained facility in the heart of RS Puram, Coimbatore",
                "Flexible duration options — monthly, quarterly, and longer plans",
              ].map((b, i) => (
                <motion.div
                  key={i}
                  className="seo__benefit-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <i className="ri-checkbox-circle-fill"></i>
                  <span>{b}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Women's callout */}
      <section className="seo__women-callout-section" style={{ paddingBottom: "4rem" }}>
        <div className="section__container">
          <motion.div
            className="seo__women-callout-box seo__women-callout-grid"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="seo__women-image-wrapper">
              <Image
                src="/assets/seo-women.png"
                alt="Women's fitness training at Proponitis Fitness Coimbatore"
                width={500}
                height={350}
                className="seo__women-img"
                loading="lazy"
              />
            </div>
            <div className="seo__women-content">
              <i className="ri-women-line seo__women-icon" style={{ fontSize: "2.5rem", color: "#f92524", marginBottom: "1rem" }}></i>
              <h2>Special Morning Slot for Women</h2>
              <p>
                At Proponitis, we recognize that some women prefer a more focused and private environment. We offer an exclusive
                morning batch from <strong>9 AM to 1 PM</strong> designed
                specifically for women, led by professional coaches.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn seo__wa-btn"
                id="fitnesscenter-women-whatsapp-btn"
                style={{ marginTop: "1rem" }}
              >
                <i className="ri-whatsapp-line"></i> Enquire About Women&apos;s Training
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FitnessCentreContent;
