import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header.jsx'
import Speciality from './Speciality.jsx'
import About from './About.jsx'
import Service from './Service.jsx'
import ChooseUs from './ChooseUs.jsx'
import Team from './Team.jsx'
import Testimonial from './Testimonial.jsx'
import Loader from './Loader.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import PostForm from './pages/PostForm.jsx'
import Footer from './Footer.jsx'
import BlogPreview from './pages/BlogPreview.jsx'
import Contact from './pages/Contact.jsx';
import ScrollToTopButton from "./ScrollToTopButton";
const HomePage = () => (
  <>
    <Header />
    <Speciality />
    <About />
    <Service />
    <BlogPreview />
    <ChooseUs />
    <Team />
    <Testimonial />
    <Contact />
    <Footer />
  </>
)

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const detachListeners = []

    const markDone = () => setIsLoading(false)

    const startAssetWatch = () => {
      const imageNodes = Array.from(document.querySelectorAll('img'))
      const videoNodes = Array.from(document.querySelectorAll('video'))

      const totalTargets = imageNodes.length + videoNodes.length
      if (totalTargets === 0) {
        markDone()
        return
      }

      let loadedTargets = 0
      const handleOne = () => {
        loadedTargets += 1
        if (loadedTargets >= totalTargets) {
          markDone()
        }
      }

      imageNodes.forEach((img) => {
        if (img.complete) {
          handleOne()
          return
        }
        const onLoad = () => handleOne()
        const onError = () => handleOne()
        img.addEventListener('load', onLoad, { once: true })
        img.addEventListener('error', onError, { once: true })
        detachListeners.push(() => {
          img.removeEventListener('load', onLoad)
          img.removeEventListener('error', onError)
        })
      })

      videoNodes.forEach((video) => {
        if (video.readyState >= 3) { // HAVE_FUTURE_DATA
          handleOne()
          return
        }
        const onReady = () => handleOne()
        const onError = () => handleOne()
        video.addEventListener('canplaythrough', onReady, { once: true })
        video.addEventListener('error', onError, { once: true })
        detachListeners.push(() => {
          video.removeEventListener('canplaythrough', onReady)
          video.removeEventListener('error', onError)
        })
      })
    }

    // Allow DOM to mount, then begin tracking; add a hard timeout fallback
    const startTimer = setTimeout(startAssetWatch, 0)
    const hardTimeout = setTimeout(markDone, 10000)

    // Prevent scroll while loading
    if (isLoading) {
      document.documentElement.style.overflow = 'hidden'
    }

    return () => {
      clearTimeout(startTimer)
      clearTimeout(hardTimeout)
      detachListeners.forEach((fn) => fn())
      document.documentElement.style.overflow = ''
    }
  }, [isLoading])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<HomePage />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/post/new" element={<PostForm />} />
        <Route path="/admin/post/:postId/edit" element={<PostForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {isLoading && <Loader />}
          <ScrollToTopButton />
    </Router>
  )
}

export default App