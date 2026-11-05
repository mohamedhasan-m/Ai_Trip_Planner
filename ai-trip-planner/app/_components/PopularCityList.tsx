"use client";

import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    category: "New York, USA",
    title: "Experience NYC – Times Square, Central Park & Broadway",
    src: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Tokyo, Japan",
    title: "Discover Tokyo – Shibuya, Temples & Cherry Blossoms",
    src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Rome, Italy",
    title: "Walk Through History – Colosseum, Vatican & Roman Forum",
    src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Dubai, UAE",
    title: "Luxury & Adventure – Burj Khalifa, Desert Safari & More",
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Kerala, India",
    title: "God's Own Country – Backwaters, Beaches & Green Hills",
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Paris, France",
    title: "Explore the City of Lights – Eiffel Tower & Louvre",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
  },
];

export function PopularCityList() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const interval = setInterval(() => {
      container.scrollBy({
        left: 320,
        behavior: "smooth",
      });

      // Restart from beginning
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-16">

      {/* Heading */}
      <div className="max-w-5xl mx-auto px-6 mb-10">

        <p className="text-blue-600 font-semibold text-sm md:text-base mb-2">
          Popular Destinations
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight">
          Explore popular cities
        </h2>

        <p className="text-neutral-500 text-base md:text-lg mt-3 max-w-3xl">
          Get inspired by amazing destinations around the world and discover
          your next adventure with AI Trip Planner.
        </p>

      </div>

      {/* Carousel Wrapper */}
      <div className="relative max-w-6xl mx-auto">

        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="
            absolute
            left-2
            md:-left-5
            top-1/2
            -translate-y-1/2
            z-20
            w-10
            h-10
            rounded-full
            bg-white
            shadow-lg
            border
            flex
            items-center
            justify-center
            hover:scale-105
            transition
          "
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="
            flex
            gap-4
            overflow-x-auto
            scroll-smooth
            px-12
            md:px-14
            py-4
            scrollbar-hide
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >

          {data.map((city, index) => (
            <div
              key={index}
              className="
                relative
                flex-shrink-0
                w-[220px]
                sm:w-[240px]
                md:w-[250px]
                h-[320px]
                md:h-[350px]
                rounded-2xl
                overflow-hidden
                group
                cursor-pointer
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >

              {/* Image */}
              <img
                src={city.src}
                alt={city.category}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* Dark Gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                "
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">

                <p className="text-sm font-semibold mb-2 text-white/90">
                  {city.category}
                </p>

                <h3 className="text-lg md:text-xl font-bold leading-snug">
                  {city.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="
            absolute
            right-2
            md:-right-5
            top-1/2
            -translate-y-1/2
            z-20
            w-10
            h-10
            rounded-full
            bg-white
            shadow-lg
            border
            flex
            items-center
            justify-center
            hover:scale-105
            transition
          "
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

    </section>
  );
}

export default PopularCityList;