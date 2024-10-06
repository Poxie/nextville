"use client";
import { useTranslations } from "next-intl"
import useAnimateIntoView, { DEFAULT_INITIAL_STATE } from '@/hooks/useAnimateIntoView';
import { useRef } from 'react';
import AboutCard from "./AboutCard";
import AboutImage from "./AboutImage";

export default function About() {
    const t = useTranslations('about');

    return (
        <section id="about" className="main-width py-32">
            <h2 className="mb-4 text-5xl leading-tight">
                {t('title')}
            </h2>
            <div className="flex gap-16">
                <AboutCard />
                <AboutImage />
            </div>
        </section>
    );
}