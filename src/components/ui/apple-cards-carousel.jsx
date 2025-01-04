"use client";;
import React, { useEffect, useState } from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export const Carousel = ({
  items,
  initialScroll = 0
}) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    (
      <div className="relative w-full">
        <div className="flex items-center justify-between w-full font-serif text-3xl font-semibold md:text-5xl">
          <div>Rooms & <span className="italic text-primary">Amenities</span></div>
          <div className="flex justify-end gap-2 mr-10">
            <button
              className="absolute left-0 z-40 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full top-1/2 md:relative disabled:opacity-50"
              onClick={scrollLeft}
              disabled={!canScrollLeft}>
              <IconArrowNarrowLeft className="w-6 h-6 text-gray-500" />
            </button>
            <button
              className="absolute right-0 z-40 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full top-1/2 md:relative disabled:opacity-50"
              onClick={scrollRight}
              disabled={!canScrollRight}>
              <IconArrowNarrowRight className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto pt-10 md:pt-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}>
          <div className="flex flex-row justify-start gap-4">
            {items.map((item, index) => (
              <motion.div key={"card" + index}>
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export const Card = ({
  card,
  layout = false
}) => {
  return (<>
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      className="relative z-10 flex flex-col items-start justify-start w-56 overflow-hidden bg-gray-100 rounded-lg h-80 md:h-[32rem] md:w-96">
      <div className="absolute inset-x-0 top-0 z-30 h-full pointer-events-none bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      <div className="relative z-40 p-4 md:p-8">
        <motion.p
          layoutId={layout ? `category-${card.category}` : undefined}
          className="font-serif text-sm italic font-light text-left text-white md:text-base">
          {card.category}
        </motion.p>
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className="text-white text-xl md:text-3xl tracking-tighter max-w-md text-left [text-wrap:balance] font-sans mt-2">
          {card.title}
        </motion.p>
      </div>
      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className="absolute inset-0 z-10 object-cover" />
    </motion.button>
  </>);
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    (<Image
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest} />)
  );
};
