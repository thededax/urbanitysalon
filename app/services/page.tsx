"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ServiceItem {
  id: string;
  title: string;
  category: "hair" | "color" | "keratin" | "skin" | "nails" | "body" | "bridal";
  desc: string;
  duration: string;
  seniorPrice: string;
  directorPrice: string;
  botanicalNotes: string;
}

const ALL_SERVICES: ServiceItem[] = [
  {
    id: "haircut",
    title: "Precision Haircut & Cranial Architecture",
    category: "hair",
    desc: "Masterfully sculpted cut tailored to your cranial geometry, hair texture, and natural fall. Includes botanical shampoo & signature blowout.",
    duration: "60 Mins",
    seniorPrice: "₹500+",
    directorPrice: "₹1,200+",
    botanicalNotes: "Japanese steel dry-shear detailing & organic tea-tree rinse.",
  },
  {
    id: "balayage",
    title: "Dimensional French Balayage & Toning Glaze",
    category: "color",
    desc: "Custom hand-painted French lighteners with micro-foil depth placement and bond-repairing peptides for seamless, lived-in luxury.",
    duration: "180 Mins",
    seniorPrice: "₹3,500+",
    directorPrice: "₹6,500+",
    botanicalNotes: "Ammonia-free French lighteners with anti-yellow cool gloss glaze.",
  },
  {
    id: "keratin",
    title: "Bio-Keratin & Silk Protein Smoothing Therapy",
    category: "keratin",
    desc: "Formaldehyde-free bio-identical keratin infusion that restructures the hair cortex, eliminates frizz, and confers mirror-like gloss for 4+ months.",
    duration: "150 Mins",
    seniorPrice: "₹4,500+",
    directorPrice: "₹7,500+",
    botanicalNotes: "Pure silk amino acids & formaldehyde-free botanical smoothing polymers.",
  },
  {
    id: "scalp",
    title: "Scalp Trichology & Botanical Stem-Cell Ritual",
    category: "keratin",
    desc: "Clinical scalp detox with micro-exfoliating botanical acids, ultrasonic lymphatic drainage, and red-light follicule stimulation.",
    duration: "75 Mins",
    seniorPrice: "₹2,200+",
    directorPrice: "₹3,500+",
    botanicalNotes: "Organic rosemary stem-cells & microcirculation botanical tea extracts.",
  },
  {
    id: "hydra-facial",
    title: "Hydra-Radiance Cellular Facial",
    category: "skin",
    desc: "Deep multi-stage hydration ritual featuring ultrasonic transdermal infusion, contouring massage, and antioxidant lymphatic relief.",
    duration: "60 Mins",
    seniorPrice: "₹2,500+",
    directorPrice: "₹3,800+",
    botanicalNotes: "Triple-molecular hyaluronic acid & cold-pressed rosehip seed extract.",
  },
  {
    id: "manicure",
    title: "Luxury Russian Gel Manicure & Hand Therapy",
    category: "nails",
    desc: "Meticulous diamond-bit dry cuticle contouring, strengthening keratin base coat, and chip-resistant non-toxic Italian gel polish.",
    duration: "60 Mins",
    seniorPrice: "₹1,200+",
    directorPrice: "₹1,800+",
    botanicalNotes: "Non-toxic 10-free formulas & organic almond cuticle oil soak.",
  },
  {
    id: "glamour",
    title: "Red Carpet Evening Couture Makeup",
    category: "bridal",
    desc: "High-definition airbrushed base, editorial eye sculpting, and camera-calibrated contouring designed to look flawless under flash photography.",
    duration: "90 Mins",
    seniorPrice: "₹3,500+",
    directorPrice: "₹5,500+",
    botanicalNotes: "Waterproof silicone-free minerals & silk mink lash application.",
  },
  {
    id: "massage",
    title: "Swedish Restorative Aromatherapy Therapy",
    category: "body",
    desc: "Full-body relaxation massage using long glide strokes and custom-blended essential oils to alleviate tension and improve microcirculation.",
    duration: "60 Mins",
    seniorPrice: "₹4,000+",
    directorPrice: "₹5,500+",
    botanicalNotes: "Cold-pressed jojoba carrier oil infused with lavender & cedarwood.",
  },
  {
    id: "bridal-day",
    title: "Bridal Couture Day Ritual",
    category: "bridal",
    desc: "Private bridal suite access, complete hair architecture, HD luxury makeup, and bespoke veil/jewelry draping with dedicated team support.",
    duration: "240 Mins",
    seniorPrice: "₹12,000+",
    directorPrice: "₹18,000+",
    botanicalNotes: "Exclusively 1 bride per morning with private lounge amenities.",
  },
];

