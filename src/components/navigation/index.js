'use client'

import { useState } from "react";
import Link from "next/link";
import Menu from "./menu";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";

export default function Nav() {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    }
    return (
        <>
            <Menu nav={nav} onClick={handleClick} />
            <div className='h-[80px] justify-end flex items-center w-full fixed top-0 z-[110] px-4'>
                <div className={cn("flex items-center font-sans gap-4 tracking-tighter duration-50 text-white")}>
                    <button className="top-4 size-12 items-center justify-center absolute right-4 bg-black/60 rounded-full backdrop-blur-md flex" onClick={handleClick}>{nav ? <X strokeWidth={1.5} /> : <MenuIcon strokeWidth={1.5} />}</button>
                </div>
            </div>
        </>
    )
}