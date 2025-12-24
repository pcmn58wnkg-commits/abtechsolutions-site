import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elektro Expert België | Professionele Elektricien Services",
  description: "Professionele elektricien in België. Elektrische storingen oplossen, zonnepanelen installatie, data- en coaxkabels. Gecertificeerd en betrouwbaar.",
  keywords: "elektricien belgië, zonnepanelen installatie, elektrische storing, data kabels, coax kabels, synergrid",
  authors: [{ name: "Elektro Expert België" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Elektro Expert België | Professionele Elektricien Services",
    description: "Professionele elektricien in België. Elektrische storingen oplossen, zonnepanelen installatie, data- en coaxkabels.",
    type: "website",
    locale: "nl_BE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="BE" />
        <meta name="geo.placename" content="België" />
        <meta name="language" content="Dutch" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">EE</span>
                  </div>
                  <span className="ml-3 text-xl font-bold text-gray-900">
                    Elektro Expert
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a
                    href="/"
                    className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="/diensten"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Diensten
                  </a>
                  <a
                    href="/over-ons"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Over Ons
                  </a>
                  <a
                    href="/portfolio"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Portfolio
                  </a>
                  <a
                    href="/contact"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    Contact
                  </a>
                  <a
                    href="/veelgestelde-vragen"
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    FAQ
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <div className="hidden md:block">
                <a
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Offerte Aanvragen
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="bg-gray-50 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open hoofdmenu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
                <a
                  href="/"
                  className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="/diensten"
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                >
                  Diensten
                </a>
                <a
                  href="/over-ons"
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                >
                  Over Ons
                </a>
                <a
                  href="/portfolio"
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                >
                  Portfolio
                </a>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                >
                  Contact
                </a>
                <a
                  href="/veelgestelde-vragen"
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                >
                  FAQ
                </a>
                <a
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-lg text-base font-medium mt-4"
                >
                  Offerte Aanvragen
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">EE</span>
                  </div>
                  <span className="ml-3 text-xl font-bold">Elektro Expert</span>
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  Uw betrouwbare partner voor alle elektrische installaties in België. 
                  Gecertificeerd, ervaren en altijd bereikbaar voor spoedgevallen.
                </p>
                <div className="flex space-x-4">
                  <span className="text-sm text-gray-400">Synergrid Gecertificeerd</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-400">24/7 Spoeddienst</span>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Snelle Links</h3>
                <ul className="space-y-2">
                  <li><a href="/diensten" className="text-gray-300 hover:text-white transition-colors">Onze Diensten</a></li>
                  <li><a href="/over-ons" className="text-gray-300 hover:text-white transition-colors">Over Ons</a></li>
                  <li><a href="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                  <li><a href="/veelgestelde-vragen" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>📞 +32 (0)2 123 45 67</li>
                  <li>✉️ info@elektro-expert.be</li>
                  <li>📍 België, Alle Provincies</li>
                  <li>🕒 Ma-Vr: 8:00-18:00</li>
                  <li>🚨 24/7 Spoeddienst</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Elektro Expert België. Alle rechten voorbehouden. 
                | Voldoet aan Belgische elektrische normen en regelgeving.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}