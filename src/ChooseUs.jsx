import React from 'react'
import doctor from "../public/assets/bosh.jpg"
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
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-[#f0fffd] text-[#01bdb2] font-semibold mb-4 shadow-sm">NIMA UCHUN BIZ ?</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#142959] leading-tight mb-6">
            Nima uchun bizni tanlashadi?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl">
            Bizning klinikamizda eng zamonaviy texnologiyalar, tajribali shifokorlar va individual yondashuv mavjud.
            Har bir bemorga alohida e'tibor berib, eng yaxshi natijaga erishishga harakat qilamiz.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <img
              src={doctor}
              alt="Doctor avatar"
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
            />
            <div>
              <h4 className="text-xl font-semibold text-[#142959]">Dr. Otajon Kimsanov</h4>
              <p className="text-[#01bdb2] font-medium">BOSH SHIFOKOR</p>
            </div>
          </div>

          <button className="inline-flex items-center gap-2 text-[#142959] font-semibold hover:text-[#01bdb2] transition-colors">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#e6fffc] text-[#01bdb2]">→</span>
            BATAFSIL
          </button>
        </div>

        <div className="space-y-5">
          {items.map((item, idx) => {
            const isOpen = openId === item.id
            const indexLabel = String(idx + 1).padStart(2, '0')
            return (
              <div
                key={item.id}
                className={`rounded-2xl shadow-xl transition-all duration-300 border ${
                  isOpen ? 'bg-[#142959] text-white border-[#142959]' : 'bg-white text-[#142959] border-gray-100'
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between"
                  onClick={() => setOpenId(isOpen ? 0 : item.id)}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-extrabold ${isOpen ? 'text-[#01bdb2]' : 'text-[#01bdb2]'}`}>{indexLabel}.</span>
                    <span className="font-semibold text-lg md:text-xl">
                      {item.title}
                    </span>
                  </div>
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full border ${isOpen ? 'border-white' : 'border-gray-200'}`}>
                    {isOpen ? (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round"/></svg>
                    ) : (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round"/></svg>
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className={`px-6 pb-6 -mt-2 text-[15px] leading-relaxed ${isOpen ? 'text-white/90' : 'text-gray-600'}`}>
                    {item.content}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ChooseUs


