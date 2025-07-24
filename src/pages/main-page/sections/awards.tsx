import { ArrowLeft, ArrowRight } from "lucide-react";


export default function Awards() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 font-lufga">
      <div className=" p-4 rounded">
        <div className="flex flex-col">
            <h1 className="text-5xl font-extralight mb-4 text-[#FDA10A]">Awards</h1>
            <p className="text-xl font-extralight text-neutral-400">We’re committed to excellence - and we’ve got the credentials to prove it.</p>

        </div>
        <div className="flex flex-row items-center  mt-4 gap-4">
            <div className="bg-white p-2 rounded-full text-orange-500 flex items-center gap-2">
            <ArrowLeft/>
            </div>
            <div className="bg-white p-2 rounded-full text-orange-500 flex items-center gap-2">
            <ArrowRight/>
            </div>
        </div>
      </div>
      <div className="  col-span-2">
        <div className="flex flex-row">
            {/* <div className="relative w-[424px] h-[294px] rounded-3xl overflow-hidden">
                <img className=" absolute !!m-[0 important] top-[0px] left-[0px]  object-cover z-[0]" alt="" src="image 33.png" />
                <div className="self-stretch h-[99px] flex flex-col items-start justify-between gap-0 z-[1]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative tracking-[0.04px] leading-10">Best Research</div>
                    </div>
                    <div className="rounded-[56px] bg-white flex flex-row items-center justify-center py-1 px-4 gap-4 text-center text-base text-gray">
                        <div className="w-[15px] relative rounded-[50%] bg-darkorange h-[15px]" />
                        <div className="relative tracking-[0.04px] leading-[30px]">Issued: January 2025</div>
                    </div>
                </div>
            </div> */}
            <div className="font-lufga flex flex-row  gap-4  overflow-hidden">
            <div
                className="flex whitespace-nowrap overflow-x-auto cursor-grab active:cursor-grabbing hide-scrollbar gap-4"
                style={{
                animation: "scroll-horizontal 20s linear"
                }}
            >
                <div className="goup relative items-center justify-center min-w-[424px] h-[294px] rounded-3xl overflow-hidden">
                    <div className="w-full h-full">
                        <img className="h-full w-full object-cover" alt="" src="image 33.png" />
                    </div>
                    <div className="absolute inset-0  p-4 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-4 gap-3">
                        <h1 className="text-3xl font-extralight text-white">Best Research</h1>
                       
                        <div className="rounded-[56px] bg-white flex flex-row items-center justify-center py-1 px-4 gap-4 text-center text-base text-gray">
                            <div className="w-[15px] relative rounded-[50%] bg-orange-600 h-[15px]" />
                            <div className="relative tracking-[0.04px] leading-[30px] text-slate-400">Issued: January 2025</div>
                        </div>
                    </div>
                </div>
                <div className="goup relative items-center justify-center min-w-[424px] h-[294px] rounded-3xl overflow-hidden">
                    <div className="w-full h-full">
                        <img className="h-full w-full object-cover" alt="" src="image 33.png" />
                    </div>
                    <div className="absolute inset-0  p-4 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-4 gap-3">
                        <h1 className="text-3xl font-extralight text-white">Best Research</h1>
                       
                        <div className="rounded-[56px] bg-white flex flex-row items-center justify-center py-1 px-4 gap-4 text-center text-base text-gray">
                            <div className="w-[15px] relative rounded-[50%] bg-orange-600 h-[15px]" />
                            <div className="relative tracking-[0.04px] leading-[30px] text-slate-400">Issued: January 2025</div>
                        </div>
                    </div>
                </div>
                <div className="goup relative items-center justify-center min-w-[424px] h-[294px] rounded-3xl overflow-hidden">
                    <div className="w-full h-full">
                        <img className="h-full w-full object-cover" alt="" src="image 33.png" />
                    </div>
                    <div className="absolute inset-0  p-4 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-4 gap-3">
                        <h1 className="text-3xl font-extralight text-white">Best Research</h1>
                       
                        <div className="rounded-[56px] bg-white flex flex-row items-center justify-center py-1 px-4 gap-4 text-center text-base text-gray">
                            <div className="w-[15px] relative rounded-[50%] bg-orange-600 h-[15px]" />
                            <div className="relative tracking-[0.04px] leading-[30px] text-slate-400">Issued: January 2025</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
      </div>
      
    </div>
  )
}
