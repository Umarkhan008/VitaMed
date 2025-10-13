// Fallback data if JSON fails to load
const fallbackPosts = [
  {
    id: 'sinusitis-care',
    title: "Sinusitdan himoyalanish: oddiy qoidalar",
    excerpt: "Mavsumiy shamollash va allergiyalar sinusitni qo'zg'atishi mumkin.",
    date: '2025-09-18',
    author: 'Dr. A. Rahmonov',
    tag: 'Profilaktika',
    image: '/assets/img1.webp',
    content: "Sinusit – burun atrofidagi sinuslarning yallig'lanishi. Oldini olish uchun:\n\n- Burunni muntazam tozalang (izotonik eritmalar bilan)\n- Chang va allergenlardan saqlaning\n- Yetarli suyuqlik iching va namlikni saqlang\n- Shamollash alomatlarida erta konsultatsiya qiling"
  },
  {
    id: 'tonsillitis-signs',
    title: "Tonsillit alomatlari va davolash usullari",
    excerpt: "Bodomsimon bezlarning yallig'lanishi haqida asosiy ma'lumotlar.",
    date: '2025-08-04',
    author: 'Dr. M. Karimova',
    tag: 'LOR',
    image: '/assets/img2.webp',
    content: "Tonsillit – bo'g'izdagi bodomsimon bezlar yallig'lanishi. Belgilar:\n\n- Tomoq og'rig'i va yutinishda qiyinchilik\n- Isitma va holsizlik\n- Bo'g'izda qizarish, shish\n\nDavolash: shifokor tavsiyasiga ko'ra dori-darmonlar, issiq ichimliklar, dam olish."
  },
  {
    id: 'hearing-health',
    title: "Eshitish salomatligi: kundalik parvarish",
    excerpt: "Eshitish qobiliyatini asrash va yaxshilash bo'yicha tavsiyalar.",
    date: '2025-06-22',
    author: 'VitaMed Team',
    tag: 'Maslahat',
    image: '/assets/logo.jpg',
    content: "Eshitishni asrash uchun:\n\n- Quloqchinlardan o'rtacha balandlikda foydalaning\n- Quloqni chuqur tozalashdan saqlaning\n- Suvdan keyin quloqni quriting\n- Muntazam tekshiruvdan o'ting"
  }
]

let cachedPosts = null

export async function fetchBlogPosts() {
  if (cachedPosts) return cachedPosts
  
  try {
    const response = await fetch('/blog-posts.json')
    if (!response.ok) throw new Error('Failed to fetch posts')
    cachedPosts = await response.json()
    return cachedPosts
  } catch (error) {
    console.warn('Using fallback blog posts:', error)
    cachedPosts = fallbackPosts
    return cachedPosts
  }
}

export function getPostById(id) {
  if (cachedPosts) {
    return cachedPosts.find((p) => p.id === id)
  }
  return fallbackPosts.find((p) => p.id === id)
}

// For backward compatibility
export const blogPosts = fallbackPosts

