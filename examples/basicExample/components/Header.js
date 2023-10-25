import React from 'react';
import { BuilderContainer, BuilderText, BuilderRepeat, BuilderLink } from 'react-builder';

export default function Header() {
    return <BuilderContainer flex="center center" flexGrow style={{
        padding: '10px 20px',
    }}>
        <BuilderContainer flex="space-between center" style={{
            maxWidth: 1280,
            width: 1280,
            columnGap: 10,
        }}>
            <BuilderContainer flexGrow>
                <BuilderText id="nav_title" font="title">SPEAKING FOR OURSELVES</BuilderText>
            </BuilderContainer>
            <BuilderContainer flexGrow flex="flex-end flex-end" style={{
                columnGap: 24,
                height: '100%',
            }}>
                <BuilderRepeat dataKey="nav" element={(data) => {
                    return <BuilderLink to={data.link} style={{
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                        <BuilderText id={data.title} font="nav">{data.title}</BuilderText>
                    </BuilderLink>;
                }} />
            </BuilderContainer>
        </BuilderContainer>
    </BuilderContainer>
}