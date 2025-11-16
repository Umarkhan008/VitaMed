// Import rasmlar
import sinImg from '../../public/assets/sin.png'
import img2 from '../../public/assets/img2.webp'
import logo from '../../public/assets/logo.jpg'

// Blog postlari ma'lumotlari
export const blogPosts = [
  {
    id: 'sinusitis-care',
    title: "Sinusitdan himoyalanish: oddiy qoidalar",
    excerpt: "Mavsumiy shamollash va allergiyalar sinusitni qo'zg'atishi mumkin.",
    date: '2025-09-18',
    author: 'Dr. A. Rahmonov',
    tag: 'Profilaktika',
    image: sinImg,
    content: "Sinusit – burun atrofidagi sinuslarning yallig'lanishi. Oldini olish uchun:\n\n- Burunni muntazam tozalang (izotonik eritmalar bilan)\n- Chang va allergenlardan saqlaning\n- Yetarli suyuqlik iching va namlikni saqlang\n- Shamollash alomatlarida erta konsultatsiya qiling"
  },
  {
    id: 'tonsillitis-signs',
    title: "Tonsillit alomatlari va davolash usullari",
    excerpt: "Bodomsimon bezlarning yallig'lanishi haqida asosiy ma'lumotlar.",
    date: '2025-08-04',
    author: 'Dr. M. Karimova',
    tag: 'LOR',
    image: img2,
    content: "Tonsillit – bo'g'izdagi bodomsimon bezlar yallig'lanishi. Belgilar:\n\n- Tomoq og'rig'i va yutinishda qiyinchilik\n- Isitma va holsizlik\n- Bo'g'izda qizarish, shish\n\nDavolash: shifokor tavsiyasiga ko'ra dori-darmonlar, issiq ichimliklar, dam olish."
  },
  {
    id: 'hearing-health',
    title: "Eshitish salomatligi: kundalik parvarish",
    excerpt: "Eshitish qobiliyatini asrash va yaxshilash bo'yicha tavsiyalar.",
    date: '2025-06-22',
    author: 'VitaMed Team',
    tag: 'Maslahat',
    image: logo,
    content: "Eshitishni asrash uchun:\n\n- Quloqchinlardan o'rtacha balandlikda foydalaning\n- Quloqni chuqur tozalashdan saqlaning\n- Suvdan keyin quloqni quriting\n- Muntazam tekshiruvdan o'ting"
  },
  {
    id: 'nose-problems',
    title: "Burun tiqilishi: sabablari va yechimlar",
    excerpt: "Burun tiqilishining asosiy sabablari va ularni bartaraf etish usullari.",
    date: '2025-07-15',
    author: 'Dr. B. Tursunov',
    tag: 'LOR',
    image: img2,
    content: "Burun tiqilishi ko'p uchraydigan muammo. Asosiy sabablari:\n\n- Shamollash va virusli infeksiyalar\n- Allergik reaksiyalar\n- Burun septumining egriligi\n- Poliplar\n\nDavolash: shifokor ko'rigidan o'ting, burun tomchilarini to'g'ri ishlating."
  },
  {
    id: 'ear-care',
    title: "Quloq gigienasi: to'g'ri parvarish qoidalari",
    excerpt: "Quloqni to'g'ri tozalash va parvarish qilish bo'yicha maslahatlar.",
    date: '2025-05-10',
    author: 'Dr. M. Yusupova',
    tag: 'Maslahat',
    image: logo,
    content: "Quloq gigienasi juda muhim:\n\n- Quloqni chuqur tozalamang\n- Paxta tayoqchalardan ehtiyot bo'ling\n- Suvdan keyin quloqni quriting\n- Og'riq yoki chiqindi bo'lsa shifokorga murojaat qiling"
  },
  {
    id: 'voice-care',
    title: "Ovozni saqlash: professional maslahatlar",
    excerpt: "Ovoz apparatini sog'lom saqlash va ovoz buzilishlarining oldini olish.",
    date: '2025-04-20',
    author: 'VitaMed Team',
    tag: 'Profilaktika',
    image: sinImg,
    content: "Ovozni saqlash uchun:\n\n- Ko'p suv iching\n- Qichqirmang va shivirlang\n- Chekishdan saqlaning\n- Tomoq og'riganda dam oling\n- Ovoz mashqlarini muntazam bajaring"
  }
]

// Post ID bo'yicha topish
export function getPostById(id) {
  return blogPosts.find(post => post.id === id)
}

// Barcha postlarni olish (API o'rniga)
export function fetchBlogPosts() {
  return Promise.resolve(blogPosts)
}

