import { useContext } from "react";

const SETTABLE_VALUES = [
    'font',
    'color',
];

import BuilderContext from "../contexts/BuilderContext";

export default function useGetStyles() {
    const { admin, selected, colors, typographies } = useContext(BuilderContext);

    return (props, id, settings) => {
        const { flex, flexGrow, flexCol, bgColor, style, color, ...rest } = props;

        const values = {};
        for (const value of SETTABLE_VALUES) {
            if (settings?.[value]) {
                values[value] = settings[value];
            } else if (props[value]) {
                values[value] = props[value];
            }
        }

        const styles = {
            ...style,
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
    
            if (selected === id) {
                styles.outlineColor = "#f00";
            }
        }

        if (values.font && typographies[values.font]) {
            const typography = typographies[values.font];
            styles.fontFamily = typography.family;
            styles.fontSize = typography.size + "px";
            styles.fontWeight = typography.weight;
            styles.letterSpacing = typography['letter-spacing'] + "px";
            styles.lineHeight = typography['line-height'] + "px";
        }

        if (values.color && colors[values.color]) {
            styles.color = colors[values.color];
        }

        return {
            styles,
            propsWithoutStyles: rest,
        };
    }
}