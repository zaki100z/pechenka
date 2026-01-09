"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ArchitectureVisualization = () => {
  const { t } = useLanguage();
  const layers = t("kazatomprom.architecture.layers", []);

  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18, scale: 0.985 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55 } },
  };

  return (
    <section className="relative overflow-visible pb-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
          initial={{ opacity: 0.18, scale: 0.98 }}
          animate={{ opacity: [0.16, 0.26, 0.18], scale: [0.98, 1.03, 0.99] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(32,140,255,0.35), transparent 60%), radial-gradient(circle at 50% 0%, rgba(0,191,255,0.25), transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={item} className="text-left space-y-3 max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#FF00B7] to-transparent" />
              <span className="text-xs font-semibold tracking-widest text-[#FF00B7] uppercase">Architecture</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                {t("kazatomprom.architecture.heading", "Security Architecture")}
              </span>
            </h2>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed">
              {t("kazatomprom.architecture.description", "Concentric layers of protection with your code at the center")}
            </p>
          </motion.div>

          {/* Concentric Circle Architecture */}
          <motion.div
            variants={item}
            className="relative w-full max-w-3xl mx-auto flex flex-col lg:flex-row items-center gap-12"
          >
            <svg viewBox="0 0 400 400" className="w-full max-w-sm" xmlns="http://www.w3.org/2000/svg">
              {/* Outer Circle - AI Code Analyzer */}
              <motion.circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="#208CFF"
                strokeWidth="2"
                opacity="0.4"
                animate={{ strokeWidth: [2, 3, 2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Third Circle - Sithub */}
              <motion.circle
                cx="200"
                cy="200"
                r="130"
                fill="none"
                stroke="#FF00B7"
                strokeWidth="2"
                opacity="0.5"
                animate={{ strokeWidth: [2, 3, 2] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
              />
              
              {/* Second Circle - Qwen-Code */}
              <motion.circle
                cx="200"
                cy="200"
                r="80"
                fill="none"
                stroke="#00BFB3"
                strokeWidth="2"
                opacity="0.6"
                animate={{ strokeWidth: [2, 3, 2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
              />
              
              {/* Center Circle - Developer */}
              <circle
                cx="200"
                cy="200"
                r="40"
                fill="url(#gradient)"
                opacity="0.9"
              />
              
              {/* Gradient Definition */}
              <defs>
                <radialGradient id="gradient">
                  <stop offset="0%" stopColor="#208CFF" />
                  <stop offset="100%" stopColor="#00BFB3" />
                </radialGradient>
              </defs>

              {/* Labels */}
              <text x="200" y="210" textAnchor="middle" className="fill-white font-bold text-sm">
                Developer
              </text>

              <text x="200" y="120" textAnchor="middle" className="fill-[#00BFB3] font-semibold text-xs">
                Qwen-Code
              </text>

              <text x="100" y="200" textAnchor="middle" className="fill-[#FF00B7] font-semibold text-xs">
                Sithub
              </text>

              <text x="240" y="295" textAnchor="middle" className="fill-[#208CFF] font-semibold text-xs">
                AI Analyzer
              </text>
            </svg>

            {/* Layers Info */}
            <div className="flex flex-col gap-4 flex-grow w-full lg:w-auto">
              {layers.map((layer, idx) => {
                const accentColors = ["#00BFB3", "#FF00B7", "#FF00B7", "#208CFF"];
                const accentColor = accentColors[idx] || accentColors[0];
                
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-[20px] border border-white/10 p-4 sm:p-5 transition-all duration-300 hover:border-white/20 animate-neon-glow"
                    style={{
                      background: "linear-gradient(150deg, rgba(5,12,32,0.7), rgba(1,2,6,0.8))",
                      boxShadow: "0 10px 30px rgba(5,12,32,0.4)",
                    }}
                  >
                    {/* Accent glow on hover */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(90% 130% at 20% -10%, ${accentColor}3d 0%, transparent 70%)`,
                      }}
                    />
                    
                    <div className="relative flex gap-4">
                      <div 
                        className="w-4 h-4 rounded-full flex-shrink-0 mt-1 ring-2 ring-offset-2 ring-offset-[#01091C]"
                        style={{ backgroundColor: accentColor, ringColor: accentColor }}
                      ></div>
                      <div className="flex-grow">
                        <h3 className="text-white font-semibold text-sm sm:text-base">{layer.name}</h3>
                        <p className="text-white/60 text-xs sm:text-sm leading-relaxed mt-1">{layer.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureVisualization;
