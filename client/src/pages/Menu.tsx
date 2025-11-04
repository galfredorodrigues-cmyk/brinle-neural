import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Palette, Brain, Heart, Zap, Gamepad2 } from "lucide-react";
import { modosConfig } from "@shared/modos";
import { NeuralBackground } from "@/components/NeuralBackground";
import { NeuralParticles } from "@/components/NeuralParticles";
import "../neural.css";

const iconMap = {
  Palette,
  Brain,
  Heart,
  Zap,
};

export default function Menu() {
  const [, setLocation] = useLocation();
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
      <NeuralBackground isActive={false} />
      <NeuralParticles isActive={false} />

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
          BrinLê Neuro
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          data-testid="text-subtitle"
        >
          Escolha seu modo mental:
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {Object.values(modosConfig).map((modo, index) => {
            const Icon = iconMap[modo.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={modo.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <motion.button
                  className="w-full menu-button"
                  aria-label={`Modo ${modo.titulo}`}
                  title={`Modo ${modo.titulo}`}
                  data-testid={`button-modo-${modo.id}`}
                  onClick={() => setLocation(`/modo/${modo.id}`)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-6 h-6 mr-3" />
                  <span className="text-xl font-semibold">{modo.titulo}</span>
                </motion.button>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <motion.button
              className="w-full menu-button"
              aria-label="NeuroJogo"
              title="NeuroJogo"
              data-testid="button-neurojogo"
              onClick={() => setLocation('/neurojogo')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Gamepad2 className="w-6 h-6 mr-3" />
              <span className="text-xl font-semibold">NeuroJogo</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
