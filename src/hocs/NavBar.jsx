import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="navbar">
            <h1>WhoamiQuiz</h1>
            <nav className="nav">
                <ul className='nav_links'>
                    <li className='nav_links__item'><Link to="/">Home</Link></li>
                    <li className='nav_links__item'><Link to="/contact">Contact</Link></li>
                    <li className='nav_links__item'><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;