import React from 'react';
import { motion } from 'framer-motion';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-neutral-500 mb-8">Last updated: January 15, 2026</p>
          <div className="prose prose-invert max-w-none space-y-8">
            {[
              { title: '1. Information We Collect', content: 'We collect information you provide directly, such as your name, email address, payment information, and website URL when you create an account. We also collect usage data, including how you interact with our services, your IP address, browser type, and device information.' },
              { title: '2. How We Use Your Information', content: 'We use your information to provide and improve our services, process payments, send important updates, and provide customer support. We may also use your information to personalize your experience and send marketing communications (which you can opt out of).' },
              { title: '3. Data Sharing', content: 'We do not sell your personal information to third parties. We may share data with service providers who help us operate our business (payment processors, hosting providers, analytics services). We will disclose information when required by law or to protect our rights.' },
              { title: '4. Data Security', content: 'We implement industry-standard security measures to protect your data, including encryption in transit and at rest, regular security audits, and access controls. However, no method of transmission over the Internet is 100% secure.' },
              { title: '5. Cookies', content: 'We use cookies and similar technologies to improve your experience, analyze usage patterns, and deliver targeted content. You can control cookie preferences through your browser settings.' },
              { title: '6. Your Rights', content: 'You have the right to access, correct, or delete your personal information. You can also request data portability or restrict processing. To exercise these rights, contact us at privacy@rankpill.com.' },
              { title: '7. Data Retention', content: 'We retain your information as long as your account is active or as needed to provide services. You can request deletion of your account and associated data at any time.' },
              { title: '8. Changes to This Policy', content: 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.' },
              { title: '9. Contact Us', content: 'If you have questions about this Privacy Policy, please contact us at privacy@rankpill.com.' },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                <p className="text-neutral-400 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Terms and Conditions</h1>
          <p className="text-neutral-500 mb-8">Last updated: January 15, 2026</p>
          <div className="prose prose-invert max-w-none space-y-8">
            {[
              { title: '1. Acceptance of Terms', content: 'By accessing and using RankPill, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.' },
              { title: '2. Description of Service', content: 'RankPill provides SEO automation tools including AI content generation, keyword research, backlink exchange, and website analytics. Our services are designed to help businesses grow their organic search traffic.' },
              { title: '3. Account Registration', content: 'You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials and for all activities under your account.' },
              { title: '4. Subscription and Payments', content: 'Our services are available through monthly or annual subscriptions. Payments are processed securely through Stripe. Subscriptions auto-renew unless cancelled before the renewal date. Refunds are handled on a case-by-case basis.' },
              { title: '5. Content Ownership', content: 'Content generated through our AI tools belongs to you. However, you are responsible for reviewing and editing content before publishing. We do not guarantee that AI-generated content will be free of errors or suitable for all purposes.' },
              { title: '6. Acceptable Use', content: 'You agree not to use our services for illegal purposes, spam, distributing malware, infringing copyrights, or any activity that violates applicable laws. We reserve the right to terminate accounts that violate these terms.' },
              { title: '7. Limitation of Liability', content: 'RankPill is provided "as is" without warranties of any kind. We are not liable for indirect, incidental, or consequential damages arising from your use of our services. Our total liability is limited to the amount you paid in the previous 12 months.' },
              { title: '8. Termination', content: 'You may cancel your subscription at any time. We may also terminate or suspend your account if you violate these terms. Upon termination, your right to use the services will immediately cease.' },
              { title: '9. Governing Law', content: 'These terms are governed by the laws of the State of California, United States. Any disputes will be resolved in the courts of San Francisco, California.' },
              { title: '10. Contact', content: 'For questions about these Terms, please contact us at legal@rankpill.com.' },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                <p className="text-neutral-400 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
