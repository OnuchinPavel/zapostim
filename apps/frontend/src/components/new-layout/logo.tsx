'use client';

// Zaпостим — знак в шапке приложения. Сгенерирован build-assets.py,
// правки вносить там, иначе разъедется с фавиконом.
export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 64 64"
      fill="none"
      className="mt-[8px] min-w-[60px] min-h-[60px]"
    >
      <rect width="64" height="64" rx="14" fill="#23219E" />
      <rect x="12" y="17" width="29" height="8" fill="#FFFFFF" />
        <polygon points="32,25 41,25 21,39 12,39" fill="#FFFFFF" />
        <rect x="12" y="39" width="29" height="8" fill="#FFFFFF" />
        <polygon points="44,14 55,21 44,28" fill="#FF7A2F" />
    </svg>
  );
};
