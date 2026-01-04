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
        <main className="bg-gray-50 min-h-screen py-12">
            <div className="w-full mx-auto px-4 md:px-8 lg:px-12">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">
                            {isEditing ? 'Xodimni Tahrirlash' : 'Yangi Xodim Qo\'shish'}
                        </h1>
                        <button onClick={handleCancel} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {message && (
                        <div className={`mb-6 p-4 rounded-lg ${messageType === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">To'liq ism *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Ism va familiya"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Lavozim *</label>
                                <input
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none ${errors.role ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Masalan: LOR SHIFOKOR"
                                />
                                {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Tajriba *</label>
                                <input
                                    type="text"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none ${errors.experience ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Masalan: 10 yil"
                                />
                                {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Rasm</label>
                                <div className="flex items-center gap-4">
                                    {formData.image && (
                                        <img src={formData.image} alt="Preview" className="w-16 h-16 rounded-full object-cover border" />
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        disabled={uploadingImage}
                                        className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
                                <input type="text" name="facebook" value={formData.facebook} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focust:ring-2" placeholder="Link" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
                                <input type="text" name="instagram" value={formData.instagram} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Link" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Telegram</label>
                                <input type="text" name="telegram" value={formData.telegram} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Link" />
                            </div>
                        </div>

                        <div className="flex gap-4 pt-6">
                            <button type="submit" disabled={loading} className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 disabled:opacity-50">
                                {loading ? 'Saqlanmoqda...' : (isEditing ? 'Saqlash' : 'Qo\'shish')}
                            </button>
                            <button type="button" onClick={handleCancel} className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600">Bekor qilish</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default TeamForm


