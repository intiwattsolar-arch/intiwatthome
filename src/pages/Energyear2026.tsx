import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import panelAutoconsumo from "@/assets/energyear/panel-autoconsumo.jpg";
import panelEscenario from "@/assets/energyear/panel-escenario.jpg";
import panelistas from "@/assets/energyear/panelistas.jpg";
import cesarSpeaker from "@/assets/energyear/cesar-rodriguez-speaker.jpg";

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const galeria = [
  { src: panelEscenario, alt: "Vista general del panel en el escenario de Energyear Argentina 2026", wide: true },
  { src: panelAutoconsumo, alt: "César Rodríguez Juárez durante el panel de autoconsumo" },
  { src: panelistas, alt: "César Rodríguez Juárez junto a los demás integrantes del panel" },
  { src: cesarSpeaker, alt: "Pieza oficial de Energyear Argentina 2026 con la participación de César Rodríguez Juárez" },
];

const preguntas = [
  "¿Cuánto consume realmente una empresa?",
  "¿Cuánta energía puede dejar de comprar?",
  "¿Cuánto cuesta conseguirlo?",
  "¿Qué inversión tiene sentido?",
  "¿Y cuánto de su costo energético puede hacer más previsible?",
];

const Energyear2026 = () => (
  <>
    <Navbar />
    <main className="pt-16">
      {/* Portada */}
      <header className="bg-secondary border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fade} className="max-w-4xl mx-auto">
            <p className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-5">IntiWatt</p>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground leading-[1.05]">
              Energyear Argentina 2026
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-serif text-muted-foreground max-w-2xl leading-snug">
              La energía también es una variable de incertidumbre.
            </p>
            <p className="mt-8 text-sm text-muted-foreground border-t border-border pt-5">
              16 de septiembre de 2026 · Buenos Aires
            </p>
          </motion.div>
        </div>
      </header>

      <section className="bg-secondary pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <motion.figure {...fade} className="max-w-5xl mx-auto">
            <img
              src={panelEscenario}
              alt="Panel de autoconsumo de Energyear Argentina 2026 en el Faena Art Center"
              className="w-full rounded-xl border border-border object-cover"
            />
          </motion.figure>
        </div>
      </section>

      {/* Introducción */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fade} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-6">
              Una conversación sobre energía empresarial
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                El 16 de septiembre de 2026, César Rodríguez Juárez, fundador y director técnico de IntiWatt, participó
                como speaker en Energyear Argentina 2026.
              </p>
              <p>
                Integró el panel dedicado al autoconsumo y las renovables para industrias y empresas, junto a
                representantes de compañías vinculadas al desarrollo, fabricación e implementación de soluciones
                energéticas.
              </p>
              <p>
                Para IntiWatt, la participación fue una oportunidad para llevar a una conversación nacional una mirada
                que venimos desarrollando desde nuestro trabajo con empresas: la energía no debe analizarse únicamente
                como un costo, sino también como una variable de incertidumbre.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Idea central */}
      <section className="py-20 md:py-28 bg-accent border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div {...fade} className="max-w-3xl mx-auto">
            <blockquote className="text-2xl md:text-4xl font-serif text-foreground leading-snug">
              “La pregunta no es cuánto podemos producir, sino cuánta energía podemos dejar de comprarle a la red y
              cuánto cuesta conseguirlo.”
            </blockquote>
            <div className="mt-9 space-y-4 text-accent-foreground leading-relaxed">
              <p>
                Una instalación fotovoltaica no debería dimensionarse simplemente buscando producir la mayor cantidad
                posible de energía.
              </p>
              <p>
                Primero hay que entender cómo consume la empresa, en qué horarios concentra su demanda, qué parte de esa
                demanda puede ser cubierta directamente y cuál es el costo de evitar esa compra.
              </p>
              <p>Recién entonces tiene sentido hablar de potencia instalada, tecnología e inversión.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eficiencia antes de generación */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <motion.div {...fade}>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-6">
                Primero eficiencia. Después generación.
              </h2>
              <p className="font-serif text-xl text-foreground border-l-2 border-primary pl-5 mb-6 leading-snug">
                “El autoconsumo sin analizar primero la eficiencia no tiene sentido.”
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Antes de generar más, hay que entender qué se está consumiendo.</p>
                <p>
                  Porque una empresa puede instalar generación renovable y seguir teniendo un problema energético.
                </p>
                <p>
                  La eficiencia, la gestión de la demanda y el autoconsumo forman parte de una misma decisión:
                  determinar qué energía tiene sentido evitar comprar y cuál es la inversión necesaria para conseguirlo.
                </p>
              </div>
            </motion.div>
            <motion.figure {...fade} transition={{ delay: 0.1 }}>
              <img
                src={panelAutoconsumo}
                alt="César Rodríguez Juárez interviniendo en el panel de autoconsumo"
                loading="lazy"
                className="w-full rounded-xl border border-border object-cover aspect-[4/3]"
              />
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Almacenamiento */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div {...fade} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-6">
              Una batería tiene que resolver un problema
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Que una tecnología exista no significa que haya que instalarla.</p>
              <p>
                El almacenamiento puede resolver problemas concretos: desplazamiento de consumos, respaldo, gestión de
                demanda o determinadas restricciones operativas.
              </p>
              <p>
                Pero incorporar una batería automáticamente a una propuesta no convierte al proyecto en una mejor
                solución.
              </p>
              <p>Tiene que existir una necesidad concreta y la inversión tiene que poder justificarse.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inversión */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fade} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-6">
              Una decisión energética también es una decisión de inversión
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Una empresa toma decisiones de inversión mirando varios años hacia adelante.</p>
              <p>El costo de la energía, en cambio, puede cambiar durante ese período.</p>
              <p>
                Por eso el análisis energético no debería limitarse a calcular cuántos kilovatios-hora puede generar una
                instalación.
              </p>
              <p>
                Hay que entender cuánto consume la empresa, cuánto puede dejar de comprar, cuánto cuesta conseguirlo y
                qué retorno tiene la inversión bajo supuestos razonables.
              </p>
            </div>
            <p className="mt-9 font-serif text-2xl md:text-3xl text-foreground leading-snug">
              El objetivo no es instalar más. Es decidir mejor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mirada IntiWatt */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div {...fade} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-6">
              Una forma diferente de mirar el autoconsumo
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>No se trata simplemente de vender paneles, inversores o baterías.</p>
              <p>
                Se trata de que una empresa pueda tomar una decisión energética entendiendo: qué está comprando, qué
                riesgo está asumiendo y qué parte de su costo energético puede hacer más previsible.
              </p>
              <p>La generación renovable es una herramienta.</p>
              <p>La eficiencia es una herramienta.</p>
              <p>El almacenamiento es una herramienta.</p>
              <p className="text-foreground font-serif text-xl leading-snug pt-2">
                La decisión correcta depende de cómo funciona cada empresa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-5">
            {galeria.map((g, i) => (
              <motion.figure
                key={g.alt}
                {...fade}
                transition={{ delay: i * 0.06 }}
                className={g.wide ? "sm:col-span-2" : ""}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={`w-full rounded-xl border border-border object-cover ${
                    g.wide ? "aspect-[16/7]" : "aspect-[4/3]"
                  }`}
                />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Participación */}
      <section className="py-20 md:py-28 bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div {...fade} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-8">
              Energyear Argentina 2026
            </h2>
            <dl className="divide-y divide-border border-t border-b border-border">
              {[
                [
                  "Panel",
                  "Autoconsumo: cómo las renovables están cambiando el panorama energético para las industrias y los consumidores.",
                ],
                ["Fecha", "16 de septiembre de 2026"],
                ["Lugar", "Faena Art Center, Buenos Aires"],
                ["Participación", "César Rodríguez Juárez · Fundador y Director Técnico de IntiWatt"],
              ].map(([k, v]) => (
                <div key={k} className="py-5 grid sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6">
                  <dt className="text-xs uppercase tracking-[0.15em] text-primary font-medium pt-1">{k}</dt>
                  <dd className="text-muted-foreground leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
            <a
              href="https://energyear.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Sitio oficial de Energyear <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Cierre */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fade} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-6">
              La conversación termina. El problema sigue.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Energyear fue una oportunidad para llevar nuestra experiencia a una conversación nacional.</p>
              <p>
                Pero las preguntas que planteamos allí siguen siendo las mismas que enfrentan las empresas todos los
                días:
              </p>
            </div>
            <ul className="mt-7 space-y-3 border-l-2 border-primary pl-6">
              {preguntas.map((p) => (
                <li key={p} className="font-serif text-lg md:text-xl text-foreground leading-snug">
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-10 font-serif text-2xl md:text-3xl text-foreground leading-snug">
              La eficiencia energética empieza mucho antes de instalar un equipo.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/metodologia"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Conocer cómo trabaja IntiWatt <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-lg font-medium hover:border-primary transition-colors"
              >
                Analizar un proyecto energético <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Energyear2026;
