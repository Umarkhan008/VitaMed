import React, { useEffect, useState } from 'react'
import { fetchTeamMembers } from './pages/teamAPI.js'

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
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.665 3.717c.18-.847-.53-1.498-1.258-1.139L3.483 11.2C2.65 11.58 2.67 12.607 3.513 12.96l4.28 1.797 9.873-6.126c.465-.28.892-.047.541.26l-7.994 7.11 3.582 2.757c.66.52 1.57.26 1.748-.567l3.122-14.47z" />
  </svg>
)

const TeamCard = ({ member }) => {
  return (
    <div className="group flex-shrink-0 p-2 w-full">
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-96 overflow-hidden bg-gray-200">
          <img
            src={member.image || '/assets/logo.jpg'}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.src = '/assets/logo.jpg' }}
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#01bdb2]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <div className="flex scale-130 items-center gap-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              {member.facebook && (
                <a href={member.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white/90 transition-colors">
                  <FacebookIcon />
                </a>
              )}
              {member.instagram && (
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white/90 transition-colors">
                  <InstagramIcon />
                </a>
              )}
              {member.telegram && (
                <a href={member.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-white/90 transition-colors">
                  <TelegramIcon />
                </a>
              )}
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

const Team = ({ initialData }) => {
  const [teamMembers, setTeamMembers] = useState(initialData || [])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [loading, setLoading] = useState(!initialData)

  useEffect(() => {
    if (initialData) {
      setTeamMembers(initialData)
      setLoading(false)
      return
    }

    const loadTeam = async () => {
      try {
        const data = await fetchTeamMembers()
        setTeamMembers(data)
      } catch (error) {
        console.error('Error loading team:', error)
      } finally {
        setLoading(false)
      }
    }
    loadTeam()
  }, [initialData])

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
    if (teamMembers.length === 0) return
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const handlePrev = () => {
    if (teamMembers.length === 0) return
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  if (loading && !initialData) {
    return (
      <section id="team" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-gray-500">
        Yuklanmoqda...
      </section>
    )
  }

  if (teamMembers.length === 0) {
    return null
  }

  return (
    <section id="team" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
                key={m.id}
                className="px-4 flex-shrink-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <TeamCard member={m} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {teamMembers.length > itemsPerView && (
          <>
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
          </>
        )}
      </div>

      {/* Carousel Dots */}
      {teamMembers.length > itemsPerView && (
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
      )}
    </section>
  )
}

export default Team

