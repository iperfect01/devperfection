import { projects } from "@/data/projects";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <article>
      <SEO title="Portfolio — DevPerfection" description="Featured case studies across ecommerce, fintech, and startups." path="/portfolio" />
      <h1 className="text-4xl font-display font-semibold mb-6">Case Studies</h1>
      <section className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Link key={p.slug} to={`/portfolio/${p.slug}`} className="rounded-xl overflow-hidden ring-1 ring-border bg-card">
            <img src={p.images[0]} alt={`${p.title} mock screenshot`} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{p.summary}</p>
            </div>
          </Link>
        ))}
      </section>
    </article>
  );
};
export default Portfolio;
