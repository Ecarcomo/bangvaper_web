//=========Import Globales==========
import React, { useState, useEffect } from 'react';



//=========Import Locales==========
import '../styles/home.css';
import { ListCards } from '../components/Cards.jsx';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { WidgetCart } from '../components/Cart.jsx';
import { CartProvider} from "react-use-cart";

// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";




//=============Clases de creacion de componentes==================
const Home = () => {

  const [products, setProducts] = useState([]);

        useEffect(() => {
          fetch('http://127.0.0.1:3000/getProducts')
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setProducts(data);
            })
            .catch((err) => {
              console.log(err.message);
            });
        }, []);

  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:3000/getImages')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    <CartProvider>
      <WidgetCart />
      <div className="main">
          <Header images={images}/>
          <ul><li><Link to="/panel">Panel</Link></li></ul>
        <div className="seccion-productos">
          <ListCards products={products} />
        </div>
          <Footer/>
      </div>
    </CartProvider>
  );
};

export default Home;



