import { useState, useEffect } from 'react';

import Header from '@components/headers/jsx/Header';

import '@app/css/App.css'

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Header toggleTheme={toggleTheme} />
    );
}

export default App
