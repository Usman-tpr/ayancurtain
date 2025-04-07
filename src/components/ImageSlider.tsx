"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
  title: string;
}

export default function ImageSlider({ images, title }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (touchEnd - touchStart > 50) {
      // Swipe right
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{title}</h2>
        <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
          <div 
            className="absolute inset-0 transition-transform duration-1000 ease-in-out"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            ))}
          </div>
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-white w-4 md:w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 