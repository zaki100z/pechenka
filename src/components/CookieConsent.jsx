"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import GlowButton from "./GlowButton";
import { useLanguage } from "@/contexts/LanguageContext";

const CONSENT_KEY = "silenceai-cookie-consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    try {
      const consent = window.localStorage.getItem(CONSENT_KEY);
      if (!consent) {
        setIsVisible(true);
      }
    } catch (error) {
      // Fail-safe: show banner if storage is unavailable
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      window.localStorage.setItem(CONSENT_KEY, "accepted");
    } catch (error) {
      // Ignore storage write errors; we still hide the banner
    }
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-6 sm:px-6 lg:px-8">
      <div className="glass-card w-full max-w-4xl bg-[rgba(3,8,23,0.7)] backdrop-blur-2xl border border-white/15 shadow-[0_18px_48px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col gap-6 p-6 sm:p-8 text-white">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold sm:text-xl">
              {t("cookie.title", "Technical Cookies Notice")}
            </h2>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              {t(
                "cookie.description",
                "This website uses only first-party technical cookies that are set by us to remember your language preferences and ensure the cookie notice is not shown again on your next visit. No tracking or third-party cookies are used."
              )}{" "}
              {t("cookie.more", "Learn more in our")}{" "}
              <Link
                href="/policies/cookies"
                className="text-white underline decoration-purple-400 decoration-2 underline-offset-4 hover:text-purple-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70 rounded-sm"
              >
                {t("cookie.link", "Cookie Policy")}
              </Link>
              .
            </p>
          </div>
          <div className="flex justify-end">
            <GlowButton
              onClick={handleAccept}
              glowColor="#FF00B7"
              variant="light"
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleAccept();
                }
              }}
            >
              {t("cookie.ok", "OK")}
            </GlowButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
