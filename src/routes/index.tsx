import { createFileRoute } from '@tanstack/react-router'
import Page from '@/pages/main-page/page'
import { useAssetLoader } from '@/hooks/useAssetLoader'


export const Route = createFileRoute('/')({
  component: () => {
    const assets = [
      'hero/Hero.mp4',
      'images/bg.webp',
      'hero/Frame 9.png',
      '/sl.png',
      'processcard/vector.svg',
      '/image 1.svg',
      'processcard/2.svg',
      'processcard/3.svg',
      'processcard/4.svg',
    ]
    const loaded = useAssetLoader(assets)

    if (!loaded) {
      return (
        <div className="flex justify-center items-center h-screen w-full bg-black">
          <div className="flex flex-col items-center">
            <img
              src="/image 1.svg"
              alt="Loading..."
              className="w-40 h-40 animate-pulse mb-8"
            />
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
              <div
                className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.1s' }}
              ></div>
              <div
                className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.2s' }}
              ></div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div >
        
        <Page />
      </div>
    )
  },
})

