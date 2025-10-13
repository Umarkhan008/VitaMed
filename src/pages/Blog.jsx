import React, { useState, useEffect } from 'react'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import { Link } from 'react-router-dom'
import { fetchBlogPosts } from './blogAPI.js'

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const fetchedPosts = await fetchBlogPosts()
                setPosts(fetchedPosts)
            } catch (error) {
                console.error('Error loading posts:', error)
            } finally {
                setLoading(false)
            }
        }
        loadPosts()
    }, [])

    if (loading) {
        return (
            <>
                <Header />
                <main className="bg-white">
                    <section className="py-20 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 text-center">
                            <div className="animate-pulse">
                                <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
                                <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
                            </div>
                        </div>
                    </section>
                    <section className="py-14">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[1,2,3].map(i => (
                                    <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200">
                                        <div className="h-56 bg-gray-300 animate-pulse"></div>
                                        <div className="p-6 space-y-3">
                                            <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
                                            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                                            <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Header />
            <main className="bg-white">
                {/* Hero banner */}
                <section className="relative w-full py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-700 border border-teal-200">Bizning blog</span>
                        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-gray-900">Yangiliklar va foydali maqolalar</h1>
                        <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">LOR bo'yicha so'nggi trendlar, maslahatlar va klinika yangiliklari.</p>
                    </div>
                </section>

                {/* Filters + Posts */}
                <section className="py-14">
                    <div className="max-w-7xl mx-auto px-4">
                        {/* Category pills */}
                        <div className="flex flex-wrap items-center gap-3 justify-center mb-10">
                            {['Barchasi','Profilaktika','LOR','Maslahat'].map((c, idx) => (
                                <button key={c} className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${idx===0 ? 'bg-teal-500 text-white border-teal-500' : 'bg-white text-gray-700 border-gray-200 hover:border-teal-300 hover:text-teal-700'}`}>{c}</button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <article key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                    <div className="relative h-56 overflow-hidden">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-semibold text-gray-800 shadow-sm">
                                            {post.tag}
                                        </div>
                                        <div className="absolute bottom-3 left-3 bg-teal-500 text-white px-2 py-1 rounded text-xs font-semibold shadow">{new Date(post.date).toLocaleDateString()}</div>
                                    </div>
                                    <div className="p-6 flex flex-col gap-3">
                                        <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-teal-600 transition-colors line-clamp-2">{post.title}</h3>
                                        <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                                        <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                                            <span className="font-medium">{post.author}</span>
                                            <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm no-underline hover:text-teal-700">
                                                O'qish
                                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Blog


