// import Navbar from '@/components/navbar'

import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
// import { useAssetLoader } from '@/hooks/useAssetLoader'
import { AnimatePresence, motion } from 'framer-motion'
import Footer from '@/components/nfooter'
import { CookieBanner } from '@/components/CookieFile'
import NotFound from '@/components/NotFound'
import Navbar from '@/components/navbar'


export const Route = createRootRoute({
  component: () => {


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