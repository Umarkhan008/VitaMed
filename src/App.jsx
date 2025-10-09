import React, { useState, useEffect } from 'react'
import Header from './Header.jsx'
import Speciality from './Speciality.jsx'
import About from './About.jsx'
import Service from './Service.jsx'
import Testimonial from './Testimonial.jsx'
import Loader from './Loader.jsx'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    // Also check if all images and videos are loaded
    const checkAssetsLoaded = () => {
      const images = document.querySelectorAll('img')
      const videos = document.querySelectorAll('video')
      
      let loadedCount = 0
      const totalAssets = images.length + videos.length
      
      if (totalAssets === 0) {
        setIsLoading(false)
        return
      }

      const checkComplete = () => {
        loadedCount++
        if (loadedCount >= totalAssets) {
          setIsLoading(false)
        }
      }

      images.forEach(img => {
        if (img.complete) {
          checkComplete()
        } else {
          img.addEventListener('load', checkComplete)
          img.addEventListener('error', checkComplete)
        }
      })

      videos.forEach(video => {
        if (video.readyState >= 3) { // HAVE_FUTURE_DATA
          checkComplete()
        } else {
          video.addEventListener('canplaythrough', checkComplete)
          video.addEventListener('error', checkComplete)
        }
      })
    }

    // Check assets after a short delay to allow DOM to render
    const assetTimer = setTimeout(checkAssetsLoaded, 500)

    return () => {
      clearTimeout(timer)
      clearTimeout(assetTimer)
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <Speciality />
      <About />
      <Service />
      <Testimonial />
    </>
  )
}

export default App