'use client';

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

interface GalleryItem {
  src: string;
  alt: string;
  category: "hair" | "color" | "bridal" | "nails" | "interior";
  title: string;
  span?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "https://www.image2url.com/r2/default/images/1777307741859-556a190c-8262-40d2-9daa-a8bd69a11415.png",
    alt: "Sculptural silhouette haircut and precision blowout",
    category: "hair",
    title: "Sleek Architectural Silhouette",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "https://i.ibb.co/gLrDP3Y5/Chat-GPT-Image-Apr-28-2026-12-51-11-AM.png",
    alt: "Bridal couture hair and veil drape in private suite",
    category: "bridal",
    title: "Bridal Privé Radiance",
    span: "col-span-1 md:col-span-1 row-span-2",
  },
  {
    src: "https://i.ibb.co/DDcytst4/Chat-GPT-Image-Apr-28-2026-04-40-10-AM.png",
    alt: "Dimensional French Balayage with cool gloss toning",
    category: "color",
    title: "French Balayage Melt",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "https://i.ibb.co/3mSJfP27/Chat-GPT-Image-Apr-27-2026-10-19-32-PM.png",
    alt: "Urbanity Salon modern luxury interior sanctuary",
    category: "interior",
    title: "The Salon Sanctuary",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "https://i.ibb.co/7NjTLpFP/Chat-GPT-Image-Apr-27-2026-10-16-43-PM.png",
    alt: "Russian gel manicure with gold foil accents",
    category: "nails",
    title: "Gilded Cuticle Precision",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "https://i.ibb.co/cc7W5wWV/Chat-GPT-Image-Apr-28-2026-12-25-17-AM.png",
    alt: "Master stylists and color directors at Urbanity Salon",
    category: "interior",
    title: "The Master Craftsmen",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    src: "https://www.image2url.com/r2/default/images/1777307940632-eb03efd8-14bd-4785-9f08-b041a273d709.png",
    alt: "Modern romantic bridal hair styling",
    category: "bridal",
    title: "Modern Romantic Couture",
    span: "col-span-1 md:col-span-1 row-span-2",
  },
  {
    src: "https://i.ibb.co/d4pJKsDN/Chat-GPT-Image-Apr-28-2026-12-31-58-AM.png",
    alt: "Bridal portrait in soft atmospheric lighting",
    category: "bridal",
    title: "Bridal Elegance & Silhouette",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "/gallery/hair1.png",
    alt: "Signature blowout with high-mirror reflection",
    category: "hair",
    title: "Signature Mirror Blowout",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "/gallery/hair2.png",
    alt: "Cranial balance haircut transformation",
    category: "hair",
    title: "Cranial Balance Crop",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "/gallery/hair3.png",
    alt: "Warm amber tone balayage",
    category: "color",
    title: "Amber Multi-Tonal Glaze",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "/gallery/hair4.png",
    alt: "Bio-keratin smoothing therapy results",
    category: "hair",
    title: "Bio-Keratin Restoration",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "https://i.ibb.co/ycKGwDwr/Chat-GPT-Image-Apr-27-2026-10-16-59-PM.png",
    alt: "Acoustic lounge area with private client seating",
    category: "interior",
    title: "Acoustic Tea Lounge",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    src: "https://i.ibb.co/qMrGgvMZ/Chat-GPT-Image-Apr-28-2026-12-22-32-AM.png",
    alt: "Single-client private styling station",
    category: "interior",
    title: "Private Styling Suite",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "https://i.ibb.co/LD6jj4DR/Chat-GPT-Image-Apr-28-2026-04-37-05-AM.png",
    alt: "Red carpet glamour hair and makeup finish",
    category: "bridal",
    title: "Red Carpet Architectural Finish",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
];

const CATEGORIES = [
  { id: "all", label: "ALL WORKS" },
  { id: "hair", label: "HAIR ARCHITECTURE" },
  { id: "color", label: "FRENCH BALAYAGE" },
  { id: "bridal", label: "BRIDAL PRIVÉ" },
  { id: "nails", label: "NAIL ART" },
  { id: "interior", label: "SALON SANCTUARY" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <main className="w-full bg-[#131313] text-[#e5e2e1] pt-16 sm:pt-20 md:pt-24 pb-14 sm:pb-20 md:pb-32 px-3 sm:px-6 md:px-12 selection:bg-[#c9a84c] selection:text-[#080808]">
      <div className="max-w-[1380px] mx-auto">
        {/* Header */}
        <section className="py-6 sm:py-10 md:py-16 text-center max-w-3xl mx-auto border-b border-[#c9a84c]/20">
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold block mb-2 sm:mb-3">
            01 / CURATED PORTFOLIO ARCHIVE
          </span>
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#e5e2e1] font-light leading-tight">
            The Living <span className="italic text-[#e6c364]">Silhouettes</span>
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#d0c5b2] mt-2.5 sm:mt-4 font-light leading-relaxed max-w-xl mx-auto">
            A photographic chronicle of cranial balance haircuts, dimensional French balayage, and serene bridal mornings
            crafted at our Bhagalpur salon.
          </p>
        </section>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 md:gap-4 overflow-x-auto py-3.5 sm:py-6 border-b border-[#c9a84c]/15 hide-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`whitespace-nowrap font-sans text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.16em] uppercase px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-[2px] transition-all border ${
                filter === cat.id
                  ? "border-[#c9a84c] bg-[#c9a84c] text-[#080808] font-bold"
                  : "border-transparent text-[#d0c5b2] hover:text-[#e5e2e1] hover:border-[#c9a84c]/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Asymmetric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mt-6 sm:mt-12 auto-rows-[140px] sm:auto-rows-[200px] md:auto-rows-[280px]">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.title + idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className={`group relative overflow-hidden bg-[#1c1b1b] rounded-[2px] border border-[#c9a84c]/20 ${
                item.span || ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.96]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-[#131313]/30 to-transparent opacity-60 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 sm:translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                <span className="font-mono text-[8px] sm:text-[9px] text-[#e6c364] tracking-widest uppercase block mb-0.5 sm:mb-1 font-medium">
                  {item.category.toUpperCase()}
                </span>
                <h3 className="font-display text-xs sm:text-base md:text-lg text-[#e5e2e1] font-normal leading-tight line-clamp-1 sm:line-clamp-none">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
