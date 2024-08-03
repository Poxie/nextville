import { Project } from "@/assets/types"
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function InvestmentProject({ project, className }: {
    project: Project;
    className?: string;
}) {
    return(
        <a 
            target="_blank"
            href={project.href}
            className={twMerge(
                "group relative flex-1 rounded-md overflow-hidden",
                className,
            )}
        >
            <Image 
                width={500}
                height={300}
                src={`/${project.image}`}
                alt={project.title}
                className="w-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4 bg-dark-gradient absolute bottom-0 w-full left-0 opacity-0 translate-y-16 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-500 ease-in-out">
                <span className="text-xl">
                    {project.title}
                </span>
            </div>
        </a>
    )
}