"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, MessageCircle, Phone, Menu, X, ChevronRight } from "lucide-react";
import { companyInfo, getWhatsAppUrl } from "../data/company";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-white py-4 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Company Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand-blue-700 via-brand-blue-600 to-brand-blue-800 flex items-center justify-center text-white shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-brand-yellow-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-xl tracking-tight text-brand-blue-900 group-hover:text-brand-blue-700 transition-colors uppercase leading-tight">
                Vikram Aditya
              </span>
              <span className="text-xs sm:text-xs tracking-wider uppercase font-semibold text-brand-yellow-600">
                Enterprises
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-700 hover:text-brand-blue-600 font-medium text-sm transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-yellow-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA: Call & Highlighted WhatsApp button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center space-x-2 text-slate-700 hover:text-brand-blue-700 font-semibold text-sm px-3 py-2 rounded-lg hover:bg-slate-50 transition"
              title="Call us now"
            >
              <Phone className="w-4 h-4 text-brand-blue-600" />
              <span>{companyInfo.phone}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold text-sm px-4 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-green-400/40"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Right Controls: Quick WhatsApp icon + Hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-600" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-blue-900" />
              ) : (
                <Menu className="w-6 h-6 text-brand-blue-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-100 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-700 hover:bg-brand-blue-50 hover:text-brand-blue-700 font-medium text-base transition"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center justify-center space-x-2 bg-brand-blue-50 text-brand-blue-700 font-semibold py-2.5 rounded-lg border border-brand-blue-100 transition"
              >
                <Phone className="w-4 h-4 text-brand-blue-600" />
                <span>Call: {companyInfo.phoneFormatted}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold py-2.5 rounded-lg shadow transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
