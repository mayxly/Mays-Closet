import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo-with-name.png';

const Header = () => {
    return ( 
    <>
        <header className="mini-head">
            <p>SUMMER CLOTHING DROP NOW LIVE</p>
        </header>
        <header className="main-head">
            <nav>
                <img width="100px" style={{marginRight: "40%"}} src={require('../assets/logo-with-name.png')}></img>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/items">All Items</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Checkout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Header
