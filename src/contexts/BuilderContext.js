import React, { useState } from 'react';
import AdminBar from '../components/AdminBar';
import { v4 } from 'uuid';

const BuilderContext = React.createContext({});
export default BuilderContext;

export function BuilderProvider({ children, typographies, data }) {
    const [admin, setAdmin] = useState(false);
    const [activeId, setActiveId] = useState(null);

    typographies = typographies || {};
    data = data || {};

    const value = {
        admin,
        setAdmin,
        typographies,
        data,
        generateId: () => {
            return v4();
        },
        activeId,
        setActiveId,
    };

    return <BuilderContext.Provider value={value}>
        <AdminBar />
        {children}
    </BuilderContext.Provider>
}