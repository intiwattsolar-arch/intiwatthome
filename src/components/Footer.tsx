import { Link } from "react-router-dom";
import logo from "@/assets/logo-intiwatt.png";
import { navLinks } from "@/components/Navbar";

const Footer = () => (
  <footer className="bg-secondary border-t border-border py-14">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src={logo} alt="IntiWatt" className="h-9 w-9" />
            <span className="font-serif text-xl text-foreground">IntiWatt</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Eficiencia energética y soluciones fotovoltaicas. Córdoba y Santiago del Estero, Argentina.
          </p>
        </div>

        <div className="text-sm space-y-2.5">
          <p className="text-foreground font-medium mb-3">Navegación</p>
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="block text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
          <Link to="/obras" className="block text-muted-foreground hover:text-primary transition-colors">
            Nuestras obras
          </Link>
          <Link to="/calculadora" className="block text-muted-foreground hover:text-primary transition-colors">
            Calculadora básica
          </Link>
        </div>

        <div className="text-sm space-y-2.5">
          <p className="text-foreground font-medium mb-3">Contacto</p>
          <p className="text-muted-foreground">
            WhatsApp:{" "}
            <a href="https://wa.me/5493518670464" className="hover:text-primary transition-colors">
              +54 351 867 0464
            </a>
          </p>
          <p className="text-muted-foreground">
            <a href="mailto:info@intiwatt.com" className="hover:text-primary transition-colors">
              info@intiwatt.com
            </a>
          </p>
          <p className="text-muted-foreground">Córdoba y Santiago del Estero, Argentina</p>
          <p className="text-muted-foreground">
            <a
              href="https://www.instagram.com/intiwatt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Instagram
            </a>
            {" · "}
            <a
              href="https://www.linkedin.com/company/intiwatt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center">
        <p className="text-muted-foreground/70 text-xs">© 2026 IntiWatt. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
