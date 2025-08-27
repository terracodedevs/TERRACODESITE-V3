import NPFPage from '@/pages/New-Portfolio/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><NPFPage /></div>
}
