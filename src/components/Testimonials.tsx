/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Star, Quote, Heart } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="opinie" className="py-20 bg-white border-b border-[#A67C52]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#A67C52] font-mono block">
            Głos naszych klientów
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2D2D] tracking-tight">
            Co mówią o nas Klienci <span className="italic text-[#A67C52]">po montażu</span>?
          </h2>
          <p className="text-sm sm:text-base text-[#2D2D2D]/70 font-sans">
            Najlepszą wizytówką naszej rodzinnej stolarni są uśmiechy domowników, którym daliśmy bezpieczne kroki na lata. Przeczytaj opinie zadowolonych rodzin.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F9F7F2] rounded-2xl p-6 sm:p-8 border border-[#A67C52]/5 hover:border-[#A67C52]/20 transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Quotation Icon decoration */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#A67C52]/10" />

              <div className="space-y-4">
                {/* Stars indicator */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#A67C52] text-[#A67C52]" />
                  ))}
                </div>

                {/* Main feedback text */}
                <p className="text-sm sm:text-base text-[#2D2D2D]/85 italic leading-relaxed font-sans text-left">
                  "{t.text}"
                </p>
              </div>

              {/* Author details */}
              <div className="pt-6 border-t border-[#A67C52]/10 mt-6 flex justify-between items-center text-xs">
                <div>
                  <span className="block font-bold text-[#2D2D2D] text-sm">{t.author}</span>
                  <span className="text-[#2D2D2D]/60 mt-0.5 block">{t.location}</span>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-[#A67C52]/10 text-[#8B6239] font-semibold px-2 py-0.5 rounded font-mono text-[10px]">
                    {t.stairsBuilt}
                  </span>
                  <span className="block text-gray-400 mt-1 font-mono text-[10px]">{t.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
