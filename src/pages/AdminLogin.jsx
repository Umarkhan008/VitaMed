import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import { authenticateUser, isAuthenticated, isAccountLocked, getRemainingLockoutTime } from '../utils/auth.js'

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [lockoutTime, setLockoutTime] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        // Redirect if already authenticated
        if (isAuthenticated()) {
            navigate('/admin')
            return
        }

        // Check if account is locked
        if (isAccountLocked()) {
            const remaining = getRemainingLockoutTime()
            setLockoutTime(remaining)
            setError(`Hisob ${remaining} daqiqa davomida bloklangan`)
            
            // Update countdown every minute
            const interval = setInterval(() => {
                const newRemaining = getRemainingLockoutTime()
                if (newRemaining <= 0) {
                    setLockoutTime(0)
                    setError('')
                    clearInterval(interval)
                } else {
                    setLockoutTime(newRemaining)
                    setError(`Hisob ${newRemaining} daqiqa davomida bloklangan`)
                }
            }, 60000)

            return () => clearInterval(interval)
        }

        // Load remembered username
        const rememberedUsername = localStorage.getItem('rememberedUsername')
        if (rememberedUsername) {
            setFormData(prev => ({ ...prev, username: rememberedUsername }))
            setRememberMe(true)
        }
    }, [navigate])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        
        // Clear error when user starts typing
        if (error) setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (lockoutTime > 0) {
            setError(`Hisob hali ham bloklangan. ${lockoutTime} daqiqa kuting.`)
            return
        }

        setLoading(true)
        setError('')

        try {
            const result = await authenticateUser(formData.username, formData.password)
            
            if (result.success) {
                // Handle remember me
                if (rememberMe) {
                    localStorage.setItem('rememberedUsername', formData.username)
                } else {
                    localStorage.removeItem('rememberedUsername')
                }
                
                navigate('/admin')
            } else {
                setError(result.error)
                
                if (result.locked) {
                    const remaining = getRemainingLockoutTime()
                    setLockoutTime(remaining)
                }
            }
        } catch (error) {
            setError('Tizimda xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Header />
            <main className="bg-gradient-to-br from-teal-50 to-blue-50 min-h-screen flex items-center justify-center py-12">
                <div className="max-w-md w-full mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
                            <p className="text-gray-600">VitaMed blog boshqaruv tizimi</p>
                        </div>

                        {/* Lockout Warning */}
                        {lockoutTime > 0 && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <p className="text-red-800 font-medium">Hisob bloklangan</p>
                                        <p className="text-red-600 text-sm">Yana {lockoutTime} daqiqa kuting</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Username Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Username
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
                                        placeholder="Username kiriting"
                                        required
                                        disabled={loading || lockoutTime > 0}
                                    />
                                    <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Parol
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 pl-10 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
                                        placeholder="Parolni kiriting"
                                        required
                                        disabled={loading || lockoutTime > 0}
                                    />
                                    <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        disabled={loading || lockoutTime > 0}
                                    >
                                        {showPassword ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                    disabled={loading || lockoutTime > 0}
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                    Username ni eslab qolish
                                </label>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-red-700 text-sm">{error}</span>
                                    </div>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading || lockoutTime > 0}
                                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                                    loading || lockoutTime > 0
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-teal-500 text-white hover:bg-teal-600 hover:shadow-lg transform hover:scale-[1.02]'
                                }`}
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Tekshirilmoqda...
                                    </div>
                                ) : lockoutTime > 0 ? (
                                    `Bloklangan (${lockoutTime} daqiqa)`
                                ) : (
                                    'Kirish'
                                )}
                            </button>
                        </form>

                        {/* Demo Credentials */}
                        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <p className="text-sm text-gray-600 text-center mb-2">
                                <strong>Demo ma'lumotlar:</strong>
                            </p>
                            <div className="text-center space-y-1">
                                <p className="text-sm">
                                    Username: <code className="bg-white px-2 py-1 rounded border text-teal-600 font-mono">admin</code>
                                </p>
                                <p className="text-sm">
                                    Parol: <code className="bg-white px-2 py-1 rounded border text-teal-600 font-mono">VitaMed@2024!</code>
                                </p>
                            </div>
                        </div>

                        {/* Security Info */}
                        <div className="mt-6 text-center">
                            <p className="text-xs text-gray-500">
                                🔒 5 marta noto'g'ri urinishdan keyin hisob 15 daqiqa bloklanadi
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AdminLogin
