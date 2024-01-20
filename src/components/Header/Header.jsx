// import React from 'react';
import logo from '../../assets/logo.png';
import './Header.css';
const Header = () => {
    return (
        <nav className='Navbar'>
            <img src={logo} alt="logo"/>
            <div className="NavItems">
                <a href="">Tophics</a>
                <a href="">Write</a>
                <a href="">Login</a>
            </div>
        </nav>
    );
};

export default Header;