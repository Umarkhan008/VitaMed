import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'

const AdminLogin = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Simple password check (in real app, use proper authentication)
        if (password === 'admin123') {
            localStorage.setItem('adminAuth', 'true')
            navigate('/admin')
        } else {
            setError('Noto\'g\'ri parol')
        }
    }

    return (
        <>
            <Header />
            <main className="bg-gray-50 min-h-screen flex items-center justify-center py-12">
                <div className="max-w-md w-full mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Panel</h1>
                            <p className="text-gray-600">Blog postlarini boshqarish uchun kirish</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Parol
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                                    placeholder="Parolni kiriting"
                                    required
                                />
                            </div>

                            {error && (
                                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-teal-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
                            >
                                Kirish
                            </button>
                        </form>

                        <div className="mt-6 text-center text-sm text-gray-500">
                            <p>Demo parol: <code className="bg-gray-100 px-2 py-1 rounded">admin123</code></p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AdminLogin
