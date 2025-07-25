import { ScrollingEffect, type ScrollingEffectRef } from "@/components/scrollEffect";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function OurClients() {
  const scrollRef = useRef<ScrollingEffectRef>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (scrollRef.current) {
      const state = scrollRef.current.getScrollState();
      setCanScrollLeft(state.canScrollLeft);
      setCanScrollRight(state.canScrollRight);
    }
  };

  const handleScrollLeft = () => {
    scrollRef.current?.scrollLeft();
    setTimeout(updateScrollState, 300);
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollRight();
    setTimeout(updateScrollState, 300);
  };

  useEffect(() => {
    // Initial state check
    setTimeout(updateScrollState, 100);
  }, []);

  const clients =[
    {
      name:"Nomin",
      image: "nomin.png",
      position: "CEO",
      comment: "Terracode's team transformed our operations with their AI solutions. Their expertise is unmatched.",
      rate: 5
    }
  ]

  return (
    <div className="grid grid-cols-3 gap-4 p-4 font-lufga">
      <div className=" p-4 rounded flex flex-col justify-between ">
        <div className="flex flex-col">
            <h1 className="text-6xl font-extralight mb-4 text-[#FDA10A]">Our Client Success</h1>
            <p className="text-xl font-extralight text-neutral-400">Hear from businesses that have transformed their operations with our AI-driven solutions.</p>

        </div>
        <div className="flex flex-row items-center  mt-4 gap-4">
            <button 
              onClick={handleScrollLeft}
              disabled={!canScrollLeft}
              className="disabled:opacity-50  transition-opacity"
            >
                <div className="border-white border-2 hover:bg-white p-2 rounded-full text-orange-500 flex items-center gap-2">
                    <ArrowLeft/>
                </div>
            </button>
            <button 
              onClick={handleScrollRight}
              disabled={!canScrollRight}
              className="disabled:opacity-50  transition-opacity"
            >
                <div className="border-white border-2 hover:bg-white active:bg-white p-2 rounded-full text-orange-500 flex items-center gap-2">
                <ArrowRight/>
                </div>
            </button>
        </div>
      </div>
      <div className="  col-span-2">
        <div className="flex flex-row">
            <div className="font-lufga flex flex-row  gap-4  overflow-hidden">
            <ScrollingEffect 
              ref={scrollRef}
              autoScroll={false}
              scrollSpeed={3000}
              showControls={false}
              gap={6}>
            <div className="flex flex-row gap-4 font-lufga">
                {clients.map((client) => (
                    <div  className="group relative items-center justify-center p-6 min-w-[424px] h-[294px] rounded-3xl bg-[#212121] overflow-hidden">
                        <div className="flex flex-row  items-center justify-start gap-4 ">
                            <img className="w-10 h-10 rounded-full object-cover "  src={client.image} />
                            <div className="flex flex-col items-start justify-start">
                                <h2 className="text-xl  text-[#fda10a]">{client.name}</h2>
                                <p className="text-sm text-neutral-400">{client.position}</p>
                            </div>
                            
                        </div>
                        {/* <div className="absolute inset-0 p-4 bg-gradient-to-t from-black to-transparent"></div> */}
                        <div className="absolute inset-0 flex flex-col items-start justify-end p-4 gap-3">
                            <h1 className="text-3xl font-extralight text-white">{client.position}</h1>
                            {/* <div className="rounded-[56px] bg-white flex flex-row items-center justify-center py-1 px-4 gap-4 text-center text-base text-gray">
                                <div className="w-[15px] relative rounded-[50%] bg-orange-600 h-[15px]" />
                                <div className="relative tracking-[0.04px] leading-[30px] text-slate-400">Issued: {client.comment}</div>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
            </ScrollingEffect>
            </div>
            
        </div>
      </div>
      
    </div>
  )
}
