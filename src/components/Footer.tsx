/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Hammer, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D2D2D] text-white pt-16 pb-8 border-t-4 border-[#A67C52] relative overflow-hidden">
      {/* Dynamic light wood texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10 pb-12">
          
          {/* Company Brief: (5 cols) */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-lg bg-[#A67C52] flex items-center justify-center text-white">
                <Hammer className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  {COMPANY_INFO.brand}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#A67C52] -mt-1 block font-mono">
                  Schody z pokolenia na pokolenie
                </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm font-sans">
              Od 1994 roku projektujemy, produkujemy i montujemy schody drewniane, które stają się sercem domów naszych Klientów. Łączymy rodzinną tradycję stolarstwa z nowoczesnymi technologiami.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#A67C52] text-white flex items-center justify-center transition-all shadow-sm"
                aria-label="Śledź nas na Facebooku"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#A67C52] text-white flex items-center justify-center transition-all shadow-sm"
                aria-label="Śledź nas na Instagramie"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Practical Links: (3 cols) */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider font-mono text-[#A67C52]">
              Szybka nawigacja
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => document.getElementById("o-nas")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-[#A67C52] transition-colors cursor-pointer"
                >
                  O naszej stolarni
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("proces")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-[#A67C52] transition-colors cursor-pointer"
                >
                  Jak pracujemy (Proces)
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("materialy")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-[#A67C52] transition-colors cursor-pointer"
                >
                  Nasze drewno i dodatki
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("realizacje")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-[#A67C52] transition-colors cursor-pointer"
                >
                  Galeria realizacji
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Working Hours: (4 cols) */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider font-mono text-[#A67C52]">
              Kontakt i adres
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A67C52] shrink-0 mt-1" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A67C52] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`} className="hover:text-[#A67C52]">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#A67C52] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#A67C52]">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="pt-2 border-t border-white/5 text-xs text-gray-400">
                <span className="block font-bold uppercase tracking-wider font-mono text-[#A67C52] mb-1">Darmowa wycena i pomiar</span>
                <span>Skontaktuj się, przyjedziemy na budowę w dogodnym terminie.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal and signatures */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <div className="text-left">
            <p>© {currentYear} {COMPANY_INFO.name}. Wszelkie prawa zastrzeżone.</p>
            <p className="mt-1 text-[10px] text-gray-500">Projektujemy i budujemy z pasją od 1994 roku.</p>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-[#A67C52] transition-colors font-mono">Polityka Prywatności</span>
            <span className="hover:text-[#A67C52] transition-colors font-mono">Gwarancja Jakości</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
