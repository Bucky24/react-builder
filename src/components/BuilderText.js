import React, { useContext } from 'react';
import BuilderContext from '../contexts/BuilderContext';

export default function BuilderText({ children, font, id, color }) {
    const { typographies, admin, setSelected, selected, settings, colors } = useContext(BuilderContext);

    const activeSettings = {
        font,
        color,
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

    if (activeSettings.color && colors[activeSettings.color]) {
        styles.color = colors[activeSettings.color];
    }

    if (admin) {
        styles.outline = "1px solid";
        styles.outlineColor = "black";
        styles.cursor = "pointer";

        if (selected === id) {
            styles.outlineColor = "red";
        }
    }

    return <span
        style={styles}
        onClick={(e) => {
            if (admin) {
                e.stopPropagation();

                setSelected(id);
            }
        }}
    >{text}</span>;
}