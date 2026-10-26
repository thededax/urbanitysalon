'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
  const [appointmentType, setAppointmentType] = useState<string>('Signature Ritual Booking');
  const [tier, setTier] = useState<string>('Artistic Director');
  const [service, setService] = useState<string>('Precision Haircut & Cranial Architecture');
  const [date, setDate] = useState<string>('');
  const [timeWindow, setTimeWindow] = useState<string>('Afternoon Atelier (1:00 PM – 5:00 PM)');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsAppMessage = encodeURIComponent(
    `Hello Urbanity Salon Concierge,\n\nI would like to request an appointment:\n` +
      `• Type: ${appointmentType}\n` +
      `• Tier: ${tier}\n` +
      `• Ritual: ${service}\n` +
      `• Date: ${date || 'Earliest available'}\n` +
      `• Window: ${timeWindow}\n` +
      `• Client Name: ${name || 'Valued Guest'}\n` +
      `• Contact: ${phone || 'Provided upon arrival'}\n` +
      (notes ? `• Notes: ${notes}\n` : '') +
      `\nPlease let me know your availability at the Tilkamanjhi salon.`
  );

  return (
    <main className="w-full bg-[#131313] text-[#e5e2e1] pt-24 pb-32 px-6 md:px-12 selection:bg-[#c9a84c] selection:text-[#080808]">
      <div className="max-w-[1380px] mx-auto">
        {/* Header */}
        <section className="py-12 md:py-20 text-center max-w-3xl mx-auto border-b border-[#c9a84c]/20">
          <span className="font-sans text-[11px] tracking-[0.24em] text-[#e6c364] uppercase font-semibold block mb-3">
            01 / CONCIERGE &amp; RESERVATION SUITE
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#e5e2e1] font-light leading-tight">
            Reserve Your Private <span className="italic text-[#e6c364]">Sanctuary Session</span>
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#d0c5b2] mt-4 font-light leading-relaxed max-w-xl mx-auto">
            Urbanity Salon operates exclusively by appointment to ensure unhurried master craftsmanship, zero waiting
            lines, and a serene acoustic environment.
          </p>
        </section>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Left Column: Coordinates & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Atelier Address Card */}
            <div className="bg-[#1c1b1b] border border-[#c9a84c]/25 p-8 rounded-[2px] space-y-6">
              <span className="font-sans text-[10px] tracking-[0.22em] text-[#e6c364] uppercase font-semibold block">
                ATELIER COORDINATES
              </span>

              <div className="space-y-1">
                <h3 className="font-display text-2xl text-[#e5e2e1]">Sumrit Mandal Complex</h3>
                <p className="font-sans text-xs text-[#d0c5b2] leading-relaxed">
                  Tilkamanjhi, Bhagalpur, Bihar
                </p>
              </div>

              <div className="pt-4 border-t border-[#c9a84c]/20 space-y-3 font-sans text-xs text-[#d0c5b2]">
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-wider font-semibold text-[#e5e2e1]">STUDIO HOURS</span>
                  <span>10:00 AM – 9:00 PM (Daily)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-wider font-semibold text-[#e5e2e1]">DIRECT TELEPHONE</span>
                  <a href="tel:+918578060606" className="font-mono text-[#e6c364] hover:underline">
                    +91 8578060606
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-wider font-semibold text-[#e5e2e1]">VALET SERVICE</span>
                  <span>Complimentary on arrival</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Banners */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <a
                href="tel:+918578060606"
                className="bg-[#1c1b1b] border border-[#c9a84c]/20 p-5 rounded-[2px] flex items-center justify-between group hover:border-[#e6c364] transition-luxury"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#e6c364] text-xl">call</span>
                  <div>
                    <span className="font-sans text-[10px] tracking-widest text-[#d0c5b2] uppercase block">
                      TELEPHONE
                    </span>
                    <span className="font-mono text-sm text-[#e5e2e1]">+91 8578060606</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-xs text-[#e6c364] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>

              <a
                href={`https://wa.me/918578060606?text=${whatsAppMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1c1b1b] border border-[#c9a84c]/20 p-5 rounded-[2px] flex items-center justify-between group hover:border-[#e6c364] transition-luxury"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#e6c364] text-xl icon-filled">chat</span>
                  <div>
                    <span className="font-sans text-[10px] tracking-widest text-[#d0c5b2] uppercase block">
                      WHATSAPP CONCIERGE
                    </span>
                    <span className="font-mono text-sm text-[#e5e2e1]">Direct Consultation Line</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-xs text-[#e6c364] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>

              <a
                href="https://www.instagram.com/urbanity_salon"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1c1b1b] border border-[#c9a84c]/20 p-5 rounded-[2px] flex items-center justify-between group hover:border-[#e6c364] transition-luxury"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#e6c364] text-xl">photo_camera</span>
                  <div>
                    <span className="font-sans text-[10px] tracking-widest text-[#d0c5b2] uppercase block">
                      INSTAGRAM SALON
                    </span>
                    <span className="font-mono text-sm text-[#e5e2e1]">@urbanity_salon</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-xs text-[#e6c364] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>

            {/* Map Frame */}
            <div className="relative aspect-[16/9] w-full rounded-[2px] overflow-hidden border border-[#c9a84c]/20 bg-[#131313]">
              <Image
                src="https://picsum.photos/seed/map1/800/450"
                alt="Map to Urbanity Salon in Tilkamanjhi Bhagalpur"
                fill
                className="object-cover filter contrast-[0.9] brightness-[0.7]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-[#131313]/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex justify-between items-center text-[10px] font-sans tracking-widest text-[#e6c364] uppercase font-semibold">
                  <span>TILKAMANJHI COORDINATES</span>
                  <span className="w-2 h-2 rounded-full bg-[#e6c364] animate-ping" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#e5e2e1] block">
                    Sumrit Mandal Complex, Tilkamanjhi
                  </span>
                  <a
                    href="https://maps.google.com/?q=Sumrit+Mandal+Complex+Tilkamanjhi+Bhagalpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 font-sans text-[10px] tracking-[0.18em] text-[#e6c364] uppercase hover:underline"
                  >
                    OPEN IN GOOGLE MAPS <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#1c1b1b] border border-[#c9a84c]/25 p-8 md:p-12 rounded-[2px]">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <span className="material-symbols-outlined text-4xl text-[#e6c364]">check_circle</span>
                <h3 className="font-display text-3xl text-[#e5e2e1]">Reservation Request Dispatched</h3>
                <p className="font-sans text-xs md:text-sm text-[#d0c5b2] max-w-md mx-auto leading-relaxed">
                  Thank you, {name || 'Valued Guest'}. Our concierge team will review your requested slot and contact you
                  promptly to confirm your private session.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href={`https://wa.me/918578060606?text=${whatsAppMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs tracking-[0.18em] uppercase bg-[#c9a84c] text-[#080808] px-6 py-3.5 rounded-[2px] font-bold hover:bg-[#ffe08f] transition-all inline-flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    CONFIRM INSTANTLY VIA WHATSAPP
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-sans text-xs tracking-[0.18em] uppercase border border-[#c9a84c] text-[#e5e2e1] px-6 py-3.5 rounded-[2px] transition-all font-medium"
                  >
                    SUBMIT NEW REQUEST
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Appointment Type Toggle */}
                <div>
                  <label className="font-sans text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-3">
                    APPOINTMENT NATURE
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAppointmentType('Signature Ritual Booking')}
                      className={`text-left p-3.5 border rounded-[2px] transition-all font-sans text-xs ${
                        appointmentType === 'Signature Ritual Booking'
                          ? 'border-[#c9a84c] bg-[#c9a84c] text-[#080808] font-bold'
                          : 'border-[#c9a84c]/20 bg-[#131313] text-[#e5e2e1] hover:border-[#c9a84c]'
                      }`}
                    >
                      <span className="block font-medium">Signature Ritual Booking</span>
                      <span className="text-[10px] opacity-80 block mt-0.5">Complete sensory treatment</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAppointmentType('15-Min Private Diagnostic Consultation')}
                      className={`text-left p-3.5 border rounded-[2px] transition-all font-sans text-xs ${
                        appointmentType === '15-Min Private Diagnostic Consultation'
                          ? 'border-[#c9a84c] bg-[#c9a84c] text-[#080808] font-bold'
                          : 'border-[#c9a84c]/20 bg-[#131313] text-[#e5e2e1] hover:border-[#c9a84c]'
                      }`}
                    >
                      <span className="block font-medium">15-Min Private Diagnostic</span>
                      <span className="text-[10px] opacity-80 block mt-0.5">Cranial mapping &amp; color preview</span>
                    </button>
                  </div>
                </div>

                {/* Stylist Tier & Ritual */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-tier"
                      className="font-sans text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-2"
                    >
                      PREFERRED STYLIST TIER
                    </label>
                    <select
                      id="contact-tier"
                      value={tier}
                      onChange={(e) => setTier(e.target.value)}
                      className="w-full bg-[#131313] border border-[#c9a84c]/25 text-[#e5e2e1] font-sans text-xs p-3.5 rounded-[2px] focus:outline-none focus:border-[#c9a84c]"
                    >
                      <option value="Senior Stylist" className="bg-[#1c1b1b] text-[#e5e2e1]">Senior Stylist</option>
                      <option value="Artistic Director" className="bg-[#1c1b1b] text-[#e5e2e1]">Artistic Director</option>
                      <option value="Founder Kiran Kishore" className="bg-[#1c1b1b] text-[#e5e2e1]">Founder Kiran Kishore (Direct Atelier)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="font-sans text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-2"
                    >
                      SELECTED RITUAL
                    </label>
                    <select
                      id="contact-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#131313] border border-[#c9a84c]/25 text-[#e5e2e1] font-sans text-xs p-3.5 rounded-[2px] focus:outline-none focus:border-[#c9a84c]"
                    >
                      <option value="Precision Haircut & Cranial Architecture" className="bg-[#1c1b1b] text-[#e5e2e1]">
                        Precision Haircut &amp; Cranial Architecture
                      </option>
                      <option value="Dimensional French Balayage & Glaze" className="bg-[#1c1b1b] text-[#e5e2e1]">
                        Dimensional French Balayage &amp; Glaze
                      </option>
                      <option value="Bio-Keratin & Silk Protein Infusion" className="bg-[#1c1b1b] text-[#e5e2e1]">
                        Bio-Keratin &amp; Silk Protein Infusion
                      </option>
                      <option value="Scalp Trichology & Botanical Stem-Cell Ritual" className="bg-[#1c1b1b] text-[#e5e2e1]">
                        Scalp Trichology &amp; Botanical Stem-Cell Ritual
                      </option>
                      <option value="Hydra-Radiance Cellular Facial" className="bg-[#1c1b1b] text-[#e5e2e1]">Hydra-Radiance Cellular Facial</option>
                      <option value="Luxury Russian Manicure & Nail Architecture" className="bg-[#1c1b1b] text-[#e5e2e1]">
                        Luxury Russian Manicure &amp; Nail Architecture
                      </option>
                      <option value="Red Carpet Evening Couture Glamour" className="bg-[#1c1b1b] text-[#e5e2e1]">
                        Red Carpet Evening Couture Glamour
                      </option>
                      <option value="Bespoke Bridal Couture Day Ritual" className="bg-[#1c1b1b] text-[#e5e2e1]">
                        Bespoke Bridal Couture Day Ritual
                      </option>
                      <option value="Swedish Restorative Body Therapy" className="bg-[#1c1b1b] text-[#e5e2e1]">
                        Swedish Restorative Body Therapy
                      </option>
                    </select>
                  </div>
                </div>

                {/* Date & Window */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-date"
                      className="font-sans text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-2"
                    >
                      PREFERRED DATE
                    </label>
                    <input
                      type="date"
                      id="contact-date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full bg-[#131313] border border-[#c9a84c]/25 text-[#e5e2e1] font-sans text-xs p-3.5 rounded-[2px] focus:outline-none focus:border-[#c9a84c] [color-scheme:dark]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-window"
                      className="font-sans text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-2"
                    >
                      TIME WINDOW
                    </label>
                    <select
                      id="contact-window"
                      value={timeWindow}
                      onChange={(e) => setTimeWindow(e.target.value)}
                      className="w-full bg-[#131313] border border-[#c9a84c]/25 text-[#e5e2e1] font-sans text-xs p-3.5 rounded-[2px] focus:outline-none focus:border-[#c9a84c]"
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

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="font-sans text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-2"
                    >
                      CLIENT FULL NAME
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      placeholder="e.g. Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-[#131313] border border-[#c9a84c]/25 text-[#e5e2e1] font-sans text-xs p-3.5 rounded-[2px] focus:outline-none focus:border-[#c9a84c] placeholder:text-[#d0c5b2]/40"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="font-sans text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-2"
                    >
                      PHONE / WHATSAPP NUMBER
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      placeholder="+91 00000 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-[#131313] border border-[#c9a84c]/25 text-[#e5e2e1] font-sans text-xs p-3.5 rounded-[2px] focus:outline-none focus:border-[#c9a84c] placeholder:text-[#d0c5b2]/40"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-sans text-[10px] tracking-[0.2em] text-[#e6c364] uppercase font-semibold block mb-2"
                  >
                    SPECIFIC REQUESTS OR FIBER HISTORY (OPTIONAL)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Any prior color processes, chemical smoothing, or event dates we should be aware of?"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#131313] border border-[#c9a84c]/25 text-[#e5e2e1] font-sans text-xs p-3.5 rounded-[2px] focus:outline-none focus:border-[#c9a84c] placeholder:text-[#d0c5b2]/40 resize-none"
                  />
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    type="submit"
                    className="font-sans text-xs tracking-[0.18em] uppercase bg-[#c9a84c] text-[#080808] px-8 py-4 rounded-[2px] font-bold hover:bg-[#ffe08f] transition-all flex-1 text-center shimmer-btn"
                  >
                    DISPATCH RESERVATION REQUEST
                  </button>
                  <a
                    href={`https://wa.me/918578060606?text=${whatsAppMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs tracking-[0.18em] uppercase border border-[#c9a84c] text-[#e6c364] hover:bg-[#c9a84c] hover:text-[#080808] px-6 py-4 rounded-[2px] transition-all text-center inline-flex items-center justify-center gap-2 font-medium"
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    WHATSAPP CONCIERGE
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
