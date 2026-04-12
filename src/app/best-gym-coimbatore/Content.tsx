"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=919952431546&text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20membership%20at%20Proponitis%20Fitness%20%E2%80%94%20the%20best%20gym%20in%20Coimbatore%2C%20RS%20Puram.";

const BestGymContent = () => {
  return (
    <>
      {/* Who is it for */}
      <section className="seo__section">
        <div className="section__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section__header">Who Is This Gym For?</h2>
            <p className="section__description" style={{ marginBottom: "2rem" }}>
              The best gym in Coimbatore should be accessible to everyone — and
              at Proponitis Fitness, it is. We welcome:
            </p>
            <div className="seo__card-grid">
              {[
                { icon: "ri-user-star-line", label: "Beginners", desc: "No experience needed. We guide you from day one with safe, effective techniques." },
                { icon: "ri-briefcase-line", label: "Working Professionals", desc: "Flexible morning and evening slots around your work schedule." },
                { icon: "ri-women-line", label: "Women", desc: "Exclusive morning batch for women: 9 AM – 1 PM in a comfortable, safe environment." },
                { icon: "ri-graduation-cap-line", label: "Students", desc: "Special student membership available. Enquire for details via WhatsApp." },
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

      {/* Membership Types */}
      <section className="seo__section seo__section--alt">
        <div className="section__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section__header">Membership Options</h2>
            <p className="section__description" style={{ marginBottom: "2rem" }}>
              We offer flexible memberships for every type of member. WhatsApp
              us to get details — no pricing is displayed on the website by
              design.
            </p>
            <div className="seo__membership-list">
              {[
                { title: "General Membership", desc: "Full access to the gym with guided workouts. Monthly, 3-month, and 6-month options available." },
                { title: "Special Women&apos;s Membership", desc: "Exclusive morning batch — 9 AM to 1 PM. Ideal for women who prefer a focused, comfortable environment." },
                { title: "Special Student Membership", desc: "Affordable membership designed for students. Same quality training, flexible plans." },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  className="seo__membership-card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="seo__membership-icon">
                    <i className="ri-checkbox-circle-line"></i>
                  </div>
                  <div>
                    <h3 dangerouslySetInnerHTML={{ __html: m.title }} />
                    <p dangerouslySetInnerHTML={{ __html: m.desc }} />
                  </div>
                </motion.div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn seo__wa-btn"
                id="bestgym-membership-whatsapp-btn"
              >
                <i className="ri-whatsapp-line"></i> WhatsApp Us to Know Membership Details
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Women's callout */}
      <section className="seo__women-callout-section">
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
              <i className="ri-women-line seo__women-icon"></i>
              <h2>Special Morning Slot for Women</h2>
              <p>
                At the best gym in Coimbatore for women, we have an exclusive
                morning batch from <strong>9 AM to 1 PM</strong> designed
                specifically for women. Train in a comfortable, safe, and
                supportive environment under professional supervision.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn seo__wa-btn"
                id="bestgym-women-whatsapp-btn"
                style={{ marginTop: "1rem" }}
              >
                <i className="ri-whatsapp-line"></i> Enquire About Women&apos;s Membership
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="seo__section">
        <div className="section__container">
          <motion.div
            className="seo__founder-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section__header">Meet Your Trainer</h2>
            <p style={{ color: "var(--text-light)", lineHeight: 1.8, maxWidth: 800 }}>
              Mr. <strong>Selva Kumar</strong>, founder of Proponitis Fitness,
              holds a <strong>Master&apos;s Degree in Physical Education (M.P.Ed)</strong>{" "}
              and brings <strong>14 years of hands-on coaching experience</strong> to every
              session. With <strong>500+ clients trained</strong> across weight loss, functional
              fitness, sports training, and corrective exercises, he ensures every member
              receives personalised attention — not just access to equipment.
            </p>
            <div className="seo__founder-stats">
              {[
                { value: "14+", label: "Years Experience" },
                { value: "500+", label: "Clients Trained" },
                { value: "M.P.Ed", label: "Qualified Trainer" },
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
    </>
  );
};

export default BestGymContent;
