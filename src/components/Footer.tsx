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
