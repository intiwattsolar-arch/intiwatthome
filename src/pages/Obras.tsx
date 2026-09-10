import PageShell from "@/components/PageShell";

const Obras = () => (
  <PageShell title="Nuestras obras." intro="Proyectos y trabajos realizados por IntiWatt.">
    <p>
      Estamos ordenando esta sección para mostrar los proyectos con el detalle técnico que corresponde. Mientras tanto,
      publicamos avances de instalaciones en nuestras redes.
    </p>
    <p>
      <a
        href="https://www.instagram.com/intiwatt"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-medium hover:underline"
      >
        Instagram: @Intiwatt
      </a>
      {" · "}
      <a
        href="https://www.linkedin.com/company/intiwatt"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-medium hover:underline"
      >
        LinkedIn: IntiWatt
      </a>
    </p>
  </PageShell>
);

export default Obras;
