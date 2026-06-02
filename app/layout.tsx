import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";

import "./globals.css";
import "@waline/client/waline.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "逸風Ventus's Blog",
  description: "My Next.js App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className}>
      <body className="min-h-screen bg-white text-black">
        
        {/* Navbar */}
        <nav className="border-b bg-white">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
              
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold"
            >
              My Blog
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="hover:text-gray-500"
              >
                Home
              </Link>
              <Link
                href="/tools"
                className="hover:text-gray-500"
              >
                Tools
              </Link>
              <Link
                href="/blog"
                className="hover:text-gray-500"
              >
                Posts
              </Link>
              <Link
                href="/guestbook"
                className="hover:text-gray-500"
              >
                Guestbook
              </Link>
              <Link
                href="/about"
                className="hover:text-gray-500"
              >
                About
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}