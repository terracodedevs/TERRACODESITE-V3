import Navbar from '@/components/navbar'
import UnderMaintenance from '@/components/undermaintain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/service')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
      <div className='mt-10'>
        <Navbar/>
        <UnderMaintenance/>
      </div>
    )
}
