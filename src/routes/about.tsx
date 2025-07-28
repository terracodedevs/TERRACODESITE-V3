import Navbar from '@/components/navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div className='mt-10'>

      <Navbar/>
      <h1>About Us</h1>
      <p>We are a company that values innovation and creativity.</p>
    </div>
  )
}
