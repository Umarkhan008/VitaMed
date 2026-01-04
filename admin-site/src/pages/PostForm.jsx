import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostById, createPost, updatePost, clearCache } from '../api/blogAPI.js' // Updated import
import { isAuthenticated } from '../utils/auth.js'
import { supabase } from '../supabaseClient.js'

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

    return (
        <main className="bg-gray-50 min-h-screen py-12">
            <div className="w-full mx-auto px-4 md:px-8 lg:px-12">
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
                        <div className={`mb-6 p-4 rounded-lg ${messageType === 'error'
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
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none ${errors.title ? 'border-red-500' : 'border-gray-300'
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
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none ${errors.id ? 'border-red-500' : 'border-gray-300'
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
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none ${errors.excerpt ? 'border-red-500' : 'border-gray-300'
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
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none ${errors.author ? 'border-red-500' : 'border-gray-300'
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
                                    Rasm *
                                </label>
                                <div className="space-y-3">
                                    {formData.image && (
                                        <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                                            <img
                                                src={formData.image}
                                                alt="Preview"
                                                className="w-full h-full object-cover"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                                                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors shadow-sm"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                {uploadingImage ? (
                                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
                                                ) : (
                                                    <>
                                                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                        </svg>
                                                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Rasm yuklash uchun bosing</span></p>
                                                        <p className="text-xs text-gray-500">SVG, PNG, JPG (MAX. 2MB)</p>
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
                                    </div>
                                </div>
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
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none ${errors.content ? 'border-red-500' : 'border-gray-300'
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
    )
}

export default PostForm


