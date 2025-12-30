"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="section__container about__container" id="about">
            <motion.div
                className="about__image"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    className="about__bg"
                    src="/assets/dot-bg.png"
                    alt="bg"
                    width={250}
                    height={250}
                />
                <Image
                    src="/assets/about.png"
                    alt="about"
                    width={500}
                    height={600}
                    style={{ width: "100%", height: "auto" }}
                />
            </motion.div>
            <motion.div
                className="about__content"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="section__header">We Focus On</h2>
                <p className="section__description">
                    Proponitis Fitness, located in the heart of{" "}
                    <strong>RS Puram, Coimbatore</strong>, is dedicated to empowering
                    individuals to achieve their health and wellness goals through
                    personalized, functional training. By focusing on balanced fitness
                    solutions, we help clients build strength, improve mobility, and
                    develop sustainable habits for a healthier lifestyle. Our
                    client-centered approach ensures long-term progress and a positive
                    transformation, both physically and mentally.
                </p>
                <div className="about__grid">
                    {[
                        { icon: "ri-open-arm-line", title: "Open Door Policy", desc: "We believe in providing unrestricted access to all individuals, regardless of their fitness level, age, or background." },
                        { icon: "ri-shield-cross-line", title: "Fully Insured", desc: "Your peace of mind is our top priority, and our commitment to your safety extends to every aspect of your fitness journey." },
                        { icon: "ri-p2p-line", title: "Personal Trainer", desc: "With personalized workout plans tailored to your needs, we will ensure that you get the most out of your gym experience." },
                    ].map((card, index) => (
                        <motion.div
                            className="about__card"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                        >
                            <span>
                                <i className={card.icon}></i>
                            </span>
                            <div>
                                <h4>{card.title}</h4>
                                <p>{card.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
