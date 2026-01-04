import { supabase } from '../supabaseClient'

// Fetch all posts
export async function fetchBlogPosts() {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('date', { ascending: false })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// Get single post
export async function getPostById(postId) {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', postId)
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

// Create post
export async function createPost(postData) {
  try {
    // Ensure we send valid data compatible with Supabase columns
    const newPost = {
      title: postData.title,
      content: postData.content,
      excerpt: postData.excerpt,
      image: postData.image,
      author: postData.author,
      tag: postData.tag,
      date: new Date().toISOString(),
      views: 0
    }

    const { data, error } = await supabase
      .from('posts')
      .insert([newPost])
      .select()

    if (error) throw error

    console.log('Post created:', data[0])
    return { success: true, post: data[0] }
  } catch (error) {
    console.error('Error creating post:', error)
    return { success: false, error: error.message }
  }
}

// Update post
export async function updatePost(postId, updatedData) {
  try {
    const { data, error } = await supabase
      .from('posts')
      .update({
        ...updatedData,
        updated_at: new Date().toISOString() // Assuming there is an updated_at column or just keeping it simple
      })
      .eq('id', postId)
      .select()

    if (error) throw error

    console.log('Post updated:', data[0])
    return { success: true, post: data[0] }
  } catch (error) {
    console.error('Error updating post:', error)
    return { success: false, error: error.message }
  }
}

// Delete post
export async function deletePost(postId) {
  try {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', postId)

    if (error) throw error

    return { success: true }
  } catch (error) {
    console.error('Error deleting post:', error)
    return { success: false, error: error.message }
  }
}

// Helper for cache (no-op now as Supabase handles data)
export function clearCache() {
  // No local cache to clear in this implementation
}

// Backward compatibility (optional, usually empty array or removed)
export const blogPosts = []
