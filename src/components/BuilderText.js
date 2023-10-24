import React, { useContext } from 'react';
import BuilderContext from '../contexts/BuilderContext';

export default function BuilderText({ children, font }) {
    const { typographies } = useContext(BuilderContext);

    const text = Array.isArray(children) ? children[0] : children;

    const styles = {};

    if (font && typographies[font]) {
        const typography = typographies[font];
        styles.fontFamily = typography.family;
        styles.fontSize = typography.size + "px";
        styles.fontWeight = typography.weight;
        styles.letterSpacing = typography['letter-spacing'] + "px";
        styles.lineHeight = typography['line-height'] + "px";
    }

    return <span style={styles}>{text}</span>;
}