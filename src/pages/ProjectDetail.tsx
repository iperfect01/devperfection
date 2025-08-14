import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { SEO } from "@/components/SEO";

const ProjectDetail = () => {
  const { slug } = useParams();
  const proj = projects.find((p) => p.slug === slug) || projects[0];
  return (
    <article>
      <SEO title={`${proj.title} — Case Study`} description={proj.summary} path={`/portfolio/${proj.slug}`} jsonLd={{"@context":"https://schema.org","@type":"CreativeWork","name":proj.title}} />
      <h1 className="text-4xl font-display font-semibold mb-4">{proj.title}</h1>
      <p className="text-muted-foreground max-w-2xl">{proj.summary}</p>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {proj.images.map((src, i) => (
          <img key={i} src={src} alt={`${proj.title} image ${i+1}`} className="w-full h-48 object-cover rounded-lg ring-1 ring-border" loading="lazy" />
        ))}
      </div>
      <section className="mt-8 grid md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tech</h2>
          <ul className="flex flex-wrap gap-2 text-sm">
            {proj.tech.map((t)=> (<li key={t} className="px-3 py-1 rounded-full bg-secondary/60 ring-1 ring-border">{t}</li>))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Results</h2>
          <ul className="list-disc list-inside text-sm">
            {proj.results.map((r)=> (<li key={r}>{r}</li>))}
          </ul>
        </div>
      </section>
    </article>
  );
};
export default ProjectDetail;
