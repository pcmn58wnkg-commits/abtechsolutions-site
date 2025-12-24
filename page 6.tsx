"use client";

import { useState } from "react";

export default function HomePage() {
  const [isQuoteFormVisible, setIsQuoteFormVisible] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Uw Betrouwbare
                <span className="text-blue-600"> Elektricien</span>
                <br />
                in <span className="text-green-600">België</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professionele elektrische installaties, zonnepanelen en kabelwerk. 
                Gecertificeerd volgens Belgische normen met 24/7 spoeddienst.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsQuoteFormVisible(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
                >
                  Gratis Offerte Aanvragen
                </button>
                <a
                  href="tel:+3221234567"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg text-center"
                >
                  Bel Nu: +32 (0)2 123 45 67
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <span className="ml-3 text-gray-700">Synergrid Gecertificeerd</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">24/7</span>
                  </div>
                  <span className="ml-3 text-gray-700">Spoeddienst</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/05dc8008-766b-4556-81b5-c4b604ed720b.png"
                alt="Professionele elektricien aan het werk met moderne elektrische installatie"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600">Jaar Ervaring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Onze Professionele Diensten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van elektrische storingen tot zonnepanelen reparaties - wij bieden 
              complete elektrische oplossingen voor uw huis of bedrijf.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/576734b4-b051-4e05-bd5c-27293d1eac50.png"
                  alt="Elektrische storing reparatie"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Elektrische Storingen Oplossen
              </h3>
              <p className="text-gray-600 mb-6">
                Snelle diagnose en reparatie van alle elektrische problemen in 
                huisinstallaties. 24/7 spoeddienst beschikbaar.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Zekeringen en schakelaars</li>
                <li>• Kortsluiting opsporing</li>
                <li>• Stopcontacten en verlichting</li>
                <li>• Veiligheidscontroles</li>
              </ul>
              <a
                href="/diensten#storingen"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Meer informatie →
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e01b1d82-05fa-4417-8651-98061d89ecee.png"
                  alt="Zonnepanelen installatie"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Zonnepanelen Reparaties
              </h3>
              <p className="text-gray-600 mb-6">
                Professionele reparatie en onderhoud van bestaande zonnepanelen 
                installaties. Diagnose, herstel en optimalisatie voor maximaal rendement.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Diagnose van defecten</li>
                <li>• Inverter reparaties</li>
                <li>• Paneel vervanging</li>
                <li>• Prestatie optimalisatie</li>
              </ul>
              <a
                href="/diensten#zonnepanelen"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Meer informatie →
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c231b51a-3da2-4d3e-8bda-26af8e0b6af9.png"
                  alt="Data en coax kabel installatie"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Data & Coax Kabels
              </h3>
              <p className="text-gray-600 mb-6">
                Professionele installatie van datakabels voor snelle internetverbindingen 
                en coaxkabels voor digitale TV en satellietontvangst.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Datakabels voor WiFi-netwerken</li>
                <li>• Coaxkabels voor digitale TV</li>
                <li>• Smart home bekabeling</li>
                <li>• Kantooropstellingen</li>
              </ul>
              <a
                href="/diensten#kabels"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                Meer informatie →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Waarom Kiezen Voor Elektro Expert?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">15+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Jaar Ervaring</h3>
              <p className="text-gray-600">Ruime ervaring in alle elektrische installaties</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Spoeddienst</h3>
              <p className="text-gray-600">Altijd bereikbaar voor urgente reparaties</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Gecertificeerd</h3>
              <p className="text-gray-600">Synergrid gecertificeerd en verzekerd</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">€</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eerlijke Prijzen</h3>
              <p className="text-gray-600">Transparante prijzen zonder verrassingen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Klaar Voor Uw Elektrische Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Neem vandaag nog contact op voor een gratis offerte. 
            Onze experts staan klaar om u te helpen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteFormVisible(true)}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Gratis Offerte Aanvragen
            </button>
            <a
              href="tel:+3221234567"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Direct Bellen
            </a>
          </div>
        </div>
      </section>

      {/* Quick Quote Modal */}
      {isQuoteFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Snelle Offerte</h3>
              <button
                onClick={() => setIsQuoteFormVisible(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefoon *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type Werk
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="storing">Elektrische Storing</option>
                  <option value="zonnepanelen">Zonnepanelen</option>
                  <option value="kabels">Data/Coax Kabels</option>
                  <option value="anders">Anders</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Beschrijving
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Beschrijf kort uw project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Verstuur Aanvraag
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}