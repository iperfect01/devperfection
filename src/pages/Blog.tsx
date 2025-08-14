import { posts } from "@/data/posts";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <article>
      <SEO title="Blog — DevPerfection" description="Insights on performance, UX, AI and product strategy." path="/blog" />
      <h1 className="text-4xl font-display font-semibold mb-6">Blog</h1>
      <section className="space-y-6">
        {posts.map((p) => (
          <article key={p.slug} className="p-6 rounded-xl bg-card ring-1 ring-border">
            <h2 className="text-xl font-semibold"><Link to={`/blog/${p.slug}`} className="hover:text-accent">{p.title}</Link></h2>
            <p className="text-xs text-muted-foreground mt-1">{new Date(p.date).toLocaleDateString()} — {p.tags.join(', ')}</p>
            <p className="text-sm mt-2">{p.excerpt}</p>
            <Link to={`/blog/${p.slug}`} className="story-link text-accent mt-2 inline-block">Read more</Link>
          </article>
        ))}
      </section>
    </article>
  );
};
export default Blog;
