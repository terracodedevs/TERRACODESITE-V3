import React, { useRef,} from "react";
import { ScrollingEffect,  type ScrollingEffectRef } from "@/components/scrollEffect";

interface tech {
  name: string;
  image: string;
}

interface TechPageProps {
  stacks: tech[];
}

const TechStacktemplate: React.FC<TechPageProps> = ({
  stacks,
}) => {
    const scrollRef = useRef<ScrollingEffectRef>(null);
  return (
    <div className=" font-lufga my-20 ">
        <div className="mx-auto max-w-7xl container">
            <div className="flex flex-col items-center ">
                <h2 className="text-4xl md:text-6xl text-[#FDA10A] md:mb-10">Tools & Technologies</h2>
            </div>
            <div className="col-span-3 flex flex-row">
                        <ScrollingEffect
                            ref={scrollRef}
                            autoScroll={true}
                            scrollSpeed={3000}
                            showControls={false}
                            pauseOnHover={false}
                            gap={6}>
                            <div className="flex flex-row gap-2 opacity-60">
                            {stacks.map((item, index) => (
                            <div key={index} className="group relative items-center justify-center min-w-[200px] h-[120px] rounded-2xl overflow-hidden ">
                                <div className="w-full h-full flex items-center justify-center p-4 text-white">
                                <img 
                                    className="w-24 h-24 object-contain " 
                                    src={item.image} 
                                    alt={item.name} 
                                />
                                </div>
                                
                            </div>
                            ))}
                        </div>
                        </ScrollingEffect>
                    </div>
            </div>
    </div>
  )
}

export default TechStacktemplate