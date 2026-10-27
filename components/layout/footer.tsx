import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-[#e5e2e1] w-full border-t border-[#c9a84c]/20 pb-20 md:pb-0 relative z-20">
      <div className="w-full py-10 sm:py-14 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1380px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 lg:gap-16">
        {/* Brand & Philosophy Column */}
        <div className="md:col-span-4 flex flex-col gap-3 sm:gap-6">
          <div>
            <span className="font-display text-xl sm:text-2xl md:text-3xl tracking-[0.2em] text-[#e5e2e1] block uppercase">
              URBANITY ATELIER
            </span>
            <span className="font-sans text-[8.5px] sm:text-[9px] tracking-[0.3em] text-[#e6c364] uppercase block mt-1 font-medium">
              HAIR ARCHITECTURE &amp; AESTHETICS SANCTUARY
            </span>
          </div>
          <p className="font-sans font-light text-xs md:text-sm text-[#d0c5b2] leading-relaxed max-w-sm">
            A quiet sanctuary dedicated to cranial silhouette precision, artisanal French balayage, botanical trichology rituals, and bridal couture. Founded by Master Stylist Kiran Kishore.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono text-[#c9a84c] tracking-widest pt-1 sm:pt-2">
            <span>BHAGALPUR</span>
            <span>•</span>
            <span>EST. ATELIER</span>
          </div>
        </div>

        {/* Directory Links */}
        <div className="md:col-span-2 flex flex-col gap-2.5 sm:gap-4">
          <h4 className="text-[#c9a84c] font-sans text-[9.5px] sm:text-[10px] tracking-[0.24em] uppercase font-semibold">
            THE ATELIER
          </h4>
          <div className="flex flex-col gap-2 sm:gap-2.5">
            <Link href="/#the-atelier" className="text-[11px] sm:text-xs font-sans text-[#d0c5b2] hover:text-[#e6c364] transition-colors">
              Philosophy &amp; Craft
            </Link>
            <Link href="/#ritual-menu" className="text-[11px] sm:text-xs font-sans text-[#d0c5b2] hover:text-[#e6c364] transition-colors">
              Bespoke Ritual Menu
            </Link>
            <Link href="/#directors" className="text-[11px] sm:text-xs font-sans text-[#d0c5b2] hover:text-[#e6c364] transition-colors">
              Artistic Directors
            </Link>
            <Link href="/#bridal-prive" className="text-[11px] sm:text-xs font-sans text-[#d0c5b2] hover:text-[#e6c364] transition-colors">
              Bridal Privé Lounge
            </Link>
            <Link href="/#lookbook" className="text-[11px] sm:text-xs font-sans text-[#d0c5b2] hover:text-[#e6c364] transition-colors">
              Editorial Lookbook
            </Link>
          </div>
        </div>

        {/* Ritual Offerings */}
        <div className="md:col-span-3 flex flex-col gap-2.5 sm:gap-4">
          <h4 className="text-[#c9a84c] font-sans text-[9.5px] sm:text-[10px] tracking-[0.24em] uppercase font-semibold">
            SIGNATURE RITUALS
          </h4>
          <div className="flex flex-col gap-2 sm:gap-2.5">
            <Link href="/services" className="text-[11px] sm:text-xs font-sans text-[#d0c5b2] hover:text-[#e6c364] transition-colors">
              Precision Haircut &amp; Architecture
            </Link>
            <Link href="/services" className="text-[11px] sm:text-xs font-sans text-[#d0c5b2] hover:text-[#e6c364] transition-colors">
              Dimensional French Balayage
            </Link>
            <Link href="/services" className="text-[11px] sm:text-xs font-sans text-[#d0c5b2] hover:text-[#e6c364] transition-colors">
              Keratin Silk Protein Treatment
            </Link>
            <Link href="/services" className="text-[11px] sm:text-xs font-sans text-[#d0c5b2] hover:text-[#e6c364] transition-colors">
              Hydra-Radiance Cellular Facial
            </Link>
            <Link href="/bridal" className="text-[11px] sm:text-xs font-sans text-[#d0c5b2] hover:text-[#e6c364] transition-colors">
              Bespoke Bridal Couture Timeline
            </Link>
          </div>
        </div>

        {/* Concierge & Visit Coordinates */}
        <div className="md:col-span-3 flex flex-col gap-2.5 sm:gap-4">
          <h4 className="text-[#c9a84c] font-sans text-[9.5px] sm:text-[10px] tracking-[0.24em] uppercase font-semibold">
            ATELIER SANCTUARY
          </h4>
          <div className="flex flex-col gap-2 sm:gap-3 text-xs font-sans text-[#d0c5b2]">
            <p className="leading-relaxed text-[11px] sm:text-xs">
              Sumrit Mandal Complex<br />
              Tilkamanjhi, Bhagalpur, Bihar
            </p>
            <p className="text-[#e5e2e1] text-[11px] sm:text-xs">
              Monday – Sunday: 10:00 AM – 9:00 PM
            </p>
            <a href="tel:+918578060606" className="text-[#e6c364] hover:underline font-mono text-[11px] sm:text-xs pt-0.5">
              +91 8578060606
            </a>
            <div className="pt-1 sm:pt-2">
              <Link
                href="/#concierge-booking"
                className="inline-block border border-[#c9a84c]/40 text-[#e5e2e1] hover:bg-[#c9a84c] hover:text-[#0e0e0e] text-[9.5px] sm:text-[10px] uppercase tracking-[0.2em] px-3.5 sm:px-4 py-2 transition-all rounded-[2px]"
              >
                REQUEST CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hairline Sub-Footer */}
      <div className="w-full border-t border-[#c9a84c]/15 py-4 sm:py-6 px-4 sm:px-6 text-center">
        <div className="max-w-[1380px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2.5 sm:gap-4 text-[9px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.18em] text-[#d0c5b2]/70 font-sans uppercase">
          <span>© {new Date().getFullYear()} URBANITY SALON &amp; LOUNGE. ALL RIGHTS RESERVED.</span>
          <span className="text-[#c9a84c]/80">BHAGALPUR&apos;S PREMIER SALON EXPERIENCE</span>
        </div>
      </div>
    </footer>
  );
}
