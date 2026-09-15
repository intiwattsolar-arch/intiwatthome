import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import certificado from "@/assets/certificado-ies-upm.png.asset.json";
import obraIndustria from "@/assets/industrial/IMG-20231205-WA0007.jpg.asset.json";
import obraPaneles from "@/assets/industrial/IMG-20231227-WA0000.jpg.asset.json";
import obraEstructura from "@/assets/industrial/IMG-20231227-WA0002.jpg.asset.json";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const soluciones = [
  {
    n: "01",
    t: "Generación solar",
    d: "Sistemas fotovoltaicos dimensionados para el consumo real de cada instalación.",
  },
  {
    n: "02",
    t: "Almacenamiento y respaldo",
    d: "Baterías y sistemas híbridos para reducir la dependencia de la red o sostener operaciones cuando la continuidad es crítica.",
  },
  {
    n: "03",
    t: "Eficiencia energética",
    d: "Medición y análisis del consumo para reducir costos antes de invertir en nueva generación.",
  },
];

const pasos = [
  { n: "01", t: "Analizamos", d: "Consumo, facturación, cargas, infraestructura y condiciones del sitio." },
  { n: "02", t: "Modelamos", d: "Estimamos producción, demanda, almacenamiento, ahorro y comportamiento esperado." },
  { n: "03", t: "Diseñamos", d: "Definimos la arquitectura técnica y los componentes adecuados para la operación." },
  { n: "04", t: "Ejecutamos", d: "Instalamos, verificamos y dejamos el sistema preparado para operar." },
  { n: "05", t: "Acompañamos", d: "Seguimos el comportamiento del sistema y detectamos desviaciones cuando corresponde." },
];

const experiencia = [
  { t: "Europa", d: "Experiencia en instalaciones fotovoltaicas en España." },
  { t: "Argentina", d: "Proyectos residenciales, comerciales e industriales." },
  {
    t: "Operaciones exigentes",
    d: "Experiencia en entornos industriales y zonas donde la disponibilidad energética es crítica.",
  },
];

const proyectos = [
  { img: obraPaneles.url, cat: "Industria", alt: "Campo de paneles fotovoltaicos sobre cubierta industrial" },
  { img: obraEstructura.url, cat: "Comercial", alt: "Estructura de soporte con paneles fotovoltaicos en azotea" },
  { img: obraIndustria.url, cat: "Proyectos especiales", alt: "Montaje de estructura fotovoltaica en altura" },
];

