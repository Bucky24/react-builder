import React, { useContext } from 'react';
import BuilderContext from '../contexts/BuilderContext';

export default function BuilderText({ children, font, id }) {
    const { typographies, admin, setSelected, selected, settings } = useContext(BuilderContext);

    const activeSettings = {
        font,
        ...settings[id],
    };

    const text = Array.isArray(children) ? children[0] : children;

    const styles = {};

    if (activeSettings.font && typographies[activeSettings.font]) {
        const typography = typographies[activeSettings.font];
        styles.fontFamily = typography.family;
        styles.fontSize = typography.size + "px";
        styles.fontWeight = typography.weight;
        styles.letterSpacing = typography['letter-spacing'] + "px";
        styles.lineHeight = typography['line-height'] + "px";
    }

    if (admin) {
        styles.outline = "1px solid black";
        styles.cursor = "pointer";

        if (selected === id) {
            styles.outlineColor = "red";
        }
    }

    return <span
        id={id}
        style={styles}
        onClick={(e) => {
            if (admin) {
                e.stopPropagation();

                setSelected(id);
            }
        }}
    >{text}</span>;
}