
import Footer from '@/components/nfooter'
import UnderMaintenance from '@/components/undermaintain'
// import Page from '@/pages/Article-page/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div className='mt-10'>
    <UnderMaintenance/>
    {/* <Page/> */}
    <Footer/>
  </div>
  )
}
