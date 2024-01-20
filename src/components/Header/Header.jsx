// import React from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

import user from '../../assets/user.png'

const Header = () => {
    return (
        <nav className='Nav'>
            <div className='Navbar'>
            <img className="logo" src={logo} alt="logo"/>
            <div className='NavItemsWimage'>
            <div className="NavItems">
                <a href="">Tophics</a>
                <a href="">Write</a>
                <a href="">Login</a>
                
            </div>
            <img className="user" src={user} alt="user"/>
            </div>
            </div>
            <hr></hr>
        </nav>
    );
};

export default Header;