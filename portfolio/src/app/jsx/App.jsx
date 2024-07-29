import { useState, useEffect, useLayoutEffect } from 'react';

import RoutesHandle from '@routes/jsx/RoutesHandle';

import Header from '@components/headers/jsx/Header';
import NavbarNormal from '@components/navbars/jsx/NavbarNormal';

import '@app/css/App.css'

function App() {
    useLayoutEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <RoutesHandle />
    );
}

export default App
