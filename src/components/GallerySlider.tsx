import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X, Info } from "lucide-react";
import { SLIDER_IMAGES } from "../data";

export default function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Keyboard controls for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length : null));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % SLIDER_IMAGES.length : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <div id="gallery-slider-section" className="mt-24 pt-16 border-t border-[#A67C52]/10">
      
      {/* Slider Title and Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#A67C52] font-mono block">
            Zdjęcia z naszych realizacji
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2D2D2D] tracking-tight">
            Galeria
          </h3>
          <p className="text-sm text-[#2D2D2D]/70 max-w-2xl">
            Przewijaj i powiększaj zdjęcia
          </p>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-3 self-end">
          <button
            id="slider-prev-btn"
            onClick={prevSlide}
            className="w-11 h-11 rounded-full border border-[#A67C52]/20 bg-white hover:bg-[#F9F7F2] hover:border-[#A67C52]/40 text-[#2D2D2D] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:shadow-md"
            aria-label="Poprzednie zdjęcie"
          >
            <ChevronLeft className="w-5 h-5 text-[#A67C52]" />
          </button>
          <span className="text-xs font-mono text-[#2D2D2D]/60 select-none">
            {currentIndex + 1} / {SLIDER_IMAGES.length}
          </span>
          <button
            id="slider-next-btn"
            onClick={nextSlide}
            className="w-11 h-11 rounded-full border border-[#A67C52]/20 bg-white hover:bg-[#F9F7F2] hover:border-[#A67C52]/40 text-[#2D2D2D] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:shadow-md"
            aria-label="Następne zdjęcie"
          >
            <ChevronRight className="w-5 h-5 text-[#A67C52]" />
          </button>
        </div>
      </div>

      {/* Main Slider Viewport */}
      <div className="relative overflow-hidden rounded-3xl bg-[#F9F7F2] border border-[#A67C52]/10 p-4 sm:p-6 shadow-inner">
        <div className="relative aspect-[16/10] sm:aspect-[16/8] md:aspect-[21/9] w-full overflow-hidden rounded-2xl bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 80, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -80, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full group"
            >
              {/* Main Image */}
              <img
                src={SLIDER_IMAGES[currentIndex].image}
                alt={SLIDER_IMAGES[currentIndex].title}
                className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              
              {/* Soft dark vignette overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

              {/* Image indicator badge in top-left */}
              <div className="absolute top-4 left-4 z-10 inline-block text-[10px] uppercase font-mono tracking-widest bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full select-none border border-white/10">
                Zdjęcie {currentIndex + 1} z {SLIDER_IMAGES.length}
              </div>

              {/* Action overlays: Zoom Button */}
              <button
                id={`zoom-btn-${currentIndex}`}
                onClick={() => openLightbox(currentIndex)}
                className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm hover:bg-[#A67C52] text-[#A67C52] hover:text-white flex items-center justify-center shadow-lg transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
                title="Powiększ do oryginalnego rozmiaru"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Indicator Strip */}
        <div className="mt-4 flex gap-2 justify-center overflow-x-auto py-2 no-scrollbar">
          {SLIDER_IMAGES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-12 w-16 sm:h-16 sm:w-24 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                currentIndex === idx
                  ? "border-[#A67C52] scale-105 shadow-md"
                  : "border-transparent opacity-60 hover:opacity-90 hover:scale-102"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            id="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
          >
            {/* Upper control line */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-50">
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Podgląd oryginalnego rozmiaru</span>
              </div>
              <button
                id="lightbox-close-btn"
                onClick={closeLightbox}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
                title="Zamknij podgląd (Esc)"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Lightbox Content Area */}
            <div className="relative w-full max-w-5xl max-h-[80vh] flex items-center justify-center">
              
              {/* Left Arrow */}
              <button
                id="lightbox-prev-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev !== null ? (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length : null));
                }}
                className="absolute left-2 sm:left-4 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
                title="Poprzednie (Strzałka w lewo)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Lightbox Image Container */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-full max-h-[75vh] flex items-center justify-center select-none"
              >
                <img
                  src={SLIDER_IMAGES[lightboxIndex].image}
                  alt={SLIDER_IMAGES[lightboxIndex].title}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/5"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Right Arrow */}
              <button
                id="lightbox-next-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev !== null ? (prev + 1) % SLIDER_IMAGES.length : null));
                }}
                className="absolute right-2 sm:right-4 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
                title="Następne (Strzałka w prawo)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom info banner */}
            <div className="absolute bottom-6 text-center text-white/80 max-w-xl px-4 space-y-1">
              <span className="text-xs font-mono text-gray-400">
                Zdjęcie {lightboxIndex + 1} z {SLIDER_IMAGES.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
