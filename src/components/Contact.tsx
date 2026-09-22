"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const GSHEET_SCRIPT_URL =
  process.env.NEXT_PUBLIC_GSHEET_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbxbiixvuzDYtEhPlYTK48XXrUvKOVxYf4xM5DAvL2nojfdQViB8lVKodLaeODieM8tBTQ/exec";

const Contact = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const scriptUrl = GSHEET_SCRIPT_URL;

    if (!scriptUrl || scriptUrl.includes("YOUR_SCRIPT_ID")) {
      alert(
        "Google Apps Script URL is not configured yet. Please add your Web App URL to NEXT_PUBLIC_GSHEET_SCRIPT_URL in .env.local."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      await fetch(scriptUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      form.reset();
      router.push("/thank-you");
    } catch {
      alert("Something went wrong. Please WhatsApp us directly at +91 9952431546.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact contact_container" id="contact-section">
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact_heading">Get In Touch</h2>
        <p className="contact_detail">
          Have a question about membership, timings, or programmes? Send us a
          message and we&apos;ll respond via WhatsApp or phone as quickly as
          possible.
        </p>
      </motion.div>

      <div className="container contact-T">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                Perumal Complex, 74, Ramachandra Rd,
                <br /> R.S. Puram, Coimbatore – 641002
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Mobile Number</h3>
              <p>
                <a href="tel:+919952431546" style={{ color: "#fff" }}>
                  +91 9952431546
                </a>
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Timings</h3>
              <p>Morning: 5:30 AM – 1:30 PM</p>
              <p>Evening: 4:00 PM – 10:00 PM</p>
              <p style={{ color: "#f92524", fontSize: "0.85rem", fontWeight: 600 }}>
                Women&apos;s Slot: 9 AM – 1 PM
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>support@proponitisfitness.com</p>
            </div>
          </div>
        </div>

        <div className="contactForm">
          <form id="contactForm" onSubmit={handleFormSubmit}>
            <h2>Send Message</h2>
            <div className="inputBox">
              <span>Full Name</span>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="inputBox">
              <span>Mobile Number</span>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Enter Your Mobile Number"
                required
              />
            </div>
            <div className="inputBox">
              <span>I&apos;m interested in</span>
              <select
                id="interestedIn"
                name="interestedIn"
                required
                defaultValue="Personal Training"
              >
                <option value="Personal Training">Personal Training</option>
                <option value="Sports Specific Training">Sports Specific Training</option>
                <option value="Full Body Stretching">Full Body Stretching</option>
                <option value="Strength & Conditioning">Strength &amp; Conditioning</option>
                <option value="Weightloss coaching">Weightloss coaching</option>
                <option value="General Membership">General Membership</option>
              </select>
            </div>
            <div className="inputBox">
              <span>Your Goal / Message (optional)</span>
              <textarea
                id="comment"
                name="comment"
                placeholder="e.g. I want to lose weight, I am interested in personal training..."
              ></textarea>
            </div>
            <div className="inputBox">
              <input
                type="submit"
                value={isSubmitting ? "Sending..." : "Send Enquiry"}
                id="contact-submit-btn"
                disabled={isSubmitting}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
