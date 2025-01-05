"use client"

import Lenis from 'lenis'
import { useEffect } from 'react'
import HeroParallax from '@/components/hero-parallax';
import Nav from '@/components/navigation';
import { products } from '@/constants';
import MyCarousel from '@/components/carousel';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { cn } from '@/lib/utils';
import Image from 'next/image';

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
      <div className="flex flex-col px-4 py-24 font-serif md:flex-row">
        <div className="flex flex-col justify-between w-full mb-8 text-3xl font-semibold grow md:text-5xl md:mb-0 md:w-1/3">
          <div>Where Comfort, <br className="hidden md:block" /> <span className="italic text-primary">Meets Style</span></div>
        </div>
        <div className="flex flex-col w-full font-sans text-lg font-light tracking-tighter md:w-2/3 md:text-xl">
          Nestled amidst lush greenery, our homestay offers a serene retreat from the hustle and bustle of city life. Here, you can immerse yourself in the tranquil beauty of nature while indulging in the comforts of a modern hotel.
          <div className="block mb-4" />
          Awake each morning to the gentle rustle of leaves and the sweet melody of birdsong, signaling the beginning of a day filled with relaxation and rejuvenation. Whether you{"'"}re exploring the surrounding gardens, lounging by the poolside, or simply savoring quiet moments of reflection, our sanctuary provides the perfect escape for those seeking solace in nature{"'"}s embrace.
        </div>
      </div>
      <div className='flex w-[calc(100vw-3rem)] rounded-xl mb-24 py-5 md:py-20 sm:py-12 mx-auto bg-primary relative z-20 overflow-hidden'>
        <Image src='/bg.png' alt='sky' fill className='z-10 object-contain opacity-10' />
        <div className='absolute inset-0 top-0 left-0 z-0 w-full h-full bg-gradient-to-b from-accent/20 to-transparent' />
        <div className='absolute inset-0 bottom-0 left-0 z-0 w-full h-full bg-gradient-to-t from-accent/20 to-transparent' />
        <div className="md:px-20 z-10 sm:px-10 px-4 mx-auto grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {items.map((item, i) => (
            <div key={i} className={cn("row-span-1 font-serif rounded-lg group/bento transition duration-500 p-4 bg-white flex flex-col space-y-4", item.className)}>
              <div className='flex items-center gap-4'>
                <div className='rounded-full bg-black/20 aspect-square size-10 md:size-14'></div>
                <div className="flex flex-col ">
                  <div className='md:-mb-0.5 -mb-1 text-xl md:text-2xl font-medium'>Keeley Kent</div>
                  <div className='font-sans text-xs font-light tracking-tighter md:text-sm'>- Kensington, Derby</div>
                </div>
              </div>
              <div className='flex pt-2 pl-4'>
                <div className='pr-8 text-3xl italic'>{`"`}</div>
                <div className='text-base md:text-lg line-clamp-6'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MyCarousel />
    </main>
  )
}

export const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    className: "md:col-span-2",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    className: "md:col-span-1",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "md:col-span-1",
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    className: "md:col-span-2",
  },
];