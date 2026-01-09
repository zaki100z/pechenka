"use client";

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const EdgeGlowCard = ({
  children,
  outerClassName = "",
  innerClassName = "",
  innerStyle = {},
  glowColor = "rgba(255,0,183,0.85)",
  secondaryGlowColor,
  mode = "follow",
  spotlight = false,
  topColor,
  rightColor,
  bottomColor,
  leftColor,
  style,
  animateOnView = true,
  ...rest
}) => {
  const resolvedSecondary = secondaryGlowColor ?? glowColor;
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(!animateOnView);

  useEffect(() => {
    if (!animateOnView) {
      return undefined;
    }

    const node = wrapperRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -10%",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [animateOnView]);

  const appearClasses = animateOnView ? clsx("card-appear", isVisible && "card-appear--visible") : "";

  if (mode === "static") {
    return (
      <div
        {...rest}
        ref={wrapperRef}
        className={clsx(
          "edge-glow-static",
          spotlight && "edge-glow-static-spotlight",
          appearClasses,
          outerClassName
        )}
        style={{
          "--edge-glow-color": glowColor,
          "--edge-glow-secondary": resolvedSecondary,
          "--edge-glow-top": topColor,
          "--edge-glow-right": rightColor,
          "--edge-glow-bottom": bottomColor,
          "--edge-glow-left": leftColor,
          ...style,
        }}
      >
        <div
          className={clsx("relative z-10 h-full w-full rounded-[inherit]", innerClassName)}
          style={innerStyle}
        >
          {children}
        </div>
      </div>
    );
  }

  const handleMouseMove = (event) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    target.style.setProperty("--cursor-x", `${x}px`);
    target.style.setProperty("--cursor-y", `${y}px`);
    target.style.setProperty("--glow-opacity", "1");
  };

  const handleMouseLeave = (event) => {
    const target = event.currentTarget;
    target.style.setProperty("--glow-opacity", "0");
  };

  return (
    <div
      {...rest}
      onMouseEnter={handleMouseMove}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={wrapperRef}
      className={clsx(
        "edge-glow",
        spotlight && "edge-glow-static-spotlight",
        appearClasses,
        outerClassName
      )}
      style={{
        "--edge-glow-color": glowColor,
        "--glow-opacity": 0,
        "--edge-glow-top": topColor,
        "--edge-glow-right": rightColor,
        "--edge-glow-bottom": bottomColor,
        "--edge-glow-left": leftColor,
        ...style,
      }}
    >
      <div
        className={clsx("relative z-10 h-full w-full rounded-[inherit]", innerClassName)}
        style={innerStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default EdgeGlowCard;
