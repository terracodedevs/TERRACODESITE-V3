import Tpage from '@/pages/T&C/Tpage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms-conditions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><Tpage /></div>
}
