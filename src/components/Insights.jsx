import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import EdgeGlowCard from './EdgeGlowCard';

const Insights = () => {
  const { t } = useLanguage();
  const localized = t("insights.items") || [];
  const baseInsights = [
    {
      icon: '🎯',
    },
    {
      icon: '👥',
    },
    {
      icon: '⚡️',
    },
  ];
  const items = baseInsights.map((item, index) => {
    const translation = localized[index] || {};
    return {
      icon: item.icon,
      title: translation.title || "",
      description:
        translation.description ||
        ['There is a hacker attack every 39 seconds', '20.5M DDoS attacks in Q1 2025 alone', '30 000 websites get hacked every single day'][index] ||
        "",
    };
  });

  return (
    <div className="pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((insight, index) => (
            <EdgeGlowCard
              key={index}
              mode="static"
              outerClassName="rounded-3xl p-[2px]"
              innerClassName="glass-card p-6 text-center rounded-3xl"
              spotlight
              glowColor="#FF00B7"
              secondaryGlowColor="rgba(0,191,255,0.7)"
              topColor="#FF00B7"
              leftColor="#FF00B7"
              rightColor="rgba(0,191,255,0.7)"
              bottomColor="rgba(0,191,255,0.7)"
            >
              <div className="text-5xl mb-4">{insight.icon}</div>
              <p className="text-xl font-semibold text-white mb-2">{insight.description}</p>
            </EdgeGlowCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
