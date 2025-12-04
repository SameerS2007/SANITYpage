"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  if (!pathname.startsWith("/studio")) {
    return (
      <nav className="border-b sticky top-0 bg-secondary-950/95 backdrop-blur-md text-secondary-50 border-secondary-800 z-50 shadow-lg">
        <div className="h-16 max-w-7xl p-4 mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-xl hover:text-primary-400 transition-colors group">
            <span className="group-hover:scale-110 inline-block transition-transform">✨</span>
            <span className="ml-2">Sameer</span>
          </Link>
          <ul className="hidden md:flex items-center justify-end space-x-8 text-sm font-semibold">
            <li>
              <Link href="/blog" className="hover:text-primary-400 transition-colors relative group">
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link href="/photos" className="hover:text-primary-400 transition-colors relative group">
                Photos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
