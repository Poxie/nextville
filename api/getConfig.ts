import { Config } from "@/types";

export default async function getConfig() {
    return fetch('/admin/config').then(async res => {
        const data = await res.json();
        return data as Config;
    });
}