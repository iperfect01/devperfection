import { Link, NavLink } from "react-router-dom";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/shop", label: "Shop" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => setMounted(true), []);
  const resolved = theme === "system" ? systemTheme : theme;

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <nav className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-accent/20 ring-1 ring-accent/40" />
          <span className="font-display text-xl tracking-tight">DevPerfection</span>
        </Link>
        <ul className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `story-link transition-colors ${isActive ? "text-accent" : "text-foreground/80 hover:text-foreground"}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="secondary" className="hidden sm:inline-flex hover-scale">
            <Link to="/pricing">Request Quote</Link>
          </Button>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="md:hidden" aria-label="Open menu">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur">
              <div className="flex flex-col gap-6 mt-6">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `text-lg font-medium transition-colors ${
                          isActive ? "text-accent" : "text-foreground/80 hover:text-foreground"
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
                
                <div className="border-t pt-4 flex flex-col gap-4">
                  <Button asChild size="sm" variant="secondary" className="w-full">
                    <Link to="/pricing" onClick={() => setIsOpen(false)}>Request Quote</Link>
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="icon" 
                      variant="outline" 
                      aria-label="Toggle theme" 
                      onClick={() => setTheme(resolved === "dark" ? "light" : "dark")}
                      className="flex-1"
                    >
                      {mounted && resolved === "dark" ? (
                        <span aria-hidden>🌙</span>
                      ) : (
                        <span aria-hidden>☀️</span>
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "fr" : "en")}
                      aria-label="Toggle language"
                      className="flex-1"
                    >
                      {i18n.language === "en" ? "FR" : "EN"}
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Controls */}
          <Button size="icon" variant="outline" aria-label="Toggle theme" onClick={() => setTheme(resolved === "dark" ? "light" : "dark")} className="hidden md:inline-flex">
            {mounted && resolved === "dark" ? (
              <span aria-hidden>🌙</span>
            ) : (
              <span aria-hidden>☀️</span>
            )}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => i18n.changeLanguage(i18n.language === "en" ? "fr" : "en")}
            aria-label="Toggle language"
            className="hidden md:inline-flex"
          >
            {i18n.language === "en" ? "FR" : "EN"}
          </Button>
        </div>
      </nav>
    </header>
  );
};
