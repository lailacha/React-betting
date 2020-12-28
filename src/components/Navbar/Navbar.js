import React from 'react'
import NavItems from './NavItems';
import '../Navbar/Navbar.css';
import ThemeContext from '../ThemeContext'

import {useContext} from 'react';


export default function Navbar() {

    const {theme, toggleTheme} = useContext(ThemeContext);
   
    return (
        <div className={ (theme) ? 'navbar light' : 'navbar dark' }>
        <h2>React-Betting</h2>
        <ul>
            <NavItems route="/" name="Home"></NavItems>
            <NavItems route="/match" name='Les matchs'></NavItems>
            <NavItems name='Les joueurs'></NavItems>
            <button onClick={toggleTheme}>Mode</button>
        </ul>
        </div>
    )
}
