import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My App",
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
                href="/posts"
                className="hover:text-gray-500"
              >
                Posts
              </Link>
              <Link
                href="/dashboard"
                className="hover:text-gray-500"
              >
                Dashboard
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