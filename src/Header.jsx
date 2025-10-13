import React from 'react'
import logo from '../public/assets/logo.jpg'
import bgVid from '../public/assets/main-bg4.mp4'
import bgPoster from '../public/assets/main-bg.jpg'

const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    
    return (
        <header className="relative w-full min-h-screen overflow-hidden">
            {/* Hero Section with Video Background */}
            <section className="relative w-full min-h-screen flex flex-col">
                {/* Video Background */}
                <div className="absolute top-0 left-0 w-full h-full" style={{zIndex: -20}}>
                    <video 
                        autoPlay 
                        loop 
                        muted
                        playsInline
                        preload="auto"
                        poster={bgPoster}
                        className="w-full h-full object-cover object-center"
                    >
                        <source src={bgVid} type="video/mp4" />
                    </video>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/80 to-teal-600/60" style={{zIndex: -10}}></div>
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
                                    <span>A-1, Envanto HQ, Kokand</span>
                                </div>
                                <div className="flex items-center gap-2  text-sm font-medium">
                                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span>+998 93 901 06 60</span>
                                </div>
                                <div className="flex items-center gap-2  text-sm font-medium">
                                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <span>info@vitamed.uz</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" className="flex items-center justify-center w-8 h-8 bg-teal-500 text-white rounded-full transition-all duration-300 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md" aria-label="Twitter">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                </a>
                                <a href="#" className="flex items-center justify-center w-8 h-8 bg-teal-500 text-white rounded-full transition-all duration-300 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md" aria-label="LinkedIn">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                                <a href="#" className="flex items-center justify-center w-8 h-8 bg-teal-500 text-white rounded-full transition-all duration-300 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md" aria-label="Pinterest">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
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
                                                <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm1 5a1 1 0 0 0-2 0v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13 11.586Z"/>
                                            </svg>
                                            24/7
                                        </span>
                                    </h1>
                                    <p className="text-sm text-gray-500 m-0 font-medium">Quality Healthcare</p>
                                </div>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex gap-8 items-center">
                                <a href="/" className="text-gray-800 no-underline font-semibold text-base px-4 py-2 rounded-lg transition-all duration-300 relative hover:text-teal-500 hover:bg-teal-50 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-teal-500 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-4/5">Home</a>
                                <a href="/services" className="text-gray-800 no-underline font-semibold text-base px-4 py-2 rounded-lg transition-all duration-300 relative hover:text-teal-500 hover:bg-teal-50 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-teal-500 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-4/5">Services</a>
                                <a href="/blog" className="text-gray-800 no-underline font-semibold text-base px-4 py-2 rounded-lg transition-all duration-300 relative hover:text-teal-500 hover:bg-teal-50 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-teal-500 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-4/5">Blog</a>
                                <a href="#contact" className="text-gray-800 no-underline font-semibold text-base px-4 py-2 rounded-lg transition-all duration-300 relative hover:text-teal-500 hover:bg-teal-50 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-teal-500 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-4/5">Contact</a>
                            </div>

                            {/* CTA Button */}
                            <div className="hidden md:block flex-shrink-0">
                                <button className="bg-teal-500 text-white border-none px-6 py-3 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-300 shadow-sm hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md">Book Appointment</button>
                            </div>

                            {/* Mobile Menu Toggle */}
                            <button 
                                className="md:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer p-2 rounded transition-all duration-300 hover:bg-teal-50"
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Toggle menu"
                            >
                                <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 rounded ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 rounded ${menuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 rounded ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                            </button>
                        </div>

                        {/* Mobile Navigation */}
                        <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 transition-all duration-300 z-20 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{visibility: menuOpen ? 'visible' : 'hidden'}}>
                            <div className="p-6 flex flex-col gap-4">
                                <a href="/" className="text-gray-800 no-underline font-semibold text-lg py-3 border-b border-gray-200/50 transition-all duration-300 hover:text-teal-500 hover:pl-2">Home</a>
                                <a href="/services" className="text-gray-800 no-underline font-semibold text-lg py-3 border-b border-gray-200/50 transition-all duration-300 hover:text-teal-500 hover:pl-2">Services</a>
                                <a href="/blog" className="text-gray-800 no-underline font-semibold text-lg py-3 border-b border-gray-200/50 transition-all duration-300 hover:text-teal-500 hover:pl-2">Blog</a>
                                <a href="#contact" className="text-gray-800 no-underline font-semibold text-lg py-3 border-b border-gray-200/50 transition-all duration-300 hover:text-teal-500 hover:pl-2">Contact</a>
                                <button className="bg-teal-500 text-white border-none px-6 py-4 rounded-lg font-semibold text-base cursor-pointer transition-all duration-300 mt-2 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md">Book Appointment</button>
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
                                <button className="px-8 py-4 text-base font-bold rounded-lg border-none cursor-pointer transition-all duration-300 uppercase tracking-wider shadow-lg bg-teal-500 text-white hover:bg-teal-600 hover:-translate-y-1 hover:shadow-xl">READ MORE</button>
                                <button className="px-8 py-4 text-base font-bold rounded-lg cursor-pointer transition-all duration-300 uppercase tracking-wider shadow-lg bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-800 hover:-translate-y-1 hover:shadow-xl">ABOUT US</button>
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
                                                        <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm1 5a1 1 0 0 0-2 0v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13 11.586Z"/>
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
                                            <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.5 2.23 1.09 3.21a2 2 0 0 1-.45 2.33l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.33-.45c.98.59 2.08.96 3.21 1.09A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-600 mb-1">Qo'ng'iroq qiling</div>
                                        <div className="text-lg font-bold text-gray-800">+998 93 901 06 60</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none rotate-180" style={{zIndex: 1}}>
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