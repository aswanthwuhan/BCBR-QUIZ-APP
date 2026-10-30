import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Coffee, Heart, Smartphone, Copy, Check, ChevronDown, ShieldCheck, Share2 } from 'lucide-react';
import { Modal } from './Modal';
import { shareApp } from '../lib/share';
import { SUPPORTERS } from '../data/supporters';

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

const TIERS = [
  { value: 50, label: 'Chai', emoji: '☕' },
  { value: 100, label: 'Coffee', emoji: '🥐' },
  { value: 200, label: 'Supporter', emoji: '🚀' },
  { value: 500, label: 'Champion', emoji: '🏆' },
];

export const SupportModal: React.FC<SupportModalProps> = ({
  isOpen,
  onClose,
  upiId,
  payeeName,
  compact = false,
  onExpand,
  onSnooze,
}) => {
  const [amount, setAmount] = useState<number>(100);
  const [custom, setCustom] = useState('');
  const [copied, setCopied] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [shareState, setShareState] = useState<'idle' | 'copied'>('idle');

  if (!isOpen) return null;

  // Compact, non-intrusive pop-up used for the automatic reminder. It is small,
  // has a dedicated close button, and any dismissal snoozes it for an hour.
  if (compact) {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Support reminder"
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-900/40"
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

  const paymentNote = encodeURIComponent('BCBR App Support');
  const encodedName = encodeURIComponent(payeeName);

  const customAmount = Number(custom);
  const chosen = custom
    ? Number.isFinite(customAmount) && customAmount >= 1
      ? Math.floor(customAmount)
      : null
    : amount;
  const amountParam = chosen ? `&am=${chosen}` : '';
  const upiUri = `upi://pay?pa=${upiId}&pn=${encodedName}${amountParam}&cu=INR&tn=${paymentNote}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=${encodeURIComponent(upiUri)}`;

  const handleShare = async () => {
    const result = await shareApp();
    if (result === 'copied') {
      setShareState('copied');
      setTimeout(() => setShareState('idle'), 1800);
    }
  };

  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable: the ID is still selectable */
    }
  };

  return (
    <Modal
      ariaLabel="Support the Project"
      onClose={onClose}
      overlayClassName="flex items-end sm:items-center justify-center sm:p-4 bg-slate-900/60"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        className="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl max-w-md w-full shadow-2xl border border-slate-200/80 dark:border-slate-800 relative max-h-[92dvh] overflow-y-auto custom-scrollbar"
      >
        {/* Header */}
        <div className="relative px-6 pt-6 pb-5 bg-gradient-to-br from-amber-50 via-orange-50/60 to-white dark:from-amber-950/30 dark:via-slate-900 dark:to-slate-900 border-b border-amber-100/70 dark:border-slate-800">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-white/70 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-3 pr-8">
            <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-300/40 dark:shadow-none">
              <Coffee size={24} />
            </div>
            <div className="min-w-0">
              <h2 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-slate-100">Keep BCBR QBank free</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Built by a resident doctor. No ads, no paywall.</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* Amount picker */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">Choose an amount</p>
            <div className="grid grid-cols-4 gap-2" role="radiogroup" aria-label="Donation amount">
              {TIERS.map(tier => {
                const active = !custom && amount === tier.value;
                return (
                  <button
                    key={tier.value}
                    role="radio"
                    aria-checked={active}
                    onClick={() => { setAmount(tier.value); setCustom(''); }}
                    className={
                      'flex flex-col items-center gap-0.5 py-2.5 rounded-xl border text-center transition-all ' +
                      (active
                        ? 'bg-amber-500 border-amber-500 text-white shadow-md shadow-amber-300/40 dark:shadow-none'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-amber-300 dark:hover:border-amber-700')
                    }
                  >
                    <span className="text-base leading-none">{tier.emoji}</span>
                    <span className="text-sm font-extrabold">₹{tier.value}</span>
                    <span className={'text-[9px] font-semibold uppercase tracking-wide ' + (active ? 'text-amber-50' : 'text-slate-400 dark:text-slate-500')}>{tier.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="relative mt-2.5">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">₹</span>
              <input
                type="number"
                inputMode="numeric"
                min={1}
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                placeholder="Other amount"
                aria-label="Custom amount in rupees"
                className="w-full pl-8 pr-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
              Even ₹50 helps cover hosting and AI costs for everyone.
            </p>
          </div>

          {/* Pay: deep link on phones, QR on larger screens */}
          <div className="sm:hidden">
            <a
              href={upiUri}
              className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-300/40 dark:shadow-none text-sm active:scale-[0.99] transition-transform"
            >
              <Smartphone size={18} />
              {chosen ? `Pay ₹${chosen} with UPI` : 'Pay with UPI'}
            </a>
            <p className="text-center text-[11px] text-slate-400 dark:text-slate-500 mt-2">
              Opens GPay, PhonePe, Paytm or BHIM.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/70 dark:border-slate-700/60">
            <img
              src={qrCodeUrl}
              alt={`UPI QR code${chosen ? ` for ₹${chosen}` : ''}`}
              width={132}
              height={132}
              className="w-[132px] h-[132px] rounded-xl bg-white shrink-0"
              loading="lazy"
            />
            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-800 dark:text-slate-100">Scan to pay{chosen ? ` ₹${chosen}` : ''}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Use any UPI app. The amount is filled in for you.</p>
            </div>
          </div>

          {/* UPI ID with copy */}
          <div className="flex items-center justify-between gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">UPI ID · {payeeName}</p>
              <p className="text-sm font-mono font-bold text-slate-800 dark:text-slate-100 truncate select-all">{upiId}</p>
            </div>
            <button
              onClick={copyUpi}
              aria-label="Copy UPI ID"
              className={
                'shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-colors ' +
                (copied
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700')
              }
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          {/* Story, collapsed by default */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <button
              onClick={() => setShowStory(s => !s)}
              aria-expanded={showStory}
              className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
            >
              Why I built this
              <ChevronDown size={16} className={'transition-transform ' + (showStory ? 'rotate-180' : '')} />
            </button>
            {showStory && (
              <div className="px-4 pb-4 text-xs text-slate-600 dark:text-slate-300 space-y-2.5 leading-relaxed">
                <p>Hi fellow doctor! I am <strong>Dr. Aswanth Krishnan</strong>, an <strong>MD Pharmacology Resident</strong>.</p>
                <p>While preparing for the mandatory <strong>BCBR</strong> exam I found no free, interactive platform with past year assignments, mock tests and smart insights, so I built one after hospital duty.</p>
                <p>It stays <strong>100% free</strong>. Hosting, the database and the AI QBank cost money, and your support keeps it running.</p>
              </div>
            )}
          </div>

          {SUPPORTERS.length > 0 && (
            <div className="text-center">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Thank you to our supporters</p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {SUPPORTERS.map(name => (
                  <span key={name} className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border border-amber-100 dark:border-amber-900/40">{name}</span>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleShare}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-sky-300 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-sm font-bold hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-colors"
          >
            <Share2 size={16} />
            {shareState === 'copied' ? 'Link copied!' : "Can't donate? Share with a batchmate"}
          </button>

          <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 dark:text-slate-500">
            <span className="inline-flex items-center gap-1"><ShieldCheck size={13} /> Pay directly via UPI</span>
            <span className="inline-flex items-center gap-1 text-rose-500 dark:text-rose-400 font-semibold"><Heart size={13} className="fill-current" /> Thank you</span>
          </div>
        </div>
      </motion.div>
    </Modal>
  );
};
