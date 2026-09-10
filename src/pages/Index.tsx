import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/home/QuienesSomos";
import FormaDeTrabajar from "@/components/home/FormaDeTrabajar";
import SaberDecirNo from "@/components/home/SaberDecirNo";
import Accesos from "@/components/home/Accesos";
import Redes from "@/components/home/Redes";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <QuienesSomos />
      <FormaDeTrabajar />
      <SaberDecirNo />
      <Accesos />
      <Redes />
    </main>
    <Footer />
  </>
);

export default Index;
