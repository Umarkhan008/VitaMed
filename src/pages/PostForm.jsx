import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import { getPostById, createPost, updatePost, clearCache } from './blogAPI.js'

const PostForm = () => {
    const { postId } = useParams()
    const navigate = useNavigate()
    const isEditing = !!postId
    
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        excerpt: '',
        content: '',
        author: '',
        tag: 'Maslahat',
        image: '/assets/logo.jpg',
        date: new Date().toISOString().split('T')[0]
    })
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')

    useEffect(() => {
        // Check authentication
        if (!localStorage.getItem('adminAuth')) {
            navigate('/admin/login')
            return
        }

        // Load post data if editing
        if (isEditing) {
            loadPostData()
        }
    }, [postId, navigate, isEditing])

    const loadPostData = async () => {
        try {
            const post = await getPostById(postId)
            if (post) {
                setFormData({
                    id: post.id,
                    title: post.title,
                    excerpt: post.excerpt,
                    content: post.content,
                    author: post.author,
                    tag: post.tag,
                    image: post.image,
                    date: post.date
                })
            } else {
                setMessage('Post topilmadi', 'error')
            }
        } catch (error) {
            setMessage('Post yuklanmadi', 'error')
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

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validateForm = () => {
        const newErrors = {}
        
        if (!formData.title.trim()) newErrors.title = 'Sarlavha kiritilishi shart'
        if (!formData.excerpt.trim()) newErrors.excerpt = 'Qisqa tavsif kiritilishi shart'
        if (!formData.content.trim()) newErrors.content = 'Matn kiritilishi shart'
        if (!formData.author.trim()) newErrors.author = 'Muallif kiritilishi shart'
        if (!formData.id.trim()) newErrors.id = 'ID kiritilishi shart'
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!validateForm()) return
        
        setLoading(true)
        
        try {
            let result
            if (isEditing) {
                result = await updatePost(postId, formData)
            } else {
                result = await createPost(formData)
            }
            
            if (result.success) {
                showMessage(
                    isEditing ? 'Post muvaffaqiyatli yangilandi!' : 'Post muvaffaqiyatli yaratildi!'
                )
                clearCache()
                setTimeout(() => {
                    navigate('/admin')
                }, 2000)
            } else {
                showMessage(result.error, 'error')
            }
        } catch (error) {
            showMessage('Xatolik yuz berdi', 'error')
        } finally {
            setLoading(false)
        }
    }

    const handleCancel = () => {
        navigate('/admin')
    }

    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim('-')
    }

    const handleTitleChange = (e) => {
        const title = e.target.value
        setFormData(prev => ({
            ...prev,
            title,
            id: !isEditing ? generateSlug(title) : prev.id
        }))
    }

    return (
        <>
            <Header />
            <main className="bg-gray-50 min-h-screen py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="text-2xl font-bold text-gray-900">
                                {isEditing ? 'Postni Tahrirlash' : 'Yangi Post Yaratish'}
                            </h1>
                            <button
                                onClick={handleCancel}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
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

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Sarlavha *
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleTitleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none ${
                                            errors.title ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Post sarlavhasi"
                                    />
                                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        ID (Slug) *
                                    </label>
                                    <input
                                        type="text"
                                        name="id"
                                        value={formData.id}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none ${
                                            errors.id ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="post-slug"
                                    />
                                    {errors.id && <p className="text-red-500 text-sm mt-1">{errors.id}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Qisqa Tavsif *
                                </label>
                                <textarea
                                    name="excerpt"
                                    value={formData.excerpt}
                                    onChange={handleChange}
                                    rows={3}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none ${
                                        errors.excerpt ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Post haqida qisqa ma'lumot"
                                />
                                {errors.excerpt && <p className="text-red-500 text-sm mt-1">{errors.excerpt}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Muallif *
                                    </label>
                                    <input
                                        type="text"
                                        name="author"
                                        value={formData.author}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none ${
                                            errors.author ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Muallif ismi"
                                    />
                                    {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Kategoriya
                                    </label>
                                    <select
                                        name="tag"
                                        value={formData.tag}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                                    >
                                        <option value="Maslahat">Maslahat</option>
                                        <option value="Profilaktika">Profilaktika</option>
                                        <option value="LOR">LOR</option>
                                        <option value="Yangilik">Yangilik</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Sana
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Rasm URL
                                    </label>
                                    <input
                                        type="text"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                                        placeholder="/assets/rasm.jpg"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    To'liq Matn *
                                </label>
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    rows={10}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none ${
                                        errors.content ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Postning to'liq matni..."
                                />
                                {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
                                <p className="text-sm text-gray-500 mt-2">
                                    Matnni paragraflarga bo'lish uchun bo'sh qator qoldiring
                                </p>
                            </div>

                            <div className="flex gap-4 pt-6">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Saqlanmoqda...' : (isEditing ? 'Saqlash' : 'Yaratish')}
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    disabled={loading}
                                    className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors disabled:opacity-50"
                                >
                                    Bekor qilish
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default PostForm
