import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { navLinks } from "@/components/Navbar";

const Hero = () => (
  <section className="relative min-h-[92vh] flex items-end pb-16 md:pb-24 overflow-hidden">
    <div className="absolute inset-0">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src={`${import.meta.env.BASE_URL}hero-video.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/35 to-foreground/10" />
    </div>

    <div className="container relative z-10 mx-auto px-4">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4"
      >
        IntiWatt
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-6xl font-serif text-primary-foreground max-w-2xl leading-tight mb-5"
      >
        Somos la Eficiencia Energética.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="text-primary-foreground/85 text-lg max-w-xl mb-9 leading-relaxed"
      >
        Diseñamos soluciones energéticas a partir de cómo realmente consume y opera cada cliente.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <Link
          to="/residencial"
          className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
        >
          Es para mi casa
        </Link>
        <Link
          to="/comercios-e-industrias"
          className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
        >
          Es para mi negocio o fábrica
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-primary-foreground/75"
      >
        {navLinks.map((l) => (
          <Link key={l.to} to={l.to} className="hover:text-primary transition-colors">
            {l.label}
          </Link>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
