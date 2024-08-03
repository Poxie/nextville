"use client";
import { useConfig } from "@/contexts/config"

export default function AdminSaveButton() {
    const { saveConfig, updating } = useConfig();

    return(
        <button 
            className="bg-dark hover:bg-dark/80 text-light p-3 rounded-md transition-colors"
            onClick={saveConfig}
            disabled={updating}
        >
            {updating ? 'Saving changes...' : 'Save changes'}
        </button>
    )
}