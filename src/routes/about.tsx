import Navbar from '@/components/navbar'
import UnderMaintenance from '@/components/undermaintain'
// import Page from '@/pages/team-page/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div className='mt-10'>

      <Navbar />
      {/* <Page /> */}
      <UnderMaintenance/>
    </div>
  )
}
