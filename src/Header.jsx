import React from 'react'
import logo from '../public/assets/logo.jpg'
// Try different video files if one doesn't work
import bgVid from '../public/assets/main-bg4.mp4'


const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    
    return (
        <div className='w-full relative'>
            {/* Video Background Section */}
            <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
                {/* Video background */}
                <video 
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    autoPlay 
                    loop 
                    muted
                    playsInline
                    preload="auto"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex:20
                    }}
                >
                    <source src={bgVid} type="video/mp4" />
                </video>
                
                
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
                
                {/* Wave shape */}
                <div className="custom-shape-divider-bottom-1759732534 absolute bottom-0 left-0 w-full z-20">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
                
                {/* Header Content */}
                <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Topbar: Desktop only */}
                    <div className="hidden lg:flex items-center justify-between py-3 text-sm text-white">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>A-1, Envanto HQ, Kokand</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>(000) 123456789</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>name@yourmail.com</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-white hover:text-[#01bdb2] transition-colors duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-[#01bdb2] transition-colors duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-[#01bdb2] transition-colors duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Main Navigation */}
                    <header className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 mt-4">
                        <nav className="px-6 py-4">
                            <div className="flex items-center justify-between">
                                {/* Logo */}
                                <div className="flex items-center">
                                    <img className="w-12 h-12 rounded-full" src={logo} alt="VitaMed logo" />
                                    <div className="ml-3">
                                        <h1 className="text-xl font-bold text-[#142959]">VitaMed</h1>
                                        <p className="text-xs text-[#01bdb2]">Quality Healthcare</p>
                                    </div>
                                </div>

                                {/* Desktop Navigation */}
                                <div className="hidden lg:flex items-center space-x-8">
                                    <a href="#" className="text-[#142959] hover:text-[#01bdb2] font-medium transition-colors duration-300">Home</a>
                                    <a href="#" className="text-[#142959] hover:text-[#01bdb2] font-medium transition-colors duration-300">Pages</a>
                                    <a href="#" className="text-[#142959] hover:text-[#01bdb2] font-medium transition-colors duration-300">Services</a>
                                    <a href="#" className="text-[#142959] hover:text-[#01bdb2] font-medium transition-colors duration-300">Blog</a>
                                    <a href="#" className="text-[#142959] hover:text-[#01bdb2] font-medium transition-colors duration-300">Contact</a>
                                </div>

                                {/* CTA Button */}
                                <div className="hidden lg:block">
                                    <button className="bg-[#01bdb2] hover:bg-[#142959] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                                        Book Appointment
                                    </button>
                                </div>

                                {/* Mobile Menu Button */}
                                <button 
                                    className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-[#142959] text-white"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    aria-label="Toggle menu"
                                >
                                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : 'mb-1'}`}></span>
                                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'mb-1'}`}></span>
                                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                                </button>
                            </div>

                            {/* Mobile Menu */}
                            {menuOpen && (
                                <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
                                    <div className="flex flex-col space-y-4">
                                        <a href="#" className="text-[#142959] hover:text-[#01bdb2] font-medium py-2 transition-colors duration-300">Home</a>
                                        <a href="#" className="text-[#142959] hover:text-[#01bdb2] font-medium py-2 transition-colors duration-300">Pages</a>
                                        <a href="#" className="text-[#142959] hover:text-[#01bdb2] font-medium py-2 transition-colors duration-300">Services</a>
                                        <a href="#" className="text-[#142959] hover:text-[#01bdb2] font-medium py-2 transition-colors duration-300">Blog</a>
                                        <a href="#" className="text-[#142959] hover:text-[#01bdb2] font-medium py-2 transition-colors duration-300">Contact</a>
                                        <button className="bg-[#01bdb2] hover:bg-[#142959] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 w-full mt-4">
                                            Book Appointment
                                        </button>
                                    </div>
                                </div>
                            )}
                        </nav>
                    </header>
                </div>
                
                {/* Hero Content */}
                <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex flex-col items-center justify-center text-center min-h-screen py-16 sm:py-20 lg:py-32">
                        <div className="w-full max-w-5xl">
                            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 sm:mb-8 leading-tight drop-shadow-2xl" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)', fontFamily: 'system-ui, -apple-system, sans-serif'}}>
                                Ear, Nose & Throat<br />
                                <span className="text-white drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)'}}>Quality Service</span>
                            </h1>
                            
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some injected
                            </p>
                        
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
                                <button className="bg-[#01bdb2] hover:bg-[#142959] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-white w-full sm:w-auto" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
                                    READ MORE
                                </button>
                                <button className="bg-[var(--trend-color)] text-[white] hover:bg-[#01bdb2] hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-white w-full sm:w-auto" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>
                                    ABOUT US
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header