import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Rote } from 'react-router-dom';
import { BuilderContainer } from 'react-builder';

import styles from './styles.css';
import Header from './components/Header';

export default function App() {
    return <BuilderContainer bgColor="main-background" className={styles.appRoot}>
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    </BuilderContainer>
}