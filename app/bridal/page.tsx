"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const BRIDAL_TIMELINE = [
  {
    phase: "PHASE 01",
    timeframe: "8–12 WEEKS PRIOR",
    title: "Diagnostic Dialogue & Face Mapping",
    desc: "An intimate cranial architecture and neckline analysis with Founder Kiran Kishore. We examine your bridal attire swatches, jewelry weight, veil attachment points, and build a tailored scalp and skin preparation protocol.",
  },
  {
    phase: "PHASE 02",
    timeframe: "4–6 WEEKS PRIOR",
    title: "Skin Radiance & Balayage Glaze Toning",
    desc: "A sequence of gentle Hydra-Radiance facial infusions and dimensional cool glossing. We formulate your hair tone so that it catches natural morning sunlight and high-flash photography with zero brassiness.",
  },
  {
    phase: "PHASE 03",
    timeframe: "2–3 WEEKS PRIOR",
    title: "Full Atelier Rehearsal & Veil Architecture",
    desc: "A complete trial in our private Privé Suite. We sculpt your signature updo, fit your veil with bespoke anchor pins, test photographic longevity, and rehearse the exact morning execution timeline.",
  },
  {
    phase: "PHASE 04",
    timeframe: "WEDDING MORNING",
    title: "The Privé Sanctuary Execution",
    desc: "Exclusively 1 bride per morning. Unhurried acoustic sanctuary, handcrafted herbal refreshments, and continuous master stylist attention until the final veil placement and gown departure.",
  },
];

const PRIVÉ_AMENITIES = [
  {
    icon: "meeting_room",
    title: "Exclusive Lounge Reservation",
    desc: "The entire private suite is blocked exclusively for you and your inner circle with zero external foot traffic.",
  },
  {
    icon: "diamond",
    title: "Dedicated Master Stylist Team",
    desc: "Artistic Director Kiran Kishore and senior artists dedicated entirely to your hair architecture and couture makeup.",
  },
  {
    icon: "timer",
    title: "Unhurried Morning Pacing",
    desc: "Generous multi-hour buffer blocks designed to keep the atmosphere tranquil, relaxed, and punctual.",
  },
  {
    icon: "camera",
    title: "Camera-Calibrated Lighting",
    desc: "Studio lighting tuned to mimic ceremony and reception environments to guarantee flawless longevity.",
  },
];

