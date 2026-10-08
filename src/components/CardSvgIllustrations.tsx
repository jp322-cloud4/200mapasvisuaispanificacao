import React from 'react';

/**
 * SVGs delicados e minimalistas para os 4 cards da Section 2.
 * Podem ser facilmente substituídos por imagens PNG/JPG ou outros SVGs.
 */

interface SvgProps {
  className?: string;
}

export const ObjectsPaintingSvg: React.FC<SvgProps> = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Dinâmicas de Pintura com Objetos"
  >
    <rect width="64" height="64" rx="14" fill="#FEF3EE" />
    {/* Balão / Círculo suave */}
    <circle cx="26" cy="25" r="11" fill="#F97316" fillOpacity="0.18" stroke="#EA580C" strokeWidth="2" />
    <path d="M26 36L26 43" stroke="#EA580C" strokeWidth="1.8" strokeLinecap="round" />
    {/* Garfo / Objeto de carimbo estilizado */}
    <path d="M42 20V32M39 20V26M45 20V26M39 26H45M42 32V44" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Gotas de tinta suaves */}
    <circle cx="21" cy="23" r="2" fill="#EA580C" />
    <circle cx="34" cy="29" r="2.5" fill="#F59E0B" />
    <circle cx="28" cy="18" r="1.5" fill="#FB923C" />
  </svg>
);

export const SensoryPaintingSvg: React.FC<SvgProps> = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Brincadeiras Sensoriais com Tinta"
  >
    <rect width="64" height="64" rx="14" fill="#F0FDF4" />
    {/* Mãozinha sensorial minimalista */}
    <path
      d="M32 44V34M28 43V31C28 29.8954 28.8954 29 30 29C31.1046 29 32 29.8954 32 31V25C32 23.8954 32.8954 23 34 23C35.1046 23 36 23.8954 36 25V31M36 28C36 26.8954 36.8954 26 38 26C39.1046 26 40 26.8954 40 28V36C40 40 37 44 32 44Z"
      stroke="#16A34A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#22C55E"
      fillOpacity="0.12"
    />
    {/* Ondas sensoriais de cor */}
    <circle cx="22" cy="24" r="5" fill="#38BDF8" fillOpacity="0.25" stroke="#0284C7" strokeWidth="1.8" />
    <circle cx="43" cy="20" r="4" fill="#FBBF24" fillOpacity="0.3" stroke="#D97706" strokeWidth="1.8" />
    <circle cx="20" cy="38" r="3" fill="#F472B6" fillOpacity="0.3" stroke="#DB2777" strokeWidth="1.8" />
  </svg>
);

export const PrintableActivitiesSvg: React.FC<SvgProps> = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Atividades Imprimíveis para Pintar"
  >
    <rect width="64" height="64" rx="14" fill="#EFF6FF" />
    {/* Folha de papel pronta para imprimir */}
    <rect x="22" y="17" width="22" height="30" rx="3" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" />
    <path d="M27 24H37" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
    <path d="M27 29H37" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
    {/* Desenho para colorir (estrela / flor) */}
    <path
      d="M32 34L33.2 36.5L36 36.8L34 38.6L34.5 41.3L32 40L29.5 41.3L30 38.6L28 36.8L30.8 36.5L32 34Z"
      fill="#F59E0B"
      stroke="#D97706"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    {/* Ícone sutil de download/impressão */}
    <circle cx="44" cy="42" r="6" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
    <path d="M44 39V43M42 42L44 44L46 42" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const NaturePaintingSvg: React.FC<SvgProps> = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Pintura com Elementos da Natureza"
  >
    <rect width="64" height="64" rx="14" fill="#FAF5FF" />
    {/* Folha natural */}
    <path
      d="M36 19C28 20 23 27 24 35C26 36 30 36 34 32C38 28 38 22 36 19Z"
      fill="#A855F7"
      fillOpacity="0.18"
      stroke="#9333EA"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M26 33C29 30 33 26 36 19" stroke="#9333EA" strokeWidth="1.8" strokeLinecap="round" />
    {/* Flor delicada */}
    <circle cx="41" cy="38" r="3" fill="#F472B6" />
    <circle cx="41" cy="32" r="2.5" fill="#FBCFE8" stroke="#DB2777" strokeWidth="1" />
    <circle cx="47" cy="38" r="2.5" fill="#FBCFE8" stroke="#DB2777" strokeWidth="1" />
    <circle cx="41" cy="44" r="2.5" fill="#FBCFE8" stroke="#DB2777" strokeWidth="1" />
    <circle cx="35" cy="38" r="2.5" fill="#FBCFE8" stroke="#DB2777" strokeWidth="1" />
  </svg>
);
