import { useConfig } from "@/contexts/config";

export default function AdminInput({ id, prop, value, path }: {
    prop: string;
    value: string;
    path: string;
    id: string;
}) {
    const { updateConfig } = useConfig();

    return(
        <div className="w-full">
            <label htmlFor={id}>
                {prop}
            </label>
            <input 
                id={id}
                type="text"
                value={value}
                className="w-full mt-1 p-2 border-[1px] border-tertiary rounded-md"
                onChange={e => updateConfig(path, e.target.value)}
            />
        </div>
    )
}