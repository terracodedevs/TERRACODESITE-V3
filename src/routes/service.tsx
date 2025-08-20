import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/service')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
      <div className='my-10'>
      </div>
    )
}
