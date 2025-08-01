import Page from '@/pages/Article-page/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><Page/></div>
}
