import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
// Amplify
import {Amplify, Auth} from "aws-amplify";
// import '@aws-amplify/ui-react/styles.css';

// Pages
import Home from "./pages/Home"
import Error from "./pages/Error";
import Items from "./pages/Items";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ItemDetails from "./pages/ItemDetails";
import Admin from './pages/Admin';

// Components
import Header from "./components/Header"

// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
Auth.configure(awsExports);


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/items">
          <Items />
        </Route>
        <Route
          path="/items/:id"
          children={<ItemDetails></ItemDetails>}>
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
