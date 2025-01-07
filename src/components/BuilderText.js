import React, { useContext } from 'react';

import BuilderContext from '../contexts/BuilderContext';
import useGetStyles from '../hooks/useGetStyles';

export default function BuilderText({ children, id, ...props }) {
    const { admin, setSelected, settings } = useContext(BuilderContext);
    const getStyles = useGetStyles();

    const { styles, propsWithoutStyles } = getStyles(props, id, settings[id]);

    const text = settings?.[id]?.text || (Array.isArray(children) ? children[0] : children);

    return <span
        style={styles}
        {...propsWithoutStyles}
        onClick={(e) => {
            if (admin) {
                e.stopPropagation();

                setSelected(id);
            }
        }}
    >{text}</span>;
}