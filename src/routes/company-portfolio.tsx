import Navbar from '@/components/navbar'
import FlipbookDemo from '@/pages/Portfolio-page/sections/FlipbookDemo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/company-portfolio')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='mt-10'>
    <Navbar />
    <FlipbookDemo />
    
    </div>
}
