
import { twMerge } from "tailwind-merge";
import useAnimateIntoView, { DEFAULT_INITIAL_STATE } from '@/hooks/useAnimateIntoView';
import { useRef } from 'react';

export default function Value({ children, className, index, siblingRef }: {
    children: React.ReactNode;
    className?: string;
    index: number;
    siblingRef?: React.RefObject<HTMLElement>;
}) {
    const ref = useRef<HTMLDivElement>(null);
    useAnimateIntoView(ref, { delay: 200 + index * 200, siblingRef });
    return(
        <div className={twMerge(
            "p-4 text-lg",
            className,
        )} 
        ref={ref}
        style={DEFAULT_INITIAL_STATE}
        >
            {children}
        </div>
    )
}