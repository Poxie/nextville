"use client";
import { useTranslations } from "next-intl"
import useAnimateIntoView, { DEFAULT_INITIAL_STATE } from '@/hooks/useAnimateIntoView';
import { useRef } from 'react';

export default function About() {
    const t = useTranslations('about');
    const header = useRef<HTMLHeadingElement>(null);
    const p1 = useRef<HTMLParagraphElement>(null);
    const p2 = useRef<HTMLParagraphElement>(null);
    useAnimateIntoView(header, { delay: 200 });
    useAnimateIntoView(p1, { siblingRef: header, delay: 400 });
    useAnimateIntoView(p2, { siblingRef: p1, delay: 600 });

    return (
         <div className="bg-gradient-to-b from-black from-1% via-[#FCC383] via-5% to-white to-30%">
            <section id="about" className="main-width py-32 flex flex-col md:flex-row gap-8 md:gap-20">
                <h2 className="text-5xl leading-tight" ref={header} style={DEFAULT_INITIAL_STATE}>
                    {t('title')}
                </h2>
                <div>
                    <p className="text-lg text-secondary" ref={p1} style={DEFAULT_INITIAL_STATE}>
                        {t('paragraph-one')}
                    </p>
                    <div className="my-8 w-full h-[1px] bg-divider-gradient" />
                    <p className="text-lg text-secondary" ref={p2} style={DEFAULT_INITIAL_STATE}>
                        {t('paragraph-two')}
                    </p>
                </div>
            </section>
        </div>
    );
}