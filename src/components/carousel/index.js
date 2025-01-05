import { data } from '@/constants';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"
import Image from 'next/image';

export default function MyCarousel() {
    return (
        <div className="w-full h-full px-4 pb-24 mx-auto">
            <div className='mb-12 font-serif text-3xl font-semibold md:text-5xl'>Rooms & <span className="italic text-primary">Amenities</span></div>
            <Carousel className="w-full overflow-hidden">
                <CarouselContent className='active:cursor-grabbing cursor-grab'>
                    {data.map((item, index) => (
                        <CarouselItem className='sm:basis-1/2 md:basis-1/3 selection:bg-transparent' key={index}>
                            <div className='flex flex-col relative w-auto h-[28rem] md:h-[32rem] rounded-lg overflow-hidden'>
                                <h2 className='z-20 px-6 pt-6 pb-2 font-serif text-lg italic font-bold text-white'>{item.category}</h2>
                                <h3 className='z-20 max-w-xs px-6 font-sans text-xl tracking-tighter text-white md:text-3xl'>{item.title}</h3>
                                <Image fill src={item.src} alt={item.title} className='z-0 object-cover' />
                                <div className='absolute top-0 w-full h-[inherit] bg-gradient-to-b from-neutral-900/60 to-transparent z-10' />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className='absolute w-12 translate-y-[-50%] rounded-full top-1/2 h-1/4 -right-4 bg-gradient-to-r duration-500 hover:from-black hover:to-black/20 from-black/80 to-transparent'>
                    <CarouselNext className='absolute text-white -translate-y-1/2 bg-transparent border-none hover:text-white top-1/2 right-4 hover:bg-transparent' />
                </div>
                <div className='absolute w-12 translate-y-[-50%] rounded-full top-1/2 h-1/4 -left-4 bg-gradient-to-l duration-500 hover:from-black hover:to-black/20 from-black/80 to-transparent'>
                    <CarouselPrevious className='absolute text-white -translate-y-1/2 bg-transparent border-none hover:text-white top-1/2 left-4 hover:bg-transparent' />
                </div>
            </Carousel>
        </div>
    );
}

