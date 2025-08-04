import Hero from "./section/hero"
import InterviewProcess from "./section/interviewPro"
import Positions from "./section/positions"


const Page = () => {
  return (
    <div>
      <Hero/>
      <InterviewProcess/>
      <div className="mb-32">
      <Positions/>
      </div>
    </div>
  )
}

export default Page