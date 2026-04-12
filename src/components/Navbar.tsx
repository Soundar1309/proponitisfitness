"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Trainer", href: "/#trainer" },
  { label: "Reviews", href: "/#client" },
];

const SERVICE_LINKS = [
  { label: "Why Choose Us", href: "/best-gym-coimbatore" },
  { label: "Personal Training", href: "/personal-trainer-coimbatore" },
  { label: "Our Programmes", href: "/best-fitness-centre-coimbatore" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scaleY: 0 },
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -8, scale: 0.95, transition: { duration: 0.15 } },
  };

  return (
    <nav className={`navbar ${isSticky ? "sticky-nav" : ""}`} aria-label="Main navigation">
      <div className="nav__container">
        <div className="nav__logo">
          <Link href="/" onClick={closeMenu} aria-label="Proponitis Fitness — Best Gym in Coimbatore">
            <Image
              src="/assets/logo.png"
              alt="Proponitis Fitness — Best Gym in Coimbatore"
              width={120}
              height={60}
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="nav__links desktop-menu" role="menubar">
          {NAV_LINKS.map((link) => (
            <li className="link" key={link.href} role="none">
              <Link href={link.href} role="menuitem">{link.label}</Link>
            </li>
          ))}

          {/* Services Dropdown */}
          <li className="link nav__dropdown" ref={dropdownRef} role="none">
            <button
              className="nav__dropdown-trigger"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              id="services-dropdown-btn"
            >
              Services <i className={`ri-arrow-${servicesOpen ? "up" : "down"}-s-line`}></i>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.ul
                  className="nav__dropdown-menu"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  role="menu"
                  aria-label="Services submenu"
                >
                  {SERVICE_LINKS.map((s) => (
                    <li key={s.href} role="none">
                      <Link href={s.href} onClick={() => setServicesOpen(false)} role="menuitem">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li className="link" role="none">
            <Link href="/#contact-section" role="menuitem">
              <button className="btn nav-btn" id="nav-contact-btn">Contact</button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="nav__menu__btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          role="button"
          tabIndex={0}
        >
          <motion.span animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
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
            role="menu"
          >
            {NAV_LINKS.map((link) => (
              <li className="link" key={link.href} role="none">
                <Link href={link.href} onClick={closeMenu} role="menuitem">{link.label}</Link>
              </li>
            ))}

            {/* Mobile Services Toggle */}
            <li className="link" role="none">
              <button
                className="nav__mobile-services-btn"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
              >
                Services <i className={`ri-arrow-${mobileServicesOpen ? "up" : "down"}-s-line`}></i>
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.ul
                    className="nav__mobile-services-list"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    role="menu"
                  >
                    {SERVICE_LINKS.map((s) => (
                      <li key={s.href} role="none">
                        <Link href={s.href} onClick={closeMenu} role="menuitem">{s.label}</Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="link" role="none">
              <Link href="/#contact-section" onClick={closeMenu} role="menuitem">
                <button className="btn nav-btn" id="mobile-contact-btn">Contact Us</button>
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
