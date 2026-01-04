import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '/assets/logo.jpg'
import bgVid from '/assets/main-bg4.mp4'

const navItems = [
    { id: '/', label: "Bosh sahifa" },
    { id: '/services', label: "Xizmatlar" },
    { id: '/blog', label: "Blog" },
    { id: '/contact', label: "Aloqa" },
]

const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const navigate = useNavigate();

    const closeMenu = () => setMenuOpen(false)
    const handleNavClick = (path) => {
        navigate(path)
        if (menuOpen) {
            closeMenu()
        }
    }

    return (
        <header id="home" className="relative w-full min-h-screen overflow-hidden">
            {/* Hero Section with Video Background */}
            <section className="relative w-full min-h-screen flex flex-col">
                {/* Video Background */}
                <div className="absolute top-0 left-0 w-full h-full" style={{ zIndex: -20 }}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover object-center"
                    >
                        <source src={bgVid} type="video/mp4" />
                    </video>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/80 to-teal-600/60" style={{ zIndex: -10 }}></div>
                </div>

                {/* Top Contact Bar */}
                <div className="bg-white text-black py-2 relative z-10">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex justify-between items-center flex-wrap gap-4">
                            <div className="flex gap-8 flex-wrap">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <svg className="w-4 text-teal-500 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Qo'qon shahar, Shohruxobod ko'chasi 4D-uy</span>
                                </div>
                                <a href="tel:+998939010660" className="flex items-center gap-2 text-sm font-medium hover:text-teal-600 transition-colors duration-300">
                                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span>+998 93 901 06 60</span>
                                </a>
                                <div className="flex items-center gap-2  text-sm font-medium">
                                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <span>info@vitamed.uz</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-teal-500 text-white rounded-full transition-all duration-300 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md" aria-label="Facebook">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-teal-500 text-white rounded-full transition-all duration-300 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md" aria-label="Instagram">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="https://t.me/qoqonlor" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-teal-500 text-white rounded-full transition-all duration-300 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md" aria-label="Telegram">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                        <path d="M20.665 3.717c.18-.847-.53-1.498-1.258-1.139L3.483 11.2C2.65 11.58 2.67 12.607 3.513 12.96l4.28 1.797 9.873-6.126c.465-.28.892-.047.541.26l-7.994 7.11 3.582 2.757c.66.52 1.57.26 1.748-.567l3.122-14.47z" />
                                    </svg>
                                </a>
                          </div>
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <nav className="bg-white border-b border-gray-200 py-4 relative z-10">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center justify-between gap-8">
                            {/* Logo Section */}
                            <div className="flex items-center gap-4 flex-shrink-0">
                                <img src={logo} alt="VitaMed logo" className="w-12 h-12 rounded-full object-cover border-2 border-teal-500" />
                                <div className="flex flex-col">
                                    <h1 className="text-xl font-bold text-gray-800 m-0 leading-tight flex items-center gap-2">
                                        Qo'qon lor
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-teal-100 text-teal-700 border border-teal-200">
                                            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                                                <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm1 5a1 1 0 0 0-2 0v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13 11.586Z" />
                                            </svg>
                                            24/7
                                        </span>
                                    </h1>
                                    <p className="text-sm text-gray-500 m-0 font-medium">Sifatli Tibbiy Xizmat</p>
                                </div>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex gap-8 items-center">
                                {navItems.map(({ id, label }) => (
                                    <button
                                        key={id}
                                        type="button"
                                        onClick={() => handleNavClick(id)}
                                        className="text-gray-800 no-underline font-semibold text-base px-4 py-2 rounded-lg transition-all duration-300 relative hover:text-teal-500 hover:bg-teal-50 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-teal-500 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-4/5 bg-transparent border-none cursor-pointer"
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="hidden md:block flex-shrink-0">
                                <button className="bg-teal-500 text-white border-none px-6 py-3 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-300 shadow-sm hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md">Uchrashuv belgilash</button>
                            </div>

                            {/* Mobile Menu Toggle */}
                            <button
                                className="md:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer p-2 rounded transition-all duration-300 hover:bg-teal-50"
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Menyuni ochish/yopish"
                            >
                                <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 rounded ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 rounded ${menuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 rounded ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                            </button>
                        </div>

                        {/* Mobile Navigation */}
                        <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 transition-all duration-300 z-20 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{ visibility: menuOpen ? 'visible' : 'hidden' }}>
                            <div className="p-6 flex flex-col gap-4">
                                {navItems.map(({ id, label }) => (
                                    <button
                                        key={id}
                                        type="button"
                                        onClick={() => handleNavClick(id)}
                                        className="text-gray-800 text-left no-underline font-semibold text-lg py-3 border-b border-gray-200/50 transition-all duration-300 hover:text-teal-500 hover:pl-2 bg-transparent border-none cursor-pointer"
                                    >
                                        {label}
                                    </button>
                                ))}
                                <button className="bg-teal-500 text-white border-none px-6 py-4 rounded-lg font-semibold text-base cursor-pointer transition-all duration-300 mt-2 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md">Uchrashuv belgilash</button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Content */}
                <div className="flex-1 flex items-center justify-center py-8 relative z-10">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center max-w-4xl text-white">
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                                Quloq, Burun & Tomoq<br />
                                <span className="text-teal-400 block text-2xl md:text-4xl font-semibold mt-2">Sifatli Xizmatlar</span>
                            </h1>

                            <p className="text-lg md:text-2xl font-medium mb-8 opacity-90 drop-shadow-md">
                                OSON NAFAS - TINIQ OVOZ
                            </p>

                            <div className="flex gap-4 justify-center mb-12 flex-wrap">
                                <button className="px-8 py-4 text-base font-bold rounded-lg border-none cursor-pointer transition-all duration-300 uppercase tracking-wider shadow-lg bg-teal-500 text-white hover:bg-teal-600 hover:-translate-y-1 hover:shadow-xl">BATAFSIL</button>
                                <button className="px-8 py-4 text-base font-bold rounded-lg cursor-pointer transition-all duration-300 uppercase tracking-wider shadow-lg bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-800 hover:-translate-y-1 hover:shadow-xl">BIZ HAQIMIZDA</button>
                            </div>

                            <div className="flex gap-8 justify-center flex-wrap">
                                <div className="bg-white/90 border border-white rounded-2xl p-6 flex items-center gap-4 min-w-64 transition-all duration-300 hover:bg-white/90 hover:-translate-y-1 hover:shadow-lg">
                                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6 text-white">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-800 m-0 mb-2">Ish Vaqti</h3>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-sm font-semibold bg-teal-50 text-teal-700 border border-teal-200 shadow-sm">
                                                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                                                        <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm1 5a1 1 0 0 0-2 0v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13 11.586Z" />
                                                    </svg>
                                                    24/7
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700 m-0 font-medium">Tunu-kun xizmat</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/90 border border-white rounded-2xl p-6 flex items-center gap-4 min-w-64 transition-all duration-300 hover:bg-white/90 hover:-translate-y-1 hover:shadow-lg">
                                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                                            <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.5 2.23 1.09 3.21a2 2 0 0 1-.45 2.33l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.33-.45c.98.59 2.08.96 3.21 1.09A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600 mb-1">Qo'ng'iroq qiling</div>
                                        <a href="tel:+998939010660" className="text-lg font-bold text-gray-800 hover:text-teal-600 transition-colors duration-300 no-underline">+998 93 901 06 60</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none rotate-180" style={{ zIndex: 1 }}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(111%+1.3px)] h-20">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#FFFFFF"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#FFFFFF"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#FFFFFF"></path>
                    </svg>
                </div>
            </section>
        </header>
    )
}

export default Header