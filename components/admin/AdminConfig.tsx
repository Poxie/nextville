"use client";

import { useConfig } from "@/contexts/config";
import AdminSection from "./AdminSection";
import { Config } from "@/types";

export default function AdminConfig() {
    const { config } = useConfig();

    if(!config) return null;

    return(
        <div className="main-width py-12 pt-24 grid gap-8">
            {Object.keys(config).map(prop => {
                const Prop = prop as keyof Config;

                return(
                    <AdminSection 
                        prop={Prop}
                        values={config[Prop]}
                        key={prop}
                    />
                )
            })}
        </div>
    )
}