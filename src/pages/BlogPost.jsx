import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import PageHeader from '../PageHeader.jsx'
import Footer from '../Footer.jsx'
import { getPostById, fetchBlogPosts } from './blogAPI.js'

const BlogPost = () => {
    const { postId } = useParams()
    const [post, setPost] = useState(null)
    const [relatedPosts, setRelatedPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [isContentExpanded, setIsContentExpanded] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            setLoading(true)
            const foundPost = await getPostById(postId)

            if (foundPost) {
                // Fetch related posts (exclude current one)
                const allPosts = await fetchBlogPosts()
                const related = allPosts.filter(p => p.id !== postId).slice(0, 3)
                setPost(foundPost)
                setRelatedPosts(related)
            }
            setLoading(false)
        }
        loadData()
    }, [postId])

    if (loading) {
        return (
            <>
                <PageHeader />
                <main className="bg-white min-h-screen py-20">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div className="animate-pulse space-y-4">
                            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto"></div>
                            <div className="h-64 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        )
    }

    if (!post) {
        return (
            <>
                <PageHeader />
                <main className="max-w-3xl mx-auto px-4 py-24 text-center min-h-[50vh]">
                    <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Maqola topilmadi</h1>
                    <p className="text-gray-600 mb-6">Sahifa o'chirilgan yoki mavjud emas ({postId}).</p>
                    <Link to="/blog" className="inline-flex items-center gap-2 text-teal-600 font-semibold no-underline hover:text-teal-700 transition">
                        Blogga qaytish
                    </Link>
                </main>
                <Footer />
            </>
        )
    }

    // Check if content is long (more than 100 words)
    const contentWordCount = post.content ? post.content.trim().split(/\s+/).length : 0
    const isLongContent = contentWordCount > 100

    return (
        <>
            <PageHeader />
            <main className="bg-white">
                {/* Header Section */}
                <section className="relative py-10 md:py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-600 mb-6">
                            <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 border border-teal-200 font-semibold tracking-wide uppercase text-xs">{post.tag}</span>
                            <span>•</span>
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                            <span>•</span>
                            <span className="font-medium flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                {post.author}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">{post.title}</h1>
                        {post.excerpt && (
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{post.excerpt}</p>
                        )}
                    </div>
                </section>

                {/* Featured Image */}
                <section className="-mt-10 pb-10 relative z-10 px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 aspect-[4/3] sm:aspect-video md:aspect-[21/9] bg-gray-100">
                            <img
                                src={post.image || '/assets/logo.jpg'}
                                alt={post.title}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = '/assets/logo.jpg' }}
                            />
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="pb-16 pt-8">
                    <div className="max-w-3xl mx-auto px-4">
                        <div
                            className={`prose prose-lg prose-teal mx-auto prose-img:rounded-xl prose-headings:font-bold prose-a:text-teal-600 hover:prose-a:text-teal-500 overflow-hidden transition-all duration-500 ${isLongContent && !isContentExpanded ? 'max-h-96' : 'max-h-[10000px]'
                                }`}
                        >
                            <article>
                                {post.content.split('\n').map((line, idx) => (
                                    line.trim() ? <p key={idx} className="mb-4 text-gray-700 leading-relaxed">{line}</p> : <br key={idx} />
                                ))}
                            </article>
                        </div>

                        {isLongContent && (
                            <div className="text-center mt-8">
                                <button
                                    onClick={() => setIsContentExpanded(!isContentExpanded)}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
                                >
                                    {isContentExpanded ? (
                                        <>
                                            Kamroq ko'rsatish
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                                            </svg>
                                        </>
                                    ) : (
                                        <>
                                            Ko'proq o'qish
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>
                        )}

                        {/* Share / Tags could go here */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 font-medium transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                                Barcha maqolalar
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="py-20 bg-white border-t border-gray-100">
                        <div className="max-w-[1400px] mx-auto px-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10 text-center">O'xshash maqolalar</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                                {relatedPosts.map((r) => (
                                    <Link key={r.id} to={`/blog/${r.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-gray-200/50 hover:-translate-y-1">
                                        <div className="relative h-48 overflow-hidden">
                                            <img src={r.image || '/assets/logo.jpg'} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-teal-700">
                                                {new Date(r.date).toLocaleDateString()}
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">{r.title}</h3>
                                            <p className="text-sm text-gray-500 line-clamp-2">{r.excerpt}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </>
    )
}

export default BlogPost
