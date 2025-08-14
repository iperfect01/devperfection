import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import { SEO } from "@/components/SEO";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) || products[0];
  return (
    <article>
      <SEO title={`${product.name} — DevPerfection`} description={product.description} path={`/shop/${product.slug}`} jsonLd={{"@context":"https://schema.org","@type":"Product","name":product.name}} />
      <h1 className="text-4xl font-display font-semibold mb-3">{product.name}</h1>
      <p className="text-muted-foreground max-w-2xl">{product.description}</p>
      <button className="mt-4 rounded-md bg-accent text-accent-foreground px-4 py-2 hover:opacity-90 transition">Mock Checkout — ${product.price}</button>
    </article>
  );
};
export default ProductDetail;
