'use client';
import { usePathname } from 'next/navigation';

const usePageColor = () => {
  const pathname = usePathname();

  const pageColors = {
    '/': 'bg-stone-300',
    '/reservations': 'bg-gris-10',
    '/bedrooms': 'bg-gris-30',
    '/services': 'bg-gris-60',
  };

  return pageColors[pathname] || 'bg-neutral-300';
}

export default usePageColor;