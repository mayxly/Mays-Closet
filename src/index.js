import React from 'react';
import ReactDOM from 'react-dom';
import { ItemProvider } from "./context/items";
import App from './App';
import './index.css';
import { CartProvider } from './context/cart';

ReactDOM.render(
  <ItemProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </ItemProvider>,
  document.getElementById('root')
);
