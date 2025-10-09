import React, { useState } from 'react';

// Guvohliklar ma'lumoti
const testimonialsData = [
  {
    id: 1,
    text: "I could use it or rent it. The ongoing costs even before fixing it was a huge burden and very overwhelming, up until your team sold my house in only days. Your service was beyond my expectation.",
    name: "Heather Benett",
    location: "East Hampton, NY",
    image: "https://avatars.mds.yandex.net/i?id=8da64a1e819ebc65cb3d8ca7a8ad149e_l-5419089-images-thumbs&n=13"
  },
  {
    id: 2,
    text: "I inherited my grandparents house which needed desperate repairs before I could use it or rent it. The ongoing costs even before fixing it was a huge burden and very overwhelming, up until your team sold my house in only days. Your service was beyond my expectation.",
    name: "Benett",
    location: "East, NY",
    image: "https://avatars.mds.yandex.net/i?id=a1915cd409cb21cc9e9564a3ee0bd0c8_l-2375701-images-thumbs&n=13"
  },
  // Qo'shimcha guvohliklarni bu yerga qo'shing
];

const mainColor = "#01bdb2";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonialsData[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1)
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1)
    );
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Sarlavha */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold" style={{ color: mainColor }}>Testimonials</h1>
        <p className="mt-2 text-lg text-gray-500">See what people are saying.</p>
        <div className="w-10 h-1 mx-auto mt-2 rounded" style={{ background: mainColor }}></div>
      </div>

      {/* Karusel */}
      <div
        className="relative flex flex-col md:flex-row items-center justify-center p-8 md:p-12 rounded-2xl shadow-xl max-w-3xl mx-auto border"
        style={{
          background: `linear-gradient(135deg, #fff 60%, ${mainColor}20 100%)`,
          borderColor: `${mainColor}40`
        }}
      >
        {/* Chap tugma */}
        <button
          onClick={goToPrev}
          className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border flex items-center justify-center shadow transition duration-200"
          style={{
            borderColor: `${mainColor}60`,
            color: mainColor
          }}
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        {/* Profil rasm va fon */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0 mb-6 md:mb-0">
          {/* Asosiy rangli gradient doira */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-44 h-44 md:w-56 md:h-56 rounded-full opacity-30"
              style={{
                background: `linear-gradient(135deg, ${mainColor} 60%, #fff 100%)`
              }}
            ></div>
          </div>
          {/* Oq doira */}
          <div className="absolute left-6 top-8 w-20 h-20 rounded-full bg-white opacity-60 blur-sm"></div>
          {/* Rasm */}
          <img
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover z-10 shadow-lg border-4 border-white mx-auto"
          />
        </div>

        {/* Matn va ism */}
        <div className="flex-1 md:ml-10 text-center md:text-left px-4 md:px-0">
          <span
            className="text-6xl font-serif absolute left-0 md:left-[-40px] top-0 select-none"
            style={{ color: `${mainColor}40` }}
          >"</span>
          <p className="text-lg text-gray-700 italic mb-6 relative z-10">
            {currentTestimonial.text}
          </p>
          <div className="mt-2">
            <span className="block text-xl font-bold" style={{ color: mainColor }}>{currentTestimonial.name}</span>
            <span className="block text-sm text-gray-400">{currentTestimonial.location}</span>
          </div>
        </div>

        {/* O'ng tugma */}
        <button
          onClick={goToNext}
          className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow transition duration-200"
          style={{
            background: mainColor,
            color: "#fff"
          }}
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      {/* Indikatorlar */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer h-2 rounded-full transition-all duration-300`}
            style={{
              width: index === currentIndex ? 24 : 8,
              background: index === currentIndex ? mainColor : `${mainColor}40`
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;