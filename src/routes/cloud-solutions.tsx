import Navbar from '@/components/navbar'
import Page3 from '@/pages/services-page/cloud-solutions/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cloud-solutions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='mt-10'><Navbar /><Page3 /></div>
}
