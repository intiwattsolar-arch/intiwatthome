import { motion } from "framer-motion";
import { Plug, BatteryFull, RefreshCw, Sun, Fence } from "lucide-react";

import panelsCloseup from "@/assets/panels-closeup.jpg";
import pergolaStructure from "@/assets/pergola-structure.jpg";
import pergolaInstalling from "@/assets/pergola-installing.jpg";
import pergolaRender from "@/assets/pergola-solar-render.png";
import balconSolar1 from "@/assets/balcon-solar-1.png";
import balconSolar2 from "@/assets/balcon-solar-2.png";

const modos = [
  {
    icon: Plug,
    title: "On-Grid",
    subtitle: "Conectado a la red",
    desc: "Generás tu propia energía y usás la red como respaldo. Si producís más de lo que consumís, el excedente se inyecta a la red. Ideal para zonas con servicio eléctrico estable.",
    features: ["Menor inversión inicial", "Sin baterías", "Posibilidad de ser Usuario Generador"],
  },
  {
    icon: BatteryFull,
    title: "Off-Grid",
    subtitle: "Independiente de la red",
    desc: "Sistema 100% autónomo con banco de baterías. Perfecto para zonas rurales o donde no llega la red eléctrica. Total independencia energética.",
    features: ["Autonomía total", "Banco de baterías LiFePO4", "Ideal para zonas sin red"],
  },
  {
    icon: RefreshCw,
    title: "Híbrido",
    subtitle: "Lo mejor de ambos mundos",
    desc: "Combiná conexión a red con almacenamiento en baterías. Usás energía solar de día, baterías de noche, y la red solo cuando es necesario.",
    features: ["Respaldo ante cortes", "Máximo aprovechamiento", "Flexibilidad total"],
  },
];

const ModosFuncionamiento = () => (
  <section id="modos" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Según tu necesidad</p>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">
          Modos de funcionamiento
        </h2>
        <p className="text-muted-foreground mt-4">
          Diseñamos el sistema que mejor se adapte a tu situación: conexión a red, autonomía total o una combinación inteligente.
        </p>
      </motion.div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-14 rounded-2xl overflow-hidden border border-border shadow-sm"
      >
        <img
          src={panelsCloseup}
          alt="Detalle de paneles solares instalados"
          className="w-full h-64 md:h-80 object-cover"
        />
      </motion.div>

      {/* 3 modos cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
        {modos.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-5">
              <m.icon className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-1">{m.title}</h3>
            <p className="text-primary text-sm font-medium mb-4">{m.subtitle}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{m.desc}</p>
            <ul className="space-y-2">
              {m.features.map((f) => (
                <li key={f} className="text-sm text-foreground flex items-center gap-2 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Pérgolas y Quinchos Solares */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-24"
      >
        <div className="text-center mb-10">
          <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
            <Sun className="w-7 h-7 text-accent-foreground" />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">Quinchos y Pérgolas Solares</h3>
          <p className="text-primary text-sm font-medium mb-3">Espacios que generan energía</p>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Diseñamos estructuras metálicas a medida para instalar paneles solares como techo de quinchos, pérgolas y cocheras. Aprovechás un espacio que ya tenés y lo convertís en fuente de energía limpia.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img src={pergolaStructure} alt="Estructura metálica para pérgola solar" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img src={pergolaInstalling} alt="Instalación de paneles en pérgola" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <img src={pergolaRender} alt="Pérgola solar terminada" className="w-full h-64 object-cover" />
          </div>
        </div>
      </motion.div>

      {/* Balcones Solares */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4">
              <Fence className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">Balcones Solares</h3>
            <p className="text-primary text-sm font-medium mb-4">Energía solar sin necesidad de techo</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              ¿No tenés espacio en el techo? Con nuestros sistemas de balcón solar generás energía desde tu departamento. Usamos <strong className="text-foreground">microinversores silenciosos</strong> que no hacen ruido y son estéticamente integrados.
            </p>
            <ul className="space-y-2">
              {["Microinversores silenciosos", "No invasivo estéticamente", "Ideal para departamentos", "Fácil instalación"].map((f) => (
                <li key={f} className="text-sm text-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <img src={balconSolar1} alt="Panel solar en balcón" className="w-full h-52 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <img src={balconSolar2} alt="Paneles solares en balcón de departamento" className="w-full h-52 object-cover" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ModosFuncionamiento;
