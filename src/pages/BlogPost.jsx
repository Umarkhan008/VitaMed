import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import { blogPosts, getPostById } from './blogData.js'

const BlogPost = () => {
    const { postId } = useParams()
    const [post, setPost] = useState(null)
    const [relatedPosts, setRelatedPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const foundPost = getPostById(postId)
        const related = blogPosts.filter(p => p.id !== postId).slice(0, 3)
        
        setPost(foundPost)
        setRelatedPosts(related)
        setLoading(false)
    }, [postId])

    if (loading) {
        return (
            <>
                <Header />
                <main className="bg-white">
                    <section className="py-16 bg-gray-50">
                        <div className="max-w-4xl mx-auto px-4 text-center">
                            <div className="animate-pulse">
                                <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
                                <div className="h-12 bg-gray-300 rounded w-96 mx-auto"></div>
                            </div>
                        </div>
                    </section>
                    <section className="pb-10">
                        <div className="max-w-4xl mx-auto px-4">
                            <div className="w-full h-72 md:h-96 bg-gray-300 rounded-2xl animate-pulse"></div>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        )
    }

    if (!post) {
        return (
            <>
                <Header />
                <main className="max-w-3xl mx-auto px-4 py-24">
                    <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Maqola topilmadi</h1>
                    <p className="text-gray-600 mb-6">Sahifa o'chirilgan yoki mavjud emas.</p>
                    <Link to="/blog" className="inline-flex items-center gap-2 text-teal-600 font-semibold no-underline">Blogga qaytish</Link>
                </main>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Header />
            <main className="bg-white">
                {/* Hero */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 text-xs text-gray-600">
                            <span className="px-2 py-0.5 rounded-full bg-teal-100 text-teal-700 border border-teal-200 font-semibold">{post.tag}</span>
                            <span>•</span>
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                            <span>•</span>
                            <span className="font-medium">{post.author}</span>
                        </div>
                        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-gray-900">{post.title}</h1>
                    </div>
                </section>

                {/* Cover */}
                <section className="pb-10">
                    <div className="max-w-4xl mx-auto px-4">
                        <img src={post.image} alt={post.title} className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-sm" />
                    </div>
                </section>

                {/* Content */}
                <section className="pb-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <article className="prose prose-teal max-w-none">
                            {post.content.split('\n').map((line, idx) => (
                                <p key={idx}>{line}</p>
                            ))}
                        </article>
                    </div>
                </section>

                {/* Related */}
                <section className="pb-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-6">O'xshash maqolalar</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedPosts.map((r) => (
                                <Link key={r.id} to={`/blog/${r.id}`} className="group bg-white ring-1 ring-gray-200 rounded-2xl overflow-hidden no-underline hover:shadow-md transition">
                                    <div className="h-40 overflow-hidden">
                                        <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                    </div>
                                    <div className="p-4">
                                        <div className="text-xs text-gray-500">{new Date(r.date).toLocaleDateString()}</div>
                                        <div className="mt-1 font-bold text-gray-900 line-clamp-2 group-hover:text-teal-600">{r.title}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default BlogPost


