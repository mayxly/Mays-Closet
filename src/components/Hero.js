import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2 className="hero-name">May's Closet</h2>
            <h3>Breathing New Life into <br/>Preloved Fashion Favorites.</h3>
            <Link className="btn" to="/items">View All Items</Link>
        </section>
    )
}

export default Hero
