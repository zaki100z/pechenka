"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const underlineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1 },
};

const Playground = React.forwardRef((_, ref) => {
  const [selectedOption, setSelectedOption] = useState("emailSecurity");
  const [hoveredOption, setHoveredOption] = useState(null);
  const { t } = useLanguage();

  const options = ["globeShield", "emailSecurity"];

  return (
    <div className="relative w-full" ref={ref}>
      <div
        className="card-chopped relative z-20 -mt-3 sm:-mt-6 rounded-[28px] border border-white/20"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-black/20" />
        <div className="relative flex flex-col gap-3 px-5 pt-4 pb-9 sm:px-9 sm:pt-6 sm:pb-11">
          <div className="flex items-end justify-center gap-4 pb-1 text-center">
            {options.map((optionKey) => {
              const isActive = selectedOption === optionKey;
              const isHovered = hoveredOption === optionKey;
              return (
                <button
                  key={optionKey}
                  onClick={() => setSelectedOption(optionKey)}
                  onMouseEnter={() => setHoveredOption(optionKey)}
                  onMouseLeave={() => setHoveredOption(null)}
                  className="relative flex min-h-[3.25rem] flex-1 min-w-0 flex-col items-center justify-start gap-1 px-2 pt-1 pb-3 text-center text-xs sm:text-sm font-semibold leading-tight text-white transition-colors duration-200 whitespace-normal break-words"
                >
                  <span className="block">{t(`playground.options.${optionKey}`, optionKey)}</span>
                  <motion.span
                    layoutId="playground-underline"
                    className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-full max-w-[92%] rounded-full bg-white"
                    variants={underlineVariants}
                    initial={false}
                    animate={isActive || isHovered ? "visible" : "hidden"}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    style={{ originX: 0, originY: 0.5 }}
                  />
                </button>
              );
            })}
          </div>
          <div className="relative mt-3 sm:mt-5 -mx-5 sm:-mx-9 -mb-9 sm:-mb-11">
            <div className="aspect-video w-full rounded-2xl border border-white/10 bg-black shadow-[0_28px_65px_rgba(0,0,0,0.55)]"></div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 translate-y-5 sm:translate-y-8">
        <div
          className="rounded-[28px] border border-white/10"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.55)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        />
      </div>
    </div>
  );
});

Playground.displayName = "Playground";

export default Playground;
