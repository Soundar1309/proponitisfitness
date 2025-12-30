"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const menuVariants = {
        hidden: { opacity: 0, y: -20, scaleY: 0 },
        visible: {
            opacity: 1,
            y: 0,
            scaleY: 1,
            transition: { duration: 0.3 }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.2 }
        }
    };

    return (
        <nav className={`navbar ${isSticky ? "sticky-nav" : ""}`}>
            <div className="nav__container">
                <div className="nav__logo">
                    <Link href="#" onClick={closeMenu}>
                        <Image
                            src="/assets/logo.png"
                            alt="logo"
                            width={120}
                            height={60}
                            style={{ width: "auto", height: "auto" }}
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="nav__links desktop-menu">
                    <li className="link"><Link href="#home">Home</Link></li>
                    <li className="link"><Link href="#about">About</Link></li>
                    <li className="link"><Link href="#class">Services</Link></li>
                    <li className="link"><Link href="#trainer">Trainer</Link></li>
                    <li className="link"><Link href="#client">Reviews</Link></li>
                    <li className="link">
                        <Link href="#contact-section">
                            <button className="btn nav-btn">Contact</button>
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="nav__menu__btn" onClick={toggleMenu}>
                    <motion.span
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
                    </motion.span>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        className="nav__links mobile-menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                    >
                        <li className="link"><Link href="#home" onClick={closeMenu}>Home</Link></li>
                        <li className="link"><Link href="#about" onClick={closeMenu}>About</Link></li>
                        <li className="link"><Link href="#class" onClick={closeMenu}>Services</Link></li>
                        <li className="link"><Link href="#trainer" onClick={closeMenu}>Trainer</Link></li>
                        <li className="link"><Link href="#client" onClick={closeMenu}>Reviews</Link></li>
                        <li className="link">
                            <Link href="#contact-section" onClick={closeMenu}>
                                <button className="btn nav-btn">Contact Us</button>
                            </Link>
                        </li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
