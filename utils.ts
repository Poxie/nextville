import { Config } from "./types";

export default async function updateConfigFile(config: Config) {
    const response = await fetch(`/admin/update-config`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ config }),
    });

    if(!response.ok) {
        throw new Error('Failed to update property');
    }

    return (await response.json()).config as Config;
}