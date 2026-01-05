import React, { useState } from 'react';
import user1 from "../public/assets/user.png"
import user2 from "../public/assets/user2.png"
// Guvohliklar ma'lumoti
const testimonialsData = [
  {
    id: 1,
    text: "VitaMed klinikasida davolanishdan juda mamnunman. Shifokorlar juda professional va mehribon. Quloq muammom to'liq hal qilindi. Barcha xodimlarga rahmat!",
    name: "Rustam Xolmatov",
    location: "Qo'qon, O'zbekiston",
    image: user1
  },
  {
    id: 2,
    text: "Burun operatsiyasini bu yerda qildirdim. Natija ajoyib! Shifokorlar juda tajribali va zamonaviy uskunalar ishlatiladi. Hamma narsadan mamnunman.",
    name: "Shahnoza Umarova",
    location: "Farg'ona, O'zbekiston",
    image: user2
  },
  // Qo'shimcha guvohliklarni bu yerga qo'shing
];

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
    <section className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sarlavha */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-teal-50 text-teal-600 font-semibold mb-4 shadow-sm">
            BEMORLARIMIZ FIKRI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142959] leading-tight">
            Mijozlarimiz biz haqimizda nima deyishadi
          </h2>
        </div>

        {/* Karusel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Background Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row items-center p-8 sm:p-12 lg:p-16">
              {/* Profile Section */}
              <div className="relative flex-shrink-0 mb-8 md:mb-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-2xl relative z-10">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg z-20">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C14.8079 14 13.017 12.2091 13.017 10V3H21.017V14.017C21.017 17.883 17.883 21 14.017 21ZM4.017 21V18C4.017 16.8954 4.91243 16 16 16.017 16H7.017V14H5.017C2.80787 14 1.017 12.2091 1.017 10V3H9.017V14.017C9.017 17.883 5.883 21 2.017 21H4.017Z" />
                  </svg>
                </div>
              </div>

              {/* Text Section */}
              <div className="md:ml-12 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg sm:text-xl text-gray-700 italic leading-relaxed mb-8">
                  "{currentTestimonial.text}"
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-[#142959]">{currentTestimonial.name}</h4>
                    <p className="text-teal-600 font-medium">{currentTestimonial.location}</p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={goToPrev}
                      className="w-12 h-12 rounded-full border border-teal-100 flex items-center justify-center hover:bg-teal-50 hover:border-teal-200 transition-all duration-300"
                      aria-label="Oldingi"
                    >
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={goToNext}
                      className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center hover:bg-teal-600 shadow-lg hover:shadow-teal-200 transition-all duration-300"
                      aria-label="Keyingi"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-teal-500 w-10' : 'bg-gray-200 w-2.5'
                  }`}
                aria-label={`Guvohlik ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;