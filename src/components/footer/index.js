import { links } from "@/constants"
import { formatToRoman } from "@/utils"
import Image from "next/image";
import Link from "next/link"

export default function Footer() {
    return (
        <div
            className='relative h-screen'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='fixed bottom-0 flex w-full h-screen'>
                {/* Left Pane */}
                <div
                    className="relative flex flex-col w-full h-full md:w-7/12 bg-neutral-900"
                >
                    <div className="z-50 flex items-center h-full pl-12 font-serif text-3xl font-medium md:text-5xl md:pl-24 text-white/80">
                        <div className="flex flex-col gap-8">
                            <Link href="/" className="relative z-[60] -top-8 w-max h-32 -left-8 overflow-visible">
                                <Image
                                    src="/logo-only.png"
                                    alt="Logo of Greenway Stays"
                                    width={200}
                                    height={0}
                                    className="object-cover "
                                />
                            </Link>
                            {links.map((link, index) => {
                                return (
                                    <Link
                                        key={link.slug}
                                        href={link.slug}
                                        className="flex items-center gap-6 duration-500 hover:text-white hover:tracking-wide"
                                    >
                                        <div className="text-xl">{formatToRoman(index + 1)}</div>
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <div className="flex text-sm md:hidden">
                                Uxbridge, West London <br />
                                +421 45 530 00 00, email@email.com
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Pane */}
                <div className="hidden md:flex flex-col items-center justify-center w-5/12 font-sans text-black duration-1000 bg-white hover:w-[45%]">
                    <div className="flex w-full px-16 mb-12">
                        <div className="relative w-full px-4 overflow-hidden h-80">
                            <Image
                                src="/uxbridge-2.jpg"
                                alt="Logo of Greenway Stays"
                                fill
                                className="object-cover "
                            />
                        </div>
                    </div>
                    <div />
                    <div className="flex flex-col items-center w-full mb-8">
                        <div>Uxbridge, West London</div>
                        <div>+421 45 530 00 00</div>
                        <div>email@email.com</div>
                    </div>
                    <div>Social media links</div>
                </div>

            </div>
        </div>
    )
}
