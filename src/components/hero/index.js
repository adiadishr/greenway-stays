import { useIsMobile } from '@/hooks/use-mobile';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
    const isMobile = useIsMobile()

    return (
        <div className='relative h-screen overflow-hidden'>
            <motion.div style={{ y }} className='relative flex flex-col items-center justify-center w-full h-full'>
                <div className="absolute left-4 z-[60] -top-4 md:-top-8 w-max">
                    <Image
                        src="/logo-only.png"
                        alt="Logo of Greenway Stays"
                        width={isMobile ? 180 : 260}
                        height={0}
                        className="object-cover "
                    />
                </div>
                <Image src='/stays.jpg' alt='sky' fill className='-z-10 absolute object-cover object-center inset-0 brightness-[.55] selection:bg-transparent' />
                <div className='relative translate-y-8'>
                    <div className='max-w-screen-md mb-4 font-serif text-5xl text-center text-white md:text-7xl'>
                        Experience the <span className='italic'>finest</span> hospitality
                    </div>
                    <div className='mx-auto font-sans text-base font-light tracking-tighter text-center md:text-xl text-white/70'>
                        Accommodations and Personalized Hospitality, <br /> Uxbridge, West London
                    </div>
                </div>
                <div className="absolute p-2 font-sans text-base font-light tracking-tight text-center duration-500 border-b cursor-pointer border-white/80 md:text-xl text-white/70 bottom-8 group hover:text-white/90 hover:border-white">
                    Check Availability
                </div>
            </motion.div>
        </div>
    )
}
