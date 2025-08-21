import { useEffect } from "react"
import { useRouter } from "@tanstack/react-router"

export function ScrollToTop() {
  const router = useRouter()

  useEffect(() => {
    const unsub = router.subscribe("onResolved", () => {
      window.scrollTo({ top: 0, behavior: "smooth" }) // scroll to top on navigation
    })

    return () => unsub()
  }, [router])

  return null
}
