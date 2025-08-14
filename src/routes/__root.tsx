// import Navbar from '@/components/navbar'

import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useAssetLoader } from '@/hooks/useAssetLoader'
import { AnimatePresence, motion } from 'framer-motion'
import Footer from '@/components/nfooter'
import { CookieBanner } from '@/components/CookieFile'
import NotFound from '@/components/NotFound'
import Navbar from '@/components/navbar'


export const Route = createRootRoute({
  component: () => {
    const assets = [
      '/Hero.mp4',
      '/images/bg.webp',
      '/Frame 9.png',
      '/sl.png',
      '/vector.svg',
      '/image 1.svg',
      '2.svg',
      '3.svg',
      '4.svg',
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
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CookieBanner />
            {/* <Navbar /> */}
            <Outlet />
            <Footer />
            <TanStackRouterDevtools />
          </motion.div>
        </AnimatePresence>
      </div>
    )
  },

  notFoundComponent: () => (
    <div className='mt-10'>
      <Navbar />
      <NotFound />
    </div>
  ),
})