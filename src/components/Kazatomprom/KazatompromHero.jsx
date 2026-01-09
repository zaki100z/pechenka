"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const KazatompromHero = () => {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      className="relative overflow-visible pt-0 sm:pt-1 lg:pt-2 pb-20 sm:pb-28 lg:pb-36 font-sans"
      style={{ 
        backgroundColor: '#01091C',
      }}
    >
      {/* Subtle ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-[-200px] h-[700px] w-[1200px] -translate-x-1/2 rounded-full blur-3xl"
          initial={{ opacity: 0.1, scale: 0.95 }}
          animate={{ 
            opacity: [0.08, 0.15, 0.1], 
            scale: [0.95, 1.02, 0.98] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle at 25% 25%, rgba(32,140,255,0.4), transparent 60%), radial-gradient(circle at 75% 50%, rgba(255,0,183,0.35), transparent 55%)",
          }}
        />
        
        {/* Floating accent orbs */}
        <motion.div
          className="absolute top-1/4 left-10 h-32 w-32 rounded-full blur-2xl opacity-0"
          animate={{
            opacity: [0, 0.15, 0.1, 0.15, 0],
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "radial-gradient(circle, rgba(255,0,183,0.6), transparent)" }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-20 h-40 w-40 rounded-full blur-2xl opacity-0"
          animate={{
            opacity: [0, 0.12, 0.08, 0.12, 0],
            y: [0, 30, 0],
            x: [0, -25, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ background: "radial-gradient(circle, rgba(32,140,255,0.5), transparent)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-10 lg:gap-14"
        >
          {/* Badge */}
          <motion.div
            variants={item}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center rounded-full border border-[rgba(255,0,183,0.35)] bg-[rgba(255,0,183,0.18)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 shadow-[0_12px_35px_rgba(255,0,183,0.22)] w-fit"
          >
            <span className="h-2 w-2 rounded-full bg-[#FF00B7] animate-pulse mr-2" />
            Enterprise Security Solution
          </motion.div>

          {/* Main Title */}
          <motion.div variants={item} className="space-y-4">
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                {t("kazatomprom.hero.title", "Secure Software Development Ecosystem")}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-white/80 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl"
          >
            {t("kazatomprom.hero.subtitle", "On-Premise Solution for Critical Infrastructure")}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            {t("kazatomprom.hero.description", "A comprehensive security solution designed specifically for Kazakhstan's largest industrial enterprises...")}
          </motion.p>

          {/* Partnership Badge */}
          <motion.div
            variants={item}
            className="flex items-center gap-3 pt-4"
          >
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-white/20 to-transparent"></div>
            <p className="text-white/60 text-sm italic">
              {t("kazatomprom.hero.partnership", "A Collaboration Between Kazatomprom and Silence AI")}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
          >
            <a
              href="#contact"
              className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-8 py-4 text-base sm:text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(255,0,183,0.5)]"
              style={{
                background:
                  "linear-gradient(135deg, #FF00B7 0%, #E500A3 100%)",
                boxShadow: "0 16px 42px rgba(255,0,183,0.4)",
              }}
            >
              <span className="pointer-events-none absolute -inset-y-6 left-[-60%] w-[55%] rotate-12 opacity-0 blur-xl transition-opacity duration-300 group-hover/btn:opacity-100" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }} />
              <span className="relative">{t("kazatomprom.cta.buttonPrimary", "Request Demonstration")}</span>
              <span className="relative">→</span>
            </a>
            <a
              href="#specifications"
              className="group/btn2 relative inline-flex items-center justify-center gap-2 rounded-2xl border border-[#FF00B7]/40 bg-[#FF00B7]/10 px-8 py-4 text-base sm:text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF00B7]/70 hover:bg-[#FF00B7]/20 hover:shadow-[0_20px_50px_rgba(255,0,183,0.3)]"
              style={{
                boxShadow: "0 16px 42px rgba(255,0,183,0.2)",
              }}
            >
              <span className="relative">{t("kazatomprom.cta.buttonSecondary", "Download Specification")}</span>
              <span className="relative h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover/btn2:scale-125" style={{ background: "rgba(32,140,255,0.8)" }} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KazatompromHero;
