import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import PageHeader from '../PageHeader.jsx'
import Rhinoplasty from '../../public/assets/Rhinoplasty.jpg'
import Rhinoplasty2 from '../../public/assets/Rhinoplasty2.jpg'
import Adenoidectomy from '../../public/assets/Adenoidectomy.jpg'
import Adenoidectomy2 from '../../public/assets/Adenoidectomy2.jpg'
import Septoplasty from '../../public/assets/Septoplasty.jpg'
import Septoplasty2 from '../../public/assets/Septoplasty2.jpg'
import Tonsillotomy from '../../public/assets/Tonsillotomy.jpg'
import Tonsillotomy2 from '../../public/assets/Tonsillotomy2.jpg'
import logo from '/assets/logo.jpg'
import Footer from '../Footer.jsx'


const navItems = [
  { id: '/', label: "Bosh sahifa" },
  { id: '/services', label: "Xizmatlar" },
  { id: '/blog', label: "Blog" },
  { id: '/contact', label: "Aloqa" },
]
// Service.jsx dan import qilingan xizmatlar
const services = [
  {
    id: "hearing-tests",
    title: "Eshitish Tekshiruvi",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6" />
        <path d="M12 17v6" />
        <path d="M4.22 4.22l4.24 4.24" />
        <path d="M15.54 15.54l4.24 4.24" />
        <path d="M1 12h6" />
        <path d="M17 12h6" />
        <path d="M4.22 19.78l4.24-4.24" />
        <path d="M15.54 8.46l4.24-4.24" />
      </svg>
    ),
    desc: "Audiometriya va boshqa zamonaviy usullar yordamida eshitish qobiliyatini tekshirish.",
  },
  {
    id: "nose-surgery",
    title: "Rinoplastika",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <path d="M3 12h18m-9-9v18" />
        <path d="M7 7l10 10M17 7L7 17" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    desc: "Rinoplastika, septoplastika va boshqa burun operatsiyalari eng yuqori sifatda.",
  },
  {
    id: "throat-treatment",
    title: "Adenotomiya",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <rect x="3" y="8" width="18" height="10" rx="2" />
        <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" />
        <line x1="12" y1="11" x2="12" y2="13" />
        <line x1="12" y1="15" x2="12" y2="17" />
      </svg>
    ),
    desc: "Tonsillektomiya, adenoidektomiya va boshqa tomoq kasalliklarini davolash.",
  },
  {
    id: "ear-cleaning",
    title: "Septoplastika",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="2" fill="#01bdb2" />
      </svg>
    ),
    desc: "Professional quloq tozalash va quloq tiqinlarini olib tashlash xizmatlari.",
  },
  {
    id: "voice-therapy",
    title: "Full Face",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
        <circle cx="12" cy="8" r="1" />
        <circle cx="12" cy="11" r="1" />
        <circle cx="12" cy="14" r="1" />
      </svg>
    ),
    desc: "Ovoz buzilishlari va nutq muammolarini davolash uchun maxsus terapiya.",
  },
  {
    id: "tonsillotomiya",
    title: "Tonsillotomiya | Tonsillektomiya",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#01bdb2" strokeWidth="2">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
        <circle cx="12" cy="8" r="1" />
        <circle cx="12" cy="11" r="1" />
        <circle cx="12" cy="14" r="1" />
      </svg>
    ),
    desc: "Tonsillotomiya va tonsillektomiya operatsiyalari.",
  },
]

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const [menuOpen, setMenuOpen] = React.useState(false)
  const navigate = useNavigate()

  const closeMenu = () => setMenuOpen(false)
  const handleNavClick = (path) => {
    navigate(path)
    if (menuOpen) {
      closeMenu()
    }
  }


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [serviceId])

  const serviceDetails = {
    "hearing-tests": {
      title: "Eshitish Tekshiruvi",
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#18c2b8" strokeWidth="2.5">
          <path d="M7 11a5 5 0 019-3" />
          <path d="M7 11v2a3 3 0 003 3h1" />
          <path d="M17 9a5 5 0 01-1.5 3.5" />
          <circle cx="6" cy="18" r="1.5" />
        </svg>
      ),
      description: "Audiometriya va boshqa zamonaviy tekshiruvlar orqali eshitish qobiliyatini baholash hamda mos davolash usullarini tanlash.",
      image1: "/assets/hearing-test.jpg",
      image2: "/assets/audiology-team.jpg",
      services: [
        "Kompyuter audiometriyasi",
        "Bolalar eshitishini tekshirish",
        "Quloq ichidagi bosimni o'lchash",
        "Eshitish apparatini sozlash",
        "Profilaktik tekshiruvlar",
        "Reabilitatsiya dasturlari"
      ],
      doctors: [
        {
          name: "Dr. Bobur Rahimov",
          specialization: "Audiolog",
          experience: "10 yil",
          image: "/api/placeholder/150/150"
        }
      ],
      contact: {
        phone: "+998 93 901 06 60",
        email: "hearing@vitamed.uz",
        address: "VitaMed Audiologiya markazi"
      }
    },
    "nose-surgery": {
      title: "Rinoplastika",
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#18c2b8" strokeWidth="2.5">
          <path d="M10 3c-1.5 2-2 3.5-2 5 0 1.5.5 3 1.5 4.5L11 15" />
          <path d="M14 3c1.5 2 2 3.5 2 5 0 1.5-.5 3-1.5 4.5L13 15" />
          <path d="M10 19a2 2 0 004 0" />
        </svg>
      ),
      description: "Rinoplastika, septoplastika va sinus operatsiyalarini yuqori tajribaga ega jarrohlar bajaradi.",
      desc: "Rinoplastika — burun shakli va tuzilishini tuzatish uchun bajariladigan jarrohlik amaliyotidir. Ushbu xizmat burunning tashqi ko‘rinishini yaxshilash va nafas olish muammolarini bartaraf etish maqsadida amalga oshiriladi. Amaliyot har bir bemor holatiga mos ravishda, zamonaviy uskunalar yordamida bajariladi.",
      image1: Rhinoplasty,
      image2: Rhinoplasty2,
      services: [
        "Rinoplastika",
        "Septoplastika",
        "Sinus jarrohligi",
        "Burun tiqilishi davosi",
        "Jarrohlikdan keyingi parvarish",
        "Konsultatsiya"
      ],
      doctors: [
        {
          name: "Dr. Malika Yusupova",
          specialization: "Burun jarrohi",
          experience: "13 yil",
          image: "/api/placeholder/150/150"
        }
      ],
      contact: {
        phone: "+998 93 901 06 60",
        email: "surgery@vitamed.uz",
        address: "VitaMed jarrohlik markazi"
      }
    },
    "throat-treatment": {
      title: "Adenotomiya",
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#18c2b8" strokeWidth="2.5">
          <rect x="9" y="3" width="6" height="8" rx="3" />
          <path d="M12 11v6" />
          <path d="M8 14c0 2.2 1.8 4 4 4s4-1.8 4-4" />
        </svg>
      ),
      description: "Tonsillit, faringit va boshqa tomoq kasalliklarini konservativ yoki jarrohlik usulida davolash.",
      desc: "Adenoidektomiya — burun orqa qismidagi adenoid bezlarni olib tashlash uchun bajariladigan jarrohlik amaliyotidir. Ushbu xizmat nafas olishni yaxshilash, tez-tez shamollash va quloq bilan bog‘liq muammolarni kamaytirish maqsadida amalga oshiriladi. Amaliyot zamonaviy uskunalar yordamida, xavfsiz sharoitda bajariladi.",
      image1: Adenoidectomy,
      image2: Adenoidectomy2,
      services: [
        "Tonsillektomiya",
        "Adenoidektomiya",
        "Lazer terapiyasi",
        "Kronik kasalliklarni davolash",
        "Nazorat tekshiruvlari",
        "Ovoz mashqlari"
      ],
      doctors: [
        {
          name: "Dr. Dilnoza Tursunova",
          specialization: "LOR shifokor",
          experience: "12 yil",
          image: "/api/placeholder/150/150"
        }
      ],
      contact: {
        phone: "+998 93 901 06 60",
        email: "throat@vitamed.uz",
        address: "VitaMed LOR bo'limi"
      }
    },
    "ear-cleaning": {
      title: "Septoplastika",
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#18c2b8" strokeWidth="2.5">
          <path d="M8 10a4 4 0 018 0c0 1.5-.5 2.5-1.5 3.5L13 15" />
          <path d="M7 10a5 5 0 0110 0c0 2-1 3.5-2.5 4.8L12 18" />
          <circle cx="7" cy="18" r="1.5" />
        </svg>
      ),
      description: "Professional quloq tozalash, tiqinlarni olib tashlash va yallig'lanishni davolash.",
      desc: "Septoplastika — burun ichidagi to‘siq (septum) qiyshayishini tuzatish uchun bajariladigan jarrohlik amaliyotidir. Ushbu xizmat burun orqali erkin nafas olishni tiklash, burun bitishi va nafas olishdagi noqulayliklarni kamaytirish maqsadida amalga oshiriladi. Amaliyot zamonaviy uskunalar yordamida, xavfsiz sharoitda bajariladi.",
      image1: Septoplasty,
      image2: Septoplasty2,
      services: [
        "Quloq tiqinini olib tashlash",
        "Yallig'lanishni davolash",
        "Profilaktik tozalash",
        "Bolalar qulog'ini parvarish",
        "Quloq gigiyenasi bo'yicha maslahat",
        "Uy sharoitida parvarish"
      ],
      doctors: [
        {
          name: "Dr. Bobur Rahimov",
          specialization: "LOR shifokor",
          experience: "10 yil",
          image: "/api/placeholder/150/150"
        }
      ],
      contact: {
        phone: "+998 93 901 06 60",
        email: "earcare@vitamed.uz",
        address: "VitaMed LOR bo'limi"
      }
    },
    "voice-therapy": {
      title: "Full Face",
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#18c2b8" strokeWidth="2.5">
          <rect x="9" y="4" width="6" height="10" rx="3" />
          <path d="M5 10a7 7 0 0014 0" />
          <path d="M12 18v3" />
          <path d="M9 21h6" />
        </svg>
      ),
      description: "Nutq va ovoz buzilishlarini jarrohliksiz davolash uchun logoped va foniatrlar tomonidan olib boriladigan terapiya.",
      image1: "/assets/voice-therapy.jpg",
      image2: "/assets/voice-team.jpg",
      services: [
        "Logopedik mashg'ulotlar",
        "Ovoz bog'lamlarini mustahkamlash",
        "Nutqni tiklash",
        "Professional ovoz parvarishi",
        "Uy mashqlari",
        "Kuzatuv sesiyalari"
      ],
      doctors: [
        {
          name: "Dr. Malika Yusupova",
          specialization: "Foniatr",
          experience: "13 yil",
          image: "/api/placeholder/150/150"
        }
      ],
      contact: {
        phone: "+998 93 901 06 60",
        email: "voice@vitamed.uz",
        address: "VitaMed Reabilitatsiya markazi"
      }
    },
    "tonsillotomiya": {
      title: "Tonsillotomiya | Tonsillektomiya",
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#18c2b8" strokeWidth="2.5">
          <rect x="9" y="4" width="6" height="10" rx="3" />
          <path d="M5 10a7 7 0 0014 0" />
          <path d="M12 18v3" />
          <path d="M9 21h6" />
        </svg>
      ),
      description: "Tonsillotomiya va tonsillektomiya operatsiyalari.",
      desc: "Tonsillotomiya — bodomcha bezlarni qisman kesish orqali ularning kattaligini kamaytirish uchun bajariladigan jarrohlik amaliyotidir. Ushbu usul nafas olish va yutishdagi noqulayliklarni kamaytirishga yordam beradi. Tonsillektomiya — bodomcha bezlarni to‘liq olib tashlash uchun bajariladigan jarrohlik amaliyotidir. Ushbu xizmat tez-tez tomoq og‘rishi, yallig‘lanish va infeksiyalarni bartaraf etish maqsadida amalga oshiriladi.",
      image1: Tonsillotomy,
      image2: Tonsillotomy2,
      services: [
        "Tonsillotomiya",
        "Tonsillektomiya",
        "Operatsiyadan oldingi tayyorgarlik",
        "Operatsiyadan keyingi parvarish",
        "Nazorat tekshiruvlari",
        "Reabilitatsiya"
      ],
      doctors: [
        {
          name: "Dr. Dilnoza Tursunova",
          specialization: "LOR shifokor",
          experience: "12 yil",
          image: "/api/placeholder/150/150"
        }
      ],
      contact: {
        phone: "+998 93 901 06 60",
        email: "tonsils@vitamed.uz",
        address: "VitaMed LOR bo'limi"
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
    <>
      <PageHeader />

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-white py-10 md:py-16">
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
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="bg-teal-100 p-4 md:p-6 rounded-3xl shrink-0">
                {service.icon}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">{service.title}</h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto md:mx-0">{service.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Service Image and Description */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={service.image1}
                      alt="Tibbiy xizmat"
                      className="w-full h-64 md:h-80 object-cover rounded-2xl"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Xizmat haqida</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.desc}
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
                      src={service.image2}
                      alt="Tibbiy jamoa"
                      className="w-full h-56 md:h-64 object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>


              {/* Navigation */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 py-6 border-t border-gray-100">
                <Link
                  to="/services"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 text-teal-600 hover:text-teal-700 transition-colors bg-teal-50 sm:bg-transparent py-3 sm:py-0 rounded-xl sm:rounded-none"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Ofis ichidagi jarayonlar</span>
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 text-teal-600 hover:text-teal-700 transition-colors bg-teal-50 sm:bg-transparent py-3 sm:py-0 rounded-xl sm:rounded-none"
                >
                  <span>Burun va Sinus parvarishi</span>
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
                  <Link to="/service/hearing-tests" className={`block transition-colors ${serviceId === 'hearing-tests' ? 'text-white font-semibold' : 'text-white/80 hover:text-white'}`}>
                    Eshitish Tekshiruvi
                  </Link>
                  <Link to="/service/nose-surgery" className={`block transition-colors ${serviceId === 'nose-surgery' ? 'text-white font-semibold' : 'text-white/80 hover:text-white'}`}>
                    Rinoplastika
                  </Link>
                  <Link to="/service/throat-treatment" className={`block transition-colors ${serviceId === 'throat-treatment' ? 'text-white font-semibold' : 'text-white/80 hover:text-white'}`}>
                    Adenotomiya
                  </Link>
                  <Link to="/service/ear-cleaning" className={`block transition-colors ${serviceId === 'ear-cleaning' ? 'text-white font-semibold' : 'text-white/80 hover:text-white'}`}>
                    Septoplastika
                  </Link>
                  <Link to="/service/voice-therapy" className={`block transition-colors ${serviceId === 'voice-therapy' ? 'text-white font-semibold' : 'text-white/80 hover:text-white'}`}>
                    Full Face
                  </Link>
                  <Link to="/service/tonsillotomiya" className={`block transition-colors ${serviceId === 'tonsillotomiya' ? 'text-white font-semibold' : 'text-white/80 hover:text-white'}`}>
                    Tonsillotomiya | Tonsillektomiya
                  </Link>
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
      <Footer />
    </>
  )
}

export default ServiceDetail
