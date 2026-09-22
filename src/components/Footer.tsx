"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <Link href="/" className="logo-footer" aria-label="Proponitis Fitness Homepage">
              <Image
                src="/assets/logo.png"
                alt="Proponitis Fitness — Best Gym in Coimbatore, RS Puram"
                width={120}
                height={120}
                style={{ marginBottom: "1.5rem" }}
              />
            </Link>
            <p style={{ color: "#fff" }}>
              Your journey to a healthier, stronger you starts here. Join
              Proponitis Fitness — the best gym in Coimbatore, RS Puram — and
              shape your destiny.
            </p>
            <div className="footer__timings">
              <p style={{ color: "#ccc", marginTop: "1rem", fontSize: "0.9rem" }}>
                <i className="ri-time-line" style={{ color: "#f92524" }}></i>{" "}
                Morning: 5:30 AM – 1:30 PM
              </p>
              <p style={{ color: "#ccc", fontSize: "0.9rem" }}>
                <i className="ri-time-line" style={{ color: "#f92524" }}></i>{" "}
                Evening: 4:00 PM – 10:00 PM
              </p>
              <p style={{ color: "#f92524", fontSize: "0.85rem", fontWeight: 600 }}>
                Women&apos;s Morning Slot: 9 AM – 1 PM
              </p>
            </div>
          </div>

          <div className="footer__col">
            <h4 style={{ color: "#fff" }}>Quick Links</h4>
            <ul className="footer__links">
              <li><Link href="/#home">Home</Link></li>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/#class">Services</Link></li>
              <li><Link href="/#contact-section">Contact</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 style={{ color: "#fff" }}>Our Services</h4>
            <ul className="footer__links">
              <li><Link href="/best-gym-coimbatore">Best Gym in Coimbatore</Link></li>
              <li><Link href="/personal-trainer-coimbatore">Personal Trainer</Link></li>
              <li><Link href="/best-fitness-centre-coimbatore">Fitness Centre</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 style={{ color: "#fff" }}>Connect</h4>
            <div className="footer__socials">
              <a
                href="https://www.facebook.com/Tamilfitnesscoachselva/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook page"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/proponitisfitnessstudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram — @proponitisfitnessstudio"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=919952431546&text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Proponitis%20Fitness%2C%20Coimbatore."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp enquiry"
              >
                <i className="ri-whatsapp-line"></i>
              </a>
            </div>
            <p
              style={{
                color: "#ccc",
                marginTop: "1rem",
                fontSize: "0.85rem",
                lineHeight: 1.6,
              }}
            >
              Perumal Complex, 74, Ramachandra Rd,
              <br />
              RS Puram, Coimbatore – 641002
              <br />
              <a
                href="tel:+919952431546"
                style={{ color: "#f92524", fontWeight: 600 }}
              >
                +91 9952431546
              </a>
            </p>
            <div
              style={{
                marginTop: "0.8rem",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                maxWidth: "240px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.43!2d76.9526!3d11.0061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859221f1672cf%3A0xe44ba6192964dd2c!2sProponitis%20Fitness%20Studio!5e0!3m2!1sen!2sin!4v1790114006922!5m2!1sen!2sin"
                width="100%"
                height="140"
                style={{ border: 0, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Proponitis Fitness Studio Location Map"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="footer__bar">
          Copyright © {year} Proponitis Fitness. All rights reserved. |
          Developed by{" "}
          <a
            href="https://codeficorp.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            Codeficorp
          </a>
        </div>
      </footer>

      <a
        href="https://api.whatsapp.com/send?phone=919952431546&text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20membership%20at%20Proponitis%20Fitness%2C%20Coimbatore."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Proponitis Fitness"
        style={{
          position: "fixed",
          bottom: "40px",
          right: "40px",
          zIndex: 100,
        }}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Proponitis Fitness Coimbatore"
          width={50}
          height={50}
          unoptimized
        />
      </a>
    </>
  );
};

export default Footer;
