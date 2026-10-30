import React, { useEffect, useRef } from 'react';
import { cn } from '../lib/utils';

interface ModalProps {
  /** Accessible name for the dialog (announced by screen readers). */
  ariaLabel: string;
  /** Called when the user presses Escape. When omitted, Escape does nothing. */
  onClose?: () => void;
  /** Tailwind classes for the overlay, passed through unchanged by call sites. */
  overlayClassName?: string;
  children: React.ReactNode;
}

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const getFocusableElements = (overlay: HTMLElement): HTMLElement[] =>
  Array.from(overlay.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (el) => !el.hasAttribute('disabled')
  );

/**
 * Accessible full-screen modal overlay.
 *
 * Renders `role="dialog" aria-modal="true"` with a label, moves focus into the
 * dialog on mount, traps Tab focus while open, optionally closes on Escape,
 * and restores focus to the previously focused element on unmount.
 */
export const Modal: React.FC<ModalProps> = ({ ariaLabel, onClose, overlayClassName, children }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  // Keep the latest handler in a ref so the mount-only effect never goes stale.
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    // The dialog can mount while a previous view/modal is still animating out
    // (AnimatePresence), so its focusable content may not exist yet. Retry for a
    // few frames until focus actually lands inside the dialog.
    let frame = 0;
    let attempts = 0;

    const focusDialog = () => {
      const focusables = getFocusableElements(overlay);
      if (focusables.length > 0) {
        focusables[0].focus();
      } else {
        overlay.focus();
      }
      if (overlay.contains(document.activeElement)) return;
      if (attempts++ < 30) frame = requestAnimationFrame(focusDialog);
    };

    focusDialog();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (onCloseRef.current) {
          event.preventDefault();
          event.stopPropagation();
          onCloseRef.current();
        }
        return;
      }

      if (event.key === 'Tab') {
        const items = getFocusableElements(overlay);
        if (items.length === 0) {
          // No focusable content: keep focus on the overlay itself.
          event.preventDefault();
          overlay.focus();
          return;
        }

        const first = items[0];
        const last = items[items.length - 1];
        const active = document.activeElement;

        if (event.shiftKey && (active === first || active === overlay)) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && (active === last || active === overlay)) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      document.removeEventListener('keydown', handleKeyDown, true);
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      tabIndex={-1}
      className={cn('fixed inset-0 z-50', overlayClassName)}
    >
      {children}
    </div>
  );
};
