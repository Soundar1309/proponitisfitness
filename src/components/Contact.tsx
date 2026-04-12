"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const Contact = () => {
  const router = useRouter();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", form.action, true);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onload = function () {
      try {
        const response = JSON.parse(xhr.responseText);
        if (response.ok || response.success) {
          form.reset();
          router.push("/thank-you");
        } else {
          alert("Failed to send the message. Please try again or WhatsApp us directly.");
        }
      } catch {
        alert("Something went wrong. Please WhatsApp us directly at +91 9952431546.");
      }
    };

    xhr.onerror = function () {
      alert("Network error. Please WhatsApp us directly at +91 9952431546.");
    };

    xhr.send(formData);
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
          <form
            id="contactForm"
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={handleFormSubmit}
          >
            <h2>Send Message</h2>
            <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
            <input
              type="hidden"
              name="subject"
              value="New Enquiry — Proponitis Fitness Website"
            />
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
              <span>Email</span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="inputBox">
              <span>Your Goal / Message</span>
              <textarea
                id="comment"
                name="comment"
                placeholder="e.g. I want to lose weight, I am interested in personal training..."
                required
              ></textarea>
            </div>
            <div className="inputBox">
              <input type="submit" value="Send Enquiry" id="contact-submit-btn" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
