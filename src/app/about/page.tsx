import Image from "next/image";

export default function About() {
  const teamMembers = [
    {
      name: "Ahmad Ismail",
      role: "Pengasas & Ketua Pegawai Eksekutif",
      image: "/images/IMG-20250324-WA0065.jpg",
    },
    {
      name: "Siti Aminah",
      role: "Pengarah Reka Bentuk",
      image: "/images/WhatsApp Image 2025-03-24 at 20.55.32_a0498e87.jpg",
    },
    {
      name: "Muhammad Ali",
      role: "Pengurus Pengeluaran",
      image: "/images/WhatsApp Image 2025-03-24 at 20.55.32_ffe7e88b.jpg",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG-20250324-WA0076.jpg"
            alt="Tentang Ayan Curtains"
            fill
            className="object-cover brightness-75"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-xl md:text-2xl">Menghasilkan ruang indah sejak 1995</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Kisah Kami</h2>
              <p className="text-gray-600 text-lg mb-6">
                Ditubuhkan pada tahun 1995, Ayan Curtains bermula sebagai bengkel kecil dengan impian besar:
                untuk mengubah ruang biasa menjadi luar biasa melalui seni langsir dan hiasan tingkap.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Seiring dengan masa, kami telah berkembang menjadi pengeluar dan pembekal langsir terkemuka,
                dikenali dengan komitmen kami terhadap kualiti, kemahiran tangan, dan reka bentuk inovatif.
              </p>
              <p className="text-gray-600 text-lg">
                Hari ini, kami terus mengekalkan prinsip asas kami sambil mengadaptasi
                trend reka bentuk moden dan amalan lestari.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/IMG-20250324-WA0066.jpg"
                alt="Bengkel Kami"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kualiti",
                description:
                  "Kami hanya menggunakan bahan-bahan terbaik dan mengekalkan kawalan kualiti yang ketat pada setiap langkah pengeluaran.",
              },
              {
                title: "Inovasi",
                description:
                  "Kami sentiasa meneroka reka bentuk dan teknik baru untuk membawa idea-idea segar dalam hiasan tingkap.",
              },
              {
                title: "Kelestarian",
                description:
                  "Kami komited kepada amalan mesra alam dan penggunaan bahan-bahan lestari dalam proses pembuatan kami.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pasukan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 