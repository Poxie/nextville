import { twMerge } from "tailwind-merge";

export default function Value({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) {
    return(
        <div className={twMerge(
            "p-4 text-lg",
            className,
        )}>
            {children}
        </div>
    )
}