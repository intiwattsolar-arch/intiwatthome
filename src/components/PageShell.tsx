import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  showContactLink?: boolean;
}

const PageShell = ({ eyebrow = "IntiWatt", title, intro, children, showContactLink = true }: PageShellProps) => (
  <>
    <Navbar />
    <main className="pt-16">
      <header className="bg-secondary border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-4">{eyebrow}</p>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">{title}</h1>
            {intro && <p className="text-muted-foreground mt-5 leading-relaxed max-w-2xl">{intro}</p>}
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-5 text-muted-foreground leading-relaxed">{children}</div>
          {showContactLink && (
            <div className="max-w-3xl mx-auto mt-12">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Hablemos de su proyecto <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default PageShell;
