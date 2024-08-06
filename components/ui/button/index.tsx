import { twMerge } from "tailwind-merge";

export default function Button({ children, className, onClick, disabled, type='primary' }: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'primary' | 'secondary';
}) {
    className = twMerge(
        'px-4 py-3 font-medium rounded-md border-[1px] transition-colors duration-300',
        type === 'primary' && 'bg-c-primary text-primary hover:bg-c-primary/70',
        type === 'secondary' && 'text-light border-dark hover:bg-dark hover:text-light',
        className,
    )

    return(
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}