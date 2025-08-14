import { SEO } from "@/components/SEO";

const tiers = [
  { name: 'Starter', price: '$200+', features: ['2–3 pages', 'Basic SEO', '2 weeks', 'Mobile responsive'] },
  { name: 'Growth', price: '$600+', features: ['5–8 pages', 'CMS & blog', '4–6 weeks', 'Advanced SEO', 'Analytics setup'] },
  { name: 'Scale', price: 'Custom', features: ['Web+Mobile+AI', 'A/B testing', 'Ongoing partnership', 'Custom integrations'] },
  { name: 'Enterprise', price: '$3k+', features: ['Multi-platform', 'Dedicated team', '8–12 weeks', 'Priority support', 'Custom features'] },
  { name: 'Consultation', price: '$100/hr', features: ['Strategy sessions', 'Code reviews', 'Technical guidance', 'Architecture planning'] },
  { name: 'Maintenance', price: '$100+/mo', features: ['Regular updates', 'Bug fixes', 'Performance monitoring', 'Security patches'] },
];

const Pricing = () => {
  return (
    <article>
      <SEO title="Pricing — DevPerfection" description="Transparent, outcomes-first pricing for websites, apps and AI." path="/pricing" />
      <h1 className="text-4xl font-display font-semibold mb-6">Pricing</h1>
      <section className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-xl p-6 bg-card ring-1 ring-border">
            <h3 className="font-semibold text-lg">{t.name}</h3>
            <p className="text-3xl font-display mt-2">{t.price}</p>
            <ul className="mt-3 text-sm">
              {t.features.map((f) => (<li key={f} className="py-1">{f}</li>))}
            </ul>
            <a href="#quote" className="mt-4 inline-block rounded-md bg-accent text-accent-foreground px-4 py-2 hover:opacity-90 transition">Request Quote</a>
          </div>
        ))}
      </section>
      <section id="quote" className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Request a Quote</h2>
        <form className="grid md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Quote requested!');}}>
          <input required className="rounded-md bg-secondary px-3 py-2 ring-1 ring-border" placeholder="Your name" />
          <input required type="email" className="rounded-md bg-secondary px-3 py-2 ring-1 ring-border" placeholder="Email" />
          <input className="md:col-span-2 rounded-md bg-secondary px-3 py-2 ring-1 ring-border" placeholder="Company" />
          <textarea required className="md:col-span-2 rounded-md bg-secondary px-3 py-2 ring-1 ring-border" placeholder="Project goals" rows={4} />
          <button className="md:col-span-2 rounded-md bg-accent text-accent-foreground px-4 py-2 hover:opacity-90 transition">Send</button>
        </form>
      </section>
    </article>
  );
};
export default Pricing;
