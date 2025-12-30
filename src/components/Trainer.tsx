"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const Trainer = () => {
    return (
        <section className="section__container trainer__container" id="trainer">
            <div className="trainer__grid">
                <motion.div
                    className="trainer__image"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="trainer__blob"></div>
                    <Image
                        src="/assets/trainer-1.jpg"
                        alt="Mr. Selva"
                        width={450}
                        height={550}
                        className="trainer__img"
                        priority
                    />
                    <div className="trainer__exp-badge">
                        <h4>14+</h4>
                        <p>Years Exp</p>
                    </div>
                </motion.div>
                <motion.div
                    className="trainer__content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="section__subheader">Meet The Founder</span>
                    <h2 className="section__header">Mr. Selva</h2>
                    <p className="trainer__title">Founder & Head Coach</p>

                    <div className="trainer__bio">
                        <p>
                            Mr. Selva, the founder of Proponitis Fitness, is a passionate fitness professional with <strong>14 years of experience</strong> in the industry, specializing in weight loss coaching, functional fitness, sports-specific training, and corrective exercises. He holds a master’s degree in physical education and is committed to personalized coaching, ensuring that each client receives individual attention and tailored fitness plans that cater to their unique goals and needs.
                        </p>
                        <p>
                            Through a holistic approach, Selva focuses on building not only physical strength and endurance but also confidence and mental resilience. His dedication to fostering a supportive environment empowers clients to embrace their fitness journeys, helping them achieve sustainable, healthy lifestyles that last a lifetime.
                        </p>
                    </div>

                    <div className="trainer__stats">
                        <div className="stat__item">
                            <h4><i className="ri-award-fill"></i> M.P.Ed</h4>
                            <p>Master's Degree</p>
                        </div>
                        <div className="stat__item">
                            <h4><i className="ri-team-fill"></i> 500+</h4>
                            <p>Clients Trained</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Trainer;
