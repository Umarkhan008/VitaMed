import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostById, createPost, updatePost, clearCache } from '../api/blogAPI.js' // Updated import
import { isAuthenticated } from '../utils/auth.js'
import { supabase } from '../supabaseClient.js'
import { generateExcerpt, generateFullContent } from '../utils/ai.js'
import { Sparkles } from 'lucide-react'

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
    const [uploadingImage, setUploadingImage] = useState(false)
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')
    const [suggestingExcerpt, setSuggestingExcerpt] = useState(false)
    const [hasSuggestedExcerpt, setHasSuggestedExcerpt] = useState(false)
    const [suggestingContent, setSuggestingContent] = useState(false)
    const [hasSuggestedContent, setHasSuggestedContent] = useState(false)

    useEffect(() => {
        // Check authentication
        if (!isAuthenticated()) {
            navigate('/login') // Updated path
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
                showMessage('Post topilmadi', 'error')
            }
        } catch (error) {
            showMessage('Post yuklanmadi', 'error')
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

    const handleImageUpload = async (e) => {
        try {
            const file = e.target.files[0]
            if (!file) return

            setUploadingImage(true)
            const fileExt = file.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExt}`
            const filePath = `${fileName}`

            const { error: uploadError } = await supabase.storage
                .from('blog-images')
                .upload(filePath, file)

            if (uploadError) {
                throw uploadError
            }

            const { data } = supabase.storage
                .from('blog-images')
                .getPublicUrl(filePath)

            setFormData(prev => ({ ...prev, image: data.publicUrl }))
            showMessage('Rasm muvaffaqiyatli yuklandi!', 'success')
        } catch (error) {
            console.error('Error uploading image:', error)
            showMessage('Rasm yuklashda xatolik: ' + error.message, 'error')
        } finally {
            setUploadingImage(false)
        }
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
                    navigate('/dashboard') // Updated path
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
        navigate('/dashboard') // Updated path
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

    const handleSuggestExcerpt = async () => {
        if (!formData.title.trim()) {
            showMessage('Avval sarlavhani kiriting', 'error')
            return
        }

        setSuggestingExcerpt(true)
        try {
            const suggestion = await generateExcerpt(formData.title)
            setFormData(prev => ({ ...prev, excerpt: suggestion }))
            setHasSuggestedExcerpt(true)
            showMessage('AI yangi tavsif yaratdi!', 'success')
        } catch (error) {
            showMessage('AI tavsif yaratishda xatolik', 'error')
        } finally {
            setSuggestingExcerpt(false)
        }
    }

    const handleSuggestFullContent = async () => {
        if (!formData.title.trim()) {
            showMessage('Avval sarlavhani kiriting', 'error')
            return
        }

        setSuggestingContent(true)
        try {
            const suggestion = await generateFullContent(formData.title)
            setFormData(prev => ({ ...prev, content: suggestion }))
            setHasSuggestedContent(true)
            showMessage('AI yangi matn yaratdi!', 'success')
        } catch (error) {
            showMessage('AI matn yaratishda xatolik', 'error')
        } finally {
            setSuggestingContent(false)
        }
    }

    return (
        <main className="bg-[#f8fafc] min-h-screen py-8 sm:py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Card */}
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 sm:p-8 mb-8 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full blur-3xl -mr-16 -mt-16" />

                    <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleCancel}
                                className="p-2.5 bg-gray-50 text-gray-400 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            </button>
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                                    {isEditing ? 'Postni Tahrirlash' : 'Yangi Post'}
                                </h1>
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Blog Ma'lumotlari</p>
                            </div>
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                            {isEditing && (
                                <div className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[10px] font-black uppercase tracking-tighter">
                                    Mavjud Post
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {message && (
                    <div className={`mb-8 p-4 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top duration-300 font-bold text-sm ${messageType === 'error'
                        ? 'bg-red-50 text-red-700 border border-red-100'
                        : 'bg-green-50 text-green-700 border border-green-100'
                        }`}>
                        {messageType === 'error' ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                        ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        )}
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 sm:p-10 space-y-8">
                        {/* Title & Slug Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                                    Sarlavha *
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleTitleChange}
                                    className={`w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:bg-white focus:border-teal-500/30 outline-none transition-all font-bold placeholder:text-gray-300 ${errors.title ? 'border-red-500/50' : 'border-gray-50'
                                        }`}
                                    placeholder="Post sarlavhasi"
                                />
                                {errors.title && <p className="text-red-500 text-[11px] font-bold ml-1">{errors.title}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                                    ID (Slug) *
                                </label>
                                <input
                                    type="text"
                                    name="id"
                                    value={formData.id}
                                    onChange={handleChange}
                                    className={`w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:bg-white focus:border-teal-500/30 outline-none transition-all font-mono text-sm font-bold placeholder:text-gray-300 ${errors.id ? 'border-red-500/50' : 'border-gray-50'
                                        }`}
                                    placeholder="post-slug-unikal"
                                />
                                {errors.id && <p className="text-red-500 text-[11px] font-bold ml-1">{errors.id}</p>}
                            </div>
                        </div>

                        {/* Excerpt Row */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between ml-1">
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest">
                                    Qisqa Tavsif *
                                </label>
                                <button
                                    type="button"
                                    onClick={handleSuggestExcerpt}
                                    disabled={suggestingExcerpt}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-50 text-teal-600 rounded-xl hover:bg-teal-100 transition-all border border-teal-100/50 disabled:opacity-50 group shadow-sm"
                                >
                                    {suggestingExcerpt ? (
                                        <div className="w-3.5 h-3.5 border-2 border-teal-600/30 border-t-teal-600 rounded-full animate-spin"></div>
                                    ) : (
                                        <Sparkles className="w-3.5 h-3.5 group-hover:animate-pulse" />
                                    )}
                                    <span className="text-[10px] font-black uppercase tracking-wider">
                                        {hasSuggestedExcerpt ? 'Boshqa variant' : 'AI Suggest'}
                                    </span>
                                </button>
                            </div>
                            <textarea
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleChange}
                                rows={3}
                                className={`w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:bg-white focus:border-teal-500/30 outline-none transition-all font-medium leading-relaxed placeholder:text-gray-300 ${errors.excerpt ? 'border-red-500/50' : 'border-gray-50'
                                    }`}
                                placeholder="Post haqida qisqa ma'lumot (o'quvchilarni qiziqtirish uchun)..."
                            />
                            {errors.excerpt && <p className="text-red-500 text-[11px] font-bold ml-1">{errors.excerpt}</p>}
                        </div>

                        {/* Author & Tag Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                                    Muallif *
                                </label>
                                <input
                                    type="text"
                                    name="author"
                                    value={formData.author}
                                    onChange={handleChange}
                                    className={`w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:bg-white focus:border-teal-500/30 outline-none transition-all font-bold placeholder:text-gray-300 ${errors.author ? 'border-red-500/50' : 'border-gray-50'
                                        }`}
                                    placeholder="Masalan: Dr. Ismoilov"
                                />
                                {errors.author && <p className="text-red-500 text-[11px] font-bold ml-1">{errors.author}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                                    Kategoriya
                                </label>
                                <div className="relative">
                                    <select
                                        name="tag"
                                        value={formData.tag}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-50 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:bg-white focus:border-teal-500/30 outline-none transition-all font-bold appearance-none text-gray-700"
                                    >
                                        <option value="Maslahat">Salomatlik Maslahatlari</option>
                                        <option value="Profilaktika">Profilaktika</option>
                                        <option value="LOR">LOR Kasalliklari</option>
                                        <option value="Yangilik">Klinika Yangiliklari</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Date & Image Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                                    Sana
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-50 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:bg-white focus:border-teal-500/30 outline-none transition-all font-bold text-gray-700"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                                    Rasm *
                                </label>
                                <div className="space-y-4">
                                    {formData.image && (
                                        <div className="relative w-full aspect-video bg-gray-100 rounded-[1.5rem] overflow-hidden border-2 border-gray-50 group">
                                            <img
                                                src={formData.image}
                                                alt="Preview"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                                                    className="bg-red-500 text-white p-3 rounded-2xl hover:bg-red-600 transition-all shadow-xl hover:scale-110"
                                                >
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {!formData.image && (
                                        <label className="flex flex-col items-center justify-center w-full aspect-video border-2 border-gray-200 border-dashed rounded-[1.5rem] cursor-pointer bg-gray-50 hover:bg-teal-50 hover:border-teal-200 transition-all duration-300 overflow-hidden">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                                                {uploadingImage ? (
                                                    <div className="flex flex-col items-center gap-3">
                                                        <div className="animate-spin rounded-full h-10 w-10 border-4 border-teal-500 border-t-transparent shadow-sm"></div>
                                                        <p className="text-xs font-black text-teal-600 uppercase tracking-widest">Yuklanmoqda...</p>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 text-teal-500">
                                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                        </div>
                                                        <p className="mb-1 text-sm text-gray-600 font-bold">Rasm yuklash uchun bosing</p>
                                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">PNG, JPG yoki WebP (Max 2MB)</p>
                                                    </>
                                                )}
                                            </div>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                disabled={uploadingImage}
                                            />
                                        </label>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between ml-1">
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest">
                                    To'liq Matn *
                                </label>
                                <button
                                    type="button"
                                    onClick={handleSuggestFullContent}
                                    disabled={suggestingContent}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-50 text-teal-600 rounded-xl hover:bg-teal-100 transition-all border border-teal-100/50 disabled:opacity-50 group shadow-sm"
                                >
                                    {suggestingContent ? (
                                        <div className="w-3.5 h-3.5 border-2 border-teal-600/30 border-t-teal-600 rounded-full animate-spin"></div>
                                    ) : (
                                        <Sparkles className="w-3.5 h-3.5 group-hover:animate-pulse" />
                                    )}
                                    <span className="text-[10px] font-black uppercase tracking-wider">
                                        {hasSuggestedContent ? 'Boshqa variant' : 'AI Suggest'}
                                    </span>
                                </button>
                            </div>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                rows={12}
                                className={`w-full px-5 py-4 bg-gray-50 border-2 rounded-[2rem] focus:ring-4 focus:ring-teal-500/10 focus:bg-white focus:border-teal-500/30 outline-none transition-all font-medium leading-[1.8] placeholder:text-gray-300 ${errors.content ? 'border-red-500/50' : 'border-gray-50'
                                    }`}
                                placeholder="Postning to'liq matnini shu yerga yozing..."
                            />
                            <div className="flex justify-between items-center px-1">
                                {errors.content ? (
                                    <p className="text-red-500 text-[11px] font-bold">{errors.content}</p>
                                ) : (
                                    <p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-widest">
                                        💡 Paragraflarni ajratish uchun "Enter" tugmasini ikki marta bosing
                                    </p>
                                )}
                                <span className="text-[10px] font-black text-gray-300">{formData.content.length} ta belgi</span>
                            </div>
                        </div>
                    </div>

                    {/* Actions Card */}
                    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col sm:flex-row gap-4 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-teal-50/20 to-transparent" />

                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-teal-100 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
                        >
                            {loading ? (
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    SAQLANMOQDA...
                                </div>
                            ) : (isEditing ? 'O\'zgarishlarni Saqlash' : 'Postni E\'lon Qilish')}
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            disabled={loading}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-black transition-all active:scale-[0.98] disabled:opacity-50 uppercase tracking-widest text-sm"
                        >
                            Bekor Qilish
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default PostForm


