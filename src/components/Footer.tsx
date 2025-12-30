"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <>
            <footer className="footer">
                <div className="section__container footer__container">
                    <div className="footer__col">
                        <Link href="/" className="logo-footer">
                            <Image
                                src="/assets/logo.png"
                                alt="logo"
                                width={120}
                                height={120}
                                style={{ marginBottom: "1.5rem" }}
                            />
                        </Link>
                        <p style={{ color: "#fff" }}>
                            Your journey to a healthier, stronger you starts here. Join Proponitis Fitness and shape your destiny.
                        </p>
                    </div>

                    <div className="footer__col">
                        <h4 style={{ color: "#fff" }}   >Quick Links</h4>
                        <ul className="footer__links">
                            <li><Link href="#home">Home</Link></li>
                            <li><Link href="#about">About Us</Link></li>
                            <li><Link href="#class">Services</Link></li>
                            <li><Link href="#contact-section">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4>Connect</h4>
                        <div className="footer__socials">
                            <a href="https://www.facebook.com/Tamilfitnesscoachselva/?_rdr">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/proponitisfitnessstudio/">
                                <i className="ri-instagram-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__bar">
                    Copyright © {year} Proponitis Fitness. All rights reserved. | Developed by <a href="https://codeficorp.com/" target="_blank" style={{ color: "#fff" }}>Codeficorp</a>
                </div>
            </footer>

            <a
                href="https://api.whatsapp.com/send?phone=919952431546"
                className="whatsapp-float"
                target="_blank"
                style={{
                    position: 'fixed',
                    bottom: '40px',
                    right: '40px',
                    zIndex: 100
                }}
            >
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    width={50}
                    height={50}
                    unoptimized
                />
            </a>
        </>
    );
};

export default Footer;
