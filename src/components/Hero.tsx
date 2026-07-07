/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Star, Compass } from "lucide-react";
import { COMPANY_INFO, IMAGES } from "../data";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#F9F7F2]">
      {/* Absolute background image with a warm gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Nowoczesne dębowe schody"
          className="w-full h-full object-cover object-center scale-105 filter brightness-95"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F7F2]/95 via-[#F9F7F2]/80 to-transparent md:bg-gradient-to-r" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F7F2] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Persuasive copy content */}
          <div className="lg:col-span-8 text-left space-y-6 max-w-2xl">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#A67C52]/10 border border-[#A67C52]/20 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#8B6239] font-mono"
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Rodzinna Manufaktura Od 1994 r.</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2D2D2D] leading-[1.1] tracking-tight"
            >
              Schody, które stają się <span className="italic text-[#A67C52]">sercem</span> Twojego domu.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#2D2D2D]/70 leading-relaxed font-sans max-w-xl"
            >
              Nie sprzedajemy drewna. Sprzedajemy bezpieczne kroki Twoich dzieci i solidny fundament Twojej codzienności. Od projektu po czysty montaż.
            </motion.p>

            {/* Key benefits quick bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#F0EBE3]"
            >
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#A67C52] mt-2 shrink-0"></div>
                <div>
                  <span className="block font-semibold text-[#2D2D2D] text-sm">Polski Dąb i Jesion</span>
                  <span className="text-xs text-[#2D2D2D]/60 font-mono">Wyłącznie Klasa I</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#A67C52] mt-2 shrink-0"></div>
                <div>
                  <span className="block font-semibold text-[#2D2D2D] text-sm">Darmowy Projekt</span>
                  <span className="text-xs text-[#2D2D2D]/60 font-mono">Indywidualne dopasowanie</span>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#A67C52] mt-2 shrink-0"></div>
                <div>
                  <span className="block font-semibold text-[#2D2D2D] text-sm">Czysty Montaż</span>
                  <span className="text-xs text-[#2D2D2D]/60 font-mono">Bez pyłu i pośpiechu</span>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection("kontakt")}
                className="inline-flex items-center justify-center gap-2 bg-[#A67C52] hover:bg-[#8B6239] text-[#F9F7F2] font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Bezpłatny pomiar</span>
              </button>
              <button
                onClick={() => scrollToSection("realizacje")}
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#A67C52] hover:text-[#F9F7F2] text-[#A67C52] font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full border-2 border-[#A67C52] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Zobacz galerię</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
