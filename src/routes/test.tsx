import Navbar from '@/components/navbar'
import ProcessCard from '@/components/processCard'
import Page from '@/pages/main-page/page'
import OurProcess from '@/pages/main-page/sections/ourProcess'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div>
    <Navbar/>
    <OurProcess/>
    <Page/>
  </div>
  )
}
