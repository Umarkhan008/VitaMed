import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import { fetchBlogPosts, deletePost, clearCache } from './blogAPI.js'
import { isAuthenticated, logout, getCurrentUser, getSessionTimeRemaining, extendSession } from '../utils/auth.js'

const AdminDashboard = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')
    const [currentUser, setCurrentUser] = useState(null)
    const [sessionTime, setSessionTime] = useState(0)
    const [showSessionWarning, setShowSessionWarning] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        // Check authentication
        if (!isAuthenticated()) {
            navigate('/admin/login')
            return
        }

        // Get current user info
        const user = getCurrentUser()
        setCurrentUser(user)

        // Update session time
        const updateSessionTime = () => {
            const remaining = getSessionTimeRemaining()
            setSessionTime(remaining)
            
            // Show warning when 10 minutes left
            if (remaining <= 10 && remaining > 0) {
                setShowSessionWarning(true)
            } else {
                setShowSessionWarning(false)
            }
            
            // Auto logout when session expires
            if (remaining <= 0) {
                handleLogout()
            }
        }

        updateSessionTime()
        const sessionInterval = setInterval(updateSessionTime, 60000) // Update every minute

        loadPosts()

        return () => clearInterval(sessionInterval)
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
        logout()
        navigate('/admin/login')
    }

    const handleExtendSession = () => {
        if (extendSession()) {
            setShowSessionWarning(false)
            setSessionTime(getSessionTimeRemaining())
            showMessage('Sessiya 2 soatga uzaytirildi!', 'success')
        }
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
                    {/* User Info Bar */}
                    {currentUser && (
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Xush kelibsiz, {currentUser.username}!</p>
                                        <p className="text-sm text-gray-500">
                                            Kirgan vaqt: {new Date(currentUser.loginTime).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">Sessiya vaqti</p>
                                        <p className={`text-sm font-medium ${sessionTime <= 10 ? 'text-red-600' : 'text-green-600'}`}>
                                            {sessionTime} daqiqa qoldi
                                        </p>
                                    </div>
                                    {showSessionWarning && (
                                        <button
                                            onClick={handleExtendSession}
                                            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors"
                                        >
                                            Uzaytirish
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Session Warning */}
                    {showSessionWarning && (
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <p className="text-orange-800 font-medium">Sessiya tugash arafasida</p>
                                        <p className="text-orange-600 text-sm">Yana {sessionTime} daqiqa qoldi. Davom etish uchun sessiyani uzaytiring.</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleExtendSession}
                                    className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors"
                                >
                                    Uzaytirish
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
                            <p className="text-gray-600 mt-2">Blog postlarini boshqaring</p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={handleNewPost}
                                className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                <span>Yangi Post</span>
                            </button>
                            <button
                                onClick={handleLogout}
                                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <span>Chiqish</span>
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
