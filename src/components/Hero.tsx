"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=919952431546&text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20membership%20at%20Proponitis%20Fitness%2C%20Coimbatore.";

const Hero = () => {
  return (
    <header className="header" id="home">
      <div className="section__container header__container">
        <motion.div
          className="header__content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero__title-wrapper">
            <span className="hero__subtitle">Build Your Body &amp;</span>
            <h1 className="hero__title">
              Best Fitness Centre <br />
              <span>in Coimbatore</span>
            </h1>
          </div>

          <div className="hero__timings">
            <span className="hero__timings-item">
              <i className="ri-time-line"></i> Morning: 5:30 AM – 1:30 PM
            </span>
            <span className="hero__timings-divider">|</span>
            <span className="hero__timings-item">
              <i className="ri-time-line"></i> Evening: 4:00 PM – 10:00 PM
            </span>
          </div>

          <div className="hero__women-callout">
            <i className="ri-women-line"></i>
            <span>Special Morning Slot for Women: 9 AM – 1 PM</span>
          </div>

          <p className="section__description">
            Proponitis Fitness — the best personal training gym in Coimbatore,
            RS Puram. Expert coaching by Mr. Selva Kumar, M.P.Ed — 14 years
            experience, 500+ clients trained. Weight loss, strength, sports
            training &amp; more.
          </p>

          <div className="header__btn">
            <Link href="#contact-section">
              <button className="btn hero__btn" id="hero-join-btn">
                Join Today <i className="ri-arrow-right-line"></i>
              </button>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn hero__whatsapp-btn"
              id="hero-whatsapp-btn"
            >
              <i className="ri-whatsapp-line"></i> Enquire Now
            </a>
          </div>
        </motion.div>

        <motion.div
          className="header__image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero__blob"></div>
          <motion.div
            animate={{ y: [-15, 15] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/assets/header.png"
              alt="Best Fitness Centre in Coimbatore — Proponitis Fitness RS Puram"
              width={500}
              height={600}
              priority
              style={{ width: "100%", height: "auto", position: "relative", zIndex: 10 }}
            />
          </motion.div>
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span>
              <i className="ri-trophy-line"></i>
            </span>
            <div>
              <h4>Top Rated</h4>
              <p>Gym in Coimbatore</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
