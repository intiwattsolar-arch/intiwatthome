import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Estudio",
    desc: "Analizamos tus facturas, tu consumo real y las condiciones de tu vivienda.",
  },
  {
    num: "02",
    title: "Diseño",
    desc: "Creamos un sistema a medida, dimensionado para tu hogar y tu presupuesto.",
  },
  {
    num: "03",
    title: "Instalación",
    desc: "Montaje profesional, prolijo y sin complicaciones. Tu casa queda en orden.",
  },
  {
    num: "04",
    title: "Acompañamiento",
    desc: "Seguimiento real, monitoreo y soporte. No desaparecemos después de instalar.",
  },
];

const Process = () => (
  <section id="proceso" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Cómo trabajamos</p>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">
          Un proceso pensado para que no tengas que pensar
        </h2>
        <p className="text-muted-foreground mt-4">Cuatro pasos. Sin letra chica. Sin sorpresas.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <span className="text-5xl font-serif text-primary/20">{step.num}</span>
            <h3 className="font-serif text-xl text-foreground mt-2 mb-3">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
