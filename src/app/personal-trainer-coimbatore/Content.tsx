"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=919952431546&text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20personal%20training%20at%20Proponitis%20Fitness%2C%20Coimbatore.";

const GADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GADS_CONVERSION;

const PersonalTrainerContent = () => {
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Report conversion to Google Ads
    if (typeof window !== "undefined" && (window as any).gtag && GADS_CONVERSION_ID) {
      (window as any).gtag("event", "conversion", {
        send_to: GADS_CONVERSION_ID,
      });
    }
  };
  return (
    <>
      {/* Training Types */}
      <section className="seo__section">
        <div className="section__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section__header">Personal Training Options</h2>
            <p className="section__description" style={{ marginBottom: "2rem" }}>
              Every personal training programme at Proponitis Fitness is
              customised to your body, fitness level, and goals. WhatsApp us to
              discuss which plan suits you best.
            </p>
            <div className="seo__membership-list">
              {[
                {
                  title: "Basic Personal Training",
                  desc: "Structured 1-on-1 coaching with progressive workout plans. Ideal for beginners and those looking for consistent guidance. Monthly, 3-month, 6-month, and annual plans available.",
                  icon: "ri-user-line",
                },
                {
                  title: "Premium Personal Training",
                  desc: "Advanced 1-on-1 sessions with detailed programming, diet guidance, and recovery monitoring. Best for those with specific performance or transformation goals. Monthly, 3-month, 6-month, and annual plans available.",
                  icon: "ri-vip-crown-line",
                },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  className="seo__membership-card seo__membership-card--large"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="seo__membership-icon">
                    <i className={m.icon}></i>
                  </div>
                  <div>
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialties */}
      <section className="seo__section seo__section--alt">
        <div className="section__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section__header">Training Specialties</h2>
            <p className="section__description" style={{ marginBottom: "2rem" }}>
              As the best personal trainer in Coimbatore, Mr. Selva Kumar
              specialises in a wide range of training disciplines:
            </p>
            <div className="seo__card-grid">
              {[
                { icon: "ri-scales-line", label: "Weight Loss Coaching", desc: "Science-backed fat loss programmes with progressive overload and lifestyle adjustments." },
                { icon: "ri-run-line", label: "Functional Fitness", desc: "Train movements, not just muscles. Improve everyday performance and athletic ability." },
                { icon: "ri-body-scan-line", label: "Corrective Exercise", desc: "Identify and fix muscular imbalances, postural issues, and movement dysfunctions." },
                { icon: "ri-football-line", label: "Sports-Specific Training", desc: "Customised conditioning for cricket, football, athletics, and other sports." },
                { icon: "ri-heart-pulse-line", label: "Pain Management", desc: "Targeted exercise therapy for back pain, knee issues, and joint discomfort." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="seo__card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <i className={item.icon}></i>
                  <h3>{item.label}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trainer Profile */}
      <section className="seo__section">
        <div className="section__container">
          <motion.div
            className="seo__founder-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section__header">About Mr. Selva Kumar</h2>
            <p style={{ color: "var(--text-light)", lineHeight: 1.8, maxWidth: 800 }}>
              Mr. Selva Kumar holds a{" "}
              <strong>Master&apos;s in Physical Education (M.P.Ed) from Pondicherry University</strong>{" "}
              and has <strong>14 years of professional coaching experience</strong>. He has
              trained <strong>500+ clients</strong> across diverse goals — from corporate
              professionals managing lifestyle diseases to competitive athletes
              optimising performance. His expertise in{" "}
              <strong>pain management and corrective exercise</strong> sets him apart as one
              of the most qualified personal trainers in Coimbatore.
            </p>
            <div className="seo__founder-stats">
              {[
                { value: "14+", label: "Years Experience" },
                { value: "500+", label: "Clients Trained" },
                { value: "M.P.Ed", label: "Pondicherry University" },
              ].map((s, i) => (
                <div key={i} className="seo__stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
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
                We offer an exclusive morning batch from <strong>9 AM to 1 PM</strong> designed
                specifically for women. Train in a comfortable, safe, and
                supportive environment under professional supervision of our
                certified coaches.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn seo__wa-btn"
                id="personaltrainer-women-whatsapp-btn"
                style={{ marginTop: "1rem" }}
                onClick={handleWhatsAppClick}
              >
                <i className="ri-whatsapp-line"></i> Enquire About Women&apos;s Training
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who benefits */}
      <section className="seo__section seo__section--alt">
        <div className="section__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section__header">Who Benefits from Personal Training?</h2>
            <div className="seo__benefits-list">
              {[
                "Office workers with sedentary lifestyles who want to lose weight and get active",
                "People with specific weight loss or body composition goals",
                "Sports persons wanting to improve performance and strength",
                "Individuals recovering from injury or managing chronic pain",
                "Beginners who want to learn the right techniques from day one",
              ].map((b, i) => (
                <motion.div
                  key={i}
                  className="seo__benefit-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <i className="ri-checkbox-circle-fill"></i>
                  <span>{b}</span>
                </motion.div>
              ))}
            </div>
            <div style={{ marginTop: "2rem" }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn seo__wa-btn"
                id="personaltrainer-benefits-whatsapp-btn"
                onClick={handleWhatsAppClick}
              >
                <i className="ri-whatsapp-line"></i> Talk to Our Personal Trainer — WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PersonalTrainerContent;
