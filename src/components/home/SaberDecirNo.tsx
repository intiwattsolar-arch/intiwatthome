import { motion } from "framer-motion";

const SaberDecirNo = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto border-l-2 border-primary pl-6 md:pl-10"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-6">
          No todos los proyectos necesitan una solución solar.
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Hay proyectos en los que las condiciones técnicas, el consumo o la inversión hacen que una instalación no
            sea la mejor decisión. En esos casos, se lo diremos.
          </p>
          <p>
            Porque para nosotros una buena recomendación no consiste en decir siempre que sí, sino en ayudarle a tomar
            una decisión con información suficiente.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SaberDecirNo;
