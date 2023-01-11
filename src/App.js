import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';
import Cart from './components/Cart';
function App() {
  const [cartItems,cartItemsUpdate] = useState([]);
  function addCart(e) {
    const data = {
      name: e.currentTarget.getAttribute('productname'),
      price: e.currentTarget.getAttribute('price'),
      img: e.currentTarget.getAttribute('imgsrc')
    };
    console.log(cartItems);
    cartItemsUpdate([...cartItems,data]);
  }
  function removeCart(e) {
    const oldData = [...cartItems];
    oldData.splice(e.currentTarget.getAttribute('no'),1);
    cartItemsUpdate(oldData);
;  }
  return (
    <div className="App">
      <BrowserRouter basename="/shopping-cart">
        <Nav cartNum={cartItems.length}/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Products' element={<Products getItemFunction={addCart}/>}></Route>
          <Route path='/Cart' element={<Cart cartArray={cartItems} removeFunction={removeCart}/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
