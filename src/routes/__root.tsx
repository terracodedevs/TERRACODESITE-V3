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
      '2.svg',
      '3.svg',
      '4.svg',
      // ✅ Add all your static public assets here
    ]

    const loaded = useAssetLoader(assets)

    if (!loaded) {
      return (
        <div className="flex justify-center items-center h-screen w-full bg-black">
          {/* 💡 Add your animated SVG, spinner or Framer Motion animation here */}
          <div className="animate-spin h-12 w-12 border-4 border-white border-t-transparent rounded-full" />
        </div>
      )
    }

    return (
      <div className="container mx-auto md:px-4 static">
        <AnimatePresence mode="wait">
          {!loaded ? (
            <motion.div
              key="loader"
              className="fixed inset-0 flex justify-center items-center bg-black z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="h-16 w-16 border-4 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              />
            </motion.div>
          ) : (
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
          )}
        </AnimatePresence>
      </div>
    )
  },
})
