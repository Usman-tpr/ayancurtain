"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { api, Curtain } from "@/services/api";

export default function FeaturedCollection() {
  const [curtains, setCurtains] = useState<Curtain[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurtains = async () => {
      try {
        const data = await api.getAllCurtains();
        setCurtains(data);
        setLoading(false);
      } catch (err) {
        setError("Gagal memuat koleksi langsir");
        setLoading(false);
      }
    };

    fetchCurtains();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Koleksi Pilihan
          </h2>
          <p className="text-xl text-gray-600">
            Temui koleksi langsir premium kami yang paling popular
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curtains.map((curtain) => (
            <div
              key={curtain._id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={curtain.image}
                  alt={curtain.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {curtain.title}
                  </h3>
                  <p className="text-white/90 text-sm">{curtain.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    RM{curtain.price}
                  </span>
                  <Link
                    href={`/custom?curtainId=${curtain._id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Tempah Khas
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 