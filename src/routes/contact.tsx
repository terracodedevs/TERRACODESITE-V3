import Navbar from '@/components/navbar'
import Page from '@/pages/Contactus-page/page'
import { createFileRoute } from '@tanstack/react-router'
// import { useEffect } from 'react'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  return(
      <div className='mt-10'>
        <Navbar/>
        <Page />
      </div>
    )
}
