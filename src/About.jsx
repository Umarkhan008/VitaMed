import React from 'react'
import img1 from '../public/assets/img1.webp'

const About = () => {
    return (
        <div className='w-full bg-gray-50'>
            <section className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 py-16 sm:py-20 px-4 lg:px-16">
                {/* Images */}
                <div className="relative flex-shrink-0 w-full lg:w-auto mb-10 lg:mb-0">
                    {/* Main image container */}
                    <div className="relative w-full max-w-[400px] sm:max-w-[450px] mx-auto lg:mx-0">
                        {/* Main image with enhanced styling */}
                        <div className="relative group">
                            <img
                                src={img1}
                                alt="Doctor working"
                                className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[420px] h-[380px] sm:h-[420px] lg:h-[500px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Floating elements for visual interest */}
                            <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#01bdb2] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#142959] rounded-full flex items-center justify-center shadow-lg">
                                <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                        </div>
                        
                        
                        {/* Additional decorative element */}
                        <div className="absolute top-8 -right-2 w-16 h-16 bg-gradient-to-br from-[#01bdb2] to-[#142959] rounded-2xl -z-10 opacity-30 transform rotate-12"></div>
                        
                        {/* Enhanced decorative background */}
                        <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-full h-full bg-gradient-to-br from-[#01bdb2] to-[#142959] rounded-3xl -z-10 opacity-15"></div>
                        
                        {/* Floating statistics card */}
                        <div className="absolute -bottom-2 -left-4 sm:-left-8 bg-white p-4 sm:p-6 rounded-2xl shadow-xl z-20 min-w-[140px] sm:min-w-[160px]">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-[#01bdb2]">15+</div>
                                <div className="text-sm sm:text-base font-semibold text-[#142959]">Yillik Tajriba</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* Text Content */}
                <div className="max-w-xl w-full lg:ml-16">
                    <span className="text-[16px] sm:text-[18px] text-[#01bdb2] font-semibold mb-3 sm:mb-4 block border-b-2 border-[#01bdb2] w-fit pb-2">
                        Welcome to VitaMed
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142959] mb-6 sm:mb-8 leading-tight">
                        Sog'lig'ingiz uchun eng yaxshi g'amxo'rlik
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                    Tajribali shifokorlarimiz sizning eshitish, nafas olish va so‘zlash qobiliyatingizni tiklash uchun eng ilg‘or texnologiyalardan foydalanadi.
                    Bizda quloq shang‘illashi, burun tiqilishi, tomoq og‘rishi va boshqa ENT muammolari chuqur tahlil qilinadi va samarali yechimlar taklif etiladi.
                    </p>
                    <ul className="mb-8 sm:mb-10 grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-6">
                        <li className="flex items-center gap-3 sm:gap-4 font-semibold text-[16px] sm:text-[18px] text-[#142959] hover:text-[#01bdb2] transition-colors duration-300">
                            <span className="text-[#01bdb2] text-xl sm:text-2xl bg-[#01bdb2] bg-opacity-10 p-1.5 sm:p-2 rounded-full">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            TIBBIY MASLAHAT
                        </li>
                        <li className="flex items-center gap-3 sm:gap-4 font-semibold text-[16px] sm:text-[18px] text-[#142959] hover:text-[#01bdb2] transition-colors duration-300">
                            <span className="text-[#01bdb2] text-xl sm:text-2xl bg-[#01bdb2] bg-opacity-10 p-1.5 sm:p-2 rounded-full">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            YAXSHI TAJRIBALI SHIFOKORLAR
                        </li>
                        <li className="flex items-center gap-3 sm:gap-4 font-semibold text-[16px] sm:text-[18px] text-[#142959] hover:text-[#01bdb2] transition-colors duration-300">
                            <span className="text-[#01bdb2] text-xl sm:text-2xl bg-[#01bdb2] bg-opacity-10 p-1.5 sm:p-2 rounded-full">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            ZAMONAVIY USKUNALAR                            
                        </li>
                        <li className="flex items-center gap-3 sm:gap-4 font-semibold text-[16px] sm:text-[18px] text-[#142959] hover:text-[#01bdb2] transition-colors duration-300">
                            <span className="text-[#01bdb2] text-xl sm:text-2xl bg-[#01bdb2] bg-opacity-10 p-1.5 sm:p-2 rounded-full">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            
                        </li>
                        <li className="flex items-center gap-3 sm:gap-4 font-semibold text-[16px] sm:text-[18px] text-[#142959] hover:text-[#01bdb2] transition-colors duration-300">
                            <span className="text-[#01bdb2] text-xl sm:text-2xl bg-[#01bdb2] bg-opacity-10 p-1.5 sm:p-2 rounded-full">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            BARCHA TURDAGI LOR OPERATSIYALAR
                        </li>
                        <li className="flex items-center gap-3 sm:gap-4 font-semibold text-[16px] sm:text-[18px] text-[#142959] hover:text-[#01bdb2] transition-colors duration-300">
                            <span className="text-[#01bdb2] text-xl sm:text-2xl bg-[#01bdb2] bg-opacity-10 p-1.5 sm:p-2 rounded-full">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                          QULOQ MUAMMOLARI
                        </li>
                    </ul>
                    <div className="w-full mx-auto">
                        <div className="flex w-full flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mt-8 sm:mt-12">
                            {/* Read More Button */}
                            <button className="w-full md:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#01bdb2] text-white rounded-xl font-bold text-[16px] sm:text-[18px] shadow-lg hover:bg-[#142959] hover:shadow-xl transition-all duration-300 min-w-[180px] sm:min-w-[200px] transform hover:scale-105">
                                READ MORE
                            </button>
                            {/* Phone Info */}
                            <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto min-w-[220px] sm:min-w-[250px] bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <span className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#01bdb2] shadow-lg">
                                    <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.5 2.23 1.09 3.21a2 2 0 0 1-.45 2.33l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.33-.45c.98.59 2.08.96 3.21 1.09A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                                <div>    
                                    <div className="font-bold text-[18px] sm:text-[22px] text-[#142959] leading-tight">+(000) 123456789</div>
                                    <div className="text-gray-600 font-semibold text-[14px] sm:text-[16px] mt-1">Call us Anytime</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About