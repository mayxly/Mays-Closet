import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const Cart = () => {
  const history = useHistory();
  const { cart, total, increaseAmount, decreaseAmount } = useContext(CartContext);

  if (!cart.length) {
    return (
    <div className="empty-cart-div">
      <h3>Your Cart is Currently Empty!</h3>
      <Link className="btn mt-5" to="/items">View All Items</Link>
    </div>
    )
  }
  return (
    <section className="cart">
      <header>
        <h2 className="mt-5">My Cart</h2>
      </header>
      <div className="cart-wrapper">
        {cart.map(({ id, title, price, image, amount }) => (
          <article key={id} className="cart-item">
            <div className="image">
              <img src={image} alt="cart item" />
            </div>
            <div className="details">
              <p>{title}</p>
              <p>$ {price}</p>
            </div>
            <div className="amount">
              <button onClick={() => increaseAmount(id)}><FiChevronUp /></button>
              <p>{amount}</p>
              <button onClick={() => decreaseAmount(id, amount)}><FiChevronDown /></button>
            </div>
          </article>
        ))}
      </div>
      <div>
        <h3>Total: $ {total}</h3>
      </div>
      <div>
        <button className="btn mt-5" onClick={() => history.push("/checkout")}>Checkout</button>
      </div>
    </section>
  );
};

export default Cart;
