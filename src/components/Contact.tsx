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

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    interestedIn: "Personal Training",
    comment: "",
  });

  const [errors, setErrors] = useState<{
    fullName?: string;
    mobile?: string;
    interestedIn?: string;
  }>({});

  const [touched, setTouched] = useState<{
    fullName?: boolean;
    mobile?: boolean;
    interestedIn?: boolean;
  }>({});

  const validateField = (name: string, value: string) => {
    if (name === "fullName") {
      const trimmed = value.trim();
      if (!trimmed) return "Full Name is required.";
      if (trimmed.length < 2) return "Full Name must be at least 2 characters.";
      if (!/^[a-zA-Z\s\.\'-]+$/.test(trimmed))
        return "Full Name should contain only letters and spaces.";
      return undefined;
    }

    if (name === "mobile") {
      const trimmed = value.trim();
      if (!trimmed) return "Mobile Number is required.";
      const cleanMobile = trimmed.replace(/[\s\-\(\)]/g, "");
      const digitsOnly = cleanMobile.replace(/^\+91/, "").replace(/^0/, "");
      if (!/^[6-9]\d{9}$/.test(digitsOnly)) {
        return "Please enter a valid 10-digit mobile number (e.g. 9876543210).";
      }
      return undefined;
    }

    if (name === "interestedIn") {
      if (!value || value.trim() === "")
        return "Please select what service or program you are interested in.";
      return undefined;
    }

    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name as keyof typeof touched]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fullNameError = validateField("fullName", formData.fullName);
    const mobileError = validateField("mobile", formData.mobile);
    const interestedInError = validateField("interestedIn", formData.interestedIn);

    const newErrors = {
      fullName: fullNameError,
      mobile: mobileError,
      interestedIn: interestedInError,
    };

    setErrors(newErrors);
    setTouched({
      fullName: true,
      mobile: true,
      interestedIn: true,
    });

    if (fullNameError || mobileError || interestedInError) {
      return;
    }

    setIsSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);

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
        body: data,
        mode: "no-cors",
      });

      setFormData({
        fullName: "",
        mobile: "",
        interestedIn: "Personal Training",
        comment: "",
      });
      setTouched({});
      setErrors({});

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
          <form id="contactForm" onSubmit={handleFormSubmit} noValidate>
            <h2>Send Message</h2>
            <div className="inputBox">
              <span>
                Full Name <span className="required-star">*</span>
              </span>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Your Name"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.fullName && errors.fullName ? "input-error" : ""}
                required
              />
              {touched.fullName && errors.fullName && (
                <span className="error-text">{errors.fullName}</span>
              )}
            </div>
            <div className="inputBox">
              <span>
                Mobile Number <span className="required-star">*</span>
              </span>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Enter Your Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.mobile && errors.mobile ? "input-error" : ""}
                required
              />
              {touched.mobile && errors.mobile && (
                <span className="error-text">{errors.mobile}</span>
              )}
            </div>
            <div className="inputBox">
              <span>
                I&apos;m interested in <span className="required-star">*</span>
              </span>
              <select
                id="interestedIn"
                name="interestedIn"
                value={formData.interestedIn}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.interestedIn && errors.interestedIn ? "input-error" : ""}
                required
              >
                <option value="" disabled>
                  -- Select Program / Service --
                </option>
                <option value="Personal Training">Personal Training</option>
                <option value="Sports Specific Training">Sports Specific Training</option>
                <option value="Full Body Stretching">Full Body Stretching</option>
                <option value="Strength & Conditioning">Strength &amp; Conditioning</option>
                <option value="Weightloss coaching">Weightloss coaching</option>
                <option value="General Membership">General Membership</option>
              </select>
              {touched.interestedIn && errors.interestedIn && (
                <span className="error-text">{errors.interestedIn}</span>
              )}
            </div>
            <div className="inputBox">
              <span>Your Goal / Message (optional)</span>
              <textarea
                id="comment"
                name="comment"
                placeholder="e.g. I want to lose weight, I am interested in personal training..."
                value={formData.comment}
                onChange={handleChange}
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
