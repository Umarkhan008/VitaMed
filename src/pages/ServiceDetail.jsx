import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Header from '../Header.jsx'
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

      <header id="home" className="relative w-full overflow-hidden">
        {/* Hero Section with Video Background */}
        <section className="relative w-full h-max flex flex-col">

          {/* Top Contact Bar */}
          <div className="bg-white text-black py-2 relative z-10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="flex gap-8 flex-wrap">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <svg className="w-4 text-teal-500 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Qoqon shaxar shoxruxobod kuchasi 4D-uy</span>
                  </div>
                  <a href="tel:+998939010660" className="flex items-center gap-2 text-sm font-medium hover:text-teal-600 transition-colors duration-300">
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+998 93 901 06 60</span>
                  </a>
                  <div className="flex items-center gap-2  text-sm font-medium">
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>info@qo'qonlor.uz</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center justify-center w-8 h-8 bg-teal-500 text-white rounded-full transition-all duration-300 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md" aria-label="Twitter">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="flex items-center justify-center w-8 h-8 bg-teal-500 text-white rounded-full transition-all duration-300 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md" aria-label="LinkedIn">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="flex items-center justify-center w-8 h-8 bg-teal-500 text-white rounded-full transition-all duration-300 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md" aria-label="Pinterest">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="bg-white border-b border-gray-200 py-4 relative z-10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between gap-8">
                {/* Logo Section */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <img src={logo} alt="VitaMed logo" className="w-12 h-12 rounded-full object-cover border-2 border-teal-500" />
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-gray-800 m-0 leading-tight flex items-center gap-2">
                      Qo'qon lor
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-teal-100 text-teal-700 border border-teal-200">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                          <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm1 5a1 1 0 0 0-2 0v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13 11.586Z" />
                        </svg>
                        24/7
                      </span>
                    </h1>
                    <p className="text-sm text-gray-500 m-0 font-medium">Sifatli Tibbiy Xizmat</p>
                  </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 items-center">
                  {navItems.map(({ id, label }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => handleNavClick(id)}
                      className="text-gray-800 no-underline font-semibold text-base px-4 py-2 rounded-lg transition-all duration-300 relative hover:text-teal-500 hover:bg-teal-50 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-teal-500 after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-4/5 bg-transparent border-none cursor-pointer"
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block flex-shrink-0">
                  <button className="bg-teal-500 text-white border-none px-6 py-3 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-300 shadow-sm hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md">Uchrashuv belgilash</button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                  className="md:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer p-2 rounded transition-all duration-300 hover:bg-teal-50"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Menyuni ochish/yopish"
                >
                  <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 rounded ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 rounded ${menuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 rounded ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 transition-all duration-300 z-20 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{ visibility: menuOpen ? 'visible' : 'hidden' }}>
                <div className="p-6 flex flex-col gap-4">
                  {navItems.map(({ id, label }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => handleNavClick(id)}
                      className="text-gray-800 text-left no-underline font-semibold text-lg py-3 border-b border-gray-200/50 transition-all duration-300 hover:text-teal-500 hover:pl-2 bg-transparent border-none cursor-pointer"
                    >
                      {label}
                    </button>
                  ))}
                  <button className="bg-teal-500 text-white border-none px-6 py-4 rounded-lg font-semibold text-base cursor-pointer transition-all duration-300 mt-2 hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md">Uchrashuv belgilash</button>
                </div>
              </div>
            </div>
          </nav>
        </section>
      </header>


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
                      src={service.image1}
                      alt="Tibbiy xizmat"
                      className="w-full h-80 object-cover rounded-2xl"
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
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  </div>
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
