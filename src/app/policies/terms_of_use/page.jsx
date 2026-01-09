"use client";
import React, { useState } from 'react';
import Header from '@/components/Header';
import PolicySidebar from '@/components/PolicySidebar';
import BackToTopButton from '@/components/BackToTopButton';
import Modal from '@/components/Modal';
import PolicyNotice from '@/components/PolicyNotice';

const TermsOfUse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const sections = [
    { id: 'about', title: '1. About These Terms' },
    { id: 'service-description', title: '2. Service Description and Pricing' },
    { id: 'sla', title: '3. Service Level Agreement and Availability' },
    { id: 'user-responsibilities', title: '4. User Responsibilities and Acceptable Use' },
    { id: 'data-processing', title: '5. Data Processing and Infrastructure' },
    { id: 'service-activation', title: '6. Service Activation and Free Trials' },
    { id: 'ip-rights', title: '7. Intellectual Property Rights' },
    { id: 'privacy', title: '8. Privacy and Data Protection' },
    { id: 'liability', title: '9. Limitation of Liability' },
    { id: 'updates', title: '10. Version Updates and Support' },
    { id: 'termination', title: '11. Termination' },
    { id: 'indemnification', title: '12. Indemnification' },
    { id: 'governing-law', title: '13. Governing Law and Disputes' },
    { id: 'changes', title: '14. Changes to Terms' },
    { id: 'contact', title: '15. Contact Information' },
    { id: 'misc', title: '16. Miscellaneous' },
  ];

  return (
    <div className="bg-black text-white">
      <Header onOpenModal={openModal} />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col md:flex-row gap-8">
        <div className="md:w-80">
          <PolicySidebar sections={sections} />
        </div>
        <main className="flex-grow">
          <PolicyNotice />
          <h1 className="text-4xl font-bold mb-8">Terms of Use for AI-SOC 1</h1>
          <div className="space-y-8">
            <section id="about">
              <h2 className="text-2xl font-semibold mb-4">1. About These Terms</h2>
            <p className="mb-4"><strong>1.1 Agreement Scope:</strong> These Terms of Use ("Terms") govern your access to and use of the Silence AI platform and services provided by Silence AI LLC ("Silence AI," "we," "us," or "our"). These Terms apply to you, the individual or entity accessing our services ("you" or "your"), and your employer or principal if you are acting on their behalf.</p>
            <p className="mb-4"><strong>1.2 Authority and Acceptance:</strong> If you are entering into these Terms on behalf of a company, organization, or other entity, you represent that you have the authority to bind such entity to these Terms. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with these Terms, you must discontinue use of our services immediately.</p>
          </section>
            <section id="service-description">
              <h2 className="text-2xl font-semibold mb-4">2. Service Description and Pricing</h2>
              <p className="mb-4"><strong>2.1 Web Security &amp; Traffic Management:</strong> Web Security &amp; Traffic Management provides web application protection, real-time traffic monitoring, country-level access control, and port restriction features. It protects against most types of web attacks, including DDoS, SQL injection, and other common web vulnerabilities, <em>excluding business-logic vulnerabilities</em>. This component includes two subsystems: the <strong>Agent</strong> and the <strong>Centralized Management Console (CMC)</strong>. The CMC is responsible for administration and visualization, such as connecting your websites to the Agent. The Agent is responsible for protection and operates as a reverse proxy that filters all incoming traffic, forwarding only legitimate requests to your website. <strong>Pricing:</strong> $0.06 per GB of processed traffic, with no limits and no additional fees.</p> 
              <p className="mb-4"><strong>2.2 Email Security &amp; Visualization:</strong> Email Security &amp; Visualization offers AI-powered email protection with advanced email-flow visualization, phishing and spoofing defense, malware scanning, and spam filtering. This component includes the <strong>CMC</strong> and a secure <strong>Webmail Client</strong>. The Webmail Client currently supports Outlook- and Gmail-based accounts and is designed for your company’s corporate email addresses. The CMC lets administrators add and manage corporate email accounts and provides a visual view of all incoming and outgoing emails across the organization. <strong>Pricing:</strong> $10 per month per email account, including up to 10 emails per day. Additional emails are billed at $0.035 each.</p>            <p><strong>2.4 Pricing Changes:</strong> We reserve the right to modify our pricing at any time. Price changes will be communicated through our platform and will take effect for new billing cycles after the notification period.</p>
          </section>
            <section id="sla">
              <h2 className="text-2xl font-semibold mb-4">3. Service Level Agreement and Availability</h2>
            <p className="mb-4"><strong>3.1 100% SLA Guarantee:</strong> We provide a 100% Service Level Agreement (SLA) for service availability. In the event of any downtime that affects your use of our services, we will provide a full refund for the amount spent on system usage during the period of downtime.</p>
            <p><strong>3.2 Service Availability:</strong> While we strive to maintain continuous service availability, we may suspend or terminate access to our services for maintenance, updates, or other operational requirements with advance notice when possible.</p>
          </section>
            <section id="user-responsibilities">
              <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities and Acceptable Use</h2>
            <p className="mb-4"><strong>4.1 Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            <p className="mb-4"><strong>4.2 Lawful Use:</strong> You agree to use our services only for lawful purposes and in compliance with all applicable laws and regulations.</p>
            <p><strong>4.5 Prohibited Activities:</strong> You agree not to: Use our services to conduct unauthorized security testing on systems you do not own or have explicit permission to test. Attempt to interfere with the proper functioning of our services. Use automated tools to access our services except as explicitly permitted. Engage in any activity that could harm our infrastructure or other users.</p>
          </section>
            <section id="data-processing">
              <h2 className="text-2xl font-semibold mb-4">5. Data Processing and Infrastructure</h2>
            <p><strong>5.1 Privacy Policy:</strong> Our collection, use, and protection of your information is governed by our Privacy Policy, which is incorporated into these Terms by reference and available at https://silenceai.net/policies/privacy/</p>
          </section>
            <section id="service-activation">
              <h2 className="text-2xl font-semibold mb-4">6. Service Activation and Free Trials</h2>
            <p className="mb-4"><strong>6.1 Component Activation:</strong> Each service component requires individual activation. Before activation, you will have access to system demonstrations, pricing videos, and informational content. The activation process is free, and you only pay for actual usage, which you must explicitly initiate.</p>
            <p><strong>6.2 Consent Process:</strong> When you click "Activate" for any service component, a popup window will appear containing the relevant privacy policy and terms specific to that component. You must provide consent before the service becomes fully accessible.</p>
          </section>
            <section id="ip-rights">
              <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property Rights</h2>
            <p className="mb-4"><strong>7.1 Our Rights:</strong> We retain all intellectual property rights in our platform, services, technologies, and content. Nothing in these Terms grants you any rights to our intellectual property except as necessary to use our services as intended.</p>
            <p><strong>7.2 Your Content:</strong> You retain ownership of any content you provide to our services. By using our services, you grant us a limited license to process, analyze, and store your content solely for the purpose of delivering our services to you.</p>
          </section>
            <section id="privacy">
              <h2 className="text-2xl font-semibold mb-4">8. Privacy and Data Protection</h2>
            <p className="mb-4"><strong>8.1 Privacy Policy:</strong> Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference and available at https://silenceai.net/policies/privacy/.</p>
            <p><strong>8.2 Data Security:</strong> We implement industry-standard security measures to protect your data and maintain the confidentiality of your information.</p>
          </section>
            <section id="liability">
              <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="mb-4"><strong>9.1 Service Limitations:</strong> Except for our SLA guarantee regarding service availability, our services are provided "as is" without warranties of any kind. We do not guarantee that our services will meet all your security requirements or detect all possible vulnerabilities.</p>
            <p className="mb-4"><strong>9.2 Liability Cap:</strong> Our total liability to you for any claims arising from these Terms or your use of our services shall not exceed the amount you paid to us in the twelve months preceding the claim.</p>
            <p><strong>9.3 Excluded Damages:</strong> We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not to loss of profits, data, or business opportunities.</p>
          </section>
            <section id="updates">
              <h2 className="text-2xl font-semibold mb-4">10. Version Updates and Support</h2>
            <p className="mb-4"><strong>10.1 Service Updates:</strong> We may release new versions of our services from time to time. When a new version is released, we reserve the right to discontinue support for previous versions with reasonable notice.</p>
            <p><strong>10.2 Compatibility:</strong> You are responsible for ensuring compatibility with supported versions of our services and updating to current versions as needed.</p>
          </section>
            <section id="termination">
              <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
            <p className="mb-4"><strong>11.1 Termination by You:</strong> You may terminate your use of our services at any time by discontinuing use and closing your account.</p>
            <p><strong>11.2 Termination by Us:</strong> We may suspend or terminate your access to our services if you violate these Terms or engage in activities that harm our services or other users.</p>
          </section>
            <section id="indemnification">
              <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Silence AI from any claims, damages, or expenses arising from your use of our services, including any unauthorized security testing or violation of these Terms.</p>
          </section>
            <section id="governing-law">
              <h2 className="text-2xl font-semibold mb-4">13. Governing Law and Disputes</h2>
            <p className="mb-4"><strong>13.1 Applicable Law:</strong> These Terms are governed by the laws of the United Arab Emirates, without regard to conflict of law principles.</p>
            <p><strong>13.2 Dispute Resolution:</strong> If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting us.</p>
          </section>
            <section id="changes">
              <h2 className="text-2xl font-semibold mb-4">14. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will notify you of material changes through our platform or via email. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.</p>
          </section>
            <section id="contact">
              <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
            <p>For questions about these Terms or our services, please contact us at:</p>
            <p>Silence AI LLC</p>
            <p>Email: info@silenceai.net</p>
            <p>Website: silenceai.net</p>
            <p>Business registration location: Media City Free Zone, Al Messaned, Sharjah, UAE</p>
          </section>
            <section id="misc">
              <h2 className="text-2xl font-semibold mb-4">16. Miscellaneous</h2>
            <p className="mb-4"><strong>16.1 Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
            <p className="mb-4"><strong>16.2 Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and Silence AI regarding your use of our services.</p>
            <p><strong>16.3 Assignment:</strong> We may assign these Terms or our rights hereunder without your consent. You may not assign these Terms without our prior written consent.</p>
          </section>
          </div>
          <p className="mt-8 text-sm text-gray-400">Last Updated: 22.09.2025</p>
        </main>
      </div>
      <BackToTopButton />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default TermsOfUse;
