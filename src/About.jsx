import React from 'react'
import { motion } from 'framer-motion'
import { Check, Phone } from 'lucide-react'
import img1 from '../public/assets/brat2.jpg'

const About = () => {
    return (
        <div id="about" className='w-full bg-slate-50 overflow-hidden'>
            <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 py-20 px-6">

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full lg:w-1/2 flex justify-center lg:justify-start"
                >
                    <div className="relative">
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-900/20 group">
                            <img
                                src={img1}
                                alt="Doctor working"
                                className="w-full max-w-md h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-8 -left-8 w-24 h-24 bg-teal-100 rounded-full blur-2xl opacity-60 z-0"></div>
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-60 z-0"></div>

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100"
                        >
                            <div className="text-center">
                                <span className="block text-4xl font-bold text-teal-500">12+</span>
                                <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Yillik Tajriba</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 space-y-8"
                >
                    <div className="space-y-4">
                        <span className="inline-block px-5 py-2 rounded-full bg-teal-50 text-teal-600 font-bold text-xs tracking-widest uppercase shadow-sm border border-teal-100/50">
                            Qo'qon lorga xush kelibsiz
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-800 leading-tight">
                            Sog'lig'ingiz uchun <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">eng yaxshi g'amxo'rlik</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Tajribali shifokorlarimiz sizning eshitish, nafas olish va so'zlash qobiliyatingizni tiklash uchun eng ilg'or texnologiyalardan foydalanadi.
                            Bizda quloq shang'illashi, burun tiqilishi, tomoq og'rishi va boshqa ENT muammolari chuqur tahlil qilinadi.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Tibbiy Maslahat",
                            "Tajribali Shifokorlar",
                            "Zamonaviy Uskunalar",
                            "Burun Muammolari",
                            "Barcha Turdagi Operatsiyalar",
                            "Quloq Muammolari"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 group cursor-default">
                                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                                    <Check className="w-4 h-4 text-teal-500 group-hover:text-white transition-colors duration-300" strokeWidth={3} />
                                </div>
                                <span className="font-semibold text-slate-700 group-hover:text-teal-600 transition-colors">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                        <button className="px-8 py-4 bg-teal-500 text-white rounded-xl font-bold shadow-lg shadow-teal-500/30 hover:bg-teal-600 hover:-translate-y-1 transition-all duration-300">
                            Batafsil ma'lumot
                        </button>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-14 h-14 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Phone className="w-6 h-6 text-teal-500 fill-teal-500" />
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium">Qo'ng'iroq qiling</p>
                                <a href="tel:+998939010660" className="text-xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors">+998 93 901 06 60</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default About