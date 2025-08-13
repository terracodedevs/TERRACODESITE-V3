import Navbar from '@/components/navbar'
import PFPage from '@/pages/Portfolio-page/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='mt-10'>
    <Navbar/>
    <PFPage />
  </div>
}
