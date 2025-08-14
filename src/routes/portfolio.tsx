import Navbar from '@/components/navbar'
import { useAssetLoader } from '@/hooks/useAssetLoader'
import PFPage from '@/pages/Portfolio-page/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: () => {
    const assets = [
      '/HOV Mockup.png',
      '/inpro Mockup.png',
      '/transit.png',
      '/CMS.png',
      '/polls.png',
      '/mobileapp.png',
      '/hovims.png',
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
      <div className="mt-10">
        <Navbar />
        <PFPage />
      </div>
    )
  },
})
