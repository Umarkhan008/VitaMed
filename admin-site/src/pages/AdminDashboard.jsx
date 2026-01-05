import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchBlogPosts, deletePost, clearCache } from '../api/blogAPI.js'
import { fetchTeamMembers, deleteTeamMember } from '../api/teamAPI.js'
import { isAuthenticated, logout, getCurrentUser, getSessionTimeRemaining, extendSession } from '../utils/auth.js'

const AdminDashboard = () => {
    const [posts, setPosts] = useState([])
    const [teamMembers, setTeamMembers] = useState([])
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')
    const [currentUser, setCurrentUser] = useState(null)
    const [sessionTime, setSessionTime] = useState(0)
    const [showSessionWarning, setShowSessionWarning] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedTag, setSelectedTag] = useState('all')
    const [sortOption, setSortOption] = useState('newest')
    const [activeTab, setActiveTab] = useState('posts') // 'posts' or 'team'
    const navigate = useNavigate()

    useEffect(() => {
        // Check authentication
        if (!isAuthenticated()) {
            navigate('/login')
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

        loadInitialData()

        return () => clearInterval(sessionInterval)
    }, [navigate])

    const loadInitialData = async () => {
        setLoading(true)
        try {
            const [fetchedPosts, fetchedTeam] = await Promise.all([
                fetchBlogPosts(),
                fetchTeamMembers()
            ])
            setPosts(Array.isArray(fetchedPosts) ? fetchedPosts : [])
            setTeamMembers(Array.isArray(fetchedTeam) ? fetchedTeam : [])
        } catch (error) {
            console.error('Error loading data:', error)
            showMessage('Ma\'lumotlarni yuklab bo\'lmadi.', 'error')
        } finally {
            setLoading(false)
        }
    }

    const loadPosts = async () => {
        try {
            const fetchedPosts = await fetchBlogPosts()
            setPosts(Array.isArray(fetchedPosts) ? fetchedPosts : [])
        } catch (error) {
            console.error('Error loading posts:', error)
        }
    }

    const loadTeam = async () => {
        try {
            const fetchedTeam = await fetchTeamMembers()
            setTeamMembers(Array.isArray(fetchedTeam) ? fetchedTeam : [])
        } catch (error) {
            console.error('Error loading team:', error)
        }
    }

    const handleLogout = () => {
        logout()
        navigate('/login')
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

    const handleEditPost = (post) => {
        navigate(`/post/${post.id}/edit`)
    }

    const handleDeletePost = async (postId) => {
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

    const handleEditMember = (memberId) => {
        navigate(`/team/${memberId}/edit`)
    }

    const handleDeleteMember = async (memberId) => {
        if (window.confirm('Ushbu xodimni o\'chirishni xohlaysizmi?')) {
            const result = await deleteTeamMember(memberId)
            if (result.success) {
                showMessage('Xodim o\'chirildi!')
                loadTeam()
            } else {
                showMessage(result.error, 'error')
            }
        }
    }

    const handleNewPost = () => navigate('/post/new')
    const handleNewMember = () => navigate('/team/new')

    const filteredPosts = React.useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase()
        const filtered = posts.filter((post) => {
            const matchesSearch = !normalizedSearch ||
                post.title.toLowerCase().includes(normalizedSearch) ||
                (post.excerpt || '').toLowerCase().includes(normalizedSearch)
            const matchesTag = selectedTag === 'all' || post.tag === selectedTag
            return matchesSearch && matchesTag
        })
        return filtered.sort((a, b) => sortOption === 'oldest' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date))
    }, [posts, searchTerm, selectedTag, sortOption])

    const postsThisMonth = posts.filter(p => new Date(p.date).getMonth() === new Date().getMonth())

    if (loading) {
        return (
            <main className="bg-gray-50 min-h-screen py-12">
                <div className="w-full mx-auto px-4 md:px-8 lg:px-12">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-300 rounded w-64 mb-8"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="bg-white rounded-lg p-6">
                                    <div className="h-6 bg-gray-300 rounded mb-4"></div>
                                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="bg-[#f8fafc] min-h-screen pb-20">
            {/* Top Navigation Bar */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-30 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-100">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900 leading-tight">VitaMed</h1>
                            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Admin Panel</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex flex-col items-end">
                            <span className="text-sm font-semibold text-gray-900">{currentUser?.username}</span>
                            <span className={`text-[11px] font-bold ${sessionTime <= 10 ? 'text-red-500 animate-pulse' : 'text-teal-600'}`}>
                                Sessiya: {sessionTime} daq
                            </span>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900">Boshqaruv Markazi</h2>
                        <p className="text-gray-500 mt-1">Xush kelibsiz! Sayt ma'lumotlarini shu yerdan boshqaring.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={handleNewPost}
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-teal-100 transition-all active:scale-95"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            Yangi Post
                        </button>
                        <button
                            onClick={handleNewMember}
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-teal-500 hover:text-teal-600 text-gray-700 px-5 py-2.5 rounded-xl font-bold shadow-sm transition-all active:scale-95"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                            Yangi Xodim
                        </button>
                    </div>
                </div>

                {message && (
                    <div className={`mb-8 flex items-center gap-3 p-4 rounded-2xl animate-in slide-in-from-top duration-300 ${messageType === 'error' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-green-50 text-green-700 border border-green-100'}`}>
                        {messageType === 'error' ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                        ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        )}
                        <span className="font-bold text-sm">{message}</span>
                    </div>
                )}

                {/* Session Warning */}
                {showSessionWarning && (
                    <div className="mb-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center text-amber-700">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-amber-900">Sessiya yakunlanmoqda</h4>
                                <p className="text-amber-700 text-sm">Xavfsizlik uchun sessiya tez orada tugaydi.</p>
                            </div>
                        </div>
                        <button
                            onClick={handleExtendSession}
                            className="w-full sm:w-auto bg-amber-200 hover:bg-amber-300 text-amber-900 px-6 py-2 rounded-xl font-bold transition-colors"
                        >
                            Uzzaytirish
                        </button>
                    </div>
                )}

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                        </div>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Jami Postlar</p>
                        <p className="text-3xl font-extrabold text-gray-900 mt-1">{posts.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        </div>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Jamoa A'zolari</p>
                        <p className="text-3xl font-extrabold text-gray-900 mt-1">{teamMembers.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Shu oyda postlar</p>
                        <p className="text-3xl font-extrabold text-gray-900 mt-1">{postsThisMonth.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center text-rose-600 mb-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 11h.01M7 15h.01M11 7h.01M11 11h.01M11 15h.01M15 7h.01M15 11h.01M15 15h.01" /></svg>
                        </div>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Kategoriyalar</p>
                        <p className="text-3xl font-extrabold text-gray-900 mt-1">{new Set(posts.map(p => p.tag)).size}</p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden">
                    {/* Tabs */}
                    <div className="flex bg-gray-50/50 p-2 border-b border-gray-100">
                        <button
                            onClick={() => setActiveTab('posts')}
                            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold transition-all ${activeTab === 'posts' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                            Blog Postlari
                        </button>
                        <button
                            onClick={() => setActiveTab('team')}
                            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold transition-all ${activeTab === 'team' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            Klinika Jamoasi
                        </button>
                    </div>

                    <div className="p-4 sm:p-8">
                        {activeTab === 'posts' ? (
                            <div className="space-y-8">
                                {/* Search and Filter */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="relative flex-1">
                                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        <input
                                            type="text"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            placeholder="Sarlavhadan qidirish..."
                                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-gray-400"
                                        />
                                    </div>
                                    <select
                                        value={sortOption}
                                        onChange={(e) => setSortOption(e.target.value)}
                                        className="sm:w-48 px-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none transition-all font-semibold text-gray-700"
                                    >
                                        <option value="newest">Yangi birinchi</option>
                                        <option value="oldest">Eski birinchi</option>
                                    </select>
                                </div>

                                {/* List */}
                                <div className="grid grid-cols-1 gap-4">
                                    {filteredPosts.length > 0 ? (
                                        filteredPosts.map((post) => (
                                            <div key={post.id} className="group bg-white p-4 rounded-2xl border border-gray-100 hover:border-teal-100 hover:shadow-lg hover:shadow-teal-50/50 transition-all flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                                                <div className="w-full sm:w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-gray-100 ring-1 ring-gray-100">
                                                    <img src={post.image || '/assets/logo.jpg'} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="px-2 py-0.5 bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-wider rounded-md">
                                                            {post.tag}
                                                        </span>
                                                        <span className="text-[11px] text-gray-400 font-medium">
                                                            {new Date(post.date).toLocaleDateString("uz-UZ")}
                                                        </span>
                                                    </div>
                                                    <h3 className="font-bold text-gray-900 text-lg leading-tight truncate">{post.title}</h3>
                                                    <p className="text-gray-500 text-sm mt-1 line-clamp-1">{post.excerpt}</p>
                                                </div>
                                                <div className="flex gap-2 w-full sm:w-auto">
                                                    <button
                                                        onClick={() => handleEditPost(post)}
                                                        className="flex-1 sm:flex-none px-4 py-2 text-sm font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
                                                    >
                                                        Tahrirlash
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeletePost(post.id)}
                                                        className="flex-1 sm:flex-none px-4 py-2 text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors"
                                                    >
                                                        O'chirish
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="py-20 text-center">
                                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                            </div>
                                            <p className="text-gray-500 font-bold">Hech narsa topilmadi</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {/* Add Card */}
                                <button
                                    onClick={handleNewMember}
                                    className="group h-full min-h-[320px] bg-gray-50/50 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center gap-4 text-gray-400 hover:text-teal-600 hover:border-teal-300 hover:bg-teal-50/30 transition-all duration-300"
                                >
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                    </div>
                                    <span className="font-extrabold tracking-tight">Xodim Qo'shish</span>
                                </button>

                                {teamMembers.map((member) => (
                                    <div key={member.id} className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col border-b-4 border-b-transparent hover:border-b-teal-500">
                                        <div className="relative h-60 overflow-hidden">
                                            <img src={member.image || '/assets/logo.jpg'} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                                                <button
                                                    onClick={() => handleEditMember(member.id)}
                                                    className="p-3 bg-white/90 backdrop-blur-md rounded-2xl text-blue-600 hover:bg-white shadow-xl hover:scale-110 transition-all"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteMember(member.id)}
                                                    className="p-3 bg-white/90 backdrop-blur-md rounded-2xl text-red-600 hover:bg-white shadow-xl hover:scale-110 transition-all"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-6 text-center bg-white relative z-10">
                                            <h3 className="font-black text-gray-900 text-lg decoration-teal-500 underline-offset-4">{member.name}</h3>
                                            <div className="mt-1 inline-flex px-3 py-1 bg-teal-50 text-teal-600 text-[11px] font-black uppercase tracking-widest rounded-full">
                                                {member.role}
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-center gap-2 text-[11px] font-bold text-gray-400">
                                                <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                                                TAJRIBA: {member.experience}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AdminDashboard
