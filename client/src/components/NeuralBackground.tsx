import { motion } from "framer-motion";
import neuralBg from "@assets/generated_images/Neural_network_background_pattern_a0a300e6.png";

interface NeuralBackgroundProps {
  isActive: boolean;
}

export function NeuralBackground({ isActive }: NeuralBackgroundProps) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${neuralBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          scale: isActive ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: 4,
          repeat: isActive ? Infinity : 0,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.08) 0%, transparent 50%)",
        }}
        animate={{
          opacity: isActive ? [0.3, 0.6, 0.3] : 0.3,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)",
        }}
        animate={{
          opacity: isActive ? [0.2, 0.5, 0.2] : 0.2,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
    </div>
  );
}
