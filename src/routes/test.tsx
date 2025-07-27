
import Button from '@/components/button'
// import Page from '@/pages/main-page/page'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div>
   <Button/>
  
    {/* <Page/> */}
  </div>
  )
}
