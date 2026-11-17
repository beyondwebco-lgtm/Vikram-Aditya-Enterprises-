"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight, ShieldCheck, Award, Clock, CheckCircle } from "lucide-react";
import { companyInfo, getWhatsAppUrl } from "../data/company";

export default function Hero() {
  const handleExploreClick = (e) => {
    e.preventDefault();
    const element = document.querySelector("#services");
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

  const keyPillars = [
    { icon: ShieldCheck, text: "Garware & ISO Quality Nets" },
    { icon: Award, text: "5 - 8 Years Warranty" },
    { icon: Clock, text: "Same-Day Free Inspection" },
    { icon: CheckCircle, text: "Affordable Direct Pricing" },
  ];

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-brand-blue-950 text-white">
      {/* Background Balcony Image with Deep Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85"
          alt="Modern high-rise apartment balcony protected with safety nets"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Multilayer gradient: deep brand blue overlay for text contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-950/95 via-brand-blue-900/90 to-brand-blue-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950 via-transparent to-brand-blue-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Top Tagline Pill */}
            <div className="inline-flex items-center space-x-2 bg-brand-yellow-500/15 border border-brand-yellow-400/40 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-yellow-400 animate-ping shrink-0" />
              <span className="text-brand-yellow-300 text-xs sm:text-sm font-semibold tracking-wide uppercase truncate">
                Chennai's Trusted Safety Net Specialists
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Your Safety, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow-300 via-brand-yellow-400 to-amber-300">
                Our Priority!
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-100 leading-snug">
              {companyInfo.heroSubheading}
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
              {companyInfo.heroDescription}
            </p>

            {/* Action Buttons: Explore Our Services & Contact Us on WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href="#services"
                onClick={handleExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-brand-yellow-400 hover:bg-brand-yellow-500 text-brand-blue-950 font-bold px-6 sm:px-7 py-3.5 rounded-xl shadow-lg hover:shadow-brand-yellow-400/30 active:scale-98 transition duration-200 text-sm sm:text-base"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold px-6 sm:px-7 py-3.5 rounded-xl shadow-lg hover:shadow-emerald-500/30 active:scale-98 transition duration-200 text-sm sm:text-base border border-emerald-400/40"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                <span>Contact Us on WhatsApp</span>
              </a>
            </div>

            {/* Feature Badges list */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-5 border-t border-blue-800/40">
              {keyPillars.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-slate-200">
                  <item.icon className="w-4 h-4 text-brand-yellow-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Floating Quick Contact Card (Hidden on mobile phones, shown on laptop/desktop) */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 xl:p-7 shadow-2xl relative">
              <div className="absolute -top-3 right-6 bg-brand-yellow-400 text-brand-blue-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                Immediate Response
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Book Free Doorstep Inspection
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    Our safety technicians visit your premises in Chennai with genuine samples and take exact balcony measurements.
                  </p>
                </div>

                <div className="space-y-2.5 bg-brand-blue-900/60 p-4 rounded-xl border border-blue-700/40">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-brand-yellow-400 mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white">Genuine ISO Nylon & SS-316 Wire</p>
                      <p className="text-xs text-slate-300">Resistant to high heat, rains & harsh UV radiation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-brand-yellow-400 mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white">Zero Damage Installation</p>
                      <p className="text-xs text-slate-300">Clean drill anchors with rust-free stainless steel hooks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-brand-yellow-400 mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white">Affordable Wholesale Rates</p>
                      <p className="text-xs text-slate-300">Best price guaranteed with no hidden labor charges</p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-1">
                  <a
                    href={getWhatsAppUrl("Balcony Safety Nets & Invisible Grills")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl transition shadow-md text-sm active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Get Instant Price Quote on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
