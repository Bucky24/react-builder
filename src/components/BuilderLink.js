import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import BuilderContext from '../contexts/BuilderContext';

export default function BuilderLink({ children, ...props }) {
    const { admin } = useContext(BuilderContext);

    if (admin) {
        return <a {...props} onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
        }}>{children}</a>;
    } else {
        return <Link {...props}>{children}</Link>;
    }
}