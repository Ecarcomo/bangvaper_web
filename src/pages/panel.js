//=========Import Globales==========
import React, { useState, useEffect } from 'react';

import '../styles/panel.css';
import { ListCardsPanel } from '../components/Cards.jsx';
import { Link } from "react-router-dom";

const Panel = () => {
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
    <div>
      <h1>Panel Page</h1>
      <ul><li><Link to="/">Home</Link></li></ul>
      <div id='dashboard'>
        <ListCardsPanel products={products} />
        <div id='panel-edit'>
          <div><img></img></div>
          <div>
              <label>Imagen PNG</label><input name='image' type='file'></input>
              <label>Titulo</label><input name='title' type='text'></input>
              <label>Descripcion Corta</label><input name='desc_c' type='text'></input>
              <label>Descripcion Larga</label><textarea name='desc_l' cols={70} rows={10}></textarea>

              <div className='line_layout'>
                <label>Precio</label><input name='precio' type='number'></input>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input name='radio_btn' type='checkbox'></input>
                <label>Precio OFF</label>&nbsp;&nbsp;<input name='precio_off' type='number'></input>
              </div>
              
              <div className='line_layout'>
                <button>Borrar</button><button>Publicar</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;