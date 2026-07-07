/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Hammer } from "lucide-react";
import { COMPANY_INFO } from "../data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScrollSpy = () => {
      const sectionIds = ["o-nas", "proces", "materialy", "realizacje"];
      let currentSection = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is in the upper part of the viewport (e.g., top <= 150)
          // and the bottom is below the header (e.g., bottom > 150)
          if (rect.top <= 150 && rect.bottom > 150) {
            currentSection = id;
            break;
          }
        }
      }

      // Fallback: if we are at the very bottom of the page, highlight the last section (Gallery)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        currentSection = "realizacje";
      }

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      handleScrollSpy();
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set active section
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
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
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F9F7F2]/95 backdrop-blur-md shadow-md border-b border-[#A67C52]/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer group text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-[#A67C52] flex items-center justify-center text-[#F9F7F2] transition-transform duration-300 group-hover:scale-105">
              <Hammer className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2D2D2D] block">
                {COMPANY_INFO.brand}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#A67C52] -mt-1 block font-mono">
                Schody z pokolenia na pokolenie
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("o-nas")}
              className={`font-semibold tracking-widest uppercase text-xs transition-all duration-200 cursor-pointer relative py-1.5 ${
                activeSection === "o-nas"
                  ? "text-[#A67C52] font-bold"
                  : "text-[#2D2D2D]/80 hover:text-[#A67C52]"
              }`}
            >
              O nas
              {activeSection === "o-nas" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A67C52] rounded-full" />
              )}
            </button>
            <button
              onClick={() => scrollToSection("proces")}
              className={`font-semibold tracking-widest uppercase text-xs transition-all duration-200 cursor-pointer relative py-1.5 ${
                activeSection === "proces"
                  ? "text-[#A67C52] font-bold"
                  : "text-[#2D2D2D]/80 hover:text-[#A67C52]"
              }`}
            >
              Nasz Proces
              {activeSection === "proces" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A67C52] rounded-full" />
              )}
            </button>
            <button
              onClick={() => scrollToSection("materialy")}
              className={`font-semibold tracking-widest uppercase text-xs transition-all duration-200 cursor-pointer relative py-1.5 ${
                activeSection === "materialy"
                  ? "text-[#A67C52] font-bold"
                  : "text-[#2D2D2D]/80 hover:text-[#A67C52]"
              }`}
            >
              Materiały
              {activeSection === "materialy" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A67C52] rounded-full" />
              )}
            </button>
            <button
              onClick={() => scrollToSection("realizacje")}
              className={`font-semibold tracking-widest uppercase text-xs transition-all duration-200 cursor-pointer relative py-1.5 ${
                activeSection === "realizacje"
                  ? "text-[#A67C52] font-bold"
                  : "text-[#2D2D2D]/80 hover:text-[#A67C52]"
              }`}
            >
              Galeria
              {activeSection === "realizacje" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A67C52] rounded-full" />
              )}
            </button>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D2D2D]/80 hover:text-[#A67C52] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#A67C52]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="bg-[#A67C52] hover:bg-[#8B6239] text-[#F9F7F2] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Darmowa Wycena
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
              className="p-2 rounded-lg bg-[#A67C52]/10 text-[#A67C52]"
              aria-label="Zadzwoń do nas"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#2D2D2D] hover:text-[#A67C52]"
              aria-label="Otwórz menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F9F7F2] border-b border-[#A67C52]/10 shadow-lg px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <button
            onClick={() => scrollToSection("o-nas")}
            className={`block w-full text-left py-2 font-semibold text-base border-b border-gray-100 transition-all ${
              activeSection === "o-nas"
                ? "text-[#A67C52] pl-2 border-l-2 border-l-[#A67C52] border-b-gray-100 font-bold"
                : "text-[#2D2D2D] hover:text-[#A67C52]"
            }`}
          >
            O nas
          </button>
          <button
            onClick={() => scrollToSection("proces")}
            className={`block w-full text-left py-2 font-semibold text-base border-b border-gray-100 transition-all ${
              activeSection === "proces"
                ? "text-[#A67C52] pl-2 border-l-2 border-l-[#A67C52] border-b-gray-100 font-bold"
                : "text-[#2D2D2D] hover:text-[#A67C52]"
            }`}
          >
            Nasz Proces
          </button>
          <button
            onClick={() => scrollToSection("materialy")}
            className={`block w-full text-left py-2 font-semibold text-base border-b border-gray-100 transition-all ${
              activeSection === "materialy"
                ? "text-[#A67C52] pl-2 border-l-2 border-l-[#A67C52] border-b-gray-100 font-bold"
                : "text-[#2D2D2D] hover:text-[#A67C52]"
            }`}
          >
            Materiały
          </button>
          <button
            onClick={() => scrollToSection("realizacje")}
            className={`block w-full text-left py-2 font-semibold text-base border-b border-gray-100 transition-all ${
              activeSection === "realizacje"
                ? "text-[#A67C52] pl-2 border-l-2 border-l-[#A67C52] border-b-gray-100 font-bold"
                : "text-[#2D2D2D] hover:text-[#A67C52]"
            }`}
          >
            Galeria
          </button>
          <button
            onClick={() => scrollToSection("kontakt")}
            className="block w-full text-center bg-[#A67C52] text-[#F9F7F2] py-3 rounded-lg font-semibold text-base shadow-sm"
          >
            Darmowa Wycena
          </button>
        </div>
      )}
    </header>
  );
}
