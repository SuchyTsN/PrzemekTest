/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Hammer, Ruler, Palette, Compass, ArrowDown, Sparkles } from "lucide-react";
import { PROCESS_STEPS, COMPANY_INFO } from "../data";

export default function Process() {
  const getIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Ruler className="w-6 h-6" />;
      case 2:
        return <Compass className="w-6 h-6" />;
      case 3:
        return <Hammer className="w-6 h-6" />;
      case 4:
        return <Sparkles className="w-6 h-6" />;
      default:
        return <Hammer className="w-6 h-6" />;
    }
  };

  return (
    <section id="proces" className="py-20 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#A67C52] font-mono block">
            Jak Pracujemy?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2D2D] tracking-tight">
            Od pierwszego rysunku do <span className="italic text-[#A67C52]">gotowych schodów</span>
          </h2>
          <p className="text-sm sm:text-base text-[#2D2D2D]/70 font-sans">
            Wierzymy, że kluczem do udanej inwestycji jest pełna przejrzystość. Każdy krok w naszej rodzinnej stolarni jest z góry zaplanowany i realizowany pod okiem mistrza.
          </p>
        </motion.div>

        {/* Dynamic Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {PROCESS_STEPS.map((p, index) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#A67C52]/5 flex flex-col justify-between group"
            >
              <div>
                {/* Step number & Icon header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#A67C52] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md">
                    {getIcon(p.step)}
                  </div>
                  <span className="font-mono text-4xl sm:text-5xl font-black text-[#A67C52]/10 select-none leading-none">
                    0{p.step}
                  </span>
                </div>

                {/* Step titles & description */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2D2D2D]">
                      {p.title}
                    </h3>
                  </div>
                  <span className="inline-block bg-[#A67C52]/10 text-[#8B6239] text-xs font-semibold px-2.5 py-1 rounded-full font-mono">
                    Czas realizacji: {p.duration}
                  </span>
                  <p className="text-sm text-[#2D2D2D]/70 font-sans leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Detailed checklist */}
              <div className="pt-4 border-t border-[#A67C52]/10 space-y-2 mt-auto">
                <span className="block text-[11px] uppercase tracking-wider text-[#A67C52] font-semibold font-mono">
                  Co dokładnie robimy:
                </span>
                <ul className="space-y-1.5 text-xs text-[#2D2D2D]/80">
                  {p.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#A67C52] font-semibold">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Persuasive quote connector */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-xl mx-auto bg-white/60 p-6 rounded-2xl border border-[#A67C52]/10"
        >
          <p className="text-sm font-medium text-[#2D2D2D] font-sans">
            "Wiemy, że budowa domu to stres. Dlatego nasze schody montujemy bez kurzu, bez opóźnień i z uśmiechem."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
