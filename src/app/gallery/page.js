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
import { aux } from '@/constants';
import AuxHero from '@/components/hero/aux-hero';

const images = [
    "/exterior.png",
    "/stays.jpg",
    "/uxbridge-1.jpg",
    "/exterior.png",
    "/exterior.png",
    "/exterior.png",
    "/exterior.png",
    "/exterior.png",
    "/exterior.png",
    "/exterior.png",
    "/exterior.png",
    "/exterior.png",
]

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


    const { gallery } = aux;

    return (<>
        <SecondaryLoader mounted={mounted} />
        <main className='relative text-white bg-neutral-900'>
            <AuxHero title={gallery.title} subtitle={gallery.subtitle} />
            <BackgroundImage />
            <div className='bg-white'>
                <h1 className='container px-4 py-10 mx-auto font-serif text-5xl font-light text-black md:text-7xl md:py-20'>Parking</h1>
                <div className="container grid grid-cols-2 gap-4 px-4 pb-20 mx-auto md:grid-cols-3 md:pb-40 ">
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg"
                                src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg "
                                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg"
                                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                                alt="gallery-photo"
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg"
                                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg"
                                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg "
                                src="https://docs.material-tailwind.com/img/team-3.jpg"
                                alt="gallery-photo"
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg"
                                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg "
                                src="https://docs.material-tailwind.com/img/team-3.jpg"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg"
                                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                                alt="gallery-photo"
                            />
                        </div>
                    </div>
                </div>
                <h1 className='container px-4 pb-10 mx-auto font-serif text-5xl font-light text-black md:text-7xl md:pb-20'>Parking</h1>
                <div className="container grid grid-cols-2 gap-4 px-4 pb-20 mx-auto md:grid-cols-3 md:pb-40 ">
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg"
                                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg"
                                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                                alt="gallery-photo"
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg"
                                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg "
                                src="https://docs.material-tailwind.com/img/team-3.jpg"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg"
                                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                                alt="gallery-photo"
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg"
                                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg"
                                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                className="object-cover object-center h-auto max-w-full rounded-lg "
                                src="https://docs.material-tailwind.com/img/team-3.jpg"
                                alt="gallery-photo"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </>)
}