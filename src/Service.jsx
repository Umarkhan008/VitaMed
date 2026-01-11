import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AudioLines, Sparkles, Thermometer, Droplets, Mic, Stethoscope, ArrowRight } from 'lucide-react'

const services = [
  {
    id: "hearing-tests",
    title: "Eshitish Tekshiruvi",
    icon: AudioLines,
    desc: "Audiometriya va boshqa zamonaviy usullar yordamida eshitish qobiliyatini professional tekshirish.",
  },
  {
    id: "nose-surgery",
    title: "Rinoplastika",
    icon: Sparkles,
    desc: "Rinoplastika, septoplastika va boshqa estetik va funksional burun operatsiyalari.",
  },
  {
    id: "throat-treatment",
    title: "Adenotomiya",
    icon: Thermometer,
    desc: "Tonsillektomiya, adenoidektomiya va boshqa o'tkir va surunkali tomoq kasalliklarini davolash.",
  },
  {
    id: "ear-cleaning",
    title: "Septoplastika",
    icon: Droplets,
    desc: "Burun to'sig'ini to'g'irlash va nafas olishni yaxshilash bo'yicha professional jarrohlik.",
  },
  {
    id: "voice-therapy",
    title: "Yuz Estetikasi",
    icon: Mic,
    desc: "Yuz-jag' sohasidagi estetik va rekonstruktiv muolajalar majmuasi.",
  },
  {
    id: "tonsillotomiya",
    title: "Tonsillotomiya",
    icon: Stethoscope,
    desc: "Bodomcha bezlarini qisman olib tashlash va tomoq immunitetini saqlash.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const Service = () => {
  return (
    <div id="services" className="relative w-full py-20 bg-gradient-to-br from-teal-500 to-teal-700 overflow-hidden font-sans">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-bold tracking-widest text-xs uppercase border border-white/20 shadow-lg"
          >
            TIBBIY XIZMATLAR
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-outfit text-white leading-tight"
          >
            Bizning Tibbiy <br className="hidden md:block" /> Xizmatlarimiz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-teal-50 text-lg leading-relaxed max-w-2xl mx-auto font-light"
          >
            Quloq, burun va tomoq kasalliklari bo'yicha eng zamonaviy va sifatli tibbiy xizmatlarni taqdim etamiz.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <Link
              key={idx}
              to={`/service/${service.id}`}
              className="group relative"
            >
              <motion.div
                variants={item}
                className="h-full bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-900/20 hover:-translate-y-1 overflow-hidden border border-white/50"
              >
                <div className="flex flex-col h-full bg-white relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <service.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold font-outfit text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-2 text-teal-500 font-semibold group-hover:gap-3 transition-all">
                    <span>Batafsil</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Service;