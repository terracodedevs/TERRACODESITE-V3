import Navbar from '@/components/navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
      <div className='mt-10'>
        <Navbar/>
      </div>
    )
}
