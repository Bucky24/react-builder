import React, { useContext, useRef } from 'react';

import BuilderContext from '../contexts/BuilderContext';
import useGetStyles from '../hooks/useGetStyles';

export default function BuilderContainer({ children, id, ...props }) {
    const { admin, generateId, setSelected } = useContext(BuilderContext);
    const idRef = useRef(id || generateId());
    const getStyles = useGetStyles();

    const { styles, propsWithoutStyles } = getStyles(props, idRef.current);

    return <div
        {...propsWithoutStyles}
        style={styles}
        onClick={(event) => {
            if (admin) {
                setSelected(idRef.current);
                event.stopPropagation();
                event.preventDefault();
                return;
            }

            if (props.onClick) {
                props.onClick(event);
            }
        }}
    >
        {children}
    </div>
}