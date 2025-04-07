"use client"
import { useState } from "react";

export default function Custom() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    windowSize: "",
    fabricType: "",
    color: "",
    additionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Custom Curtain Orders
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Create your perfect curtains with our custom order service
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-1">
                  Room Type
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Room Type</option>
                  <option value="living">Living Room</option>
                  <option value="bedroom">Bedroom</option>
                  <option value="dining">Dining Room</option>
                  <option value="office">Office</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="windowSize" className="block text-sm font-medium text-gray-700 mb-1">
                  Window Size (Width x Height)
                </label>
                <input
                  type="text"
                  id="windowSize"
                  name="windowSize"
                  value={formData.windowSize}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 120cm x 180cm"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="fabricType" className="block text-sm font-medium text-gray-700 mb-1">
                  Fabric Type
                </label>
                <select
                  id="fabricType"
                  name="fabricType"
                  value={formData.fabricType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Fabric Type</option>
                  <option value="velvet">Velvet</option>
                  <option value="silk">Silk</option>
                  <option value="linen">Linen</option>
                  <option value="cotton">Cotton</option>
                  <option value="polyester">Polyester</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Color
              </label>
              <input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                required
                placeholder="e.g., Navy Blue, Beige"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Any specific requirements or preferences..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Submit Custom Order
            </button>
          </form>
        </div>
      </section>
    </div>
  );
} 