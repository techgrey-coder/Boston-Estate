"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/img1.jpg", title: "Luxury Villa", desc: "Modern 5-bedroom villa with pool" },
  { src: "/img2.jpg", title: "City Apartment", desc: "2-bedroom apartment in city center" },
  { src: "/img3.jpg", title: "Beach House", desc: "Oceanfront property with private access" },
  { src: "/img4.jpg", title: "Penthouse", desc: "Top-floor penthouse with skyline views" },
  { src: "/img5.jpg", title: "Country Home", desc: "Quiet countryside living experience" },
  { src: "/img6.jpg", title: "Smart Home", desc: "Fully automated modern smart house" },
];

export function ProductCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollToIndex = (i: number) => {
    const el = containerRef.current;
    if (!el) return;

    const child = el.children[i] as HTMLElement;

    el.scrollTo({
      left: child.offsetLeft - 16,
      behavior: "smooth",
    });
  };

  /* AUTOPLAY */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    scrollToIndex(index);
  }, [index]);

  /* DRAG */
  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = containerRef.current;
    if (!slider) return;

    isDown.current = true;
    slider.classList.add("cursor-grabbing");

    startX.current = e.pageX - slider.offsetLeft;
    scrollLeft.current = slider.scrollLeft;

    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    isDown.current = false;

    const slider = containerRef.current;
    slider?.classList.remove("cursor-grabbing");

    setIsPaused(false);
  };

  const handleMouseUp = () => {
    isDown.current = false;

    const slider = containerRef.current;
    slider?.classList.remove("cursor-grabbing");

    setIsPaused(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;

    e.preventDefault();

    const slider = containerRef.current;
    if (!slider) return;

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX.current) * 1.5;

    slider.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="w-full flex flex-col items-center gap-6 overflow-hidden">
      
      {/* CAROUSEL */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="
          flex w-full gap-5
          px-4 md:px-10
          overflow-x-auto
          scroll-smooth
          snap-x snap-mandatory
          no-scrollbar
          cursor-grab
          select-none
        "
      >
        {images.map((item, i) => (
          <Card
            key={i}
            item={item}
            isActive={i === index}
          />
        ))}
      </div>

      {/* INDICATORS */}
      <div className="flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              h-2.5 rounded-full transition-all duration-300
              ${
                i === index
                  ? "w-7 bg-green-700"
                  : "w-2.5 bg-gray-300"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}

function Card({
  item,
  isActive,
}: {
  item: { src: string; title: string; desc: string };
  isActive: boolean;
}) {
  return (
    <div
      className={`
        relative shrink-0 snap-center
        min-w-[78%]
        sm:min-w-[48%]
        md:min-w-[34%]
        lg:min-w-[24%]
        h-[500px]
        rounded-[28px]
        overflow-hidden
        transition-all duration-500
        border border-white/10
        ${
          isActive
            ? "scale-[1.02] opacity-100 shadow-2xl"
            : "scale-[0.96] opacity-75"
        }
      `}
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        sizes="
          (max-width: 640px) 78vw,
          (max-width: 768px) 48vw,
          (max-width: 1024px) 34vw,
          24vw
        "
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 p-5 md:p-6 text-white">
        <h3 className="text-[22px] font-semibold tracking-[-0.03em]">
          {item.title}
        </h3>

        <p className="text-[14px] text-white/75 mt-2 leading-relaxed">
          {item.desc}
        </p>

        <a
          href="/properties#props"
          className="
            inline-flex mt-5
            px-4 py-3
            rounded-2xl
            bg-white text-black
            text-[10px] font-medium
            hover:scale-105
            active:scale-95
            transition-all duration-300
          "
        >
          View Property
        </a>
      </div>
    </div>
  );
}