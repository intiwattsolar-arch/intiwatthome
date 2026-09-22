import { ArrowUpRight } from "lucide-react";
import PageShell from "@/components/PageShell";

const entornos = [
  {
    title: "Calculadora Residencial",
    desc: "Una primera orientación para viviendas, antes de cualquier análisis detallado.",
    href: "https://calcular.intiwatt.com/",
  },
  {
    title: "AgroSolar",
    desc: "Soluciones energéticas para campo y operaciones aisladas.",
    href: "https://agrosolar.intiwatt.com/",
  },
  {
    title: "BiPV · Arquitectura FV",
    desc: "Integración fotovoltaica en la arquitectura y la envolvente del edificio.",
    href: "https://bipv.intiwatt.com/",
  },
];

const Ecosistema = () => (
  <PageShell
    title="Ecosistema IntiWatt."
    intro="Cada área de trabajo tiene su propio entorno, con el enfoque técnico que le corresponde."
  >
    <div className="grid sm:grid-cols-2 gap-5 not-prose">
      {entornos.map((e) => (
        <a
          key={e.href}
          href={e.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-card rounded-xl border border-border p-7 hover:border-primary transition-colors"
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <h2 className="font-serif text-xl text-foreground">{e.title}</h2>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
        </a>
      ))}
    </div>
  </PageShell>
);

export default Ecosistema;
