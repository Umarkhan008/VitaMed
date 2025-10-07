import React from 'react'
import img1 from '../public/assets/img1.webp'
import img2 from '../public/assets/img2.webp'

const About = () => {
    return (
        <div className='w-full'>
            <section className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 py-16 px-4 lg:px-16 bg-white">
                {/* Images */}
                <div className="relative flex-shrink-0 flex items-center justify-center min-w-0 overflow-visible w-full lg:w-auto mb-10 lg:mb-0">
                    <img
                        src={img1}
                        alt="Doctor working"
                        className="max-w-full w-[260px] lg:w-[320px] aspect-[4/5] object-cover rounded-xl shadow-lg"
                    />
                    <img
                        src={img2}
                        alt="Doctor with patient"
                        className="max-w-full w-[200px] lg:w-[320px] aspect-[4/5] object-cover rounded-xl shadow-lg border-4 border-white absolute left-24 top-16 lg:left-44 lg:top-32"
                        style={{ position: 'absolute' }}
                    />
                </div>
                {/* Text Content */}
                <div className="max-w-xl w-full lg:ml-16">
                    <span className="text-[18px] text-blue-500 font-semibold mb-2 block border-b-2 border-blue-200 w-fit pb-1">
                        Welcome to Docmed
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                        Best Care For Your<br /> Good Health
                    </h2>
                    <p className="text-gray-500 text-base lg:text-lg mb-6">
                        Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.
                    </p>
                    <ul className="mb-8 space-y-3">
                        <li className="flex items-center gap-3 text-gray-700 text-base lg:text-lg">
                            <span className="text-blue-500 text-xl">✔</span>
                            Apartments frequently or motionless.
                        </li>
                        <li className="flex items-center gap-3 text-gray-700 text-base lg:text-lg">
                            <span className="text-blue-500 text-xl">✔</span>
                            Duis aute irure dolor in reprehenderit in voluptate.
                        </li>
                        <li className="flex items-center gap-3 text-gray-700 text-base lg:text-lg">
                            <span className="text-blue-500 text-xl">✔</span>
                            Voluptatem quia voluptas sit aspernatur.
                        </li>
                    </ul>
                    <button className="px-8 py-3 border border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-50 transition">
                        Learn More
                    </button>
                </div>
            </section>
        </div>
    )
}

export default About    