import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import { ItemContext } from "../context/items";

const Home = () => {
    const { featured } = useContext(ItemContext);
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
                <div className="items featured-list">
                    {!featured.length ? 
                    <>
                        <div className="no-featured">
                            <p>Sorry, there are no featured items at the moment!</p>
                            <Link className="btn" to="/items">View All Items</Link>
                        </div>
                    </>
                    :
                    featured.map(({ id, image, title, price}) => (
                        <article key={id} className="item featured-item">
                            <div className="item-image">
                                <img src={image} alt={title} />
                            </div>
                            <Link to={`items/${id}`} className="btn item-link">
                                {title}<br/>
                                <p className='mt-2' style={{fontSize: "1.5rem"}}>${price}</p>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;