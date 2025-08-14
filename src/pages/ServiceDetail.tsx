import { useParams } from "react-router-dom";
import { services } from "@/data/services";
import { SEO } from "@/components/SEO";

const ServiceDetail = () => {
  const { slug } = useParams();
  const svc = services.find((s) => s.slug === slug) || services[0];
  return (
    <article>
      <SEO title={`${svc.title} — DevPerfection`} description={svc.summary} path={`/services/${svc.slug}`} jsonLd={{"@context":"https://schema.org","@type":"Service","name":svc.title, "description": svc.summary}} />
      <h1 className="text-4xl font-display font-semibold mb-4">{svc.title}</h1>
      <p className="text-muted-foreground max-w-2xl">{svc.summary}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-3">What you get</h2>
      <ul className="grid md:grid-cols-2 gap-3 text-sm">
        {svc.features.map((f) => (<li key={f} className="rounded-lg p-4 bg-card ring-1 ring-border">{f}</li>))}
      </ul>
    </article>
  );
};
export default ServiceDetail;
