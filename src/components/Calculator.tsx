import { motion } from "framer-motion";
import { Calculator as CalcIcon } from "lucide-react";

const CalculatorSection = () => (
  <section id="calculadora" className="py-24 md:py-32 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
          <CalcIcon className="w-8 h-8 text-accent-foreground" />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
          Calculá tu ahorro
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Descubrí cuánto podés ahorrar con energía solar según tu consumo actual. Nuestra herramienta te da un estimado rápido y sin compromiso.
        </p>
        {/* TODO: aquí va el link a la página de la calculadora de ahorro */}
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity text-base"
        >
          <CalcIcon className="w-5 h-5" />
          Ir a la calculadora
        </a>
        <p className="text-muted-foreground text-xs mt-4">Próximamente disponible</p>
      </motion.div>
    </div>
  </section>
);

export default CalculatorSection;
