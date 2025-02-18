import React, { useEffect, useState } from 'react';
import AdminBar from '../components/AdminBar';
import { v4 } from 'uuid';

const BuilderContext = React.createContext({});
export default BuilderContext;

export function BuilderProvider({ children, typographies, data, colors }) {
    const [admin, setAdmin] = useState(false);
    const [selected, setSelected] = useState('nav_title');
    const [settings, setSettings] = useState({});

    useEffect(() => {
        fetch("./api.php?method=getSettings").then((data) => {
            if (data.ok) {
                data.json().then((data) => {
                    if (!data.success) {
                        console.error(data.error);
                    } else {
                        console.log(data);
                    }
                });
            } else {
                data.json().then((data) => {
                    console.error(data.error);
                });
            }
        });
    }, []);

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