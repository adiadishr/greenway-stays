'use client'

import AboutHero from '@/components/hero/about-hero'
import SecondaryLoader from '@/components/secondary-loader'
import Lenis from 'lenis'
import Image from 'next/image'
import { useEffect, useState } from 'react'
export default function About() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        setTimeout(() => {
            setMounted(true)
        }, 500)
    }, [])
    return (
        <>
            <SecondaryLoader mounted={mounted} />
            <main className="relative">
                <AboutHero />
                <div className='container h-full px-4 py-24 mx-auto md:py-36'>
                    <div className='flex flex-col w-full py-12 md:py-24 md:flex-row'>
                        <div className='relative overflow-hidden md:w-1/2'>
                            <Image src="/uxbridge-1.jpg" height={0} width={700} className='object-cover saturate-0' alt="Photo showcasing stuff" />
                        </div>
                        <div className='w-full md:pl-12 md:w-1/2'>
                            <div className='pt-8 pb-4 font-serif text-3xl text-black md:pb-8 md:text-5xl md:pt-0'>What To Do Locally</div>
                            <div className='font-sans text-base font-light tracking-tighter md:text-lg text-black/80'>
                                Uxbridge offers a charming setting for exploration, with its historic sites and picturesque landscapes. You can enjoy leisurely strolls around the town or venture into the surrounding countryside for scenic walks.
                                Local attractions include the Battle of Britain Bunker, Uxbridge Lido, and the Hillingdon Trail. Additionally, Uxbridge is conveniently situated near London, providing easy access to world-class museums, theaters, and shopping destinations.
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full pt-12 md:py-24 md:flex-row'>
                        <div className='order-2 w-full md:pr-12 md:w-1/2 md:order-1'>
                            <div className='pt-8 pb-4 font-serif text-3xl text-black md:pt-0 md:pb-8 md:text-5xl'>Getting Around</div>
                            <div className='flex flex-col gap-4 font-sans text-base font-light tracking-tighter divide-y md:text-lg text-black/80'>
                                <div><span className='font-bold'>Taxi</span>: For reliable taxi service, you can call Uxbridge Taxis or Phoenix Taxis</div>
                                <div className='pt-4'><span className='font-bold'>Bus:</span> Uxbridge has a well-connected bus network. You can catch buses from the Uxbridge Bus Station located near the town center. Routes include services to Heathrow Airport, Harrow, and other nearby towns.</div>
                                <div className='pt-4'><span className='font-bold'>Train:</span> Uxbridge is served by the London Underground{"'"}s Metropolitan and Piccadilly lines. The Uxbridge tube station provides easy access to central London and other parts of the city. You can plan your journey using the Transport for London website or app.</div>
                            </div>
                        </div>
                        <div className='relative order-1 overflow-hidden md:w-1/2 md:order-2'>
                            <Image src="/uxbridge-2.jpg" height={0} width={700} className='object-cover' alt="Photo showcasing stuff" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}