
import Button from '@/components/button'
import Navbar from '@/components/navbar'
// import Page from '@/pages/main-page/page'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div className='mt-10'>
    <Navbar/>
   <Button/>
  
    {/* <Page/> */}
  </div>
  )
}
