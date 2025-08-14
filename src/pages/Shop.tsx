import { products } from "@/data/products";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <article>
      <SEO title="Shop — DevPerfection" description="Digital templates and assets to accelerate your product." path="/shop" />
      <h1 className="text-4xl font-display font-semibold mb-6">Shop</h1>
      <section className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <Link key={p.slug} to={`/shop/${p.slug}`} className="rounded-xl p-6 bg-card ring-1 ring-border">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-muted-foreground">{p.description}</p>
            <p className="mt-2 text-accent font-semibold">${p.price}</p>
          </Link>
        ))}
      </section>
    </article>
  );
};
export default Shop;
