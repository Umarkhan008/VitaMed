import React from 'react'
import { useParams, Link } from 'react-router-dom'

const services = [
  {
    id: "cardiology",
    title: "Kardiologiya",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 21C12 21 7 16.36 5 13.28C3.22 10.46 4.5 7 7.5 7C9.24 7 10.5 8.5 12 10.5C13.5 8.5 14.76 7 16.5 7C19.5 7 20.78 10.46 19 13.28C17 16.36 12 21 12 21Z" />
        <path d="M8 13h2l1-2 2 4h2" />
      </svg>
    ),
    description: "Kardiologiya - yurak va qon tomirlar kasalliklarini diagnostika qilish va davolash bilan shug'ullanuvchi tibbiy soha.",
  },
  {
    id: "neurology",
    title: "Nevrologiya",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
    description: "Nevrologiya - asab tizimi kasalliklarini o'rganish va davolash bilan shug'ullanuvchi tibbiy soha.",
  },
  {
    id: "gastroenterology",
    title: "Gastroenterologiya",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
    description: "Gastroenterologiya - ovqat hazm qilish tizimining normal ishlashi va kasalliklarini o'rganish.",
  },
  {
    id: "orthopedics",
    title: "Ortopediya",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
    description: "Ortopediya - mushak-skelet tizimi jarohatlari va kasalliklariga ixtisoslashgan tibbiy soha.",
  },
  {
    id: "gynecology",
    title: "Ginekologiya",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
    description: "Ginekologiya - ayollar reproduktiv tizimi salomatligi bilan shug'ullanuvchi tibbiy soha.",
  },
  {
    id: "dental-surgery",
    title: "Tish jarrohligi",
    icon: (
      <svg width="48" height="48" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
    description: "Tish jarrohligi - tishlarni sun'iy o'zgartirishni o'z ichiga olgan tibbiy jarayonlar.",
  },
]

