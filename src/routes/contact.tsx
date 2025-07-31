import Navbar from '@/components/navbar'
import Page from '@/pages/Contactus-page/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
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
