import { motion } from "framer-motion";
import inversorImg from "@/assets/inversor-huawei.jpg";

const Solution = () => (
  <section id="solucion" className="py-24 md:py-32 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">La solución IntiWatt</p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-6">
            Energía solar diseñada para tu hogar real
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              No vendemos paneles. Diseñamos sistemas completos que se adaptan a cómo vivís: cuánta energía usás, cuánto espacio tenés y qué necesitás resolver.
            </p>
            <p>
              Cada instalación es diferente porque cada hogar lo es. Por eso empezamos siempre con un estudio técnico, no con un presupuesto.
            </p>
            <p>
              El resultado es un sistema que funciona de verdad, se integra con orden en tu vivienda y te da previsibilidad durante años.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img
              src={inversorImg}
              alt="Inversor Huawei instalado profesionalmente"
              className="w-full h-72 object-cover"
            />
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border text-center shadow-sm w-full">
            <p className="text-5xl md:text-6xl font-serif text-primary mb-2">100+</p>
            <p className="text-muted-foreground text-sm">hogares confían en IntiWatt</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Solution;
