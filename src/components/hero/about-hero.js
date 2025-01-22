import { useIsMobile } from '@/hooks/use-mobile';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import BlurFade from '../ui/blur-fade';

export default function AboutHero() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
    const isMobile = useIsMobile()

    return (
        <div className='relative h-screen overflow-hidden'>
            <motion.div style={{ y }} className='relative flex flex-col items-end justify-center w-full h-full px-4'>
                <Link href="/" className="absolute -left-2 md:left-4 z-[60] -top-4 md:-top-8 w-max">
                    <BlurFade inView direction='up' duration={.75} delay={.25}>
                        <Image
                            src="/logo-only.png"
                            alt="Logo of Greenway Stays"
                            width={isMobile ? 180 : 260}
                            height={0}
                            className="object-cover "
                        />
                    </BlurFade>
                </Link>
                <Image src='/home.jpg' alt='sky' fill className='-z-10 absolute object-cover object-center inset-0 brightness-[.55] selection:bg-transparent' />
                <div className='md:w-1/2 relative translate-y-12'>
                    <BlurFade inView direction='up' duration={.75} delay={.5}>
                        <div className='mb-8 font-serif text-5xl text-white md:text-7xl'>About <span className='italic'>Us</span></div>
                        <div className='font-sans text-base font-light tracking-tighter text-justify text-white/80 md:text-lg md:w-10/12'>
                            Nestled amidst lush greenery, our homestay is designed to offer you a peaceful retreat away from the hustle and bustle of city life. Here, you can immerse yourself in nature{"'"}s beauty while enjoying the comforts of a modern hotel. We are located just 5.7 miles from Heathrow Airport. <br /><br />
                            Upon entering our abode, you will find yourself enveloped in an ambiance of warmth and hospitality, where every detail has been carefully curated to cater to your every need. Sink into the plush embrace of our sumptuous accommodations, adorned with tasteful furnishings and adorned with accents inspired by the surrounding natural splendor.
                        </div>
                    </BlurFade>
                </div>
            </motion.div>
        </div>
    )
}
