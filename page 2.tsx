"use client";

import { useState } from "react";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState("storingen");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Onze Professionele <span className="text-blue-600">Diensten</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete elektrische oplossingen voor uw huis of bedrijf. 
              Van spoedgevallen tot grote installaties - wij staan voor u klaar.
            </p>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedService("storingen")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedService === "storingen"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Elektrische Storingen
            </button>
            <button
              onClick={() => setSelectedService("zonnepanelen")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedService === "zonnepanelen"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Zonnepanelen Reparaties
            </button>
            <button
              onClick={() => setSelectedService("kabels")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedService === "kabels"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Data & Coax Kabels
            </button>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Elektrische Storingen */}
          {selectedService === "storingen" && (
            <div id="storingen">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Elektrische Storingen Oplossen
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Elektrische problemen kunnen gevaarlijk zijn en vereisen directe professionele aandacht. 
                    Onze gecertificeerde elektriciens zijn 24/7 beschikbaar voor spoedgevallen.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Onze Aanpak</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-3">1.</span>
                          <span>Snelle diagnose van het probleem</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-3">2.</span>
                          <span>Veiligheidscontrole van de installatie</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-3">3.</span>
                          <span>Professionele reparatie met kwaliteitsonderdelen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-3">4.</span>
                          <span>Eindcontrole en veiligheidscertificaat</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Veel Voorkomende Problemen</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Zekeringen Springen</h4>
                          <p className="text-gray-600 text-sm">Overbelasting of kortsluiting opsporen en oplossen</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Stopcontacten Defect</h4>
                          <p className="text-gray-600 text-sm">Vervanging en reparatie van stopcontacten</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Verlichting Problemen</h4>
                          <p className="text-gray-600 text-sm">Schakelaars, lampen en verlichtingscircuits</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Aardlekschakelaars</h4>
                          <p className="text-gray-600 text-sm">Controle en vervanging voor uw veiligheid</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/52b99627-c349-4e61-b03e-670023f83702.png"
                    alt="Elektricien repareert elektrische storing in meterkast"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Transparante Prijzen</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-semibold text-gray-900 mb-2">Spoedinterventie</h4>
                    <p className="text-2xl font-bold text-blue-600 mb-2">€85</p>
                    <p className="text-gray-600 text-sm">Eerste uur, 24/7 beschikbaar</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-semibold text-gray-900 mb-2">Standaard Reparatie</h4>
                    <p className="text-2xl font-bold text-blue-600 mb-2">€65</p>
                    <p className="text-gray-600 text-sm">Per uur, werkdagen 8-18u</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-semibold text-gray-900 mb-2">Diagnose</h4>
                    <p className="text-2xl font-bold text-blue-600 mb-2">€45</p>
                    <p className="text-gray-600 text-sm">Probleem identificatie</p>
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-6">
                  * Materiaalkosten niet inbegrepen. Gratis offerte vooraf.
                </p>
              </div>
            </div>
          )}

          {/* Zonnepanelen */}
          {selectedService === "zonnepanelen" && (
            <div id="zonnepanelen">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Zonnepanelen Reparaties & Onderhoud
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Professionele reparatie en onderhoud van bestaande zonnepanelen installaties. 
                    Wij herstellen defecten en optimaliseren de prestaties voor maximaal rendement.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Onze Reparatie Services</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-600 font-bold mr-3">✓</span>
                          <span>Diagnose van defecte zonnepanelen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 font-bold mr-3">✓</span>
                          <span>Inverter reparaties en vervanging</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 font-bold mr-3">✓</span>
                          <span>Paneel vervanging en herstel</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 font-bold mr-3">✓</span>
                          <span>Bekabeling en aansluitingen controleren</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 font-bold mr-3">✓</span>
                          <span>Prestatie optimalisatie en monitoring</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Veel Voorkomende Problemen</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Lage Opbrengst</h4>
                          <p className="text-gray-600 text-sm">Diagnose en optimalisatie van prestaties</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Inverter Defect</h4>
                          <p className="text-gray-600 text-sm">Reparatie of vervanging van inverters</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Beschadigde Panelen</h4>
                          <p className="text-gray-600 text-sm">Vervanging van defecte zonnepanelen</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Bekabeling Issues</h4>
                          <p className="text-gray-600 text-sm">Controle en herstel van aansluitingen</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a47edfcd-447b-46f4-9f2e-9094209c4648.png"
                    alt="Professionele zonnepanelen installatie op dak"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Transparante Reparatie Prijzen</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-semibold text-gray-900 mb-2">Diagnose</h4>
                    <p className="text-2xl font-bold text-green-600 mb-2">€75</p>
                    <p className="text-gray-600 text-sm">Complete systeemanalyse</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow border-2 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Reparatie</h4>
                    <p className="text-2xl font-bold text-green-600 mb-2">€65</p>
                    <p className="text-gray-600 text-sm">Per uur + materiaalkosten</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-semibold text-gray-900 mb-2">Onderhoud</h4>
                    <p className="text-2xl font-bold text-green-600 mb-2">€150</p>
                    <p className="text-gray-600 text-sm">Jaarlijks onderhoudscontract</p>
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-6">
                  * Materiaalkosten niet inbegrepen. Gratis offerte vooraf.
                </p>
              </div>
            </div>
          )}

          {/* Data & Coax Kabels */}
          {selectedService === "kabels" && (
            <div id="kabels">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Data & Coax Kabels Installatie
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Moderne woningen hebben betrouwbare internetverbindingen en TV-signalen nodig. 
                    Wij zorgen voor professionele kabelinstallaties voor optimale connectiviteit.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Onze Specialiteiten</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-purple-600 font-bold mr-3">•</span>
                          <span>Ethernet netwerk installatie (Cat6/Cat6A)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 font-bold mr-3">•</span>
                          <span>Coax kabels voor digitale TV en internet</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 font-bold mr-3">•</span>
                          <span>WiFi optimalisatie en access points</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 font-bold mr-3">•</span>
                          <span>Thuisnetwerk configuratie en beveiliging</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 font-bold mr-3">•</span>
                          <span>Smart home bekabeling</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Toepassingen</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Thuiskantoor</h4>
                          <p className="text-gray-600 text-sm">Stabiele internetverbinding voor werken</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Entertainment</h4>
                          <p className="text-gray-600 text-sm">4K TV en streaming in elke kamer</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Gaming Setup</h4>
                          <p className="text-gray-600 text-sm">Lage latency voor online gaming</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">Smart Home</h4>
                          <p className="text-gray-600 text-sm">IoT apparaten en automatisering</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/09a68eb5-4498-43f6-9a67-2c4566ca4288.png"
                    alt="Professionele data en coax kabel installatie"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Connectiviteit Pakketten</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-semibold text-gray-900 mb-2">Basis Netwerk</h4>
                    <p className="text-2xl font-bold text-purple-600 mb-2">€350</p>
                    <p className="text-gray-600 text-sm">5 ethernet aansluitingen</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-semibold text-gray-900 mb-2">Complete Woning</h4>
                    <p className="text-2xl font-bold text-purple-600 mb-2">€650</p>
                    <p className="text-gray-600 text-sm">10 ethernet + 5 coax aansluitingen</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h4 className="font-semibold text-gray-900 mb-2">Smart Home Ready</h4>
                    <p className="text-2xl font-bold text-purple-600 mb-2">€950</p>
                    <p className="text-gray-600 text-sm">15 ethernet + coax + WiFi optimalisatie</p>
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-6">
                  * Prijzen inclusief materiaal en installatie. Aangepaste oplossingen mogelijk.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Klaar Voor Uw Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Neem contact op voor een gratis offerte op maat. 
            Onze experts adviseren u graag over de beste oplossing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Gratis Offerte Aanvragen
            </a>
            <a
              href="tel:+3221234567"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Direct Bellen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}