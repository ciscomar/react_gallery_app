import React from 'react';
import { NavLink } from 'react-router-dom';

//Header that displays the buttons and react image 
const Header = props => (
    
    <nav className="main-nav">

        <img src={require('./react.png')} alt="react"/>

        <ul>
            <li><NavLink exact to='/'>Search</NavLink></li>
            <li><NavLink to='/city'>City</NavLink></li>
            <li><NavLink to='/nature'>Nature</NavLink></li>
            <li><NavLink to='/animals'>Animals</NavLink></li>
        </ul>
    </nav>
);

export default Header;