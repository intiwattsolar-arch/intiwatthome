import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Funciona en días nublados?",
    a: "Sí. Los paneles generan energía incluso con cielo cubierto, aunque con menor rendimiento. El sistema está dimensionado considerando todas las condiciones climáticas de tu zona.",
  },
  {
    q: "¿Qué pasa durante un corte de luz?",
    a: "Si tu sistema es on-grid (conectado a la red), se apaga por seguridad. Si es híbrido con baterías, seguís con energía en los circuitos esenciales que hayamos definido juntos.",
  },
  {
    q: "¿Requiere mantenimiento?",
    a: "Mínimo. Una limpieza periódica de los paneles y una revisión anual del sistema. IntiWatt ofrece servicio de mantenimiento preventivo.",
  },
  {
    q: "¿Y si me mudo?",
    a: "El sistema puede desinstalarse y reubicarse. También suma valor a tu propiedad si decidís venderla.",
  },
  {
    q: "¿Cuánto tarda la instalación?",
    a: "Entre 1 y 3 días hábiles, dependiendo de la complejidad del sistema y las condiciones del techo.",
  },
  {
    q: "¿Sirve para calentar agua?",
    a: "Los paneles solares fotovoltaicos generan electricidad, no calor directo. Pero esa electricidad puede alimentar termos eléctricos o bombas de calor.",
  },
];

const FAQ = () => (
  <section id="preguntas" className="py-24 md:py-32 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Preguntas frecuentes</p>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">
          Lo que nuestros clientes preguntan antes de decidir
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-serif text-base text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQ;
