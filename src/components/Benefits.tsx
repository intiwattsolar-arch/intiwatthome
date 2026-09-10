import { motion } from "framer-motion";
import { PiggyBank, Shield, Sofa, Home, FileCheck, Zap } from "lucide-react";

const benefits = [
  {
    icon: PiggyBank,
    title: "Ahorro razonable",
    desc: "Reducí tu factura entre un 50% y un 80%, según tu consumo y tipo de sistema. Sin promesas infladas.",
  },
  {
    icon: Shield,
    title: "Tranquilidad",
    desc: "Sabés cuánto vas a gastar en energía. Sin sorpresas bimestrales ni aumentos imprevistos.",
  },
  {
    icon: Sofa,
    title: "Confort sostenido",
    desc: "Usá tus electrodomésticos con normalidad. El sistema trabaja en silencio, de fondo.",
  },
  {
    icon: Home,
    title: "Valor del inmueble",
    desc: "Una vivienda con energía solar es más atractiva, más eficiente y vale más en el mercado.",
  },
  {
    icon: FileCheck,
    title: "Usuario Generador y Prosumidor 4.0",
    desc: "Te ayudamos a tramitar tu habilitación como Usuario Generador y acceder al régimen Prosumidor 4.0 para inyectar excedentes a la red.",
  },
  {
    icon: Zap,
    title: "Sistema a medida, sin sobras ni faltantes",
    desc: "Diseñamos cada proyecto para que la generación se ajuste a tu consumo real. El objetivo es que no sobre ni falte: máximo aprovechamiento, mínimo desperdicio.",
  },
];

const Benefits = () => (
  <section id="beneficios" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Beneficios concretos</p>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">
          Lo que realmente cambia en tu casa
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-5"
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <b.icon className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
