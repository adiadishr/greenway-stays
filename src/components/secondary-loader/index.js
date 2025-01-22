'use client'

import Image from "next/image";
import { cn } from "@/lib/utils";
import BackgroundImage from "../background-image";
import BlurFade from "../ui/blur-fade";

export default function SecondaryLoader({ mounted }) {
    return (
        <div className={cn("flex duration-1000 transition-all items-center justify-center bg-neutral-900 fixed w-full inset-0", !mounted ? "h-screen max-h-screen z-[1000]" : "opacity-0 invisible -z-10")}>
            <BackgroundImage />
            <div className="absolute left-1/2 -translate-x-1/2 z-[60] top-1/2 -translate-y-1/2 w-max">
                <BlurFade inView direction='up' duration={.3}>
                    <Image
                        loading="lazy"
                        src="/logo-only.png"
                        alt="Logo of Greenway Stays"
                        width={!mounted ? 260 : 0}
                        height={0}
                        className="object-cover"
                    />
                </BlurFade>
            </div>
        </div>
    )
}



