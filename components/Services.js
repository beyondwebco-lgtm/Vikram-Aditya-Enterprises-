"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Check, Phone, ArrowUpRight, ShieldCheck, X } from "lucide-react";
import { servicesData } from "../data/services";
import { companyInfo, getWhatsAppUrl } from "../data/company";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    if (selectedService) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  return (
    <section id="services" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-yellow-100 text-brand-yellow-800 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-brand-yellow-600" />
            <span>Certified Safety & Protection</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-900 tracking-tight">
            Our Professional Services
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
            Tailored safety net and invisible grill installations for homes, high-rises, commercial buildings, and sports arenas across Chennai.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-yellow-400 to-brand-yellow-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 9 Services Grid (Responsive for Mobile, Tablet & Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
          {servicesData.map((service) => {
            const whatsappLink = getWhatsAppUrl(service.title);

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Service Card Image with Badge */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={`${service.title} installation by Vikram Aditya Enterprises`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 right-3 bg-brand-yellow-400 text-brand-blue-950 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    {service.badge}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-3 bg-brand-blue-900/80 backdrop-blur-sm text-white text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-md">
                    {service.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-brand-blue-900 group-hover:text-brand-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Quick Features List */}
                    <ul className="pt-2 space-y-1.5 border-t border-slate-100">
                      {service.features.slice(0, 2).map((feat, fidx) => (
                        <li key={fidx} className="flex items-center text-xs text-slate-500 space-x-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons: WhatsApp Enquiry + Learn More */}
                  <div className="pt-2 space-y-2.5">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-3 sm:py-2.5 px-4 rounded-xl shadow-sm hover:shadow transition-all text-xs sm:text-sm active:scale-98 group/btn"
                    >
                      <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                      <span>WhatsApp Enquiry</span>
                      <ArrowUpRight className="w-4 h-4 opacity-75 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    <div className="flex items-center justify-between text-xs pt-0.5 px-1">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="text-brand-blue-700 hover:text-brand-blue-900 font-semibold underline underline-offset-2 transition-colors cursor-pointer py-1"
                      >
                        View Specifications
                      </button>

                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="flex items-center space-x-1 text-slate-500 hover:text-brand-blue-600 transition-colors py-1"
                      >
                        <Phone className="w-3 h-3 text-brand-blue-600" />
                        <span>Call for Quote</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Service Specifications Preview */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-scaleUp"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-44 sm:h-52 w-full">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/80 via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-3 right-3 bg-black/60 hover:bg-black text-white p-2 rounded-full transition active:scale-90"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs uppercase font-bold text-brand-yellow-400">
                    {selectedService.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold">{selectedService.title}</h3>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {selectedService.fullDescription}
                </p>

                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-brand-blue-900 mb-2">
                    Key Features & Guarantee:
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-600 space-x-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={getWhatsAppUrl(selectedService.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow active:scale-98 transition text-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Get Pricing on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl active:scale-98 transition text-sm"
                  >
                    <Phone className="w-4 h-4 text-brand-blue-600" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
