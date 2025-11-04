import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useLocation } from "wouter";
import { Palette, Brain, Heart, Zap } from "lucide-react";
import * as Tone from "tone";
import { modosConfig, type ModoType } from "@shared/modos";
import { NeuralBackground } from "@/components/NeuralBackground";
import { NeuralParticles } from "@/components/NeuralParticles";
import "../neural.css";

const iconMap = {
  Palette,
  Brain,
  Heart,
  Zap,
};

export default function Modo() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const modoId = params.modo as ModoType;
  const modo = modosConfig[modoId];

  const [isActive, setIsActive] = useState(false);
  const [currentWord, setCurrentWord] = useState<string | null>(null);
  const [wordColor, setWordColor] = useState(modo?.cores[0] || "#FFD93D");
  const [wordPosition, setWordPosition] = useState({ x: 50, y: 50 });
  
  const oscRef = useRef<Tone.Oscillator | null>(null);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const particleStyles = useMemo(() => {
    return Array.from({ length: 25 }, () => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${8 + Math.random() * 5}s`
    }));
  }, []);

  useEffect(() => {
    if (isActive) {
      cycleWords();
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setCurrentWord(null);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current.dispose();
        oscRef.current = null;
      }
    };
  }, [isActive, modoId]);

  const cycleWords = () => {
    if (!modo) return;

    const showWord = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      const randomWord = modo.palavras[Math.floor(Math.random() * modo.palavras.length)];
      const randomColor = modo.cores[Math.floor(Math.random() * modo.cores.length)];
      
      let randomX: number;
      let randomY: number;
      do {
        randomX = 10 + Math.random() * 80;
        randomY = 10 + Math.random() * 80;
      } while (randomX > 35 && randomX < 65 && randomY > 35 && randomY < 65);
      
      setCurrentWord(randomWord);
      setWordColor(randomColor);
      setWordPosition({ x: randomX, y: randomY });
      
      timeoutRef.current = window.setTimeout(() => {
        setCurrentWord(null);
        timeoutRef.current = null;
      }, 5500);
    };
    
    showWord();
    intervalRef.current = window.setInterval(showWord, 6000);
  };

  const handleActivation = async () => {
    if (!modo) return;

    await Tone.start();

    if (!isActive) {
      const oscillator = new Tone.Oscillator(
        modo.som.frequencia,
        modo.som.tipo
      ).toDestination();
      oscillator.volume.value = -20;
      oscillator.start();

      oscRef.current = oscillator;
      setIsActive(true);
    } else {
      oscRef.current?.stop();
      oscRef.current?.dispose();
      oscRef.current = null;
      setIsActive(false);
    }
  };

  if (!modo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-not-found">
            Modo não encontrado
          </h1>
          <motion.button
            className="menu-button inline-flex"
            data-testid="button-voltar-menu"
            onClick={() => setLocation('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            ← Voltar ao Menu
          </motion.button>
        </div>
      </div>
    );
  }

  const Icon = iconMap[modo.icon as keyof typeof iconMap];

  return (
    <div className="neuro-container">
      <NeuralBackground isActive={isActive} />
      <NeuralParticles isActive={isActive} />

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

      <div className="particles-container">
        {particleStyles.map((style, i) => (
          <div
            key={i}
            className="particle-drift"
            style={style}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentWord && (
          <motion.div
            key={currentWord}
            className="floating-word"
            style={{
              left: `${wordPosition.x}%`,
              top: `${wordPosition.y}%`,
              color: wordColor,
              textShadow: `0 0 30px ${wordColor}80, 0 0 60px ${wordColor}40`,
            }}
            initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 1.1],
              x: '-50%',
              y: ['-50%', 'calc(-50% - 10px)', 'calc(-50% - 10px)', 'calc(-50% - 20px)']
            }}
            transition={{ 
              duration: 5.5,
              times: [0, 0.18, 0.85, 1],
              ease: "easeInOut",
              y: {
                duration: 5.5,
                times: [0, 0.3, 0.7, 1],
                repeat: 0,
                ease: "easeInOut"
              }
            }}
            data-testid="floating-word"
          >
            {currentWord}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={`infinity-icon ${isActive ? "active" : ""}`}
        onClick={handleActivation}
        whileTap={{ scale: 0.95 }}
        data-testid="button-neuro-toggle"
      >
        <div className="infinity-symbol">∞</div>
      </motion.div>

      <motion.div
        className="instruction-text"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
        data-testid="text-instruction"
      >
        {isActive 
          ? `Modo ${modo.titulo} Ativo — Deixe as palavras fluírem` 
          : "Toque o símbolo infinito para ativar"}
      </motion.div>

      <div className="status-indicator" data-testid="text-status">
        <motion.div 
          className={`status-dot ${isActive ? "active" : ""}`}
          animate={isActive ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span>
          {isActive 
            ? `Sessão de ${modo.titulo} em Andamento` 
            : "Aguardando Ativação"}
        </span>
      </div>

      <div className="app-title" data-testid="text-title">
        <div className="flex items-center justify-center gap-3">
          <span>BrinLê Neuro</span>
          <Icon className="w-8 h-8" />
          <span>{modo.titulo}</span>
        </div>
      </div>
    </div>
  );
}
