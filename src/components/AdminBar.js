import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import BuilderContext from '../contexts/BuilderContext';

export default function AdminBar() {
    const { admin, setAdmin, selected } = useContext(BuilderContext);

    if (!admin) {
        return <div
            style={{
                position: 'fixed',
                left: 10,
                top: 10,
            }}
            onClick={() => {
                setAdmin(true);
            }}
        >
            <FontAwesomeIcon icon={faBars} />
        </div>;
    }

    return <div style={{
        position: 'relative',
    }}>
        <div style={{
            height: 50,
        }}></div>
        <div style={{
            backgroundColor: '#999',
            padding: 10,
            height: 30,
            position: 'fixed',
            width: '100%',
            top: 0,
        }}>
            {!selected && "Select an element"}
            {selected && <div>
                Selected {selected}
            </div>}
        </div>
    </div>
}