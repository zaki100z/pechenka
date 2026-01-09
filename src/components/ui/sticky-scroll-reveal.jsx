"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      let closestIndex = -1;
      let smallestDistance = Infinity;

      contentRefs.current.forEach((elem, index) => {
        if (elem) {
          const { top, height } = elem.getBoundingClientRect();
          const elemCenterY = top + height / 2;
          const distance = Math.abs(elemCenterY - centerY);

          if (distance < smallestDistance) {
            smallestDistance = distance;
            closestIndex = index;
          }
        }
      });

      if (closestIndex !== -1 && closestIndex !== activeCard) {
        setActiveCard(closestIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on mount to set initial active card

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeCard]);

  const backgroundColors = [
    "#01091C",
    "linear-gradient(to bottom right, #FF00B7, #000000)",
    "linear-gradient(to bottom right, #FB00FF, #000000)",
    "#000000",
    "linear-gradient(to bottom right, #15FF00, #000000)",
    "linear-gradient(to bottom, #FB00FF, #01091C)",
  ];

  return (
    <motion.div
      style={{
        background: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="w-full"
      ref={ref}
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-12 gap-6 md:gap-10 px-4 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="col-span-12 lg:col-span-5">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              ref={(el) => (contentRefs.current[index] = el)}
              className="my-16 md:my-24 lg:my-40"
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{ duration: 0.2 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{ duration: 0.2 }}
                className="text-base md:text-lg mt-6 md:mt-10 max-w-lg text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
        <div
          className={cn(
            "sticky top-40 col-span-7 hidden h-80 w-full overflow-hidden rounded-md bg-black lg:block",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </div>
    </motion.div>
  );
};
