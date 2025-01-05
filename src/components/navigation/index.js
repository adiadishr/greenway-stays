import { Menu } from "lucide-react";

export default function Nav() {
    return (
        <nav className='bg-white/60 font-serif backdrop-blur-md border-b items-center justify-between border-accent h-[56px] fixed top-0 z-50 flex w-full'>
            <div className="flex items-center h-full duration-500 border-r cursor-pointer border-accent group hover:bg-primary"><Menu strokeWidth={0.75} className='mx-4 group-hover:text-white' /></div>
            <div className='absolute uppercase md:text-2xl right-1/2 translate-x-[50%]'>Greenway Stays</div>
            <div className='flex items-center h-full px-4 uppercase duration-500 border-l cursor-pointer border-accent hover:bg-primary hover:text-white'>Book</div>
        </nav>
    )
}