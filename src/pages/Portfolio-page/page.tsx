import FlipbookDemo from "./sections/FlipbookDemo"
import PHero from "./sections/hero"
import OurProjects from "./sections/ourProjects"
import { useEffect } from 'react'

const PFPage = () => {
  
  useEffect(() => {
  const hash = window.location.hash?.slice(1)
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
      <FlipbookDemo />
    </div>
  )
}

export default PFPage