import { motion } from "framer-motion";
import { ClipboardCheck, Wrench, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    phase: "Antes",
    title: "Estudio y planificación",
    desc: "Evaluamos tu consumo, tu techo y tus necesidades. Diseñamos un sistema a medida y te explicamos cada paso antes de empezar.",
  },
  {
    icon: Wrench,
    phase: "Durante",
    title: "Instalación profesional",
    desc: "Nuestro equipo técnico se encarga de todo: montaje, conexión, pruebas y puesta en marcha. Sin que tengas que preocuparte por nada.",
  },
  {
    icon: HeadphonesIcon,
    phase: "Después",
    title: "Acompañamiento continuo",
    desc: "Monitoreamos tu sistema, hacemos mantenimiento preventivo y estamos disponibles para cualquier consulta. Tu inversión está cuidada.",
  },
];

const Postventa = () => (
  <section id="postventa" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Acompañamiento integral</p>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">
          Estamos con vos antes, durante y después
        </h2>
        <p className="text-muted-foreground mt-4">
          No te dejamos solo después de la instalación. Nuestro compromiso es de largo plazo.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.phase}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 border border-border text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
              <step.icon className="w-7 h-7 text-accent-foreground" />
            </div>
            <p className="text-primary font-medium text-xs tracking-widest uppercase mb-2">{step.phase}</p>
            <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Postventa;
