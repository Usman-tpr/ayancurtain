"use client"
import { useState } from "react";
import Image from "next/image";

export default function CustomOrders() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to your backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <Image
              src="/images/logo.jpg"
              alt="Ayan Curtains Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tempahan Khas</h1>
          <p className="text-xl text-gray-600">
            Sila isi borang di bawah untuk tempahan langsir khas anda
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Penuh
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan nama penuh anda"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                Nombor Telefon
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Contoh: 012-3456789"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Lokasi
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan alamat lengkap anda"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Hantar Tempahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 