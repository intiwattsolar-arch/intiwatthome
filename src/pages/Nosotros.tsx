import PageShell from "@/components/PageShell";

const Nosotros = () => (
  <PageShell
    title="Ingeniería para tomar mejores decisiones energéticas."
    intro="IntiWatt es una empresa argentina especializada en eficiencia energética y soluciones fotovoltaicas."
  >
    <p>
      Nuestra diferencia no es vender más equipos: es analizar cada proyecto y diseñar una solución que tenga sentido
      técnico y económico.
    </p>
    <p>
      La empresa está formada sobre una base de formación especializada en el Instituto de Energía Solar de la
      Universidad Politécnica de Madrid (IES-UPM) y experiencia en proyectos fotovoltaicos en España y Argentina. Esa
      formación funciona como respaldo de nuestra metodología de trabajo.
    </p>
    <p className="text-foreground font-serif text-xl leading-snug">
      Si un proyecto no tiene sentido, preferimos decirlo antes que venderlo.
    </p>
  </PageShell>
);

export default Nosotros;
