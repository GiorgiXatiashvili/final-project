import React from 'react';
import './App.css';
import Header from './components/Header';
import {
  Switch,
  Route,
} from "react-router-dom";
import Contact from './pages/Contact';
import Products from './pages/Products';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Products />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
        <Route  path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
