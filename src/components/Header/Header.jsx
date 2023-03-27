import React from 'react';
import './Header.css'
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
            <a href="shop">shopp</a>
            <a href="order">order</a><a href="inventory">inventory</a><a href="login">log in</a>
            </div>
        </nav>
    );
};

export default Header;