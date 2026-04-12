"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { motion } from "framer-motion";

const TRUSTINDEX_ID = process.env.NEXT_PUBLIC_TRUSTINDEX_ID;

const WHATSAPP_BASE =
  "https://api.whatsapp.com/send?phone=919952431546&text=";

interface Testimonial {
  name: string;
  text: string;
}

interface SEOPageLayoutProps {
  h1: string;
  subtitle?: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  whatsappMessage: string;
  ctaLabel: string;
  children: React.ReactNode;
  testimonials: Testimonial[];
  relatedLinks?: { label: string; href: string }[];
}

const StarRating = () => (
  <div className="seo__stars" aria-label="5 star rating">
    {[1, 2, 3, 4, 5].map((s) => (
      <i key={s} className="ri-star-fill" style={{ color: "#f92524" }}></i>
    ))}
  </div>
);

const SEOPageLayout = ({
  h1,
  subtitle,
  intro,
  heroImage,
  heroImageAlt,
  whatsappMessage,
  ctaLabel,
  children,
  testimonials,
  relatedLinks,
}: SEOPageLayoutProps) => {
  const waUrl = `${WHATSAPP_BASE}${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="seo__hero">
          <div className="section__container seo__hero-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="seo__hero-content"
            >
              {subtitle && <span className="section__subheader">{subtitle}</span>}
              <h1 className="seo__h1">{h1}</h1>
              <p className="seo__intro">{intro}</p>
              <div className="seo__cta-row">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn seo__wa-btn"
                  id="seo-hero-whatsapp-btn"
                >
                  <i className="ri-whatsapp-line"></i> {ctaLabel}
                </a>
                <a href="tel:+919952431546" className="btn seo__call-btn" id="seo-call-btn">
                  <i className="ri-phone-line"></i> Call Now
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="seo__hero-image-wrapper"
            >
              <Image
                src={heroImage}
                alt={heroImageAlt}
                width={600}
                height={400}
                className="seo__hero-img"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Page-specific sections */}
        {children}

        {/* Testimonials */}
        <section className="seo__testimonials">
          <div className="section__container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section__header">What Our Members Say</h2>
            </motion.div>

            {TRUSTINDEX_ID ? (
              <motion.div
                className="reviews__widget-wrapper"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Script
                  src={`https://cdn.trustindex.io/loader.js?${TRUSTINDEX_ID}`}
                  strategy="lazyOnload"
                />
                <div className="trustindex-widget" />
              </motion.div>
            ) : (
              <div className="seo__testimonials-grid">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    className="seo__testimonial-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  >
                    <StarRating />
                    <p>&ldquo;{t.text}&rdquo;</p>
                    <h4>— {t.name}</h4>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Address Strip */}
        <section className="seo__address-strip">
          <div className="section__container seo__address-inner">
            <div className="seo__address-item">
              <i className="ri-map-pin-line"></i>
              <div>
                <strong>Address</strong>
                <p>
                  Perumal Complex, 74, Ramachandra Rd, RS Puram,
                  Coimbatore – 641002
                </p>
              </div>
            </div>
            <div className="seo__address-item">
              <i className="ri-time-line"></i>
              <div>
                <strong>Timings</strong>
                <p>Morning: 5:30 AM – 1:30 PM</p>
                <p>Evening: 4:00 PM – 10:00 PM</p>
                <p style={{ color: "#f92524", fontWeight: 600 }}>
                  Women&apos;s Slot: 9 AM – 1 PM
                </p>
              </div>
            </div>
            <div className="seo__address-item">
              <i className="ri-phone-line"></i>
              <div>
                <strong>Phone</strong>
                <p>
                  <a href="tel:+919952431546">+91 9952431546</a>
                </p>
                <p>
                  <a href="mailto:support@proponitisfitness.com">
                    support@proponitisfitness.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final WhatsApp CTA */}
        <section className="seo__final-cta">
          <div className="section__container seo__final-cta-inner">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Ready to Start Your Fitness Journey?</h2>
              <p>
                No commitment needed — just WhatsApp us to ask about
                membership, timings, or anything else.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn seo__wa-btn seo__wa-btn--large"
                id="seo-final-whatsapp-btn"
              >
                <i className="ri-whatsapp-line"></i> {ctaLabel}
              </a>
            </motion.div>
          </div>
        </section>

        {/* Related Pages */}
        {relatedLinks && relatedLinks.length > 0 && (
          <section className="seo__related">
            <div className="section__container">
              <h2 className="section__header">Explore More</h2>
              <div className="seo__related-grid">
                {relatedLinks.map((r) => (
                  <Link key={r.href} href={r.href} className="seo__related-card">
                    <span>{r.label}</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default SEOPageLayout;
