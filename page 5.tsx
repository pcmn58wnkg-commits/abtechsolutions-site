"use client";

import { useState } from "react";

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      category: "Algemeen",
      question: "Hoe snel kunnen jullie ter plaatse zijn bij een storing?",
      answer: "Voor spoedgevallen streven wij naar een responstijd van 2-4 uur, 24/7. Voor reguliere afspraken plannen wij meestal binnen 24-48 uur. Bij levensgevaarlijke situaties adviseren wij om eerst de hoofdschakelaar uit te zetten en direct te bellen."
    },
    {
      id: 2,
      category: "Algemeen",
      question: "Zijn jullie verzekerd en gecertificeerd?",
      answer: "Ja, wij zijn volledig verzekerd met beroepsaansprakelijkheid en Synergrid gecertificeerd. Al onze elektriciens hebben de vereiste diploma's en certificaten. Onze werkzaamheden voldoen aan het AREI (Algemeen Reglement Elektrische Installaties) en andere Belgische normen."
    },
    {
      id: 3,
      category: "Algemeen",
      question: "Welke garantie geven jullie op het werk?",
      answer: "Wij geven 2 jaar garantie op alle werkzaamheden en installaties. Voor materialen hanteren wij de fabrieksgarantie (meestal 5-25 jaar afhankelijk van het product). Bij zonnepanelen geven wij 25 jaar productgarantie en 10 jaar installatiegarantie."
    },
    {
      id: 4,
      category: "Storingen",
      question: "Wat moet ik doen als mijn zekeringen blijven springen?",
      answer: "Zet eerst alle apparaten uit en probeer de zekering opnieuw in te schakelen. Als deze direct weer springt, is er waarschijnlijk een kortsluiting. Schakel de hoofdschakelaar uit en bel ons direct. Probeer nooit zelf aan de meterkast te sleutelen."
    },
    {
      id: 5,
      category: "Storingen",
      question: "Mijn stopcontacten werken niet meer, wat nu?",
      answer: "Controleer eerst of de aardlekschakelaar nog ingeschakeld is. Zo niet, probeer deze voorzichtig weer in te schakelen. Lukt dit niet of springt deze direct weer uit, dan is er een probleem dat professionele aandacht vereist. Bel ons voor een snelle diagnose."
    },
    {
      id: 6,
      category: "Storingen",
      question: "Is een elektrische storing gevaarlijk?",
      answer: "Elektrische storingen kunnen inderdaad gevaarlijk zijn. Tekenen van gevaar zijn: brandlucht, vonken, warme stopcontacten of schakelaars, en frequent springende zekeringen. Bij deze symptomen: schakel de hoofdschakelaar uit en bel direct een elektricien."
    },
    {
      id: 7,
      category: "Zonnepanelen",
      question: "Wat kost een zonnepanelen installatie?",
      answer: "De kosten variëren afhankelijk van uw dak, energiebehoefte en type panelen. Een basis installatie (12 panelen, 4kWp) start vanaf €8.500. Een populaire installatie (18 panelen, 6kWp) kost ongeveer €12.500. Wij maken graag een gratis offerte op maat."
    },
    {
      id: 8,
      category: "Zonnepanelen",
      question: "Hoe lang duurt de installatie van zonnepanelen?",
      answer: "Een standaard installatie duurt 1-2 dagen, afhankelijk van de grootte en complexiteit. De voorbereiding (vergunningen, dakonderzoek) duurt 2-4 weken. Na installatie volgt nog een keuring door Synergrid voordat u kunt terugleveren aan het net."
    },
    {
      id: 9,
      category: "Zonnepanelen",
      question: "Zijn er nog subsidies beschikbaar voor zonnepanelen?",
      answer: "In België variëren subsidies per gewest. Vlaanderen heeft de terugdraaiende teller tot 2030, Wallonië heeft Qualiwatt certificaten, en Brussel heeft eigen premies. Wij adviseren u graag over de actuele mogelijkheden en helpen met aanvragen."
    },
    {
      id: 10,
      category: "Zonnepanelen",
      question: "Wat gebeurt er met overtollige stroom?",
      answer: "Overtollige stroom wordt teruggeleverd aan het elektriciteitsnet. In Vlaanderen draait uw meter terug tot 2030. In Wallonië en Brussel krijgt u certificaten of een vergoeding. Wij adviseren ook over batterijopslag voor maximale zelfconsumptie."
    },
    {
      id: 11,
      category: "Kabels",
      question: "Wat is het verschil tussen Cat5e, Cat6 en Cat6A kabels?",
      answer: "Cat5e ondersteunt tot 1 Gbps, Cat6 tot 10 Gbps over korte afstand, en Cat6A tot 10 Gbps over 100 meter. Voor toekomstbestendigheid adviseren wij Cat6A voor nieuwe installaties, vooral voor 4K streaming en gaming."
    },
    {
      id: 12,
      category: "Kabels",
      question: "Kan ik zelf netwerkkabels trekken?",
      answer: "Hoewel het technisch mogelijk is, adviseren wij professionele installatie. Verkeerde bekabeling kan prestatieproblemen veroorzaken. Wij zorgen voor correcte routing, afscherming tegen interferentie en professionele afwerking met wandcontactdozen."
    },
    {
      id: 13,
      category: "Kabels",
      question: "Hoe verbeter ik mijn WiFi bereik?",
      answer: "Oplossingen zijn: betere router plaatsing, WiFi versterkers, mesh systemen, of professionele access points. Wij analyseren uw woning en adviseren de beste oplossing. Vaak is een combinatie van bekabelde access points de meest betrouwbare oplossing."
    },
    {
      id: 14,
      category: "Prijzen",
      question: "Hoe worden de kosten berekend?",
      answer: "Wij hanteren transparante uurtarieven: €65/uur voor standaard werk (werkdagen 8-18u), €85/uur voor spoedinterventies. Materiaalkosten worden apart berekend tegen inkoopprijs + 15%. Voor grote projecten maken wij een vaste prijs offerte."
    },
    {
      id: 15,
      category: "Prijzen",
      question: "Zijn er extra kosten voor verplaatsing?",
      answer: "Binnen een straal van 30km van onze basis zijn er geen verplaatsingskosten. Voor verdere afstanden berekenen wij €0,50 per km. Bij spoedinterventies zijn verplaatsingskosten altijd inbegrepen in het uurtarief."
    },
    {
      id: 16,
      category: "Service",
      question: "Bieden jullie onderhoudscontracten aan?",
      answer: "Ja, wij bieden jaarlijkse onderhoudscontracten voor zonnepanelen (€150/jaar) en elektrische installaties (€200/jaar). Dit omvat jaarlijkse controle, prioriteit bij storingen, en 10% korting op reparaties."
    },
    {
      id: 17,
      category: "Service",
      question: "Wat gebeurt er na de installatie?",
      answer: "Na elke installatie krijgt u een uitgebreid rapport, garantiecertificaat en gebruiksaanwijzing. Voor zonnepanelen installeren wij monitoring software. Wij bellen na 1 maand om te controleren of alles naar wens functioneert."
    }
  ];

  const categories = ["Alle", "Algemeen", "Storingen", "Zonnepanelen", "Kabels", "Prijzen", "Service"];
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const filteredFAQs = selectedCategory === "Alle" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Veelgestelde <span className="text-blue-600">Vragen</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vind snel antwoorden op de meest gestelde vragen over onze diensten, 
              prijzen en elektrische installaties in België.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mr-3 ${
                      faq.category === "Algemeen" ? "bg-blue-100 text-blue-800" :
                      faq.category === "Storingen" ? "bg-red-100 text-red-800" :
                      faq.category === "Zonnepanelen" ? "bg-green-100 text-green-800" :
                      faq.category === "Kabels" ? "bg-purple-100 text-purple-800" :
                      faq.category === "Prijzen" ? "bg-orange-100 text-orange-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {faq.category}
                    </span>
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                  </div>
                  <span className={`text-2xl transition-transform ${
                    openFAQ === faq.id ? "rotate-45" : ""
                  }`}>
                    +
                  </span>
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🚨 Spoedgevallen
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Heeft u een elektrisch noodgeval? Aarzel niet om direct te bellen. 
              Veiligheid staat voorop!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+3221234567"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
              >
                Spoed: +32 (0)2 123 45 67
              </a>
              <a
                href="/contact"
                className="bg-white text-red-600 border-2 border-red-600 hover:bg-red-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Reguliere Afspraak
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Veiligheidstips
            </h2>
            <p className="text-xl text-gray-600">
              Belangrijke veiligheidsinformatie voor elektrische installaties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-gray-900 mb-3">⚠️ Waarschuwingssignalen</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Brandlucht bij stopcontacten</li>
                <li>• Vonken bij schakelaars</li>
                <li>• Warme stopcontacten of kabels</li>
                <li>• Frequent springende zekeringen</li>
                <li>• Tintelende sensatie bij aanraking</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="font-semibold text-gray-900 mb-3">🚨 Bij Noodgevallen</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Schakel hoofdschakelaar uit</li>
                <li>• Raak niets aan met natte handen</li>
                <li>• Bel direct een elektricien</li>
                <li>• Gebruik geen water bij brand</li>
                <li>• Evacueer bij ernstige situaties</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-gray-900 mb-3">✅ Preventie</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Jaarlijkse controle installatie</li>
                <li>• Overbelasting voorkomen</li>
                <li>• Kwaliteit stopcontacten gebruiken</li>
                <li>• Geen DIY aan meterkast</li>
                <li>• Professionele installatie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Vraag Niet Beantwoord?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Neem gerust contact op. Onze experts beantwoorden graag al uw vragen 
            over elektrische installaties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Stel Uw Vraag
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