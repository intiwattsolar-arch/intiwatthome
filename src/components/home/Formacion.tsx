import { motion } from "framer-motion";
import certificado from "@/assets/certificado-ies-upm.png.asset.json";

const Formacion = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-5">
            Formación especializada en energía solar.
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Nuestra base técnica proviene del curso de <strong className="text-foreground">Técnico/a de Instalación
              de Sistemas Solares Fotovoltaicos</strong> del Instituto de Energía Solar de la Universidad Politécnica
              de Madrid (IES-UPM).
            </p>
            <p>
              Es una certificación oficial emitida en Madrid en diciembre de 2022, con código de verificación{" "}
              <strong className="text-foreground">2022/AS03_22/1245</strong>, verificable en{" "}
              <a
                href="https://www.upm.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                upm.es
              </a>
              .
            </p>
            <p>
              Esa formación es la que respalda nuestra metodología: analizar el consumo y el sitio antes de proponer
              cualquier equipo.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <img
            src={certificado.url}
            alt="Certificado oficial de formación en instalación de sistemas solares fotovoltaicos del Instituto de Energía Solar (IES-UPM)"
            loading="lazy"
            className="w-full rounded-xl border border-border shadow-sm"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Formacion;
