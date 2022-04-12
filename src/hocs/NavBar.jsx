import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="navbar">

            <div className="container-md">
                <h1><Link exact to="/" style={{ textDecoration: "none", color: "#fff" }}> WhoamiQuiz </Link></h1>
                <nav className="nav">
                    <ul className='nav_links'>
                        <li className='nav_links__item'><Link to="/">Home</Link></li>
                        <li className='nav_links__item'><Link to="/contact">Contact</Link></li>
                        <li className='nav_links__item'><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;