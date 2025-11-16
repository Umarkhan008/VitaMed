import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: "ent-consultation",
    title: "LOR Konsultatsiya",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-3 8.5V16a2 2 0 114 0v2.5" />
      </svg>
    ),
    desc: "Quloq, burun va tomoq kasalliklari bo'yicha professional maslahat va tekshiruv xizmatlari.",
  },
  {
    id: "hearing-tests",
    title: "Eshitish Tekshiruvi",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M3 11v3a1 1 0 001 1h1l4 4V7L5 11H4a1 1 0 00-1 1z" />
        <path d="M13.5 8.5c.5.5.8 1.2.8 2s-.3 1.5-.8 2" />
        <path d="M16.5 5.5c1.2 1.2 2 2.8 2 4.5s-.8 3.3-2 4.5" />
      </svg>
    ),
    desc: "Audiometriya va boshqa zamonaviy usullar yordamida eshitish qobiliyatini tekshirish.",
  },
  {
    id: "nose-surgery",
    title: "Burun Operatsiyalari",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 3c-1.5 0-3 1-4 2.5C7 7 6.5 8.5 7 10c.5 1.5 2 2.5 3.5 3L12 14l1.5-1c1.5-.5 3-1.5 3.5-3 .5-1.5 0-3-1-4.5C15 4 13.5 3 12 3z" />
        <circle cx="10" cy="8" r="1" />
        <circle cx="14" cy="8" r="1" />
      </svg>
    ),
    desc: "Rinoplastika, septoplastika va boshqa burun operatsiyalari eng yuqori sifatda.",
  },
  {
    id: "throat-treatment",
    title: "Tomoq Davolash",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4" />
        <path d="M12 8V6a2 2 0 00-4 0v2" />
        <path d="M12 8V6a2 2 0 014 0v2" />
        <path d="M8 12v4c0 2.21 1.79 4 4 4s4-1.79 4-4v-4" />
        <path d="M10 14h4" />
      </svg>
    ),
    desc: "Tonsillektomiya, adenoidektomiya va boshqa tomoq kasalliklarini davolash.",
  },
  {
    id: "ear-cleaning",
    title: "Quloq Tozalash",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 2C8 2 5 5 5 9v6c0 1.1.9 2 2 2h2v-2H7V9c0-2.8 2.2-5 5-5s5 2.2 5 5v6h-2v2h2c1.1 0 2-.9 2-2V9c0-4-3-7-7-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
    desc: "Professional quloq tozalash va quloq tiqinlarini olib tashlash xizmatlari.",
  },
  {
    id: "voice-therapy",
    title: "Ovoz Terapiyasi",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
        <path d="M12 19v4" />
        <path d="M8 23h8" />
      </svg>
    ),
    desc: "Ovoz buzilishlari va nutq muammolarini davolash uchun maxsus terapiya.",
  },
];

const ServiceBg = () => (
  <svg
    className="absolute left-0 top-0 w-full h-[300px] pointer-events-none"
    viewBox="0 0 1920 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.35">
      <path d="M120 60L150 110L120 160L60 160L30 110L60 60L120 60Z" stroke="#ffffff" strokeWidth="2"/>
      <path d="M300 60L330 110L300 160L240 160L210 110L240 60L300 60Z" stroke="#ffffff" strokeWidth="2"/>
      <path d="M480 60L510 110L480 160L420 160L390 110L420 60L480 60Z" stroke="#ffffff" strokeWidth="2"/>
      <path d="M180 180L210 230L180 280L120 280L90 230L120 180L180 180Z" stroke="#ffffff" strokeWidth="2"/>
      <path d="M360 180L390 230L360 280L300 280L270 230L300 180L360 180Z" stroke="#ffffff" strokeWidth="2"/>
    </g>
  </svg>
);

const Service = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#18c2b8] overflow-hidden">
      <ServiceBg />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <div className="text-[#18c2b8] text-lg font-semibold mb-2 bg-white/80 px-4 py-2 rounded inline-block">Xizmatlar</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Bizning Tibbiy Xizmatlarimiz</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto">
            Quloq, burun va tomoq kasalliklari bo'yicha eng zamonaviy va sifatli tibbiy xizmatlarni taqdim etamiz.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <Link
              key={idx}
              to={`/service/${service.id}`}
              className="relative overflow-hidden rounded-2xl shadow-lg flex flex-col items-start transition hover:shadow-xl bg-white group cursor-pointer"
            >
              {/* Hover effect background */}
              <div className="absolute hover:shadow-xl inset-0 bg-[#18c2b8] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 rounded-2xl transition-all duration-500 ease-in-out"></div>
              {/* Card content */}
              <div className="relative z-10 px-8 py-8 w-full">
                <div className="mb-4">
                  {/* Ikon hoverda oq bo'lishi uchun */}
                  <span className="transition-colors duration-500 group-hover:[&>svg]:stroke-white">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#14275b] transition-colors duration-500 group-hover:text-white">{service.title}</h3>
                <p className="text-gray-500 mb-6 text-[15px] transition-colors duration-500 group-hover:text-white">{service.desc}</p>
                <div className="flex items-center gap-2 text-[#18c2b8] font-semibold text-[16px] hover:underline transition-colors duration-500 group-hover:text-white">
                  Batafsil
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;