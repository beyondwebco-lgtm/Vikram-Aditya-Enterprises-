"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Check, Phone, ArrowUpRight, ShieldCheck, X } from "lucide-react";
import { servicesData } from "../data/services";
import { companyInfo, getWhatsAppUrl } from "../data/company";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-yellow-100 text-brand-yellow-800 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-brand-yellow-600" />
            <span>Certified Safety & Protection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-900 tracking-tight">
            Our Professional Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Tailored safety net and invisible grill installations for homes, high-rises, commercial buildings, and sports arenas across Chennai.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-yellow-400 to-brand-yellow-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const whatsappLink = getWhatsAppUrl(service.title);

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Service Card Image with Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={`${service.title} installation by Vikram Aditya Enterprises`}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 right-3 bg-brand-yellow-400 text-brand-blue-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    {service.badge}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-3 bg-brand-blue-900/80 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-md">
                    {service.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-brand-blue-900 group-hover:text-brand-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Quick Features List */}
                    <ul className="pt-2 space-y-1.5 border-t border-slate-100">
                      {service.features.slice(0, 2).map((feat, fidx) => (
                        <li key={fidx} className="flex items-center text-xs text-slate-500 space-x-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons: WhatsApp Enquiry + Learn More */}
                  <div className="pt-2 space-y-2">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-2.5 px-4 rounded-xl shadow hover:shadow-md transition-all text-sm group/btn"
                    >
                      <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                      <span>WhatsApp Enquiry</span>
                      <ArrowUpRight className="w-4 h-4 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    <div className="flex items-center justify-between text-xs pt-1 px-1">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="text-brand-blue-700 hover:text-brand-blue-900 font-semibold underline underline-offset-2 transition-colors cursor-pointer"
                      >
                        View Specifications
                      </button>

                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="flex items-center space-x-1 text-slate-500 hover:text-brand-blue-600 transition-colors"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-scaleUp">
              <div className="relative h-48 w-full">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/80 via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-3 right-3 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs uppercase font-bold text-brand-yellow-400">
                    {selectedService.category}
                  </span>
                  <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {selectedService.fullDescription}
                </p>

                <div>
                  <h4 className="text-sm font-bold text-brand-blue-900 mb-2">
                    Key Features & Guarantee:
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600 space-x-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex gap-3">
                  <a
                    href={getWhatsAppUrl(selectedService.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl shadow transition"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Get Pricing on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="inline-flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl transition"
                  >
                    <Phone className="w-4 h-4 text-brand-blue-600" />
                    <span className="hidden sm:inline">Call Now</span>
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
