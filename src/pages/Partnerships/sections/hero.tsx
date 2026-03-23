import { Rocket } from "lucide-react"

const Hero = () => {
  return (
    <section className="text-white font-lufga mt-10 md:mt-24 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Top Badge */}
        <div className="backdrop-blur-md bg-white/10 rounded-full py-3 px-5 md:px-8 text-white shadow-lg flex items-center gap-3">
          <Rocket className="text-[#FDA10A] w-5 h-5" />
          <p className="text-xs md:text-lg">
            Choose the partnership that fits your stage, scale, and goals.
          </p>
        </div>

        {/* Heading */}
        <h1 className="mt-10 text-3xl md:text-5xl lg:text-6xl font-light text-[#FDA10A] leading-tight">
          A Dedicated Digital Infrastructure Engineering{" "}
          <span className="block">
            Partner for Your Business
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-sm md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
          We stand beside your business with end-to-end software, hardware, AI, and cybersecurity support at the cost of a single IT employee.
        </p>

      </div>
    </section>
  )
}

export default Hero