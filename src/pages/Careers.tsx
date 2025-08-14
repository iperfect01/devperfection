import { jobs } from "@/data/jobs";
import { SEO } from "@/components/SEO";

const Careers = () => {
  return (
    <article>
      <SEO title="Careers — DevPerfection" description="Join a bold, outcome-driven team building the future." path="/careers" />
      <h1 className="text-4xl font-display font-semibold mb-6">Careers</h1>
      <section className="space-y-4">
        {jobs.map((j) => (
          <div key={j.slug} className="rounded-xl p-6 bg-card ring-1 ring-border">
            <h3 className="font-semibold">{j.title}</h3>
            <p className="text-sm text-muted-foreground">{j.location} • {j.type}</p>
            <p className="text-sm mt-2">{j.description}</p>
            <button className="mt-3 rounded-md bg-accent text-accent-foreground px-4 py-2 hover:opacity-90 transition">Apply</button>
          </div>
        ))}
      </section>
    </article>
  );
};
export default Careers;
