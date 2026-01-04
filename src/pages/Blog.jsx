import React, { useState, useEffect } from 'react'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import logo from '/assets/logo.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { fetchBlogPosts } from './blogAPI.js'
const navItems = [
    { id: '/', label: "Bosh sahifa" },
    { id: '/services', label: "Xizmatlar" },
    { id: '/blog', label: "Blog" },
    { id: '/contact', label: "Aloqa" },
]

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Barchasi');
    const navigate = useNavigate();

    useEffect(() => {
        const loadPosts = async () => {
            const data = await fetchBlogPosts()
            setPosts(data)
            setLoading(false)
        }
        loadPosts()
    }, [])

    const closeMenu = () => setMenuOpen(false)
    const handleNavClick = (path) => {
        navigate(path)
        if (menuOpen) {
            closeMenu()
        }
    }

    const filteredPosts = selectedCategory === 'Barchasi' ? posts : posts.filter(post => post.tag === selectedCategory)

    if (loading) {
        return (
            <>
                <header id="home" className="relative w-full overflow-hidden">
                    {/* Hero Section with Video Background */}
                    <section className="relative w-full h-max flex flex-col">

                        {/* Top Contact Bar */}
                        <div className="bg-white text-black py-2 relative z-10">
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="flex justify-between items-center flex-wrap gap-4">
                                    <div className="flex gap-8 flex-wrap">
                                        <div className="flex items-center gap-2 text-sm font-medium">
                                            <svg className="w-4 text-teal-500 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Qoqon shaxar shoxruxobod kuchasi 4D-uy</span>
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
                                            <span>info@qo'qonlor.uz</span>
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
                    </section>
                </header>
                <main className="bg-white">
                    <section className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 text-center">
                            <div className="animate-pulse">
                                <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
                                <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
                            </div>
                        </div>
                    </section>
                    <section className="py-14">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200">
                                        <div className="h-56 bg-gray-300 animate-pulse"></div>
                                        <div className="p-6 space-y-3">
                                            <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
                                            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                                            <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        )
    }

    return (
        <>
            <header id="home" className="relative w-full overflow-hidden">
                {/* Hero Section with Video Background */}
                <section className="relative w-full h-max flex flex-col">

                    {/* Top Contact Bar */}
                    <div className="bg-white text-black py-2 relative z-10">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="flex justify-between items-center flex-wrap gap-4">
                                <div className="flex gap-8 flex-wrap">
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <svg className="w-4 text-teal-500 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Qoqon shaxar shoxruxobod kuchasi 4D-uy</span>
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
                                        <span>info@qo'qonlor.uz</span>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <a href="#" className="flex items-center justify-center w-8 h-8 bg-teal-500 text-white rounded-full transition-all duration-300 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md" aria-label="Twitter">
                                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="flex items-center justify-center w-8 h-8 bg-teal-500 text-white rounded-full transition-all duration-300 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md" aria-label="LinkedIn">
                                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="flex items-center justify-center w-8 h-8 bg-teal-500 text-white rounded-full transition-all duration-300 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md" aria-label="Pinterest">
                                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
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
                </section>
            </header>
            <main className="bg-white">
                {/* Hero banner */}
                <section className="relative w-full py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <span className="inline-block px-4 py-2 rounded-full bg-[#f0fffd] text-[#01bdb2] font-semibold mb-4 shadow-sm">Bizning blog</span>
                        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-gray-900">Yangiliklar va foydali maqolalar</h1>
                        <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">LOR bo'yicha so'nggi trendlar, maslahatlar va klinika yangiliklari.</p>
                    </div>
                </section>

                {/* Filters + Posts */}
                <section className="py-14">
                    <div className="max-w-[1400px] mx-auto px-4">
                        {/* Category pills */}
                        <div className="flex flex-wrap items-center gap-3 justify-center mb-10">
                            {['Barchasi', 'Profilaktika', 'LOR', 'Maslahat'].map((c) => (
                                <button
                                    key={c}
                                    onClick={() => setSelectedCategory(c)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${selectedCategory === c
                                        ? 'bg-teal-500 text-white border-teal-500'
                                        : 'bg-white text-gray-700 border-gray-200 hover:border-teal-300 hover:text-teal-700'
                                        }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {filteredPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    to={`/blog/${post.id}`}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md no-underline block"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-semibold text-gray-800 shadow-sm">
                                            {post.tag}
                                        </div>
                                        <div className="absolute bottom-3 left-3 bg-teal-500 text-white px-2 py-1 rounded text-xs font-semibold shadow">{new Date(post.date).toLocaleDateString()}</div>
                                    </div>
                                    <div className="p-6 flex flex-col gap-3">
                                        <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-teal-600 transition-colors line-clamp-2">{post.title}</h3>
                                        <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                                        <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                                            <span className="font-medium text-gray-500">{post.author}</span>
                                            <div className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm hover:text-teal-700">
                                                O'qish
                                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Blog


