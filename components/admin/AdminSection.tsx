import { Config } from "@/types";
import AdminInput from "./AdminInput";

export default function AdminSection({ prop, values, startPath }: {
    prop: keyof Config;
    values: Record<string, any> | string;
    startPath?: string;
}) {
    return(
        <div className="border-[1px] border-tertiary rounded-md">
            <div className="p-4 border-b-[1px] border-tertiary">
                <span className="text-lg">
                    {prop.slice(0,1).toUpperCase() + prop.slice(1)}
                </span>
            </div>
            <div className="p-4 grid gap-2">
                {Object.keys(values).map(key => {
                    const Key = key as keyof Config[keyof Config];
                    const inputValues = values[Key];

                    if(typeof inputValues === 'object') {
                        return(
                            <AdminSection 
                                prop={Key}
                                values={inputValues}
                                startPath={`${prop}-${key}`}
                                key={`${prop}-${key}`}
                            />
                        )
                    }

                    const path = startPath ? `${startPath}-${key}` : `${prop}-${key}`;
                    return(
                        <AdminInput 
                            prop={Key}
                            value={inputValues}
                            path={path}
                            id={path}
                            key={path}
                        />
                    )
                })}
            </div>
        </div>
    )
}