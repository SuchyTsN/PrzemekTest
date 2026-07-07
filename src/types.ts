/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StairType {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  popularity: number; // 1-5 stars
  basePriceRange: string;
  image: string;
}

export interface MaterialType {
  id: string;
  name: string;
  scientificName?: string;
  character: string;
  durability: string; // e.g. "Ekstremalna", "Wysoka"
  description: string;
  features: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  details: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  type: string;
  material: string;
  location: string;
  image: string;
  category: "modern" | "classic" | "loft";
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  stairsBuilt: string;
  rating: number;
  text: string;
  date: string;
}

export interface SliderImageItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface ContactForm {
  name: string;
  phone: string;
  city: string;
  stairType: string;
  woodType: string;
  message: string;
}
