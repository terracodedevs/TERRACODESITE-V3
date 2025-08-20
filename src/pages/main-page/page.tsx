import Articles from "./sections/Artical"
import Aboutus from "./sections/aboutus"
import Awards from "./sections/awards"
import FandQ from "./sections/F&Q"
import OurProcess from "./sections/ourProcess"
import WhatWeDoBest from "./sections/we-do-best"
import WorkWithUs from "./sections/Work-with-us"
import OurClients from "./sections/ourClients"
import HeroSection from "./sections/Hero"
import SaaS from "./sections/saas"

const Page = () => {
  return (
    <div className="overflow-x-hidden">
    <HeroSection/>
    <Aboutus/>
    <WhatWeDoBest/>
    <div className="hidden">
    <SaaS/>
    </div>
    <WorkWithUs/>
    <OurProcess/>
    <div className="hidden">
    <OurClients/>
    </div>
    <div className="hidden">
    <Articles />
    </div>
    <div className="hidden">
    <Awards/>
    </div>
    <FandQ />
    </div>
   
  )
}

export default Page
