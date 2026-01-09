"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { AVAILABLE_LANGUAGES, useLanguage } from "@/contexts/LanguageContext";
import * as Flags from "country-flag-icons/react/3x2";

const KazatompromLanguageSelector = ({ align = "right" }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Only show English and Russian
  const LIMITED_LANGUAGES = useMemo(
    () => AVAILABLE_LANGUAGES.filter((lang) => ["en", "ru"].includes(lang.code)),
    []
  );

  const active =
    LIMITED_LANGUAGES.find((lang) => lang.code === language) ?? LIMITED_LANGUAGES[0];
  const ActiveFlag = Flags[active.flag] ?? null;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  const renderLanguageButton = (lang) => {
    const Flag = Flags[lang.flag] ?? null;
    const isActive = lang.code === active.code;

    return (
      <button
        key={lang.code}
        type="button"
        role="option"
        aria-selected={isActive}
        onClick={() => handleSelect(lang.code)}
        className={clsx(
          "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-white transition",
          isActive ? "bg-white/15 font-semibold" : "hover:bg-white/10"
        )}
      >
        <span className="h-4 w-6 overflow-hidden rounded-[6px] border border-white/20">
          {Flag ? (
            <Flag className="h-full w-full" />
          ) : (
            <span className="flex h-full w-full items-center justify-center bg-white/10 text-[10px] font-semibold uppercase">
              {lang.label}
            </span>
          )}
        </span>
        <span className="flex min-w-0 flex-1 flex-col text-left">
          <span className="truncate">{lang.name}</span>
          {lang.nativeName && (
            <span className="truncate text-xs text-white/60">{lang.nativeName}</span>
          )}
        </span>
        {isActive && (
          <svg
            className="h-4 w-4 text-[#FF00B7]"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      role="listbox"
      aria-label={t("languageSelector.menuLabel", "Choose language")}
    >
      <button
        type="button"
        onClick={handleToggle}
        className="flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-white transition hover:border-white/30 hover:bg-white/5"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="h-4 w-6 overflow-hidden rounded-[6px] border border-white/20">
          {ActiveFlag ? (
            <ActiveFlag className="h-full w-full" />
          ) : (
            <span className="flex h-full w-full items-center justify-center bg-white/10 text-[10px] font-semibold uppercase">
              {active.label}
            </span>
          )}
        </span>
        <span className="hidden text-sm font-semibold sm:inline">{active.label}</span>
        <svg
          className={clsx(
            "h-4 w-4 transition-transform",
            isOpen && "rotate-180"
          )}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={clsx(
            "absolute top-full z-50 mt-2 w-56 rounded-lg border border-white/20 bg-slate-800/95 backdrop-blur-lg shadow-lg",
            align === "left" ? "left-0" : "right-0"
          )}
        >
          <div className="space-y-1 p-2">
            {LIMITED_LANGUAGES.map((lang) => renderLanguageButton(lang))}
          </div>
        </div>
      )}
    </div>
  );
};

export default KazatompromLanguageSelector;
