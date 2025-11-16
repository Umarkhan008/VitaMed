import React from 'react'

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center">
                {/* Logo */}
                <div className="mb-8 flex flex-col items-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#01bdb2] to-[#142959] rounded-full flex items-center justify-center mb-4 mx-auto">
                        <svg width="40" height="40" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[#142959] text-center">VitaMed</h2>
                    <p className="text-[#01bdb2] text-center mt-1">Sifatli Tibbiy Xizmat</p>
                </div>

                {/* Spinner */}
                <div className="relative mb-8">
                    <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin border-t-[#01bdb2]"></div>
                    <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-spin border-t-[#142959] animation-delay-150"></div>
                </div>

                {/* Loading text */}
                <div className="text-center">
                    <p className="text-gray-600 text-lg font-medium mb-4">Yuklanmoqda...</p>
                    <div className="w-48 bg-gray-200 rounded-full h-2 mx-auto">
                        <div className="bg-gradient-to-r from-[#01bdb2] to-[#142959] h-2 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-[#01bdb2] rounded-full animate-bounce"></div>
            <div className="absolute top-20 right-16 w-3 h-3 bg-[#142959] rounded-full animate-bounce animation-delay-300"></div>
            <div className="absolute bottom-20 left-16 w-2 h-2 bg-[#01bdb2] rounded-full animate-bounce animation-delay-500"></div>
            <div className="absolute bottom-10 right-10 w-3 h-3 bg-[#142959] rounded-full animate-bounce animation-delay-700"></div>
        </div>
    )
}

export default Loader
