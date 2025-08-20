import Navbar from '@/components/navbar'
import Page1 from '@/pages/services-page/Ai-solution/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ai-solutions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='mt-10'><Navbar /><Page1 /></div>
}
