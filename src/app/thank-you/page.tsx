"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const ThankYouPage = () => {
  useEffect(() => {
    const conversionId = process.env.NEXT_PUBLIC_GADS_CONVERSION;

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      if (conversionId) {
        window.gtag("event", "conversion", { send_to: conversionId });
      }
      window.gtag("event", "contact_form_submit", {
        event_category: "engagement",
        event_label: "Contact Form",
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="thankyou__main">
        <motion.div
          className="thankyou__container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="thankyou__icon">
            <i className="ri-checkbox-circle-line"></i>
          </div>
          <h1 className="thankyou__h1">Thank You!</h1>
          <p className="thankyou__text">
            Your message has been received. Mr. Selva Kumar or our team will
            get back to you shortly via <strong>WhatsApp or phone</strong>.
          </p>
          <p className="thankyou__sub">
            In the meantime, feel free to reach out directly:
          </p>
          <div className="thankyou__cta-row">
            <a
              href="https://api.whatsapp.com/send?phone=919952431546&text=Hi%2C%20I%20just%20submitted%20a%20contact%20form%20on%20proponitisfitness.com%20and%20wanted%20to%20follow%20up."
              target="_blank"
              rel="noopener noreferrer"
              className="btn thankyou__wa-btn"
              id="thankyou-whatsapp-btn"
            >
              <i className="ri-whatsapp-line"></i> WhatsApp Us
            </a>
            <a href="tel:+919952431546" className="btn thankyou__call-btn" id="thankyou-call-btn">
              <i className="ri-phone-line"></i> Call +91 9952431546
            </a>
          </div>
          <Link href="/" className="thankyou__back">
            <i className="ri-arrow-left-line"></i> Back to Home
          </Link>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default ThankYouPage;
