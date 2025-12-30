"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <header className="header" id="home">
            <div className="section__container header__container">
                <motion.div
                    className="header__content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="hero__title-wrapper">
                        <span className="hero__subtitle">Build Your Body &</span>
                        <h1 className="hero__title">Shape <br /> <span>Yourself!</span></h1>
                    </div>
                    <p className="section__description">
                        Unleash your potential and embark on a journey towards a stronger,
                        fitter, and more confident you. Sign up for &apos;Make Your Body
                        Shape&apos; now and witness the incredible transformation your body
                        is capable of!
                    </p>
                    <div className="header__btn">
                        <Link href="#contact-section">
                            <button className="btn hero__btn">
                                Join Today <i className="ri-arrow-right-line"></i>
                            </button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    className="header__image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hero__blob"></div>
                    <motion.div
                        animate={{ y: [-15, 15] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 4,
                            ease: "easeInOut",
                        }}
                    >
                        <Image
                            src="/assets/header.png"
                            alt="header"
                            width={500}
                            height={600}
                            priority
                            style={{ width: "100%", height: "auto", position: "relative", zIndex: 10 }}
                        />
                    </motion.div>
                    <motion.div
                        className="hero__badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <span><i className="ri-trophy-line"></i></span>
                        <div>
                            <h4>Top Rated</h4>
                            <p>Gym in RS Puram</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </header>
    );
};

export default Hero;
