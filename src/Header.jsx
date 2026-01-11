import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Send, Clock, PlayCircle, Calendar, ChevronRight } from 'lucide-react'
import logo from '/assets/logo.jpg'
import bgVid from '/assets/main-bg4.mp4'

const navItems = [
    { id: '/', label: "Bosh sahifa" },
    { id: '/services', label: "Xizmatlar" },
    { id: '/blog', label: "Blog" },
    { id: '/contact', label: "Aloqa" },
]

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false)
    const handleNavClick = (path) => {
        navigate(path)
        if (menuOpen) closeMenu()
    }

    return (
        <header id="home" className="relative w-full min-h-screen overflow-hidden font-sans bg-slate-50">
            {/* Hero Section with Video Background */}
            <section className="relative w-full min-h-screen flex flex-col">
                {/* Video Background */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-100"
                    >
                        <source src={bgVid} type="video/mp4" />
                    </video>
                    {/* Light Overlay - The Key Change */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent" />
                </div>

                {/* Top Contact Bar */}
                <div className={`hidden lg:block py-3 relative z-50 border-b border-teal-100/50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'}`}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-between items-center text-slate-600">
                            <div className="flex items-center gap-8 text-sm font-medium tracking-wide">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-teal-600" />
                                    <span>Qo'qon shahar, Shohruxobod 4D</span>
                                </div>
                                <a href="tel:+998939010660" className="flex items-center gap-2 hover:text-teal-600 transition-colors">
                                    <Phone className="w-4 h-4 text-teal-600" />
                                    <span>+998 93 901 06 60</span>
                                </a>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-teal-600" />
                                    <span>info@vitamed.uz</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                {[
                                    { icon: Facebook, href: "https://facebook.com" },
                                    { icon: Instagram, href: "https://www.instagram.com/lor_otajon/" },
                                    { icon: Send, href: "https://t.me/qoqonlor" }
                                ].map((Social, index) => (
                                    <a
                                        key={index}
                                        href={Social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-50 text-teal-600 hover:bg-teal-500 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
                                    >
                                        <Social.icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-4' : 'bg-transparent py-6'}`}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
                                <div className="relative group">
                                    <img src={logo} alt="VitaMed" className="w-12 h-12 rounded-full object-cover border-2 border-teal-500 shadow-lg group-hover:scale-105 transition-transform duration-300" />
                                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-500 border-2 border-white"></span>
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-2xl font-bold font-outfit leading-none text-slate-800">
                                        VitaMed
                                    </h1>
                                    <span className="text-xs font-bold tracking-[0.2em] uppercase mt-1 text-teal-600">Xususiy Klinika</span>
                                </div>
                            </div>

                            {/* Desktop Nav */}
                            <div className="hidden md:flex items-center gap-2 bg-white/60 backdrop-blur-md px-3 py-2 rounded-full border border-teal-100 shadow-sm">
                                {navItems.map(({ id, label }) => {
                                    const isActive = location.pathname === id;
                                    return (
                                        <button
                                            key={id}
                                            onClick={() => handleNavClick(id)}
                                            className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 font-outfit ${isActive
                                                ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/30'
                                                : 'text-slate-600 hover:text-teal-700 hover:bg-teal-50'
                                                }`}
                                        >
                                            {label}
                                        </button>
                                    )
                                })}
                            </div>

                            {/* CTA & Mobile Toggle */}
                            <div className="flex items-center gap-4">
                                <button className="hidden md:flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                    <Calendar className="w-4 h-4 text-teal-300" />
                                    <span>Qabulga yozilish</span>
                                </button>

                                <button
                                    className="md:hidden p-2 rounded-lg transition-colors text-slate-800 hover:bg-slate-100"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
                            >
                                <div className="p-4 space-y-2">
                                    {navItems.map(({ id, label }) => (
                                        <button
                                            key={id}
                                            onClick={() => handleNavClick(id)}
                                            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-teal-50 text-slate-700 font-medium transition-colors font-outfit"
                                        >
                                            {label}
                                            <ChevronRight className="w-4 h-4 text-slate-400" />
                                        </button>
                                    ))}
                                    <button className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-400 text-white p-3 rounded-xl font-semibold shadow-lg shadow-teal-500/20">
                                        <Calendar className="w-4 h-4" />
                                        Qabulga yozilish
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>

                {/* Hero Content */}
                <div className="flex-1 flex items-center justify-center relative z-10 px-4 mt-[-40px]">
                    <div className="max-w-6xl w-full mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-center lg:text-left space-y-10"
                            >
                                <div className="space-y-6">
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="inline-block px-6 py-2.5 rounded-full bg-teal-100 text-teal-700 text-base font-bold tracking-widest uppercase shadow-sm border border-teal-200"
                                    >
                                        Professional LOR Klinikasi
                                    </motion.span>
                                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.1] font-outfit tracking-tight">
                                        Toza Nafas <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                                            Erkin Hayot
                                        </span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                        Zamonaviy diagnostika va davolash usullari bilan nafas olish, eshitish va so'zlashish qobiliyatingizni qayta tiklaymiz.
                                    </p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                                >
                                    <button
                                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="px-10 py-5 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-teal-500/20 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 duration-300"
                                    >
                                        Barcha Xizmatlar
                                    </button>
                                    <button
                                        onClick={() => handleNavClick('/contact')}
                                        className="px-10 py-5 bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 rounded-2xl font-bold text-lg shadow-xl shadow-slate-200/50 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 duration-300 group"
                                    >
                                        <PlayCircle className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform" />
                                        Video ko'rish
                                    </button>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="hidden lg:grid grid-cols-1 gap-6"
                            >
                                {/* Info Cards - Light Theme */}
                                <div className="bg-white/80 backdrop-blur-md border border-white/60 p-8 rounded-3xl flex items-center gap-8 hover:bg-white transition-all cursor-pointer group hover:-translate-x-2 duration-300 shadow-xl shadow-slate-200/50">
                                    <div className="w-20 h-20 rounded-2xl bg-teal-50 flex items-center justify-center shadow-lg shadow-teal-500/10 group-hover:scale-110 transition-transform duration-300 border border-teal-100">
                                        <Clock className="w-10 h-10 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-slate-800 font-bold text-2xl font-outfit mb-2">Ish Vaqti</h3>
                                        <p className="text-slate-500 text-lg font-medium">24/7 Tunu-kun xizmat</p>
                                    </div>
                                </div>

                                <div className="bg-white/80 backdrop-blur-md border border-white/60 p-8 rounded-3xl flex items-center gap-8 hover:bg-white transition-all cursor-pointer group hover:-translate-x-2 duration-300 shadow-xl shadow-slate-200/50">
                                    <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300 border border-blue-100">
                                        <Phone className="w-10 h-10 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-slate-800 font-bold text-2xl font-outfit mb-2">Bog'lanish</h3>
                                        <p className="text-slate-500 text-lg font-medium">+998 93 901 06 60</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header