import { useParams } from "react-router-dom";
import { posts } from "@/data/posts";
import { SEO } from "@/components/SEO";

const PostDetail = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug) || posts[0];
  return (
    <article>
      <SEO title={`${post.title} — DevPerfection Blog`} description={post.excerpt} path={`/blog/${post.slug}`} type="article" jsonLd={{"@context":"https://schema.org","@type":"BlogPosting","headline":post.title}} />
      <h1 className="text-4xl font-display font-semibold mb-3">{post.title}</h1>
      <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()} • {post.tags.join(', ')}</p>
      <div className="prose prose-invert max-w-none mt-6">
        <p>{post.content}</p>
      </div>
    </article>
  );
};
export default PostDetail;
