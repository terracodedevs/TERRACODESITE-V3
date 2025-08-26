import Navbar from '@/components/navbar'
import UnderMaintenance from '@/components/undermaintain'
// import Ppage from '@/pages/Pricing-page/page'
// import PFPage from '@/pages/Portfolio-page/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
      <div className='mt-10'>
        <Navbar/>
        {/* <Ppage /> */}
        <UnderMaintenance/>
      </div>
    )
}
