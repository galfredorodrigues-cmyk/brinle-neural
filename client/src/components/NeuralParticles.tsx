import { motion } from "framer-motion";

interface NeuralParticlesProps {
  isActive: boolean;
}

export function NeuralParticles({ isActive }: NeuralParticlesProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${100 + Math.random() * 20}%`,
          }}
          animate={{
            y: [0, -window.innerHeight - 200],
            opacity: isActive ? [0.1, 0.8, 0.1] : [0.05, 0.3, 0.05],
            scale: isActive ? [0.8, 1.5, 0.8] : [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
