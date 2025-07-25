import Articles from "./Artical"
import Aboutus from "./sections/aboutus"
import Awards from "./sections/awards"
import FandQ from "./sections/F&Q"
import OurProcess from "./sections/ourProcess"
import WhatWeDoBest from "./sections/we-do-best"
import WorkWithUs from "./sections/Work-with-us"



const Page = () => {
  return (
    <>
    <Aboutus/>
    <WhatWeDoBest/>
    <WorkWithUs/>
    <OurProcess/>
    <Awards/>
     <Articles />
    <FandQ />
    </>
   
  )
}

export default Page
