import { useEffect, useState } from 'react'

export const useAssetLoader = (assets: string[]) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let loadedCount = 0
    const total = assets.length

    if (total === 0) {
      setLoaded(true)
      return
    }

    const handleLoad = () => {
      loadedCount += 1
      if (loadedCount >= total) {
        setLoaded(true)
      }
    }

    // Detect iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

    assets.forEach((url) => {
      if (url.match(/\.(jpg|jpeg|png|webp|gif|svg)$/)) {
        const img = new Image()
        img.src = url
        img.onload = handleLoad
        img.onerror = handleLoad
      } else if (url.match(/\.(mp4|webm)$/)) {
        if (isIOS) {
          // Skip video preloading on iOS and just mark as loaded
          handleLoad()
        } else {
          const video = document.createElement('video')
          video.src = url
          video.preload = 'metadata' // Changed from 'auto' to 'metadata'
          video.muted = true // Required for autoplay on mobile
          video.onloadedmetadata = handleLoad
          video.onerror = handleLoad
        }
      } else {
        handleLoad()
      }
    })
  }, [assets])

  return loaded
}
