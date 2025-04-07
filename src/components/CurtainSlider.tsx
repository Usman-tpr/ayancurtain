"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

interface CurtainSliderProps {
  images: string[];
  title: string;
  description: string;
  reverse?: boolean;
}

export default function CurtainSlider({ images, title, description, reverse = false }: CurtainSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => { 
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={`py-20 ${reverse ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
            <p className="text-gray-600 text-lg mb-8">{description}</p>
            <div className="flex gap-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
            <div className="absolute inset-0 transition-transform duration-1000 ease-in-out">
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
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 