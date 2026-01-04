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
        <main className="bg-gradient-to-br from-teal-50 via-white to-blue-50 min-h-screen py-12">
            <div className="w-full min-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
                {/* User Info & Header */}
                <div className="mb-10 grid gap-6 lg:grid-cols-[2fr,1fr]">
                    <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl text-white p-8 shadow-xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="uppercase text-xs tracking-[0.3em] text-white/70 mb-3">Boshqaruv Paneli</p>
                                <h1 className="text-3xl font-bold">VitaMed Ma'muriyati</h1>
                                <p className="text-white/80 mt-3 max-w-xl">
                                    Xush kelibsiz! Bu yerda siz sayt tarkibini, jumladan blog postlari va jamoa a'zolarini boshqarishingiz mumkin.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <button onClick={handleNewPost} className="bg-white/15 backdrop-blur px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/25 transition">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                Yangi Post
                            </button>
                            <button onClick={handleNewMember} className="bg-white text-teal-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-sm hover:shadow-md transition">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                                Yangi Xodim
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg border border-white/60 p-6 flex flex-col justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Admin: <span className="font-semibold text-gray-900">{currentUser?.username}</span></p>
                            <p className={"text-3xl font-semibold mt-2 " + (sessionTime <= 10 ? 'text-red-500' : 'text-teal-600')}>
                                {sessionTime} daqiqa
                            </p>
                            <p className="text-xs text-gray-400">Sessiya yakunlanishiga</p>
                        </div>
                        <button onClick={handleLogout} className="w-full mt-6 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">Chiqish</button>
                    </div>
                </div>

                {message && (
                    <div className={`mb-6 p-4 rounded-lg ${messageType === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                        {message}
                    </div>
                )}

                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-8">
                    <button
                        onClick={() => setActiveTab('posts')}
                        className={`px-6 py-3 font-semibold transition-colors ${activeTab === 'posts' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Blog Postlari ({posts.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('team')}
                        className={`px-6 py-3 font-semibold transition-colors ${activeTab === 'team' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Jamoa ({teamMembers.length})
                    </button>
                </div>

                {activeTab === 'posts' ? (
                    <>
                        {/* Stats & Filters for Posts */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="bg-white rounded-2xl p-6 border shadow-sm">
                                <p className="text-sm text-gray-500">Jami postlar</p>
                                <p className="text-4xl font-bold text-teal-600 mt-2">{posts.length}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border shadow-sm">
                                <p className="text-sm text-gray-500">Ushbu oy</p>
                                <p className="text-4xl font-bold text-blue-600 mt-2">{postsThisMonth.length}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border shadow-sm">
                                <p className="text-sm text-gray-500">Kategoriyalar</p>
                                <p className="text-4xl font-bold text-purple-600 mt-2">{new Set(posts.map(p => p.tag)).size}</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border p-6 mb-10">
                            <div className="flex flex-col gap-4 md:flex-row md:items-end">
                                <div className="flex-1">
                                    <label className="text-sm font-medium text-gray-700">Qidiruv</label>
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Sarlavhadan qidirish..."
                                        className="w-full mt-1 border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-teal-500 outline-none"
                                    />
                                </div>
                                <div className="w-full md:w-48">
                                    <label className="text-sm font-medium text-gray-700">Saralash</label>
                                    <select
                                        value={sortOption}
                                        onChange={(e) => setSortOption(e.target.value)}
                                        className="w-full mt-1 border border-gray-200 rounded-xl py-3 px-3 focus:ring-2 focus:ring-teal-500"
                                    >
                                        <option value="newest">Eng so'nggi</option>
                                        <option value="oldest">Eng eski</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
                            <div className="divide-y divide-gray-100">
                                {filteredPosts.map((post) => (
                                    <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors flex gap-6 items-center">
                                        <img src={post.image || '/assets/logo.jpg'} alt={post.title} className="w-20 h-20 rounded-lg object-cover" />
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-900">{post.title}</h3>
                                            <p className="text-sm text-gray-500 mt-1 line-clamp-1">{post.excerpt}</p>
                                            <div className="flex gap-4 mt-2 text-xs text-gray-400">
                                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                                <span>{post.tag}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => handleEditPost(post)} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition">Tahrirlash</button>
                                            <button onClick={() => handleDeletePost(post.id)} className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition">O'chirish</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {/* Add New Member Card */}
                            <button
                                onClick={handleNewMember}
                                className="h-full min-h-[300px] border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center gap-4 text-gray-400 hover:text-teal-500 hover:border-teal-500 transition-all bg-white/50"
                            >
                                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                </div>
                                <span className="font-bold">Yangi xodim qo'shish</span>
                            </button>

                            {teamMembers.map((member) => (
                                <div key={member.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                                    <div className="relative h-48">
                                        <img src={member.image || '/assets/logo.jpg'} alt={member.name} className="w-full h-full object-cover" />
                                        <div className="absolute top-2 right-2 flex gap-2">
                                            <button onClick={() => handleEditMember(member.id)} className="p-2 bg-white/80 backdrop-blur rounded-full text-blue-600 hover:bg-white shadow">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                            </button>
                                            <button onClick={() => handleDeleteMember(member.id)} className="p-2 bg-white/80 backdrop-blur rounded-full text-red-600 hover:bg-white shadow">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                                        <p className="text-teal-600 font-medium text-sm">{member.role}</p>
                                        <p className="text-gray-400 text-xs mt-1">Tajriba: {member.experience}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </main>
    )
}

export default AdminDashboard
