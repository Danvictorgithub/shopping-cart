import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';
function App() {
  const [cartCounter,cartCounterUpdate] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <Nav cartNum={cartCounter}/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Products' element={<Products/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
