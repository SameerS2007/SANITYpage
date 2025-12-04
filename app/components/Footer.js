"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (!pathname.startsWith("/studio")) {
    return (
      <footer className="border-t text-center p-8 text-sm bg-gradient-to-b from-secondary-900 to-secondary-950 text-secondary-200 border-secondary-800 mt-auto">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🚀</span>
            <p className="font-semibold text-base">&copy; {new Date().getFullYear()} Sameer</p>
          </div>
          <p className="text-secondary-400 text-xs">
            Built with <span className="font-semibold">Next.js</span> and <span className="font-semibold">Sanity</span>
          </p>
          <div className="pt-4 text-secondary-500 text-xs">
            <p>Thanks for visiting 👋</p>
          </div>
        </div>
      </footer>
    );
  }
}
