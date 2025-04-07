import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayan Curtains - Kualiti & Gaya",
  description: "Pembuat langsir premium dengan reka bentuk moden dan kualiti terbaik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms">
      <body className={inter.className}>
        <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Ayan Curtains
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/collections" className="text-gray-600 hover:text-gray-900">
                Koleksi
              </Link>
              <Link href="/custom" className="text-gray-600 hover:text-gray-900">
                Tempahan Khas
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                Tentang Kami
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Hubungi
              </Link>
            </div>
          </nav>
        </header>
        <main className="pt-16">{children}</main>
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
                  No. 123, Jalan Utama,<br />
                  Kuala Lumpur, Malaysia<br />
                  Tel: +60 12-345 6789<br />
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
