import React from "react";
import { Phone, MapPin, Clock, Shield } from "lucide-react";
import { companyInfo } from "../data/company";

export default function TopBar() {
  return (
    <div className="bg-brand-blue-900 text-white text-xs sm:text-sm py-2 px-4 border-b border-blue-800/60 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Left: Location & Hours */}
        <div className="flex items-center space-x-6 text-slate-300">
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-yellow-400 shrink-0" />
            <span>Pallikaranai, Chennai – 600100</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-yellow-400 shrink-0" />
            <span>Mon - Sun: 8:00 AM - 9:00 PM</span>
          </div>
        </div>

        {/* Right: Guarantee badge & Direct Call */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1.5 text-brand-yellow-300 font-medium">
            <Shield className="w-3.5 h-3.5 text-brand-yellow-400" />
            <span>Free Doorstep Inspection & Instant Quote</span>
          </div>
          <a
            href={`tel:${companyInfo.phone}`}
            className="flex items-center space-x-1.5 text-white font-semibold hover:text-brand-yellow-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-yellow-400 animate-pulse" />
            <span>Call Now: {companyInfo.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
