'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function MobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full h-[54px] bg-[#131313]/96 backdrop-blur-md border-t border-[#c9a84c]/30 z-[100] md:hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="grid grid-cols-3 h-full divide-x divide-[#c9a84c]/20 text-[10px] tracking-[0.18em] uppercase items-center text-center">
        <a
          href="tel:+918578060606"
          className="flex items-center justify-center gap-1.5 h-full text-[#e5e2e1] active:bg-[#c9a84c]/10 transition-colors"
        >
          <span className="material-symbols-outlined text-[17px] text-[#e6c364]">call</span>
          <span className="font-sans font-medium">CALL</span>
        </a>
        <a
          href="https://wa.me/918578060606?text=Hello%20Urbanity%20Salon,%20I%20would%20like%20to%20inquire%20about%20a%20private%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 h-full text-[#e5e2e1] active:bg-[#c9a84c]/10 transition-colors"
        >
          <span className="material-symbols-outlined text-[17px] text-[#e6c364]">chat</span>
          <span className="font-sans font-medium">CONCIERGE</span>
        </a>
        <Link
          href="/#concierge-booking"
          className="flex items-center justify-center gap-1.5 h-full bg-[#c9a84c] text-[#0e0e0e] font-semibold font-sans active:bg-[#ffe08f] transition-colors"
        >
          <span className="material-symbols-outlined text-[17px]">calendar_month</span>
          <span>RESERVE</span>
        </Link>
      </div>
    </div>
  );
}
