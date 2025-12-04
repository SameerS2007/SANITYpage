import Container from "./components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-800 animate-gradient">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <Container>
          <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center space-y-12 py-20 relative z-10">
            <div className="space-y-6 animate-float">
              <div className="inline-block">
                <span className="text-6xl md:text-8xl">👋</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent animate-gradient">
                Hey, I'm Sameer
              </h1>
            </div>

            <div className="space-y-6 max-w-3xl">
              <p className="text-2xl md:text-3xl font-medium text-secondary-100 leading-relaxed">
                I build websites and applications. Always learning, always improving.
              </p>
              <p className="text-lg md:text-xl text-secondary-300">
                Developer • Designer • Problem Solver
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 relative z-20">
              <Link
                href="/blog"
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-secondary-950 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 relative z-10"
              >
                <span>Check out the blog</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/photos"
                className="px-8 py-4 border-2 border-primary-400 bg-secondary-800/50 backdrop-blur-sm text-primary-300 rounded-xl font-semibold text-lg hover:bg-secondary-700 hover:border-primary-300 hover:scale-105 transition-all duration-300 relative z-10"
              >
                See some photos
              </Link>
            </div>

            <div className="pt-8 space-y-4">
              <p className="text-sm font-semibold text-secondary-400 uppercase tracking-wider">Stuff I Use</p>
              <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
                {['Next.js', 'React', 'TypeScript', 'Sanity CMS', 'Tailwind CSS', 'Web Design', 'UI/UX'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary-800/80 backdrop-blur-sm border border-secondary-700 rounded-full text-sm font-medium text-secondary-200 hover:bg-secondary-700 hover:border-primary-500 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-12 animate-bounce">
              <p className="text-secondary-400 text-sm">↓ keep scrolling ↓</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-secondary-900 border-t border-secondary-800">
        <Container>
          <div className="py-20 space-y-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-50">About This Site</h2>
              <div className="space-y-4 text-lg text-secondary-300 leading-relaxed">
                <p>
                  This is my personal website. I write about development, design, and projects I'm working on.
                </p>
                <p>
                  Built with <span className="font-semibold text-primary-400">Next.js</span> and 
                  <span className="font-semibold text-primary-400"> Sanity</span>. 
                  Designed to be fast, accessible, and easy to use.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
