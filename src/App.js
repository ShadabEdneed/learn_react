import React from 'react';
import Home from './components/Home';
import TimeDate from './components/TimeDate';
import { Routes, Route } from "react-router-dom"
// import ProductComponents from "./components/ProductComponents";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";
import Corona from './components/Corona';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        {/* <Route path='/' exact element={<Header/>} /> */}
        <Route path='/' exact element={<Home/>} />
        {/* <Route path='/product' element={<ProductComponents/>} /> */}
        <Route path='/productdetails/:id' element={<ProductDetails/>} />
        <Route exact path='/productlisting'  element={<ProductListing/>} />
        <Route path='/timedate' element={<TimeDate/>} />
        <Route path='/corona' element={<Corona/>} />
    </Routes>
    </React.Fragment>
  );
}

export default App;
