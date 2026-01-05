import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/assets/logo.jpg'

const Footer = () => {
    return (
        <div className='w-full'>
            <footer className="bg-gray-900 text-gray-300 pt-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Brand */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="flex items-center gap-3 mb-5">
                                <img src={logo} alt="VitaMed" className="w-12 h-12 rounded-full object-cover border-2 border-teal-500" />
                                <div className="text-left">
                                    <p className="text-white text-lg font-bold leading-tight m-0 flex items-center gap-2">
                                        Qo'qon lor
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-teal-100/10 text-teal-300 border border-teal-400/30">
                                            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor" aria-hidden="true">
                                                <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm1 5a1 1 0 0 0-2 0v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13 11.586Z" />
                                            </svg>
                                            24/7
                                        </span>
                                    </p>
                                    <p className="text-sm text-gray-400 m-0">Sifatli Tibbiy Xizmat</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 leading-6 mb-6">
                                OSON NAFAS - TINIQ OVOZ. Zamonaviy texnologiyalar va tajribali mutaxassislar bilan sifatli ENT xizmatlari.
                            </p>
                            <div className="flex items-center gap-3">
                                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center transition-all duration-300 hover:bg-teal-500 hover:-translate-y-0.5">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center transition-all duration-300 hover:bg-teal-500 hover:-translate-y-0.5">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                                <a href="https://t.me/qoqonlor" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center transition-all duration-300 hover:bg-teal-500 hover:-translate-y-0.5">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.665 3.717c.18-.847-.53-1.498-1.258-1.139L3.483 11.2C2.65 11.58 2.67 12.607 3.513 12.96l4.28 1.797 9.873-6.126c.465-.28.892-.047.541.26l-7.994 7.11 3.582 2.757c.66.52 1.57.26 1.748-.567l3.122-14.47z" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="text-center md:text-left">
                            <h4 className="text-white font-semibold text-lg mb-5">Tezkor havolalar</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/" className="hover:text-white transition-colors">Bosh sahifa</Link></li>
                                <li><Link to="/services" className="hover:text-white transition-colors">Xizmatlar</Link></li>
                                <li><Link to="/team" className="hover:text-white transition-colors">Jamoa</Link></li>
                                <li><Link to="/contact" className="hover:text-white transition-colors">Aloqa</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="text-center md:text-left">
                            <h4 className="text-white font-semibold text-lg mb-5">Xizmatlar</h4>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link to="/service/hearing-tests" className="text-gray-300 hover:text-white transition-colors">Eshitish Tekshiruvi</Link>
                                </li>
                                <li>
                                    <Link to="/service/nose-surgery" className="text-gray-300 hover:text-white transition-colors">Rinoplastika</Link>
                                </li>
                                <li>
                                    <Link to="/service/throat-treatment" className="text-gray-300 hover:text-white transition-colors">Adenotomiya</Link>
                                </li>
                                <li>
                                    <Link to="/service/ear-cleaning" className="text-gray-300 hover:text-white transition-colors">Septoplastika</Link>
                                </li>
                                <li>
                                    <Link to="/service/voice-therapy" className="text-gray-300 hover:text-white transition-colors">Full Face</Link>
                                </li>
                                <li>
                                    <Link to="/service/tonsillotomiya" className="text-gray-300 hover:text-white transition-colors">Tonsillotomiya | Tonsillektomiya</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="text-center md:text-left">
                            <h4 className="text-white font-semibold text-lg mb-5">Bog'lanish</h4>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-start justify-center md:justify-start gap-3">
                                    <svg className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Qoqon shaxar shoxruxobod kuchasi 4D-uy</span>
                                </li>
                                <li className="flex items-center justify-center md:justify-start gap-3">
                                    <svg className="w-5 h-5 text-teal-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span>+998 93 901 06 60</span>
                                </li>
                                <li className="flex items-center justify-center md:justify-start gap-3">
                                    <svg className="w-5 h-5 text-teal-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <span>info@vitamed.uz</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <p className="text-sm text-gray-400 mb-2">Yangiliklarga obuna bo'ling</p>
                                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                    <input type="email" required placeholder="Email manzil"
                                        className="flex-1 bg-gray-800 text-gray-200 placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600" />
                                    <button className="bg-teal-600 text-white px-5 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-teal-500 hover:-translate-y-0.5">
                                        Obuna
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-14 border-t border-gray-800"></div>

                {/* Bottom bar */}
                <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} VitaMed. Barcha huquqlar himoyalangan.</p>
                    <div className="flex items-center gap-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Maxfiylik siyosati</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Foydalanish shartlari</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie sozlamalari</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer