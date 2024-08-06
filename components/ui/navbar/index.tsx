"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useScroll, motion, useMotionValueEvent } from 'framer-motion';
import logo from "@/assets/imgs/logo.png";
import scrollToSection from '@/utils/scrollToSection';
import Menu from './Menu';

import { useTranslations } from 'next-intl';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { scrollY } = useScroll();
    const [show, setShow] = useState(true);
    const [background, setBackground] = useState(false);
   

    const t = useTranslations("navbar");

    const NAVBAR_TABS = [
      { label: t("aboutLabel"), href: t("aboutHref") },
      { label: t("investmentsLabel"), href: t("investmentsHref") },
  ]

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    if (scrollY.get() === 0) setBackground(false);
    if (previous) {
      if (latest > previous && latest > 150) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    if (show) {
      if (scrollY.get() > 150) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    }
  });

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleClick = (href: string) => {
        scrollToSection(href);
        setMenuOpen(false);
    }

    return(
       <>
        <motion.header className={twMerge("py-6 lg:p-6 w-full z-20 fixed text-light shadow-lg", background && 'bg-black opacity-90  ' )}     variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={show ? 'visible' : 'hidden'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}>
            <div className="main-width lg:max-w-full flex items-center justify-between">
                <Link
                    href="/"
                    aria-label="Go to homepage"
                >
                    <Image 
                        className="-mt-2 sm:-mt-4"
                        src={logo}
                        width={137}
                        height={39}
                        alt="logo"
                    />
                </Link>
                <button
                    onClick={toggleMenu}
                    className="-m-1 p-1 block sm:hidden hover:bg-light/10 rounded"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    {menuOpen ? <IoMdClose size={32} /> : <HiMenuAlt4 size={32} />}
                </button>
                <nav className={twMerge(
                    "w-full h-screen fixed top-full left-full flex flex-col items-center bg-dark transition-[left] duration-300",
                    menuOpen && 'left-0',
                    "sm:relative sm:h-[unset] sm:w-[unset] sm:top-[unset] sm:left-[unset] sm:flex-row sm:gap-5 sm:bg-transparent",
                )}>
                    <ul className={twMerge(
                        "mb-8 mt-2 w-full flex flex-col items-center sm:flex-row divide-y-[1px] divide-light border-y-[1px] border-y-light",
                        "sm:m-0 sm:w-[unset] sm:gap-4 sm:divide-y-0 sm:border-y-0"
                    )}>
                        {NAVBAR_TABS .map(tab => (
                            <li 
                                key={tab.href}
                                className="w-full text-center "
                            >
                                <a
                                         key={tab.href}
                                    className={twMerge(
                                        "w-full text-center block py-8 text-2xl hover:opacity-90 cursor-pointer",
                                        "sm:text-base sm:py-0"
                                    )}
                                    onClick={() => handleClick(tab.href)}
                                    aria-label={`Go to ${tab.label}`}
                                >
                                    {tab.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Button
                        type="secondary"
                        className={twMerge(
                            "w-full max-w-main text-xl py-5",
                            "sm:w-[unset] sm:py-3 sm:text-base"
                        )}
                        onClick={() => handleClick(t("contactHref"))}
                    >
                        {t("contactLabel")}
                    </Button>
                </nav>
            </div>
        </motion.header>
        <Menu navbarTabs={NAVBAR_TABS} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
    )
}