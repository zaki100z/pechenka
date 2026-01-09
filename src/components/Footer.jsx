import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const copyright = t("footer.copyright", `© ${year} Silence AI. All rights reserved.`).replace(
    "{year}",
    year
  );

  return (
    <footer className="bg-transparent text-white pt-16 pb-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Image src="/logo.svg" alt="Silence AI Logo" width={140} height={40} />
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center text-gray-400">
            <div>
              <span className="font-semibold text-white">{t("footer.contactLabel", "Contact:")}</span>{" "}
              {t("footer.contactValue", "info@silenceai.net")}
            </div>
            <div>
              <span className="font-semibold text-white">{t("footer.addressLabel", "Address:")}</span>{" "}
              {t(
                "footer.addressValue",
                "Media City Free Zone, Al Messaned, Sharjah, UAE"
              )}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">{copyright}</p>
          <div className="flex space-x-4 items-center text-gray-400">
            <a href="/policies/terms_of_use" className="hover:text-white transition-colors duration-300">
              {t("footer.links.termsUse", "Terms of Use")}
            </a>
            <a href="/policies/terms_of_service" className="hover:text-white transition-colors duration-300">
              {t("footer.links.termsService", "Terms of Service")}
            </a>
            <a href="/policies/privacy" className="hover:text-white transition-colors duration-300">
              {t("footer.links.privacy", "Privacy Policy")}
            </a>
            <a href="/policies/cookies" className="hover:text-white transition-colors duration-300">
              {t("footer.links.cookies", "Cookies Policy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
