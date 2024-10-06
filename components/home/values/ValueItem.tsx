"use client";
import { useEffect, useRef } from "react";

const SCROLL_AMOUNT = 200;
const SCROLL_SPEED = .8;
export default function ValueItem({ children, reversed }: {
    children: React.ReactNode;
    reversed: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let initialScroll: number | null = null;
        const onScroll = () => {
            if(!ref.current) return;

            const { top } = ref.current.getBoundingClientRect();

            const isVisible = top - window.innerHeight < 0;
            if(!isVisible) return initialScroll = null;

            if(!initialScroll) initialScroll = window.scrollY;

            const scroll = window.scrollY;
            
            const diff = scroll - initialScroll;

            let translateValue = (!reversed ? -1 : 1) * (diff / SCROLL_AMOUNT) * 100 * SCROLL_SPEED;

            if(translateValue > 100) translateValue = 100;
            if(translateValue < -100) translateValue = -100;

            ref.current.style.transform = `translate3d(${translateValue}%, 0, 0)`;
        }
        onScroll();

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const defaultTranslateValue = reversed ? '-100%' : '100%';
    return(
        <div 
            style={{ left: defaultTranslateValue }}
            className="px-4 py-16 relative text-3xl text-light text-center bg-dark"
            ref={ref}
        >
            {children}
        </div>
    )
}