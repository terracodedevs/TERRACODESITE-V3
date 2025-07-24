import Navbar from '@/components/navbar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
    <div className='container mx-auto  p-4 static '>
      <Navbar/>
      <Outlet />
      <TanStackRouterDevtools />

    </div>
    </>
  ),
})