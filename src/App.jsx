export default function ZaakgroeiHomepage() {
  const problems = [
    'Je bent te afhankelijk van mond-tot-mondreclame.',
    'Je Google-profiel staat online, maar levert te weinig op.',
    'Je website ziet er oké uit, maar brengt weinig aanvragen binnen.',
    'Je hebt geen tijd of zin om met marketing bezig te zijn.',
  ];

  const services = [
    {
      title: 'Google-profiel optimalisatie',
      text: 'Ik zorg dat je Google Bedrijfsprofiel professioneel staat ingesteld zodat klanten je sneller vinden en contacteren.',
    },
    {
      title: 'Website die converteert',
      text: 'Een simpele, duidelijke website die bezoekers omzet in telefoontjes en offerteaanvragen.',
    },
    {
      title: 'Reviews en vertrouwen',
      text: 'Ik help je sterker overkomen met een betere reviewflow en duidelijke geloofwaardigheid.',
    },
    {
      title: 'Lokale zichtbaarheid',
      text: 'Ik zet je online aanwezigheid zo op dat je beter gevonden wordt in jouw regio.',
    },
  ];

  const steps = [
    {
      title: '1. Gratis mini-audit',
      text: 'Ik bekijk hoe jouw bedrijf er nu online voor staat en waar je klanten laat liggen.',
    },
    {
      title: '2. Setup',
      text: 'Ik zet je website en profiel scherp zodat klanten je sneller vertrouwen en contacteren.',
    },
    {
      title: '3. Optimalisatie',
      text: 'Ik verbeter je zichtbaarheid en houd je online aanwezigheid eenvoudig en duidelijk.',
    },
  ];

  const plans = [
    {
      name: 'Starter',
      price: '€399 eenmalig',
      items: [
        'Google-profiel basisoptimalisatie',
        '1 simpele conversiegerichte website',
        'Duidelijke CTA\'s: bellen of offerte aanvragen',
      ],
    },
    {
      name: 'Groei',
      price: '€129 / maand',
      items: [
        'Kleine updates en verbeteringen',
        'Review- en profielopvolging',
        'Maandelijkse optimalisatie',
      ],
      featured: true,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">Zaakgroei</div>
          <a
            href="#contact"
            className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            Vraag gratis audit aan
          </a>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
              Voor loodgieters en lokale vakmannen
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
              Meer loodgieterklanten via Google — zonder dat jij iets met marketing moet doen
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Ik zorg dat je beter gevonden wordt en meer aanvragen krijgt met een simpele website en een sterke online basis.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
              De meeste loodgieters verliezen elke week klanten omdat ze niet goed zichtbaar zijn op Google.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-slate-900 px-6 py-4 text-base font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Check mijn Google-profiel gratis
              </a>
              <a
                href="#werkwijze"
                className="rounded-2xl border border-slate-300 px-6 py-4 text-base font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Bekijk hoe het werkt
              </a>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-500 sm:grid-cols-2">
              <div>✓ Geen social media beheer</div>
              <div>✓ Gericht op meer aanvragen</div>
              <div>✓ Simpel en duidelijk</div>
              <div>✓ Voor lokale bedrijven</div>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-6 text-slate-500">
              Of je nu vooral dringende interventies doet of geplande werken — online zichtbaar zijn maakt het verschil tussen wachten op werk of zelf kiezen welke jobs je aanneemt.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
            <div className="text-sm font-medium text-slate-500">Wat je wint</div>
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-lg font-semibold">Meer telefoontjes</div>
                <p className="mt-2 text-slate-600">Maak het klanten makkelijk om je meteen te bellen of een offerte aan te vragen.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-lg font-semibold">Meer vertrouwen</div>
                <p className="mt-2 text-slate-600">Een professionele eerste indruk zorgt dat bezoekers sneller klant worden.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-lg font-semibold">Meer zichtbaarheid</div>
                <p className="mt-2 text-slate-600">Beter gevonden worden in jouw regio zonder dat jij zelf marketing moet doen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Herken je dit?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Veel vakmannen leveren goed werk, maar laten online kansen liggen. Daardoor lopen telefoontjes en aanvragen mis.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {problems.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 p-6 text-slate-700 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Wat ik voor je regel</h2>
            <p className="mt-4 text-lg text-slate-600">
              Geen moeilijke marketingtaal. Gewoon een duidelijke online basis die klanten helpt om jou te vinden en te contacteren.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="werkwijze" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Zo werkt het</h2>
          <p className="mt-4 text-lg text-slate-600">
            Simpel, snel en gericht op resultaat.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Wat ik voor je bekijk in een audit</h2>
            <p className="mt-4 text-lg text-slate-600">
              Geen vaag gesprek, maar een concrete check van waar je online klanten laat liggen.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              'Hoe goed je gevonden wordt op Google',
              'Waar je klanten verliest op je profiel of website',
              'Wat concurrenten in jouw regio beter doen',
              'Wat je meteen kan verbeteren voor meer aanvragen',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Wat je kan verwachten</h2>
            <p className="mt-4 text-lg text-slate-300">
              Een heldere online aanwezigheid die vertrouwen wekt en meer kans geeft op telefoontjes en offerteaanvragen.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              'Meer telefoontjes en aanvragen',
              'Betere zichtbaarheid op Google',
              'Professionelere eerste indruk',
              'Minder afhankelijk van toeval of via-via',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Simpel en duidelijk</h2>
          <p className="mt-4 text-lg text-slate-600">
            Geen complexe pakketten. Gewoon een duidelijke setup en opvolging.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 shadow-sm ring-1 ${
                plan.featured
                  ? 'bg-slate-900 text-white ring-slate-900'
                  : 'bg-white text-slate-900 ring-slate-200'
              }`}
            >
              <div className="text-sm font-medium opacity-80">{plan.name}</div>
              <div className="mt-3 text-3xl font-bold">{plan.price}</div>
              <div className="mt-6 space-y-3">
                {plan.items.map((item) => (
                  <div key={item} className="text-sm leading-6 opacity-90">
                    • {item}
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className={`mt-8 inline-flex rounded-2xl px-5 py-3 text-sm font-medium ${
                  plan.featured
                    ? 'bg-white text-slate-900'
                    : 'bg-slate-900 text-white'
                }`}
              >
                Start met een audit
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Wil je meer klanten zonder marketinggedoe?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Vraag een gratis mini-audit aan en ontdek waar jouw loodgietersbedrijf online kansen laat liggen.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@zaakgroei.be"
              className="rounded-2xl bg-slate-900 px-6 py-4 text-base font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Mail voor een gratis audit
            </a>
            <a
              href="tel:+32000000000"
              className="rounded-2xl border border-slate-300 px-6 py-4 text-base font-medium text-slate-700 transition hover:bg-white"
            >
              Bel direct
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

