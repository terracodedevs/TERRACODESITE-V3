import Navbar from '@/components/navbar'
import Page4 from '@/pages/services-page/mobile-app/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mobile-apps')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='mt-10'><Navbar /><Page4 /></div>
}
