import Payform from '@/pages/payments/pay-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/payments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><Payform /></div>
}
