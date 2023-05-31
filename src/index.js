//=========Import Globales==========
import React, { useState, useEffect } from 'react';

//=========Import Locales==========
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { ListCards } from './components/Cards.jsx';
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


  return (
    <div className="main">
      <div className="slide">
        ---Portada Full Width---
      </div>
      <div className="seccion-productos">
        <ListCards products={products} />
      </div>
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
