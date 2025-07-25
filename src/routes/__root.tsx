// import Navbar from '@/components/navbar'
import Footer from '@/pages/main-page/sections/footer'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
    <div className='container mx-auto   static '>
      {/* <Navbar/> */}
      <Outlet />
      <Footer/>
      <TanStackRouterDevtools />

    </div>
    </>
  ),
})