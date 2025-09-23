import '../styles/globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Link1q from '../components/MetricsBeforeAfter'

export const metadata: Metadata = {
  title: "Payal Desai — Portfolio",
  description: "Scrum Master • Agile Project Manager • SAFe Agilist",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {/* <header className="border-b bg-white/60 backdrop-blur sticky top-0 z-10">
          <nav className="container py-4 flex items-center justify-between"> */}
        <header className="app-header sticky top-0 z-10">
          <nav className="container py-4 flex items-center justify-between">
            {/* <img src="/p-circle-64.png" alt="Payal logo" width={28} height={28} className="rounded-full" />
<span className="font-semibold ml-2">Payal Desai</span> */}
            <Link href="/" className="font-semibold tracking-tight text-lg">Payal Desai</Link>
            <div className="flex gap-4 text-sm">
              <a href="/about" className="hover:underline">About</a>
              <a href="/expertise" className="hover:underline">Expertise</a>
              <a href="/experience" className="hover:underline">Experience</a>
              <a href="/case-studies" className="hover:underline">Portfolio</a>
              <a href="/credentials" className="hover:underline">Credentials</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
            {/* <Link href="/" className="font-semibold tracking-tight text-lg">Payal Desai</Link>
            <a href="/case-studies" className="hover:underline">Case Studies</a>
            <a href="/how-i-work" className="hover:underline">How I Work</a>
            <a href="/skills" className="hover:underline">Skills</a>
            <a href="/work-modes" className="hover:underline">Work Modes</a>
            <a href="/contact" className="hover:underline">Contact</a> */}
          </nav>
        </header>
        <main className="container py-10">{children}</main>
        <footer className="border-t mt-16 bg-white">
          <div className="container py-6 text-sm text-slate-600">
            © {new Date().getFullYear()} Payal Desai. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
