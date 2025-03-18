"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { toolsData } from "@/assets/assets";
import Image from "next/image";

const InfiniteScrollRight = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    gsap.to(marquee, {
      x: "50%", // Moves continuously to the left
      duration: 8, // Adjust speed
      ease: "linear",
      repeat: -1, // Infinite loop
    });
  }, []);

  return (
    <div className="w-full overflow-hidden mt-4">
      <div ref={marqueeRef} className="flex whitespace-nowrap gap-6">
        {[...toolsData].map((tool, index) => ( // Duplicate for smooth effect
          <div key={index} className="w-12 sm:w-14 aspect-square flex items-center justify-center">
            <Image src={tool} alt="tool" className="w-8 sm:w-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollRight;
