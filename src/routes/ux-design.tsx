import Navbar from '@/components/navbar'
import Page6 from '@/pages/services-page/UX-designs/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ux-design')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='mt-10'>
      <Navbar />
      <Page6 />
    </div>
  )
}

