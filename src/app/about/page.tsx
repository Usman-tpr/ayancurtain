import Image from "next/image";

export default function About() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      image: "/images/IMG-20250324-WA0065.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Design Director",
      image: "/images/WhatsApp Image 2025-03-24 at 20.55.32_a0498e87.jpg",
    },
    {
      name: "Michael Chen",
      role: "Production Manager",
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
            alt="About Ayan Curtains"
            fill
            className="object-cover brightness-75"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl">Crafting beautiful spaces since 1995</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 1995, Ayan Curtains began as a small workshop with a big dream:
                to transform ordinary spaces into extraordinary ones through the art of
                window treatments.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Over the years, we've grown into a premier curtain manufacturer and
                supplier, known for our commitment to quality, craftsmanship, and
                innovative designs.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we continue to uphold our founding principles while embracing
                modern design trends and sustainable practices.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/IMG-20250324-WA0066.jpg"
                alt="Our Workshop"
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
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We use only the finest materials and maintain strict quality control at every step of production.",
              },
              {
                title: "Innovation",
                description:
                  "We continuously explore new designs and techniques to bring fresh ideas to window treatments.",
              },
              {
                title: "Sustainability",
                description:
                  "We're committed to eco-friendly practices and sustainable materials in our manufacturing process.",
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
            Our Team
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