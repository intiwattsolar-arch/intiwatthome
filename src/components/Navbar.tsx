import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-intiwatt.png";

export const navLinks = [
  { label: "Residencial", to: "/residencial" },
  { label: "Comercios e Industrias", to: "/comercios-e-industrias" },
  { label: "Nuestra metodología", to: "/metodologia" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Contacto", to: "/contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="IntiWatt" className="h-9 w-9" />
          <span className="font-serif text-xl text-foreground">IntiWatt</span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm transition-colors ${
                pathname === l.to ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Analizar mi proyecto
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Menú">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-foreground border-b border-border/60 last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium"
          >
            Analizar mi proyecto
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
