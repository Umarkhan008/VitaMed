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
import Footer from './Footer.jsx'
import BlogPreview from './pages/BlogPreview.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ScrollToTopButton from "./ScrollToTopButton";
import ScrollToTop from './utils/ScrollToTop';
import { fetchBlogPosts } from './pages/blogAPI.js'
import { fetchTeamMembers } from './pages/teamAPI.js'
import Contact from './pages/Contact.jsx'

const HomePage = ({ blogData, teamData }) => (
  <>
    <Header />
    <Speciality />
    <Team initialData={teamData} />
    <About />
    <Service />
    <BlogPreview initialData={blogData} />
    <ChooseUs />
    <Testimonial />
    <Contact />
    <Footer />
  </>
)

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [blogData, setBlogData] = useState([])
  const [teamData, setTeamData] = useState([])

  useEffect(() => {
    const detachListeners = []
    let assetsLoaded = false
    let dataLoaded = false

    const checkAllDone = () => {
      if (assetsLoaded && dataLoaded) {
        setIsLoading(false)
        document.documentElement.style.overflow = ''
      }
    }

    const startDataFetch = async () => {
      try {
        const [posts, members] = await Promise.all([
          fetchBlogPosts(),
          fetchTeamMembers()
        ])
        setBlogData(posts)
        setTeamData(members)
      } catch (error) {
        console.error('Initial data fetch failed:', error)
      } finally {
        dataLoaded = true
        checkAllDone()
      }
    }

    const startAssetWatch = () => {
      const imageNodes = Array.from(document.querySelectorAll('img'))
      const videoNodes = Array.from(document.querySelectorAll('video'))

      const totalTargets = imageNodes.length + videoNodes.length
      if (totalTargets === 0) {
        assetsLoaded = true
        checkAllDone()
        return
      }

      let loadedTargets = 0
      const handleOne = () => {
        loadedTargets += 1
        if (loadedTargets >= totalTargets) {
          assetsLoaded = true
          checkAllDone()
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
    const startTimer = setTimeout(() => {
      startAssetWatch()
      startDataFetch()
    }, 0)

    // Hard timeout fallback
    const hardTimeout = setTimeout(() => {
      setIsLoading(false)
      document.documentElement.style.overflow = ''
    }, 10000)

    // Prevent scroll while loading
    document.documentElement.style.overflow = 'hidden'

    return () => {
      clearTimeout(startTimer)
      clearTimeout(hardTimeout)
      detachListeners.forEach((fn) => fn())
      document.documentElement.style.overflow = ''
    }
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage blogData={blogData} teamData={teamData} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {isLoading && <Loader />}
      <ScrollToTopButton />
    </Router>
  )
}

export default App


