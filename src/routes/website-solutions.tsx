import Navbar from '@/components/navbar'
import Page5 from '@/pages/services-page/web-solution/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/website-solutions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='mt-10'><Navbar /><Page5 /></div>
}
