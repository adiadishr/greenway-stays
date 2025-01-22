import BackgroundImage from "@/components/background-image";
import MyCarousel from "@/components/carousel";
import AuxHero from "@/components/hero/aux-hero";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { rooms } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const { slug } = await params;
    const room = rooms.find((room) => room.slug === slug)
    if (!room) {
        notFound()
    }
    const { category, src, subtitle, content } = room;
    const contentSize = content.length;
    return (<>
        <main className="relative bg-neutral-900">
            <AuxHero title={category} subtitle={subtitle} />
            <div className="relative z-0 w-full pt-20 bg-white md:pt-40">
                <BackgroundImage />
                <div className="container px-4 mx-auto text-black">
                    <div className="flex flex-col gap-10 md:flex-row md:gap-20">
                        <div className="relative w-full h-[20rem] md:h-[40rem] md:w-1/2">
                            <Image src={src} alt={category} fill className="object-cover group-hover:scale-[1.05] duration-500" />
                        </div>
                        <div className="relative flex flex-col justify-between flex-1 w-full h-full md:w-1/2 md:h-[40rem]">
                            <div>
                                <div className='w-full sm:pr-0 xl:pr-[30%] font-serif text-5xl border-b border-black/60 pb-5 md:text-7xl text-center md:text-start'>{category} Room</div>
                                <div className='mt-5 font-sans text-lg font-light tracking-tighter md:text-xl text-black/80'>
                                    {content.map((p, idx) => (
                                        <p className={cn(idx != contentSize - 1 && "mb-5")} key={idx}>
                                            {p}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full py-2 mt-20 font-serif text-xl text-center text-white duration-500 bg-black cursor-pointer md:py-4 md:text-3xl hover:bg-black/80 md:mt-0">Book Now</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-20 bg-white">
                <MyCarousel inside={true} />
            </div>
            <VelocityScroll defaultVelocity={5} className="py-20 font-serif text-5xl font-light text-white md:py-40 bg-neutral-900 md:text-7xl">Greenway Stays</VelocityScroll>
        </main>
    </>)
}