import { Project } from "@/assets/types";
import { useTranslations } from "next-intl";
import InvestmentProject from "./InvestmentProject";
import { twMerge } from "tailwind-merge";

export default function InvestmenutGroup({ title, projects }: {
    title: string;
    projects: Project[];
}) {
    const t = useTranslations('investments');

    return(
        <div>
            <div className="my-4 flex items-center gap-6">
                <span className="block">
                    {t(`header.${title}`)}
                </span>
                <div className="flex-1 h-[1px] bg-white/40" />
            </div>
            <div className={twMerge(
                "grid grid-cols-4 gap-4 rounded-md",
            )}>
                {projects.map(project => (
                    <InvestmentProject 
                        project={project}
                        key={project.title}
                    />
                ))}
            </div>
        </div>
    )
}