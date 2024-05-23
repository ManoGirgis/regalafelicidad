import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className='header-navigators'>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/posts">Posts</a></li>
                    <li><a href="/prods">Products</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
