import React from 'react';
import logo from './../../Images/logo.png'

const Header1 = () => {
    return (
        <header>
            <nav className='App-header1'>
                <ul className='main-header-navigators'>
                    <li><a href="/"><img src={logo} /></a></li>
                    <div className='header-grouper'>
                        <li className='nav-item'><a href="/posts">Posts</a></li>
                        <li className='nav-item'><a href="/prods">Products</a></li>
                    </div>
                    <div className='header-grouper'>
                        <li className='nav-item'><a href="/posts">Posts</a></li>
                        <li className='nav-item'><a href="/prods">Products</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Header1;
