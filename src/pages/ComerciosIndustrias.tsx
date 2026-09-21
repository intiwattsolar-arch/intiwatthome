import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import certificado from "@/assets/certificado-ies-upm.png";
import heroImg from "@/assets/industrial/hero-industrial.jpg";
import obraIndustria from "@/assets/industrial/IMG-20231205-WA0007.jpg";
import obraPaneles from "@/assets/industrial/IMG-20231227-WA0000.jpg";
import obraEstructura from "@/assets/industrial/IMG-20231227-WA0002.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const soluciones = [
  {
    n: "01",
    t: "Generación solar",
    d: "Sistemas fotovoltaicos dimensionados según el consumo real, el perfil de demanda, la superficie disponible y las condiciones de instalación.",
  },
  {
    n: "02",
    t: "Almacenamiento y respaldo",
    d: "Baterías y sistemas híbridos para gestionar energía, reducir la dependencia de la red o sostener operaciones donde la continuidad es crítica.",
  },
  {
    n: "03",
    t: "Eficiencia energética",
    d: "Medición y análisis del consumo para identificar pérdidas, oportunidades de ahorro y mejoras que pueden ser más convenientes que instalar nueva generación.",
  },
];

const inaccion = [
  {
    t: "Energía que continúa comprando",
    d: "Cada kWh que podría generarse o ahorrarse y no se aprovecha continúa formando parte del costo operativo.",
  },
  {
    t: "Ineficiencias que permanecen",
    d: "Un consumo innecesario también tiene un costo. Antes de instalar más generación, muchas veces conviene identificarlo.",
  },
  {
    t: "Menor previsibilidad",
    d: "La empresa continúa expuesta a cambios tarifarios y a otros componentes del costo energético que no controla.",
  },
  {
    t: "Capital que no se transforma",
    d: "Una inversión correctamente diseñada puede convertirse en infraestructura productiva. Postergarla también tiene un costo de oportunidad.",
  },
];

const pasos = [
  {
    n: "01",
    t: "Analizamos",
    d: "Consumo, facturación, cargas, infraestructura, superficie disponible y condiciones del sitio.",
  },
  {
    n: "02",
    t: "Modelamos",
    d: "Demanda, producción, simultaneidad, almacenamiento, ahorro y comportamiento esperado del sistema.",
  },
  { n: "03", t: "Diseñamos", d: "Definimos la arquitectura técnica y los componentes adecuados para la operación." },
  { n: "04", t: "Ejecutamos", d: "Instalamos, verificamos y ponemos el sistema en condiciones de operar." },
  { n: "05", t: "Acompañamos", d: "Seguimos su comportamiento y detectamos desviaciones cuando corresponde." },
];

const criteriosDimensionado = [
  { t: "Consumo energético", d: "Cómo, cuánto y cuándo consume la instalación." },
  {
    t: "Perfil de demanda",
    d: "Qué cargas funcionan durante el día y cuáles requieren energía en otros horarios.",
  },
  { t: "Infraestructura", d: "Cubierta, estructura, tableros, protecciones, conexión y condiciones del sitio." },
  { t: "Recurso disponible", d: "Radiación solar, orientación, sombras y condiciones ambientales." },
  { t: "Objetivo económico", d: "Ahorro, recuperación de inversión, previsibilidad o reducción de exposición." },
  {
    t: "Objetivo operativo",
    d: "Continuidad, respaldo, autonomía o mejora del funcionamiento energético.",
  },
];

const experiencia = [
  { t: "Europa", d: "Experiencia en proyectos fotovoltaicos en España." },
  { t: "Argentina", d: "Proyectos residenciales, comerciales e industriales." },
  {
    t: "Operaciones exigentes",
    d: "Experiencia en entornos industriales y zonas donde la disponibilidad energética es crítica.",
  },
];

const proyectos = [
  { img: obraPaneles, cat: "Industria", alt: "Campo de paneles fotovoltaicos sobre cubierta industrial" },
  { img: obraEstructura, cat: "Comercial", alt: "Estructura de soporte con paneles fotovoltaicos en azotea" },
  { img: obraIndustria, cat: "Proyectos especiales", alt: "Montaje de estructura fotovoltaica en altura" },
];

