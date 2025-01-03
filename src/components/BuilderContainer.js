import React, { useContext, useRef } from 'react';

import BuilderContext from '../contexts/BuilderContext';

export default function BuilderContainer({ children, flex, flexGrow, flexCol, ...props }) {
    const { admin, generateId, activeId, setActiveId } = useContext(BuilderContext);
    const idRef = useRef(generateId());

    const styles = {
        ...props.style,
    };

    if (flex) {
        const [justify, align] = flex.split(" ");
        styles.display = "flex";
        styles.justifyContent = justify;
        styles.alignItems = align;
    }

    if (flexGrow) {
        styles.flexGrow = 1;
        styles.flexShrink = 0;
        styles.flexBasis = 0;
    }

    if (flexCol) {
        styles.flexDirection = "column";
    }

    if (admin && activeId === idRef.current) {
        styles.outline = "1px solid #0f0";
    }

    return <div
        {...props}
        style={styles}
        onClick={(...args) => {
            if (admin) {
                setActiveId(idRef.current);
                return;
            }

            if (props.onClick) {
                props.onClick(...args);
            }
        }}
    >
        {children}
    </div>
}