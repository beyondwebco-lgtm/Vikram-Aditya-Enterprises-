import React from "react";
import Image from "next/image";
import { ShieldCheck, Wrench, ShieldAlert, Smile, Award, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { companyInfo, getWhatsAppUrl } from "../data/company";

export default function AboutUs() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Quality Materials",
      description:
        "We source certified Garware nets and marine-grade SS 316 invisible grill cables that undergo rigorous tensile strength and UV exposure testing.",
      color: "from-blue-600 to-brand-blue-700",
      accent: "text-brand-yellow-500",
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description:
        "Our trained rigging technicians execute precision anchoring, uniform wire tensioning, and secure wall fasteners with zero mess.",
      color: "from-brand-blue-700 to-indigo-800",
      accent: "text-brand-yellow-400",
    },
    {
      icon: ShieldAlert,
      title: "Reliable Safety Solutions",
      description:
        "Every safety net setup is calculated to withstand heavy impact (up to 300+ kg), safeguarding children, elderly residents, and beloved pets.",
      color: "from-blue-700 to-sky-700",
      accent: "text-brand-yellow-400",
    },
    {
      icon: Smile,
      title: "Customer Satisfaction",
      description:
        "Over 5,000+ satisfied homeowners across Chennai trust us for prompt customer service, honest per-sq-ft pricing, and multi-year warranties.",
      color: "from-slate-800 to-brand-blue-900",
      accent: "text-brand-yellow-400",
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-blue-100/80 text-brand-blue-800 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-brand-yellow-600" />
            <span>Chennai's Certified Safety Installers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-900 tracking-tight">
            About Vikram Aditya Enterprises
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-yellow-400 to-brand-yellow-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid: Left Text + Right Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Column: Official Descriptions and Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                Vikram Aditya Enterprises is dedicated to providing reliable and high-quality safety solutions for residential and commercial spaces. We specialize in installing safety nets and invisible grills that provide protection, comfort, and peace of mind.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our goal is to make homes, apartments, and buildings safer for families, children, and pets through quality products and professional installation.
              </p>

              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-slate-700 font-semibold">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                  <span>ISO Certified Materials</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                  <span>Free Doorstep Inspection</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                  <span>Experienced Installation Crew</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Bar */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center space-x-2 bg-brand-blue-900 hover:bg-brand-blue-800 text-white font-semibold px-5 py-3 rounded-xl transition active:scale-98 shadow text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 text-brand-yellow-400" />
                <span>Call {companyInfo.phoneFormatted}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-xl transition active:scale-98 shadow text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Composite with Stats Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
                  alt="High quality invisible grill and balcony safety installation by Vikram Aditya Enterprises"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase font-bold tracking-wider text-brand-yellow-400">Headquarters</p>
                  <p className="text-xs sm:text-sm font-semibold">Pallikaranai, Chennai – Serving Entire Tamil Nadu</p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-5 left-3 sm:-left-6 bg-brand-yellow-400 text-brand-blue-950 p-3.5 sm:p-5 rounded-2xl shadow-xl border-2 border-white max-w-[170px] sm:max-w-[200px]">
                <p className="text-2xl sm:text-4xl font-extrabold leading-none">10+</p>
                <p className="text-[11px] sm:text-sm font-bold uppercase tracking-tight mt-1 text-brand-blue-900">
                  Years of Safety Excellence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-brand-blue-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-brand-blue-600 group-hover:text-white transition-all">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-brand-blue-900 mb-2 group-hover:text-brand-blue-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
