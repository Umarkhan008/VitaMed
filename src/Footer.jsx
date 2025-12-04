import React from 'react'
import logo from '../public/assets/logo.jpg'

const Footer = () => {
    return (
        <div className='w-full'>
        <footer className="bg-gray-900 text-gray-300 pt-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <img src={logo} alt="VitaMed" className="w-12 h-12 rounded-full object-cover border-2 border-teal-500" />
                            <div>
                                <p className="text-white text-lg font-bold leading-tight m-0 flex items-center gap-2">
                                    Qo'qon lor
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-teal-100/10 text-teal-300 border border-teal-400/30">
                                        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor" aria-hidden="true">
                                            <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm1 5a1 1 0 0 0-2 0v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13 11.586Z"/>
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
                            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center transition-all duration-300 hover:bg-teal-500 hover:-translate-y-0.5">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center transition-all duration-300 hover:bg-teal-500 hover:-translate-y-0.5">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </a>
                            <a href="#" aria-label="Pinterest" className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center transition-all duration-300 hover:bg-teal-500 hover:-translate-y-0.5">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-5">Tezkor havolalar</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a className="hover:text-white transition-colors" href="#">Bosh sahifa</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Xizmatlar</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Jamoa</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Aloqa</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-5">Xizmatlar</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="text-gray-400">LOR konsultatsiya</li>
                            <li className="text-gray-400">Tonsillektomiya</li>
                            <li className="text-gray-400">Rinoplastika</li>
                            <li className="text-gray-400">Audiometriya</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold text-lg mb-5">Bog'lanish</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2"><span className="text-teal-500">📍</span> Qoqon shaxar shoxruxobod kuchasi 4D-uy</li>
                            <li className="flex items-center gap-2"><span className="text-teal-500">📞</span> +998 93 901 06 60</li>
                            <li className="flex items-center gap-2"><span className="text-teal-500">✉️</span> info@vitamed.uz</li>
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