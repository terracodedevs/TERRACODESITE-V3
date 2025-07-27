// import Navbar from '@/components/navbar'
import Footer from '@/pages/main-page/sections/footer'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useAssetLoader } from '@/hooks/useAssetLoader'
import { AnimatePresence, motion } from 'framer-motion'

export const Route = createRootRoute({
  component: () => {
    const assets = [
      '/Hero.mp4',
      '/images/bg.webp',
      '/Frame 9.png',
      '/sl.png',
      '/vector.svg',
      '/image 1.svg', // Add your loading SVG here
      '2.svg',
      '3.svg',
      '4.svg',
      // ✅ Add all your static public assets here
    ]

    const loaded = useAssetLoader(assets)

    if (!loaded) {
      return (
        <div className="flex justify-center items-center h-screen w-full bg-black">
          <img 
            src="/image 1.svg" 
            alt="Loading..." 
            className="w-16 h-16 animate-pulse"
          />
        </div>
      )
    }

    return (
      <div className="container mx-auto md:px-4 static">
        <AnimatePresence mode="wait">
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <Navbar /> */}
            <Outlet />
            <Footer />
            <TanStackRouterDevtools />
          </motion.div>
        </AnimatePresence>
      </div>
    )
  },
})
