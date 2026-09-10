import { useState } from "react";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    tipo: "Residencial",
    mensaje: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Nombre: ${form.nombre}`,
      `Empresa: ${form.empresa}`,
      `Teléfono: ${form.telefono}`,
      `Email: ${form.email}`,
      `Tipo de proyecto: ${form.tipo}`,
      "",
      form.mensaje,
    ].join("\n");
    window.location.href = `mailto:info@intiwatt.com?subject=${encodeURIComponent(
      `Consulta de ${form.nombre || "proyecto"}`
    )}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    "w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring/40";

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <header className="bg-secondary border-b border-border py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4">Contacto</p>
              <h1 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">
                Hablemos de su proyecto.
              </h1>
              <p className="text-muted-foreground mt-5 leading-relaxed max-w-xl">
                Cuéntenos su situación y analizamos si una solución energética tiene sentido en su caso.
              </p>
            </div>
          </div>
        </header>

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-12">
              <div className="space-y-7 text-sm">
                <div>
                  <div className="flex items-center gap-2 text-foreground font-medium mb-1.5">
                    <MessageCircle className="w-4 h-4 text-primary" /> WhatsApp
                  </div>
                  <a href="https://wa.me/5493518670464" className="text-muted-foreground hover:text-primary">
                    +54 351 867 0464
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-foreground font-medium mb-1.5">
                    <Mail className="w-4 h-4 text-primary" /> Email
                  </div>
                  <a href="mailto:info@intiwatt.com" className="text-muted-foreground hover:text-primary">
                    info@intiwatt.com
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-foreground font-medium mb-1.5">
                    <MapPin className="w-4 h-4 text-primary" /> Ubicación
                  </div>
                  <p className="text-muted-foreground">Córdoba y Santiago del Estero, Argentina</p>
                </div>
                <a
                  href="https://wa.me/5493518670464?text=Hola%2C%20quiero%20analizar%20mi%20proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Analizar mi proyecto
                </a>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Nombre" value={form.nombre} onChange={set("nombre")} className={inputClass} />
                  <input placeholder="Empresa" value={form.empresa} onChange={set("empresa")} className={inputClass} />
                  <input placeholder="Teléfono" value={form.telefono} onChange={set("telefono")} className={inputClass} />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={set("email")}
                    className={inputClass}
                  />
                </div>
                <select value={form.tipo} onChange={set("tipo")} className={inputClass}>
                  <option>Residencial</option>
                  <option>Comercio</option>
                  <option>Industria</option>
                  <option>Otro</option>
                </select>
                <textarea
                  required
                  rows={5}
                  placeholder="Mensaje"
                  value={form.mensaje}
                  onChange={set("mensaje")}
                  className={inputClass}
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-primary text-primary-foreground px-7 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Enviar consulta
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contacto;
