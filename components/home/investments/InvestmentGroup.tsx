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
            <span className="mb-4 pl-5 block">
                {t(`header.${title}`)}
            </span>
            <div className={twMerge(
                "border-image p-5 grid grid-cols-4 gap-4 rounded-md",
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