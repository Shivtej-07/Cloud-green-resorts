import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    scrollY: 0,
    isScrolled: false,
    scrollDirection: 'none'
  });

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScroll = () => {
      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';

      setScrollPosition({
        scrollY: currentScrollY,
        isScrolled: currentScrollY > 40,
        scrollDirection: direction
      });

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return scrollPosition;
}
