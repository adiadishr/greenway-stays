"use client"

import Lenis from 'lenis'
import { useEffect, useState } from 'react'
import MyCarousel from '@/components/carousel';
import Hero from '@/components/hero';
import BackgroundImage from '@/components/background-image';
import { cn } from '@/lib/utils';
import Loader from '@/components/loader';
import { Compare } from '@/components/ui/compare';

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    setTimeout(() => setMounted(true), 1250)
  }, [])
  return (
    <>
      <Loader mounted={mounted} />
      {mounted &&
        <div className={cn(!mounted && "hidden h-0 duration-1000")}>
          <main className='relative'>
            <Hero />
            <div className='relative flex items-center justify-center h-screen px-4 overflow-visible'>
              <div className='w-full h-[25%] bg-gradient-to-b from-white to-transparent absolute top-0 inset-0' />
              <BackgroundImage />
              <div className='container flex flex-col items-center justify-center w-full gap-8 mx-auto text-black'>
                <div className='font-serif text-5xl text-center md:text-7xl'>A Warm Welcome</div>
                <div className='max-w-screen-md font-serif text-xl tracking-tight text-center md:text-2xl text-black/90'>We take pride in providing personalized hospitality that caters to all your needs.</div>
                <div className='max-w-screen-md font-sans text-base italic tracking-tight text-center md:text-lg text-black/40'>Nestled amidst lush greenery, serene, minimal and comfortable.</div>
                <div className='max-w-screen-md font-serif text-xl tracking-tight text-center md:text-2xl text-black/90'>Our dedicated team of staff is committed to ensuring your stay is comfortable and memorable. Whether you are a solo traveler, a couple seeking a romantic getaway, or a family looking for a relaxing vacation, we have the perfect accommodation options for you.
                </div>
              </div>
            </div>
            <MyCarousel />
            <div className="relative w-full px-4 items-center flex justify-center md:mb-40 mb-32">
              <BackgroundImage />
              <div className="container mx-auto flex items-center justify-center flex-col">
                <div className='text-3xl md:text-5xl font-serif mt-16 mb-12 md:mb-20 md:mt-28 md:font-medium'>Renovations at Greenway Stays</div>
                <Compare
                  firstImage="/uxbridge-1.jpg"
                  secondImage="/uxbridge-2.jpg"
                  firstImageClassName="object-cover object-left-top"
                  secondImageClassname="object-cover object-left-top"
                  className="h-[350px] w-[400px] md:h-[500px] md:w-[800px]"
                  slideMode="hover"
                  autoplay={true}
                  autoplayDuration={5000}
                />
              </div>
            </div>
          </main>
        </div>
      }
    </>
  )
}