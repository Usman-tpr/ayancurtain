"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="ms">
      <body className={inter.className}>
        <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/images/logo.jpg"
                  alt="Ayan Curtains Logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <span className="text-2xl md:text-2xl font-bold text-gray-900">Ayan Curtains</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link 
                  href="/collections" 
                  className="text-gray-600 hover:text-gray-900 font-medium hover:scale-105 transition-transform"
                >
                  Koleksi
                </Link>
                <Link 
                  href="/custom" 
                  className="text-gray-600 hover:text-gray-900 font-medium hover:scale-105 transition-transform"
                >
                  Tempahan Khas
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-gray-900 font-medium hover:scale-105 transition-transform"
                >
                  Tentang Kami
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Hubungi
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-3 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <div
              className={`md:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="py-4 space-y-4">
                <Link
                  href="/collections"
                  className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-md transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Koleksi
                </Link>
                <Link
                  href="/custom"
                  className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-md transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tempahan Khas
                </Link>
                <Link
                  href="/about"
                  className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-3 rounded-md transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tentang Kami
                </Link>
                <Link
                  href="/contact"
                  className="block bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hubungi
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="pt-24">{children}</main>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/60192444349"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Ayan Curtains</h3>
                <p className="text-gray-400">
                  Menghasilkan langsir berkualiti tinggi sejak 1995
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Pautan Pantas</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/collections" className="text-gray-400 hover:text-white">
                      Koleksi
                    </Link>
                  </li>
                  <li>
                    <Link href="/custom" className="text-gray-400 hover:text-white">
                      Tempahan Khas
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white">
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white">
                      Hubungi
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
                <p className="text-gray-400">
                  M.G02A Apartment Saujana<br />
                  Petaling Jaya, Selangor<br />
                  Poskod: 47820, Malaysia<br />
                  Tel: +60 19-244 4349<br />
                  Email: info@ayancurtains.com
                </p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Ayan Curtains. Hak Cipta Terpelihara.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
