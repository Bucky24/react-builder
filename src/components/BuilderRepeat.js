import React, { useContext } from 'react';

import BuilderContext from '../contexts/BuilderContext';

export default function BuilderRepeat({ dataKey, element }) {
    const { data } = useContext(BuilderContext);
    
    const myData = data[dataKey] || [];

    return myData.map((item) => {
        return element(item);
    });
}