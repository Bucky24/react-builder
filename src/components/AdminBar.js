import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

import BuilderContext from '../contexts/BuilderContext';

export default function AdminBar() {
    const { 
        admin,
        setAdmin,
        selected,
        setSelected,
        typographies,
        setSetting,
        settings,
        colors,
    } = useContext(BuilderContext);

    const search = window.location.search;
    const allowAdmin = search.includes("?admin=1") || search.includes("&admin=1");

    if (!allowAdmin) {
        return;
    }

    if (!admin) {
        return <div
            style={{
                position: 'fixed',
                right: 10,
                top: 10,
                cursor: 'pointer',
            }}
            onClick={() => {
                setAdmin(true);
            }}
        >
            <FontAwesomeIcon icon={faBars} />
        </div>;
    }

    const activeSettings = settings[selected] || {};

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
            width: 'calc(100% - 20px)',
            top: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <div>
                {!selected && "Select an element"}
                {selected && <div style={{ display: 'flex', columnGap: 10 }}>
                    <div>
                        Selected {selected}
                    </div>
                    <div>
                        <label>Font</label>
                        <select value={activeSettings.font ?? ""} onChange={(e) => {
                            setSetting(selected, "font", e.target.value);
                        }}>
                            <option value="">Default</option>
                            {Object.keys(typographies).map((name) => {
                                return <option key={`font_${name}`} value={name}>{name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label>Color</label>
                        <select value={activeSettings.color ?? ""} onChange={(e) => {
                            setSetting(selected, "color", e.target.value);
                        }}>
                            <option value="">Default</option>
                            {Object.keys(colors).map((name) => {
                                return <option key={`color_${name}`} value={name}>{name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label>Text</label>
                        <input type="text" value={activeSettings.text ?? ''} onChange={(e) => {
                            setSetting(selected, "text", e.target.value);
                        }}/>
                    </div>
                </div>}
            </div>
            <div
                style={{
                    cursor: 'pointer'
                }}
                onClick={() => {
                    setAdmin(false);
                    setSelected(null);
                }}
            >
                <FontAwesomeIcon icon={faClose} />
            </div>
        </div>
    </div>
}