import Navbar from '@/components/navbar'
import Page2 from '@/pages/services-page/business-software/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/business-softwares')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='mt-10'><Navbar />
  <Page2 /></div>
}
