import { SEO } from "@/components/SEO";
import { ThreeHero } from "@/components/ThreeHero";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-16">
      <SEO title="DevPerfection — Where innovation meets perfection" description="A bold digital agency building high-performance web, mobile, AI and brand experiences that convert." path="/" />

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="font-display text-accent tracking-wide">{t('tagline')}</p>
          <h1 className="mt-2 text-5xl md:text-6xl font-display font-semibold leading-tight">Precision in Code. Perfection in Delivery.</h1>
          <p className="mt-4 text-muted-foreground max-w-prose">From elegant user interfaces to powerful backend systems, our work is driven by innovation, attention to detail, and a deep understanding of what makes digital experiences succeed. Our team of skilled developers, designers, and strategists brings together creativity and technical mastery to deliver solutions that stand the test of time.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/contact" className="rounded-md bg-accent text-accent-foreground px-5 py-3 hover:opacity-90 transition hover-scale">{t('cta')}</Link>
            <Link to="/portfolio" className="rounded-md px-5 py-3 ring-1 ring-border bg-secondary hover:bg-secondary/70 transition">See case studies</Link>
          </div>
        </div>
        <ThreeHero />
      </section>

      <section aria-labelledby="vp" className="grid md:grid-cols-3 gap-6">
        <h2 id="vp" className="sr-only">Value propositions</h2>
        {[{h:'Performance by design',p:'Lighthouse-friendly and conversion-focused from day one.'},{h:'Systems, not pages',p:'Design systems for speed, consistency and scale.'},{h:'Practical AI',p:'Assistants and automations that earn their keep.'}].map((v)=> (
          <div key={v.h} className="rounded-xl p-6 bg-card ring-1 ring-border shadow-[var(--shadow-elegant)]">
            <h3 className="font-semibold">{v.h}</h3>
            <p className="text-sm text-muted-foreground mt-2">{v.p}</p>
          </div>
        ))}
      </section>

      <section aria-labelledby="featured" className="grid md:grid-cols-2 gap-6">
        <h2 id="featured" className="sr-only">Featured case studies</h2>
        <Link to="/portfolio/apollo-commerce" className="rounded-xl overflow-hidden ring-1 ring-border bg-card">
          <img src="/src/assets/portfolio/apollo.png" alt="Apollo Commerce storefront mockup" className="w-full h-48 object-cover" loading="lazy" />
          <div className="p-6"><h3 className="font-semibold">Apollo Commerce</h3><p className="text-sm text-muted-foreground mt-2">+32% conversion with blazing storefront performance.</p></div>
        </Link>
        <Link to="/portfolio/neon-bank" className="rounded-xl overflow-hidden ring-1 ring-border bg-card">
          <img src="/src/assets/portfolio/bank.png" alt="Neon Bank mobile app screens" className="w-full h-48 object-cover" loading="lazy" />
          <div className="p-6"><h3 className="font-semibold">Neon Bank</h3><p className="text-sm text-muted-foreground mt-2">Secure mobile banking with real-time insights.</p></div>
        </Link>
      </section>

      <section aria-labelledby="services" className="rounded-xl p-6 bg-secondary/50 ring-1 ring-border">
        <h2 id="services" className="text-2xl font-semibold mb-3">What we do</h2>
        <ul className="grid md:grid-cols-3 gap-4 text-sm">
          {['Web Development','Mobile Apps','UI/UX Design','Branding','DevOps','AI Integration'].map(s => (
            <li key={s} className="rounded-lg p-4 bg-card ring-1 ring-border">{s}</li>
          ))}
        </ul>
        <Link to="/services" className="mt-4 inline-block story-link text-accent">Explore services</Link>
      </section>
    </div>
  );
};

export default Index;
