import { Experience } from '@/components/Experience'
import Navbar from '@/components/navbar'
import { UI } from '@/pages/New-Portfolio/sections/FilpBook'
// import FlipbookDemo from '@/pages/Portfolio-page/sections/FlipbookDemo'
import { Canvas } from '@react-three/fiber'
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'

export const Route = createFileRoute('/company-portfolio')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='mt-10'>
    <Navbar  />
    <UI />
      <Canvas shadows camera={{
          position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
          fov: 45, 
        }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    
    </div>
}
