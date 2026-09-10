import logo from "@/assets/logo-intiwatt.png";

const Footer = () => (
  <footer className="bg-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="IntiWatt" className="h-10 w-10" />
            <span className="font-serif text-xl text-primary-foreground">IntiWatt</span>
          </div>
          <p className="text-primary-foreground/60 text-sm">
            Energía solar residencial · Diseño, instalación y acompañamiento
          </p>
        </div>

        <div className="text-sm space-y-2">
          <p className="text-primary-foreground/80 font-medium mb-3">Contacto</p>
          <p className="text-primary-foreground/60">
            <a href="mailto:info@intiwatt.com" className="hover:text-primary transition-colors">info@intiwatt.com</a>
          </p>
          <p className="text-primary-foreground/60">
            WhatsApp Córdoba:{" "}
            <a href="https://wa.me/5493518670464" className="hover:text-primary transition-colors">+54 351 867 0464</a>
          </p>
          <p className="text-primary-foreground/60">
            WhatsApp Sgo. del Estero:{" "}
            <a href="https://wa.me/5493854164501" className="hover:text-primary transition-colors">+54 385 416 4501</a>
          </p>
          <p className="text-primary-foreground/60">
            Web:{" "}
            <a href="https://www.intiwatt.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              www.intiwatt.com
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
        <p className="text-primary-foreground/40 text-xs">© 2026 IntiWatt. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
