import React, { useEffect, useState } from 'react'
import doctor1 from '../public/assets/bexruzbek.jpg'
import doctor2 from '../public/assets/bosh.jpg'
import doctor3 from '../public/assets/mainDoctor2.png'
import doctor4 from '../public/assets/anot.png'
const teamMembers = [
  {
    name: 'Dr. Muxtorov Behruz',
    role: 'LOR SHIFOKOR',
    experience: '3 yil',
    img: doctor1,
  },
  {
    name: 'Dr. G‘afurov Abdushoxid',
    role: 'LOR SHIFOKOR',
    experience: '15 yil',
    img: doctor3,
  },
  {
    name: 'Dr. Kimsanov Otajon',
    role: 'LOR SHIFOKOR',
    experience: '12 yil',
    img: doctor2,
  },
  {
    name: 'Dr. Malika Yusupova',
    role: 'LOR SHIFOKOR',
    experience: '13 yil',
    img: doctor4,
  },
]

const ShareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7" />
    <path d="M16 6l-4-4-4 4" />
    <path d="M12 2v14" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94z" />
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.46 6c-.77.34-1.6.57-2.46.68a4.27 4.27 0 001.87-2.36 8.56 8.56 0 01-2.71 1.03 4.26 4.26 0 00-7.26 3.88 12.09 12.09 0 01-8.78-4.45 4.26 4.26 0 001.32 5.68 4.23 4.23 0 01-1.93-.53v.05a4.26 4.26 0 003.42 4.18 4.3 4.3 0 01-1.92.07 4.27 4.27 0 003.98 2.96A8.54 8.54 0 012 19.54a12.06 12.06 0 006.54 1.92c7.85 0 12.14-6.5 12.14-12.13 0-.18 0-.36-.01-.54A8.67 8.67 0 0022.46 6z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.39V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43A2.06 2.06 0 113.27 5.37a2.06 2.06 0 012.07 2.06zM6.78 20.45H3.56V9h3.22v11.45z" />
  </svg>
)

const TeamCard = ({ member }) => {
  return (
    <div className="group flex-shrink-0 p-2 w-full">
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-96 overflow-hidden bg-gray-200">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#01bdb2]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              <a href="#" aria-label="Share on Facebook" className="hover:text-white/90 transition-colors"><FacebookIcon /></a>
              <a href="#" aria-label="Share on Twitter" className="hover:text-white/90 transition-colors"><TwitterIcon /></a>
              <a href="#" aria-label="Share on LinkedIn" className="hover:text-white/90 transition-colors"><LinkedinIcon /></a>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-8 text-center">
          <h3 className="text-2xl font-extrabold text-[#142959] mb-2">
            {member.name}
          </h3>
          <p className="text-base text-[#01bdb2] font-semibold tracking-wide mb-3">{member.role}</p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-[#01bdb2]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z" />
            </svg>
            <span className="font-semibold">Tajriba: {member.experience}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, teamMembers.length - itemsPerView)

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex))
  }, [maxIndex])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col items-center mb-12">
        <span className="inline-block px-4 py-2 rounded-full bg-[#f0fffd] text-[#01bdb2] font-semibold mb-4 shadow-sm">BIZNING JAMOA</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#142959] text-center leading-tight">
          Bizning Mutaxassislarimiz
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {teamMembers.map((m) => (
              <div
                key={m.name}
                className="px-4 flex-shrink-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <TeamCard member={m} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 lg:left-0 top-1/2 -translate-y-1/2 lg:-translate-x-12 bg-[#01bdb2] hover:bg-[#009a8f] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 lg:right-0 top-1/2 -translate-y-1/2 lg:translate-x-12 bg-[#01bdb2] hover:bg-[#009a8f] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Carousel Dots */}
      <div className="mt-12 flex items-center justify-center gap-3">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#01bdb2] w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Team