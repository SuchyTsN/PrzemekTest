/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Palette, Layers, Award } from "lucide-react";
import { BENEFITS } from "../data";

export default function WhyUs() {
  const getIcon = (id: string) => {
    switch (id) {
      case "craft":
        return <Award className="w-6 h-6 text-[#A67C52]" />;
      case "quality":
        return <ShieldCheck className="w-6 h-6 text-[#A67C52]" />;
      case "individual":
        return <Palette className="w-6 h-6 text-[#A67C52]" />;
      case "full":
        return <Layers className="w-6 h-6 text-[#A67C52]" />;
      default:
        return <Award className="w-6 h-6 text-[#A67C52]" />;
    }
  };

  return (
    <section id="dlaczego-my" className="py-20 bg-white">
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
            Nasze Atuty
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2D2D] tracking-tight">
            Dlaczego warto powierzyć nam <span className="italic text-[#A67C52]">budowę schodów</span>?
          </h2>
          <p className="text-sm sm:text-base text-[#2D2D2D]/70 font-sans">
            Wierzymy, że schody to najważniejszy element architektoniczny w Twoim domu. Budujemy je tak, by bezawaryjnie służyły przez dziesięciolecia.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#F9F7F2] border border-[#A67C52]/5 hover:border-[#A67C52]/30 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-[#A67C52]/10 flex items-center justify-center">
                  {getIcon(benefit.id)}
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-[#2D2D2D] tracking-tight">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-[#2D2D2D]/70 leading-relaxed font-sans">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
