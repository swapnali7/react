import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import Products from './Products/Products.js';
import Footer from './Footer/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Slider/>
        <Products/>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
