import React from 'react'
import doctor from "../public/assets/mainDoctor.png"
import { motion } from 'framer-motion'

const items = [
  {
    id: 1,
    title: 'Kattalar uchun to\'liq audiologik tekshiruv',
    content:
      'Eshitish qobiliyatini chuqur tahlil qilish va eng zamonaviy uskunalar yordamida aniq tashxis qo\'yish xizmatlari.',
  },
  {
    id: 2,
    title: 'Quloq kasalliklarini kuzatish',
    content:
      'Har bir bemor uchun maxsus kuzatuv rejasi tuzib, erta bosqichda o\'zgarishlarni aniqlash va eshitish salomatligini himoya qilish.',
  },
  {
    id: 3,
    title: 'Himoya vositalarini tayyorlash',
    content:
      'Ish va turmush tarzi uchun maxsus tayyorlangan himoya vositalarini ishlab chiqish va maslahat berish.',
  },
  {
    id: 4,
    title: 'Bolalar uchun to\'liq audiologik tekshiruv',
    content:
      'Bolalarga mos keladigan tashxis usullari va oila a\'zolariga yo\'l-yo\'riq berish orqali nutq va til rivojlanishini qo\'llab-quvvatlash.',
  },
]

const ChooseUs = () => {
  const [openId, setOpenId] = React.useState(1)

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-teal-50 text-teal-600 font-bold tracking-widest text-xs uppercase shadow-sm border border-teal-100">
            NIMA UCHUN BIZ ?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-slate-800 leading-tight mb-6 mt-4">
            Nima uchun bizni <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">tanlashadi?</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-2xl">
            Bizning klinikamizda eng zamonaviy texnologiyalar, tajribali shifokorlar va individual yondashuv mavjud.
            Har bir bemorga alohida e'tibor berib, eng yaxshi natijaga erishishga harakat qilamiz.
          </p>

          <div className="flex items-center gap-5 mb-8 bg-white p-4 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 max-w-md">
            <img
              src={doctor}
              alt="Doctor avatar"
              className="w-16 h-16 rounded-full object-cover border-2 border-teal-100"
            />
            <div>
              <h4 className="text-xl font-bold font-outfit text-slate-800">Dr. G‘afurov A. M.</h4>
              <p className="text-teal-600 font-semibold text-sm tracking-wide">BOSH SHIFOKOR</p>
            </div>
          </div>

          <button className="group inline-flex items-center gap-3 text-slate-800 font-bold hover:text-teal-600 transition-colors">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-all shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
            <span className="tracking-wide text-sm">BATAFSIL MA'LUMOT</span>
          </button>
        </motion.div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openId === item.id
            const indexLabel = String(idx + 1).padStart(2, '0')
            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={item.id}
                className={`rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen
                    ? 'bg-slate-800 text-white border-slate-800 shadow-xl shadow-slate-900/20'
                    : 'bg-white text-slate-800 border-slate-100 hover:border-teal-100 shadow-lg shadow-slate-200/50'
                  }`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between group"
                  onClick={() => setOpenId(isOpen ? 0 : item.id)}
                >
                  <div className="flex items-center gap-5">
                    <span className={`font-bold text-lg font-outfit opacity-50 ${isOpen ? 'text-teal-400' : 'text-slate-400'}`}>{indexLabel}</span>
                    <span className={`font-bold text-lg md:text-xl font-outfit ${isOpen ? 'text-white' : 'text-slate-800 group-hover:text-teal-600'} transition-colors`}>
                      {item.title}
                    </span>
                  </div>
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all ${isOpen ? 'border-slate-600 bg-slate-700 text-teal-400' : 'border-slate-200 group-hover:border-teal-200 text-slate-400'}`}>
                    {isOpen ? (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" /></svg>
                    ) : (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" /></svg>
                    )}
                  </span>
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 pl-16 text-[15px] leading-relaxed text-slate-300"
                  >
                    {item.content}
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ChooseUs


