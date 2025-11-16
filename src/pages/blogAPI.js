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
    return blogPostsCache
  } catch (error) {
    console.error('Error deleting post:', error)
    return { success: false, error: error.message }
  }
}

// Clear cache when posts are modified
export function clearCache() {
  blogPostsCache = null
}

// Delete a blog post
export async function deletePost(postId) {
  try {
    // Get current posts
    const posts = await fetchBlogPosts()
    const index = posts.findIndex(p => p.id === postId)
    
    if (index === -1) {
      throw new Error('Post topilmadi')
    }
    
    const deletedPost = posts.splice(index, 1)[0]
    blogPostsCache = posts
    
    // Save to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(posts))
    
    console.log('Post deleted:', deletedPost)
    return { success: true, post: deletedPost }
  } catch (error) {
    console.error('Error deleting post:', error)
    return { success: false, error: error.message }
  }
}

// Get a single post by ID
export async function getPostById(postId) {
  try {
    const posts = await fetchBlogPosts()
    return posts.find(post => post.id === postId) || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

// Create a new blog post
export async function createPost(postData) {
  try {
    const posts = await fetchBlogPosts()
    const newPost = {
      ...postData,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    }
    
    const updatedPosts = [newPost, ...posts]
    blogPostsCache = updatedPosts
    
    // Save to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
    
    console.log('Post created:', newPost)
    return { success: true, post: newPost }
  } catch (error) {
    console.error('Error creating post:', error)
    return { success: false, error: error.message }
  }
}

// Update an existing blog post
export async function updatePost(postId, updatedData) {
  try {
    const posts = await fetchBlogPosts()
    const index = posts.findIndex(p => p.id === postId)
    
    if (index === -1) {
      throw new Error('Post topilmadi')
    }
    
    const updatedPost = {
      ...posts[index],
      ...updatedData,
      updatedAt: new Date().toISOString()
    }
    
    const updatedPosts = [...posts]
    updatedPosts[index] = updatedPost
    blogPostsCache = updatedPosts
    
    // Save to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
    
    console.log('Post updated:', updatedPost)
    return { success: true, post: updatedPost }
  } catch (error) {
    console.error('Error updating post:', error)
    return { success: false, error: error.message }
  }
}

// For backward compatibility
export const blogPosts = []
