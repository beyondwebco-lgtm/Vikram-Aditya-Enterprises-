"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "../data/company";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after a short delay
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center space-x-2 mr-3 bg-white text-slate-800 text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200 animate-fadeIn relative">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Need a Free Inspection? Chat on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded-full"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-r border-t border-slate-200" />
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white focus:outline-none focus:ring-4 focus:ring-green-400/50"
        aria-label="Chat on WhatsApp with Vikram Aditya Enterprises"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute -inset-1 rounded-full bg-green-500 opacity-40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-8 h-8 fill-white relative z-10 drop-shadow" />
      </a>
    </div>
  );
}
