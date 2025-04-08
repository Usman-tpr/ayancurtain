"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

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
];

export default function FancyImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-96 mx-auto h-[80vh] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background Blur Effect */}
      <div className="absolute inset-0  z-10" />
      
      {/* Main Slider */}
      <div
        ref={containerRef}
        className="relative w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={src}
              alt={`Curtain Design ${index + 1}`}
              fill
              className="object-cover"
              priority={index === currentIndex}
              quality={100}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors group"
        >
          <svg
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors group"
        >
          <svg
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Text Overlay */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Reka Bentuk Langsir Eksklusif
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Temui koleksi langsir premium kami yang direka khas untuk ruang anda
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full filter blur-3xl" />
      </div>
    </div>
  );
} 