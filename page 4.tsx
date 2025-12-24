"use client";

import { useState } from "react";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("alle");

  const projects = [
    {
      id: 1,
      title: "Moderne Villa Renovatie",
      category: "storingen",
      location: "Antwerpen",
      description: "Complete elektrische renovatie van een villa uit de jaren 70. Nieuwe meterkast, LED verlichting en smart home integratie.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e7dfb1fa-9680-462e-af85-06eda94d973d.png",
      features: ["Nieuwe meterkast", "LED verlichting", "Smart home", "Veiligheidskeuring"]
    },
    {
      id: 2,
      title: "Zonnepanelen Installatie Gezinswoning",
      category: "zonnepanelen",
      location: "Gent",
      description: "18 zonnepanelen (6kWp) installatie op gezinswoning. Inclusief inverter en monitoring systeem.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/62fe0ce1-0b01-4a34-bbdb-ff53548bbe47.png",
      features: ["18 panelen (6kWp)", "SolarEdge inverter", "Monitoring app", "25 jaar garantie"]
    },
    {
      id: 3,
      title: "Kantoorgebouw Netwerk Installatie",
      category: "kabels",
      location: "Brussel",
      description: "Complete netwerk infrastructuur voor kantoorgebouw. 50 ethernet aansluitingen en WiFi optimalisatie.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e7c2c501-701b-4dd0-8978-0bdd27f33d35.png",
      features: ["50 ethernet punten", "Cat6A bekabeling", "WiFi access points", "Netwerk configuratie"]
    },
    {
      id: 4,
      title: "Spoedinterventie Kortsluiting",
      category: "storingen",
      location: "Leuven",
      description: "24/7 spoedinterventie voor kortsluiting in keuken. Probleem opgelost binnen 2 uur.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7339fdb1-2b75-4819-aa49-ec380f0b86e4.png",
      features: ["24/7 spoeddienst", "Snelle diagnose", "Veilige reparatie", "Preventief advies"]
    },
    {
      id: 5,
      title: "Duurzame Energie Boerderij",
      category: "zonnepanelen",
      location: "Limburg",
      description: "Grote zonnepanelen installatie op boerderij. 30 panelen (10kWp) voor energieneutrale bedrijfsvoering.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/481a18ce-b0de-4deb-b343-3d16daddac54.png",
      features: ["30 panelen (10kWp)", "Driefase inverter", "Energieopslag", "ROI binnen 7 jaar"]
    },
    {
      id: 6,
      title: "Smart Home Entertainment Setup",
      category: "kabels",
      location: "Mechelen",
      description: "Complete entertainment setup met 4K TV distributie, surround sound bekabeling en gaming netwerk.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/148885d3-0da8-441a-a3e8-66ba17f2c323.png",
      features: ["4K TV distributie", "Surround sound", "Gaming netwerk", "Centrale bediening"]
    }
  ];

  const filteredProjects = selectedCategory === "alle" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ons <span className="text-blue-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek onze gerealiseerde projecten in heel België. 
              Van kleine reparaties tot grote installaties - kwaliteit staat voorop.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory("alle")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedCategory === "alle"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Alle Projecten
            </button>
            <button
              onClick={() => setSelectedCategory("storingen")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedCategory === "storingen"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Elektrische Storingen
            </button>
            <button
              onClick={() => setSelectedCategory("zonnepanelen")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedCategory === "zonnepanelen"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Zonnepanelen
            </button>
            <button
              onClick={() => setSelectedCategory("kabels")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedCategory === "kabels"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Data & Coax Kabels
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.category === "storingen" ? "bg-blue-100 text-blue-800" :
                      project.category === "zonnepanelen" ? "bg-green-100 text-green-800" :
                      "bg-purple-100 text-purple-800"
                    }`}>
                      {project.category === "storingen" ? "Elektrische Storingen" :
                       project.category === "zonnepanelen" ? "Zonnepanelen" :
                       "Data & Coax Kabels"}
                    </span>
                    <span className="text-gray-500 text-sm">{project.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Kenmerken:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 text-sm flex items-center">
                          <span className="text-green-600 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Wat Onze Klanten Zeggen
            </h2>
            <p className="text-xl text-gray-600">
              Echte ervaringen van tevreden klanten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dfa636a0-13ee-482d-9200-e311cc34e2cb.png"
                  alt="Peter Van Der Berg"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Peter Van Der Berg</h4>
                  <p className="text-gray-600 text-sm">Antwerpen</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Uitstekende service! De zonnepanelen installatie werd perfect uitgevoerd. 
                Het team was professioneel en de nazorg is fantastisch."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6e971aaf-a349-424f-90c7-20668a86c293.png"
                  alt="Sarah Janssens"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Janssens</h4>
                  <p className="text-gray-600 text-sm">Gent</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Snelle spoedinterventie toen onze elektriciteit uitviel. 
                Binnen het uur was alles opgelost. Zeer betrouwbaar!"
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f4dd9b25-ca71-4255-99d7-9c735a793b00.png"
                  alt="Marc Dubois"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Marc Dubois</h4>
                  <p className="text-gray-600 text-sm">Brussel</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Perfecte netwerk installatie voor ons kantoor. 
                Alles werkt vlekkeloos en de prijs was zeer eerlijk."
              </p>
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Onze Prestaties in Cijfers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Tevreden Klanten</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1200+</div>
              <div className="text-gray-600">Zonnepanelen Geïnstalleerd</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">300+</div>
              <div className="text-gray-600">Netwerk Installaties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Spoeddienst Beschikbaar</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Klaar Voor Uw Volgende Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Laat ons uw volgende succes verhaal worden. 
            Neem contact op voor een gratis offerte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Start Uw Project
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