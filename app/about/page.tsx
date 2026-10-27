"use client";

import Link from "next/link";
import Image from "next/image";
import { Carousel } from "@/components/ui/carousel";

const CAROUSEL_IMAGES = [
  {
    src: "https://www.image2url.com/r2/default/images/1777307634569-bea49379-40fc-4802-a92a-32884a979934.png",
    alt: "Urbanity Salon Interior Sanctuary",
    widthClass: "md:min-w-[600px]",
  },
  {
    src: "https://i.ibb.co/3mSJfP27/Chat-GPT-Image-Apr-27-2026-10-19-32-PM.png",
    alt: "Styling Suite & Atelier Stations",
    widthClass: "md:min-w-[400px]",
  },
  {
    src: "https://i.ibb.co/ycKGwDwr/Chat-GPT-Image-Apr-27-2026-10-16-59-PM.png",
    alt: "Private Privé Lounge Atmosphere",
    widthClass: "md:min-w-[600px]",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-[#131313] text-[#e5e2e1] pt-16 sm:pt-20 md:pt-24 pb-14 sm:pb-20 md:pb-32 px-4 sm:px-6 md:px-12 selection:bg-[#c9a84c] selection:text-[#080808]">
      <div className="max-w-[1380px] mx-auto">
        {/* Hero Section: Founder & Atelier Vision */}
        <section className="py-8 sm:py-14 md:py-20 border-b border-[#c9a84c]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
            {/* Founder Portrait Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[320px] sm:max-w-[420px] aspect-[4/3] sm:aspect-[3/4] rounded-arch overflow-hidden border border-[#c9a84c]/35 shadow-[0_24px_60px_rgba(0,0,0,0.7)]">
                <Image
                  src="https://www.image2url.com/r2/default/images/1777307279699-b39c8f5c-f80f-4dbf-a53f-bf76c40ec46f.png"
                  alt="Kiran Kishore - Founder & Master Craftsman of Urbanity Salon"
                  fill
                  priority
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 p-3 sm:p-4 bg-[#131313]/90 backdrop-blur-md border border-[#c9a84c]/25 rounded-[2px]">
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#e6c364] uppercase block font-medium">
                    FOUNDER &amp; CREATIVE DIRECTOR
                  </span>
                  <p className="font-display text-base sm:text-xl text-[#e5e2e1] font-normal mt-0.5">
                    Kiran Kishore
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Story */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold">
                01 / THE FOUNDER &amp; LEGACY
              </span>
              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#e5e2e1] font-light leading-tight">
                Architecting Living Silhouettes with <span className="italic text-[#e6c364]">Quiet Precision.</span>
              </h1>
              <p className="font-sans text-xs md:text-sm text-[#d0c5b2] font-light leading-relaxed">
                Founded by master stylist Kiran Kishore, Urbanity Salon was established with a singular conviction: that
                high-end hair design is an architectural art form, not a transactional commodity.
              </p>
              <p className="font-sans text-xs md:text-sm text-[#d0c5b2] font-light leading-relaxed">
                Every silhouette crafted within our Tilkamanjhi salon is informed by cranial face geometry, natural
                growth vectors, and the client&apos;s personal aesthetic posture. By merging clinical scalp science with
                French balayage colorimetry, we deliver quiet, undeniable luxury.
              </p>

              <div className="pt-2">
                <Link
                  href="/#concierge-booking"
                  className="w-full sm:w-auto text-center inline-block font-sans text-[11px] sm:text-xs tracking-[0.16em] uppercase bg-[#c9a84c] text-[#080808] px-6 sm:px-8 py-3.5 sm:py-4 rounded-[2px] font-bold hover:bg-[#ffe08f] transition-all shimmer-btn"
                >
                  RESERVE PRIVATE CONSULTATION
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Pull-Quote */}
        <section className="py-10 sm:py-16 lg:py-24 text-center max-w-4xl mx-auto border-b border-[#c9a84c]/20">
          <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#e6c364] mb-3 sm:mb-6">format_quote</span>
          <h2 className="font-display text-lg sm:text-2xl lg:text-3xl text-[#e5e2e1] font-light leading-relaxed">
            &quot;We believe in crafting not just a transient look, but a legacy of confidence and understated
            architectural elegance.&quot;
          </h2>
          <div className="w-12 sm:w-16 h-[1px] bg-[#c9a84c] mx-auto my-4 sm:my-6" />
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-[#e6c364] uppercase font-semibold">
            KIRAN KISHORE — SALON MANIFESTO
          </span>
        </section>

        {/* Core Tenets: Mission & Vision */}
        <section className="py-10 sm:py-16 lg:py-24 border-b border-[#c9a84c]/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
            <div className="bg-[#1c1b1b] border border-[#c9a84c]/25 p-4 sm:p-8 md:p-12 rounded-[2px] space-y-2 sm:space-y-4">
              <span className="font-mono text-[10px] sm:text-xs text-[#e6c364] uppercase tracking-widest block font-medium">
                01 / OUR MISSION
              </span>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-[#e5e2e1]">Diagnostic Craftsmanship</h3>
              <p className="font-sans text-xs md:text-sm text-[#d0c5b2] font-light leading-relaxed">
                To provide unhurried, personalized salon experiences rooted in facial structure analysis, organic botanical
                formulations, and unyielding respect for fiber vitality.
              </p>
            </div>

            <div className="bg-[#1c1b1b] border border-[#c9a84c]/25 p-4 sm:p-8 md:p-12 rounded-[2px] space-y-2 sm:space-y-4">
              <span className="font-mono text-[10px] sm:text-xs text-[#e6c364] uppercase tracking-widest block font-medium">
                02 / OUR VISION
              </span>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-[#e5e2e1]">Flagship Sanctuary</h3>
              <p className="font-sans text-xs md:text-sm text-[#d0c5b2] font-light leading-relaxed">
                To stand as Eastern India&apos;s benchmark for quiet architectural luxury, setting standard-bearer practices
                for bridal couture, bio-identical keratin treatments, and master color artistry.
              </p>
            </div>
          </div>
        </section>

        {/* Atmosphere Carousel */}
        <section className="py-10 sm:py-16 md:py-20 border-b border-[#c9a84c]/20">
          <div className="mb-6 sm:mb-10 text-center">
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold block mb-1.5 sm:mb-2">
              03 / THE SALON ENVIRONMENT
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#e5e2e1] font-light">
              Acoustic Sanctuary &amp; <span className="italic text-[#e6c364]">Private Stations</span>
            </h2>
          </div>
          <Carousel images={CAROUSEL_IMAGES} />
        </section>

        {/* Verified Accolades & Statistics */}
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#c9a84c]/20">
            <div className="pt-3 sm:pt-4 md:pt-0">
              <span className="font-display text-3xl sm:text-4xl md:text-6xl text-[#e6c364] font-light block">10,000+</span>
              <span className="font-sans text-[9px] sm:text-[10px] md:text-xs text-[#d0c5b2] uppercase tracking-[0.16em] sm:tracking-[0.18em] mt-1.5 sm:mt-2 block font-medium">
                CLIENTS ATTENDED
              </span>
            </div>
            <div className="pt-3 sm:pt-4 md:pt-0">
              <span className="font-display text-3xl sm:text-4xl md:text-6xl text-[#e6c364] font-light block">45+</span>
              <span className="font-sans text-[9px] sm:text-[10px] md:text-xs text-[#d0c5b2] uppercase tracking-[0.16em] sm:tracking-[0.18em] mt-1.5 sm:mt-2 block font-medium">
                PREMIUM RITUALS
              </span>
            </div>
            <div className="pt-3 sm:pt-4 md:pt-0">
              <span className="font-display text-3xl sm:text-4xl md:text-6xl text-[#e6c364] font-light block">4.9</span>
              <span className="font-sans text-[9px] sm:text-[10px] md:text-xs text-[#d0c5b2] uppercase tracking-[0.16em] sm:tracking-[0.18em] mt-1.5 sm:mt-2 block font-medium">
                CLIENT SATISFACTION
              </span>
            </div>
            <div className="pt-3 sm:pt-4 md:pt-0">
              <span className="font-display text-3xl sm:text-4xl md:text-6xl text-[#e6c364] font-light block">01</span>
              <span className="font-sans text-[9px] sm:text-[10px] md:text-xs text-[#d0c5b2] uppercase tracking-[0.16em] sm:tracking-[0.18em] mt-1.5 sm:mt-2 block font-medium">
                EXCLUSIVE PRIVÉ SUITE
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
