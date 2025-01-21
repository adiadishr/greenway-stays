'use client'

import BackgroundImage from '@/components/background-image';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { rooms } from "@/constants"
import { ArrowRight, ShoppingBag } from 'lucide-react';
import BlurFade from "@/components/ui/blur-fade";
import SecondaryLoader from '@/components/secondary-loader';

export default function Rooms() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    const roomsSize = rooms.length;
    const firstHalfRooms = rooms.slice(0, roomsSize / 2);
    const secondHalfRooms = rooms.slice(roomsSize / 2, roomsSize);
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
    const isMobile = useIsMobile()

    return (
        <>
            <SecondaryLoader mounted={mounted} />
            {mounted && (<>
                <div className='relative h-screen overflow-hidden'>
                    <motion.div style={{ y }} className='relative flex flex-col items-center justify-center w-full h-full px-4'>
                        <Link href="/" className="absolute left-4 z-[60] -top-4 md:-top-8 w-max">
                            <BlurFade inView direction='up' duration={.75} delay={.25}>
                                <Image
                                    src="/logo-only.png"
                                    alt="Logo of Greenway Stays"
                                    width={isMobile ? 180 : 260}
                                    height={0}
                                    className="object-cover selection:bg-transparent"
                                />
                            </BlurFade>
                        </Link>
                        <Image loading='lazy' src='/rooms/double.jpg' alt='sky' fill className='-z-10 absolute object-cover object-center inset-0 brightness-[.4] selection:bg-transparent' />
                        <BlurFade inView direction='up' duration={.75} delay={.5}>
                            <div className='relative translate-y-12 md:py-36'>
                                <div className='mb-8 font-serif text-5xl text-white md:text-7xl text-center tracking-tight font-light'>
                                    Urban feel, unique atmosphere. Its dim lighting and intimate atmosphere are perfect for a peaceful stay.
                                </div>
                            </div>
                        </BlurFade>
                    </motion.div>
                </div>
                <div className='bg-neutral-900 relative py-8 px-4 z-10 hidden md:block'>
                    <BackgroundImage className="opacity-[.02]" />
                    <div className="container mx-auto flex divide-x divide-neutral-100 font-serif text-xl tracking-tight font-light justify-center text-white text-center">
                        {rooms.map((room, idx) => (
                            <BlurFade className="w-full px-12 group" key={idx} inView direction='up' duration={.75} delay={(idx * 0.25) + .25}>
                                <Link href={`/rooms/${room.slug}`} className='duration-1000 cursor-pointer group-hover:text-white/90'>{room.category}</Link>
                            </BlurFade>
                        ))}
                    </div>
                </div>
                <div className="relative w-full">
                    <div className='container mx-auto px-4 py-20'>
                        <div className='italic font-serif text-lg md:text-3xl'>Rooms</div>
                        <div className='font-serif font-light tracking-tight md:w-2/3 py-4 md:py-10 md:text-7xl text-5xl'>
                            Come in, take your shoes off and let yourself sink into comfort.
                        </div>
                        <div className="md:mb-16 font-serif tracking-tight text-xl text-black md:text-3xl">
                            All rooms include the following facilities:
                            <ul className='md:w-1/2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 font-sans text-black/80 text-lg tracking-tighter text-justify font-light mt-4 p-2 gap-y-2 border-collapse border'>
                                <li>TV</li>
                                <li>Wifi access</li>
                                <li>Room Services</li>
                                <li>Local Cuisine</li>
                                <li>24 hour Front Desk</li>
                                <li>Tour Assistance</li>
                                <li>Laundary Services</li>
                            </ul>
                        </div>
                        <div className='w-full flex md:flex-row flex-col md:gap-36'>
                            <div className='w-full md:w-1/2 flex flex-col md:gap-10'>
                                {firstHalfRooms.map((room, idx) => (
                                    <div key={idx} className='flex flex-col relative'>
                                        <Link href={room.slug} className='font-serif group relative hover:text-black/80 duration-500 font-medium w-max tracking-tight text-3xl pt-24 pb-4 md:pt-0 md:text-3xl'>
                                            {room.category}
                                            <div className="w-0 group-hover:w-full duration-500 h-[1px] rounded-full bg-black/80"></div>
                                            <ArrowRight className='absolute top-1/2 -translate-y-[80%] -right-12 opacity-0 group-hover:opacity-100 duration-500' strokeWidth={1} />
                                        </Link>
                                        <div className='font-sans text-lg tracking-tighter text-justify font-light pb-8 text-black/90 z-50 flex h-max'>
                                            Our urban double rooms breathe the essence of our accommodation experience. A declaration of our intentions, what we want to offer and how we want to make you feel.
                                        </div>
                                        <div className="relative group w-full h-[40rem] z-0 flex flex-col justify-end group overflow-hidden">
                                            <Image loading='lazy' src={room.src} alt={room.category} fill className='object-cover group-hover:scale-110 duration-500 brightness-[.75] -z-10' />
                                            <div className='w-full absolute bottom-0 h-[40rem] bg-gradient-to-t from-neutral-900/75 to-transparent z-0' />

                                            <div className='text-xs md:text-base font-sans font-extralight tracking-tight text-white z-20 pb-6 md:pb-8 flex w-full justify-end px-4 items-center gap-4'>
                                                <Link href={`/rooms/${room.slug}`} className='px-4 py-2 border rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/20 hover:border-white/20 duration-500'>Learn more</Link>
                                                <div className='px-4 py-2 border rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/20 hover:border-white/20 duration-500'><ShoppingBag strokeWidth={1} size={20} /></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='w-full md:w-1/2 flex flex-col md:-translate-y-64 md:gap-10'>
                                {secondHalfRooms.map((room, idx) => (
                                    <div key={idx} className='flex flex-col relative'>
                                        <Link href={room.slug} className='font-serif group relative hover:text-black/80 duration-500 font-medium w-max tracking-tight text-3xl pt-24 pb-4 md:pt-0 md:text-3xl'>
                                            {room.category}
                                            <div className="w-0 group-hover:w-full duration-500 h-[1px] rounded-full bg-black/80"></div>
                                            <ArrowRight className='absolute top-1/2 -translate-y-[80%] -right-12 opacity-0 group-hover:opacity-100 duration-500' strokeWidth={1} />
                                        </Link>
                                        <div className='font-sans text-lg tracking-tighter text-justify font-light pb-8 text-black/90 z-50 flex h-max'>
                                            Our urban double rooms breathe the essence of our accommodation experience. A declaration of our intentions, what we want to offer and how we want to make you feel.
                                        </div>
                                        <div className="relative group w-full h-[40rem] z-0 flex flex-col justify-end group overflow-hidden">
                                            <Image loading='lazy' src={room.src} alt={room.category} fill className='object-cover group-hover:scale-110 duration-500 brightness-[.75] -z-10' />
                                            <div className='w-full absolute bottom-0 h-[40rem] bg-gradient-to-t from-neutral-900/75 to-transparent z-0' />

                                            <div className='text-xs md:text-base font-sans font-extralight tracking-tight text-white z-20 pb-6 md:pb-8 flex w-full justify-end px-4 items-center gap-4'>
                                                <Link href={`/rooms/${room.slug}`} className='px-4 py-2 border rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/20 hover:border-white/20 duration-500'>Learn more</Link>
                                                <div className='px-4 py-2 border rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/20 hover:border-white/20 duration-500'><ShoppingBag strokeWidth={1} size={20} /></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <BackgroundImage className="opacity-[.075]" />
                </div>
            </>)}
        </>
    )
}
