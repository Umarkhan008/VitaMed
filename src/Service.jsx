import React from 'react'

const services = [
  {
    title: "Cardiology",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 21C12 21 7 16.36 5 13.28C3.22 10.46 4.5 7 7.5 7C9.24 7 10.5 8.5 12 10.5C13.5 8.5 14.76 7 16.5 7C19.5 7 20.78 10.46 19 13.28C17 16.36 12 21 12 21Z" />
        <path d="M8 13h2l1-2 2 4h2" />
      </svg>
    ),
    desc: "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinoumy eirmod tempor invidunt.",
  },
  {
    title: "Neurology",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
    desc: "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinoumy eirmod tempor invidunt.",
  },
  {
    title: "Gastroenterology",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 2v20M7 7h10M7 17h10" />
      </svg>
    ),
    desc: "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinoumy eirmod tempor invidunt.",
  },
  {
    title: "Orthopedics",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M12 2v4M12 18v4" />
      </svg>
    ),
    desc: "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinoumy eirmod tempor invidunt.",
  },
  {
    title: "Gynecology",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M12 12v8M8 16h8" />
      </svg>
    ),
    desc: "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinoumy eirmod tempor invidunt.",
  },
  {
    title: "Dental Surgery",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 2C7 2 4 7 4 12c0 5 3 10 8 10s8-5 8-10c0-5-3-10-8-10z" />
        <path d="M12 6v6" />
      </svg>
    ),
    desc: "Lorem ipsum dolor sit amet, consetet sadipscing elitr, sed dinoumy eirmod tempor invidunt.",
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
          <div className="text-[#18c2b8] text-lg font-semibold mb-2 bg-white/80 px-4 py-2 rounded inline-block">Services</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Healthcare Services</h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinoumy eirmod tempor invidunt ut labore et dolore magn.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl shadow-lg flex flex-col items-start transition hover:shadow-xl bg-white group"
            >
              {/* Hover effect background */}
              <div className="absolute hover:shadow-xl inset-0 bg-[#18c2b8] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 rounded-2xl transition-all duration-500 ease-in-out"></div>
              {/* Card content */}
              <div className="relative z-10 px-8 py-8">
                <div className="mb-4">
                  {/* Ikon hoverda oq bo‘lishi uchun */}
                  <span className="transition-colors duration-500 group-hover:[&>svg]:stroke-white">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#14275b] transition-colors duration-500 group-hover:text-white">{service.title}</h3>
                <p className="text-gray-500 mb-6 text-[15px] transition-colors duration-500 group-hover:text-white">{service.desc}</p>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#18c2b8] font-semibold text-[16px] hover:underline transition-colors duration-500 group-hover:text-white"
                >
                  Read More
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;