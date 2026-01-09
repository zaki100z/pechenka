"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import KazatompromHeader from "@/components/KazatompromHeader";
import BackToTopButton from "@/components/BackToTopButton";
import Modal from "@/components/Modal";
import KazatompromHero from "@/components/Kazatomprom/KazatompromHero";
import IndustryRisks from "@/components/Kazatomprom/IndustryRisks";
import EcosystemComponents from "@/components/Kazatomprom/EcosystemComponents";
import ArchitectureVisualization from "@/components/Kazatomprom/ArchitectureVisualization";
import KazatompromCTA from "@/components/Kazatomprom/KazatompromCTA";

export default function KazatompromPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <main className="relative bg-[#01091C] min-h-screen w-full overflow-x-hidden">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <KazatompromHeader onOpenModal={openModal} />
        </div>

        {/* Content Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <div className="pt-20">
            <KazatompromHero />
          </div>

          {/* Decorative divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#FF00B7]/40 to-transparent max-w-5xl mx-auto" />

          {/* Industry Risks Section */}
          <IndustryRisks />

          {/* Decorative divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#208CFF]/40 to-transparent max-w-5xl mx-auto" />

          {/* Ecosystem Components Section */}
          <EcosystemComponents />

          {/* Decorative divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#00BFB3]/40 to-transparent max-w-5xl mx-auto" />

          {/* Architecture Visualization Section */}
          <ArchitectureVisualization />

          {/* Decorative divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-[#FF00B7]/40 to-transparent max-w-5xl mx-auto" />

          {/* CTA Section */}
          <KazatompromCTA />
        </motion.div>
      </main>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      {/* Back to Top Button */}
      <BackToTopButton />
    </>
  );
}
