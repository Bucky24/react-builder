import React, { useContext } from 'react';

import BuilderContext from '../contexts/BuilderContext';

export default function BuilderRepeat({ dataKey, element, id }) {
    const { data } = useContext(BuilderContext);

    const myData = data[dataKey] || [];

    return myData.map((item, index) => {
        return <React.Fragment key={`repeater_${id}_element_${index}`}>{element(item)}</React.Fragment>;
    });
}