import React from 'react';
import { BuilderContainer, BuilderText, BuilderRepeat } from 'react-builder';
import { Link } from 'react-router-dom';

export default function Header() {
    return <BuilderContainer flex="center center" flexGrow style={{
        padding: '10px 20px',
    }}>
        <BuilderContainer flex="space-between flex-start" style={{
            maxWidth: 1280,
            width: 1280,
            columnGap: 10,
        }}>
            <BuilderContainer flexGrow>
                <BuilderText font="title">SPEAKING FOR OURSELVES</BuilderText>
            </BuilderContainer>
            <BuilderContainer flexGrow flex="flex-end flex-end" style={{
                columnGap: 10,
            }}>
                <BuilderRepeat dataKey="nav" element={(data) => {
                    return <Link to={data.link} style={{
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>{data.title}</Link>;
                }} />
            </BuilderContainer>
        </BuilderContainer>
    </BuilderContainer>
}