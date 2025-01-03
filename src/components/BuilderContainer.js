import React, { useContext, useRef } from 'react';

import BuilderContext from '../contexts/BuilderContext';

export default function BuilderContainer({ children, flex, flexGrow, flexCol, bgColor, id, ...props }) {
    const { admin, generateId, selected, setSelected, colors } = useContext(BuilderContext);
    const idRef = useRef(id || generateId());

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

    if (bgColor) {
        styles.backgroundColor = colors[bgColor];
    }

    if (admin) {
        styles.outline = "1px solid";
        styles.outlineColor = "#000";
        styles.cursor = "pointer";

        if (selected === idRef.current) {
            styles.outlineColor = "#f00";
        }
    }

    return <div
        {...props}
        style={styles}
        onClick={(...args) => {
            if (admin) {
                setSelected(idRef.current);
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