export default function BridalPage() {
  return (
    <main className="w-full bg-[#131313] text-[#e5e2e1] pt-16 sm:pt-20 md:pt-24 pb-14 sm:pb-20 md:pb-32 px-4 sm:px-6 md:px-12 selection:bg-[#c9a84c] selection:text-[#080808]">
      <div className="max-w-[1380px] mx-auto">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] sm:min-h-[70vh] md:min-h-[85vh] flex items-center justify-center py-10 sm:py-16 md:py-24 border-b border-[#c9a84c]/20">
          <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
            <Image
              src="https://i.ibb.co/gLrDP3Y5/Chat-GPT-Image-Apr-28-2026-12-51-11-AM.png"
              alt="Atmospheric bridal studio at Urbanity Salon"
              fill
              priority
              className="object-cover object-center filter grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/80 to-[#131313]" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center gap-4 sm:gap-6">
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold">
              01 / BRIDAL PRIVÉ &amp; COUTURE SANCTUARY
            </span>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#e5e2e1] font-light leading-tight">
              Your Most Sacred Morning, <br />
              <span className="italic text-[#e6c364]">Curated Without Rush.</span>
            </h1>
            <p className="font-sans text-xs md:text-sm text-[#d0c5b2] font-light leading-relaxed max-w-xl">
              An unhurried bridal atelier dedicated to facial silhouette harmony, couture hair architecture, and private
              lounge sanctuary execution in Bhagalpur.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto">
              <Link
                href="/#concierge-booking"
                className="w-full sm:w-auto text-center font-sans text-[11px] sm:text-xs tracking-[0.16em] uppercase bg-[#c9a84c] text-[#080808] px-6 sm:px-8 py-3 sm:py-4 rounded-[2px] font-bold hover:bg-[#ffe08f] transition-all shimmer-btn"
              >
                REQUEST BRIDAL CONSULTATION
              </Link>
              <a
                href="https://wa.me/918578060606?text=Hello%20Urbanity%20Salon,%20I%20would%20like%20to%20inquire%20about%20a%20private%20bridal%20suite%20reservation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center font-sans text-[11px] sm:text-xs tracking-[0.16em] uppercase border border-[#c9a84c]/40 text-[#e5e2e1] hover:border-[#e6c364] hover:text-[#e6c364] px-5 sm:px-6 py-3 sm:py-4 rounded-[2px] transition-all inline-flex items-center gap-2 font-medium"
              >
                <span className="material-symbols-outlined text-sm sm:text-base text-[#e6c364]">chat</span>
                WHATSAPP BRIDAL CONCIERGE
              </a>
            </div>
          </div>
        </section>

        {/* The 4-Phase Bridal Couture Journey */}
        <section className="py-10 sm:py-16 lg:py-28 border-b border-[#c9a84c]/20">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2">
              02 / THE PREPARATION TIMELINE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-[#e5e2e1] font-light">
              A Phased Journey to <span className="italic text-[#e6c364]">Flawless Harmony</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 md:gap-8">
            {BRIDAL_TIMELINE.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#1c1b1b] border border-[#c9a84c]/20 p-4 sm:p-6 md:p-8 rounded-[2px] flex flex-col justify-between gap-3 sm:gap-6 group hover:border-[#e6c364] transition-luxury"
              >
                <div className="space-y-2 sm:space-y-4">
                  <div className="flex justify-between items-center text-[9.5px] sm:text-[10px] tracking-widest font-mono text-[#e6c364] uppercase border-b border-[#c9a84c]/20 pb-2 sm:pb-3 font-semibold">
                    <span>{step.phase}</span>
                    <span className="text-[#d0c5b2]">{step.timeframe}</span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg md:text-xl text-[#e5e2e1] group-hover:text-[#e6c364] transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-[#d0c5b2] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Private Privé Suite Amenities */}
        <section className="py-10 sm:py-16 lg:py-28 border-b border-[#c9a84c]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left 6: Portrait Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-[340px] sm:max-w-[460px] aspect-[4/3] sm:aspect-[3/4] rounded-arch overflow-hidden border border-[#c9a84c]/35 shadow-[0_24px_50px_rgba(0,0,0,0.6)]">
                <Image
                  src="https://www.image2url.com/r2/default/images/1777307940632-eb03efd8-14bd-4785-9f08-b041a273d709.png"
                  alt="Bridal Couture Portrait at Urbanity Salon"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 p-3 sm:p-4 bg-[#131313]/90 backdrop-blur-md border border-[#c9a84c]/25 rounded-[2px]">
                  <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.22em] text-[#e6c364] uppercase font-semibold block">
                    EXCLUSIVE SUITE PRIVILEGE
                  </span>
                  <p className="font-display text-sm sm:text-lg text-[#e5e2e1] font-normal mt-0.5">
                    Zero Cross-Traffic &amp; Intimate Morning Sanctuary
                  </p>
                </div>
              </div>
            </div>

            {/* Right 6: Amenities List */}
            <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8">
              <div>
                <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2">
                  03 / THE PRIVÉ SUITE EXPERIENCE
                </span>
                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-[#e5e2e1] font-light leading-tight">
                  Calm Precision, <br />
                  <span className="italic text-[#e6c364]">Private Elegance.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 pt-1 sm:pt-2">
                {PRIVÉ_AMENITIES.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-5 md:p-6 bg-[#1c1b1b] border border-[#c9a84c]/20 rounded-[2px] space-y-2 sm:space-y-3"
                  >
                    <span className="material-symbols-outlined text-xl sm:text-2xl text-[#e6c364]">{amenity.icon}</span>
                    <h4 className="font-display text-base sm:text-lg text-[#e5e2e1]">{amenity.title}</h4>
                    <p className="font-sans text-xs text-[#d0c5b2] font-light leading-relaxed">
                      {amenity.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 sm:pt-4">
                <Link
                  href="/#concierge-booking"
                  className="w-full sm:w-auto inline-block font-sans text-[11px] sm:text-xs tracking-[0.16em] uppercase bg-[#c9a84c] text-[#080808] px-6 sm:px-8 py-3.5 sm:py-4 rounded-[2px] font-bold hover:bg-[#ffe08f] transition-all text-center shimmer-btn"
                >
                  RESERVE YOUR WEDDING DATE
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
