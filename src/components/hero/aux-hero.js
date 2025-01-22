'use client'

import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import BlurFade from '@/components/ui/blur-fade';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/use-mobile';

export default function AuxHero({ title, subtitle }) {
    const isMobile = useIsMobile()
    return (<>
        <Link href="/" className="absolute left-2 md:left-4 z-[90] -top-0 md:-top-8 w-max">
            <BlurFade inView direction='up' duration={.75} delay={.25}>
                <Image src="/logo-only.png"
                    alt="Logo of Greenway Stays"
                    width={isMobile ? 180 : 260}
                    height={0}
                    className="object-cover "
                />
            </BlurFade>
        </Link>
        <BlurFade inView direction='up' duration={.75} delay={.5}>
            <div className="relative py-20 font-serif text-5xl font-light tracking-tight text-center text-white pt-52 md:text-7xl md:py-40">
                {title}
                <div className='w-2/3 mx-auto mt-4 font-sans text-base font-light leading-10 tracking-normal md:text-xl md:w-1/2 text-white/80'>
                    {subtitle}
                </div>
                <div className='absolute hidden px-12 py-4 translate-x-1/2 translate-y-12 border rounded-full text-white/80 w-max right-1/2 md:block'>
                    <ArrowDown strokeWidth={1} />
                </div>
            </div>
        </BlurFade>
    </>)
}