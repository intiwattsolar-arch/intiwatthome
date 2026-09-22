import { motion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";

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
        <SocialLinks className="justify-center gap-6" iconClassName="w-6 h-6" />
      </motion.div>
    </div>
  </section>
);

export default Redes;
