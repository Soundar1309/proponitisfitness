"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="section__container class__container" id="class">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section__header">Our Services</h2>
                <p className="section__description">
                    Discover a diverse range of exhilarating services at our Fitness Center
                    designed to cater to all fitness levels and interests. Whether you&apos;re
                    a seasoned athlete or just starting your fitness journey, our services
                    offer something for everyone.
                </p>
            </motion.div>
            <div className="class__grid">
                {[
                    { img: "/assets/class-1.jpg", title: "Weight loss coaching", desc: "Achieve your ideal weight with personalized plans." },
                    { img: "/assets/class-2.jpg", title: "Strength & Conditioning", desc: "Build power and endurance for peak performance." },
                    { img: "/assets/class-3.jpg", title: "Nutritional Advice", desc: "Fuel your body right with expert nutrition tips." },
                    { img: "/assets/class-4.jpg", title: "Full body stretching", desc: "Improve flexibility and recovery." },
                ].map((item, index) => (
                    <motion.div
                        className="class__card"
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                    >
                        <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className="class__img"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="class__overlay"></div>
                        <div className="class__content">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                            <span className="class__btn">Explore <i className="ri-arrow-right-line"></i></span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
