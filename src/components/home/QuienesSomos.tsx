import { motion } from "framer-motion";

const QuienesSomos = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-6">
          Ingeniería para tomar mejores decisiones energéticas.
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            IntiWatt nace de la experiencia técnica y la formación especializada en energía solar, con una mirada
            puesta en algo muy concreto: que cada proyecto tenga sentido en la realidad.
          </p>
          <p>
            La empresa está formada sobre una base de formación especializada en el Instituto de Energía Solar de la
            Universidad Politécnica de Madrid (IES-UPM) y experiencia en proyectos fotovoltaicos en España y Argentina.
          </p>
          <p className="text-foreground font-serif text-xl leading-snug pt-2">
            Donde otros venden equipos, nosotros diseñamos resultados energéticos reales.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default QuienesSomos;
