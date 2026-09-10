import { motion } from "framer-motion";

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
    {/* Video background */}
    <div className="absolute inset-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        poster=""
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
    </div>

    <div className="container relative z-10 mx-auto px-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-primary font-medium tracking-widest text-sm uppercase mb-4"
      >
        Energía solar residencial
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground max-w-2xl leading-tight mb-6"
      >
        La energía en tu casa debería ser simple
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-primary-foreground/80 text-lg md:text-xl max-w-lg mb-10"
      >
        Diseñamos sistemas solares pensados para el uso real de tu hogar. Ajustados a tu consumo, tu espacio y los hábitos de tu familia.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-4"
      >
        <a
          href="https://wa.me/5493518670464?text=Hola%2C%20quiero%20solicitar%20un%20estudio%20solar%20gratuito"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity text-base"
        >
          Solicitar estudio gratuito
        </a>
        <a
          href="#proceso"
          className="border border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors text-base"
        >
          Cómo trabajamos
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
