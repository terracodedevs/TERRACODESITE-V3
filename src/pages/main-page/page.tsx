import Articles from "./sections/Artical"
import Aboutus from "./sections/aboutus"
import Awards from "./sections/awards"
import FandQ from "./sections/F&Q"
import OurProcess from "./sections/ourProcess"
import WhatWeDoBest from "./sections/we-do-best"
import WorkWithUs from "./sections/Work-with-us"
import OurClients from "./sections/ourClients"
import HeroSection from "./sections/Hero"




const Page = () => {
  return (
    <>
    <HeroSection/>
    <Aboutus/>
    <WhatWeDoBest/>
    <WorkWithUs/>
    <OurProcess/>
    <OurClients/>
    <Articles />
    <Awards/>
    <FandQ />
    </>
   
  )
}

export default Page
