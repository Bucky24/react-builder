import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import BuilderContext from '../contexts/BuilderContext';

export default function AdminBar() {
    const { admin, setAdmin } = useContext(BuilderContext);

    if (!admin) {
        return <div
            style={{
                position: 'fixed',
            }}
            onClick={() => {
                setAdmin(true);
            }}
        >
            <FontAwesomeIcon icon={faBars} />
        </div>;
    }

    return <div>admin</div>
}