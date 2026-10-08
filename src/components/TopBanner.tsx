import React, { useMemo } from 'react';

export const TopBanner: React.FC = () => {
  const currentDate = useMemo(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }, []);

  return (
    <div
      id="top-urgency-banner"
      className="w-full bg-red-600 text-white text-center py-2.5 px-4 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-sm"
    >
      <span>OFERTA DISPONÍVEL APENAS HOJE {currentDate}</span>
    </div>
  );
};
