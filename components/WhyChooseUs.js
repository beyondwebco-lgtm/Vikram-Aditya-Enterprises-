import React from "react";
import {
  ShieldCheck,
  Wrench,
  BadgePercent,
  Headphones,
  ShieldAlert,
  HeartHandshake,
  CheckCircle2,
  Clock,
  Sparkles,
  Phone,
  MessageCircle,
} from "lucide-react";
import { companyInfo, getWhatsAppUrl } from "../data/company";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Premium Quality Safety Nets",
      description:
        "Made from high-grade 100% pure virgin nylon and HDPE polymer. UV-stabilized to withstand the harsh coastal Chennai sun and monsoons without decaying or losing tensile strength.",
      badge: "ISO Standard",
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description:
        "Rigorous installation protocols executed by trained safety riggers using stainless steel 316 anchoring hooks and heavy-duty wire roping without damaging your building's plastering.",
      badge: "Expert Technicians",
    },
    {
      icon: BadgePercent,
      title: "Affordable Pricing",
      description:
        "Direct factory wholesale pricing with zero middlemen markups. We provide transparent per-square-foot quotes with no hidden charges, plus free doorstep site measurement.",
      badge: "Best Value",
    },
    {
      icon: Headphones,
      title: "Reliable Customer Support",
      description:
        "Dedicated phone and WhatsApp support 7 days a week. We stand behind our work with prompt post-installation assistance, re-tightening inspections, and warranty claims.",
      badge: "7 Days a Week",
    },
    {
      icon: ShieldAlert,
      title: "Safety-Focused Solutions",
      description:
        "Designed to absorb accidental human falls and prevent pet mishaps. Every net and grill is pre-tested for high load-bearing capacity (tested up to 300+ kg force).",
      badge: "Tested & Certified",
    },
    {
      icon: HeartHandshake,
      title: "Customer Satisfaction",
      description:
        "Over 5,000+ completed installations across Chennai's premier residential townships, gated communities, and commercial complexes with a 99.4% client satisfaction rate.",
      badge: "5,000+ Homes",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-blue-100 text-brand-blue-800 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-brand-yellow-600" />
            <span>The Vikram Aditya Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-900 tracking-tight">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We combine high-tensile safety netting materials, precision installation techniques, and prompt customer care to give your family unmatched peace of mind.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-yellow-400 to-brand-yellow-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Core Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-brand-blue-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue-600 to-brand-blue-800 text-white flex items-center justify-center shadow-md shadow-brand-blue-900/10 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-brand-yellow-400" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-700 bg-brand-blue-50 px-3 py-1 rounded-full border border-brand-blue-100">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-brand-blue-900 mb-3 group-hover:text-brand-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs text-brand-blue-800 font-semibold space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Verified Quality & Warranty Backed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Banner & Quick Callout */}
        <div className="bg-gradient-to-r from-brand-blue-950 via-brand-blue-900 to-brand-blue-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-blue-800/40">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-brand-yellow-400/20 text-brand-yellow-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-brand-yellow-400" />
                <span>Quick Same-Day Service Available</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Protecting Balconies, Windows & Buildings Across Chennai
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Contact our safety engineering team today for a zero-cost measurement visit at your doorstep. We bring material samples so you can touch, inspect, and choose the perfect safety net for your home.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>WhatsApp Instant Quote</span>
              </a>

              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center space-x-2.5 bg-brand-yellow-400 hover:bg-brand-yellow-500 text-brand-blue-950 font-bold py-3.5 px-6 rounded-xl shadow transition-all text-center"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>Call {companyInfo.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
