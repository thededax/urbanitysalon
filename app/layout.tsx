import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono, Cinzel, DM_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp';
import GsapLenisSetup from '@/components/GsapLenisSetup';
import { MobileStickyCTA } from '@/components/layout/mobile-sticky-cta';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { Preloader } from '@/components/ui/preloader';
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const cinzel = Cinzel({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Urbanity Atelier | Quiet Luxury Hair Architecture & Aesthetics Sanctuary',
  description: 'Bespoke hair architecture, artisanal balayage, botanical keratin rituals, and bridal couture privé suites. Crafted with quiet architectural luxury in Bhagalpur.',
  keywords: ['luxury salon', 'bespoke hair atelier', 'balayage studio', 'bridal hair and makeup', 'keratin ritual', 'Urbanity Salon Bhagalpur'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("dark", plusJakartaSans.variable, cormorant.variable, jetbrainsMono.variable, cinzel.variable, dmSans.variable)}>
      <body className="antialiased bg-[#131313] text-[#e5e2e1] selection:bg-[#c9a84c] selection:text-[#080808]" suppressHydrationWarning>
        <Preloader />
        <ScrollProgress />
        <GsapLenisSetup />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
