import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Shield, FileText, Info, Mail, BookOpen, Brain, Target, Users, Award, Zap } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-2">
    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 first:border-0 first:mt-0 first:pt-0">{title}</h3>
    <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-2">{children}</div>
  </div>
);

export const PrivacyPolicy = ({ onBack }: LegalPageProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white dark:border-slate-800 max-w-3xl mx-auto"
  >
    <button onClick={onBack} className="flex items-center gap-2 text-sky-600 mb-6 font-bold hover:underline">
      <ChevronLeft size={18} /> Back
    </button>
    <div className="flex items-center gap-3 mb-2">
      <Shield className="text-sky-500" size={32} />
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Privacy Policy</h2>
    </div>
    <p className="text-xs text-slate-400 mb-8 uppercase tracking-widest font-bold">Last Updated: May 2025</p>

    <div className="space-y-6 text-sm">
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        Welcome to BCBR QBank ("we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <strong>bcbr-quiz-app.vercel.app</strong>.
      </p>

      <Section title="1. Information We Collect">
        <p><strong>Information You Provide:</strong> During account registration, we collect your name, college/institution, educational qualification, and optionally your email address. This data is stored in our secure database (Supabase) and is used solely to create and manage your account.</p>
        <p><strong>Usage Data:</strong> We automatically collect data about your quiz performance, including which questions you have attempted, your answers (correct and incorrect), and your overall progress across assignments. This data is stored locally in your browser's localStorage and optionally synced to our server to maintain your progress.</p>
        <p><strong>Device Information:</strong> We may collect information about the device you use to access our application, including your browser type, operating system, and IP address, for analytics and security purposes.</p>
        <p><strong>API Keys:</strong> If you choose to use the AI explanation feature, you may enter a Google Gemini API key. This key is stored exclusively in your browser's local storage and is never transmitted to our servers.</p>
      </Section>

      <Section title="2. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Create and manage your user account.</li>
          <li>Track your study progress and display it on the leaderboard (username only).</li>
          <li>Provide AI-powered explanations using your locally stored API key.</li>
          <li>Respond to your feedback and support requests.</li>
          <li>Analyze aggregate usage trends to improve our content and platform.</li>
          <li>Display relevant advertisements through Google AdSense.</li>
        </ul>
      </Section>

      <Section title="3. Google AdSense & Third-Party Advertising">
        <p>We use <strong>Google AdSense</strong> to display advertisements on our platform. Google may use cookies and web beacons to serve ads based on your prior visits to our website or other websites. These cookies allow Google and its partners to serve ads based on your interests.</p>
        <p>You may opt out of personalized advertising at any time by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-sky-600 font-bold underline">Google Ads Settings</a> or by visiting <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-sky-600 font-bold underline">aboutads.info</a>.</p>
        <p>Third-party ad servers or ad networks may use technologies like cookies, JavaScript, or web beacons in their respective advertisements. We do not have access to or control over these cookies.</p>
      </Section>

      <Section title="4. Cookies">
        <p>We use cookies and similar tracking technologies to enhance your experience. Types of cookies we use:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Essential Cookies:</strong> Required for the application to function (e.g., session management).</li>
          <li><strong>Performance Cookies:</strong> Used by Vercel Analytics and Speed Insights to measure app performance.</li>
          <li><strong>Advertising Cookies:</strong> Set by Google AdSense to serve personalized advertisements.</li>
        </ul>
        <p>You can control cookies through your browser settings. Disabling cookies may affect some functionality of the application.</p>
      </Section>

      <Section title="5. Data Retention & Security">
        <p>Your account data is retained for as long as your account is active. You may request deletion of your account data by contacting us at <a href="mailto:connection249@gmail.com" className="text-sky-600 font-bold underline">connection249@gmail.com</a>.</p>
        <p>We implement industry-standard security measures including password hashing using bcrypt, encrypted database connections (TLS), and secure API endpoints. However, no method of transmission over the internet is 100% secure.</p>
      </Section>

      <Section title="6. Children's Privacy">
        <p>BCBR QBank is designed for medical doctors and postgraduate medical researchers. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.</p>
      </Section>

      <Section title="7. Changes to This Policy">
        <p>We may update this Privacy Policy periodically. We will notify registered users of significant changes via the app or email. Continued use of the platform after changes constitutes acceptance of the updated policy.</p>
      </Section>

      <Section title="8. Contact Us">
        <p>If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
        <div className="bg-sky-50 dark:bg-sky-900/20 p-4 rounded-2xl border border-sky-100 dark:border-sky-800 mt-2">
          <p className="font-bold text-slate-800 dark:text-slate-200">Email: <a href="mailto:connection249@gmail.com" className="text-sky-600 underline">connection249@gmail.com</a></p>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">BCBR QBank — Created by Dr. Aswanth Krishnan</p>
        </div>
      </Section>
    </div>
  </motion.div>
);

export const TermsOfService = ({ onBack }: LegalPageProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white dark:border-slate-800 max-w-3xl mx-auto"
  >
    <button onClick={onBack} className="flex items-center gap-2 text-sky-600 mb-6 font-bold hover:underline">
      <ChevronLeft size={18} /> Back
    </button>
    <div className="flex items-center gap-3 mb-2">
      <FileText className="text-sky-500" size={32} />
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Terms of Service</h2>
    </div>
    <p className="text-xs text-slate-400 mb-8 uppercase tracking-widest font-bold">Last Updated: May 2025</p>

    <div className="space-y-6 text-sm">
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        Please read these Terms of Service ("Terms") carefully before using BCBR QBank ("the Service") operated by Dr. Aswanth Krishnan ("us," "we," or "our"). By accessing or using the Service, you agree to be bound by these Terms.
      </p>

      <Section title="1. Acceptance of Terms">
        <p>By creating an account or using the Service (including as a guest user), you confirm that you are at least 18 years of age, have read and understood these Terms, and agree to be legally bound by them. If you do not agree to these Terms, please do not use the Service.</p>
      </Section>

      <Section title="2. Educational Purpose & Medical Disclaimer">
        <p>BCBR QBank is an educational tool created exclusively for helping medical doctors and researchers prepare for the <strong>Basic Course in Biomedical Research (BCBR)</strong> examination.</p>
        <p><strong>IMPORTANT:</strong> The content on this platform — including questions, answers, and AI-generated explanations — is for educational and study purposes ONLY. It does NOT constitute medical advice, diagnosis, or treatment recommendations. Always consult official BCBR study materials, textbooks, and qualified faculty for definitive guidance.</p>
        <p>The creators and operators of BCBR QBank shall not be liable for any clinical decisions made based on information from this platform.</p>
      </Section>

      <Section title="3. User Accounts">
        <p>You are responsible for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Maintaining the confidentiality of your account credentials.</li>
          <li>All activity that occurs under your account.</li>
          <li>Providing accurate information during registration.</li>
          <li>Notifying us immediately of any unauthorized access to your account.</li>
        </ul>
        <p>We reserve the right to suspend or terminate accounts that violate these Terms, provide false information, or engage in disruptive behavior.</p>
      </Section>

      <Section title="4. AI-Generated Content">
        <p>The AI explanation feature uses Google Gemini, a large language model. While designed to be accurate and helpful, AI-generated content may occasionally contain errors, omissions, or "hallucinations." We make no warranty, express or implied, about the accuracy of AI-generated explanations.</p>
        <p>Users are strongly encouraged to cross-reference AI explanations with standard BCBR textbooks and official course materials before relying on them for exam preparation.</p>
      </Section>

      <Section title="5. Intellectual Property">
        <p>The BCBR QBank platform, including its design, code, and original content, is the intellectual property of Dr. Aswanth Krishnan. You may not copy, reproduce, distribute, or create derivative works from any part of this platform without express written permission.</p>
        <p>Examination questions referenced may be derived from publicly available BCBR past papers and published research for educational fair-use purposes. We do not claim ownership of such third-party content.</p>
      </Section>

      <Section title="6. Advertising">
        <p>BCBR QBank displays advertisements through Google AdSense to support ongoing development and hosting costs. By using the Service, you consent to the display of these advertisements. We are not responsible for the content of third-party advertisements.</p>
      </Section>

      <Section title="7. Limitation of Liability">
        <p>To the fullest extent permitted by law, BCBR QBank and its creator, Dr. Aswanth Krishnan, shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Service, including but not limited to exam performance outcomes, data loss, or inaccuracies in content.</p>
      </Section>

      <Section title="8. Modifications">
        <p>We reserve the right to modify these Terms at any time. We will notify users of material changes through the application. Continued use of the Service after modifications constitutes acceptance of the revised Terms.</p>
      </Section>

      <Section title="9. Governing Law">
        <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.</p>
      </Section>

      <Section title="10. Contact">
        <p>For any questions about these Terms, contact us at <a href="mailto:connection249@gmail.com" className="text-sky-600 font-bold underline">connection249@gmail.com</a>.</p>
      </Section>
    </div>
  </motion.div>
);

export const AboutUs = ({ onBack }: LegalPageProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white dark:border-slate-800 max-w-3xl mx-auto"
  >
    <button onClick={onBack} className="flex items-center gap-2 text-sky-600 mb-6 font-bold hover:underline">
      <ChevronLeft size={18} /> Back
    </button>
    <div className="flex items-center gap-3 mb-2">
      <Info className="text-sky-500" size={32} />
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">About BCBR Prep & QBank</h2>
    </div>
    <p className="text-xs text-slate-400 mb-8 uppercase tracking-widest font-bold">Free BCBR Past Year Questions & Exam Preparation</p>

    <div className="space-y-8 text-sm">
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
        BCBR QBank is the #1 free BCBR preparation platform with past year questions, built for MD doctors and postgraduate medical researchers preparing for India's <strong>Basic Course in Biomedical Research (BCBR)</strong> — the mandatory research ethics and methodology certification for all MD/MS/PhD researchers.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { icon: BookOpen, color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-900/20', title: 'Curated QBank', desc: 'High-yield multiple-choice questions covering all BCBR modules including research methodology, biostatistics, research ethics, and intellectual property.' },
          { icon: Brain, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20', title: 'AI Explanations', desc: 'Powered by Google Gemini, our AI provides detailed conceptual explanations for every question to help you understand, not just memorize.' },
          { icon: Target, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20', title: 'Progress Tracking', desc: 'Track your mastery across all assignments. The platform remembers your answers and identifies your weak areas for targeted revision.' },
          { icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20', title: 'Mistake QBank', desc: 'Automatically compiles all incorrectly answered questions into a dedicated review mode for spaced repetition practice.' },
          { icon: Users, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/20', title: 'Leaderboard', desc: 'Compete with peers across India on our global leaderboard to stay motivated and benchmark your preparation level.' },
          { icon: Award, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20', title: 'Free to Try', desc: 'Assignment 1 is freely available to all users without registration, so you can experience the quality of questions before signing up.' },
        ].map(({ icon: Icon, color, bg, title, desc }) => (
          <div key={title} className={`p-5 rounded-2xl border border-transparent ${bg} space-y-2`}>
            <div className="flex items-center gap-2">
              <Icon className={color} size={20} />
              <h4 className="font-bold text-slate-800 dark:text-slate-100">{title}</h4>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* What is BCBR */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 space-y-3 border border-slate-100 dark:border-slate-700">
        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base">What is BCBR?</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          The <strong>Basic Course in Biomedical Research (BCBR)</strong> is a mandatory certification for all postgraduate medical students (MD/MS) and PhD researchers in India, as mandated by the Indian Council of Medical Research (ICMR) and the National Medical Commission (NMC). The course covers:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
          <li>Research Methodology & Study Design</li>
          <li>Biostatistics & Data Analysis</li>
          <li>Research Ethics & Informed Consent</li>
          <li>Good Clinical Practice (GCP)</li>
          <li>Intellectual Property Rights (IPR) in Research</li>
          <li>Scientific Writing & Publication Ethics</li>
        </ul>
      </div>

      {/* Creator */}
      <div className="bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-sky-100 dark:border-sky-800 space-y-3">
        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base">About the Creator</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          BCBR QBank was created by <strong>Dr. Aswanth Krishnan</strong>, an MD Pharmacology Resident with a passion for simplifying medical education through technology. Having gone through the BCBR certification process himself, Dr Aswanth identified the lack of quality, structured study resources and built this platform to bridge that gap.
        </p>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          The platform is continuously updated with new questions, improved AI explanations, and features based on user feedback. Our goal is to make BCBR preparation efficient, evidence-based, and accessible to every medical researcher in India.
        </p>
        <a
          href="https://www.linkedin.com/in/draswanth/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sky-600 font-bold underline text-sm"
        >
          Connect on LinkedIn →
        </a>
      </div>
    </div>
  </motion.div>
);

export const ContactUs = ({ onBack }: LegalPageProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white dark:border-slate-800 max-w-3xl mx-auto"
  >
    <button onClick={onBack} className="flex items-center gap-2 text-sky-600 mb-6 font-bold hover:underline">
      <ChevronLeft size={18} /> Back
    </button>
    <div className="flex items-center gap-3 mb-2">
      <Mail className="text-sky-500" size={32} />
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Contact Us</h2>
    </div>
    <p className="text-xs text-slate-400 mb-8 uppercase tracking-widest font-bold">We're here to help</p>

    <div className="space-y-6 text-sm">
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        Have a question, suggestion, or found an error in a question? We value every piece of feedback — it helps us improve the quality of BCBR QBank for all medical researchers.
      </p>

      {/* Primary Contact */}
      <div className="bg-sky-50 dark:bg-sky-900/20 p-6 rounded-2xl border border-sky-100 dark:border-sky-800 space-y-3">
        <h3 className="font-bold text-slate-800 dark:text-slate-100">📧 Email Support</h3>
        <p className="text-slate-600 dark:text-slate-400">For general inquiries, content feedback, and technical issues:</p>
        <a
          href="mailto:connection249@gmail.com"
          className="inline-block text-lg font-black text-sky-600 dark:text-sky-400 hover:underline"
        >
          connection249@gmail.com
        </a>
        <p className="text-xs text-slate-400">We aim to respond within 24-48 hours.</p>
      </div>

      {/* Topics */}
      <div className="space-y-3">
        <h3 className="font-bold text-slate-800 dark:text-slate-100">What can you contact us about?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { emoji: '🐛', topic: 'Report a Bug', desc: 'App crashes, display issues, or unexpected behavior.' },
            { emoji: '❌', topic: 'Question Error', desc: 'Incorrect answer key, factual errors, or unclear phrasing.' },
            { emoji: '💡', topic: 'Suggestions', desc: 'Feature requests or new content ideas.' },
            { emoji: '🔑', topic: 'Account Issues', desc: 'Login problems or account recovery requests.' },
            { emoji: '📢', topic: 'Advertising', desc: 'Inquiries about advertising partnerships.' },
            { emoji: '📜', topic: 'Legal / Privacy', desc: 'Data removal requests or privacy policy questions.' },
          ].map(({ emoji, topic, desc }) => (
            <div key={topic} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
              <p className="font-bold text-slate-700 dark:text-slate-300">{emoji} {topic}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LinkedIn */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800 space-y-2">
        <h3 className="font-bold text-slate-800 dark:text-slate-100">🔗 Connect on LinkedIn</h3>
        <p className="text-slate-600 dark:text-slate-400">You can also reach the creator directly on LinkedIn for professional collaborations or academic discussions.</p>
        <a
          href="https://www.linkedin.com/in/draswanth/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold underline"
        >
          Dr. Aswanth Krishnan on LinkedIn →
        </a>
      </div>

      <p className="text-center text-xs text-slate-400 dark:text-slate-500 pt-4">
        BCBR QBank is a solo project maintained with passion. Thank you for your patience and support! 🙏
      </p>
    </div>
  </motion.div>
);
