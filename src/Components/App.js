import React from 'react';
import Comparer from './DamageComparer/Comparer.js'
import Header from './Header/Header.js'
import CritConverter from './CritConverter/CritConverter.js';
import CritComparer from './CritComparer/CritComparer.js';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Comparer/>
            <CritConverter/>
            <CritComparer/>
        </div>

    )
}

export default App;