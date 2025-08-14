import { SEO } from "@/components/SEO";

const Contact = () => {
  return (
    <article>
      <SEO title="Contact — DevPerfection" description="Let’s build something exceptional together. Get in touch today." path="/contact" />
      <h1 className="text-4xl font-display font-semibold mb-6">Contact</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <form className="rounded-xl p-6 bg-card ring-1 ring-border" onSubmit={(e)=>{e.preventDefault(); alert('Message sent!')}}>
          <div className="grid gap-3">
            <input required className="rounded-md bg-secondary px-3 py-2 ring-1 ring-border" placeholder="Name" />
            <input required type="email" className="rounded-md bg-secondary px-3 py-2 ring-1 ring-border" placeholder="Email" />
            <textarea required className="rounded-md bg-secondary px-3 py-2 ring-1 ring-border" rows={5} placeholder="How can we help?" />
            <button className="rounded-md bg-accent text-accent-foreground px-4 py-2 hover:opacity-90 transition">Send</button>
          </div>
        </form>
        <div className="rounded-xl p-6 bg-secondary/50 ring-1 ring-border">
          <h2 className="font-semibold mb-2">Our Office</h2>
          <p className="text-sm text-muted-foreground">Kigali, Rwanda — Remote-first</p>
          <div className="mt-4 aspect-[16/9] w-full rounded-md bg-primary/20 ring-1 ring-border grid place-items-center text-sm">Google Maps</div>
          <div className="mt-4 text-sm">
            <p>+250792650980</p>
            <p>devperfection0@gmail.com</p>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Contact;
