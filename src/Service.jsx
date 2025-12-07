import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: "ent-consultation",
    title: "LOR Konsultatsiya",
    icon: (
   <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 12a4 4 0 1 0-4-4" />
  <path d="M8 8v6a4 4 0 1 0 8 0V8" />
  <path d="M16 8a4 4 0 1 0-4-4" />
  <path d="M12 20v2M9 22h6" />
</svg>

    ),
    desc: "Quloq, burun va tomoq kasalliklari bo'yicha professional maslahat va tekshiruv xizmatlari.",
  },
  {
    
    id: "hearing-tests",
    title: "Eshitish Tekshiruvi",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6" />
        <path d="M12 17v6" />
        <path d="M4.22 4.22l4.24 4.24" />
        <path d="M15.54 15.54l4.24 4.24" />
        <path d="M1 12h6" />
        <path d="M17 12h6" />
        <path d="M4.22 19.78l4.24-4.24" />
        <path d="M15.54 8.46l4.24-4.24" />
      </svg>
    ),
    desc: "Audiometriya va boshqa zamonaviy usullar yordamida eshitish qobiliyatini tekshirish.",
  },
  {
    id: "nose-surgery",
    title: "Burun Operatsiyalari",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <path d="M3 12h18m-9-9v18" />
        <path d="M7 7l10 10M17 7L7 17" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    desc: "Rinoplastika, septoplastika va boshqa burun operatsiyalari eng yuqori sifatda.",
  },
  {
    id: "throat-treatment",
    title: "Tomoq Davolash",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <rect x="3" y="8" width="18" height="10" rx="2" />
        <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" />
        <line x1="12" y1="11" x2="12" y2="13" />
        <line x1="12" y1="15" x2="12" y2="17" />
      </svg>
    ),
    desc: "Tonsillektomiya, adenoidektomiya va boshqa tomoq kasalliklarini davolash.",
  },
  {
    id: "ear-cleaning",
    title: "Quloq Tozalash",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="2" fill="#01bdb2" />
      </svg>
    ),
    desc: "Professional quloq tozalash va quloq tiqinlarini olib tashlash xizmatlari.",
  },
  {
    id: "voice-therapy",
    title: "Ovoz Terapiyasi",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
        <circle cx="12" cy="8" r="1" />
        <circle cx="12" cy="11" r="1" />
        <circle cx="12" cy="14" r="1" />
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