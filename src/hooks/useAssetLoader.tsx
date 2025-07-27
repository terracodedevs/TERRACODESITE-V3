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

    assets.forEach((url) => {
      if (url.match(/\.(jpg|jpeg|png|webp|gif)$/)) {
        const img = new Image()
        img.src = url
        img.onload = handleLoad
        img.onerror = handleLoad
      } else if (url.match(/\.(mp4|webm)$/)) {
        const video = document.createElement('video')
        video.src = url
        video.preload = 'auto'
        video.oncanplaythrough = handleLoad
        video.onerror = handleLoad
      } else {
        handleLoad()
      }
    })
  }, [assets])

  return loaded
}
