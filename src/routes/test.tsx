import Navbar from '@/components/navbar'
import ProcessCard from '@/components/processCard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div>
    <Navbar/>
    <ProcessCard/>
  </div>
  )
}
