"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, MapPin, ZoomIn, X, Camera, ChevronRight } from "lucide-react";
import { galleryCategories, galleryItems } from "../data/gallery";
import { companyInfo, getWhatsAppUrl } from "../data/company";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-yellow-100 text-brand-yellow-800 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-4 h-4 text-brand-yellow-600" />
            <span>Real Site Installations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-900 tracking-tight">
            Our Installation Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Browse our completed safety netting, invisible grills, bird protection, and sports turf netting projects installed across residential and commercial properties in Chennai.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-yellow-400 to-brand-yellow-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-brand-blue-900 text-white shadow-md shadow-brand-blue-900/20 scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 aspect-[4/3] cursor-pointer"
              onClick={() => setLightboxItem(item)}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-95 group-hover:opacity-85"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/90 via-brand-blue-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-brand-yellow-400 text-brand-blue-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Zoom Indicator */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                <ZoomIn className="w-5 h-5" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center space-x-1.5 text-brand-yellow-400 text-xs font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.location}</span>
                </div>

                <h3 className="text-white text-base sm:text-lg font-bold leading-snug drop-shadow-sm mb-1">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>

                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                  <span className="text-xs text-brand-yellow-300 font-semibold underline underline-offset-2 flex items-center">
                    Click to view full photo <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Note */}
        <div className="mt-12 text-center bg-slate-50 border border-slate-200/80 rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-slate-600 text-sm">
            Need a custom installation for your balcony, window, or facility? We provide custom measurement and tailored netting configurations for any architectural layout.
          </p>
          <div className="mt-4">
            <a
              href={getWhatsAppUrl("Safety Net Installation - Gallery Enquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow transition"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Request Quote for Similar Work</span>
            </a>
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2.5 rounded-full transition"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Image */}
              <div className="relative h-72 sm:h-96 md:h-[480px] w-full bg-black">
                <Image
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Caption & Actions */}
              <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="bg-brand-yellow-400 text-brand-blue-950 text-xs font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {lightboxItem.categoryLabel}
                    </span>
                    <span className="text-slate-400 text-xs flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-brand-yellow-400" />
                      {lightboxItem.location}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white">{lightboxItem.title}</h4>
                  <p className="text-slate-300 text-sm">{lightboxItem.description}</p>
                </div>

                <a
                  href={getWhatsAppUrl(lightboxItem.categoryLabel)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow shrink-0 text-sm transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire This Work</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
