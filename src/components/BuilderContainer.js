import React from 'react';

export default function BuilderContainer({ children, flex, flexGrow, flexCol, ...props }) {
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

    return <div {...props} style={styles}>
        {children}
    </div>
}