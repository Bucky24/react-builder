import React, { useState } from 'react';
import AdminBar from '../components/AdminBar';

const BuilderContext = React.createContext({});
export default BuilderContext;

export function BuilderProvider({ children, typographies, data }) {
    const [admin, setAdmin] = useState(false);

    typographies = typographies || {};
    data = data || {};

    const value = {
        admin,
        setAdmin,
        typographies,
        data,
    };

    return <BuilderContext.Provider value={value}>
        <AdminBar />
        {children}
    </BuilderContext.Provider>
}