//=========Import Globales==========
import React, { useState, useEffect } from 'react';

//=========Import Locales==========
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { ListCards } from './components/Cards.jsx';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { WidgetCart } from './components/Cart.jsx';
import { CartProvider} from "react-use-cart";




//=============Clases de creacion de componentes==================
const Content = () => {

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
    <div className="main">
        <Header images={images}/>
      <div className="seccion-productos">
        <ListCards products={products} />
      </div>
        <Footer/>
    </div>
  );
};
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
  <WidgetCart />
  <Content />
  </CartProvider>
);
