"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.body.classList.add("not-found-page");
    return () => {
      document.body.classList.remove("not-found-page");
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 py-16 text-white">
      <div className="flex max-w-md flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-semibold">
          {t("notFound.title", "Page not found")}
        </h1>
        <p className="text-base text-white/70">
          {t(
            "notFound.description",
            "We looked everywhere but couldn’t find this page."
          )}
        </p>
        <Link
          href="/"
          className="rounded-full border border-white/30 px-6 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
        >
          {t("notFound.cta", "Back to homepage")}
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
