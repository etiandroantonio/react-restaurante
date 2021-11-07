import React, { useState } from 'react';
import './navbar.css'
// import {Link} from 'react-router-dom';

function Navbar() {
    const [click,setClick]=useState(false);
    
    function handleMenu(){
        setClick(!click)
    }
    function closeItem(){
        setClick(false)
    }
    return (
        <>
        <nav className="">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <a href="#">Pizza</a>
                </div>
            
                <div className="icon-menu" onClick={handleMenu}>
                    
                    
                    <span className={click ? 'icon-times' : 'icon-bars'}></span>
                    <span className={click ? 'icon-times' : 'icon-bars'}></span>
                    <span className={click ? 'icon-times' : 'icon-bars'}></span>
                </div>
                <ul  className={click ? 'navbar-menu active' : 'navbar-menu'}>
                    <li className="navbar__link">
                    <a href="/cards" onClick={closeItem}>Pizzas</a>
                    </li>
                    <li className="navbar__link">
                    <a href="#sobremesa" onClick={closeItem}>Sobremesa</a>
                 
                    </li>
                    <li className="navbar__link">
                    <a href="#menu" onClick={closeItem}>Menu Completo</a>
                    </li>

                </ul>
            </div>
        </nav>
            
        </>
    )
}

export default Navbar
