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
            {/* Change this border to dashed later */}
            <div className={twMerge(
                "[--item-gap:.75rem] p-5 flex flex-wrap gap-[--item-gap] rounded-md border-[1px] border-white",
            )}>
                {projects.map(project => {
                    const rest = projects.length % 3;
                    return(
                        <InvestmentProject 
                            project={project}
                            className={twMerge(
                                "min-w-full md:min-w-[calc(50%-var(--item-gap))]",
                                rest === 1 && "min-w-[calc(50%-var(--item-gap))]",
                                rest !== 1 && "lg:min-w-[calc(33%-var(--item-gap))]",
                            )}
                            key={project.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}