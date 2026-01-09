"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import EdgeGlowCard from "../EdgeGlowCard";
import { useLanguage } from "@/contexts/LanguageContext";

const EcosystemComponents = () => {
  const { t } = useLanguage();
  const components = t("kazatomprom.ecosystem.components", []);

  // Accent colors for each component card
  const accentColors = useMemo(() => [
    { accent: "#FF00B7", pill: "Version Control" }, // Pink - Sithub
    { accent: "#208CFF", pill: "AI Analysis" }, // Cyan - AI Analyzer
    { accent: "#00BFB3", pill: "Development" }, // Teal - IDE
  ], []);

  const defaultGlowPalette = {
    glowColor: "#208CFF",
    secondaryGlowColor: "rgba(32,140,255,0.45)",
    topColor: "#208CFF",
    leftColor: "#208CFF",
    rightColor: "rgba(32,140,255,0.45)",
    bottomColor: "rgba(32,140,255,0.45)",
  };

  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25, scale: 0.92 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: "easeOut" } },
  };

  return (
    <section className="relative overflow-visible pb-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-[-280px] h-[620px] w-[1050px] -translate-x-1/2 rounded-full blur-3xl"
          initial={{ opacity: 0.18, scale: 0.98 }}
          animate={{ opacity: [0.16, 0.26, 0.18], scale: [0.98, 1.03, 0.99] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle at 30% 40%, rgba(32,140,255,0.35), transparent 60%), radial-gradient(circle at 70% 60%, rgba(32,140,255,0.2), transparent 65%)",
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
              <span className="text-xs font-semibold tracking-widest text-[#FF00B7] uppercase">Ecosystem</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                {t("kazatomprom.ecosystem.heading", "Core Ecosystem")}
              </span>
            </h2>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed">
              {t("kazatomprom.ecosystem.intro", "A complete technical stack for secure, private development")}
            </p>
          </motion.div>

          {/* Components Grid */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {components.map((component, idx) => {
              const colorConfig = accentColors[idx] || accentColors[0];
              return (
                <motion.div key={idx} variants={item} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                  <EcosystemCard
                    component={component}
                    colorConfig={colorConfig}
                    defaultGlowPalette={defaultGlowPalette}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemComponents;

function EcosystemCard({ component, colorConfig, defaultGlowPalette }) {
  const [pos, setPos] = useState({ x: 18, y: 18 });

  return (
    <EdgeGlowCard
      mode="static"
      spotlight
      {...defaultGlowPalette}
      outerClassName="group relative z-20 h-full rounded-[34px] p-[2px]"
      innerClassName="h-full rounded-[30px]"
    >
      <div
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
        }}
        className="relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/12 p-8 animate-border-shimmer"
        style={{
          boxShadow: "0 26px 70px rgba(0,0,0,0.48)",
          background: "linear-gradient(155deg, rgba(14,18,38,0.92), rgba(2,3,10,0.92))",
        }}
      >
        {/* Cursor spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(320px circle at ${pos.x}px ${pos.y}px, ${colorConfig.accent}33 0%, transparent 62%)`,
          }}
        />

        {/* Decorative corner glow */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-2xl opacity-25"
          style={{ background: colorConfig.accent }}
        />

        {/* Top row: pill + micro dot */}
        <div className="relative mb-6 flex items-center justify-between">
          <span
            className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide"
            style={{
              borderColor: `${colorConfig.accent}40`,
              color: `${colorConfig.accent}`,
              background: `${colorConfig.accent}12`,
              boxShadow: `0 12px 30px ${colorConfig.accent}12`,
            }}
          >
            {colorConfig.pill}
          </span>

          <div
            className="h-2.5 w-2.5 rounded-full"
            style={{
              background: colorConfig.accent,
              boxShadow: `0 0 28px ${colorConfig.accent}95`,
            }}
          />
        </div>

        {/* Icon: neon ring + emoji */}
        <div className="relative mb-5 flex items-center gap-4">
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl blur-[12px] opacity-55"
              style={{ background: colorConfig.accent }}
            />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
              {component.icon}
            </div>
          </div>

          {/* Tiny gradient line */}
          <div className="h-[1px] flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full w-2/3"
              style={{
                background: `linear-gradient(90deg, ${colorConfig.accent}00, ${colorConfig.accent}aa, ${colorConfig.accent}00)`,
              }}
            />
          </div>
        </div>

        <div className="relative flex flex-1 flex-col">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {component.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {component.description}
          </p>

          {/* Features List */}
          <ul className="mt-6 flex-1 space-y-2.5 border-t border-white/10 pt-6">
            {component.features.map((feature, featureIdx) => (
              <li key={featureIdx} className="flex items-start gap-3">
                <svg
                  className="h-4 w-4 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: colorConfig.accent }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white/80 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA: "shiny" button */}
          <div className="mt-7">
            <a
              href="#contact"
              className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              style={{ boxShadow: `0 16px 42px ${colorConfig.accent}14` }}
            >
              {/* sheen */}
              <span
                className="pointer-events-none absolute -inset-y-6 left-[-60%] w-[55%] rotate-12 opacity-0 blur-xl transition-opacity duration-300 group-hover/cta:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)",
                }}
              />
              <span className="relative">Learn more</span>
              <span
                className="relative h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover/cta:scale-125"
                style={{ background: colorConfig.accent }}
              />
            </a>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
      </div>
    </EdgeGlowCard>
  );
}
