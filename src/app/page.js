"use client"

import Lenis from 'lenis'
import { useEffect } from 'react'
import MyCarousel from '@/components/carousel';
import Hero from '@/components/hero';
import Bento from '@/components/bento';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  return (
    <main className='relative'>
      <Hero />
      <div className='relative flex items-center justify-center h-screen px-4'>
        <Image fill src="/bg.png" alt='Decorative background' className='object-cover opacity-5 -z-10' />
        <div className='container flex flex-col items-center justify-center w-full gap-8 mx-auto text-black'>
          <div className='font-serif text-5xl text-center md:text-7xl'>A Warm Welcome</div>
          <div className='max-w-screen-md font-serif text-xl tracking-tight text-center md:text-2xl text-black/90'>We take pride in providing personalized hospitality that caters to all your needs.</div>
          <div className='max-w-screen-md font-sans text-base italic tracking-tight text-center md:text-lg text-black/40'>Nestled amidst lush greenery, serene, minimal and comfortable.</div>
          <div className='max-w-screen-md font-serif text-xl tracking-tight text-center md:text-2xl text-black/90'>Our dedicated team of staff is committed to ensuring your stay is comfortable and memorable. Whether you are a solo traveler, a couple seeking a romantic getaway, or a family looking for a relaxing vacation, we have the perfect accommodation options for you.
          </div>
        </div>
      </div>
      <MyCarousel />
      <Bento />
    </main>
  )
}