'use client'

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function SecondaryLoader({ mounted }) {
    return (
        <div className={cn("flex duration-1000 transition-all items-center justify-center bg-neutral-900 fixed w-full inset-0", mounted ? "opacity-0" : "h-screen max-h-screen z-[1000]")}>
            <div className="absolute left-1/2 -translate-x-1/2 z-[60] top-1/2 -translate-y-1/2 w-max">
                <Image
                    loading="lazy"
                    src="/logo-only.png"
                    alt="Logo of Greenway Stays"
                    width={260}
                    height={0}
                    className="object-cover"
                />
            </div>
        </div>
    )
}



