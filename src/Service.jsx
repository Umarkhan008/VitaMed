import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: "ent-consultation",
    title: "LOR Konsultatsiya",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <circle cx="12" cy="7" r="3" />
        <path d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
        <path d="M9 11c.5 1 1.5 1.5 3 1.5s2.5-.5 3-1.5" />
      </svg>
    ),
    desc: "Quloq, burun va tomoq kasalliklari bo'yicha professional maslahat va tekshiruv xizmatlari.",
  },
  {
    id: "hearing-tests",
    title: "Eshitish Tekshiruvi",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <path d="M7 11a5 5 0 019-3" />
        <path d="M7 11v2a3 3 0 003 3h1" />
        <path d="M17 9a5 5 0 01-1.5 3.5" />
        <circle cx="6" cy="18" r="1.5" />
      </svg>
    ),
    desc: "Audiometriya va boshqa zamonaviy usullar yordamida eshitish qobiliyatini tekshirish.",
  },
  {
    id: "nose-surgery",
    title: "Burun Operatsiyalari",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <path d="M10 3c-1.5 2-2 3.5-2 5 0 1.5.5 3 1.5 4.5L11 15" />
        <path d="M14 3c1.5 2 2 3.5 2 5 0 1.5-.5 3-1.5 4.5L13 15" />
        <path d="M10 19a2 2 0 004 0" />
      </svg>
    ),
    desc: "Rinoplastika, septoplastika va boshqa burun operatsiyalari eng yuqori sifatda.",
  },
  {
    id: "throat-treatment",
    title: "Tomoq Davolash",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <rect x="9" y="3" width="6" height="8" rx="3" />
        <path d="M12 11v6" />
        <path d="M8 14c0 2.2 1.8 4 4 4s4-1.8 4-4" />
      </svg>
    ),
    desc: "Tonsillektomiya, adenoidektomiya va boshqa tomoq kasalliklarini davolash.",
  },
  {
    id: "ear-cleaning",
    title: "Quloq Tozalash",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <path d="M8 10a4 4 0 018 0c0 1.5-.5 2.5-1.5 3.5L13 15" />
        <path d="M7 10a5 5 0 0110 0c0 2-1 3.5-2.5 4.8L12 18" />
        <circle cx="7" cy="18" r="1.5" />
      </svg>
    ),
    desc: "Professional quloq tozalash va quloq tiqinlarini olib tashlash xizmatlari.",
  },
  {
    id: "voice-therapy",
    title: "Ovoz Terapiyasi",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <rect x="9" y="4" width="6" height="10" rx="3" />
        <path d="M5 10a7 7 0 0014 0" />
        <path d="M12 18v3" />
        <path d="M9 21h6" />
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