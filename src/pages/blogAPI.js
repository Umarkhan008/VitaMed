// API functions for blog post management
// Note: In a real app, these would make HTTP requests to a backend API

let blogPostsCache = null

export async function fetchBlogPosts() {
  if (blogPostsCache) return blogPostsCache
  
  try {
    // First try to load from localStorage (admin changes)
    const localPosts = localStorage.getItem('blogPosts')
    if (localPosts) {
      blogPostsCache = JSON.parse(localPosts)
      return blogPostsCache
    }
    
    // Then try JSON file
    const response = await fetch('/blog-posts.json')
    if (!response.ok) throw new Error('Failed to fetch posts')
    blogPostsCache = await response.json()
    
    // Save to localStorage for consistency
    localStorage.setItem('blogPosts', JSON.stringify(blogPostsCache))
    
    return blogPostsCache
  } catch (error) {
    console.warn('Using fallback blog posts:', error)
    // Return fallback data if JSON file doesn't exist
    blogPostsCache = [
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
    localStorage.setItem('blogPosts', JSON.stringify(blogPostsCache))
    return blogPostsCache
  }
}

export async function getPostById(id) {
  try {
    const posts = await fetchBlogPosts()
    return posts.find((p) => p.id === id)
  } catch (error) {
    console.error('Error getting post by ID:', error)
    return null
  }
}

// Simulate API calls for admin operations
export async function createPost(postData) {
  try {
    const posts = await fetchBlogPosts()
    
    // Check if ID already exists
    if (posts.find(p => p.id === postData.id)) {
      throw new Error('Bu ID allaqachon mavjud')
    }
    
    const newPost = {
      ...postData,
      date: postData.date || new Date().toISOString().split('T')[0]
    }
    
    posts.unshift(newPost) // Add to beginning
    blogPostsCache = posts
    
    // Save to localStorage as backup (in real app, this would be API call)
    localStorage.setItem('blogPosts', JSON.stringify(posts))
    
    console.log('Post created:', newPost)
    
    return { success: true, post: newPost }
  } catch (error) {
    console.error('Error creating post:', error)
    return { success: false, error: error.message }
  }
}

export async function updatePost(postId, postData) {
  try {
    const posts = await fetchBlogPosts()
    const index = posts.findIndex(p => p.id === postId)
    
    if (index === -1) {
      throw new Error('Post topilmadi')
    }
    
    // Check if new ID conflicts with existing posts (if ID changed)
    if (postData.id !== postId && posts.find(p => p.id === postData.id)) {
      throw new Error('Bu ID allaqachon mavjud')
    }
    
    posts[index] = { ...postData }
    blogPostsCache = posts
    
    // Save to localStorage as backup
    localStorage.setItem('blogPosts', JSON.stringify(posts))
    
    console.log('Post updated:', postData)
    
    return { success: true, post: postData }
  } catch (error) {
    console.error('Error updating post:', error)
    return { success: false, error: error.message }
  }
}

export async function deletePost(postId) {
  try {
    const posts = await fetchBlogPosts()
    const index = posts.findIndex(p => p.id === postId)
    
    if (index === -1) {
      throw new Error('Post topilmadi')
    }
    
    const deletedPost = posts.splice(index, 1)[0]
    blogPostsCache = posts
    
    // Save to localStorage as backup
    localStorage.setItem('blogPosts', JSON.stringify(posts))
    
    console.log('Post deleted:', deletedPost)
    
    return { success: true, post: deletedPost }
  } catch (error) {
    console.error('Error deleting post:', error)
    return { success: false, error: error.message }
  }
}

// Clear cache when posts are modified
export function clearCache() {
  blogPostsCache = null
}

// For backward compatibility
export const blogPosts = []
