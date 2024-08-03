export default function Value({ children }: {
    children: React.ReactNode;
}) {
    return(
        <div className="p-4 text-lg border-[1px] border-c-primary border-dashed rounded">
            {children}
        </div>
    )
}