const ComerciosIndustrias = () => (
  <>
    <Navbar />
    <main className="pt-16">
      {/* HERO */}
      <section className="bg-secondary border-b border-border py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-5">
              Comercios e Industrias
            </p>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground leading-tight mb-6">
              Energía diseñada para funcionar.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-6">
              Diseñamos soluciones de generación, almacenamiento y eficiencia energética a partir del consumo y las
              condiciones reales de cada operación.
            </p>
            <p className="text-sm text-muted-foreground/80 tracking-wide mb-9">Solar · Almacenamiento · Eficiencia</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contacto"
                className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
              >
                Analizar mi proyecto
              </Link>
              <a
                href="#metodologia"
                className="border border-border bg-card text-foreground px-7 py-3.5 rounded-lg font-medium hover:border-primary transition-colors text-center"
              >
                Cómo trabajamos
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* POSICIONAMIENTO */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-5">
              No empezamos por los equipos.
            </h2>
            <p className="text-foreground font-serif text-xl leading-snug mb-5">
              Empezamos por entender cómo necesita funcionar su operación.
            </p>
            <div className="w-16 h-px bg-primary mb-5" />
            <p className="text-muted-foreground leading-relaxed">
              Analizamos consumo, infraestructura, recurso disponible y condiciones de operación antes de definir una
              solución.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SOLUCIONES */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-serif text-foreground mb-12">
            Soluciones energéticas
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12 max-w-5xl">
            {soluciones.map((s, i) => (
              <motion.div key={s.n} {...fadeUp} transition={{ delay: i * 0.06 }} className="border-t border-border pt-5">
                <p className="text-primary font-serif text-lg mb-2">{s.n}</p>
                <h3 className="font-serif text-xl text-foreground mb-2">{s.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-12">
            <Link
              to="/metodologia"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Conocer nuestras soluciones <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TIPOS DE CLIENTE */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-serif text-foreground mb-12 max-w-2xl leading-tight">
            Desde una industria hasta un campo aislado.
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl">
            <motion.div {...fadeUp} className="border-l-2 border-primary pl-6">
              <h3 className="font-serif text-2xl text-foreground mb-3">Comercio e industria</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Para empresas que buscan reducir costos energéticos, mejorar la previsibilidad y optimizar una
                instalación existente.
              </p>
              <a
                href="https://industrial.intiwatt.com/"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Es para mi negocio o fábrica
              </a>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.08 }} className="border-l-2 border-border pl-6">
              <h3 className="font-serif text-2xl text-foreground mb-3">Campo y operaciones aisladas</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Para instalaciones donde la disponibilidad de energía es crítica y la red eléctrica no está disponible,
                es limitada o no resulta suficiente.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 py-3 rounded-lg font-medium hover:border-primary transition-colors"
              >
                Ver soluciones para campo <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section id="metodologia" className="py-20 md:py-28 bg-secondary scroll-mt-16">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-serif text-foreground mb-12 max-w-2xl leading-tight">
            Primero entendemos. Después diseñamos.
          </motion.h2>
          <ol className="max-w-3xl divide-y divide-border">
            {pasos.map((p, i) => (
              <motion.li
                key={p.n}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="py-6 flex flex-col sm:flex-row sm:gap-8"
              >
                <p className="text-primary font-serif text-lg sm:w-24 shrink-0 mb-1 sm:mb-0">
                  {p.n} — <span className="text-foreground">{p.t}</span>
                </p>
                <p className="text-muted-foreground leading-relaxed sm:flex-1">{p.d}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* CRITERIO */}
      <section className="py-20 md:py-28 bg-accent">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif text-accent-foreground leading-tight mb-6">
              Si no tiene sentido, se lo decimos.
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                No todos los proyectos necesitan paneles solares. No todos necesitan baterías. Y aumentar el tamaño de
                un sistema no siempre aumenta su rentabilidad.
              </p>
              <p>Por eso analizamos cada caso antes de proponer una inversión.</p>
              <p className="font-serif text-2xl text-accent-foreground pt-2">Datos antes que promesas.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-5">
              Experiencia que respalda nuestro trabajo
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Formación especializada en sistemas solares fotovoltaicos en el Instituto de Energía Solar de la
              Universidad Politécnica de Madrid (IES-UPM) y experiencia en diseño y ejecución de instalaciones
              fotovoltaicas en Europa y Argentina.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl">
            {experiencia.map((e, i) => (
              <motion.div key={e.t} {...fadeUp} transition={{ delay: i * 0.06 }} className="border-t border-border pt-5">
                <h3 className="font-serif text-xl text-foreground mb-2">{e.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{e.d}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-12">
            <Link to="/obras" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Ver proyectos <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-serif text-foreground mb-12">
            Trabajo realizado
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {proyectos.map((p, i) => (
              <motion.div key={p.cat} {...fadeUp} transition={{ delay: i * 0.06 }}>
                <Link to="/obras" className="group block">
                  <div className="overflow-hidden rounded-xl border border-border">
                    <img
                      src={p.img}
                      alt={p.alt}
                      loading="lazy"
                      className="w-full h-56 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {p.cat}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUE TÉCNICO */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-5">
              Ingeniería antes que catálogo.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cada proyecto se analiza según su demanda, las condiciones de instalación y el objetivo económico u
              operativo.
            </p>
            <p className="text-sm text-muted-foreground/80 tracking-wide">
              Dimensionamiento · Simulación · Protecciones · Puesta en marcha · Monitoreo
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORMACIÓN */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-5">
                Formación especializada en energía solar.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nuestra formación técnica en sistemas solares fotovoltaicos se desarrolló en el Instituto de Energía
                  Solar de la Universidad Politécnica de Madrid (IES-UPM).
                </p>
                <p>
                  Esta formación forma parte de la base técnica con la que analizamos, diseñamos y ejecutamos nuestros
                  proyectos.
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
              <img
                src={certificado.url}
                alt="Certificado de formación especializada en sistemas solares fotovoltaicos del Instituto de Energía Solar (IES-UPM)"
                loading="lazy"
                className="w-full rounded-xl border border-border shadow-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-5">
              Hablemos de su proyecto.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Cuéntenos qué necesita resolver, dónde se encuentra la instalación y cómo consume energía. Analizaremos si
              podemos aportar una solución.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contacto"
                className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
              >
                Solicitar análisis
              </Link>
              <a
                href="https://wa.me/5493518670464"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border bg-card text-foreground px-7 py-3.5 rounded-lg font-medium hover:border-primary transition-colors text-center"
              >
                WhatsApp
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              info@intiwatt.com · +54 351 867 0464 · Córdoba y Santiago del Estero, Argentina
            </p>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ComerciosIndustrias;
