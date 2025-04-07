"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

const ceoImages = [
  "/profile/IMG-20250406-WA0022.jpg",
  "/profile/IMG-20250406-WA0021.jpg",
  "/profile/IMG-20250406-WA0020.jpg",
  "/profile/IMG-20250406-WA0019.jpg",
  "/profile/IMG-20250406-WA0018.jpg",
  "/profile/IMG-20250406-WA0017.jpg",
];

export default function AboutTeamSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ceoImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[600px] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white text-center">
          Kenali Pasukan Kepimpinan Kami
        </h2>
        <div className="w-full md:w-1/2 relative h-[500px]">
          <div className="relative w-96 h-full">
            <Image
              src={ceoImages[currentImageIndex]}
              alt="Pasukan Kami"
              fill
              className="object-cover transition-opacity duration-500 rounded-lg"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-lg" />
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat" />
      </div>
    </div>
  );
} 