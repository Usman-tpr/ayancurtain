"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";

const images = [
  "/images/IMG-20250324-WA0076.jpg",
  "/images/IMG-20250324-WA0075.jpg",
  "/images/IMG-20250324-WA0074.jpg",
  "/images/IMG-20250324-WA0073.jpg",
  "/images/IMG-20250324-WA0072.jpg",
  "/images/IMG-20250324-WA0071.jpg",
  "/images/IMG-20250324-WA0070.jpg",
  "/images/IMG-20250324-WA0069.jpg",
  "/images/IMG-20250324-WA0068.jpg",
  "/images/IMG-20250324-WA0067.jpg",
  "/images/IMG-20250324-WA0066.jpg",
  "/images/IMG-20250324-WA0065.jpg",
  "/images/WhatsApp Image 2025-03-24 at 20.55.32_a0498e87.jpg",
  "/images/WhatsApp Image 2025-03-24 at 20.55.32_ffe7e88b.jpg",
];

export default function ContinuousImageSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = 0;
    const speed = 50; // pixels per second

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      const scrollAmount = (speed * deltaTime) / 1000;
      container.scrollLeft += scrollAmount;

      // Reset scroll position when reaching the end
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gray-900 py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10 pointer-events-none" />
      
      <div
        ref={containerRef}
        className="flex space-x-8 overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-80 h-96 transform hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={src}
              alt={`Langsir ${index + 1}`}
              fill
              className="object-cover rounded-lg shadow-xl"
              sizes="(max-width: 768px) 100vw, 320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold">Koleksi Langsir {index + 1}</h3>
              <p className="text-sm opacity-90">Reka Bentuk Eksklusif</p>
            </div>
          </div>
        ))}
        {/* Duplicate images for seamless loop */}
        {images.map((src, index) => (
          <div
            key={`duplicate-${index}`}
            className="relative flex-shrink-0 w-80 h-96 transform hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={src}
              alt={`Langsir ${index + 1}`}
              fill
              className="object-cover rounded-lg shadow-xl"
              sizes="(max-width: 768px) 100vw, 320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold">Koleksi Langsir {index + 1}</h3>
              <p className="text-sm opacity-90">Reka Bentuk Eksklusif</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 