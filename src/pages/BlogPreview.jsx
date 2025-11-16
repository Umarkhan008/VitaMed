import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from './blogData.js'

const BlogPreview = () => {
    const [posts] = useState(blogPosts.slice(0, 3)) // Only show first 3 posts
    const [loading] = useState(false)

    if (loading) {
        return (
            <section className="py-20 bg-gray-50" id="blog">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
                            <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1,2,3].map(i => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200">
                                <div className="h-48 bg-gray-300 animate-pulse"></div>
                                <div className="p-5 space-y-3">
                                    <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
                                    <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                                    <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-20 bg-gray-50" id="blog">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-700 border border-teal-200">Yangiliklar</span>
                    <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-gray-900">So'nggi blog maqolalar</h2>
                    <p className="mt-3 text-gray-600">ENT bo'yicha maslahatlar, profilaktika va yangiliklar.</p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                            <div className="relative h-48 overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-semibold text-gray-800 shadow-sm">
                                    {new Date(post.date).toLocaleDateString()}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-teal-600 transition-colors line-clamp-2">{post.title}</h3>
                                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                                <Link to={`/blog/${post.id}`} className="mt-4 inline-flex items-center gap-2 text-teal-600 font-semibold text-sm no-underline hover:text-teal-700">
                                    Batafsil
                                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <a href="/blog" className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold no-underline hover:bg-teal-600 transition-colors">
                        Ko'proq ko'rish
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default BlogPreview


