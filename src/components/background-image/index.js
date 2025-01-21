import { cn } from "@/lib/utils";
import Image from "next/image";

export default function BackgroundImage({ className }) {
    return (
        <Image loading="lazy" fill src="/bg.png" alt='Decorative background' className={cn('object-cover -z-10 select-none', className ? className : "opacity-5")} />
    )
}