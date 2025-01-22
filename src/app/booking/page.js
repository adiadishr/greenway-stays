'use client';

import Lenis from 'lenis'
import { useEffect, useState } from 'react';
import BackgroundImage from '@/components/background-image';
import SecondaryLoader from '@/components/secondary-loader';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import BlurFade from '@/components/ui/blur-fade';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Page() {
    const isMobile = useIsMobile()
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        const lenis = new Lenis()
        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf);
        setTimeout(() => {
            setMounted(true)
        }, 500)
    }, [])

    return (<>
        <SecondaryLoader mounted={mounted} />
        {mounted && <main className='relative text-white bg-neutral-900'>
            <Link href="/" className="absolute left-2 md:left-4 z-[90] -top-0 md:-top-8 w-max">
                <BlurFade inView direction='up' duration={.75} delay={.25}>
                    <Image src="/logo-only.png"
                        alt="Logo of Greenway Stays"
                        width={isMobile ? 120 : 260}
                        height={0}
                        className="object-cover "
                    />
                </BlurFade>
            </Link>
            <BlurFade inView direction='up' duration={.75} delay={.5}>
                <div className="relative py-20 font-serif text-5xl font-light tracking-tight text-center md:text-7xl md:py-40">
                    Booking
                    <div className='w-2/3 mx-auto mt-4 font-sans text-base font-light leading-10 tracking-normal md:text-xl md:w-1/2 text-white/80'>
                        Book your stay at Greenway Stays, Uxbridge, UK. Choose from a range of rooms and enjoy a peaceful retreat surrounded by lush greenery. We are available on various platforms:
                    </div>
                    <div className='absolute hidden px-12 py-4 translate-x-1/2 translate-y-12 border rounded-full text-white/80 w-max right-1/2 md:block'>
                        <ArrowDown strokeWidth={1} />
                    </div>
                </div>
            </BlurFade>
            <div className='relative z-10 w-full py-40'>
                <div className="absolute inset-0 top-0 z-0 w-full h-full bg-gradient-to-br from-white via-transparent" />
                <div className="absolute inset-0 top-0 z-0 w-full h-full bg-gradient-to-t from-white" />
                <div className="container z-10 mx-auto text-black">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-6 place-items-center gap-y-20 gap-x-0">
                        <div className='relative flex flex-col items-center justify-end p-4 group bg-black/50 backdrop-blur-sm rounded-xl lg:col-span-2'>
                            <div className='relative size-72'>
                                <Image fill src="/logos/expedia.png" alt='Logo for booking service' className='object-contain duration-500 group-hover:scale-105' />
                            </div>
                            <Link target='_blank' href="https://www.expedia.com/London-Hotels-OYO-Brunel-Hotel.h29844764.Hotel-Information" className='pb-1 mb-4 font-sans text-xl tracking-tight duration-500 border-b text-white/70 font-extralight border-white/70 hover:text-white hover:border-white'>Check Availability</Link>
                        </div>
                        <div className='relative flex flex-col items-center justify-end p-4 group bg-black/50 backdrop-blur-sm rounded-xl lg:col-span-2'>
                            <div className='relative size-72'>
                                <Image fill src="/logos/booking.svg" alt='Logo for booking service' className='group-hover:scale-[.65] scale-[.6] object-contain duration-500' />
                            </div>
                            <Link target='_blank' href="https://www.booking.com/hotel/gb/greenway-stays.en-gb.html" className='pb-1 mb-4 font-sans text-xl tracking-tight duration-500 border-b text-white/70 font-extralight border-white/70 hover:text-white hover:border-white'>Check Availability</Link>
                        </div>
                        <div className='relative flex flex-col items-center justify-end p-4 group bg-black/50 backdrop-blur-sm rounded-xl lg:col-span-2'>
                            <div className='relative size-72'>
                                <Image fill src="/logos/airbnb.png" alt='Logo for booking service' className='group-hover:scale-[1.05] object-contain duration-500' />
                            </div>
                            <Link target='_blank' href="https://www.airbnb.com/rooms/1125233537708650254" className='pb-1 mb-4 font-sans text-xl tracking-tight duration-500 border-b text-white/70 font-extralight border-white/70 hover:text-white hover:border-white'>Check Availability</Link>
                        </div>
                        <div className='relative flex flex-col items-center justify-end p-4 group bg-black/50 backdrop-blur-sm rounded-xl lg:col-span-3'>
                            <div className='relative size-72'>
                                <Image fill src="/logos/oyo.png" alt='Logo for booking service' className='group-hover:scale-[.8] scale-75 object-contain duration-500' />
                            </div>
                            <Link target='_blank' href="https://www.oyorooms.com/gb/234564/" className='pb-1 mb-4 font-sans text-xl tracking-tight duration-500 border-b text-white/70 font-extralight border-white/70 hover:text-white hover:border-white'>Check Availability</Link>
                        </div>
                        <div className='relative flex flex-col items-center justify-end p-4 group bg-black/50 backdrop-blur-sm rounded-xl lg:col-span-3'>
                            <div className='relative size-72'>
                                <Image fill src="/logos/agoda.png" alt='Logo for booking service' className='group-hover:scale-[1.05] object-contain duration-500' />
                            </div>
                            <Link target='_blank' href="https://www.agoda.com/oyo-greenway-stays/hotel/yiewsley-gb.html" className='pb-1 mb-4 font-sans text-xl tracking-tight duration-500 border-b text-white/70 font-extralight border-white/70 hover:text-white hover:border-white'>Check Availability</Link>
                        </div>
                    </div>
                </div>
                <Image loading="lazy" fill src="/stays.jpg" alt='Decorative background' className='object-cover select-none -z-10' />
            </div>
        </main>}
    </>)
}