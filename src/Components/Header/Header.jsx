import React from 'react';
import './header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img className='imgg' src={logo} alt="" />
            {/* a*4[href=$]{$} */}
            <div>
                <a href="/order">Order</a>
                <a href="/order reveiw">Order Reveiw</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;