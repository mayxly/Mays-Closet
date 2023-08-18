import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import { BookContext } from "../context/books";

const Home = () => {
    const { featured } = useContext(BookContext);
    return (
        <>
            <Hero />
            <section className="home-about">
                <div>
                    <img width="80px" src={require("../assets/Hanger.png")} className="mb-3"></img>
                    <p>Ethically and<br/> sustainably sourced</p>
                </div>
                <div>
                    <img width="80px" src={require("../assets/Hanger.png")} className="mb-3"></img>
                    <p>Out of vintage <br/>and pre-loved</p>
                </div>
                <div>                    
                    <img width="80px" src={require("../assets/Hanger.png")} className="mb-5"></img>
                    <p>Based in Toronto</p>
                </div>
            </section>
            <section className="featured">
                <header className="featured-head">
                    <h3>Featured Collection</h3>
                </header>
                <div className="books featured-list">
                    {!featured.length ? 
                    <>
                        <div className="no-featured">
                            <p>Sorry, there are no featured items at the moment!</p>
                            <Link className="btn" to="/books">View All Items</Link>
                        </div>
                    </>
                    :
                    featured.map(({ id, image, title }) => (
                        <article key={id} className="book featured-book">
                            <div className="book-image">
                                <img src={image} alt={title} />
                            </div>
                            <Link to={`books/${id}`} className="btn book-link">details</Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;