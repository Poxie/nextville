"use client";
import { useRef } from "react";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";
import ValuesList from "./ValueList";
import { useTranslations } from "next-intl";

export default function Values() {
    const t = useTranslations('values');

    const headerRef = useRef<HTMLDivElement>(null);

    const { initialState } = useAnimateIntoView(headerRef, { threshold: .9 });

    return(
        <section className="py-32 pb-[1px]">
            <h2 
                className="mb-12 text-5xl leading-tight text-center"
                style={initialState}
                ref={headerRef}
            >
                {t('title')}
            </h2>
            <ValuesList />
        </section>
    )
}