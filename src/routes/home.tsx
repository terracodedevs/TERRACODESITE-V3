import Page from '@/pages/main-page/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Page />
}
