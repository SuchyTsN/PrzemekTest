/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ArrowUpRight, CheckSquare } from "lucide-react";
import { GALLERY_ITEMS } from "../data";
import GallerySlider from "./GallerySlider";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<"all" | "modern" | "classic" | "loft">("all");

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <section id="realizacje" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="space-y-4 max-w-xl text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A67C52] font-mono block">
              Nasze Realizacje
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2D2D] tracking-tight">
              Zobacz schody, które stały się <span className="italic text-[#A67C52]">dumą domowników</span>
            </h2>
            <p className="text-sm sm:text-base text-[#2D2D2D]/70 font-sans">
              Przedstawiamy wybrane projekty zrealizowane w domach naszych Klientów. Każde schody to osobna historia precyzji, pasji i nienagannego montażu.
            </p>
          </div>

          {/* Filter Actions */}
          <div className="flex flex-wrap gap-2 md:self-end">
            {[
              { id: "all", label: "Wszystkie" },
              { id: "modern", label: "Nowoczesne" },
              { id: "classic", label: "Klasyczne" },
              { id: "loft", label: "Styl Loftowy" }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-4 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? "bg-[#A67C52] text-[#F9F7F2] shadow-sm"
                    : "bg-[#F9F7F2] text-[#2D2D2D]/70 hover:bg-[#F1ECE3] hover:text-[#2D2D2D]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden bg-[#F9F7F2] border border-[#A67C52]/5 hover:shadow-xl transition-all duration-300"
              >
                {/* Realization Image wrapper */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlay label */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#A67C52] font-semibold text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full shadow-sm z-10 border border-[#A67C52]/10">
                    {item.type}
                  </span>
                </div>

                {/* Content Panel */}
                <div className="p-6 space-y-4 bg-white">
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-normal text-[#2D2D2D] leading-snug group-hover:text-[#A67C52] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[#2D2D2D]/60 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#A67C52]" />
                      <span>Lokalizacja: {item.location}</span>
                    </div>
                  </div>

                  {/* Wood and glass specifications */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#2D2D2D]/75 font-sans">
                    <div>
                      <span className="block text-[10px] text-gray-400 font-mono uppercase tracking-wider">Drewno i Balustrada</span>
                      <span className="font-semibold block truncate mt-0.5 max-w-[200px]">{item.material}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#F9F7F2] flex items-center justify-center text-[#A67C52] transition-colors group-hover:bg-[#A67C52] group-hover:text-white">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom Uploads Carousel Slider */}
        <GallerySlider />

      </div>
    </section>
  );
}
