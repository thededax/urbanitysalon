"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

// Ritual Data Definition
interface RitualItem {
  id: string;
  name: string;
  category: "cuts" | "color" | "keratin" | "skin" | "bridal";
  duration: string;
  formulation: string;
  seniorPrice: string;
  directorPrice: string;
  image: string;
  caption: string;
  benefits: string[];
}

const RITUALS: RitualItem[] = [
  {
    id: "precision-cut",
    name: "Precision Haircut & Cranial Architecture",
    category: "cuts",
    duration: "60 Mins",
    formulation: "Facial silhouette mapping, Japanese steel dry-shear detailing, scalp cleanse & signature blowout finish.",
    seniorPrice: "₹500+",
    directorPrice: "₹1,200+",
    image: "https://www.image2url.com/r2/default/images/1777307741859-556a190c-8262-40d2-9daa-a8bd69a11415.png",
    caption: "Cranial balance analysis & natural movement sculpting.",
    benefits: ["Custom Cranial Face-Mapping", "Japanese Steel Detailing", "Botanical Fiber Wash"],
  },
  {
    id: "french-balayage",
    name: "Dimensional French Balayage & Glaze",
    category: "color",
    duration: "180 Mins",
    formulation: "Freehand hand-painted gradient, micro-foil architecture, bond-protecting peptides & bespoke tone glaze.",
    seniorPrice: "₹3,500+",
    directorPrice: "₹6,500+",
    image: "https://i.ibb.co/DDcytst4/Chat-GPT-Image-Apr-28-2026-04-40-10-AM.png",
    caption: "Seamless sun-kissed depth with zero harsh demarcation.",
    benefits: ["Ammonia-Free Lighteners", "Bio-Peptide Bond Repair", "Custom Cool/Warm Glaze"],
  },
  {
    id: "bio-keratin",
    name: "Bio-Keratin & Silk Protein Infusion",
    category: "keratin",
    duration: "150 Mins",
    formulation: "Formaldehyde-free bio-identical keratin and silk amino infusion sealing hair cuticle for 4+ months of glassy shine.",
    seniorPrice: "₹4,500+",
    directorPrice: "₹7,500+",
    image: "https://i.ibb.co/dwfWDqpj/Chat-GPT-Image-Apr-28-2026-12-58-09-AM.png",
    caption: "Frizz eradication with restored fiber density and elasticity.",
    benefits: ["100% Formaldehyde-Free", "High-Humidity Resistance", "Glass-Coat Mirror Finish"],
  },
  {
    id: "scalp-trichology",
    name: "Scalp Trichology & Botanical Stem-Cell Ritual",
    category: "keratin",
    duration: "75 Mins",
    formulation: "Micro-exfoliating scalp peel, ultrasonic dermal massage, red-light stimulation & rosemary stem-cell serum.",
    seniorPrice: "₹2,200+",
    directorPrice: "₹3,500+",
    image: "https://www.image2url.com/r2/default/images/1777307634569-bea49379-40fc-4802-a92a-32884a979934.png",
    caption: "Cellular rejuvenation for stressed follicles and hair thinning.",
    benefits: ["Cranial Lymphatic Drainage", "Rosemary Botanical Actives", "Microcirculation Activation"],
  },
  {
    id: "hydra-radiance",
    name: "Hydra-Radiance Cellular Facial",
    category: "skin",
    duration: "60 Mins",
    formulation: "Ultrasonic infusion of multi-molecular hyaluronic acids, botanical antioxidants, and facial sculpt massage.",
    seniorPrice: "₹2,500+",
    directorPrice: "₹3,800+",
    image: "https://i.ibb.co/3mSJfP27/Chat-GPT-Image-Apr-27-2026-10-19-32-PM.png",
    caption: "Instant lit-from-within glow with non-comedogenic active hydration.",
    benefits: ["Triple-Weight Hyaluronic Acid", "Lymphatic Contour Massage", "Instant Dewy Glow"],
  },
  {
    id: "russian-manicure",
    name: "Luxury Russian Manicure & Nail Architecture",
    category: "skin",
    duration: "60 Mins",
    formulation: "E-file dry cuticle precision, keratin reinforcement layer, and chip-resistant non-toxic gel glaze.",
    seniorPrice: "₹1,200+",
    directorPrice: "₹1,800+",
    image: "https://i.ibb.co/7NjTLpFP/Chat-GPT-Image-Apr-27-2026-10-16-43-PM.png",
    caption: "Flawless cuticle contouring lasting up to 4 full weeks.",
    benefits: ["Diamond-Bit Dry Detailing", "Strengthening Keratin Base", "High-Shine Italian Glaze"],
  },
  {
    id: "evening-couture",
    name: "Red Carpet Evening Couture Glamour",
    category: "bridal",
    duration: "90 Mins",
    formulation: "Airbrushed HD complexion balancing, editorial eye sculpting, and humidity-resistant structural hair styling.",
    seniorPrice: "₹3,500+",
    directorPrice: "₹5,500+",
    image: "https://i.ibb.co/LD6jj4DR/Chat-GPT-Image-Apr-28-2026-04-37-05-AM.png",
    caption: "High-fashion photographic finish designed to stun in any lighting.",
    benefits: ["Waterproof Airbrush Formula", "Structural Editorial Updo", "Individual Mink Lashes"],
  },
  {
    id: "bridal-couture-day",
    name: "Bespoke Bridal Couture Day Ritual",
    category: "bridal",
    duration: "240 Mins",
    formulation: "Private suite access, dedicated master team, full couture hair architecture, HD luxury makeup & veil draping.",
    seniorPrice: "₹12,000+",
    directorPrice: "₹18,000+",
    image: "https://i.ibb.co/gLrDP3Y5/Chat-GPT-Image-Apr-28-2026-12-51-11-AM.png",
    caption: "The pinnacle bridal experience. Exclusively 1 bride per morning.",
    benefits: ["Private Privé Suite Access", "Artistic Director Dedicated Team", "Full Trial & Swatch Matching"],
  },
];

// Testimonials Data
const TESTIMONIALS = [
  {
    quote: "They do not merely alter your hair; they architect a silhouette that completely reframes how you carry yourself. An absolute masterclass in quiet architectural luxury.",
    name: "Eleanor V.",
    designation: "Editorial Director",
    highlight: "Architectural Silhouette",
  },
  {
    quote: "The unhurried consultation and diagnostic precision are unlike anything else. Kiran and his team transformed my color with such organic dimension and zero damage.",
    name: "Ayesha K.",
    designation: "Creative Consultant",
    highlight: "Dimensional French Balayage",
  },
  {
    quote: "Every visit is a tranquil sanctuary retreat. The acoustic calm, the bespoke formulations, and the master stylists make it the only atelier I trust with my aesthetic.",
    name: "Priya S.",
    designation: "Founder, Luxe Living",
    highlight: "Unhurried Sanctuary",
  },
];

