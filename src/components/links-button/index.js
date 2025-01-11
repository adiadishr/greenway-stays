'use client'

import { cn } from "@/lib/utils";
import { Facebook, Instagram, MessageCircle, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "next/navigation";

const socials = [
    {
        icon: () => <Facebook />,
        bgColor: 'bg-blue-700 hover:bg-blue-600',
        href: "https://www.facebook.com"
    },
    {
        icon: () => <Instagram />,
        bgColor: 'bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 hover:from-yellow-400 hover:via-pink-400 hover:to-purple-400',
        href: "https://www.instagram.com"
    },
    {
        icon: () => <MessageCircle />,
        bgColor: 'bg-green-700 hover:bg-green-600',
        href: "https://www.whatsapp.com"
    },
]

export default function LinksButton() {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const circleVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0 },
    };
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1,
            },
        },
    };
    return (
        <div className="fixed z-10 flex flex-col gap-2 right-4 bottom-4">
            <motion.div
                className="flex flex-col gap-2"
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {[...socials].reverse().map((social, i) => (
                    <motion.div
                        key={i}
                        onClick={() => window.open(social.href, '_blank')}
                        className={cn(
                            "flex group hover:opacity-80 items-center cursor-pointer justify-center rounded-full size-12 text-white/70",
                            social.bgColor
                        )}
                        variants={circleVariants}
                    >
                        {typeof window !== "undefined" && social.icon()}
                    </motion.div>
                ))}
            </motion.div>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex items-center justify-center rounded-full cursor-pointer size-12 text-white/70 bg-black/60 backdrop-blur-md duration-300 active:scale-[.5]",
                    isOpen && "-rotate-45"
                )}
            >
                <Plus />
            </div>
        </div>
    );
}
