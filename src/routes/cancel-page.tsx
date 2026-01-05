import PaymentCancelPage from '@/pages/Cancel-page/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cancel-page')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><PaymentCancelPage/></div>
}