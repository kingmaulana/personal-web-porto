"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { toolsData } from "@/assets/assets";
import Image from "next/image";

const InfiniteScroll = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    gsap.to(marquee, {
      x: "-50%", // Move left smoothly
      duration: 15, // Adjust speed
      ease: "linear",
      repeat: -1, // Infinite loop
    });
  }, []);

  return (
    <div className="overflow-hidden w-full px-5 py-15">
      <div className="flex w-max" ref={marqueeRef}>
        {[...toolsData, ...toolsData].map((tool, index) => (
          <div key={index} className="w-16 sm:w-20 mx-4 flex items-center justify-center">
            <Image src={tool} alt="tool" width={50} height={50} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
