"use client"
import Image from "next/image";
import Link from "next/link";
import CurtainSlider from "@/components/CurtainSlider";
import ImageSlider from "@/components/ImageSlider";
import AboutTeamSlider from "@/components/AboutTeamSlider";
import { useEffect, useState } from "react";
import { api, Curtain } from "@/services/api";

export default function Home() {
  const [featuredCurtains, setFeaturedCurtains] = useState<Curtain[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurtains = async () => {
      try {
        const curtains = await api.getAllCurtains();
        setFeaturedCurtains(curtains.slice(0, 3));
      } catch (error) {
        console.error('Gagal memuat langsir:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurtains();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG-20250324-WA0076.jpg"
            alt="Langsir elegan di ruang tamu moden"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ubah Ruang Anda dengan Langsir Elegan
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Temui koleksi premium langsir dan tirai khas kami
          </p>
          <Link
            href="/collections"
            className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Terokai Koleksi
          </Link>
        </div>
      </section>

      {/* About & Team Slider */}
     

      {/* Featured Collection Slider */}
      {!loading && featuredCurtains.length > 0 && (
        <CurtainSlider
          title="Koleksi Pilihan"
          description="Rasai keanggunan tertinggi dengan langsir mewah premium kami. Setiap helaian dihasilkan dengan bahan terbaik dan perhatian terhadap setiap butiran, mencipta pernyataan kecanggihan di rumah anda."
          images={featuredCurtains.map(curtain => curtain.image)}
        />
      )}

      {/* Modern Living Slider */}
      <CurtainSlider
        title="Hidup Moden"
        description="Ubah ruang hidup anda dengan reka bentuk langsir kontemporari kami. Sesuai untuk rumah moden, langsir ini menggabungkan fungsi dengan gaya terkini."
        images={[
          "/images/IMG-20250324-WA0072.jpg",
          "/images/IMG-20250324-WA0071.jpg",
          "/images/IMG-20250324-WA0070.jpg",
        ]}
        reverse
      />

      {/* Trending Designs Slider */}
      <ImageSlider
        title="Reka Bentuk Terkini"
        images={[
          "/images/IMG-20250324-WA0069.jpg",
          "/images/IMG-20250324-WA0068.jpg",
          "/images/IMG-20250324-WA0067.jpg",
          "/images/IMG-20250324-WA0066.jpg",
        ]}
      />

      {/* Premium Collection Slider */}
      <ImageSlider
        title="Koleksi Premium"
        images={[
          "/images/IMG-20250324-WA0065.jpg",
          "/images/WhatsApp Image 2025-03-24 at 20.55.32_a0498e87.jpg",
          "/images/WhatsApp Image 2025-03-24 at 20.55.32_ffe7e88b.jpg",
        ]}
      />
       <AboutTeamSlider />

      {/* Featured Collections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Koleksi Pilihan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {!loading && featuredCurtains.map((curtain) => (
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
                  <h3 className="text-xl font-semibold mb-2">{curtain.title}</h3>
                  <p className="text-gray-600">{curtain.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-semibold">RM{curtain.price}</span>
                    <Link
                      href={`/custom?curtainId=${curtain._id}`}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Tempah Khas →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Menghasilkan Ruang Cantik Sejak 1995
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Kami pakar dalam menghasilkan langsir khas yang sesuai dengan gaya dan ruang anda.
              Pasukan pakar kami memastikan kualiti kerja tangan dalam setiap butiran.
            </p>
            <Link
              href="/about"
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              Ketahui lebih lanjut tentang kami →
            </Link>
          </div>
          <div className="md:w-1/2 relative h-[400px]">
            <Image
              src="/images/IMG-20250324-WA0066.jpg"
              alt="Bengkel kami"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bersedia untuk Mengubah Ruang Anda?
          </h2>
          <p className="text-xl mb-8">
            Hubungi kami untuk konsultasi dan sebut harga percuma
          </p>
          <Link
            href="/contact"
            className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </div>
  );
}
