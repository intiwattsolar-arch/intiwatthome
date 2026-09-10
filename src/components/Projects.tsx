import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import install1Workers from "@/assets/projects/install1-workers.jpg";
import install1Panels from "@/assets/projects/install1-panels.jpg";
import install1Inverter from "@/assets/projects/install1-inverter.jpg";
import install3Installing from "@/assets/projects/install3-installing.jpg";

import install2Panels from "@/assets/projects/install2-panels.jpg";
import install2Closeup from "@/assets/projects/install2-closeup.jpg";
import install2Deye from "@/assets/projects/install2-deye.jpg";
import install3Structure from "@/assets/projects/install3-structure.jpg";

import install4GroundPanels from "@/assets/projects/install4-ground-panels.jpg";
import install4InverterBatteries from "@/assets/projects/install4-inverter-batteries.jpg";
import install4WorkersRoof from "@/assets/projects/install4-workers-roof.jpg";
import install4PanelsRoof from "@/assets/projects/install4-panels-roof.jpg";

import install5InverterWall from "@/assets/projects/install5-inverter-wall.jpg";
import install5Deye from "@/assets/projects/install5-deye.jpg";
import install5Workers from "@/assets/projects/install5-workers.jpg";
import install5PanelsRoof from "@/assets/projects/install5-panels-roof.jpg";

const projects = [
  {
    title: "Residencial on-grid · Córdoba",
    desc: "Sistema on-grid de 6 kW con reducción del 70% en la factura eléctrica.",
    specs: "8 paneles · Inversor Deye · On-Grid",
    images: [install1Panels, install1Workers, install1Inverter, install3Installing],
  },
  {
    title: "Híbrido residencial · Córdoba",
    desc: "Sistema híbrido con paneles en techo de chapa, inversor Deye 5kW y banco de baterías.",
    specs: "10 paneles · Inversor Deye 5kW · 2 baterías · Híbrido",
    images: [install2Panels, install2Closeup, install2Deye, install3Structure],
  },
  {
    title: "Off-grid rural · Santiago del Estero",
    desc: "Instalación completa en terreno rural con estructura metálica a medida, paneles en techo y en suelo, inversor y banco de baterías LiFePO4 Deye.",
    specs: "16 paneles · Inversor + baterías LiFePO4 · Off-Grid",
    images: [install4PanelsRoof, install4GroundPanels, install4WorkersRoof, install4InverterBatteries],
  },
  {
    title: "Residencial con respaldo · Córdoba",
    desc: "Sistema híbrido residencial con inversor Deye, protecciones eléctricas dedicadas e instalación prolija en garage.",
    specs: "12 paneles · Inversor Deye · Híbrido",
    images: [install5PanelsRoof, install5Workers, install5InverterWall, install5Deye],
  },
];

const ProjectCarousel = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [current, setCurrent] = useState(0);

  const goTo = (i: number) => {
    setCurrent((i + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Main image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.images[current]}
          alt={`${project.title} - foto ${current + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
        {/* Nav arrows */}
        <button
          onClick={() => goTo(current - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => goTo(current + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        {/* Counter */}
        <span className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 rounded-full">
          {current + 1}/{project.images.length}
        </span>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 p-3">
        {project.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`flex-1 aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              i === current ? "border-primary ring-1 ring-primary" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Info */}
      <div className="px-5 pb-5">
        <h3 className="font-serif text-lg text-foreground mb-1.5">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-2 leading-relaxed">{project.desc}</p>
        <p className="text-xs text-primary font-medium">{project.specs}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="proyectos" className="py-24 md:py-32 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Instalaciones reales</p>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">
          Hogares que ya generan su propia energía
        </h2>
        <p className="text-muted-foreground mt-4">Cada proyecto es único. Estos son algunos ejemplos recientes.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCarousel key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
