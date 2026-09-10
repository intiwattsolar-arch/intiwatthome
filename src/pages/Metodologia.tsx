import PageShell from "@/components/PageShell";

const pasos = [
  { t: "Entender el consumo", d: "Revisamos facturas, hábitos y curva de uso antes de hablar de equipos." },
  { t: "Analizar el sitio", d: "Evaluamos superficie disponible, orientación, sombras e instalación eléctrica existente." },
  { t: "Dimensionar", d: "Definimos el sistema que se ajusta al consumo real, sin sobredimensionar." },
  { t: "Evaluar la inversión", d: "Analizamos si el proyecto tiene sentido económico. Si no lo tiene, se lo decimos." },
];

const Metodologia = () => (
  <PageShell
    title="Nuestra metodología."
    intro="Un proceso técnico ordenado, pensado para que la decisión se tome con información suficiente."
  >
    <ol className="space-y-8 not-prose">
      {pasos.map((p, i) => (
        <li key={p.t} className="border-l-2 border-primary pl-6">
          <p className="text-primary font-medium text-sm mb-1">Paso {i + 1}</p>
          <h2 className="font-serif text-xl text-foreground mb-2">{p.t}</h2>
          <p className="text-muted-foreground leading-relaxed">{p.d}</p>
        </li>
      ))}
    </ol>
  </PageShell>
);

export default Metodologia;
