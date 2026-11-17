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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

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
      const topOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-slate-100"
            : "bg-white py-3 sm:py-4 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Company Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-blue-700 via-brand-blue-600 to-brand-blue-800 flex items-center justify-center text-white shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-brand-yellow-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-lg md:text-xl tracking-tight text-brand-blue-900 group-hover:text-brand-blue-700 transition-colors uppercase leading-tight">
                  Vikram Aditya
                </span>
                <span className="text-[10px] sm:text-xs tracking-wider uppercase font-semibold text-brand-yellow-600">
                  Enterprises
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center space-x-1.5 text-slate-700 hover:text-brand-blue-700 font-semibold text-xs xl:text-sm px-3 py-2 rounded-lg hover:bg-slate-50 transition"
                title="Call us now"
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue-600" />
                <span>{companyInfo.phone}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold text-xs xl:text-sm px-4 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 border border-green-400/40"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile / Tablet Right Controls */}
            <div className="flex items-center space-x-2 lg:hidden">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-xs border border-emerald-200 active:scale-95 transition"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600" />
                <span className="hidden xs:inline">WhatsApp</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition active:scale-95 border border-slate-200"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-brand-blue-900" />
                ) : (
                  <Menu className="w-5 h-5 text-brand-blue-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop blur */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-down Drawer Menu */}
          <div className="relative z-50 bg-white border-b border-slate-200 shadow-2xl pt-2 pb-6 px-4 animate-slideDown max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Menu Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl text-slate-800 hover:bg-brand-blue-50 hover:text-brand-blue-700 font-semibold text-base transition active:bg-brand-blue-100"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-4 mt-3 border-t border-slate-100 space-y-2.5">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center justify-center space-x-2 bg-brand-blue-50 text-brand-blue-800 font-bold py-3 px-4 rounded-xl border border-brand-blue-200 text-sm active:scale-98 transition"
              >
                <Phone className="w-4 h-4 text-brand-blue-600" />
                <span>Call Helpline: {companyInfo.phoneFormatted}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-md text-sm active:scale-98 transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
