"use client";

import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Building,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { companyInfo, getWhatsAppUrl } from "../data/company";
import { servicesData } from "../data/services";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Balcony Safety Nets",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone.trim()) return;

    // Build customized WhatsApp inquiry message
    const msg = `Hello Vikram Aditya Enterprises,
Name: ${formData.name || "Customer"}
Phone: ${formData.phone}
Interested Service: ${formData.service}
Requirement: ${formData.message || "Please provide a free quote and inspection."}`;

    const url = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-blue-100 text-brand-blue-800 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <Building className="w-4 h-4 text-brand-yellow-600" />
            <span>Connect With Our Team</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-blue-900 tracking-tight">
            Get in Touch With Us
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600">
            Have questions about safety nets, invisible grills, or want to schedule a free doorstep inspection in Chennai? Reach out to us today!
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-yellow-400 to-brand-yellow-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout: Contact Info Cards + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-10 sm:mb-12">
          {/* Left Column: Business Details & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-5 sm:p-7 rounded-2xl shadow-sm border border-slate-200 space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow-600">
                  Business Details
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-blue-900 mt-1">
                  {companyInfo.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {companyInfo.tagline}
                </p>
              </div>

              {/* Address with Location Icon */}
              <div className="flex items-start space-x-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-yellow-600" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800">Office & Service Address</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                    {companyInfo.address}
                  </p>
                </div>
              </div>

              {/* Mobile Number */}
              <div className="flex items-start space-x-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-blue-600" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800">Mobile & Helpline</h4>
                  <p className="text-sm sm:text-base font-bold text-brand-blue-900 mt-0.5">
                    {companyInfo.phoneFormatted}
                  </p>
                  <p className="text-xs text-slate-500">Available all 7 days for direct assistance</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-yellow-600" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800">Working Hours</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    {companyInfo.workingHours}
                  </p>
                </div>
              </div>

              {/* Direct Buttons: Phone Call & WhatsApp */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center justify-center space-x-2 bg-brand-blue-900 hover:bg-brand-blue-800 text-white font-bold py-3 sm:py-3.5 px-4 rounded-xl shadow active:scale-98 transition text-xs sm:text-sm"
                >
                  <Phone className="w-4 h-4 text-brand-yellow-400" />
                  <span>Call {companyInfo.phone}</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-3 sm:py-3.5 px-4 rounded-xl shadow active:scale-98 transition text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Quote / Free Measurement Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-5 sm:p-7 sm:p-9 rounded-2xl shadow-sm border border-slate-200 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-blue-900">
                    Request a Free Quote & Inspection
                  </h3>
                  <span className="text-[11px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Zero Cost Visit
                  </span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm mb-5 sm:mb-6">
                  Fill in your requirements below and our installation team will connect with you immediately with sample kits and transparent estimates.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-100 outline-none text-base transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-100 outline-none text-base transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Select Required Safety Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-100 outline-none text-base transition bg-white"
                    >
                      {servicesData.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Balcony / Area Details or Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. 2 Balconies on 4th floor, need invisible grills or bird nets..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-100 outline-none text-base transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-brand-yellow-400 hover:bg-brand-yellow-500 text-brand-blue-950 font-extrabold py-3.5 px-6 rounded-xl shadow-lg active:scale-98 transition duration-200 text-sm sm:text-base cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Open WhatsApp Enquiry</span>
                  </button>
                </form>

                {submitted && (
                  <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center space-x-2 text-emerald-800 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                    <span>Inquiry prepared! If WhatsApp didn't open automatically, please tap the WhatsApp button on the left.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Location Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <MapPin className="w-5 h-5 text-brand-yellow-600 shrink-0" />
              <div>
                <h4 className="text-base font-bold text-brand-blue-900">
                  Location & Service Coverage: Pallikaranai, Chennai
                </h4>
                <p className="text-xs text-slate-500">
                  No. 17, Vivekananda Nagar, Sai Ganesh Nagar 1st Main Road, Pallikaranai, Chennai – 600100
                </p>
              </div>
            </div>

            <a
              href={companyInfo.googleMapsQuery}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-brand-blue-700 hover:text-brand-blue-900 underline underline-offset-4 shrink-0"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full h-80 sm:h-96 relative bg-slate-100">
            <iframe
              src={companyInfo.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vikram Aditya Enterprises Location in Pallikaranai Chennai"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
