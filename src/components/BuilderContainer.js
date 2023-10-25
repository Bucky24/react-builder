import React, { useContext } from 'react';

import BuilderContext from '../contexts/BuilderContext';

export default function BuilderContainer({ children, flex, flexGrow, flexCol, bgColor, ...props }) {
    const { colors } = useContext(BuilderContext);

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

    return <div {...props} style={styles}>
        {children}
    </div>
}