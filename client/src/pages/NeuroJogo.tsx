import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { NeuralBackground } from "@/components/NeuralBackground";
import { NeuralParticles } from "@/components/NeuralParticles";
import "../neural.css";

export default function NeuroJogo() {
  const [, setLocation] = useLocation();
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
      <NeuralBackground isActive={false} />
      <NeuralParticles isActive={false} />

      <motion.button
        className="back-button"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setLocation('/')}
        data-testid="button-voltar"
      >
        ← Voltar
      </motion.button>

      <div className="relative z-10 text-center px-4">
        <motion.div
          className="neuro-icon-pulse mx-auto mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          data-testid="icon-neuro"
        >
          ∞
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          data-testid="text-title"
        >
          NeuroJogo
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          data-testid="text-subtitle"
        >
          Em construção...
        </motion.p>

        <motion.p
          className="text-lg text-muted-foreground/80 max-w-md mx-auto"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          data-testid="text-description"
        >
          Em breve, jogos neurais incríveis para estimular sua mente de forma divertida!
        </motion.p>
      </div>
    </div>
  );
}
