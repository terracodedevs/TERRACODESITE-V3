import Navbar from '@/components/navbar'
import UnderMaintenance from '@/components/undermaintain'
import Page2 from '@/pages/services-page/business-software/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/service')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
      <div className='my-10'>
        <Navbar/>
        {/* <UnderMaintenance/> */}
        <Page2 />
        
        
      </div>
    )
}
