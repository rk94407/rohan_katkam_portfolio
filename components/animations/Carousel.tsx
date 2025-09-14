import { useEffect, useState, useRef } from 'react';
import { motion, PanInfo, SpringOptions, useMotionValue, useTransform } from 'motion/react';
import React, { JSX } from 'react';

import { DEFAULT_ITEMS } from '@/lib/carouselItems';
import Image from 'next/image';

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon?: React.ReactNode;
  image?: string;
  link?: string;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  baseHeight?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS: SpringOptions = {
  stiffness: 300,
  damping: 30,
};


export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 800, // ⬅️ increased from 300
  baseHeight = 600, // ⬅️ added bigger default
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps): JSX.Element {
  const [containerSize, setContainerSize] = useState({
    width: baseWidth,
    height: baseHeight,
  });

  useEffect(() => {
    const updateSize = () => {
      const width = Math.min(window.innerWidth * 0.9, baseWidth); // max 90% of screen or baseWidth
      const height = round
        ? width // round keeps height=width
        : Math.min(window.innerHeight * 0.6, baseHeight); // 60% height max
      setContainerSize({ width, height });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [baseWidth, baseHeight, round]);

  const containerPadding = 16;
  const itemWidth = containerSize.width - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  // const dragProps = loop
  //   ? {}
  //   : {
  //       dragConstraints: {
  //         left: -trackItemOffset * (carouselItems.length - 1),
  //         right: 0,
  //       },
  //     };

  return (
    <div className="relative w-max mx-auto backdrop-blur-xs">
      <div className="flex flex-col items-center justify-center px-4">
        <h1
          className="
            text-3xl        /* Base size for very small screens */
            sm:text-3xl     /* Small devices (640px+) */
            md:text-4xl     /* Tablets (768px+) */
            lg:text-5xl     /* Laptops (1024px+) */
            xl:text-6xl     /* Large screens (1280px+) */
            font-bold 
            text-center
            mb-8
          "
        >
          Projects
        </h1>
      </div>
      {/* Main Carousel container */}
      <div
        ref={containerRef}
        className={`relative overflow-hidden p-4 ${
          round
            ? "rounded-full border-2 border-white"
            : "rounded-[24px] border-2 border-[#222]"
        }`}
        style={{
          width: `${containerSize.width}px`,
          height: `${containerSize.height}px`,
        }}
      >
        <motion.div
          className="flex"
          drag="x"
          {...(loop
            ? {}
            : {
                dragConstraints: {
                  left: -trackItemOffset * (carouselItems.length - 1),
                  right: 0,
                },
              })}
          style={{
            gap: `${GAP}px`,
            perspective: 1000,
            perspectiveOrigin: `${
              currentIndex * trackItemOffset + itemWidth / 2
            }px 50%`,
            x,
            width: containerSize.width,
            height: containerSize.height,
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(currentIndex * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationComplete={handleAnimationComplete}
        >
          {carouselItems.map((item, index) => {
            const range = [
              -(index + 1) * trackItemOffset,
              -index * trackItemOffset,
              -(index - 1) * trackItemOffset,
            ];
            const outputRange = [90, 0, -90];
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const rotateY = useTransform(x, range, outputRange, {
              clamp: false,
            });

            return (
              <motion.div
                key={index}
                className={`relative shrink-0 flex flex-col overflow-hidden cursor-grab active:cursor-grabbing ${
                  round
                    ? "rounded-full border-0"
                    : "rounded-[12px] border border-[#222]"
                }`}
                style={{
                  width: itemWidth,
                  height: round ? itemWidth : "100%",
                  rotateY,
                }}
                transition={effectiveTransition}
              >
                {/* Full card image */}
                {item.image && (
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}

                {/* Content overlay */}
                <div className="relative z-10 p-5 flex flex-col justify-end h-full bg-black/30 text-white mb-2">
                  <div className="mb-1 font-black text-lg">{item.title}</div>
                  <p className="text-sm mb-3">{item.description}</p>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start bg-white text-black font-semibold text-sm px-4 py-2 rounded-lg hover:bg-gray-200 transition dark:bg-black dark:text-white dark:hover:bg-gray-800"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ⬇️ Buttons outside container */}
      <div className="flex justify-between mt-4 w-full max-w-[calc(800px*0.9)] mx-auto">
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              loop
                ? (prev - 1 + carouselItems.length) % carouselItems.length
                : Math.max(prev - 1, 0)
            )
          }
          className="bg-black/50 text-white rounded-full px-4 py-2 hover:bg-black/70 transition dark:bg-white/50 dark:text-black dark:hover:bg-white/70"
        >
          ◀
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              loop
                ? (prev + 1) % carouselItems.length
                : Math.min(prev + 1, carouselItems.length - 1)
            )
          }
          className="bg-black/50 text-white rounded-full px-4 py-2 hover:bg-black/70 transition dark:bg-white/50 dark:text-black dark:hover:bg-white/70"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
