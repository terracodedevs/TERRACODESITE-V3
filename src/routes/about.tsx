import Navbar from '@/components/navbar'
import { useAssetLoader } from '@/hooks/useAssetLoader'
import Page from '@/pages/team-page/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: ()=>{
    const assets = [
      'employee/aveen.png',
      'employee/chamod.png',
      'employee/IMG_1158.PNG',
      'employee/IMG_1378.JPEG',
      'employee/ishira.png',
      'employee/navoda.png',
      'employee/manuka.png',
      'employee/pasindu.png',
      'employee/umaya.png',
      'employee/yasith.png',
      'team/2.jpg',
      'team/3.JPEG',
      'team/4.JPEG',
      'team/5.JPEG',
      'team/6.JPG',
      'team/7.JPEG',
      'team/8.JPEG',
      'team/9.jpeg',
      'team/10.JPEG',
      'team/11.JPG'
    ]
    const loaded = useAssetLoader(assets)

    if (!loaded) {
      return (
        <div className="flex justify-center items-center h-screen w-full bg-black">
          <div className="flex flex-col items-center">
            <img
              src="/image 1.svg"
              alt="Loading..."
              className="w-40 h-40 animate-pulse mb-8"
            />
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
              <div
                className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.1s' }}
              ></div>
              <div
                className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: '0.2s' }}
              ></div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className='mt-10'>
        <Navbar />
        <Page />
      </div>
    )
  }
})


