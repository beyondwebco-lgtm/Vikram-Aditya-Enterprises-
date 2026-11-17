"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { companyInfo, getWhatsAppUrl } from "../data/company";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-2.5 px-3 lg:hidden pb-[max(0.625rem,env(safe-area-inset-bottom))]">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Direct Call Button */}
        <a
          href={`tel:${companyInfo.phone}`}
          className="flex items-center justify-center space-x-2 bg-brand-blue-900 hover:bg-brand-blue-800 text-white font-bold py-2.5 px-3 rounded-xl shadow-sm text-xs sm:text-sm active:scale-95 transition"
        >
          <Phone className="w-4 h-4 text-brand-yellow-400 animate-pulse shrink-0" />
          <span className="truncate">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-2.5 px-3 rounded-xl shadow-sm text-xs sm:text-sm active:scale-95 transition"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
