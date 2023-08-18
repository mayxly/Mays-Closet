import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ItemContext } from '../context/items';


const Items = () => {
    const { items } = useContext(ItemContext);

    if (!items.length) {
        return <h3>No Items Available</h3>
    }

    return (
        <section className="items">
            {items.map(({ image: image, id, title }) => (
                <article key={id} className="item">
                    <div className="item-image">
                        <img src={image} alt={title} />
                    </div>
                    <Link to={`items/${id}`} className="btn item-link">details</Link>
                </article>
            ))}
        </section>
    )
}

export default Items
