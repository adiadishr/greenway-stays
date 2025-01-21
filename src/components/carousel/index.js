import { rooms } from '@/constants';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import BackgroundImage from '../background-image';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function MyCarousel() {
    return (
        <div className='relative'>
            <BackgroundImage />
            <div className="container w-full h-full px-4 pt-12 pb-20 mx-auto md:pb-36">
                <div className='mb-8 font-serif text-3xl font-semibold md:text-5xl'>Rooms & <span className="italic">Amenities</span></div>
                <Carousel className="w-full overflow-hidden">
                    <CarouselContent className='active:cursor-grabbing cursor-grab'>
                        {rooms.map((item, index) => (
                            <CarouselItem className={cn('basis-[80%] sm:basis-1/2 md:basis-1/3 selection:bg-transparent', index == 0 ? 'pl-4' : 'pl-2 md:pl-8')} key={index}>
                                <div className='flex flex-col items-center relative w-auto h-[34rem] sm:h-[32rem] rounded-lg justify-end overflow-hidden group duration-500'>
                                    <h3 className='z-20 px-6 pb-4 md:pb-6 font-serif text-xl font-light tracking-tighter text-white md:text-3xl'>{item.category}</h3>
                                    <div className='text-xs md:text-base font-sans font-extralight tracking-tight text-white z-20 pb-6 md:pb-8 flex w-full justify-center items-center gap-8'>
                                        <Link href={`/rooms/${item.slug}`} className='px-4 py-2 border rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/20 hover:border-white/20 duration-500'>Learn more</Link>
                                        <div className='px-4 py-2 border rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/20 hover:border-white/20 duration-500'><ShoppingBag strokeWidth={1} size={20} /></div>
                                    </div>
                                    <Image loading='lazy' fill src={item.src} alt={item.category} className='z-0 object-cover brightness-75' />
                                    <div className='absolute bototm-0 w-full h-[inherit] bg-gradient-to-t from-black/60 to-transparent z-10' />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className='absolute w-12 translate-y-[-50%] rounded-full top-1/2 h-1/6 -right-4 bg-gradient-to-r duration-500 hover:from-black hover:to-black/20 from-black/80 to-transparent'>
                        <CarouselNext className='absolute text-white -translate-y-1/2 bg-transparent border-none hover:text-white top-1/2 right-4 hover:bg-transparent' />
                    </div>
                    <div className='absolute w-12 translate-y-[-50%] rounded-full top-1/2 h-1/6 -left-4 bg-gradient-to-l duration-500 hover:from-black hover:to-black/20 from-black/80 to-transparent'>
                        <CarouselPrevious className='absolute text-white -translate-y-1/2 bg-transparent border-none hover:text-white top-1/2 left-4 hover:bg-transparent' />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

