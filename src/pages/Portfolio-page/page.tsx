import PHero from "./sections/hero"
import OurProjects from "./sections/ourProjects"
import { useEffect } from 'react'

const PFPage = () => {
  
  useEffect(() => {
    const hash = window.location.hash?.replace('#', '')
    if (hash) {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <div>
      {/* <UnderMaintenance/> */}
      <PHero />
      <OurProjects />
    </div>
  )
}

export default PFPage