import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const navigate = useNavigate()

  useEffect(() => {
    // Immediate redirect to /home since assets are already loaded by root
    navigate({ to: '/home' })
  }, [navigate])

  return null
}