import React, { useState } from 'react';
import AdminBar from '../components/AdminBar';
import { v4 } from 'uuid';

const BuilderContext = React.createContext({});
export default BuilderContext;

export function BuilderProvider({ children, typographies, data, colors }) {
    const [admin, setAdmin] = useState(true);
    const [selected, setSelected] = useState('nav_title');
    const [settings, setSettings] = useState({});

    typographies = typographies || {};
    data = data || {};
    colors = colors || {};

    const value = {
        admin,
        setAdmin,
        typographies,
        data,
        colors,
        setSelected,
        selected,
        settings,
        generateId: () => {
            return v4();
        },
        setSetting: (id, key, value) => {
            if (value === "") {
                const newSettings = settings[id] || {};
                delete newSettings[key];
                setSettings({
                    ...settings,
                    [id]: newSettings,
                })
            } else {
                setSettings({
                    ...settings,
                    [id]: {
                        ...settings?.[id],
                        [key]: value,
                    },
                });
            }
        }
    };

    return <BuilderContext.Provider value={value}>
        <AdminBar />
        {children}
    </BuilderContext.Provider>
}