'use client'

import Lenis from 'lenis'
import { useEffect, useState } from 'react';
import SecondaryLoader from '@/components/secondary-loader';
import BackgroundImage from '@/components/background-image';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';
import AuxHero from '@/components/hero/aux-hero';
import { aux } from '@/constants';

export default function Page() {
    const { contact } = aux;
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

    return (<> <SecondaryLoader mounted={mounted} />
        {mounted && <main className="relative z-0 text-white bg-neutral-900">
            <AuxHero title={contact.title} subtitle={contact.subtitle} />
            <div className="relative py-20 text-black bg-white md:py-40">
                <div className="container px-4 mx-auto">
                    <h1 className='relative font-serif text-5xl font-light md:text-7xl'>
                        Driving Directions to <br /> Greenway Stays
                    </h1>
                    <div className='flex items-start gap-5 pt-20 md:gap-10'>
                        <div className='px-4 py-1 font-sans font-light border border-black rounded-full md:px-8 md:py-2 w-max'>01</div>
                        <div>
                            <div className="font-sans text-xl md:text-3xl">From M40 Jct 1:</div>
                            <ol className='max-w-xl mt-2 ml-2 font-sans list-decimal list-inside md:ml-4 md:mt-4'>
                                <li>Take the A40 Westbound towards Uxbridge.</li>
                                <li>Follow the A40 for approximately 6.5 miles (10.5 km).</li>
                                <li>As you approach Uxbridge town centre, look for the turning for Brunel University on your left (signposted).</li>
                                <li>Take this turning onto the B575 Hillingdon Road.</li>
                                <li>Continue for about 0.3 miles (0.5 km).</li>
                                <li>Greenway Stays will be on your right at number 70 The Greenway (look for signage).</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex items-start gap-5 pt-10 md:gap-10'>
                        <div className='px-4 py-1 font-sans font-light border border-black rounded-full md:px-8 md:py-2 w-max'>02</div>
                        <div>
                            <div className="font-sans text-xl md:text-3xl">From M40 Jct 1:</div>
                            <ol className='max-w-xl mt-2 ml-2 font-sans list-decimal list-inside md:ml-4 md:mt-4'>
                                <li>Take the A40 Westbound towards Uxbridge.</li>
                                <li>Follow the A40 for approximately 6.5 miles (10.5 km).</li>
                                <li>As you approach Uxbridge town centre, look for the turning for Brunel University on your left (signposted).</li>
                                <li>Take this turning onto the B575 Hillingdon Road.</li>
                                <li>Continue for about 0.3 miles (0.5 km).</li>
                                <li>Greenway Stays will be on your right at number 70 The Greenway (look for signage).</li>
                            </ol>
                        </div>
                    </div>
                    <div className='flex items-start gap-5 pt-10 md:gap-10'>
                        <div className='px-4 py-1 font-sans font-light border border-black rounded-full md:px-8 md:py-2 w-max'>03</div>
                        <div>
                            <div className="font-sans text-xl md:text-3xl">Sat Nav:</div>
                            <ol className='max-w-xl mt-2 ml-2 font-sans list-decimal list-inside md:ml-4 md:mt-4'>
                                <li>Take the A40 Westbound towards Uxbridge.</li>
                                <li>Follow the A40 for approximately 6.5 miles (10.5 km).</li>
                                <li>As you approach Uxbridge town centre, look for the turning for Brunel University on your left (signposted).</li>
                                <li>Take this turning onto the B575 Hillingdon Road.</li>
                                <li>Continue for about 0.3 miles (0.5 km).</li>
                                <li>Greenway Stays will be on your right at number 70 The Greenway (look for signage).</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-20 font-serif md:py-40">
                <div className="container mx-auto text-3xl font-light md:text-5xl">
                    <div className='leading-loose text-center'>
                        Hi! My name is <input type="text" placeholder='eg. (John Doe)' className="px-4 py-1 text-center bg-transparent border-b border-white border-dashed outline-none w-72 lg:w-96" /> and I want to <select className="px-4 py-1 text-center bg-transparent border-b border-white border-dashed outline-none w-72 lg:w-96">
                            <option className='text-black' value="1">Book a room</option>
                            <option className='text-black' value="1">Book a room</option>
                            <option className='text-black' value="1">Book a room</option>
                        </select> Could you call me at <input type="number" placeholder="eg. (9843011770)" className="px-4 py-1 text-center bg-transparent border-b border-white border-dashed outline-none w-72 lg:w-96" /> or send an email to <input placeholder="eg. (adishr001@gmail.com)" type="email" className="px-4 py-1 text-center bg-transparent border-b border-white border-dashed outline-none w-max lg:w-max" />?
                    </div>
                    <div className="px-4 py-2 mx-auto mt-20 font-sans text-xl text-center text-black bg-white md:px-8 md:py-4 md:text-3xl w-max">Send</div>
                </div>
            </div>
            <div className='relative z-50 min-h-screen px-4 bg-white'>
                <div className="container mx-auto">
                    <BackgroundImage className="opacity-15" />
                    <div className='flex flex-col gap-10 py-20 md:flex-row md:py-40 md:gap-20'>
                        <div className='flex flex-col justify-center order-2 gap-8 px-8 py-4 font-sans text-white md:w-max font-extralight rounded-xl bg-neutral-900 md:order-1'>
                            <div>
                                <div className='font-serif text-xl font-light text-center md:text-3xl'>Phone:</div>
                                <div className='text-center'>+44 (073) 4166 6760</div>
                            </div>
                            <div>
                                <div className='font-serif text-xl font-light text-center md:text-3xl'>Email:</div>
                                <div className='text-center'>staysgreenway@gmail.com</div>
                            </div>
                            <div>
                                <div className='font-serif text-xl font-light text-center md:text-3xl'>Address:</div>
                                <div className='text-center'>
                                    Greenway Stays<br />
                                    70 The Greenway,<br />
                                    Uxbridge,<br />
                                    United Kingdom,<br />
                                    UB8 2PL<br />
                                </div>
                            </div>
                        </div>
                        <div className='order-1 md:w-full md:order-2'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999.323139201898!2d-0.4783204798501514!3d51.53704017944766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766e7492a0be93%3A0x95db51c06e8917ea!2sGreenway%20Stays!5e1!3m2!1sen!2snp!4v1737518331243!5m2!1sen!2snp" className='w-full h-[400px]' style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <VelocityScroll defaultVelocity={5} className="py-20 font-sans text-5xl text-white md:py-40 bg-neutral-900 md:text-7xl">Greenway Stays</VelocityScroll>
        </main>}
    </>)
}





