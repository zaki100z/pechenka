"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import EdgeGlowCard from "../EdgeGlowCard";
import { useLanguage } from "@/contexts/LanguageContext";

const IndustryRisks = () => {
  const { t } = useLanguage();
  const [hoveredRow, setHoveredRow] = useState(null);

  const tableRows = t("kazatomprom.industryRisks.table.rows", []);
  const headers = t("kazatomprom.industryRisks.table.headers", []);

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
    <section className="relative overflow-visible pb-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute right-1/4 top-[-100px] h-[500px] w-[900px] rounded-full blur-3xl"
          initial={{ opacity: 0.18, scale: 0.98 }}
          animate={{ opacity: [0.16, 0.26, 0.18], scale: [0.98, 1.03, 0.99] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(255,0,183,0.25), transparent 60%), radial-gradient(circle at 60% 70%, rgba(32,140,255,0.2), transparent 65%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={item} className="text-left space-y-3 max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#FF00B7] to-transparent" />
              <span className="text-xs font-semibold tracking-widest text-[#FF00B7] uppercase">Threats</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                {t("kazatomprom.industryRisks.heading", "Critical Infrastructure Threats")}
              </span>
            </h2>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed">
              {t("kazatomprom.industryRisks.intro", "Real-world attacks on industrial systems demonstrating the need for robust security")}
            </p>
          </motion.div>

          {/* Threats Table - Wrapped in Container */}
          <motion.div variants={item} className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#050816]/55 p-6 sm:p-10 mb-12 animate-border-wave">
            {/* Aurora background */}
            <div className="pointer-events-none absolute inset-0">
              <motion.div
                className="absolute right-1/4 top-[-100px] h-[500px] w-[900px] rounded-full blur-3xl"
                initial={{ opacity: 0.18, scale: 0.98 }}
                animate={{ opacity: [0.16, 0.26, 0.18], scale: [0.98, 1.03, 0.99] }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background:
                    "radial-gradient(circle at 40% 40%, rgba(255,0,183,0.25), transparent 60%), radial-gradient(circle at 60% 70%, rgba(32,140,255,0.2), transparent 65%)",
                }}
              />
            </div>
            <div className="relative z-10 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-gradient-to-r from-white/5 via-[#FF00B7]/10 to-white/5">
                    {headers.map((header, idx) => (
                      <th
                        key={idx}
                        className="px-6 py-4 text-left text-sm font-semibold text-white/90"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors duration-300"
                      onMouseEnter={() => setHoveredRow(idx)}
                      onMouseLeave={() => setHoveredRow(null)}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <td className="px-6 py-4 text-[#FF00B7] font-semibold">{row.attack}</td>
                      <td className="px-6 py-4 text-white/70 font-medium">{row.year}</td>
                      <td className="px-6 py-4 text-white/70">{row.target}</td>
                      <td className="px-6 py-4 text-white/70">{row.impact}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Security Alert Box */}
          <motion.div
            variants={item}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#050816]/55 p-6 sm:p-10 transition-all duration-300 hover:border-white/20 animate-glow-pulse"
          >
            {/* Aurora background */}
            <div className="pointer-events-none absolute inset-0">
              <motion.div
                className="absolute left-1/4 top-0 h-[400px] w-[700px] rounded-full blur-3xl"
                initial={{ opacity: 0.18, scale: 0.98 }}
                animate={{ opacity: [0.16, 0.26, 0.18], scale: [0.98, 1.03, 0.99] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(255,140,0,0.25), transparent 60%), radial-gradient(circle at 50% 100%, rgba(255,0,183,0.15), transparent 65%)",
                }}
              />
            </div>
            
            {/* Hover accent glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(90% 130% at 50% -20%, rgba(255,140,0,0.3) 0%, transparent 70%)`,
              }}
            />
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#FF8C00]/20 ring-2 ring-[#FF8C00]/40">
                <svg className="h-6 w-6 text-[#FF8C00]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 text-lg">
                  {t("kazatomprom.industryRisks.alert.title", "2024 DeepSeek Data Leak Warning")}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {t("kazatomprom.industryRisks.alert.message", "The recent data leak of major code repositories...")}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryRisks;
