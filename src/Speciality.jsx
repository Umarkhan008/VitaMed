import React from 'react'
import { motion } from 'framer-motion'
import { Ear, Flower2, Stethoscope, Microscope } from 'lucide-react'

const services = [
    {
        icon: Ear,
        title: 'Eshitishni protezlash (Phonak)',
        desc: 'Yoshga xos eshitish pasayishi va erta yoshda ortirilgan karlik muammolari uchun zamonaviy yechimlar.',
        color: 'text-blue-500',
        bg: 'bg-blue-50'
    },
    {
        icon: Flower2,
        title: 'Allergiya Davolash',
        desc: 'Mavsumiy va doimiy allergiya muammolarini aniqlash va samarali davolash.',
        color: 'text-pink-500',
        bg: 'bg-pink-50'
    },
    {
        icon: Stethoscope,
        title: 'Tomoq kasalliklari',
        desc: 'Tomoqdagi yallig\'lanish, og\'riq va surunkali kasalliklarni kompleks davolash.',
        color: 'text-teal-500',
        bg: 'bg-teal-50'
    },
    {
        icon: Microscope,
        title: 'Endoskopik Tekshiruv',
        desc: 'Burun va tomoq yo\'llarini eng so\'nggi texnologiyalar yordamida aniq diagnostika qilish.',
        color: 'text-purple-500',
        bg: 'bg-purple-50'
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

const Speciality = () => {
    return (
        <section className='py-20 bg-gradient-to-b from-white to-slate-50'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='text-center mb-16 space-y-4'>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 font-semibold text-sm tracking-wide uppercase shadow-sm border border-teal-100"
                    >
                        Xususiyatlarimiz
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className='text-3xl md:text-5xl font-bold font-outfit text-slate-800 leading-tight'
                    >
                        Nima uchun bizni <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-400">tanlashadi?</span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
                >
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className='group bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 border border-slate-100 hover:border-teal-100 hover:-translate-y-2'
                        >
                            <div className={`w-20 h-20 ${service.bg} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                <service.icon className={`w-10 h-10 ${service.color} relative z-10`} strokeWidth={1.5} />
                            </div>
                            <h3 className='text-xl font-bold font-outfit text-slate-800 mb-3 group-hover:text-teal-600 transition-colors'>
                                {service.title}
                            </h3>
                            <p className='text-slate-500 text-sm leading-relaxed'>
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Speciality