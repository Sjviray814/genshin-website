import React from 'react';
import Comparer from './DamageComparer/Comparer.js'
import Header from './Header/Header.js'
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Comparer/>
        </div>

    )
}

export default App;