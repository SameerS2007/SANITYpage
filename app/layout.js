import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sameer | Developer & Designer",
  description: "Welcome to Sameer's personal website. Explore blog posts, photography, and creative projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-primary-950 text-secondary-50`} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
