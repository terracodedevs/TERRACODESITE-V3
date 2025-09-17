import FlipbookDemo from "./sections/FlipbookDemo"
import PHero from "./sections/hero"
import OurProjects from "./sections/ourProjects"
import { useEffect, useState } from 'react'
import PortfolioModal from "./sections/Ppopup"


const PFPage = () => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)

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
      <PHero onViewPortfolio={() => setIsPortfolioOpen(true)} />
      <OurProjects />
      <PortfolioModal
        isOpen={isPortfolioOpen}
        onClose={() => setIsPortfolioOpen(false)}
        title="Company Portfolio"
        description="Browse our company portfolio showcasing selected work across web, mobile, and systems. Use swipe or click to navigate."
      >
        {/* Ensure Flipbook scales within the modal */}
        <div className="w-full h-full flex items-center justify-center">
          <FlipbookDemo />
        </div>
      </PortfolioModal>
    </div>
  )
}

export default PFPage