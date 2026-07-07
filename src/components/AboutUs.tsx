/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Heart, Award, Sparkles } from "lucide-react";
import { COMPANY_INFO, IMAGES } from "../data";

export default function AboutUs() {
  return (
    <section id="o-nas" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Craftsmanship Image and Key Stats */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-square sm:aspect-[4/3] lg:aspect-square">
                <img
                  src={IMAGES.craftsmanship}
                  alt="Precyzyjne rzemiosło stolarskie"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative offset frame */}
              <div className="absolute -inset-4 border-2 border-[#A67C52]/20 rounded-2xl -z-10 translate-x-4 translate-y-4 hidden sm:block" />

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-6 bg-[#A67C52] text-[#F9F7F2] p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/10">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="block text-2xl font-serif font-bold">1994</span>
                    <span className="text-xs uppercase tracking-widest text-white/80 font-mono">Tradycja rzemiosła</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Persuasive Copy & Story */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A67C52] font-mono block">
                Poznaj Naszą Stolarnię
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2D2D] tracking-tight">
                Z miłości do drewna, z <span className="italic text-[#A67C52]">szacunku dla tradycji</span>
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#2D2D2D]/80 leading-relaxed font-sans">
              <p>
                Jesteśmy rodzinną manufakturą, w której zapach drewna towarzyszy nam od lat. Nie jesteśmy masową fabryką. Do każdego stopnia podchodzimy tak, jakbyśmy budowali go we własnym domu.
              </p>
              <p>
                Łączymy tradycyjne, przekazywane z ojca na syna techniki stolarskie z nowoczesnym parkiem maszynowym. Dzięki temu dajemy Ci gwarancję absolutnego bezpieczeństwa, precyzji spasowania co do milimetra oraz unikalnego stylu, który podkreśli duszę Twojego wnętrza.
              </p>
            </div>

            {/* High-impact quote (copywriting gem) */}
            <blockquote className="border-l-4 border-[#A67C52] bg-[#F9F7F2] p-6 rounded-r-xl italic text-lg text-[#2D2D2D] font-serif shadow-sm my-6 relative">
              <span className="absolute top-2 left-2 text-[#A67C52]/15 text-5xl leading-none select-none font-serif">“</span>
              <p className="relative z-10 pl-4 font-medium text-[#2D2D2D]">
                {COMPANY_INFO.taglines.philosophy}
              </p>
              <footer className="mt-2 text-sm text-[#A67C52] font-mono not-italic pl-4">
                — Marek Jarzębowski, Mistrz Stolarstwa
              </footer>
            </blockquote>

            {/* Value Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-[#F9F7F2] text-[#A67C52] h-fit">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2D2D2D] text-sm">Gwarancja Rodzinna</h4>
                  <p className="text-xs text-[#2D2D2D]/70 mt-1">
                    Każdy projekt kończymy osobiście, podpisując się pod nim własnym nazwiskiem.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-[#F9F7F2] text-[#A67C52] h-fit">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2D2D2D] text-sm">Uczciwe Relacje</h4>
                  <p className="text-xs text-[#2D2D2D]/70 mt-1">
                    Pomiary i doradztwo projektowe są w pełni darmowe – bez ukrytych opłat i niespodzianek.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
