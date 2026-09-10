import { motion } from "framer-motion";

const Redes = () => (
  <section className="py-16 md:py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-3">IntiWatt también está ahí.</h2>
        <p className="text-muted-foreground mb-6">
          Seguimos nuestros proyectos, instalaciones y contenido técnico en redes.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a
            href="https://www.instagram.com/intiwatt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Instagram: @Intiwatt
          </a>
          <a
            href="https://www.linkedin.com/company/intiwatt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            LinkedIn: IntiWatt
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Redes;