const ComerciosIndustrias = () => (
  <>
    <Navbar />
    <main className="pt-16">
      {/* HERO */}
      <section className="relative border-b border-border py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Instalación fotovoltaica sobre cubierta" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/25" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-5">
              Comercios e Industrias
            </p>
            <h1 className="text-4xl md:text-6xl font-serif text-primary-foreground leading-tight mb-6">
              Energía diseñada para funcionar.
            </h1>
            <p className="text-primary-foreground/85 text-lg leading-relaxed max-w-2xl mb-6">
              Diseñamos soluciones de generación, almacenamiento y eficiencia energética a partir de cómo consume y cómo
              opera cada empresa.
            </p>
            <p className="text-sm text-primary-foreground/75 tracking-wide mb-9">Solar · Almacenamiento · Eficiencia</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contacto"
                className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
              >
                Analizar mi proyecto
              </Link>
              <a
                href="#metodologia"
                className="border border-primary-foreground/40 text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:border-primary transition-colors text-center"
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
              Su operación no consume energía como otra.
            </h2>
            <p className="text-foreground font-serif text-xl leading-snug mb-5">
              Por eso no creemos en soluciones predeterminadas.
            </p>
            <div className="w-16 h-px bg-primary mb-5" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Analizamos cómo consume su empresa, cuándo necesita energía, qué infraestructura tiene disponible y qué
                necesita resolver.
              </p>
              <p>
                A partir de esos datos definimos si conviene{" "}
                <strong className="text-foreground font-semibold">
                  generar, almacenar, reducir el consumo o combinar distintas soluciones.
                </strong>
              </p>
              <p className="font-serif text-2xl text-foreground pt-2 leading-snug">
                Primero entendemos la operación. Después decidimos qué hacer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUCIONES */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-5">Soluciones energéticas</h2>
            <p className="text-muted-foreground leading-relaxed">
              No trabajamos con un catálogo de sistemas. Diseñamos la solución alrededor de la necesidad energética de
              cada instalación.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12 max-w-5xl">
            {soluciones.map((s, i) => (
              <motion.div key={s.n} {...fadeUp} transition={{ delay: i * 0.06 }} className="border-t border-border pt-5">
                <p className="text-primary font-serif text-lg mb-2">{s.n}</p>
                <h3 className="font-serif text-xl text-foreground mb-2">{s.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-12 max-w-3xl">
            <p className="font-serif text-xl text-foreground leading-snug mb-6">
              Una solución puede ser una de estas opciones o una combinación de ellas.
            </p>
            <Link
              to="/metodologia"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Conocer nuestras soluciones <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* COSTO DE LA INACCIÓN */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-5">
              ¿Cuánto cuesta no hacer nada?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Cuando una empresa posterga una decisión energética, no necesariamente está ahorrando dinero.</p>
              <p>
                Puede estar manteniendo un costo elevado de energía, desaprovechando oportunidades de eficiencia o
                permaneciendo expuesta a una estructura de costos que no controla.
              </p>
            </div>
          </motion.div>

          <motion.h3 {...fadeUp} className="font-serif text-2xl text-foreground mb-8 max-w-2xl leading-snug">
            El costo de la inacción puede aparecer en distintos lugares.
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-10 md:gap-12 max-w-5xl">
            {inaccion.map((c, i) => (
              <motion.div key={c.t} {...fadeUp} transition={{ delay: i * 0.05 }} className="border-t border-border pt-5">
                <h4 className="font-serif text-xl text-foreground mb-2">{c.t}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.d}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="max-w-3xl mt-14 border-l-2 border-primary pl-6">
            <h3 className="font-serif text-2xl text-foreground leading-snug mb-3">
              Por eso no analizamos solamente cuánto cuesta una solución.
            </h3>
            <p className="text-foreground font-semibold mb-4">También analizamos cuánto cuesta seguir como está.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Comparamos el escenario actual con distintas alternativas de inversión, ahorro, operación y riesgo.
            </p>
            <p className="font-serif text-xl text-foreground">Y si la inversión no tiene sentido, se lo decimos.</p>
          </motion.div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section id="metodologia" className="py-20 md:py-28 bg-secondary scroll-mt-16">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-5">
              Primero entendemos. Después diseñamos.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Una inversión energética empieza mucho antes de elegir un equipo.
            </p>
          </motion.div>
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
          <motion.p {...fadeUp} className="font-serif text-xl text-foreground mt-10 max-w-2xl leading-snug">
            Diseñar bien antes de invertir también es parte del ahorro.
          </motion.p>
        </div>
      </section>

      {/* DIMENSIONAMIENTO */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-3">
              No dimensionamos por superficie disponible.
            </h2>
            <p className="font-serif text-xl text-primary">Dimensionamos según la operación.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 max-w-5xl">
            {criteriosDimensionado.map((c, i) => (
              <motion.div key={c.t} {...fadeUp} transition={{ delay: i * 0.04 }} className="border-t border-border pt-5">
                <h3 className="font-serif text-lg text-foreground mb-2">{c.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.d}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp} className="font-serif text-xl text-foreground mt-12 max-w-2xl leading-snug">
            El sistema adecuado no es el que tiene más kWp. Es el que responde a la operación.
          </motion.p>
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
              <p>No todos los proyectos necesitan paneles solares.</p>
              <p>No todos necesitan baterías.</p>
              <p>Y aumentar el tamaño de un sistema no siempre aumenta su rentabilidad.</p>
              <p>Por eso analizamos cada caso antes de proponer una inversión.</p>
              <p className="text-accent-foreground font-semibold">
                Si encontramos una alternativa mejor, se la mostramos.
              </p>
              <p className="text-accent-foreground font-semibold">
                Si no encontramos una solución que tenga sentido, también se lo decimos.
              </p>
              <p className="font-serif text-2xl text-accent-foreground pt-2">Datos antes que promesas.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OPERACIONES AISLADAS */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-8">
              También trabajamos donde la energía no puede fallar.
            </h2>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-serif text-2xl text-foreground mb-3">Campo y operaciones aisladas</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En instalaciones sin acceso adecuado a la red, o donde el suministro disponible resulta insuficiente,
                diseñamos soluciones adaptadas a las condiciones reales de operación.
              </p>
              <p className="text-sm text-muted-foreground/80 tracking-wide mb-6">
                Generación · Almacenamiento · Respaldo · Gestión energética
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 py-3 rounded-lg font-medium hover:border-primary transition-colors"
              >
                Ver soluciones para operaciones aisladas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-5">
              Ingeniería que viene de la práctica.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nuestra formación especializada en sistemas solares fotovoltaicos se desarrolló en el{" "}
                <strong className="text-foreground font-semibold">
                  Instituto de Energía Solar de la Universidad Politécnica de Madrid (IES-UPM)
                </strong>
                .
              </p>
              <p>
                A esa formación sumamos experiencia en diseño, ejecución y puesta en marcha de instalaciones
                fotovoltaicas en Europa y Argentina.
              </p>
            </div>
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
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-5">Trabajo realizado.</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Cada instalación tiene sus propias condiciones.</p>
              <p>
                Conocemos el trabajo que existe detrás de una solución energética: relevamiento, ingeniería, montaje,
                verificación y puesta en marcha.
              </p>
            </div>
          </motion.div>
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
          <motion.div {...fadeUp} className="mt-12">
            <Link to="/obras" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Ver todos los proyectos <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BLOQUE TÉCNICO */}
      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-5">
              Ingeniería antes que catálogo.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cada proyecto se analiza según su demanda, las condiciones de instalación y el objetivo económico u
              operativo.
            </p>
            <p className="text-sm text-muted-foreground/80 tracking-wide mb-8">
              Dimensionamiento · Simulación · Protecciones · Puesta en marcha · Monitoreo
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">No elegimos una solución porque esté disponible.</p>
            <p className="font-serif text-xl text-foreground">La elegimos porque tiene sentido para la instalación.</p>
          </motion.div>
        </div>
      </section>

      {/* FORMACIÓN */}
      <section className="py-20 md:py-28 bg-background">
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
                src={certificado}
                alt="Certificado de formación especializada en sistemas solares fotovoltaicos del Instituto de Energía Solar (IES-UPM)"
                loading="lazy"
                className="w-full rounded-xl border border-border shadow-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-5">
              Hablemos de su proyecto.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>Cuéntenos qué necesita resolver, dónde se encuentra la instalación y cómo consume energía.</p>
              <p>Analizaremos su situación y le diremos qué alternativas tienen sentido.</p>
              <p className="text-foreground font-semibold">No necesitamos que sepa qué sistema necesita.</p>
              <p className="text-foreground font-semibold">Necesitamos entender qué necesita resolver.</p>
            </div>
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
              <a href="mailto:info@intiwatt.com" className="hover:text-primary transition-colors">
                info@intiwatt.com
              </a>{" "}
              · +54 351 867 0464
              <br />
              Córdoba y Santiago del Estero, Argentina
            </p>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ComerciosIndustrias;
