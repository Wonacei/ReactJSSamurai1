import React from 'react';
import sty from './Nav.module.css';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className={sty.nav}>
            <ul>
                <li> <NavLink className={sty.link} to="/profile">Profile</NavLink> </li>
                <li> <NavLink className={sty.link} to="/dialogues">Messege</NavLink></li>
                <li> <NavLink className={sty.link} to="/news">News</NavLink></li>
                <li> <NavLink className={sty.link} to="/music">Music</NavLink></li>
                <li> <NavLink className={sty.link} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;