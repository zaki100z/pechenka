"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import EdgeGlowCard from "../EdgeGlowCard";
import { useLanguage } from "@/contexts/LanguageContext";

const KazatompromCTA = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, delayChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18, scale: 0.985 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55 } },
  };

  return (
    <section className="relative overflow-visible pb-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 bottom-[-200px] h-[600px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl"
          initial={{ opacity: 0.18, scale: 0.98 }}
          animate={{ opacity: [0.16, 0.26, 0.18], scale: [0.98, 1.03, 0.99] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,0,183,0.3), transparent 60%), radial-gradient(circle at 50% 100%, rgba(32,140,255,0.2), transparent 65%)",
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
          {/* Main Heading */}
          <motion.div variants={item} className="text-left space-y-4 max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#FF00B7] to-transparent" />
              <span className="text-xs font-semibold tracking-widest text-[#FF00B7] uppercase">Get Started</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                {t("kazatomprom.cta.heading", "Ready to Secure Your Infrastructure?")}
              </span>
            </h2>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed">
              {t("kazatomprom.cta.message", "Join Kazakhstan's leading industrial enterprises in protecting critical infrastructure...")}
            </p>
          </motion.div>

          {/* Key Benefits Grid */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: "🏢",
                title: "Enterprise Security",
                description: "Designed for Kazakhstan's largest industrial enterprises",
                accent: "#FF00B7",
                pill: "Security-First",
              },
              {
                icon: "🔐",
                title: "Complete Control",
                description: "Keep your code and intellectual property entirely on-premise",
                accent: "#208CFF",
                pill: "On-Premise",
              },
              {
                icon: "⚡",
                title: "Integrated Solution",
                description: "Version control, AI analysis, and development all in one ecosystem",
                accent: "#00BFB3",
                pill: "All-in-One",
              },
            ].map((benefit, idx) => (
              <motion.div key={idx} variants={item} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                <BenefitCard benefit={benefit} />
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={item} className="max-w-2xl">
            <EdgeGlowCard
              glowColor="#FF00B7"
              secondaryGlowColor="rgba(32,140,255,0.35)"
              topColor="#FF00B7"
              leftColor="#FF00B7"
              rightColor="rgba(32,140,255,0.35)"
              bottomColor="rgba(32,140,255,0.35)"
            >
              <form onSubmit={handleSubmit} className="space-y-6 p-8 sm:p-12 border border-[#FF00B7]/30 rounded-2xl animate-neon-glow" style={{ background: "linear-gradient(145deg, rgba(255,0,183,0.05), rgba(32,140,255,0.03))" }}>
                <div className="space-y-4">
                  <label className="block text-white font-semibold text-lg">
                    {t("kazatomprom.cta.formLabel", "Enter your email to get started")}
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@company.kz"
                      className="flex-1 px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#FF00B7] focus:ring-2 focus:ring-[#FF00B7]/30 transition-all backdrop-blur-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-[#FF00B7] to-[#E500A3] hover:shadow-[0_25px_60px_rgba(255,0,183,0.5)] text-white font-semibold rounded-xl transition-all shadow-lg whitespace-nowrap hover:-translate-y-1"
                    >
                      {t("kazatomprom.cta.buttonPrimary", "Get Started")}
                    </button>
                  </div>
                </div>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#00BFB3]/20 border border-[#00BFB3]/50 rounded-xl p-4 text-[#00BFB3] text-center font-semibold"
                  >
                    ✓ Thank you! We'll contact you soon.
                  </motion.div>
                )}
              </form>
            </EdgeGlowCard>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-8"
          >
            {[
              { number: "50+", label: "Enterprise Clients", accent: "#FF00B7" },
              { number: "15+", label: "Years Experience", accent: "#208CFF" },
              { number: "99.9%", label: "System Uptime", accent: "#00BFB3" },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={item} className="group relative overflow-hidden rounded-[20px] border border-white/10 p-6 sm:p-8 text-center transition-all duration-300 hover:border-white/20 animate-rainbow-border"
                style={{
                  background: "linear-gradient(150deg, rgba(5,12,32,0.7), rgba(1,2,6,0.8))",
                  boxShadow: "0 10px 30px rgba(5,12,32,0.4)",
                }}
              >
                {/* Accent glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(90% 130% at 50% -20%, ${stat.accent}3d 0%, transparent 70%)`,
                  }}
                />
                
                <div className="relative">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" style={{ color: stat.accent }}>{stat.number}</h3>
                  <p className="text-white/60 text-xs sm:text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KazatompromCTA;

function BenefitCard({ benefit }) {
  const [pos, setPos] = useState({ x: 18, y: 18 });

  const defaultGlowPalette = {
    glowColor: "#208CFF",
    secondaryGlowColor: "rgba(32,140,255,0.45)",
    topColor: "#208CFF",
    leftColor: "#208CFF",
    rightColor: "rgba(32,140,255,0.45)",
    bottomColor: "rgba(32,140,255,0.45)",
  };

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
        className="relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/12 p-8 animate-glow-pulse"
        style={{
          boxShadow: "0 26px 70px rgba(0,0,0,0.48)",
          background: "linear-gradient(155deg, rgba(14,18,38,0.92), rgba(2,3,10,0.92))",
        }}
      >
        {/* Cursor spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(320px circle at ${pos.x}px ${pos.y}px, ${benefit.accent}33 0%, transparent 62%)`,
          }}
        />

        {/* Decorative corner glow */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-2xl opacity-25"
          style={{ background: benefit.accent }}
        />

        {/* Top row: pill + micro dot */}
        <div className="relative mb-6 flex items-center justify-between">
          <span
            className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide"
            style={{
              borderColor: `${benefit.accent}40`,
              color: `${benefit.accent}`,
              background: `${benefit.accent}12`,
              boxShadow: `0 12px 30px ${benefit.accent}12`,
            }}
          >
            {benefit.pill}
          </span>

          <div
            className="h-2.5 w-2.5 rounded-full"
            style={{
              background: benefit.accent,
              boxShadow: `0 0 28px ${benefit.accent}95`,
            }}
          />
        </div>

        {/* Icon: neon ring */}
        <div className="relative mb-5 flex items-center gap-4">
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl blur-[12px] opacity-55"
              style={{ background: benefit.accent }}
            />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
              {benefit.icon}
            </div>
          </div>

          {/* Tiny gradient line */}
          <div className="h-[1px] flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full w-2/3"
              style={{
                background: `linear-gradient(90deg, ${benefit.accent}00, ${benefit.accent}aa, ${benefit.accent}00)`,
              }}
            />
          </div>
        </div>

        <div className="relative flex flex-1 flex-col">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {benefit.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {benefit.description}
          </p>

          {/* CTA: "shiny" button */}
          <div className="mt-7">
            <a
              href="#contact"
              className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              style={{ boxShadow: `0 16px 42px ${benefit.accent}14` }}
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
                style={{ background: benefit.accent }}
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
