/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import Materials from "./components/Materials";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans text-[#2D2D2D] selection:bg-[#A67C52] selection:text-white antialiased">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* About Us: Tradition & Values */}
        <AboutUs />

        {/* Process: How We Work */}
        <Process />

        {/* Why Us / Benefits */}
        <WhyUs />

        {/* Timber Materials & Extras showcase */}
        <Materials />

        {/* Gallery / Realizations Portfolio */}
        <Gallery />

        {/* Client Testimonials / Social Proof */}
        <Testimonials />

        {/* Action-Oriented Contact Form */}
        <Contact />
      </main>

      {/* Professional Branded Footer */}
      <Footer />

      {/* Floating back to top button */}
      <ScrollToTop />
    </div>
  );
}
