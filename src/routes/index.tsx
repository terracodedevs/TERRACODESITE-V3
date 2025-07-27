import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  beforeLoad:()=>{
    throw redirect({ to: '/home' })
  }
})

function RouteComponent() {
  return (
    <div className="p-2">
      <h3>Welcome /</h3>
    </div>
  )
}