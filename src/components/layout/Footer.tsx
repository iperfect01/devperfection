import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container mx-auto py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-display text-lg mb-2">DevPerfection</h4>
          <p className="text-sm text-muted-foreground mb-4">Where innovation meets perfection.</p>
          <p className="text-sm">+250792650980<br/>devperfection0@gmail.com</p>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/careers" className="hover:text-accent">Careers</Link></li>
            <li><Link to="/legal/privacy" className="hover:text-accent">Privacy</Link></li>
            <li><Link to="/legal/terms" className="hover:text-accent">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Services</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/web-development" className="hover:text-accent">Web Development</Link></li>
            <li><Link to="/services/ui-ux" className="hover:text-accent">UI/UX Design</Link></li>
            <li><Link to="/services/ai-integration" className="hover:text-accent">AI Integration</Link></li>
            <li><Link to="/services/devops" className="hover:text-accent">DevOps</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Newsletter</h5>
          <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); alert("Subscribed! Welcome to DevPerfection."); }}>
            <input aria-label="Email" required type="email" placeholder="your@email.com" className="flex-1 rounded-md bg-secondary text-foreground placeholder:text-foreground/50 px-3 py-2 ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-accent" />
            <button className="rounded-md bg-accent text-accent-foreground px-4 py-2 hover:opacity-90 transition" type="submit">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} DevPerfection. All rights reserved.</div>
    </footer>
  );
};