const ServiceDetail = () => {
  const { serviceId } = useParams()

  const serviceDetails = {
    cardiology: {
      title: "Kardiologiya",
      icon: (
        <svg width="64" height="64" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M12 21C12 21 7 16.36 5 13.28C3.22 10.46 4.5 7 7.5 7C9.24 7 10.5 8.5 12 10.5C13.5 8.5 14.76 7 16.5 7C19.5 7 20.78 10.46 19 13.28C17 16.36 12 21 12 21Z" />
          <path d="M8 13h2l1-2 2 4h2" />
        </svg>
      ),
      description: "Kardiologiya - yurak va qon tomirlar kasalliklarini diagnostika qilish va davolash bilan shug'ullanuvchi tibbiy soha. Bizning kardiologiya bo'limi yurak-qon tomir kasalliklariga chalingan bemorlar uchun to'liq yordam beradi.",
      services: [
        "Yurak kasalligi diagnostikasi",
        "Yurak kateterizatsiyasi",
        "Ekokardiografiya",
        "Stress testi",
        "Yurak jarrohligi",
        "Yurak reabilitatsiyasi"
      ],
      doctors: [
        {
          name: "Dr. Ahmad Karimov",
          specialization: "Intervensiya kardiologi",
          experience: "15 yil",
          image: "/api/placeholder/150/150"
        },
        {
          name: "Dr. Malika Tosheva",
          specialization: "Yurak jarrohi",
          experience: "12 yil",
          image: "/api/placeholder/150/150"
        }
      ],
      contact: {
        phone: "+998 93 901 06 60",
        email: "cardiology@vitamed.uz",
        address: "A-1, Envanto HQ, Kokand"
      }
    },
    neurology: {
      title: "Nevrologiya",
      icon: (
        <svg width="64" height="64" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7z" />
          <circle cx="12" cy="9" r="2" />
        </svg>
      ),
      description: "Nevrologiya - asab tizimi kasalliklarini o'rganish va davolash bilan shug'ullanuvchi tibbiy soha. Bizning nevrologiya bo'limi miya, orqa miya va asab kasalliklarini diagnostika qilish va davolashda ixtisoslashgan.",
      services: [
        "Miya kasalliklari davolash",
        "Orqa miya jarrohligi",
        "Nevrologik tekshiruv",
        "EEG tekshiruvi",
        "Nevrologik reabilitatsiya",
        "Bosh og'rig'i davolash"
      ],
      doctors: [
        {
          name: "Dr. Olimjon Rahimov",
          specialization: "Nevrolog",
          experience: "18 yil",
          image: "/api/placeholder/150/150"
        },
        {
          name: "Dr. Dilnoza Karimova",
          specialization: "Neyroxirurg",
          experience: "14 yil",
          image: "/api/placeholder/150/150"
        }
      ],
      contact: {
        phone: "+998 93 901 06 60",
        email: "neurology@vitamed.uz",
        address: "A-1, Envanto HQ, Kokand"
      }
    },
    gastroenterology: {
      title: "Gastroenterologiya",
      icon: (
        <svg width="64" height="64" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M12 2v20M7 7h10M7 17h10" />
        </svg>
      ),
      description: "Gastroenterologiya - ovqat hazm qilish tizimi va uning kasalliklariga ixtisoslashgan tibbiy soha. Bizning gastroenterologiya bo'limi oshqozon, ichak, jigar va oshqozon oshqozon bezining kasalliklarini davolashda professional yordam beradi.",
      services: [
        "Endoskopiya",
        "Kolonoskopiya",
        "Jigar kasalliklari davolash",
        "Ovqat hazm qilish kasalliklari parvarishi",
        "Gastrointestinal jarrohlik",
        "Oziqlanish maslahati"
      ],
      doctors: [
        {
          name: "Dr. Farhod Usmanov",
          specialization: "Gastroenterolog",
          experience: "16 yil",
          image: "/api/placeholder/150/150"
        }
      ],
      contact: {
        phone: "+998 93 901 06 60",
        email: "gastro@vitamed.uz",
        address: "A-1, Envanto HQ, Kokand"
      }
    },
    orthopedics: {
      title: "Ortopediya",
      icon: (
        <svg width="64" height="64" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M12 2v4M12 18v4" />
        </svg>
      ),
      description: "Ortopediya - mushak-skelet tizimi bilan shug'ullanadi. Bizning ortopediya bo'limi suyak, bo'g'im, mushak va ligament kasalliklari uchun to'liq yordam beradi.",
      services: [
        "Bo'g'im almashtirish jarrohligi",
        "Sport tibbiyoti",
        "Siniq davolash",
        "Orqa miya jarrohligi",
        "Artroskopiya",
        "Jismoniy terapiya"
      ],
      doctors: [
        {
          name: "Dr. Rustam Toshmatov",
          specialization: "Ortoped jarroh",
          experience: "20 yil",
          image: "/api/placeholder/150/150"
        },
        {
          name: "Dr. Nigora Akbarova",
          specialization: "Sport tibbiyoti mutaxassisi",
          experience: "10 yil",
          image: "/api/placeholder/150/150"
        }
      ],
      contact: {
        phone: "+998 93 901 06 60",
        email: "orthopedics@vitamed.uz",
        address: "A-1, Envanto HQ, Kokand"
      }
    },
    gynecology: {
      title: "Ginekologiya",
      icon: (
        <svg width="64" height="64" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M12 12v8M8 16h8" />
        </svg>
      ),
      description: "Ginekologiya - ayollar reproduktiv salomatligiga ixtisoslashgan. Bizning ginekologiya bo'limi ayollar salomatligi masalalariga hayotning barcha bosqichlarida to'liq yordam beradi.",
      services: [
        "Homiladorlik parvarishi",
        "Ginekologik jarrohlik",
        "Oila rejalashtirish",
        "Menopauza davolash",
        "Saraton tekshiruvi",
        "Bekorlik davolash"
      ],
      doctors: [
        {
          name: "Dr. Malika Tosheva",
          specialization: "Ginekolog",
          experience: "17 yil",
          image: "/api/placeholder/150/150"
        },
        {
          name: "Dr. Zulfiya Karimova",
          specialization: "Akusher-ginekolog",
          experience: "13 yil",
          image: "/api/placeholder/150/150"
        }
      ],
      contact: {
        phone: "+998 93 901 06 60",
        email: "gynecology@vitamed.uz",
        address: "A-1, Envanto HQ, Kokand"
      }
    },
    "dental-surgery": {
      title: "Tish jarrohligi",
      icon: (
        <svg width="64" height="64" fill="none" stroke="#18c2b8" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M12 2C7 2 4 7 4 12c0 5 3 10 8 10s8-5 8-10c0-5-3-10-8-10z" />
          <path d="M12 6v6" />
        </svg>
      ),
      description: "Tish jarrohligi - og'iz va yuz-jag' salomatligi bilan bog'liq turli xil jarrohlik jarayonlarini o'z ichiga oladi. Bizning tish jarrohligi bo'limi murakkab tish muammolari uchun ilg'or jarrohlik davolashni taqdim etadi.",
      services: [
        "Og'iz jarrohligi",
        "Tish implantlari",
        "Aqil tishini olib tashlash",
        "Jag' jarrohligi",
        "Mishyak jarrohligi",
        "Kosmetik stomatologiya"
      ],
      doctors: [
        {
          name: "Dr. Akmal Rahimov",
          specialization: "Og'iz jarrohi",
          experience: "19 yil",
          image: "/api/placeholder/150/150"
        },
        {
          name: "Dr. Gulnora Tosheva",
          specialization: "Yuz-jag' jarrohi",
          experience: "15 yil",
          image: "/api/placeholder/150/150"
        }
      ],
      contact: {
        phone: "+998 93 901 06 60",
        email: "dental@vitamed.uz",
        address: "A-1, Envanto HQ, Kokand"
      }
    }
  }

  const service = serviceDetails[serviceId]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The requested service could not be found.</p>
          <Link 
            to="/services" 
            className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
          >
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/services" 
              className="text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Xizmatlarga qaytish
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <div className="bg-teal-100 p-6 rounded-3xl">
              {service.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-4 text-gray-800">{service.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Service Image and Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img 
                    src="/assets/img1.webp" 
                    alt="Tibbiy xizmat" 
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Xizmat haqida</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Bizning professional tibbiy xizmatlarimiz orqali siz eng yuqori sifatli tibbiy yordam olishingiz mumkin. Bizning tajribali shifokorlarimiz zamonaviy uskunalar yordamida to'liq tekshiruv va davolashni amalga oshiradi.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Har bir bemor uchun individual yondashuv va shaxsiy davolash rejasi tuziladi. Bizning maqsadimiz - bemorlarning sog'lig'ini tiklash va ularga eng yaxshi tibbiy yordamni taqdim etishdir.
                  </p>
                </div>
              </div>
            </div>

            {/* Capabilities Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Qobiliyatlarimiz</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Bizning klinikamiz zamonaviy tibbiy uskunalar bilan jihozlangan va tajribali shifokorlar jamoasiga ega. Biz turli xil kasalliklarni diagnostika qilish va davolash imkoniyatiga egamiz.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Bizning asosiy qobiliyatlarimiz: to'liq tibbiy tekshiruv, laboratoriya tahlillari, zamonaviy diagnostika usullari va professional davolash.
                  </p>
                </div>
                <div>
                  <img 
                    src="/assets/img2.webp" 
                    alt="Tibbiy jamoa" 
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Our Procedures */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Bizning jarayonlarimiz</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Bizning klinikamizda turli xil tibbiy jarayonlar amalga oshiriladi. Har bir jarayon professional yondashuv va zamonaviy uskunalar yordamida amalga oshiriladi.
              </p>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">01</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Allergiya</h3>
                      <p className="text-gray-600">To'liq allergiya tekshiruvi va davolash</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">02</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Burun / Sinus</h3>
                      <p className="text-gray-600">Ilg'or burun va sinus jarayonlari</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">03</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Sinus muammolari</h3>
                      <p className="text-gray-600">Ixtisoslashtirilgan sinus muammolari davolash</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Screening Plans */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Tekshiruv rejalari</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Bizning klinikamizda turli xil tibbiy tekshiruvlar amalga oshiriladi. Har bir tekshiruv professional yondashuv va zamonaviy uskunalar yordamida amalga oshiriladi.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">ALLERGIYA TEKSHIRUVI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">BURUN SINISHINI KAMAYTIRISH</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">QULOQ TOSHI OLIB TASHLASH</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">ALLERGIYA TEKSHIRUVI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">BURUN SINISHINI KAMAYTIRISH</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">QULOQ TOSHI OLIB TASHLASH</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Jamoa a'zolari</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Bizning professional shifokorlar jamoamiz har bir bemor uchun eng yaxshi tibbiy yordamni taqdim etish uchun doimo o'z bilimlarini yangilab turadi.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.doctors.map((doctor, index) => (
                  <div key={index} className="text-center">
                    <div className="relative inline-block mb-4">
                      <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl font-bold text-gray-600">
                          {doctor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="absolute bottom-2 right-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                    <p className="text-teal-600 font-semibold">SHIFOKOR</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Link 
                to="/services" 
                className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Ofis ichidagi jarayonlar
              </Link>
              <Link 
                to="/services" 
                className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors"
              >
                Burun va Sinus parvarishi
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Recent Services */}
            <div className="bg-teal-500 sticky top-10 text-white rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">So'nggi xizmatlar</h3>
              <div className="space-y-3">
                <Link to="/service/cardiology" className="block text-white/80 hover:text-white transition-colors">
                  Burun va Sinus parvarishi
                </Link>
                <Link to="/service/neurology" className="block text-white hover:text-white transition-colors font-semibold">
                  Bosh va bo'yin jarrohligi
                </Link>
                <Link to="/service/gastroenterology" className="block text-white/80 hover:text-white transition-colors">
                  Ofis ichidagi jarayonlar
                </Link>
                <Link to="/service/orthopedics" className="block text-white/80 hover:text-white transition-colors">
                  Eshitish va muvozanat
                </Link>
                <Link to="/service/gynecology" className="block text-white/80 hover:text-white transition-colors">
                  Sinus asos jarrohligi
                </Link>
              </div>
            </div>

            {/* Downloads */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Yuklab olish</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-700">Download.doc</span>
                  </div>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                      Yuklab olish
                    </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-700">Download.pdf</span>
                  </div>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                      Yuklab olish
                    </button>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-teal-600 text-white rounded-2xl p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Yordam kerakmi?</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-white/90">+998 93 901 06 60</p>
                  <p className="text-white/90">mail@doctent.com</p>
                </div>
                <button className="w-full bg-white text-teal-600 py-3 px-6 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                  Uchrashuv
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ServiceDetail
