import Navbar from '@/components/navbar'
import Partpage from '@/pages/Partnerships/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/partnerships')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='my-10'>
        <Navbar/>
        <Partpage/>
        {/* <UnderMaintenance/> */}
      </div>

  )
}
