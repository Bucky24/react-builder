import React, { useState } from 'react';
import AdminBar from '../components/AdminBar';

const BuilderContext = React.createContext({});
export default BuilderContext;

export function BuilderProvider({ children, typographies, data, colors }) {
    const [admin, setAdmin] = useState(false);
    const [selected, setSelected] = useState(null);

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
    };

    return <BuilderContext.Provider value={value}>
        <AdminBar />
        {children}
    </BuilderContext.Provider>
}