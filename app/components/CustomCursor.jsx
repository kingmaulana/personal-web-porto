"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const links = document.querySelectorAll("a");

    const enlargeCursor = () => {
      gsap.to(cursorRef.current, { scale: 1.5, duration: 0.2 });
    };

    const shrinkCursor = () => {
      gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
    };

    links.forEach((link) => {
      link.addEventListener("mouseenter", enlargeCursor);
      link.addEventListener("mouseleave", shrinkCursor);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", enlargeCursor);
        link.removeEventListener("mouseleave", shrinkCursor);
      });
    };
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };
    
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-12 h-12 bg-white/10 border border-white/50 rounded-full pointer-events-none mix-blend-difference z-100"
      style={{
        position: "fixed", // Menggunakan fixed agar tidak terpengaruh scroll
        left: 0,
        top: 0,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default CustomCursor;
