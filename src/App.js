import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
function App() {
  const [cartCounter,cartCounterUpdate] = useState(0);
  return (
    <div className="App">
      <Nav cartNum={cartCounter}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
