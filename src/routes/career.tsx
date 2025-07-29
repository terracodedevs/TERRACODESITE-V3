import Navbar from '@/components/navbar'
import Page from '@/pages/Career-page/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/career')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div className='mt-10'>
      <Navbar/>
      <Page/>
    </div>
  )
}
