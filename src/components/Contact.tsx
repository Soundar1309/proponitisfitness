"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", form.action, true);
        xhr.setRequestHeader("Accept", "application/json");

        xhr.onload = function () {
            const response = JSON.parse(xhr.responseText);

            if (response.success) {
                alert("Your message has been sent successfully!");
                form.reset();
                // window.location.reload(); // Optional
            } else {
                alert("Failed to send the message. Please try again later.");
            }
        };

        xhr.onerror = function () {
            alert("An error occurred while sending your message. Please try again later.");
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
                    Whether you have questions, feedback, or need assistance, our team is
                    here to help. Reach out to us anytime, and we’ll respond as soon as
                    possible!
                </p>
            </motion.div>
            <div className="container contact-T">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon">
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>
                                Perumal complex, 74, Ramachandra Rd,
                                <br /> R.S. Puram, Coimbatore - 641002
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <i className="fa fa-phone"></i>
                        </div>
                        <div className="text">
                            <h3>Mobile Number</h3>
                            <p>+91 9952431546</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <i className="fa fa-envelope"></i>
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
                        <input
                            type="hidden"
                            name="access_key"
                            value="9a3c6de4-0c14-433c-9fa7-72fa3823682d"
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
                            <span>Email</span>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Your Email"
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
                            <span>Comment</span>
                            <textarea
                                id="comment"
                                name="comment"
                                placeholder="Enter your message"
                                required
                            ></textarea>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
