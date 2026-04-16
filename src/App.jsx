export default function LocalBoostLandingPage() {
  const packages = [
    {
      name: "Starter",
      price: "€149",
      period: "/maand",
      description: "Voor kleine zaken die eindelijk professioneel online willen overkomen.",
      features: [
        "8 social posts per maand",
        "10 review-antwoorden",
        "1 promo-afbeelding",
        "Levering binnen 5 dagen",
      ],
    },
    {
      name: "Growth",
      price: "€299",
      period: "/maand",
      description: "Voor zaken die consistent zichtbaar willen blijven zonder extra personeel.",
      features: [
        "16 social posts per maand",
        "30 review-antwoorden",
        "2 promo-afbeeldingen",
        "Maandelijkse contentkalender",
      ],
      featured: true,
    },
    {
      name: "Pro",
      price: "€499",
      period: "/maand",
      description: "Voor zaken die meer leads willen en alles uit handen willen geven.",
      features: [
        "20 social posts per maand",
        "50 review-antwoorden",
        "3 promo-afbeeldingen",
        "Priority support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold leading-tight">
            Meer klanten voor lokale bedrijven — zonder dat ze zelf iets moeten doen
          </h1>
          <p className="mt-6 text-xl text-white/70">
            Wij maken en beheren je social media, beantwoorden reviews en zorgen dat je zaak er professioneel uitziet online — elke maand opnieuw.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="bg-white text-black px-6 py-3 rounded-xl font-medium">
              Gratis voorbeeld aanvragen
            </a>
            <a href="#prijzen" className="border border-white/20 px-6 py-3 rounded-xl">
              Bekijk prijzen
            </a>
          </div>

          <div className="mt-10 text-sm text-white/60">
            ✔ Geen contract • ✔ Snelle start • ✔ Speciaal voor lokale zaken
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold">Herkenbaar?</h2>
          <ul className="mt-8 space-y-4 text-white/70 text-lg">
            <li>• Je hebt weinig of geen tijd om te posten</li>
            <li>• Je reviews blijven onbeantwoord</li>
            <li>• Je pagina ziet er niet professioneel uit</li>
            <li>• Je verliest klanten aan concurrenten die wel zichtbaar zijn</li>
          </ul>

          <p className="mt-8 text-xl">
            👉 Dat is exact wat wij oplossen.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold">Wat wij voor jou doen</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              "Social media posts maken",
              "Reviews professioneel beantwoorden",
              "Promo visuals voor acties",
              "Contentplanning",
              "Snelle levering",
              "Alles uit handen genomen",
            ].map((item) => (
              <div key={item} className="p-6 border border-white/10 rounded-xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prijzen" className="border-y border-white/10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Eenvoudige maandelijkse pakketten</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {packages.map((pkg) => (
              <div key={pkg.name} className="p-6 border border-white/10 rounded-xl">
                <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                <p className="mt-2 text-white/60">{pkg.description}</p>
                <p className="text-3xl mt-4">{pkg.price}{pkg.period}</p>
                <ul className="mt-4 space-y-2 text-white/70">
                  {pkg.features.map((f) => <li key={f}>• {f}</li>)}
                </ul>
                <a href="#contact" className="block mt-6 bg-white text-black text-center py-2 rounded">
                  Start
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold">Wat klanten zeggen</h2>
          <div className="mt-10 space-y-6 text-white/70">
            <div className="border border-white/10 p-6 rounded-xl">
              “Onze Instagram ziet er eindelijk professioneel uit en we krijgen meer afspraken.”
            </div>
            <div className="border border-white/10 p-6 rounded-xl">
              “Ik heb geen tijd meer nodig om posts te maken. Alles wordt geregeld.”
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold">Vraag je gratis voorbeeld aan</h2>
          <p className="mt-4 text-white/70">
            Vul dit formulier in en je krijgt binnen 24u 2 voorbeeldposts op maat van jouw zaak.
          </p>

          <form action="https://formspree.io/f/YOUR_ID" method="POST" className="mt-8 space-y-4">
            <input name="name" required placeholder="Naam" className="w-full p-3 bg-black border border-white/10 rounded" />
            <input name="email" required type="email" placeholder="Email" className="w-full p-3 bg-black border border-white/10 rounded" />
            <input name="business" placeholder="Bedrijf" className="w-full p-3 bg-black border border-white/10 rounded" />
            <input name="instagram" placeholder="Instagram of website" className="w-full p-3 bg-black border border-white/10 rounded" />
            <button type="submit" className="w-full bg-white text-black py-3 rounded font-medium">
              Vraag gratis voorbeeld
            </button>
          </form>

          <p className="mt-6 text-sm text-white/50">
            👉 BELANGRIJK: vervang YOUR_ID door je Formspree ID zodat aanvragen werken.
          </p>
        </div>
      </section>

      <footer className="text-center text-white/40 py-10">
        © Zaakgroei
      </footer>
    </div>
  );
}