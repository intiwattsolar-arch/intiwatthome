import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const accesos = [
  { title: "Residencial", desc: "Soluciones energéticas para viviendas.", to: "/residencial" },
  {
    title: "Comercios e Industrias",
    desc: "Soluciones para empresas, comercios y operaciones industriales.",
    to: "/comercios-e-industrias",
  },
  { title: "Nuestras obras", desc: "Proyectos y trabajos realizados por IntiWatt.", to: "/obras" },
  { title: "Calculadora básica", desc: "Una herramienta sencilla para obtener una primera orientación.", to: "/calculadora" },
];

const Accesos = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5">
        {accesos.map((a, i) => (
          <motion.div
            key={a.to}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <Link
              to={a.to}
              className="group block h-full bg-card rounded-xl border border-border p-7 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-serif text-xl text-foreground">{a.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Accesos;
