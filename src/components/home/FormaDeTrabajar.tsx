import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const pasos = [
  "Primero entendemos el consumo.",
  "Después analizamos el sitio.",
  "Luego dimensionamos.",
  "Finalmente evaluamos si la inversión tiene sentido.",
];

const FormaDeTrabajar = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">No empezamos por los paneles.</h2>
        <ol className="space-y-4 mb-8">
          {pasos.map((p, i) => (
            <li key={p} className="flex gap-4 items-baseline">
              <span className="font-serif text-primary text-lg w-6 shrink-0">{i + 1}.</span>
              <span className="text-muted-foreground leading-relaxed">{p}</span>
            </li>
          ))}
        </ol>
        <Link
          to="/metodologia"
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
        >
          Conozca nuestra metodología <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default FormaDeTrabajar;
