import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import panel from "@/assets/energyear/panel-autoconsumo.jpg";

const Energyear = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={panel}
            alt="César Rodríguez Juárez durante el panel de autoconsumo en Energyear Argentina 2026"
            loading="lazy"
            className="w-full rounded-xl border border-border object-cover aspect-[4/3]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-5">
            IntiWatt en Energyear Argentina 2026
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              El 16 de septiembre, nuestro fundador y director técnico, César Rodríguez Juárez, participó como speaker
              en Energyear Argentina 2026, en Buenos Aires.
            </p>
            <p>
              Una conversación sobre autoconsumo, industria y renovables que permitió llevar nuestra mirada sobre una
              cuestión central para las empresas: cómo hacer más previsible el costo energético.
            </p>
          </div>
          <Link
            to="/energyear-argentina-2026"
            className="mt-7 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Conocer nuestra participación <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Energyear;