const CATEGORIES = [
  { id: "all", label: "ALL TREATMENTS" },
  { id: "hair", label: "HAIR ARCHITECTURE" },
  { id: "color", label: "COLOR & BALAYAGE" },
  { id: "keratin", label: "KERATIN & SCALP" },
  { id: "skin", label: "AESTHETICS & SKIN" },
  { id: "nails", label: "NAILS" },
  { id: "bridal", label: "BRIDAL & GLAMOUR" },
  { id: "body", label: "WELLNESS & BODY" },
];

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [tier, setTier] = useState<"Senior Stylist" | "Artistic Director">("Artistic Director");

  const filtered =
    activeFilter === "all" ? ALL_SERVICES : ALL_SERVICES.filter((s) => s.category === activeFilter);

  return (
    <main className="w-full bg-[#131313] text-[#e5e2e1] pt-28 pb-32 px-6 md:px-12 selection:bg-[#c9a84c] selection:text-[#080808]">
      <div className="max-w-[1380px] mx-auto">
        {/* Editorial Page Header */}
        <header className="py-12 md:py-20 text-center max-w-3xl mx-auto border-b border-[#c9a84c]/20">
          <span className="font-sans text-[11px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold block mb-3">
            01 / COMPREHENSIVE RITUAL DIRECTORY
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#e5e2e1] font-light leading-tight">
            Artisanal Hair &amp; <span className="italic text-[#e6c364]">Aesthetic Rituals</span>
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#d0c5b2] mt-4 font-light leading-relaxed max-w-2xl mx-auto">
            Every service is formulated with medical-grade botanicals, precision cranial geometry, and unhurried 1-on-1
            master attention at our Tilkamanjhi sanctuary.
          </p>
        </header>

        {/* Sticky Filters & Stylist Tier Switch */}
        <div className="sticky top-20 z-40 bg-[#131313]/95 backdrop-blur-md py-6 border-b border-[#c9a84c]/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`whitespace-nowrap font-sans text-[10px] md:text-[11px] tracking-[0.18em] uppercase px-4 py-2 rounded-[2px] transition-all border ${
                  activeFilter === cat.id
                    ? "border-[#c9a84c] bg-[#c9a84c] text-[#080808] font-bold"
                    : "border-transparent text-[#d0c5b2] hover:text-[#e5e2e1] hover:border-[#c9a84c]/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Tier Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="font-sans text-[10px] tracking-[0.2em] text-[#d0c5b2] uppercase">
              TIER:
            </span>
            <div className="inline-flex bg-[#1c1b1b] p-1 border border-[#c9a84c]/30 rounded-[2px]">
              <button
                onClick={() => setTier("Senior Stylist")}
                className={`font-sans text-[10px] md:text-[11px] tracking-[0.16em] uppercase px-3.5 py-1.5 rounded-[2px] transition-all ${
                  tier === "Senior Stylist"
                    ? "bg-[#c9a84c] text-[#080808] font-bold"
                    : "text-[#d0c5b2] hover:text-[#e5e2e1]"
                }`}
              >
                SENIOR STYLIST
              </button>
              <button
                onClick={() => setTier("Artistic Director")}
                className={`font-sans text-[10px] md:text-[11px] tracking-[0.16em] uppercase px-3.5 py-1.5 rounded-[2px] transition-all ${
                  tier === "Artistic Director"
                    ? "bg-[#c9a84c] text-[#080808] font-bold"
                    : "text-[#d0c5b2] hover:text-[#e5e2e1]"
                }`}
              >
                ARTISTIC DIRECTOR
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Ritual List Layout */}
        <div className="mt-8 divide-y divide-[#c9a84c]/20">
          <AnimatePresence mode="wait">
            {filtered.map((service) => {
              const price = tier === "Senior Stylist" ? service.seniorPrice : service.directorPrice;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group hover:bg-[#1c1b1b]/60 px-4 -mx-4 rounded-[2px] transition-luxury"
                >
                  {/* Service Name & Duration */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[10px] text-[#e6c364] uppercase tracking-widest font-medium">
                        {service.duration}
                      </span>
                      <span className="text-[#c9a84c]/40">•</span>
                      <span className="font-sans text-[10px] text-[#d0c5b2] uppercase tracking-widest">
                        {service.category}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl text-[#e5e2e1] group-hover:text-[#e6c364] transition-colors font-normal">
                      {service.title}
                    </h2>
                  </div>

                  {/* Description & Botanical Notes */}
                  <div className="lg:col-span-4 space-y-2">
                    <p className="font-sans text-xs md:text-sm text-[#d0c5b2] font-light leading-relaxed">
                      {service.desc}
                    </p>
                    <p className="font-sans text-[11px] text-[#e6c364]/80 italic">
                      Formulation: {service.botanicalNotes}
                    </p>
                  </div>

                  {/* Price & Action */}
                  <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#c9a84c]/15">
                    <div className="text-left lg:text-right">
                      <span className="font-sans text-[9px] text-[#d0c5b2] uppercase tracking-wider block">
                        {tier}
                      </span>
                      <span className="font-mono text-2xl text-[#e6c364] font-medium tabular-numbers">
                        {price}
                      </span>
                    </div>

                    <Link
                      href={`/#concierge-booking`}
                      className="font-sans text-[10px] tracking-[0.2em] uppercase bg-transparent text-[#e5e2e1] border border-[#c9a84c]/40 group-hover:border-[#e6c364] group-hover:bg-[#c9a84c] group-hover:text-[#080808] px-4 py-3 rounded-[2px] transition-all whitespace-nowrap font-medium"
                    >
                      RESERVE →
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Diagnostic Consultation Callout */}
        <div className="mt-20 p-8 md:p-14 bg-[#1c1b1b] border border-[#c9a84c]/25 rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="font-sans text-[10px] tracking-[0.22em] text-[#e6c364] uppercase font-semibold block mb-2">
              UNSURE WHICH RITUAL SUITS YOUR FIBER?
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-[#e5e2e1]">
              Request a 15-Minute Diagnostic Consultation
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#d0c5b2] mt-2 font-light leading-relaxed">
              Connect directly with Master Stylist Kiran Kishore or our Senior Colorists. We analyze your hair porosity,
              skin undertones, and face shape prior to reserving your full ritual.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/#concierge-booking"
              className="text-center font-sans text-xs tracking-[0.18em] uppercase bg-[#c9a84c] text-[#080808] px-8 py-4 rounded-[2px] font-bold hover:bg-[#ffe08f] transition-all shimmer-btn"
            >
              BOOK DIAGNOSTIC SESSION
            </Link>
            <a
              href="https://wa.me/918578060606?text=Hello%20Urbanity%20Salon,%20I%20would%20like%20to%20consult%20with%20a%20master%20stylist%20regarding%20the%20best%20treatment%20for%20my%20hair."
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-sans text-xs tracking-[0.18em] uppercase border border-[#c9a84c] text-[#e6c364] hover:bg-[#c9a84c] hover:text-[#080808] px-6 py-4 rounded-[2px] transition-all inline-flex items-center justify-center gap-2 font-medium"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              WHATSAPP CONCIERGE
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
