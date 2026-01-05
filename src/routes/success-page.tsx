import PaymentSuccessPage from '@/pages/Success-page/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/success-page')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><PaymentSuccessPage/></div>
}