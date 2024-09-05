import { Project } from "@/assets/types"
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function InvestmentProject({ project, className }: {
    project: Project;
    className?: string;
}) {
    const props = {
        className: twMerge(
            "group relative flex-1 aspect-square rounded-md overflow-hidden",
            className,
        ),
    }
    const children = (
        <>
        <Image 
            width={500}
            height={300}
            src={`/imgs/investments/${project.image}`}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {project.exit && (
            <div className="px-3.5 py-1 absolute top-2 right-2 text-sm bg-white text-primary font-bold rounded-full shadow-lg pointer-events-none">
                Exit
            </div>
        )}
        <div className="p-4 bg-dark-gradient absolute bottom-0 w-full left-0">
            <span className="text-lg">
                {project.title}
            </span>
        </div>
        </>
    )
    return(
<<<<<<< HEAD
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
                className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4 bg-dark-gradient absolute bottom-0 w-full left-0 md:opacity-0 md:translate-y-16 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-500 ease-in-out">
                <span className="text-xl">
                    {project.title}
                </span>
=======
        project.href ? (
            <a
                target="_blank"
                href={project.href}
                {...props}
            >
                {children}
            </a>
        ) : (
            <div {...props}>
                {children}
>>>>>>> 9a01f7c (Add rest of investments)
            </div>
        )
    )
}