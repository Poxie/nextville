"use client";
import { useTranslations } from "next-intl"
import HeroBackground from "./HeroBackground";
import { useRef } from "react";

export default function Hero() {
    const t = useTranslations('home');
    
    const container = useRef<HTMLDivElement>(null);

    return(
        <div className="relative h-[80vh] bg-dark" ref={container}>
            <HeroBackground containerRef={container} />
            <div className="relative h-full flex flex-col justify-center items-center gap-2 text-light">
                <span className="text-6xl font-semibold">
                    {t('title')}
                </span>
                <span className="text-4xl text-secondary">
                    {t('subtitle')}
                </span>
            </div>
        </div>
    )
}