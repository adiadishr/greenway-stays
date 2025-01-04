import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, MotionConfig } from "framer-motion";
import Image from "next/image";

export default function HeroParallax({ products }) {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-1200, 400]), springConfig);
    return (
        (<div
            ref={ref}
            className="h-[275vh] z-0 mt-[56px] pt-12 md:pt-24 md:pb-0 md:mb-24 overflow-hidden relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className="">
                <motion.div className="flex flex-row-reverse mb-20 space-x-20 space-x-reverse">
                    {firstRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard product={product} translate={translateXReverse} key={product.title} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
                    {thirdRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </motion.div>
            </motion.div>
        </div>)
    );
};

const Header = () => {
    return (
        (<div
            className="container relative min-h-[calc(100vh-12rem)] flex flex-col justify-center top-0 left-0 w-full px-4 mx-auto font-serif">
            <h1 className="text-5xl font-bold md:text-7xl">
                Experience the <br /> <span className='italic text-primary'>finest hospitality</span>
            </h1>
            <div className='max-w-3xl mt-8 font-sans text-lg font-light tracking-tighter md:mt-12 md:text-xl'>
                At <span className="italic font-bold text-primary">Greenway Stays</span>, we take pride in providing personalized hospitality that caters to all your needs. Our dedicated team of staff is committed to ensuring your stay is comfortable and memorable. <div className='block mb-4' /> Whether you{"'"}re a solo traveler, a couple seeking a romantic getaway, or a family looking for a relaxing vacation, we have the perfect accommodation options for you.
            </div>
            <button className="px-4 py-2.5 w-max mt-8 font-sans tracking-tighter text-sm text-white duration-500 rounded-lg shadow-md font-extralight bg-primary md:text-base md:px-6 md:py-3 hover:bg-primary/90 hover:shadow-lg">
                Book Your Stay
            </button>
        </div>)
    );
};

const ProductCard = ({
    product,
    translate
}) => {
    return (
        (<motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0">
            <div className="z-0 block">
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute z-0 h-full w-full group-hover/product:blur-[2px] inset-0"
                    alt={product.title} />
            </div>
            <div
                className="absolute inset-0 z-10 w-full h-full duration-500 bg-black opacity-0 pointer-events-none group-hover/product:opacity-40"></div>
            <h2
                className="absolute z-20 font-serif text-white duration-500 opacity-0 top-1/2 right-1/2 group-hover/product:opacity-100">
                {product.title}
            </h2>
        </motion.div>)
    );
};