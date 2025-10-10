import React from 'react'

const teamMembers = [
  {
    name: 'Emily Taylor',
    role: 'DOCTOR',
    img: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Rebecca Deo',
    role: 'DOCTOR',
    img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'John Deo',
    role: 'DOCTOR',
    img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Rebecca Romijn',
    role: 'DOCTOR',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
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
    <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94z"/>
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.46 6c-.77.34-1.6.57-2.46.68a4.27 4.27 0 001.87-2.36 8.56 8.56 0 01-2.71 1.03 4.26 4.26 0 00-7.26 3.88 12.09 12.09 0 01-8.78-4.45 4.26 4.26 0 001.32 5.68 4.23 4.23 0 01-1.93-.53v.05a4.26 4.26 0 003.42 4.18 4.3 4.3 0 01-1.92.07 4.27 4.27 0 003.98 2.96A8.54 8.54 0 012 19.54a12.06 12.06 0 006.54 1.92c7.85 0 12.14-6.5 12.14-12.13 0-.18 0-.36-.01-.54A8.67 8.67 0 0022.46 6z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.39V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43A2.06 2.06 0 113.27 5.37a2.06 2.06 0 012.07 2.06zM6.78 20.45H3.56V9h3.22v11.45z"/>
  </svg>
)

const TeamCard = ({ member }) => {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="relative w-64 h-64 md:w-56 md:h-56 lg:w-64 lg:h-64">
        {/* Decorative top arc (only on hover) */}
        <div
          className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 w-[20rem] h-[20rem] rounded-full border-[26px] border-[#01bdb2] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 -z-10"
          style={{ clipPath: 'inset(0 0 50% 0)' }}
        />
        {/* Avatar with clean circular crop and subtle ring */}
        <img
          src={member.img}
          alt={member.name}
          className="relative z-10 w-full h-full rounded-full object-cover shadow-xl ring-4 ring-white"
        />
        {/* Share button is always visible; socials show when hovering the button */}
        <div className="absolute z-20 left-1/2 -translate-x-1/2 -bottom-3 md:-bottom-4">
          <div className="relative flex items-center group">
            {/* Share button (peer) */}
            <button
              aria-label="Share profile"
              className="peer relative z-10 w-12 h-12 rounded-full bg-white text-[#01bdb2] shadow-xl flex items-center justify-center"
            >
              <ShareIcon />
            </button>
            {/* Social pill shown only when hovering the share button */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-14 flex items-center gap-4 bg-[#01bdb2]/95 text-white px-5 py-3 rounded-full shadow-2xl opacity-0 invisible translate-y-2 transition-all duration-300 pointer-events-none peer-hover:opacity-100 peer-hover:visible peer-hover:-translate-y-1 peer-hover:pointer-events-auto group-hover:opacity-100 group-hover:visible group-hover:-translate-y-1 group-hover:pointer-events-auto">
              <a href="#" aria-label="Share on Facebook" className="hover:text-white/90"><FacebookIcon /></a>
              <a href="#" aria-label="Share on Twitter" className="hover:text-white/90"><TwitterIcon /></a>
              <a href="#" aria-label="Share on LinkedIn" className="hover:text-white/90"><LinkedinIcon /></a>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-8 text-2xl md:text-xl lg:text-2xl font-extrabold text-[#142959]">
        {member.name}
      </h3>
      <p className="mt-2 text-gray-500 tracking-wide font-semibold">{member.role}</p>
    </div>
  )
}

const Team = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col items-center mb-12">
        <span className="inline-block px-4 py-2 rounded-full bg-[#f0fffd] text-[#01bdb2] font-semibold mb-4 shadow-sm">OUR TEAM</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#142959] text-center leading-tight">
          Meet Our Professionals
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {teamMembers.map((m) => (
          <TeamCard key={m.name} member={m} />
        ))}
      </div>

      {/* Carousel dots (static visual indicator) */}
      <div className="mt-12 flex items-center justify-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#01bdb2]" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
      </div>
    </section>
  )
}

export default Team


