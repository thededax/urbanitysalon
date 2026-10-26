import Link from 'next/link';

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/918578060606?text=Hello%20Urbanity%20Salon,%20I%20would%20like%20to%20inquire%20about%20a%20private%20ritual%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-8 right-8 bg-[#131313]/90 text-[#e5e2e1] border border-[#c9a84c]/35 backdrop-blur-md px-4 py-2.5 rounded-full items-center gap-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.6)] hover:border-[#e6c364] hover:bg-[#1c1b1b] transition-all duration-300 z-40 group"
      aria-label="Direct WhatsApp Concierge"
    >
      <span className="w-2 h-2 rounded-full bg-[#e6c364] animate-pulse" />
      <span className="material-symbols-outlined text-[#e6c364] text-lg icon-filled">chat</span>
      <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-[#e5e2e1] group-hover:text-[#e6c364] transition-colors">
        CONCIERGE
      </span>
    </Link>
  );
}
