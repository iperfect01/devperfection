import { Link } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: Route not found");
  }, []);

  return (
    <div className="py-24 text-center">
      <SEO title="404 — Page Not Found" description="The page you’re looking for doesn’t exist on DevPerfection." path="/404" />
      <h1 className="text-5xl font-display font-semibold mb-3">404</h1>
      <p className="text-muted-foreground mb-6">Oops — we couldn’t find that page.</p>
      <Link to="/" className="rounded-md bg-accent text-accent-foreground px-5 py-3 hover:opacity-90 transition">Back to Home</Link>
    </div>
  );
};

export default NotFound;
