import { motion } from "framer-motion";

const CTA = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
          ¿Querés saber si tu casa es apta para energía solar?
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Solicitá un estudio sin costo. Evaluamos tu consumo, tu espacio y te presentamos una propuesta clara, sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5493518670464?text=Hola%2C%20quiero%20solicitar%20un%20estudio%20solar%20gratuito"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            WhatsApp Córdoba
          </a>
          <a
            href="https://wa.me/5493854164501?text=Hola%2C%20quiero%20solicitar%20un%20estudio%20solar%20gratuito"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            WhatsApp Sgo. del Estero
          </a>
        </div>

        <p className="text-muted-foreground text-sm mt-6">
          También podés escribirnos a{" "}
          <a href="mailto:info@intiwatt.com" className="text-primary hover:underline">
            info@intiwatt.com
          </a>
        </p>
        <p className="text-muted-foreground text-xs mt-2">Sin compromiso. Respondemos en menos de 24 horas.</p>
      </motion.div>
    </div>
  </section>
);

export default CTA;
