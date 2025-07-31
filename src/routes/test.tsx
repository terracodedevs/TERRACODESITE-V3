
import UnderMaintenance from '@/components/undermaintain'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div className='mt-10'>
    <UnderMaintenance/>
  </div>
  )
}
