import React from 'react';
import { motion } from 'motion/react';
import { X, Coffee, Heart, Smartphone, HelpCircle, Award } from 'lucide-react';
import { Modal } from './Modal';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  upiId: string;
  payeeName: string;
  /** Render the small, easily-dismissed reminder instead of the full donation card. */
  compact?: boolean;
  /** Called when the user asks to see the full donation details. */
  onExpand?: () => void;
  /** Called when the user dismisses the reminder (snoozes it for an hour). */
  onSnooze?: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({
  isOpen,
  onClose,
  upiId,
  payeeName,
  compact = false,
  onExpand,
  onSnooze,
}) => {
  if (!isOpen) return null;

  // Compact, non-intrusive pop-up used for the automatic reminder. It is small,
  // has a dedicated close button, and any dismissal snoozes it for an hour.
  if (compact) {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Support reminder"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
        onClick={onSnooze}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white dark:bg-slate-900 rounded-2xl p-4 pr-10 max-w-xs w-full shadow-2xl border border-amber-200/60 dark:border-amber-900/40"
        >
          <button
            onClick={onSnooze}
            aria-label="Close"
            title="Close"
            className="absolute top-2.5 right-2.5 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={16} />
          </button>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 shrink-0 bg-amber-50 dark:bg-amber-950/30 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400">
              <Coffee size={18} />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">Enjoying BCBR QBank?</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                It stays free because of supporters. A small contribution keeps the servers running.
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-3">
            <button
              onClick={onExpand}
              className="flex-1 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl text-[11px] font-bold uppercase tracking-wider hover:opacity-90 transition-all"
            >
              Support
            </button>
            <button
              onClick={onSnooze}
              className="flex-1 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl text-[11px] font-bold uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            >
              Maybe later
            </button>
          </div>
          <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center mt-2">
            We will not ask again for an hour.
          </p>
        </div>
      </div>
    );
  }

  const paymentNote = encodeURIComponent("BCBR App Support");
  const encodedName = encodeURIComponent(payeeName);
  
  // UPI Deep Link URI for mobile apps
  const upiUri = `upi://pay?pa=${upiId}&pn=${encodedName}&cu=INR&tn=${paymentNote}`;
  
  // Dynamic QR Code generation using a free and reliable API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiUri)}`;

  return (
    <Modal
      ariaLabel="Support the Project"
      onClose={onClose}
      overlayClassName="flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-sky-100/50 dark:border-slate-800 relative overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X size={24} />
        </button>

        {/* Decorative Background Elements */}
        <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-sky-200/20 dark:bg-sky-900/20 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-indigo-200/20 dark:bg-indigo-900/20 blur-[80px] rounded-full pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/30 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-inner">
            <Coffee size={24} className="animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-black tracking-tight text-slate-800 dark:text-slate-100 uppercase">Support the Project</h2>
            <p className="text-xs text-sky-600 dark:text-sky-400 font-bold uppercase tracking-widest">Keep this app alive & free</p>
          </div>
        </div>

        {/* Developer Story */}
        <div className="bg-gradient-to-br from-sky-50 to-indigo-50/50 dark:from-slate-800/50 dark:to-slate-800/30 p-5 rounded-2xl border border-sky-100/50 dark:border-slate-800 mb-6 space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-sky-800 dark:text-sky-300">
            <Award size={18} className="text-sky-600 dark:text-sky-400" />
            <h3 className="font-bold text-sm">A Note from the Developer</h3>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
            <p>
              Hi fellow doctor! I am <strong>Dr. Aswanth Krishnan</strong>, currently working as an <strong>MD Pharmacology Resident</strong>.
            </p>
            <p>
              Like many of you, when I was preparing for the mandatory <strong>BCBR (Basic Course in Biomedical Research)</strong> exam, I realized there wasn't a single free, interactive platform with comprehensive past year assignments, structured mock tests, and smart AI insights to help make sense of the concepts.
            </p>
            <p>
              To solve this, I spent my nights after hectic hospital duties designing and coding this web app from scratch. I wanted to make sure it remains <strong>100% free and accessible</strong> to every doctor in India without any paywalls or subscriptions.
            </p>
            <p>
              However, hosting servers, database maintenance, and implementing features like AI QBank cost money. If you are enjoying this app and it helps you prepare for the exam, please consider supporting the developer to keep it running!
            </p>
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-800 dark:text-amber-300 font-medium text-xs text-center">
              💡 <strong>Even small donations of ₹50 or ₹100 make a huge difference!</strong>
            </div>
          </div>
        </div>

        {/* Quick Amount Suggestion Chips */}
        <div className="mb-6 relative z-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
            Suggested Contributions
          </p>
          <div className="flex items-center justify-center gap-2.5 flex-wrap">
            <a
              href={`upi://pay?pa=${upiId}&pn=${encodedName}&am=50&cu=INR&tn=${paymentNote}`}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
            >
              ☕ ₹50 (Chai)
            </a>
            <a
              href={`upi://pay?pa=${upiId}&pn=${encodedName}&am=100&cu=INR&tn=${paymentNote}`}
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
            >
              ☕ ₹100 (Coffee)
            </a>
            <a
              href={`upi://pay?pa=${upiId}&pn=${encodedName}&am=200&cu=INR&tn=${paymentNote}`}
              className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
            >
              🚀 ₹200 (Supporter)
            </a>
          </div>
        </div>

        {/* UPI Payments Section */}
        <div className="flex flex-col items-center justify-center space-y-6 relative z-10 pt-2">
          {/* QR Code (Visible on Desktop, Scan on Mobile) */}
          <div className="hidden sm:flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-md">
            <img
              src={qrCodeUrl}
              alt="UPI QR Code"
              className="w-[200px] h-[200px] rounded-xl"
              loading="lazy"
            />
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-3">
              Scan with GPay, PhonePe or Paytm
            </span>
          </div>

          {/* UPI ID Info */}
          <div className="text-center w-full">
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Payee Name</p>
            <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">{payeeName}</p>
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-3">UPI ID</p>
            <p className="text-sm font-mono font-bold text-sky-600 dark:text-sky-400 select-all p-2 bg-slate-50 dark:bg-slate-800 rounded-xl mt-1 border border-slate-100 dark:border-slate-800 inline-block">
              {upiId}
            </p>
          </div>

          {/* Mobile UPI Deep Link Button */}
          <div className="w-full sm:hidden">
            <a
              href={upiUri}
              className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-amber-200 dark:shadow-none text-sm uppercase tracking-wider"
            >
              <Smartphone size={18} />
              Donate via UPI App
            </a>
            <p className="text-center text-[10px] text-slate-400 dark:text-slate-500 mt-2">
              Launches GPay, PhonePe, Paytm, or BHIM automatically.
            </p>
          </div>
        </div>

        {/* Thank You Note */}
        <div className="mt-6 text-center border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-center gap-1.5 text-xs text-red-500 dark:text-red-400 font-bold uppercase tracking-wider">
          <Heart size={14} className="fill-current animate-pulse" />
          Thank you for supporting medical education!
        </div>
      </motion.div>
    </Modal>
  );
};
