"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./page.module.css";
import Header from "../../components/Header";
import { useLanguage } from "../../contexts/LanguageContext";
import { motion, useReducedMotion, useMotionValue, useTransform } from "framer-motion";
import EdgeGlowCard from "../../components/EdgeGlowCard";
import GlowButton from "../../components/GlowButton";
import { CybersecurityLamp } from "../../components/CybersecurityLamp";
import Spotlights from "../../components/Spotlights";
import { Lock, ShieldCheck, Zap, Code2, Brain, Database, Search } from "lucide-react";

const FadeIn = ({ children, className, delay = 0, y = 18 }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: reduce ? 0 : 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

const AdvantageCard = ({ advantage, defaultGlowPalette, cardHover }) => {
  const [pos, setPos] = useState({ x: 18, y: 18 });
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-40, 40], [4, -4]);
  const rotateY = useTransform(mx, [-40, 40], [-4, 4]);
  const IconComponent = advantage.Icon;

  return (
    <motion.div
      className="h-full"
      style={{ perspective: 900 }}
    >
      <motion.div
        className="h-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          mx.set(x / 4);
          my.set(y / 4);
        }}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
      >
        <EdgeGlowCard
          mode="static"
          spotlight
          {...defaultGlowPalette}
          outerClassName="group relative z-10 h-full rounded-[30px] p-[2px] edge-glow-card--default"
          innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
        >
          <motion.div
            className={styles.cardEnhanced}
            {...cardHover}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
            }}
            style={{
              boxShadow: "0 18px 45px rgba(5,12,32,0.55)",
              background: "linear-gradient(150deg, rgba(2,5,12,0.97), rgba(0,1,4,0.98))",
              transform: "translateZ(14px)",
            }}
          >
            {/* Cursor spotlight */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, ${advantage.accent}33 0%, transparent 62%)`,
              }}
            />

            {/* Decorative corner glow */}
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-2xl opacity-25"
              style={{ background: advantage.accent }}
            />

            <div className={styles.cardTop}>
              <span 
                className={styles.badge}
                style={{
                  borderColor: `${advantage.accent}40`,
                  color: `${advantage.accent}`,
                  background: `${advantage.accent}12`,
                  boxShadow: `0 12px 30px ${advantage.accent}12`,
                }}
              >
                {advantage.badge}
              </span>
              <div className={styles.iconWrapper} aria-hidden="true">
                <IconComponent 
                  className={styles.iconSvg}
                  style={{
                    color: advantage.accent,
                    filter: `drop-shadow(0 0 12px ${advantage.accent}70)`,
                  }}
                />
              </div>
            </div>
            <h3 className={styles.h3}>{advantage.title}</h3>
            <p className={styles.p}>{advantage.desc}</p>
          </motion.div>
        </EdgeGlowCard>
      </motion.div>
    </motion.div>
  );
};

export default function KazatompromPage() {
  const { t, language, setLanguage } = useLanguage();

  // ✅ Keep EN/RU only for this page
  useEffect(() => {
    if (!["en", "ru"].includes(language)) setLanguage("en");
  }, [language, setLanguage]);

  const incidents = useMemo(
    () => [
      {
        target: t("kazatomprom.incidents.0.target"),
        year: "2010",
        attack: "Stuxnet",
        impact: t("kazatomprom.incidents.0.impact"),
      },
      {
        target: t("kazatomprom.incidents.1.target"),
        year: "2015",
        attack: "BlackEnergy",
        impact: t("kazatomprom.incidents.1.impact"),
      },
      {
        target: t("kazatomprom.incidents.2.target"),
        year: "2017",
        attack: "TRITON",
        impact: t("kazatomprom.incidents.2.impact"),
      },
      {
        target: t("kazatomprom.incidents.3.target"),
        year: "2021",
        attack: "Colonial Pipeline",
        impact: t("kazatomprom.incidents.3.impact"),
      },
      {
        target: t("kazatomprom.incidents.4.target"),
        year: "2025",
        attack: "PDVSA",
        impact: t("kazatomprom.incidents.4.impact"),
      },
    ],
    [t]
  );

  const cardHover = {
    whileHover: { y: -6, scale: 1.01 },
    transition: { duration: 0.25, ease: "easeOut" },
  };

  const defaultGlowPalette = useMemo(
    () => ({
      glowColor: "#FF00B7",
      secondaryGlowColor: "rgba(32,140,255,0.45)",
      topColor: "#FF00B7",
      leftColor: "#FF00B7",
      rightColor: "rgba(32,140,255,0.45)",
      bottomColor: "rgba(32,140,255,0.45)",
    }),
    []
  );

  return (
    <div className={styles.page}>
      <Header allowedLanguages={["en", "ru"]} />

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          {/* Enhanced Background Layers */}
          <div className={styles.heroBg} aria-hidden="true" />
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroBlobs} aria-hidden="true" />
          
          {/* Animated Spotlights */}
          <Spotlights />
          
          {/* Floating Particles */}
          <div className={styles.heroParticles} aria-hidden="true">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.particle}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 200 - 100],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: i % 3 === 0 ? "#FF00B7" : i % 3 === 1 ? "#00BFFF" : "#37FF8B",
                }}
              />
            ))}
          </div>

          {/* Animated Gradient Orbs */}
          <div className={styles.heroOrbs} aria-hidden="true">
            <motion.div
              className={styles.orb}
              style={{
                background: "radial-gradient(circle, rgba(255, 0, 183, 0.4), transparent 70%)",
                left: "10%",
                top: "20%",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className={styles.orb}
              style={{
                background: "radial-gradient(circle, rgba(0, 191, 255, 0.35), transparent 70%)",
                right: "15%",
                bottom: "25%",
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.45, 0.25],
                x: [0, -25, 0],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className={styles.orb}
              style={{
                background: "radial-gradient(circle, rgba(55, 255, 139, 0.3), transparent 70%)",
                left: "50%",
                top: "60%",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, 20, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>

          {/* Animated Geometric Shapes */}
          <div className={styles.heroShapes} aria-hidden="true">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.geometricShape}
                style={{
                  width: 60 + i * 15,
                  height: 60 + i * 15,
                  borderColor: i % 3 === 0 ? "#FF00B7" : i % 3 === 1 ? "#00BFFF" : "#37FF8B",
                  left: `${15 + i * 12}%`,
                  top: `${20 + (i % 2) * 40}%`,
                  rotate: i * 45,
                }}
                animate={{
                  rotate: [i * 45, i * 45 + 360],
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          {/* Animated Scan Lines */}
          <div className={styles.heroScanLines} aria-hidden="true">
            <motion.div
              className={styles.scanLine}
              animate={{
                y: ["-100%", "200%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className={styles.scanLine}
              animate={{
                y: ["-100%", "200%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                delay: 4,
              }}
            />
          </div>

          <div className={styles.container}>
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.p
                className={styles.kicker}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className={styles.kickerDot}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {t("kazatomprom.hero.kicker", "On-premise AI • Secure SDLC • Zero leakage")}
              </motion.p>
            </motion.div>

            {/* Animated Title with Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className={styles.h1}>
                <motion.span
                  className={styles.h1Gradient}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {t("kazatomprom.hero.title")}
                </motion.span>
              </h1>
            </motion.div>

            {/* Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className={styles.lead}>{t("kazatomprom.hero.subtitle")}</p>
            </motion.div>

            {/* Enhanced Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={styles.buttons}
            >
              <motion.a
                href="#contact"
                style={{ textDecoration: "none" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GlowButton glowColor="#FF00B7">
                  {t("kazatomprom.hero.cta")}
                </GlowButton>
              </motion.a>
              <motion.a
                className={styles.secondaryBtn}
                href="#architecture"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("kazatomprom.hero.cta2")}
              </motion.a>
            </motion.div>

            {/* Enhanced Stats with EdgeGlowCard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={styles.heroStats}
            >
              {[
                { value: "On-prem", label: t("kazatomprom.hero.s1", "Private model hosting"), accent: "#FF00B7", delay: 0 },
                { value: "AI-SOC", label: t("kazatomprom.hero.s2", "Code + risk intelligence"), accent: "#00BFFF", delay: 0.1 },
                { value: "Sithub", label: t("kazatomprom.hero.s3", "Local VCS & governance"), accent: "#37FF8B", delay: 0.2 },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + stat.delay, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <EdgeGlowCard
                    mode="static"
                    spotlight
                    glowColor={stat.accent}
                    secondaryGlowColor="rgba(32,140,255,0.45)"
                    topColor={stat.accent}
                    leftColor={stat.accent}
                    rightColor="rgba(32,140,255,0.45)"
                    bottomColor="rgba(32,140,255,0.45)"
                    outerClassName="group relative z-10 rounded-[24px] p-[2px] edge-glow-card--default"
                    innerClassName="affiliate-card affiliate-card--default rounded-[20px]"
                  >
                    <div
                      className={styles.statEnhanced}
                      style={{
                        boxShadow: `0 12px 35px ${stat.accent}20`,
                        background: "linear-gradient(150deg, rgba(2,5,12,0.97), rgba(0,1,4,0.98))",
                      }}
                    >
                      <motion.div
                        className={styles.statValue}
                        style={{ color: stat.accent }}
                        animate={{
                          textShadow: [
                            `0 0 10px ${stat.accent}40`,
                            `0 0 20px ${stat.accent}60`,
                            `0 0 10px ${stat.accent}40`,
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                  </EdgeGlowCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONSEQUENCES + TABLE */}
        <section className={styles.section}>
          {/* Enhanced Ambient Background */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute left-1/2 top-[-200px] h-[600px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl"
              initial={{ opacity: 0.15, scale: 0.98 }}
              animate={{ opacity: [0.12, 0.22, 0.15], scale: [0.98, 1.02, 0.99] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,0,183,0.50), transparent 60%), radial-gradient(circle at 70% 45%, rgba(32,140,255,0.45), transparent 55%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(70% 55% at 50% 18%, black 50%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(70% 55% at 50% 18%, black 50%, transparent 100%)",
              }}
            />
          </div>

          <div className={styles.container}>
            <FadeIn>
              <div className="relative mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-4">
                  <span className="h-2 w-2 rounded-full bg-[#FF00B7] animate-pulse" />
                  Critical Security Insights
                </div>
                <h2 className={styles.h2}>
                  <span className="relative inline-block">
                    {t("kazatomprom.consequences.title")}
                    <span className="absolute left-1/2 top-[105%] h-[2px] w-[70%] -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
                      <motion.span
                        className="block h-full w-1/2"
                        initial={{ x: "-55%" }}
                        animate={{ x: ["-55%", "105%", "-55%"] }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(255,0,183,0), rgba(255,0,183,0.95), rgba(32,140,255,0.95), rgba(55,255,139,0))",
                        }}
                      />
                    </span>
                  </span>
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className={styles.p}>{t("kazatomprom.consequences.desc")}</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <EdgeGlowCard
                mode="static"
                spotlight
                {...defaultGlowPalette}
                outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default"
                innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
              >
                <div className={styles.tableWrapEnhanced}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>{t("kazatomprom.table.target")}</th>
                        <th>{t("kazatomprom.table.year")}</th>
                        <th>{t("kazatomprom.table.attack")}</th>
                        <th>{t("kazatomprom.table.impact")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {incidents.map((r, idx) => (
                        <motion.tr
                          key={idx}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.45, delay: idx * 0.03 }}
                        >
                          <td>{r.target}</td>
                          <td className={styles.mono}>{r.year}</td>
                          <td className={styles.mono}>{r.attack}</td>
                          <td>{r.impact}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </EdgeGlowCard>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className={styles.note}>
                <span className={styles.noteIcon} aria-hidden="true">
                  ⚠
                </span>
                {t("kazatomprom.consequences.note")}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ADVANTAGES */}
        <section className={styles.sectionAlt}>
          {/* Enhanced Ambient Background */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute left-1/2 top-[-280px] h-[620px] w-[1050px] -translate-x-1/2 rounded-full blur-3xl"
              initial={{ opacity: 0.18, scale: 0.98 }}
              animate={{ opacity: [0.16, 0.26, 0.18], scale: [0.98, 1.03, 0.99] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,0,183,0.60), transparent 60%), radial-gradient(circle at 70% 45%, rgba(32,140,255,0.50), transparent 55%), radial-gradient(circle at 40% 85%, rgba(55,255,139,0.28), transparent 55%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.09) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(70% 55% at 50% 18%, black 50%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(70% 55% at 50% 18%, black 50%, transparent 100%)",
              }}
            />
          </div>

          <div className={styles.container}>
            <FadeIn>
              <div className="relative mb-8 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-4">
                  <span className="h-2 w-2 rounded-full bg-white/60" />
                  Why Choose Our Solution
                </div>
                <h2 className={styles.h2}>
                  <span className="relative inline-block">
                    {t("kazatomprom.advantages.title")}
                    <span className="absolute left-1/2 top-[105%] h-[2px] w-[70%] -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
                      <motion.span
                        className="block h-full w-1/2"
                        initial={{ x: "-55%" }}
                        animate={{ x: ["-55%", "105%", "-55%"] }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(255,0,183,0), rgba(255,0,183,0.95), rgba(32,140,255,0.95), rgba(55,255,139,0))",
                        }}
                      />
                    </span>
                  </span>
                </h2>
              </div>
            </FadeIn>

            <div className={styles.cards}>
              {[
                { 
                  badge: "Privacy", 
                  Icon: Lock, 
                  accent: "#FF00B7",
                  title: t("kazatomprom.advantages.privacy.title"),
                  desc: t("kazatomprom.advantages.privacy.desc")
                },
                { 
                  badge: "Security", 
                  Icon: ShieldCheck, 
                  accent: "#00BFFF",
                  title: t("kazatomprom.advantages.protection.title"),
                  desc: t("kazatomprom.advantages.protection.desc")
                },
                { 
                  badge: "Speed", 
                  Icon: Zap, 
                  accent: "#37FF8B",
                  title: t("kazatomprom.advantages.productivity.title"),
                  desc: t("kazatomprom.advantages.productivity.desc")
                },
              ].map((advantage, idx) => (
                <AdvantageCard 
                  key={idx}
                  advantage={advantage}
                  defaultGlowPalette={defaultGlowPalette}
                  cardHover={cardHover}
                />
              ))}
            </div>
          </div>
        </section>

        {/* COMPONENT 1 */}
        <section className={styles.section}>
          {/* Enhanced Ambient Background */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute left-1/2 top-[-200px] h-[600px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl"
              initial={{ opacity: 0.15, scale: 0.98 }}
              animate={{ opacity: [0.12, 0.22, 0.15], scale: [0.98, 1.02, 0.99] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,0,183,0.50), transparent 60%), radial-gradient(circle at 70% 45%, rgba(32,140,255,0.45), transparent 55%)",
              }}
            />
          </div>

          <div className={styles.container}>
            <FadeIn>
              <div className="relative mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-4">
                  <span className="h-2 w-2 rounded-full bg-[#00BFFF] animate-pulse" />
                  Core Technology
                </div>
                <h2 className={styles.h2}>
                  <span className="relative inline-block">
                    {t("kazatomprom.comp1.title")}
                    <span className="absolute left-1/2 top-[105%] h-[2px] w-[70%] -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
                      <motion.span
                        className="block h-full w-1/2"
                        initial={{ x: "-55%" }}
                        animate={{ x: ["-55%", "105%", "-55%"] }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(255,0,183,0), rgba(255,0,183,0.95), rgba(32,140,255,0.95), rgba(55,255,139,0))",
                        }}
                      />
                    </span>
                  </span>
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className={styles.p}>{t("kazatomprom.comp1.desc")}</p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <ul className={styles.list}>
                <li>{t("kazatomprom.comp1.b1")}</li>
                <li>{t("kazatomprom.comp1.b2")}</li>
                <li>{t("kazatomprom.comp1.b3")}</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.12}>
              <EdgeGlowCard
                mode="static"
                spotlight
                {...defaultGlowPalette}
                outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default"
                innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
              >
                <div className={styles.subBlockEnhanced}>
                  <div className={styles.subHeader}>
                    <h3 className={styles.h3}>{t("kazatomprom.comp1.ai.title")}</h3>
                    <span className={styles.pill}>{t("kazatomprom.comp1.ai.pill", "AI checks")}</span>
                  </div>

                  <div className={styles.cards3}>
                <EdgeGlowCard
                  mode="static"
                  spotlight
                  {...defaultGlowPalette}
                  outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default"
                  innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
                >
                  <motion.div
                    className={styles.cardEnhanced}
                    {...cardHover}
                    style={{
                      boxShadow: "0 18px 45px rgba(5,12,32,0.55)",
                      background: "linear-gradient(150deg, rgba(2,5,12,0.97), rgba(0,1,4,0.98))",
                    }}
                  >
                    <h4 className={styles.h4}>{t("kazatomprom.comp1.ai.1.title")}</h4>
                    <p className={styles.p}>{t("kazatomprom.comp1.ai.1.desc")}</p>
                  </motion.div>
                </EdgeGlowCard>
                <EdgeGlowCard
                  mode="static"
                  spotlight
                  {...defaultGlowPalette}
                  outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default"
                  innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
                >
                  <motion.div
                    className={styles.cardEnhanced}
                    {...cardHover}
                    style={{
                      boxShadow: "0 18px 45px rgba(5,12,32,0.55)",
                      background: "linear-gradient(150deg, rgba(2,5,12,0.97), rgba(0,1,4,0.98))",
                    }}
                  >
                    <h4 className={styles.h4}>{t("kazatomprom.comp1.ai.2.title")}</h4>
                    <p className={styles.p}>{t("kazatomprom.comp1.ai.2.desc")}</p>
                  </motion.div>
                </EdgeGlowCard>
                <EdgeGlowCard
                  mode="static"
                  spotlight
                  {...defaultGlowPalette}
                  outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default"
                  innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
                >
                  <motion.div
                    className={styles.cardEnhanced}
                    {...cardHover}
                    style={{
                      boxShadow: "0 18px 45px rgba(5,12,32,0.55)",
                      background: "linear-gradient(150deg, rgba(2,5,12,0.97), rgba(0,1,4,0.98))",
                    }}
                  >
                    <h4 className={styles.h4}>{t("kazatomprom.comp1.ai.3.title")}</h4>
                    <p className={styles.p}>{t("kazatomprom.comp1.ai.3.desc")}</p>
                  </motion.div>
                </EdgeGlowCard>
                  </div>
                </div>
              </EdgeGlowCard>
            </FadeIn>
          </div>
        </section>

        {/* COMPONENT 2 */}
        <section className={styles.sectionAlt}>
          {/* Enhanced Ambient Background */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute left-1/2 top-[-280px] h-[620px] w-[1050px] -translate-x-1/2 rounded-full blur-3xl"
              initial={{ opacity: 0.18, scale: 0.98 }}
              animate={{ opacity: [0.16, 0.26, 0.18], scale: [0.98, 1.03, 0.99] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,0,183,0.60), transparent 60%), radial-gradient(circle at 70% 45%, rgba(32,140,255,0.50), transparent 55%), radial-gradient(circle at 40% 85%, rgba(55,255,139,0.28), transparent 55%)",
              }}
            />
          </div>

          <div className={styles.container}>
            <FadeIn>
              <div className="relative mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-4">
                  <span className="h-2 w-2 rounded-full bg-[#37FF8B] animate-pulse" />
                  Advanced Features
                </div>
                <h2 className={styles.h2}>
                  <span className="relative inline-block">
                    {t("kazatomprom.comp2.title")}
                    <span className="absolute left-1/2 top-[105%] h-[2px] w-[70%] -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
                      <motion.span
                        className="block h-full w-1/2"
                        initial={{ x: "-55%" }}
                        animate={{ x: ["-55%", "105%", "-55%"] }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(255,0,183,0), rgba(255,0,183,0.95), rgba(32,140,255,0.95), rgba(55,255,139,0))",
                        }}
                      />
                    </span>
                  </span>
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className={styles.p}>{t("kazatomprom.comp2.desc")}</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ul className={styles.list}>
                <li>{t("kazatomprom.comp2.b1")}</li>
                <li>{t("kazatomprom.comp2.b2")}</li>
                <li>{t("kazatomprom.comp2.b3")}</li>
                <li>{t("kazatomprom.comp2.b4")}</li>
                <li>{t("kazatomprom.comp2.b5")}</li>
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section id="architecture" className={styles.section}>
          {/* Enhanced Ambient Background */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute left-1/2 top-[-200px] h-[600px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl"
              initial={{ opacity: 0.15, scale: 0.98 }}
              animate={{ opacity: [0.12, 0.22, 0.15], scale: [0.98, 1.02, 0.99] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,0,183,0.50), transparent 60%), radial-gradient(circle at 70% 45%, rgba(32,140,255,0.45), transparent 55%)",
              }}
            />
          </div>

          <div className={styles.container}>
            <FadeIn>
              <div className="relative mb-8 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-4">
                  <span className="h-2 w-2 rounded-full bg-white/60" />
                  System Architecture
                </div>
                <h2 className={styles.h2}>
                  <span className="relative inline-block">
                    {t("kazatomprom.arch.title")}
                    <span className="absolute left-1/2 top-[105%] h-[2px] w-[70%] -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
                      <motion.span
                        className="block h-full w-1/2"
                        initial={{ x: "-55%" }}
                        animate={{ x: ["-55%", "105%", "-55%"] }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(255,0,183,0), rgba(255,0,183,0.95), rgba(32,140,255,0.95), rgba(55,255,139,0))",
                        }}
                      />
                    </span>
                  </span>
                </h2>
              </div>
            </FadeIn>

            <div className={styles.arch}>
              {[
                { k: "dev", Icon: Code2, accent: "#FF00B7" },
                { k: "qwen", Icon: Brain, accent: "#00BFFF" },
                { k: "sithub", Icon: Database, accent: "#37FF8B" },
                { k: "ai", Icon: Search, accent: "#FF00B7" },
              ].map((item, idx) => {
                const IconComponent = item.Icon;
                return (
                <EdgeGlowCard
                  key={item.k}
                  mode="static"
                  spotlight
                  glowColor={item.accent}
                  secondaryGlowColor="rgba(32,140,255,0.45)"
                  topColor={item.accent}
                  leftColor={item.accent}
                  rightColor="rgba(32,140,255,0.45)"
                  bottomColor="rgba(32,140,255,0.45)"
                  outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default"
                  innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
                >
                  <motion.div
                    className={styles.archCardEnhanced}
                    initial={{ opacity: 0, y: 14, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6 }}
                    style={{
                      boxShadow: "0 18px 45px rgba(5,12,32,0.55)",
                      background: "linear-gradient(150deg, rgba(2,5,12,0.97), rgba(0,1,4,0.98))",
                    }}
                  >
                    <div className={styles.archHead}>
                      <div className={styles.archIcon} aria-hidden="true">
                        <IconComponent className={styles.iconSvg} />
                      </div>
                      <h3 className={styles.h3}>{t(`kazatomprom.arch.${item.k}.title`)}</h3>
                    </div>
                    <p className={styles.p}>{t(`kazatomprom.arch.${item.k}.desc`)}</p>
                  </motion.div>
                </EdgeGlowCard>
                );
              })}
            </div>

            <FadeIn delay={0.05}>
              <div className={styles.archNote}>
                <span className={styles.archDot} aria-hidden="true" />
                {t(
                  "kazatomprom.arch.note",
                  "All components can run on a single isolated server inside your perimeter."
                )}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Cybersecurity Lamp Break */}
        <CybersecurityLamp
          translationKey="kazatomprom.lamp.title"
          fallbackTitle="Secure AI Infrastructure"
          containerClassName="!-z-10 -mt-40 -mb-36 min-h-[52vh]"
          headingClassName="mt-2 -mb-6 bg-gradient-to-br from-pink-400 to-purple-600 py-3 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-[3.25rem]"
        />

        {/* CTA */}
        <section id="contact" className={styles.cta}>
          <div className={styles.ctaBg} aria-hidden="true" />
          {/* Enhanced Ambient Background */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute left-1/2 top-[-200px] h-[700px] w-[1200px] -translate-x-1/2 rounded-full blur-3xl"
              initial={{ opacity: 0.2, scale: 0.95 }}
              animate={{ opacity: [0.15, 0.28, 0.2], scale: [0.95, 1.05, 0.98] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(circle at 25% 25%, rgba(255,0,183,0.60), transparent 60%), radial-gradient(circle at 75% 50%, rgba(32,140,255,0.55), transparent 55%), radial-gradient(circle at 50% 80%, rgba(55,255,139,0.35), transparent 55%)",
              }}
            />
          </div>

          <div className={styles.container}>
            <FadeIn>
              <div className="relative mb-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.25)] mb-4">
                  <span className="h-2 w-2 rounded-full bg-[#FF00B7] animate-pulse" />
                  Get Started
                </div>
                <h2 className={styles.h2}>
                  <span className="relative inline-block">
                    {t("kazatomprom.cta.title")}
                    <span className="absolute left-1/2 top-[105%] h-[2px] w-[70%] -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
                      <motion.span
                        className="block h-full w-1/2"
                        initial={{ x: "-55%" }}
                        animate={{ x: ["-55%", "105%", "-55%"] }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(255,0,183,0), rgba(255,0,183,0.95), rgba(32,140,255,0.95), rgba(55,255,139,0))",
                        }}
                      />
                    </span>
                  </span>
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className={styles.p}>{t("kazatomprom.cta.desc")}</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className={styles.buttons}>
                <a href="/mail" style={{ textDecoration: "none" }}>
                  <GlowButton glowColor="#FF00B7">
                    {t("kazatomprom.cta.mail")}
                  </GlowButton>
                </a>
                <a className={styles.secondaryBtn} href="/">
                  {t("kazatomprom.cta.back")}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
}
