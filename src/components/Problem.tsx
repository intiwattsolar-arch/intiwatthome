import { motion } from "framer-motion";
import { TrendingUp, HelpCircle, Zap } from "lucide-react";

const items = [
  {
    icon: TrendingUp,
    title: "Facturas que no paran de subir",
    desc: "Cada bimestre, la cuenta de luz aumenta. Y no hay forma de predecir cuánto va a costar el próximo.",
  },
  {
    icon: HelpCircle,
    title: "Falta de control sobre tu consumo",
    desc: "No sabés cuánto gastás ni por qué. La factura llega y sólo queda pagarla.",
  },
  {
    icon: Zap,
    title: "Dependencia total de la red",
    desc: "Cortes, aumentos, cambios de tarifa. Tu hogar depende de decisiones que no controlás.",
  },
];

const Problem = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">El problema cotidiano</p>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">
          Tu factura eléctrica no debería ser una sorpresa
        </h2>
        <p className="text-muted-foreground mt-4">
          Miles de hogares enfrentan el mismo dilema cada mes. Y la tendencia no cambia.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
              <item.icon className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
