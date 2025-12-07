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
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedTag, setSelectedTag] = useState('all')
    const [sortOption, setSortOption] = useState('newest')
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
            setPosts(Array.isArray(fetchedPosts) ? fetchedPosts : [])
        } catch (error) {
            console.error('Error loading posts:', error)
            showMessage('Postlarni yuklab bo\'lmadi. Iltimos qayta urinib ko\'ring.', 'error')
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

    const handleClearCache = () => {
        clearCache()
        loadPosts()
        showMessage('Kesh tozalandi va ma\'lumotlar yangilandi!', 'success')
    }

    const handleCopyLink = async (postId) => {
        const shareUrl = `${window.location.origin}/blog/${postId}`

        try {
            if (navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(shareUrl)
                showMessage('Post havolasi nusxalandi!', 'success')
            } else {
                throw new Error('Clipboard mavjud emas')
            }
        } catch (error) {
            console.error('Copy failed:', error)
            showMessage('Clipboard ishlamadi. Havolani qo\'lda tanlang: ' + shareUrl, 'error')
        }
    }

    const filteredPosts = React.useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase()

        const filtered = posts.filter((post) => {
            const matchesSearch = !normalizedSearch ||
                post.title.toLowerCase().includes(normalizedSearch) ||
                (post.excerpt || '').toLowerCase().includes(normalizedSearch) ||
                (post.author || '').toLowerCase().includes(normalizedSearch)

            const matchesTag = selectedTag === 'all' || post.tag === selectedTag
            return matchesSearch && matchesTag
        })

        return filtered.sort((a, b) => {
            if (sortOption === 'oldest') {
                return new Date(a.date) - new Date(b.date)
            }
            if (sortOption === 'title') {
                return a.title.localeCompare(b.title, 'uz')
            }
            return new Date(b.date) - new Date(a.date)
        })
    }, [posts, searchTerm, selectedTag, sortOption])

    const tagOptions = React.useMemo(() => {
        const uniqueTags = Array.from(new Set(posts.map(post => post.tag))).filter(Boolean)
        return ['all', ...uniqueTags]
    }, [posts])

    const postsThisMonth = posts.filter(p => new Date(p.date).getMonth() === new Date().getMonth())
    const authorsCount = new Set(posts.map(post => post.author)).size
    const recentPosts = [...posts]
        .sort((a, b) => new Date(b.updatedAt || b.date) - new Date(a.updatedAt || a.date))
        .slice(0, 4)
    const readingTime = (content = '') => {
        const words = content?.trim().split(/\s+/).filter(Boolean).length || 0
        return Math.max(1, Math.round(words / 180))
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
            <main className="bg-gradient-to-br from-teal-50 via-white to-blue-50 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4">
                    {/* User Info Bar */}
                    {currentUser && (
                        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-white/60 p-6 mb-6">
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
                    <div className="mb-10 grid gap-6 lg:grid-cols-[2fr,1fr]">
                        <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl text-white p-8 shadow-xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="uppercase text-xs tracking-[0.3em] text-white/70 mb-3">Admin panel</p>
                                    <h1 className="text-3xl font-bold">Blog boshqaruvi</h1>
                                    <p className="text-white/80 mt-3 max-w-xl">
                                        Postlarni yarating, tahrirlang va statistikani nazorat qiling. Barcha ma'lumotlar real vaqt rejimida yangilanadi.
                                    </p>
                                </div>
                                <div className="hidden md:block text-right">
                                    <p className="text-4xl font-black drop-shadow">{posts.length}</p>
                                    <p className="text-sm text-white/80">Faol postlar</p>
                                </div>
                            </div>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <button
                                    onClick={handleNewPost}
                                    className="bg-white/15 backdrop-blur px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/25 transition"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    Yangi Post
                                </button>
                                <button
                                    onClick={handleClearCache}
                                    className="bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-sm hover:shadow-md transition"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582M20 20v-5h-.581M5.5 9A7.5 7.5 0 0118.5 15" />
                                    </svg>
                                    Keshni tozalash
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg border border-white/60 p-6 flex flex-col justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Sessiya holati</p>
                                <p className={"text-3xl font-semibold " + (sessionTime <= 10 ? 'text-red-500' : 'text-teal-600')}>
                                    {sessionTime} daqiqa
                                </p>
                                <p className="text-xs text-gray-400">2 soatlik sessiyalarni kuzatib boring</p>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-6">
                                {showSessionWarning && (
                                    <button
                                        onClick={handleExtendSession}
                                        className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold"
                                    >
                                        Sessiyani uzaytirish
                                    </button>
                                )}
                                <button
                                    onClick={handleLogout}
                                    className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
                                >
                                    Chiqish
                                </button>
                            </div>
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
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                        <div className="bg-white rounded-2xl p-6 border border-white/70 shadow-sm">
                            <p className="text-sm text-gray-500">Jami postlar</p>
                            <p className="text-4xl font-bold text-teal-600 mt-2">{posts.length}</p>
                            <span className="text-xs text-gray-400">Saytdagi barcha maqolalar</span>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-white/70 shadow-sm">
                            <p className="text-sm text-gray-500">Bu oy</p>
                            <p className="text-4xl font-bold text-blue-600 mt-2">{postsThisMonth.length}</p>
                            <span className="text-xs text-gray-400">So'nggi 30 kun</span>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-white/70 shadow-sm">
                            <p className="text-sm text-gray-500">Kategoriyalar</p>
                            <p className="text-4xl font-bold text-purple-600 mt-2">{new Set(posts.map(p => p.tag)).size}</p>
                            <span className="text-xs text-gray-400">Faol teglar</span>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-white/70 shadow-sm">
                            <p className="text-sm text-gray-500">Mualliflar</p>
                            <p className="text-4xl font-bold text-amber-600 mt-2">{authorsCount}</p>
                            <span className="text-xs text-gray-400">Jami mualliflar</span>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="bg-white rounded-2xl border border-white/70 shadow-sm p-6 mb-10">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
                            <div className="flex-1">
                                <label className="text-sm font-medium text-gray-700">Qidiruv</label>
                                <div className="relative mt-1">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Sarlavha, muallif yoki matndan qidiring"
                                        className="w-full border border-gray-200 rounded-xl py-3 pl-10 pr-3 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                                    />
                                    <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="lg:w-56">
                                <label className="text-sm font-medium text-gray-700">Kategoriya</label>
                                <select
                                    value={selectedTag}
                                    onChange={(e) => setSelectedTag(e.target.value)}
                                    className="w-full border border-gray-200 rounded-xl py-3 px-3 mt-1 focus:ring-2 focus:ring-teal-500"
                                >
                                    {tagOptions.map(tag => (
                                        <option key={tag} value={tag}>
                                            {tag === 'all' ? 'Barcha teglar' : tag}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="lg:w-56">
                                <label className="text-sm font-medium text-gray-700">Saralash</label>
                                <select
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                    className="w-full border border-gray-200 rounded-xl py-3 px-3 mt-1 focus:ring-2 focus:ring-teal-500"
                                >
                                    <option value="newest">Eng so'nggi</option>
                                    <option value="oldest">Eng eski</option>
                                    <option value="title">Alifbo bo'yicha</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Posts List */}
                    <div className="grid lg:grid-cols-[2fr,1fr] gap-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-white/70">
                            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-gray-900">Postlar Ro'yxati</h2>
                                <span className="text-sm text-gray-500">{filteredPosts.length} ta natija</span>
                            </div>
                            {filteredPosts.length === 0 ? (
                                <div className="p-10 text-center text-gray-500">
                                    <p className="font-medium mb-2">Hech qanday post topilmadi</p>
                                    <p className="text-sm">Qidiruv yoki filtrlarni o'zgartirib ko'ring.</p>
                                </div>
                            ) : (
                                <div className="divide-y divide-gray-100">
                                    {filteredPosts.map((post) => (
                                        <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                                            <div className="flex flex-col gap-4 md:flex-row">
                                                <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 shadow-inner">
                                                    <img
                                                        src={post.image || '/assets/logo.jpg'}
                                                        alt={post.title}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => { e.currentTarget.src = '/assets/logo.jpg' }}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex flex-wrap items-center gap-3">
                                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-100">
                                                            {post.tag || 'Kategoriya yo\'q'}
                                                        </span>
                                                        <span className="text-xs text-gray-400">ID: {post.id}</span>
                                                        {post.updatedAt && (
                                                            <span className="text-xs text-blue-500">Yangilangan: {new Date(post.updatedAt).toLocaleDateString()}</span>
                                                        )}
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-1">{post.title}</h3>
                                                    <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-3">
                                                        <span>{new Date(post.date).toLocaleDateString()}</span>
                                                        <span>•</span>
                                                        <span>{post.author}</span>
                                                        <span>•</span>
                                                        <span>{readingTime(post.content)} daqiqa o'qish</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2 md:w-40">
                                                    <button
                                                        onClick={() => window.open(`/blog/${post.id}`, '_blank')}
                                                        className="w-full bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:border-teal-500"
                                                    >
                                                        Ko'rish
                                                    </button>
                                                    <button
                                                        onClick={() => handleCopyLink(post.id)}
                                                        className="w-full bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:border-teal-500"
                                                    >
                                                        Havola nusxasi
                                                    </button>
                                                    <button
                                                        onClick={() => handleEdit(post)}
                                                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600"
                                                    >
                                                        Tahrirlash
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(post.id)}
                                                        className="w-full bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
                                                    >
                                                        O'chirish
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-white/70 h-fit">
                            <div className="p-6 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900">So'nggi faollik</h3>
                                <p className="text-sm text-gray-500">Eng so'nggi 4 ta post</p>
                            </div>
                            <ul className="divide-y divide-gray-100">
                                {recentPosts.length === 0 ? (
                                    <li className="p-6 text-sm text-gray-500">Hali postlar mavjud emas</li>
                                ) : recentPosts.map(post => (
                                    <li key={post.id} className="p-6">
                                        <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                                        <p className="font-semibold text-gray-900">{post.title}</p>
                                        <p className="text-xs text-gray-500 mt-1">{post.author} • {post.tag}</p>
                                        <p className="text-xs text-teal-600 mt-2">{readingTime(post.content)} daqiqa o'qish</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AdminDashboard
