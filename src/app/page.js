"use client"

import Lenis from 'lenis'
import { useEffect } from 'react'
import HeroParallax from '@/components/hero-parallax';
import Nav from '@/components/navigation';
import { products } from '@/constants';
import MyCarousel from '@/components/carousel';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 2,
    });
  }, [])
  return (
    <main className='relative'>
      <Nav />
      <HeroParallax products={products} />
      <div className='flex flex-col px-4 py-24 font-serif md:flex-row'>
        <div className="w-full mb-8 text-3xl font-semibold md:text-5xl md:mb-0 md:w-1/3">Where Comfort, <br className='hidden md:block' /> <span className='italic text-primary'>Meets Style</span></div>
        <div className="w-full font-sans text-lg font-light tracking-tighter md:w-2/3 md:text-xl">
          Nestled amidst lush greenery, our homestay offers a serene retreat from the hustle and bustle of city life. Here, you can immerse yourself in the tranquil beauty of nature while indulging in the comforts of a modern hotel.
          <div className='block mb-4' /> Awake each morning to the gentle rustle of leaves and the sweet melody of birdsong, signaling the beginning of a day filled with relaxation and rejuvenation. Whether you{"'"}re exploring the surrounding gardens, lounging by the poolside, or simply savoring quiet moments of reflection, our sanctuary provides the perfect escape for those seeking solace in nature{"'"}s embrace.
        </div>
      </div>
      <MyCarousel />
    </main>
  )
}

