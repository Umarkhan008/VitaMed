import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getTeamMemberById, createTeamMember, updateTeamMember } from '../api/teamAPI.js' // Updated import
import { isAuthenticated } from '../utils/auth.js'
import { supabase } from '../supabaseClient.js'

const TeamForm = () => {
    const { memberId } = useParams()
    const navigate = useNavigate()
    const isEditing = !!memberId

    const [formData, setFormData] = useState({
        name: '',
        role: 'LOR SHIFOKOR',
        experience: '',
        image: '/assets/logo.jpg',
        facebook: '',
        instagram: '',
        telegram: ''
    })

    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [uploadingImage, setUploadingImage] = useState(false)
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState('')

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login') // Updated path
            return
        }

        if (isEditing) {
            loadMemberData()
        }
    }, [memberId, navigate, isEditing])

    const loadMemberData = async () => {
        setLoading(true)
        try {
            const member = await getTeamMemberById(memberId)
            if (member) {
                setFormData(member)
            } else {
                showMessage('Xodim topilmadi', 'error')
            }
        } catch (error) {
            showMessage('Ma\'lumotlarni yuklashda xatolik', 'error')
        } finally {
            setLoading(false)
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
            const filePath = `team/${fileName}`

            const { error: uploadError } = await supabase.storage
                .from('blog-images') // Reusing the same bucket for simplicity, or create a new one
                .upload(filePath, file)

            if (uploadError) throw uploadError

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
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
    }

    const validateForm = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Ism kiritilishi shart'
        if (!formData.role.trim()) newErrors.role = 'Lavozim kiritilishi shart'
        if (!formData.experience.trim()) newErrors.experience = 'Tajriba kiritilishi shart'

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
                result = await updateTeamMember(memberId, formData)
            } else {
                result = await createTeamMember(formData)
            }

            if (result.success) {
                showMessage(isEditing ? 'Ma\'lumotlar yangilandi!' : 'Yangi xodim qo\'shildi!')
                setTimeout(() => navigate('/dashboard'), 2000) // Updated path
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

    return (
        <main className="bg-[#f8fafc] min-h-screen py-8 sm:py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
                                    {isEditing ? 'Xodimni Tahrirlash' : 'Yangi Xodim'}
                                </h1>
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Jamoa Boshqaruvi</p>
                            </div>
                        </div>
                    </div>
                </div>

                {message && (
                    <div className={`mb-8 p-4 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top duration-300 font-bold text-sm ${messageType === 'error' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-green-50 text-green-700 border border-green-100'}`}>
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
                        {/* Basic Info Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">To'liq ism *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:bg-white focus:border-teal-500/30 outline-none transition-all font-bold placeholder:text-gray-300 ${errors.name ? 'border-red-500/50' : 'border-gray-50'}`}
                                    placeholder="Ism va familiya"
                                />
                                {errors.name && <p className="text-red-500 text-[11px] font-bold ml-1">{errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Lavozim *</label>
                                <input
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className={`w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:bg-white focus:border-teal-500/30 outline-none transition-all font-bold placeholder:text-gray-300 ${errors.role ? 'border-red-500/50' : 'border-gray-50'}`}
                                    placeholder="Masalan: LOR SHIFOKOR"
                                />
                                {errors.role && <p className="text-red-500 text-[11px] font-bold ml-1">{errors.role}</p>}
                            </div>
                        </div>

                        {/* Experience & Image Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Tajriba *</label>
                                <input
                                    type="text"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className={`w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:bg-white focus:border-teal-500/30 outline-none transition-all font-bold placeholder:text-gray-300 ${errors.experience ? 'border-red-500/50' : 'border-gray-50'}`}
                                    placeholder="Masalan: 10 yil"
                                />
                                {errors.experience && <p className="text-red-500 text-[11px] font-bold ml-1">{errors.experience}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Rasm</label>
                                <div className="flex items-center gap-5 p-3 bg-gray-50 rounded-2xl border-2 border-gray-50">
                                    <div className="relative group overflow-hidden">
                                        {formData.image ? (
                                            <img src={formData.image} alt="Preview" className="w-16 h-16 rounded-xl object-cover ring-2 ring-white shadow-sm transition-transform group-hover:scale-110" />
                                        ) : (
                                            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-gray-300">
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <label className="inline-block px-4 py-2 bg-white text-teal-600 border border-teal-100 rounded-xl text-xs font-black uppercase tracking-widest cursor-pointer hover:bg-teal-50 transition-colors shadow-sm active:scale-95">
                                            {uploadingImage ? 'Yuklanmoqda...' : 'Rasm Tanlash'}
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                disabled={uploadingImage}
                                            />
                                        </label>
                                        <p className="text-[10px] text-gray-400 font-bold mt-2 uppercase tracking-tight">Kvadrat rasm tavsiya etiladi</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Section */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-black text-gray-300 uppercase tracking-[0.2em] flex items-center gap-3">
                                <span>Ijtimoiy Tarmoqlar</span>
                                <div className="h-px bg-gray-100 flex-1"></div>
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                        Facebook
                                    </label>
                                    <input type="text" name="facebook" value={formData.facebook} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-50 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:bg-white outline-none transition-all font-semibold text-sm" placeholder="Profil linki" />
                                </div>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                        <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                        Instagram
                                    </label>
                                    <input type="text" name="instagram" value={formData.instagram} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-50 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:bg-white outline-none transition-all font-semibold text-sm" placeholder="Profil linki" />
                                </div>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                                        <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.665 3.717c.18-.847-.53-1.498-1.258-1.139L3.483 11.2C2.65 11.58 2.67 12.607 3.513 12.96l4.28 1.797 9.873-6.126c.465-.28.892-.047.541.26l-7.994 7.11 3.582 2.757c.66.52 1.57.26 1.748-.567l3.122-14.47z" /></svg>
                                        Telegram
                                    </label>
                                    <input type="text" name="telegram" value={formData.telegram} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-50 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:bg-white outline-none transition-all font-semibold text-sm" placeholder="Profil linki" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions Card */}
                    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col sm:flex-row gap-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-teal-100 transition-all active:scale-[0.98] disabled:opacity-50 uppercase tracking-widest text-sm"
                        >
                            {loading ? (
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    SAQLANMOQDA...
                                </div>
                            ) : (isEditing ? 'O\'zgarishlarni Saqlash' : 'Xodimni Qo\'shish')}
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
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

export default TeamForm


