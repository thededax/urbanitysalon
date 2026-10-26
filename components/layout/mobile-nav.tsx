'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Global Mobile Navigation" className="md:hidden bg-[#131313] shadow-[0_-10px_20px_rgba(0,0,0,0.6)] border-t border-[#c9a84c]/20 fixed bottom-0 w-full z-50 flex justify-around items-center py-3 px-4 pb-safe">
      <a href="tel:+918578060606" className="text-[#d0c5b2] hover:text-[#e6c364] flex flex-col items-center gap-1 active:bg-[#c9a84c]/10 transition-colors p-2 rounded">
        <span className="material-symbols-outlined text-xl text-[#e6c364]">call</span>
        <span className="font-sans uppercase text-[10px] tracking-widest">Call</span>
      </a>
      <Link href="/services" className={`${pathname === '/services' ? 'text-[#e6c364]' : 'text-[#d0c5b2]'} flex flex-col items-center gap-1 active:bg-[#c9a84c]/10 transition-colors p-2 rounded`}>
        <span className="material-symbols-outlined text-xl">spa</span>
        <span className="font-sans uppercase text-[10px] tracking-widest">Services</span>
      </Link>
      <Link href="/#concierge-booking" className={`${pathname === '/contact' ? 'text-[#e6c364]' : 'text-[#d0c5b2]'} flex flex-col items-center gap-1 active:bg-[#c9a84c]/10 transition-colors p-2 rounded`}>
        <span className="material-symbols-outlined text-xl">calendar_month</span>
        <span className="font-sans uppercase text-[10px] tracking-widest">Reserve</span>
      </Link>
    </nav>
  );
}
