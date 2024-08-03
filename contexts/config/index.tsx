"use client";
import getConfig from '@/api/getConfig';
import { Config } from '@/types';
import updateConfigFile from '@/utils';
import React, { useEffect, useState } from 'react';

const ConfigContext = React.createContext<null | {
    config: Config | null;
    updateConfig: (prop: string, value: any) => void;
    saveConfig: () => void;
}>(null);

export const useConfig = () => {
    const context = React.useContext(ConfigContext);
    if(!context) {
        throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context;
}

export default function ConfigProvider({ children }: {
    children: React.ReactNode;
}) {
    const [config, setConfig] = useState<null | Config>(null);

    useEffect(() => {
        getConfig().then(setConfig);
    }, []);

    const updateConfig = (prop: string, value: any) => {
        if(!config) return;
        const newConfig = { ...config };
        
        const lastProp = prop.split('-').pop();
        const getPropPart = (config: Record<string, any>, key: string) => {
            if(key.includes('-')) {
                const [first, ...rest] = key.split('-');
                if(!config[first]) config[first] = {};
                getPropPart(config[first], rest.join('-'));
            } else {
                config[key] = value;
            }
        }
        getPropPart(newConfig, prop);

        setConfig(newConfig);
    }
    const saveConfig = async () => {
        if(!config) return;
        const newConfig = await updateConfigFile(config);
        setConfig(newConfig);
    }

    const value = {
        config,
        updateConfig,
        saveConfig,
    }
    return(
        <ConfigContext.Provider value={value}>
            {children}
        </ConfigContext.Provider>
    )
}