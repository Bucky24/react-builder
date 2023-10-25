import React, { useState } from 'react';
import AdminBar from '../components/AdminBar';

const BuilderContext = React.createContext({});
export default BuilderContext;

export function BuilderProvider({ children, typographies, data, colors }) {
    const [admin, setAdmin] = useState(false);
    const [selected, setSelected] = useState();
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