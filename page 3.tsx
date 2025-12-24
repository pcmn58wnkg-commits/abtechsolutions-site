export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Over <span className="text-blue-600">Elektro Expert</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meer dan 15 jaar ervaring in elektrische installaties in België. 
              Uw betrouwbare partner voor alle elektrische projecten.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ons Verhaal</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Elektro Expert werd opgericht in 2009 met een eenvoudige missie: 
                  betrouwbare en professionele elektrische diensten leveren aan huishoudens 
                  en bedrijven in heel België.
                </p>
                <p>
                  Wat begon als een klein familiebedrijf is uitgegroeid tot een van de 
                  meest vertrouwde namen in de elektrische sector. Onze groei is gebaseerd 
                  op kwaliteit, betrouwbaarheid en uitzonderlijke klantenservice.
                </p>
                <p>
                  Vandaag de dag zijn we trots op ons team van gecertificeerde elektriciens 
                  die dagelijks werken aan het veilig en efficiënt maken van elektrische 
                  installaties in heel België.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Tevreden Klanten</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-gray-600">Jaar Ervaring</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b09c9426-3283-4275-9ef2-5bf907aaa4ef.png"
                alt="Elektro Expert team van professionele elektriciens"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certificeringen & Kwalificaties
            </h2>
            <p className="text-xl text-gray-600">
              Volledig gecertificeerd en verzekerd volgens Belgische normen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/233abb62-da69-4d9e-ad58-f50da326548b.png"
                  alt="Synergrid certificering"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Synergrid Gecertificeerd</h3>
              <p className="text-gray-600 text-sm">
                Officiële erkenning voor netaansluitingen en keuringen
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b4edad9b-1903-4819-bdbe-4f96f027689e.png"
                  alt="Belgische elektrische normen"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AREI Conform</h3>
              <p className="text-gray-600 text-sm">
                Voldoet aan Algemeen Reglement Elektrische Installaties
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://placehold.co/64x64?text=Professionele+verzekering+certificaat"
                  alt="Professionele verzekering"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Volledig Verzekerd</h3>
              <p className="text-gray-600 text-sm">
                Beroepsaansprakelijkheid en werknemers verzekering
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/97050a6c-f84f-4bc5-b596-b7b6ee82ca78.png"
                  alt="Continue opleiding"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Continue Opleiding</h3>
              <p className="text-gray-600 text-sm">
                Regelmatige bijscholing voor nieuwe technologieën
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ons Ervaren Team</h2>
            <p className="text-xl text-gray-600">
              Professionele elektriciens met jarenlange ervaring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7e29e4dc-e166-4c9c-81c1-d3e52febcc13.png"
                alt="Jan Peeters - Hoofdelektricien"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Jan Peeters</h3>
              <p className="text-blue-600 font-medium mb-3">Hoofdelektricien & Oprichter</p>
              <p className="text-gray-600">
                15+ jaar ervaring in elektrische installaties. 
                Specialist in industriële en residentiële projecten.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ab73117c-8634-4830-b8e3-db8217e78c77.png"
                alt="Marie Dubois - Zonnepanelen Specialist"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Marie Dubois</h3>
              <p className="text-green-600 font-medium mb-3">Zonnepanelen Specialist</p>
              <p className="text-gray-600">
                Expert in duurzame energie oplossingen. 
                Gecertificeerd voor alle grote zonnepanelen merken.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dbd99e96-5119-4e05-b073-eea339648c91.png"
                alt="Tom Janssens - Netwerk Specialist"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tom Janssens</h3>
              <p className="text-purple-600 font-medium mb-3">Netwerk & Data Specialist</p>
              <p className="text-gray-600">
                Specialist in moderne netwerk installaties. 
                Expert in smart home en IoT oplossingen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Onze Waarden</h2>
            <p className="text-xl text-gray-600">
              De principes die ons dagelijks werk sturen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Veiligheid Eerst</h3>
              <p className="text-gray-600">
                Veiligheid staat altijd voorop in al onze werkzaamheden. 
                Strikte naleving van alle veiligheidsnormen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Kwaliteit</h3>
              <p className="text-gray-600">
                Alleen de beste materialen en vakmanschap. 
                Elke installatie wordt grondig gecontroleerd.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Betrouwbaarheid</h3>
              <p className="text-gray-600">
                Op tijd, binnen budget en volgens afspraak. 
                Onze klanten kunnen op ons rekenen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovatie</h3>
              <p className="text-gray-600">
                Altijd op de hoogte van de nieuwste technologieën 
                en duurzame oplossingen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Werkgebied</h2>
            <p className="text-xl text-gray-600">
              Actief in heel België voor al uw elektrische behoeften
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vlaanderen</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Antwerpen en omgeving</li>
                <li>• Gent en Oost-Vlaanderen</li>
                <li>• Brugge en West-Vlaanderen</li>
                <li>• Hasselt en Limburg</li>
                <li>• Leuven en Vlaams-Brabant</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Wallonië</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Luik en provincie Luik</li>
                <li>• Namen en provincie Namen</li>
                <li>• Charleroi en Henegouwen</li>
                <li>• Arlon en Luxemburg</li>
                <li>• Waals-Brabant</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Brussels Gewest</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Brussel-Stad</li>
                <li>• Alle 19 gemeenten</li>
                <li>• Residentieel en commercieel</li>
                <li>• 24/7 spoeddienst</li>
                <li>• Meertalige service</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Niet zeker of wij in uw gebied werken? Neem contact op - 
              wij kijken graag naar de mogelijkheden.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Opnemen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}