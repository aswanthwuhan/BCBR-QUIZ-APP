import React, { useEffect } from 'react';

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export const AdBanner: React.FC<AdBannerProps> = () => {
  return null;
};
