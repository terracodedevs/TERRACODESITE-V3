import PaymentDetails from '@/pages/payments/details-view'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/payments-details')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><PaymentDetails /></div>
}
