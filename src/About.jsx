import React from 'react'
import img1 from '../public/assets/img1.webp'
import img2 from '../public/assets/img2.webp'

const About = () => {
    return (
        <div className='w-full bg-gray-50'>
            <section className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 py-16 sm:py-20 px-4 lg:px-16">
                {/* Images */}
                <div className="relative flex-shrink-0 w-full lg:w-auto mb-10 lg:mb-0">
                    {/* Main image container */}
                    <div className="relative w-full max-w-[350px] sm:max-w-[400px] mx-auto lg:mx-0">
                        <img
                            src={img1}
                            alt="Doctor working"
                            className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] h-[350px] sm:h-[400px] lg:h-[475px] object-cover rounded-2xl shadow-2xl"
                        />
                        {/* Overlapping image - positioned better for mobile */}
                        <img
                            src={img2}
                            alt="Doctor with patient"
                            className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-[160px] sm:w-[200px] lg:w-[240px] h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-2xl shadow-2xl border-4 border-white z-10"
                        />
                        {/* Decorative background element */}
                        <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-full h-full bg-gradient-to-br from-[#01bdb2] to-[#142959] rounded-2xl -z-10 opacity-20"></div>
                    </div>
                </div>
                {/* Text Content */}
                <div className="max-w-xl w-full lg:ml-16">
                    <span className="text-[16px] sm:text-[18px] text-[#01bdb2] font-semibold mb-3 sm:mb-4 block border-b-2 border-[#01bdb2] w-fit pb-2">
                        Welcome to VitaMed
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#142959] mb-6 sm:mb-8 leading-tight">
                        Best Care For Your<br /> Good Health
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
                        Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.
                    </p>
                    <ul className="mb-8 sm:mb-10 grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-6">
                        <li className="flex items-center gap-3 sm:gap-4 font-semibold text-[16px] sm:text-[18px] text-[#142959] hover:text-[#01bdb2] transition-colors duration-300">
                            <span className="text-[#01bdb2] text-xl sm:text-2xl bg-[#01bdb2] bg-opacity-10 p-1.5 sm:p-2 rounded-full">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            MEDICAL COUNSELING
                        </li>
                        <li className="flex items-center gap-3 sm:gap-4 font-semibold text-[16px] sm:text-[18px] text-[#142959] hover:text-[#01bdb2] transition-colors duration-300">
                            <span className="text-[#01bdb2] text-xl sm:text-2xl bg-[#01bdb2] bg-opacity-10 p-1.5 sm:p-2 rounded-full">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            EAR LOBE REPAIR
                        </li>
                        <li className="flex items-center gap-3 sm:gap-4 font-semibold text-[16px] sm:text-[18px] text-[#142959] hover:text-[#01bdb2] transition-colors duration-300">
                            <span className="text-[#01bdb2] text-xl sm:text-2xl bg-[#01bdb2] bg-opacity-10 p-1.5 sm:p-2 rounded-full">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            WELL EXPERIENCED DOCTORS
                        </li>
                        <li className="flex items-center gap-3 sm:gap-4 font-semibold text-[16px] sm:text-[18px] text-[#142959] hover:text-[#01bdb2] transition-colors duration-300">
                            <span className="text-[#01bdb2] text-xl sm:text-2xl bg-[#01bdb2] bg-opacity-10 p-1.5 sm:p-2 rounded-full">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            MICROLARYNGEAL SURGERY
                        </li>
                        <li className="flex items-center gap-3 sm:gap-4 font-semibold text-[16px] sm:text-[18px] text-[#142959] hover:text-[#01bdb2] transition-colors duration-300">
                            <span className="text-[#01bdb2] text-xl sm:text-2xl bg-[#01bdb2] bg-opacity-10 p-1.5 sm:p-2 rounded-full">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            INNER/MIDDLE EAR PROBLEMS
                        </li>
                        <li className="flex items-center gap-3 sm:gap-4 font-semibold text-[16px] sm:text-[18px] text-[#142959] hover:text-[#01bdb2] transition-colors duration-300">
                            <span className="text-[#01bdb2] text-xl sm:text-2xl bg-[#01bdb2] bg-opacity-10 p-1.5 sm:p-2 rounded-full">
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            EAR DISORDERS
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