/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ShieldAlert, CheckCircle2, Award, ChevronRight } from "lucide-react";
import { MATERIALS } from "../data";

export default function Materials() {
  return (
    <section id="materialy" className="py-20 bg-[#F9F7F2]">
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
            Surowce i Wykończenie
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2D2D] tracking-tight">
            Sezonowane <span className="italic text-[#A67C52]">drewno najwyższej klasy stolarskiej</span>
          </h2>
          <p className="text-sm sm:text-base text-[#2D2D2D]/70 font-sans">
            Wybór surowca to fundament udanych schodów. Pracujemy wyłącznie z wyselekcjonowanym, idealnie suchym drewnem o wilgotności 8-10%, pochodzącym z certyfikowanych polskich lasów.
          </p>
        </motion.div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MATERIALS.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#A67C52]/5 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="border-b border-[#A67C52]/10 pb-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2D2D2D]">
                    {material.name}
                  </h3>
                  {material.scientificName && (
                    <span className="text-xs italic text-[#A67C52] font-mono block mt-1">
                      {material.scientificName}
                    </span>
                  )}
                </div>

                {/* Characteristics badges */}
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between py-1 border-b border-gray-50/50">
                    <span className="text-[#2D2D2D]/55 font-semibold">Trwałość:</span>
                    <span className="text-[#8B6239] font-bold font-mono">{material.durability}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-50/50">
                    <span className="text-[#2D2D2D]/55 font-semibold">Charakter:</span>
                    <span className="text-[#2D2D2D] font-medium text-right">{material.character}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#2D2D2D]/75 leading-relaxed font-sans">
                  {material.description}
                </p>

                {/* Features checklist */}
                <div className="space-y-2.5 pt-4">
                  <span className="block text-xs uppercase tracking-wider text-[#A67C52] font-bold font-mono">
                    Główne Atuty:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#2D2D2D]/80">
                    {material.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative base element */}
              <div className="pt-6 border-t border-gray-50 mt-8 text-center text-xs text-[#A67C52]/70 font-mono flex items-center justify-center gap-1">
                <span>Certyfikowane pochodzenie drewna</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Persuasive copy banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-[#A67C52] text-[#F9F7F2] p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="text-xs uppercase font-mono tracking-widest text-white/80 font-bold block">Nasza obietnica jakości</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                "Nie sprzedajemy drewna. Sprzedajemy bezpieczne kroki Twoich dzieci i solidny fundament Twojej codzienności."
              </h3>
            </div>
            <div className="md:col-span-4 md:text-right">
              <button
                onClick={() => {
                  const element = document.getElementById("kontakt");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white hover:bg-[#F9F7F2] text-[#A67C52] hover:text-[#8B6239] font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
              >
                <span>Darmowa wycena</span>
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
