import ConfigProvider from "@/contexts/config";

export default function Layout({ children }: {
    children: React.ReactNode;
}) {
    return(
        <ConfigProvider>
            {children}
        </ConfigProvider>
    )
}