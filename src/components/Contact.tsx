/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone, Mail, Clock, MapPin, Map, Navigation } from "lucide-react";
import { motion } from "motion/react";
import { COMPANY_INFO } from "../data";

export default function Contact() {
  const mapQuery = encodeURIComponent("Księdza Piotra Ściegiennego 6, 95-080 Tuszyn");
  const embedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const navigationUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <section id="kontakt" className="py-20 bg-[#F9F7F2] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Panel: Left (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4 text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A67C52] font-mono block">
                Kontakt i Siedziba
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2D2D] tracking-tight">
                Twoje nowe schody zaczynają się od <span className="italic text-[#A67C52]">jednej rozmowy</span>
              </h2>
              <p className="text-sm sm:text-base text-[#2D2D2D]/70 font-sans">
                Chcesz poznać wstępny koszt, skonsultować pomysł lub zaprosić nas na darmowy pomiar laserowy? Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami bezpośrednio lub odwiedź naszą stolarnię.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 gap-4 pt-4">
              {/* Phone Card */}
              <motion.a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#A67C52]/5 hover:border-[#A67C52]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#A67C52]/10 text-[#A67C52] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs text-[#2D2D2D]/55 uppercase tracking-wider font-mono">Zadzwoń bezpośrednio</span>
                  <span className="text-base sm:text-lg font-bold text-[#2D2D2D]">{COMPANY_INFO.phone}</span>
                </div>
              </motion.a>

              {/* Email Card */}
              <motion.a
                href={`mailto:${COMPANY_INFO.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#A67C52]/5 hover:border-[#A67C52]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#A67C52]/10 text-[#A67C52] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs text-[#2D2D2D]/55 uppercase tracking-wider font-mono">Napisz e-mail</span>
                  <span className="text-base sm:text-lg font-bold text-[#2D2D2D]">{COMPANY_INFO.email}</span>
                </div>
              </motion.a>

              {/* Working Hours Card */}
              <div className="flex items-center gap-4 bg-white/50 p-5 rounded-2xl border border-dashed border-[#A67C52]/20">
                <div className="w-12 h-12 rounded-xl bg-[#A67C52]/5 text-[#A67C52]/70 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs text-[#2D2D2D]/55 uppercase tracking-wider font-mono">Godziny pracy</span>
                  <span className="text-sm font-semibold text-[#2D2D2D]">{COMPANY_INFO.workingHours}</span>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-center gap-4 bg-white/50 p-5 rounded-2xl border border-dashed border-[#A67C52]/20">
                <div className="w-12 h-12 rounded-xl bg-[#A67C52]/5 text-[#A67C52]/70 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs text-[#2D2D2D]/55 uppercase tracking-wider font-mono">Siedziba firmy</span>
                  <span className="text-sm font-semibold text-[#2D2D2D]">{COMPANY_INFO.address}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Map Container: Right (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-[#A67C52]/10 flex flex-col h-full min-h-[450px] lg:min-h-[550px]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
              <div className="text-left">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2D2D2D] flex items-center gap-2">
                  <Map className="w-5 h-5 text-[#A67C52]" />
                  Lokalizacja Stolarni
                </h3>
                <p className="text-xs text-gray-500 mt-1">Odwiedź nas i zobacz próbki materiałów na żywo</p>
              </div>
              <a
                href={navigationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#A67C52] hover:bg-[#8B6239] text-[#F9F7F2] font-bold uppercase tracking-widest text-[10px] px-4 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer self-start sm:self-center shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Wyznacz trasę</span>
              </a>
            </div>

            {/* Interactive Map Frame */}
            <div className="flex-1 w-full rounded-2xl overflow-hidden border border-gray-100 shadow-inner relative bg-gray-50 min-h-[280px]">
              <iframe
                title="Google Maps Siedziba Stolarni"
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
