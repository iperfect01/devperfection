import { services } from "@/data/services";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <article>
      <SEO title="Services — DevPerfection" description="Web, mobile, UI/UX, branding, DevOps, and AI integration services built for results." path="/services" />
      <h1 className="text-4xl font-display font-semibold mb-6">Services</h1>
      <section className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.slug} className="rounded-xl p-6 bg-secondary/50 ring-1 ring-border">
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{s.summary}</p>
            <ul className="mt-3 text-sm list-disc list-inside">
              {s.features.slice(0, 3).map((f) => (<li key={f}>{f}</li>))}
            </ul>
            <Link className="mt-4 inline-block story-link text-accent" to={`/services/${s.slug}`}>Learn more</Link>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Services;
