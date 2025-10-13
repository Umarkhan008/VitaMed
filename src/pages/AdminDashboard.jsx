import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import { fetchBlogPosts, deletePost, clearCache } from './blogAPI.js'

const AdminDashboard = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        // Check authentication
        if (!localStorage.getItem('adminAuth')) {
            navigate('/admin/login')
            return
        }

        loadPosts()
    }, [navigate])

    const loadPosts = async () => {
        try {
            const fetchedPosts = await fetchBlogPosts()
            setPosts(fetchedPosts)
        } catch (error) {
            console.error('Error loading posts:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('adminAuth')
        navigate('/admin/login')
    }

    const showMessage = (text, type = 'success') => {
        setMessage(text)
        setMessageType(type)
        setTimeout(() => {
            setMessage('')
            setMessageType('')
        }, 5000)
    }

    const handleEdit = (post) => {
        navigate(`/admin/post/${post.id}/edit`)
    }

    const handleDelete = async (postId) => {
        if (window.confirm('Bu postni o\'chirishni xohlaysizmi?')) {
            const result = await deletePost(postId)
            if (result.success) {
                showMessage('Post muvaffaqiyatli o\'chirildi!')
                clearCache()
                loadPosts()
            } else {
                showMessage(result.error, 'error')
            }
        }
    }

    const handleNewPost = () => {
        navigate('/admin/post/new')
    }

    if (loading) {
        return (
            <>
                <Header />
                <main className="bg-gray-50 min-h-screen py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-300 rounded w-64 mb-8"></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1,2,3].map(i => (
                                    <div key={i} className="bg-white rounded-lg p-6">
                                        <div className="h-6 bg-gray-300 rounded mb-4"></div>
                                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Header />
            <main className="bg-gray-50 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
                            <p className="text-gray-600 mt-2">Blog postlarini boshqaring</p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={handleNewPost}
                                className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
                            >
                                + Yangi Post
                            </button>
                            <button
                                onClick={handleLogout}
                                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                            >
                                Chiqish
                            </button>
                        </div>
                    </div>

                    {/* Success/Error Messages */}
                    {message && (
                        <div className={`mb-6 p-4 rounded-lg ${
                            messageType === 'error' 
                                ? 'bg-red-50 text-red-700 border border-red-200' 
                                : 'bg-green-50 text-green-700 border border-green-200'
                        }`}>
                            {message}
                        </div>
                    )}

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900">Jami Postlar</h3>
                            <p className="text-3xl font-bold text-teal-500 mt-2">{posts.length}</p>
                        </div>
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900">Bu Oy</h3>
                            <p className="text-3xl font-bold text-blue-500 mt-2">
                                {posts.filter(p => new Date(p.date).getMonth() === new Date().getMonth()).length}
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900">Kategoriyalar</h3>
                            <p className="text-3xl font-bold text-purple-500 mt-2">
                                {new Set(posts.map(p => p.tag)).size}
                            </p>
                        </div>
                    </div>

                    {/* Posts List */}
                    <div className="bg-white rounded-lg shadow-sm">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-900">Postlar Ro'yxati</h2>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {posts.map((post) => (
                                <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                                            <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                                <span>•</span>
                                                <span>{post.author}</span>
                                                <span>•</span>
                                                <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">
                                                    {post.tag}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 ml-4">
                                            <button
                                                onClick={() => handleEdit(post)}
                                                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors"
                                            >
                                                Tahrirlash
                                            </button>
                                            <button
                                                onClick={() => handleDelete(post.id)}
                                                className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors"
                                            >
                                                O'chirish
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AdminDashboard
