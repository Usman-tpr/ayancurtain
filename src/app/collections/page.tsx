"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api, Curtain } from "@/services/api";

export default function Collections() {
  const [curtains, setCurtains] = useState<Curtain[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurtains = async () => {
      try {
        const data = await api.getAllCurtains();
        setCurtains(data);
      } catch (err) {
        setError('Failed to fetch curtains');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCurtains();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-xl">Loading collections...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  // Group curtains by category
  const collections = curtains.reduce((acc, curtain) => {
    if (!acc[curtain.category]) {
      acc[curtain.category] = [];
    }
    acc[curtain.category].push(curtain);
    return acc;
  }, {} as Record<string, Curtain[]>);

  return (
    <div className="min-h-screen pt-16">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Our Collections
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our carefully curated collections of premium curtains and drapes,
            designed to transform your living spaces.
          </p>
          {Object.entries(collections).map(([category, items]) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((curtain) => (
                  <div
                    key={curtain._id}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-64">
                      <Image
                        src={curtain.image}
                        alt={curtain.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{curtain.title}</h3>
                      <p className="text-gray-600 mb-4">{curtain.description}</p>
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-xl font-semibold">₹{curtain.price}</span>
                        <Link
                          href={`/custom?curtainId=${curtain._id}`}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Customize
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 