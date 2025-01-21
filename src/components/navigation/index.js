'use client'

import { useState } from "react";
import Link from "next/link";
import Menu from "./menu";
import { cn } from "@/lib/utils";

export default function Nav() {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    }
    return (
        <>
            <Menu nav={nav} onClick={handleClick} />
            <div className='h-[80px] justify-end flex items-center w-full fixed top-0 z-[110] px-8 md:px-4'>
                <div className={cn("flex items-center font-sans gap-8 tracking-tighter duration-50", nav ? "text-white md:text-black" : "text-white")}>
                    <Link href="/booking">BOOK NOW</Link>
                    <button onClick={handleClick}>{nav ? "Closex" : "Menu+"}</button>
                </div>
            </div>
        </>
    )
}