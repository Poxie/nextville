'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import scrollToSection from '@/utils/scrollToSection';
import { RemoveScroll } from 'react-remove-scroll';
import Button from '../button';
import { useTranslations } from 'next-intl';


export default function Menu({
  navbarTabs,
  menuOpen,
  setMenuOpen,
}: {
  navbarTabs: { label: string; href: string }[];
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}) {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const t = useTranslations("navbar");
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 640);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isWideScreen) setMenuOpen(false);
  }, [isWideScreen, setMenuOpen]);

  const handleClick = (href: string) => {
    scrollToSection(href);
    setMenuOpen(false);
}

  return (
    <AnimatePresence>
      {menuOpen && !isWideScreen && (
        <RemoveScroll removeScrollBar={false}>
          <motion.div
            className='fixed top-0 right-0 bottom-0 left-0  z-[1] bg-black pt-[90px] text-white'
            initial={{ x: '100%' }}
            animate={{ x: '0' }}
            exit={{ x: '100%' }}
            transition={{ bounce: false }}
          >
            <ul className='flex flex-col gap-2 main-width'>
              {navbarTabs.map(({ href, label }) => (
                <li
                  key={href}
                  className='cursor-pointer hover:opacity-90 transition-colors'
                  onClick={() => {
                    scrollToSection(href);
                    setMenuOpen(false);
                  }}
                >
                  {label}
                </li>
              ))}
              <Button
                        type="secondary"
                        className="mt-4 w-[50%]"
                        onClick={() => handleClick("contactHref")}
                    >
                        {t("contactLabel")}
                    </Button>
            </ul>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
}