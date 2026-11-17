import React from "react";
import { ShieldCheck, MessageCircle, Phone, MapPin, Mail, ArrowRight, Shield } from "lucide-react";
import { companyInfo, getWhatsAppUrl } from "../data/company";
import { servicesData } from "../data/services";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-brand-blue-950 text-white pt-14 sm:pt-16 pb-24 lg:pb-12 border-t border-blue-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/80">
          {/* Column 1: Company Profile (Col 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-yellow-400 to-amber-500 flex items-center justify-center text-brand-blue-950 shadow-md">
                <ShieldCheck className="w-7 h-7 text-brand-blue-950" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl tracking-tight uppercase leading-none">
                  {companyInfo.name}
                </h3>
                <span className="text-xs uppercase tracking-widest text-brand-yellow-400 font-semibold">
                  Safety Solutions
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Chennai's premier safety net and invisible grill specialists. We install high-tensile, certified protective nets for residential balconies, windows, high-rises, commercial shafts, and box cricket arenas.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 bg-blue-900/70 border border-blue-700/50 px-3.5 py-1.5 rounded-full text-brand-yellow-300 text-xs font-semibold">
                <Shield className="w-3.5 h-3.5 text-brand-yellow-400" />
                <span>{companyInfo.tagline}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider border-b border-blue-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-brand-yellow-400 text-sm transition-colors flex items-center space-x-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: All 9 Services (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider border-b border-blue-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <a
                    href={getWhatsAppUrl(svc.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-brand-yellow-400 text-xs sm:text-sm transition-colors block truncate"
                    title={`Enquire ${svc.title}`}
                  >
                    • {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Business Address (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider border-b border-blue-800 pb-2">
              Contact & Address
            </h4>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-yellow-400 shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">
                  {companyInfo.address}
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-yellow-400 shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-brand-yellow-400 font-bold transition-colors text-sm"
                >
                  {companyInfo.phoneFormatted}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-2.5 px-4 rounded-xl shadow transition text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Vikram Aditya Enterprises. All Rights Reserved.</p>
          <p className="font-semibold text-brand-yellow-400 tracking-wider">
            {companyInfo.tagline}
          </p>
          <p className="text-slate-500">
            Professional Safety Nets & Invisible Grills in Chennai
          </p>
        </div>
      </div>
    </footer>
  );
}
