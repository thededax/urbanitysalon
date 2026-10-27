'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/#ritual-menu', label: 'RITUALS' },
    { href: '/#the-atelier', label: 'PHILOSOPHY' },
    { href: '/#directors', label: 'DIRECTORS' },
    { href: '/#bridal-prive', label: 'BRIDAL PRIVÉ' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 ease-out ${
          menuOpen
            ? 'bg-[#131313] border-b border-[#c9a84c]/20'
            : scrolled
            ? 'bg-[#131313]/92 backdrop-blur-md border-b border-[#c9a84c]/20 shadow-[0_4px_30px_rgba(0,0,0,0.55)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 h-[58px] sm:h-[68px] md:h-[76px] w-full max-w-[1380px] mx-auto">
          {/* Atelier Wordmark */}
          <Link href="/" className="group flex flex-col justify-center">
            <span className="font-display text-lg sm:text-xl md:text-2xl tracking-[0.24em] text-[#e5e2e1] group-hover:text-[#e6c364] transition-colors uppercase font-light">
              URBANITY
            </span>
            <span className="font-sans text-[7.5px] sm:text-[8px] md:text-[9px] tracking-[0.3em] text-[#e6c364] uppercase font-medium -mt-0.5">
              HAIR ATELIER &amp; PRIVÉ
            </span>
          </Link>

          {/* Desktop Navigation - Minimal & Essential */}
          <nav aria-label="Atelier Navigation" className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const isMatch = pathname === link.href || (link.href.startsWith('/#') && pathname === '/');
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#d0c5b2] hover:text-[#e6c364] transition-colors relative py-1 group font-medium"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#e6c364] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              );
            })}
          </nav>

          {/* Header Action Elements */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href="tel:+918578060606"
              className="hidden xl:inline-flex items-center gap-1.5 font-sans text-[11px] tracking-[0.16em] uppercase text-[#d0c5b2] hover:text-[#e6c364] transition-colors"
              title="Speak with Atelier Concierge"
            >
              <span className="material-symbols-outlined text-[15px] text-[#e6c364]">call</span>
              <span>+91 8578060606</span>
            </a>

            <Link
              href="/#concierge-booking"
              className="inline-flex items-center justify-center font-sans text-[11px] tracking-[0.18em] uppercase bg-[#e6c364] text-[#131313] hover:bg-[#ffe08f] px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-[0_2px_14px_rgba(230,195,100,0.22)]"
            >
              RESERVE
            </Link>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 relative focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Atelier Menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-[1.5px] bg-[#e6c364] transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] bg-[#e6c364] transition-all duration-300 my-[3px] ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[#e6c364] transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-1.5'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Editorial Overlay */}
      <div
        className={`fixed inset-0 bg-[#131313]/98 backdrop-blur-2xl z-[140] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between p-6 sm:p-8 md:p-12 overflow-y-auto max-h-screen ${
          menuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex justify-between items-center border-b border-[#c9a84c]/20 pb-4 mt-12 sm:mt-16">
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.22em] text-[#e6c364] uppercase font-semibold">
            00 / THE ATELIER DIRECTORY
          </span>
          <span className="font-mono text-[11px] sm:text-xs text-[#d0c5b2]">BHAGALPUR</span>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 py-6 sm:py-8">
          {links.map((link, idx) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-xl sm:text-2xl md:text-3xl text-[#e5e2e1] hover:text-[#e6c364] transition-colors flex items-center justify-between group"
            >
              <span>{link.label}</span>
              <span className="font-mono text-xs text-[#e6c364]/70 group-hover:translate-x-1 transition-transform">
                0{idx + 1} →
              </span>
            </Link>
          ))}
          <Link
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="font-display text-xl sm:text-2xl md:text-3xl text-[#e5e2e1] hover:text-[#e6c364] transition-colors flex items-center justify-between group"
          >
            <span>SERVICES MENU</span>
            <span className="font-mono text-xs text-[#e6c364]/70 group-hover:translate-x-1 transition-transform">
              06 →
            </span>
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="font-display text-xl sm:text-2xl md:text-3xl text-[#e5e2e1] hover:text-[#e6c364] transition-colors flex items-center justify-between group"
          >
            <span>OUR STORY</span>
            <span className="font-mono text-xs text-[#e6c364]/70 group-hover:translate-x-1 transition-transform">
              07 →
            </span>
          </Link>
        </div>

        <div className="pt-4 sm:pt-6 border-t border-[#c9a84c]/20 flex flex-col gap-3 sm:gap-4 pb-6 sm:pb-0">
          <Link
            href="/#concierge-booking"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center py-3.5 bg-[#c9a84c] text-[#0e0e0e] font-sans text-xs uppercase tracking-[0.2em] font-bold rounded-[2px]"
          >
            RESERVE PRIVATE CONSULTATION
          </Link>
          <div className="flex justify-between items-center text-[10px] tracking-wider text-[#d0c5b2] font-sans uppercase">
            <span>Sumrit Mandal Complex</span>
            <a href="tel:+918578060606" className="text-[#e6c364] hover:underline font-mono">
              +91 8578060606
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
