'use client'

import Image from "next/image";
import BackgroundImage from "../background-image";
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from "@/lib/utils";
import BlurFade from "@/components/ui/blur-fade";

export default function Loader({ mounted }) {
    const isMobile = useIsMobile()
    return (
        <div style={{ transitionDuration: "1500ms", transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)", }} className={cn("flex items-center justify-center bg-neutral-900 relative", mounted ? "!h-0 z-0" : "h-screen max-h-screen z-[1000]")}>
            <BlurFade direction="up" duration={.5} className={cn(mounted && "invisible duration-300 transition-all")}>
                <div className="absolute left-1/2 -translate-x-1/2 z-[60] top-1/2 -translate-y-1/2 w-max">
                    <Image
                        loading="lazy"
                        src="/logo-only.png"
                        alt="Logo of Greenway Stays"
                        width={isMobile ? 180 : 260}
                        height={0}
                        className="object-cover"
                    />
                </div>
            </BlurFade>
            <BackgroundImage className="opacity-[2.5%]" />
        </div>
    )
}