// Lookbook Curated Works
const LOOKBOOK_ITEMS = [
  {
    src: "https://www.image2url.com/r2/default/images/1777307741859-556a190c-8262-40d2-9daa-a8bd69a11415.png",
    title: "Sculptural Silhouette",
    tag: "HAIR ARCHITECTURE",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "https://i.ibb.co/gLrDP3Y5/Chat-GPT-Image-Apr-28-2026-12-51-11-AM.png",
    title: "Couture Bridal Privé",
    tag: "BRIDAL COUTURE",
    span: "col-span-1 md:col-span-1 row-span-2",
  },
  {
    src: "https://i.ibb.co/DDcytst4/Chat-GPT-Image-Apr-28-2026-04-40-10-AM.png",
    title: "French Balayage Tone",
    tag: "ARTISANAL COLOR",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "https://i.ibb.co/3mSJfP27/Chat-GPT-Image-Apr-27-2026-10-19-32-PM.png",
    title: "The Atelier Sanctuary",
    tag: "INTERIOR ARCHITECTURE",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "https://i.ibb.co/7NjTLpFP/Chat-GPT-Image-Apr-27-2026-10-16-43-PM.png",
    title: "Gilded Manicure Precision",
    tag: "AESTHETICS",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "https://i.ibb.co/cc7W5wWV/Chat-GPT-Image-Apr-28-2026-12-25-17-AM.png",
    title: "The Master Craftsmen",
    tag: "ARTISTIC DIRECTORS",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

export default function HomePage() {
  // State for Ritual Menu
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [stylistTier, setStylistTier] = useState<"Senior Stylist" | "Artistic Director">("Artistic Director");
  const [hoveredRitual, setHoveredRitual] = useState<RitualItem>(RITUALS[0]);
  const [expandedMobileRitualId, setExpandedMobileRitualId] = useState<string | null>(null);

  // State for Concierge Reservation Suite
  const [appointmentType, setAppointmentType] = useState<"Full Ritual Reservation" | "15-Min Private Diagnostic Consultation">(
    "Full Ritual Reservation"
  );
  const [reservationTier, setReservationTier] = useState<string>("Artistic Director");
  const [selectedRitualName, setSelectedRitualName] = useState<string>(RITUALS[0].name);
  const [preferredDate, setPreferredDate] = useState<string>("");
  const [preferredTimeWindow, setPreferredTimeWindow] = useState<string>("Afternoon Atelier (1:00 PM – 5:00 PM)");
  const [clientName, setClientName] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [clientNotes, setClientNotes] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const conciergeRef = useRef<HTMLDivElement>(null);

  // Filter Rituals
  const filteredRituals =
    activeCategory === "all" ? RITUALS : RITUALS.filter((r) => r.category === activeCategory);

  // Trigger booking from ritual row
  const handleReserveRitual = (ritual: RitualItem) => {
    setSelectedRitualName(ritual.name);
    setReservationTier(stylistTier);
    setAppointmentType("Full Ritual Reservation");
    conciergeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Trigger booking from Artistic Director card
  const handleRequestDirector = (directorName: string, tier: string) => {
    setReservationTier(tier);
    setClientNotes(`Preferred Specialist requested: ${directorName}.`);
    conciergeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Generate WhatsApp Direct Pre-filled Link
  const whatsAppMessage = encodeURIComponent(
    `Hello Urbanity Salon Concierge,\n\nI would like to request a private reservation:\n` +
      `• Type: ${appointmentType}\n` +
      `• Tier: ${reservationTier}\n` +
      `• Ritual: ${selectedRitualName}\n` +
      `• Date: ${preferredDate || "Earliest Available"}\n` +
      `• Window: ${preferredTimeWindow}\n` +
      `• Client Name: ${clientName || "Valued Client"}\n` +
      `• Phone: ${clientPhone || "Provided on arrival"}\n` +
      (clientNotes ? `• Notes: ${clientNotes}\n` : "") +
      `\nPlease confirm availability at your Tilkamanjhi salon.`
  );

  return (
    <main className="w-full bg-[#131313] text-[#e5e2e1] overflow-hidden selection:bg-[#c9a84c] selection:text-[#080808]">
      {/* ============================================================ */}
      {/* 1. EDITORIAL ATELIER HERO (MINIMALIST LUXURY BACKGROUND)     */}
      {/* ============================================================ */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 pb-8 sm:pt-24 sm:pb-12 lg:py-28 px-4 sm:px-6 md:px-12 overflow-hidden bg-[#131313] border-b border-[#c9a84c]/20">
        {/* Full-Bleed Editorial Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Urbanity Atelier Beauty Sanctuary"
            fill
            priority
            className="object-cover object-[75%_center] sm:object-[80%_center] lg:object-right filter brightness-[0.88] contrast-[1.04]"
          />
        </div>

        {/* Seamless Multi-Layer Section Blending Overlays */}
        {/* 1. Left-to-Right Obsidian Velvet Vignette: Ensures 100% Text Legibility on Left & Glows Model on Right */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#131313] via-[#131313]/92 sm:via-[#131313]/80 lg:via-[#131313]/40 to-transparent pointer-events-none" />

        {/* 2. Top Header Transition Blend */}
        <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#131313] via-[#131313]/70 to-transparent z-[1] pointer-events-none" />

        {/* 3. Bottom Seamless Blend into Continuous Luxury Runway Ticker */}
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-[#0e0e0e] via-[#131313]/80 to-transparent z-[1] pointer-events-none" />

        {/* 4. Ambient Champagne-Gold Warmth Overlay */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_20%_40%,rgba(201,168,76,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(230,195,100,0.08)_0%,transparent_70%)] z-[1] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Typographic Editorial Narrative & Micro-Highlights */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 md:gap-7 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Micro-Overline Tracker */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-6 sm:w-8 h-[1px] bg-[#e6c364]" />
              <span className="font-sans text-[10px] sm:text-[11px] md:text-xs tracking-[0.22em] sm:tracking-[0.24em] text-[#e6c364] uppercase font-semibold">
                URBANITY • BESPOKE HAIR ARCHITECTURE
              </span>
            </div>

            {/* Cormorant Garamond Display Headline */}
            <h1 className="font-display text-[36px] sm:text-[52px] md:text-[68px] lg:text-[84px] leading-[0.96] text-[#e5e2e1] tracking-[-0.02em] font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              Unleash Your <br />
              <span className="italic font-normal text-[#e6c364]">Inner Radiance.</span>
            </h1>

            {/* Concise Editorial Subcopy */}
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#d0c5b2] max-w-xl font-light leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
              Bhagalpur&apos;s sanctuary for cranial silhouette architecture, French dimensional balayage, and clinical scalp trichology—tailored unhurriedly to your unique presence.
            </p>

            {/* Dual Pill Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <Link
                href="#concierge-booking"
                className="inline-flex items-center justify-center font-sans text-[11px] sm:text-xs tracking-[0.16em] uppercase bg-[#e6c364] text-[#131313] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold hover:bg-[#ffe08f] transition-all duration-300 shadow-[0_4px_22px_rgba(230,195,100,0.28)] hover:scale-[1.02]"
              >
                RESERVE CONSULTATION
              </Link>
              <Link
                href="#ritual-menu"
                className="inline-flex items-center justify-center font-sans text-[11px] sm:text-xs tracking-[0.16em] uppercase border border-[#c9a84c]/60 text-[#e5e2e1] hover:border-[#e6c364] hover:text-[#e6c364] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 hover:bg-[#c9a84c]/15 backdrop-blur-sm"
              >
                EXPLORE RITUALS →
              </Link>
            </div>

            {/* 3 Horizontal Micro-Feature Highlights (Compact on Mobile) */}
            <div className="pt-4 sm:pt-6 border-t border-[#c9a84c]/20 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-6">
              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-1.5 p-2.5 sm:p-0 bg-[#1c1b1b]/50 sm:bg-transparent rounded-[2px] border border-[#c9a84c]/10 sm:border-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl text-[#e6c364] shrink-0">psychology</span>
                <div>
                  <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#e5e2e1] block">
                    Diagnostic Precision
                  </span>
                  <p className="font-sans text-[10px] sm:text-[11px] text-[#d0c5b2]/85 leading-tight sm:leading-normal mt-0.5">
                    Cranial balance analysis &amp; facial silhouette mapping.
                  </p>
                </div>
              </div>

              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-1.5 p-2.5 sm:p-0 bg-[#1c1b1b]/50 sm:bg-transparent rounded-[2px] border border-[#c9a84c]/10 sm:border-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl text-[#e6c364] shrink-0">schedule</span>
                <div>
                  <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#e5e2e1] block">
                    Unhurried Sanctuary
                  </span>
                  <p className="font-sans text-[10px] sm:text-[11px] text-[#d0c5b2]/85 leading-tight sm:leading-normal mt-0.5">
                    Exclusive 1-on-1 master stylist sessions with zero rush.
                  </p>
                </div>
              </div>

              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-1.5 p-2.5 sm:p-0 bg-[#1c1b1b]/50 sm:bg-transparent rounded-[2px] border border-[#c9a84c]/10 sm:border-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl text-[#e6c364] shrink-0">eco</span>
                <div>
                  <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#e5e2e1] block">
                    Botanical Actives
                  </span>
                  <p className="font-sans text-[10px] sm:text-[11px] text-[#d0c5b2]/85 leading-tight sm:leading-normal mt-0.5">
                    Formaldehyde-free keratin &amp; bio-peptide bond integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Social & Coordinates Micro-Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[10px] sm:text-[11px] font-sans text-[#d0c5b2]/80 tracking-widest uppercase">
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e6c364] transition-colors"
                >
                  INSTAGRAM
                </a>
                <span>•</span>
                <a
                  href="https://wa.me/918578060606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e6c364] transition-colors"
                >
                  WHATSAPP
                </a>
                <span>•</span>
                <a href="tel:+918578060606" className="hover:text-[#e6c364] transition-colors">
                  +91 8578060606
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-[#e6c364]">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>TILKAMANJHI, BHAGALPUR</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Breathing Space for Luminous Portrait & Minimalist Curatorial Badge */}
          <div className="hidden lg:flex lg:col-span-5 h-full min-h-[480px] flex-col justify-end items-end pb-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center gap-2.5 px-4 py-2 bg-[#131313]/70 backdrop-blur-md border border-[#c9a84c]/25 rounded-full text-[10px] font-sans tracking-[0.22em] text-[#e6c364] uppercase shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6c364] animate-pulse" />
              <span>EDITORIAL ATELIER EDITION</span>
              <span className="text-[#d0c5b2]/40">•</span>
              <span className="text-[#e5e2e1]">AW26</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 1.5. LUXURY CONTINUOUS RUNWAY TICKER                        */}
      {/* ============================================================ */}
      <div className="relative w-full overflow-hidden border-y border-[#c9a84c]/20 bg-[#0e0e0e] py-3.5 select-none">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap font-sans text-[11px] md:text-xs tracking-[0.24em] text-[#d0c5b2] uppercase">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-[#e5e2e1] font-medium">PRECISION CRANIAL ARCHITECTURE</span>
              <span className="text-[#e6c364]">•</span>
              <span>FRENCH DIMENSIONAL BALAYAGE</span>
              <span className="text-[#e6c364]">•</span>
              <span className="text-[#e5e2e1] font-medium">CELLULAR SCALP TRICHOLOGY</span>
              <span className="text-[#e6c364]">•</span>
              <span>BRIDAL PRIVÉ COUTURE</span>
              <span className="text-[#e6c364]">•</span>
              <span className="text-[#e5e2e1] font-medium">FORMALDEHYDE-FREE BIO-KERATIN</span>
              <span className="text-[#e6c364]">•</span>
              <span>UNHURRIED BESPOKE CONSULTATION</span>
              <span className="text-[#e6c364]">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. THE ATELIER PHILOSOPHY                                   */}
      {/* ============================================================ */}
      <section
        id="the-atelier"
        className="relative w-full bg-[#181818] text-[#e5e2e1] py-10 sm:py-16 lg:py-28 px-4 sm:px-6 md:px-12 border-b border-[#c9a84c]/20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="relative z-10 max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          {/* Left 4 Columns: Section Index & Formulation Badges */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="lg:sticky lg:top-28 space-y-4 sm:space-y-6">
              <div>
                <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2">
                  02 / OUR PHILOSOPHY
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#e5e2e1] font-light leading-tight">
                  Quiet Craft, <br />
                  <span className="italic text-[#e6c364]">Zero Compromise.</span>
                </h2>
              </div>

              {/* Formulation Badges */}
              <div className="space-y-2.5 sm:space-y-3.5 pt-3 sm:pt-4 border-t border-[#c9a84c]/20">
                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-[#131313] border border-[#c9a84c]/20 rounded-[2px]">
                  <span className="material-symbols-outlined text-base sm:text-lg text-[#e6c364] mt-0.5 shrink-0">spa</span>
                  <div>
                    <h4 className="font-sans text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[#e5e2e1]">
                      Bio-Identical Keratin
                    </h4>
                    <p className="font-sans text-[11px] sm:text-xs text-[#d0c5b2] leading-relaxed mt-0.5">
                      100% Formaldehyde-Free restorative amino acids.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-[#131313] border border-[#c9a84c]/20 rounded-[2px]">
                  <span className="material-symbols-outlined text-base sm:text-lg text-[#e6c364] mt-0.5 shrink-0">science</span>
                  <div>
                    <h4 className="font-sans text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[#e5e2e1]">
                      Micro-Pigment Balayage
                    </h4>
                    <p className="font-sans text-[11px] sm:text-xs text-[#d0c5b2] leading-relaxed mt-0.5">
                      Ammonia-free French lighteners protecting fiber integrity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-[#131313] border border-[#c9a84c]/20 rounded-[2px]">
                  <span className="material-symbols-outlined text-base sm:text-lg text-[#e6c364] mt-0.5 shrink-0">chair</span>
                  <div>
                    <h4 className="font-sans text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[#e5e2e1]">
                      Unhurried Sanctuary
                    </h4>
                    <p className="font-sans text-[11px] sm:text-xs text-[#d0c5b2] leading-relaxed mt-0.5">
                      1-on-1 private chairs with dedicated acoustic comfort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right 8 Columns: Pull-Quote Statement & 3 Pillars */}
          <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-10 md:gap-12">
            <blockquote className="border-l-2 border-[#c9a84c] pl-4 sm:pl-6 md:pl-8 py-1.5 sm:py-2">
              <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#e5e2e1] font-light leading-snug">
                “We do not merely cut or color hair; we decode facial architecture and craft a living silhouette that
                reframes how you carry yourself through the world.”
              </p>
              <footer className="mt-2.5 sm:mt-4 font-sans text-[11px] sm:text-xs tracking-[0.2em] text-[#e6c364] uppercase font-semibold">
                — Kiran Kishore, Founder &amp; Creative Director
              </footer>
            </blockquote>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 pt-4 sm:pt-6 border-t border-[#c9a84c]/20">
              <div className="flex flex-col gap-2 sm:gap-3 p-4 sm:p-6 bg-[#131313] border border-[#c9a84c]/20 rounded-[2px]">
                <span className="font-mono text-[11px] sm:text-xs text-[#e6c364] font-semibold">01 / DIAGNOSTIC</span>
                <h3 className="font-display text-lg sm:text-xl text-[#e5e2e1] font-normal">Cranial Precision</h3>
                <p className="font-sans text-xs md:text-sm text-[#d0c5b2] leading-relaxed">
                  Every ritual begins with cranial bone structure mapping and fiber elasticity testing before any tool
                  touches hair.
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:gap-3 p-4 sm:p-6 bg-[#131313] border border-[#c9a84c]/20 rounded-[2px]">
                <span className="font-mono text-[11px] sm:text-xs text-[#e6c364] font-semibold">02 / FORMULATION</span>
                <h3 className="font-display text-lg sm:text-xl text-[#e5e2e1] font-normal">Artisanal Blends</h3>
                <p className="font-sans text-xs md:text-sm text-[#d0c5b2] leading-relaxed">
                  Botanical elixirs and bond-multiplying peptides freshly combined at your chair to seal cuticle light-refraction.
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:gap-3 p-4 sm:p-6 bg-[#131313] border border-[#c9a84c]/20 rounded-[2px]">
                <span className="font-mono text-[11px] sm:text-xs text-[#e6c364] font-semibold">03 / PRIVÉ SANCTUARY</span>
                <h3 className="font-display text-lg sm:text-xl text-[#e5e2e1] font-normal">Discrete Pacing</h3>
                <p className="font-sans text-xs md:text-sm text-[#d0c5b2] leading-relaxed">
                  No overlapping appointments, no chaotic salon noise. Hand-crafted herbal teas and focused artistic
                  immersion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. SLEEK MINIMALIST RITUAL MENU                              */}
      {/* ============================================================ */}
      <section
        id="ritual-menu"
        className="w-full bg-[#0e0e0e] text-[#e5e2e1] py-10 sm:py-16 lg:py-28 px-4 sm:px-6 md:px-12 border-b border-[#c9a84c]/20"
      >
        <div className="max-w-[1380px] mx-auto">
          {/* Menu Header with Category Tabs & Stylist Tier Selector */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-8 pb-6 sm:pb-10 border-b border-[#c9a84c]/20">
            <div>
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2">
                03 / THE RITUAL DIRECTORY
              </span>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#e5e2e1] font-light">
                Bespoke Services &amp; <span className="italic text-[#e6c364]">Sensory Rituals</span>
              </h2>
            </div>

            {/* Stylist Tier Segmented Selector */}
            <div className="flex flex-row items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
              <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] text-[#d0c5b2] uppercase">
                STYLIST TIER:
              </span>
              <div className="inline-flex bg-[#1c1b1b] p-0.5 sm:p-1 border border-[#c9a84c]/30 rounded-[2px]">
                <button
                  onClick={() => setStylistTier("Senior Stylist")}
                  className={`font-sans text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.14em] sm:tracking-[0.16em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 transition-all rounded-[2px] ${
                    stylistTier === "Senior Stylist"
                      ? "bg-[#c9a84c] text-[#080808] font-bold shadow-sm"
                      : "text-[#d0c5b2] hover:text-[#e5e2e1]"
                  }`}
                >
                  SENIOR STYLIST
                </button>
                <button
                  onClick={() => setStylistTier("Artistic Director")}
                  className={`font-sans text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.14em] sm:tracking-[0.16em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 transition-all rounded-[2px] ${
                    stylistTier === "Artistic Director"
                      ? "bg-[#c9a84c] text-[#080808] font-bold shadow-sm"
                      : "text-[#d0c5b2] hover:text-[#e5e2e1]"
                  }`}
                >
                  ARTISTIC DIRECTOR
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 overflow-x-auto py-3.5 sm:py-6 border-b border-[#c9a84c]/15 hide-scrollbar">
            {[
              { id: "all", label: "ALL RITUALS" },
              { id: "cuts", label: "COUTURE CUTS" },
              { id: "color", label: "FRENCH BALAYAGE & COLOR" },
              { id: "keratin", label: "KERATIN & TRICHOLOGY" },
              { id: "skin", label: "AESTHETICS & NAILS" },
              { id: "bridal", label: "BRIDAL PRIVÉ" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap font-sans text-[9.5px] sm:text-[10px] md:text-[11px] tracking-[0.16em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 rounded-[2px] transition-all border shrink-0 ${
                  activeCategory === cat.id
                    ? "border-[#c9a84c] text-[#080808] bg-[#c9a84c] font-bold"
                    : "border-transparent text-[#d0c5b2] hover:text-[#e5e2e1] hover:border-[#c9a84c]/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 12-Column Layout: 8 cols Ritual Rows + 4 cols Sticky Preview (Desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mt-4 sm:mt-8 items-start">
            {/* Left 8 Columns: Horizontal 1px-Bordered Ritual Rows */}
            <div className="lg:col-span-8 divide-y divide-[#c9a84c]/20">
              {filteredRituals.map((ritual) => {
                const isHovered = hoveredRitual.id === ritual.id;
                const isExpandedMobile = expandedMobileRitualId === ritual.id;
                const activePrice = stylistTier === "Senior Stylist" ? ritual.seniorPrice : ritual.directorPrice;

                return (
                  <div
                    key={ritual.id}
                    onMouseEnter={() => setHoveredRitual(ritual)}
                    onFocus={() => setHoveredRitual(ritual)}
                    className={`group py-4 sm:py-6 md:py-8 transition-luxury relative cursor-pointer ${
                      isHovered ? "bg-[#1c1b1b]/70 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-[2px]" : ""
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                      {/* Ritual Name & Sensory Metadata */}
                      <div className="flex-1 md:pr-4">
                        <div className="flex items-center gap-2.5 mb-1">
                          <span className="font-mono text-[9px] sm:text-[10px] text-[#e6c364] tracking-widest uppercase">
                            {ritual.duration}
                          </span>
                          <span className="text-[#c9a84c]/40">•</span>
                          <span className="font-sans text-[9px] sm:text-[10px] text-[#d0c5b2] tracking-widest uppercase">
                            {ritual.category}
                          </span>
                        </div>
                        <h3 className="font-display text-lg sm:text-xl md:text-2xl text-[#e5e2e1] group-hover:text-[#e6c364] transition-colors font-normal">
                          {ritual.name}
                        </h3>
                        <p className="font-sans text-xs text-[#d0c5b2] mt-1.5 font-light leading-relaxed max-w-xl">
                          {ritual.formulation}
                        </p>
                      </div>

                      {/* Tiered Price & Action Trigger */}
                      <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 pt-2.5 md:pt-0 border-t md:border-t-0 border-[#c9a84c]/15">
                        <div className="text-left md:text-right">
                          <span className="font-sans text-[8.5px] sm:text-[9px] text-[#d0c5b2] uppercase tracking-wider block">
                            {stylistTier}
                          </span>
                          <span className="font-mono text-lg sm:text-xl md:text-2xl text-[#e6c364] font-medium tabular-numbers">
                            {activePrice}
                          </span>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReserveRitual(ritual);
                          }}
                          className="font-sans text-[9px] sm:text-[10px] tracking-[0.18em] uppercase bg-transparent text-[#e5e2e1] border border-[#c9a84c]/40 group-hover:border-[#e6c364] group-hover:bg-[#c9a84c] group-hover:text-[#080808] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-[2px] transition-all whitespace-nowrap font-medium active:scale-95"
                        >
                          RESERVE RITUAL →
                        </button>
                      </div>
                    </div>

                    {/* Mobile Touch Accordion */}
                    <div className="lg:hidden mt-3 pt-3 border-t border-[#c9a84c]/15 flex flex-col gap-2.5">
                      <button
                        onClick={() =>
                          setExpandedMobileRitualId(isExpandedMobile ? null : ritual.id)
                        }
                        className="text-left font-sans text-[9.5px] tracking-widest text-[#e6c364] uppercase flex items-center justify-between"
                      >
                        <span>{isExpandedMobile ? "Hide Formulation Notes" : "View Look & Botanical Notes"}</span>
                        <span className="material-symbols-outlined text-xs">
                          {isExpandedMobile ? "expand_less" : "expand_more"}
                        </span>
                      </button>

                      {isExpandedMobile && (
                        <div className="mt-2 space-y-3">
                          <div className="relative w-full aspect-[16/9] rounded-[2px] overflow-hidden border border-[#c9a84c]/20">
                            <Image
                              src={ritual.image}
                              alt={ritual.name}
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <ul className="text-xs text-[#d0c5b2] space-y-1">
                            {ritual.benefits.map((b, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#e6c364]" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right 4 Columns: Desktop Sticky Editorial Preview Panel */}
            <div className="hidden lg:block lg:col-span-4 sticky top-28">
              <div className="bg-[#1c1b1b] border border-[#c9a84c]/25 rounded-[2px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <div className="flex justify-between items-center text-[10px] tracking-[0.2em] font-sans text-[#e6c364] uppercase border-b border-[#c9a84c]/20 pb-3 mb-4 font-semibold">
                  <span>ATELIER LOOK PREVIEW</span>
                  <span className="font-mono">{stylistTier.toUpperCase()}</span>
                </div>

                <div className="relative aspect-[3/4] w-full rounded-[2px] overflow-hidden border border-[#c9a84c]/20 mb-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={hoveredRitual.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={hoveredRitual.image}
                        alt={hoveredRitual.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="font-mono text-[10px] text-[#e6c364] uppercase tracking-widest block font-medium">
                          SIGNATURE ARCHITECTURE
                        </span>
                        <p className="font-display text-lg text-[#e5e2e1] font-normal leading-tight mt-0.5">
                          {hoveredRitual.name}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Formulation Notes & Benefits */}
                <div className="space-y-3">
                  <p className="font-sans text-xs text-[#d0c5b2] font-light leading-relaxed italic">
                    &quot;{hoveredRitual.caption}&quot;
                  </p>
                  <div className="border-t border-[#c9a84c]/15 pt-3">
                    <span className="font-sans text-[9px] tracking-[0.2em] text-[#e6c364] uppercase block mb-2 font-semibold">
                      KEY CLINICAL BENEFITS
                    </span>
                    <ul className="space-y-1.5">
                      {hoveredRitual.benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-[#d0c5b2] font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#e6c364]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => handleReserveRitual(hoveredRitual)}
                      className="w-full text-center py-3 bg-[#c9a84c] text-[#080808] font-sans text-xs uppercase tracking-[0.18em] font-bold rounded-[2px] hover:bg-[#ffe08f] transition-colors"
                    >
                      RESERVE THIS RITUAL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. ARTISTIC DIRECTORS & SPECIALISTS                         */}
      {/* ============================================================ */}
      <section
        id="directors"
        className="w-full bg-[#131313] text-[#e5e2e1] py-10 sm:py-16 lg:py-28 px-4 sm:px-6 md:px-12 border-b border-[#c9a84c]/20"
      >
        <div className="max-w-[1380px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 pb-6 sm:pb-12 border-b border-[#c9a84c]/20">
            <div className="max-w-2xl">
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2">
                04 / MASTER CRAFTSPEOPLE
              </span>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#e5e2e1] font-light">
                Artistic Directors &amp; <span className="italic text-[#e6c364]">Specialists</span>
              </h2>
            </div>
            <p className="font-sans text-xs md:text-sm text-[#d0c5b2] max-w-md font-light leading-relaxed">
              Guided by international cutting geometry, French dimensional balayage, and clinical scalp trichology.
            </p>
          </div>

          {/* 3-Column Compact Portrait Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 mt-6 sm:mt-12">
            {/* Director 1: Kiran Kishore */}
            <div className="group flex flex-col bg-[#1c1b1b] border border-[#c9a84c]/20 rounded-[2px] overflow-hidden">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden bg-[#131313]">
                <Image
                  src="https://www.image2url.com/r2/default/images/1777307279699-b39c8f5c-f80f-4dbf-a53f-bf76c40ec46f.png"
                  alt="Kiran Kishore - Founder and Creative Director"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-[#131313]/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-[#e5e2e1]">
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#e6c364] uppercase font-medium">
                    ATELIER FOUNDER
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-[#e5e2e1]">Kiran Kishore</h3>
                </div>
              </div>

              <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 gap-3 sm:gap-4">
                <div>
                  <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.18em] text-[#e6c364] uppercase block mb-1 font-semibold">
                    CREATIVE DIRECTION &amp; ARCHITECTURAL CUTS
                  </span>
                  <p className="font-sans text-xs text-[#d0c5b2] leading-relaxed font-light">
                    12+ years perfecting cranial silhouette geometry, dry-cutting techniques, and bespoke transformations.
                  </p>
                </div>
                <button
                  onClick={() => handleRequestDirector("Kiran Kishore", "Artistic Director")}
                  className="font-sans text-[9.5px] sm:text-[10px] tracking-[0.18em] uppercase border border-[#c9a84c] text-[#e5e2e1] hover:bg-[#c9a84c] hover:text-[#080808] py-2.5 sm:py-3 text-center transition-all rounded-[2px] font-medium active:scale-98"
                >
                  REQUEST DIRECTOR KIRAN →
                </button>
              </div>
            </div>

            {/* Director 2: Elena Rostova */}
            <div className="group flex flex-col bg-[#1c1b1b] border border-[#c9a84c]/20 rounded-[2px] overflow-hidden">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden bg-[#131313]">
                <Image
                  src="https://i.ibb.co/DDcytst4/Chat-GPT-Image-Apr-28-2026-04-40-10-AM.png"
                  alt="Elena Rostova - Senior Colorist & Balayage Director"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-[#131313]/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-[#e5e2e1]">
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#e6c364] uppercase font-medium">
                    COLOR DIRECTOR
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-[#e5e2e1]">Elena Rostova</h3>
                </div>
              </div>

              <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 gap-3 sm:gap-4">
                <div>
                  <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.18em] text-[#e6c364] uppercase block mb-1 font-semibold">
                    FRENCH BALAYAGE &amp; MICRO-FOIL ARCHITECTURE
                  </span>
                  <p className="font-sans text-xs text-[#d0c5b2] leading-relaxed font-light">
                    European colorimetry specialist dedicated to cool toners, multi-dimensional depths, and zero brassiness.
                  </p>
                </div>
                <button
                  onClick={() => handleRequestDirector("Elena Rostova", "Senior Stylist")}
                  className="font-sans text-[9.5px] sm:text-[10px] tracking-[0.18em] uppercase border border-[#c9a84c] text-[#e5e2e1] hover:bg-[#c9a84c] hover:text-[#080808] py-2.5 sm:py-3 text-center transition-all rounded-[2px] font-medium active:scale-98"
                >
                  REQUEST COLORIST ELENA →
                </button>
              </div>
            </div>

            {/* Director 3: Sophia Chen */}
            <div className="group flex flex-col bg-[#1c1b1b] border border-[#c9a84c]/20 rounded-[2px] overflow-hidden">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden bg-[#131313]">
                <Image
                  src="https://i.ibb.co/LD6jj4DR/Chat-GPT-Image-Apr-28-2026-04-37-05-AM.png"
                  alt="Sophia Chen - Master Bridal & Aesthetics Specialist"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-[#131313]/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-[#e5e2e1]">
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#e6c364] uppercase font-medium">
                    BRIDAL PRIVÉ SPECIALIST
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-[#e5e2e1]">Sophia Chen</h3>
                </div>
              </div>

              <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 gap-3 sm:gap-4">
                <div>
                  <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.18em] text-[#e6c364] uppercase block mb-1 font-semibold">
                    BRIDAL COUTURE &amp; SCALP TRICHOLOGY
                  </span>
                  <p className="font-sans text-xs text-[#d0c5b2] leading-relaxed font-light">
                    Celebrated for serene wedding day execution, architectural veil draping, and dewy HD airbrush finishes.
                  </p>
                </div>
                <button
                  onClick={() => handleRequestDirector("Sophia Chen", "Artistic Director")}
                  className="font-sans text-[9.5px] sm:text-[10px] tracking-[0.18em] uppercase border border-[#c9a84c] text-[#e5e2e1] hover:bg-[#c9a84c] hover:text-[#080808] py-2.5 sm:py-3 text-center transition-all rounded-[2px] font-medium active:scale-98"
                >
                  REQUEST SPECIALIST SOPHIA →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. BRIDAL COUTURE & PRIVÉ SUITE                             */}
      {/* ============================================================ */}
      <section
        id="bridal-prive"
        className="w-full bg-[#181818] text-[#e5e2e1] py-10 sm:py-16 lg:py-28 px-4 sm:px-6 md:px-12 border-b border-[#c9a84c]/20"
      >
        <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left 6 Columns: High-Arch Editorial Bridal Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[340px] sm:max-w-[460px] aspect-[4/3] sm:aspect-[3/4] rounded-arch overflow-hidden border border-[#c9a84c]/35 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <Image
                src="https://i.ibb.co/gLrDP3Y5/Chat-GPT-Image-Apr-28-2026-12-51-11-AM.png"
                alt="Luxury Bridal Couture at Urbanity Privé Suite"
                fill
                className="object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 p-3 sm:p-4 bg-[#131313]/90 backdrop-blur-md border border-[#c9a84c]/25 rounded-[2px]">
                <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.22em] text-[#e6c364] uppercase font-semibold block">
                  SANCTUARY POLICY
                </span>
                <p className="font-display text-base sm:text-lg text-[#e5e2e1] font-normal mt-0.5 leading-snug">
                  Exclusively 1 Bride Per Morning in the Private Privé Lounge
                </p>
              </div>
            </div>
          </div>

          {/* Right 6 Columns: Bespoke Bridal Journey & Dossier CTA */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6 md:gap-8">
            <div>
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2">
                05 / BRIDAL PRIVÉ &amp; COUTURE SANCTUARY
              </span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-[#e5e2e1] font-light leading-tight">
                Your Most Sacred Morning, <br />
                <span className="italic text-[#e6c364]">Curated Without Rush.</span>
              </h2>
            </div>

            <p className="font-sans text-xs md:text-sm text-[#d0c5b2] leading-relaxed font-light">
              We reserve our entire private lounge exclusively for you and your entourage. A phased journey ensuring skin
              clarity, customized hair fiber resilience, and seamless veil harmony.
            </p>

            {/* 4-Phase Bridal Timeline */}
            <div className="space-y-2.5 sm:space-y-3.5 pt-2 border-t border-[#c9a84c]/20">
              <div className="flex items-start gap-3 sm:gap-4 p-2.5 sm:p-3 bg-[#131313] border border-[#c9a84c]/20 rounded-[2px]">
                <span className="font-mono text-[11px] sm:text-xs text-[#e6c364] font-semibold mt-0.5">01</span>
                <div>
                  <h4 className="font-sans text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[#e5e2e1]">
                    Diagnostic &amp; Face Mapping (8–12 Weeks Prior)
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs text-[#d0c5b2] leading-relaxed mt-0.5">
                    Jewelry matching, neckline analysis, and scalp health preparation regimen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-2.5 sm:p-3 bg-[#131313] border border-[#c9a84c]/20 rounded-[2px]">
                <span className="font-mono text-[11px] sm:text-xs text-[#e6c364] font-semibold mt-0.5">02</span>
                <div>
                  <h4 className="font-sans text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[#e5e2e1]">
                    Skin Radiance &amp; Balayage Glaze (4–6 Weeks Prior)
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs text-[#d0c5b2] leading-relaxed mt-0.5">
                    Hydra-infusion facial series and color toning calibrated for photographic flash.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-2.5 sm:p-3 bg-[#131313] border border-[#c9a84c]/20 rounded-[2px]">
                <span className="font-mono text-[11px] sm:text-xs text-[#e6c364] font-semibold mt-0.5">03</span>
                <div>
                  <h4 className="font-sans text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[#e5e2e1]">
                    Full Atelier Rehearsal &amp; Swatch Trial (2–3 Weeks Prior)
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs text-[#d0c5b2] leading-relaxed mt-0.5">
                    Complete trial in the private suite with gown swatch, veil placement &amp; photography test.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-2.5 sm:p-3 bg-[#131313] border border-[#c9a84c]/20 rounded-[2px]">
                <span className="font-mono text-[11px] sm:text-xs text-[#e6c364] font-semibold mt-0.5">04</span>
                <div>
                  <h4 className="font-sans text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[#e5e2e1]">
                    Wedding Day Privé Execution
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs text-[#d0c5b2] leading-relaxed mt-0.5">
                    Uninterrupted luxury sanctuary, artisanal refreshments, and calm master-team execution.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={() => {
                  setSelectedRitualName("Bespoke Bridal Couture Day Ritual");
                  setAppointmentType("Full Ritual Reservation");
                  setReservationTier("Artistic Director");
                  conciergeRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-sans text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.18em] uppercase bg-[#c9a84c] text-[#080808] px-6 sm:px-8 py-3 sm:py-4 rounded-[2px] font-bold hover:bg-[#ffe08f] transition-all text-center shimmer-btn active:scale-98"
              >
                REQUEST BRIDAL CONSULTATION
              </button>
              <Link
                href="/bridal"
                className="font-sans text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.18em] uppercase border border-[#c9a84c]/40 text-[#e5e2e1] hover:bg-[#c9a84c] hover:text-[#080808] px-6 sm:px-8 py-3 sm:py-4 rounded-[2px] transition-all text-center font-medium active:scale-98"
              >
                VIEW BRIDAL DOSSIER →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. EDITORIAL LOOKBOOK & REFLECTIONS                         */}
      {/* ============================================================ */}
      <section
        id="lookbook"
        className="w-full bg-[#0e0e0e] text-[#e5e2e1] py-10 sm:py-16 lg:py-28 px-4 sm:px-6 md:px-12 border-b border-[#c9a84c]/20"
      >
        <div className="max-w-[1380px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 pb-6 sm:pb-12 border-b border-[#c9a84c]/20">
            <div>
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2">
                06 / EDITORIAL LOOKBOOK &amp; ARCHIVE
              </span>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#e5e2e1] font-light">
                Living Silhouettes &amp; <span className="italic text-[#e6c364]">Reflections</span>
              </h2>
            </div>
            <Link
              href="/gallery"
              className="font-sans text-xs tracking-[0.18em] text-[#e6c364] hover:text-[#ffe08f] uppercase font-medium flex items-center gap-1.5"
            >
              EXPLORE FULL ARCHIVE <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* Curated Lookbook Grid (2 Cols on Mobile) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-12 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[280px]">
            {LOOKBOOK_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden bg-[#131313] rounded-[2px] border border-[#c9a84c]/20 ${
                  idx === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.95]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-transparent to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4 md:translate-y-3 md:group-hover:translate-y-0 transition-transform duration-400">
                  <span className="font-mono text-[8.5px] sm:text-[9px] text-[#e6c364] tracking-widest uppercase block mb-0.5 sm:mb-1 font-medium">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-sm sm:text-base md:text-lg text-[#e5e2e1] font-normal leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Client Reflections / Testimonials Pull-Quotes */}
          <div className="mt-10 sm:mt-20 pt-8 sm:pt-16 border-t border-[#c9a84c]/20">
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold block mb-4 sm:mb-8 text-center">
              CLIENT REFLECTIONS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-[#1c1b1b] p-4 sm:p-6 md:p-8 border border-[#c9a84c]/20 rounded-[2px] flex flex-col justify-between gap-3 sm:gap-6"
                >
                  <div className="space-y-2.5 sm:space-y-4">
                    <span className="font-mono text-[9px] sm:text-[10px] text-[#e6c364] uppercase tracking-widest block font-medium">
                      {t.highlight}
                    </span>
                    <p className="font-display text-base sm:text-lg text-[#e5e2e1] font-light leading-relaxed">
                      &quot;{t.quote}&quot;
                    </p>
                  </div>
                  <div className="border-t border-[#c9a84c]/15 pt-3 sm:pt-4">
                    <h4 className="font-sans text-xs tracking-wider uppercase font-semibold text-[#e5e2e1]">
                      {t.name}
                    </h4>
                    <span className="font-sans text-[10px] sm:text-[11px] text-[#d0c5b2]">{t.designation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. PRIVATE CONCIERGE & RITUAL RESERVATION SUITE              */}
      {/* ============================================================ */}
      <section
        id="concierge-booking"
        ref={conciergeRef}
        className="w-full bg-[#131313] text-[#e5e2e1] py-10 sm:py-16 lg:py-28 px-4 sm:px-6 md:px-12 border-b border-[#c9a84c]/20"
      >
        <div className="max-w-[1380px] mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2">
              07 / PRIVATE CONCIERGE SUITE
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-[#e5e2e1] font-light">
              Reserve Your Consultation or <span className="italic text-[#e6c364]">Signature Ritual</span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#d0c5b2] mt-2 sm:mt-3 font-light leading-relaxed">
              We operate exclusively by appointment to ensure zero wait times and unhurried master-stylist immersion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-start">
            {/* Left 6 Columns: Refined Luxury Form */}
            <div className="lg:col-span-7 bg-[#1c1b1b] border border-[#c9a84c]/25 p-4 sm:p-8 md:p-12 rounded-[2px] shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-8 sm:py-12 space-y-4 sm:space-y-6">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#e6c364]">check_circle</span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#e5e2e1]">Consultation Request Received</h3>
                  <p className="font-sans text-xs md:text-sm text-[#d0c5b2] max-w-md mx-auto leading-relaxed">
                    Thank you, {clientName || "Valued Guest"}. Our Atelier Concierge will reach out via WhatsApp/Call to
                    finalize your bespoke slot.
                  </p>
                  <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <a
                      href={`https://wa.me/918578060606?text=${whatsAppMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.18em] uppercase bg-[#c9a84c] text-[#080808] px-5 sm:px-6 py-3 sm:py-3.5 rounded-[2px] font-bold hover:bg-[#ffe08f] transition-all inline-flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-base">chat</span>
                      CONFIRM INSTANTLY VIA WHATSAPP
                    </a>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="font-sans text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.18em] uppercase border border-[#c9a84c] text-[#e5e2e1] px-5 sm:px-6 py-3 sm:py-3.5 rounded-[2px] transition-all font-medium"
                    >
                      SUBMIT ANOTHER REQUEST
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6 md:space-y-8">
                  {/* Appointment Type Toggle */}
                  <div>
                    <label className="font-sans text-[9.5px] sm:text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-2 sm:mb-3">
                      APPOINTMENT TYPE
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <button
                        type="button"
                        onClick={() => setAppointmentType("Full Ritual Reservation")}
                        className={`text-left p-2.5 sm:p-3.5 border rounded-[2px] transition-all font-sans text-xs ${
                          appointmentType === "Full Ritual Reservation"
                            ? "border-[#c9a84c] bg-[#c9a84c] text-[#080808] font-bold"
                            : "border-[#c9a84c]/20 bg-[#131313] text-[#e5e2e1] hover:border-[#c9a84c]"
                        }`}
                      >
                        <span className="block font-medium">Signature Ritual Booking</span>
                        <span className="text-[10px] opacity-80 block mt-0.5">Complete sensory treatment</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAppointmentType("15-Min Private Diagnostic Consultation")}
                        className={`text-left p-2.5 sm:p-3.5 border rounded-[2px] transition-all font-sans text-xs ${
                          appointmentType === "15-Min Private Diagnostic Consultation"
                            ? "border-[#c9a84c] bg-[#c9a84c] text-[#080808] font-bold"
                            : "border-[#c9a84c]/20 bg-[#131313] text-[#e5e2e1] hover:border-[#c9a84c]"
                        }`}
                      >
                        <span className="block font-medium">15-Min Private Consultation</span>
                        <span className="text-[10px] opacity-80 block mt-0.5">Cranial mapping &amp; color preview</span>
                      </button>
                    </div>
                  </div>

                  {/* Stylist Tier & Ritual Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6">
                    <div>
                      <label
                        htmlFor="concierge-tier"
                        className="font-sans text-[9.5px] sm:text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2"
                      >
                        PREFERRED STYLIST TIER
                      </label>
                      <select
                        id="concierge-tier"
                        value={reservationTier}
                        onChange={(e) => setReservationTier(e.target.value)}
                        className="w-full bg-[#131313] border border-[#c9a84c]/25 text-[#e5e2e1] font-sans text-xs p-2.5 sm:p-3.5 rounded-[2px] focus:outline-none focus:border-[#c9a84c]"
                      >
                        <option value="Senior Stylist" className="bg-[#1c1b1b] text-[#e5e2e1]">Senior Stylist</option>
                        <option value="Artistic Director" className="bg-[#1c1b1b] text-[#e5e2e1]">Artistic Director</option>
                        <option value="Founder Kiran Kishore" className="bg-[#1c1b1b] text-[#e5e2e1]">Founder Kiran Kishore (Direct Atelier)</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="concierge-ritual"
                        className="font-sans text-[9.5px] sm:text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2"
                      >
                        SELECTED RITUAL / SERVICE
                      </label>
                      <select
                        id="concierge-ritual"
                        value={selectedRitualName}
                        onChange={(e) => setSelectedRitualName(e.target.value)}
                        className="w-full bg-[#131313] border border-[#c9a84c]/25 text-[#e5e2e1] font-sans text-xs p-2.5 sm:p-3.5 rounded-[2px] focus:outline-none focus:border-[#c9a84c]"
                      >
                        {RITUALS.map((r) => (
                          <option key={r.id} value={r.name} className="bg-[#1c1b1b] text-[#e5e2e1]">
                            {r.name}
                          </option>
                        ))}
                        <option value="General Aesthetics Consultation" className="bg-[#1c1b1b] text-[#e5e2e1]">General Aesthetics Consultation</option>
                        <option value="Bridal Dossier & Privé Package" className="bg-[#1c1b1b] text-[#e5e2e1]">Bridal Dossier &amp; Privé Package</option>
                      </select>
                    </div>
                  </div>

                  {/* Date & Time Window */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6">
                    <div>
                      <label
                        htmlFor="concierge-date"
                        className="font-sans text-[9.5px] sm:text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2"
                      >
                        PREFERRED DATE
                      </label>
                      <input
                        type="date"
                        id="concierge-date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        required
                        className="w-full bg-[#131313] border border-[#c9a84c]/25 text-[#e5e2e1] font-sans text-xs p-2.5 sm:p-3.5 rounded-[2px] focus:outline-none focus:border-[#c9a84c] [color-scheme:dark]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="concierge-time"
                        className="font-sans text-[9.5px] sm:text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2"
                      >
                        TIME WINDOW
                      </label>
                      <select
                        id="concierge-time"
                        value={preferredTimeWindow}
                        onChange={(e) => setPreferredTimeWindow(e.target.value)}
                        className="w-full bg-[#131313] border border-[#c9a84c]/25 text-[#e5e2e1] font-sans text-xs p-2.5 sm:p-3.5 rounded-[2px] focus:outline-none focus:border-[#c9a84c]"
                      >
                        <option value="Morning Sanctuary (10:00 AM – 1:00 PM)" className="bg-[#1c1b1b] text-[#e5e2e1]">
                          Morning Sanctuary (10:00 AM – 1:00 PM)
                        </option>
                        <option value="Afternoon Atelier (1:00 PM – 5:00 PM)" className="bg-[#1c1b1b] text-[#e5e2e1]">
                          Afternoon Atelier (1:00 PM – 5:00 PM)
                        </option>
                        <option value="Evening Privé (5:00 PM – 9:00 PM)" className="bg-[#1c1b1b] text-[#e5e2e1]">
                          Evening Privé (5:00 PM – 9:00 PM)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Client Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6">
                    <div>
                      <label
                        htmlFor="concierge-name"
                        className="font-sans text-[9.5px] sm:text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2"
                      >
                        CLIENT FULL NAME
                      </label>
                      <input
                        type="text"
                        id="concierge-name"
                        placeholder="e.g. Eleanor Vance"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        required
                        className="w-full bg-[#131313] border border-[#c9a84c]/25 text-[#e5e2e1] font-sans text-xs p-2.5 sm:p-3.5 rounded-[2px] focus:outline-none focus:border-[#c9a84c] placeholder:text-[#d0c5b2]/40"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="concierge-phone"
                        className="font-sans text-[9.5px] sm:text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2"
                      >
                        PHONE / WHATSAPP NUMBER
                      </label>
                      <input
                        type="tel"
                        id="concierge-phone"
                        placeholder="+91 00000 00000"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        required
                        className="w-full bg-[#131313] border border-[#c9a84c]/25 text-[#e5e2e1] font-sans text-xs p-2.5 sm:p-3.5 rounded-[2px] focus:outline-none focus:border-[#c9a84c] placeholder:text-[#d0c5b2]/40"
                      />
                    </div>
                  </div>

                  {/* Notes / History */}
                  <div>
                    <label
                      htmlFor="concierge-notes"
                      className="font-sans text-[9.5px] sm:text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2"
                    >
                      HAIR / SKIN HISTORY OR SPECIFIC PREFERENCES (OPTIONAL)
                    </label>
                    <textarea
                      id="concierge-notes"
                      rows={2}
                      placeholder="e.g. Previous balayage treatments, sensitive scalp, event date swatches..."
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      className="w-full bg-[#131313] border border-[#c9a84c]/25 text-[#e5e2e1] font-sans text-xs p-2.5 sm:p-3.5 rounded-[2px] focus:outline-none focus:border-[#c9a84c] placeholder:text-[#d0c5b2]/40 resize-none"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <button
                      type="submit"
                      className="font-sans text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.18em] uppercase bg-[#c9a84c] text-[#080808] px-6 sm:px-8 py-3.5 sm:py-4 rounded-[2px] font-bold hover:bg-[#ffe08f] transition-all flex-1 text-center shadow-sm shimmer-btn active:scale-98"
                    >
                      REQUEST PRIVATE RESERVATION
                    </button>
                    <a
                      href={`https://wa.me/918578060606?text=${whatsAppMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.18em] uppercase border border-[#c9a84c] text-[#e6c364] hover:bg-[#c9a84c] hover:text-[#080808] px-5 sm:px-6 py-3.5 sm:py-4 rounded-[2px] transition-all text-center inline-flex items-center justify-center gap-2 font-medium active:scale-98"
                    >
                      <span className="material-symbols-outlined text-base">chat</span>
                      WHATSAPP CONCIERGE
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Right 5 Columns: Coordinates, Concierge Protocol & Map */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
              {/* Studio Card */}
              <div className="bg-[#1c1b1b] border border-[#c9a84c]/25 p-4 sm:p-6 md:p-8 rounded-[2px]">
                <span className="font-sans text-[9.5px] sm:text-[10px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold block mb-2 sm:mb-3">
                  ATELIER COORDINATES
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-[#e5e2e1]">Sumrit Mandal Complex</h3>
                <p className="font-sans text-xs text-[#d0c5b2] mt-1 leading-relaxed">
                  Tilkamanjhi, Bhagalpur, Bihar
                </p>

                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#c9a84c]/20 space-y-2.5 sm:space-y-3 font-sans text-xs text-[#d0c5b2]">
                  <div className="flex items-center justify-between">
                    <span className="uppercase tracking-wider font-semibold text-[#e5e2e1] text-[11px]">HOURS</span>
                    <span className="text-[11px] sm:text-xs">Monday – Sunday: 10:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="uppercase tracking-wider font-semibold text-[#e5e2e1] text-[11px]">TELEPHONE</span>
                    <a href="tel:+918578060606" className="font-mono text-[#e6c364] hover:underline font-medium text-[11px] sm:text-xs">
                      +91 8578060606
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="uppercase tracking-wider font-semibold text-[#e5e2e1] text-[11px]">ARRIVAL</span>
                    <span className="text-[11px] sm:text-xs">Complimentary Valet Assistance Available</span>
                  </div>
                </div>
              </div>

              {/* Minimal Monochrome Architectural Map Card */}
              <div className="relative aspect-[16/9] w-full rounded-[2px] overflow-hidden border border-[#c9a84c]/25 bg-[#131313]">
                <Image
                  src="https://picsum.photos/seed/map1/800/450"
                  alt="Urbanity Salon Location Map"
                  fill
                  className="object-cover filter contrast-[0.9] brightness-[0.7]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-[#131313]/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
                  <div className="flex justify-between items-center text-[9.5px] sm:text-[10px] font-sans tracking-widest text-[#e6c364] uppercase font-semibold">
                    <span>TILKAMANJHI SANCTUARY</span>
                    <span className="w-2 h-2 rounded-full bg-[#e6c364] animate-ping" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] sm:text-xs text-[#e5e2e1] block">
                      Sumrit Mandal Complex, Tilkamanjhi
                    </span>
                    <a
                      href="https://maps.google.com/?q=Sumrit+Mandal+Complex+Tilkamanjhi+Bhagalpur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1.5 font-sans text-[9.5px] sm:text-[10px] tracking-[0.18em] text-[#e6c364] uppercase hover:underline"
                    >
                      OPEN IN GOOGLE MAPS <span className="material-symbols-outlined text-xs">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
