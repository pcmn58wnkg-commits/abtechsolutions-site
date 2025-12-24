"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    onderwerp: "offerte",
    bericht: "",
    privacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({
        naam: "",
        email: "",
        telefoon: "",
        onderwerp: "offerte",
        bericht: "",
        privacy: false
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Neem <span className="text-blue-600">Contact</span> Op
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Heeft u vragen of wilt u een offerte aanvragen? 
              Wij staan klaar om u te helpen met al uw elektrische behoeften.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contactgegevens
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefoon</h3>
                    <p className="text-gray-600">+32 (0)2 123 45 67</p>
                    <p className="text-sm text-gray-500">24/7 spoeddienst beschikbaar</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-600 text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@elektro-expert.be</p>
                    <p className="text-sm text-gray-500">Reactie binnen 24 uur</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-purple-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Werkgebied</h3>
                    <p className="text-gray-600">Heel België</p>
                    <p className="text-sm text-gray-500">Vlaanderen, Wallonië & Brussel</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-orange-600 text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Openingstijden</h3>
                    <div className="text-gray-600">
                      <p>Ma-Vr: 8:00 - 18:00</p>
                      <p>Za: 9:00 - 16:00</p>
                      <p>Zo: Alleen spoedgevallen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-900 mb-2">🚨 Spoedgevallen</h3>
                <p className="text-red-700 mb-3">
                  Elektrische noodgevallen kunnen gevaarlijk zijn. 
                  Bij acute problemen, bel direct:
                </p>
                <a
                  href="tel:+3221234567"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
                >
                  Spoed: +32 (0)2 123 45 67
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Stuur Ons Een Bericht
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    ✅ Bedankt voor uw bericht! Wij nemen binnen 24 uur contact met u op.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    ❌ Er is iets misgegaan. Probeer het opnieuw of bel ons direct.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="naam"
                      name="naam"
                      required
                      value={formData.naam}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Uw volledige naam"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefoon *
                    </label>
                    <input
                      type="tel"
                      id="telefoon"
                      name="telefoon"
                      required
                      value={formData.telefoon}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+32 xxx xx xx xx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="uw.email@voorbeeld.be"
                  />
                </div>

                <div>
                  <label htmlFor="onderwerp" className="block text-sm font-medium text-gray-700 mb-2">
                    Onderwerp
                  </label>
                  <select
                    id="onderwerp"
                    name="onderwerp"
                    value={formData.onderwerp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="offerte">Offerte Aanvragen</option>
                    <option value="storing">Elektrische Storing</option>
                    <option value="zonnepanelen">Zonnepanelen Informatie</option>
                    <option value="kabels">Data/Coax Kabels</option>
                    <option value="onderhoud">Onderhoud & Service</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="bericht" className="block text-sm font-medium text-gray-700 mb-2">
                    Bericht *
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    required
                    rows={5}
                    value={formData.bericht}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Beschrijf uw project of probleem in detail..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    checked={formData.privacy}
                    onChange={handleInputChange}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    Ik ga akkoord met de verwerking van mijn gegevens conform de 
                    <a href="#" className="text-blue-600 hover:underline"> privacyverklaring</a> 
                    en de Belgische GDPR-wetgeving. *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold transition-colors"
                >
                  {isSubmitting ? "Versturen..." : "Verstuur Bericht"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ons Werkgebied in België
            </h2>
            <p className="text-xl text-gray-600">
              Wij zijn actief in alle Belgische provincies
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6c8cb3d5-5b30-46f4-9445-6534ef96a4c8.png"
                alt="Werkgebied kaart van België"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vlaanderen</h3>
                <p className="text-gray-600 text-sm">
                  Antwerpen, Gent, Brugge, Hasselt, Leuven en omgeving
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Wallonië</h3>
                <p className="text-gray-600 text-sm">
                  Luik, Namen, Charleroi, Arlon en alle Waalse provincies
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Brussels Gewest</h3>
                <p className="text-gray-600 text-sm">
                  Alle 19 gemeenten van het Brussels Hoofdstedelijk Gewest
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Veelgestelde Vragen
            </h2>
            <p className="text-xl text-gray-600">
              Snelle antwoorden op de meest gestelde vragen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Hoe snel kunnen jullie ter plaatse zijn bij een storing?
              </h3>
              <p className="text-gray-600">
                Voor spoedgevallen streven wij naar een responstijd van 2-4 uur. 
                Voor reguliere afspraken plannen wij meestal binnen 24-48 uur.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Zijn jullie verzekerd en gecertificeerd?
              </h3>
              <p className="text-gray-600">
                Ja, wij zijn volledig verzekerd en Synergrid gecertificeerd. 
                Al onze werkzaamheden voldoen aan de Belgische elektrische normen.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Wat kost een zonnepanelen installatie?
              </h3>
              <p className="text-gray-600">
                De kosten variëren afhankelijk van uw dak en energiebehoefte. 
                Een basis installatie start vanaf €8.500. Wij maken graag een gratis offerte.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Geven jullie garantie op het werk?
              </h3>
              <p className="text-gray-600">
                Ja, wij geven 2 jaar garantie op alle werkzaamheden en gebruiken 
                alleen kwaliteitsonderdelen met fabrieksgarantie.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/veelgestelde-vragen"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Alle FAQ's Bekijken
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}