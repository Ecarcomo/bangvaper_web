//=========Import Globales==========
import React, { useState, useEffect } from 'react';

import '../styles/panel.css';
import { ListCardsPanel } from '../components/Cards.jsx';
import { Link } from "react-router-dom";

const Panel = () => {
  const [products, setProducts] = useState([]);

  //const haySeleccionado = document.getElementById('id_panel').classList.contains('active');

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

  const handlerReset = () =>{
    document.getElementById('btn_nuevo').style.visibility ='hidden';
    document.getElementById('id_panel').innerHTML = "ID#"; 

    document.getElementById('img_panel').src = null;

    document.getElementById('title_panel').value = null;
    document.getElementById('desc_c_panel').value = null;
    document.getElementById('desc_l_panel').value = null;

    document.getElementById('precio_panel').value = null;

    document.getElementById('precio_off_panel').value = null;
    document.getElementById('radio_btn_panel').checked= false;

  }

  return (
    <div>
      <h1>Panel Page</h1>
      <ul><li><Link to="/">Home</Link></li></ul>
      <div id='dashboard'>
        <ListCardsPanel products={products}/>
        <div id='panel-edit'>
          <div><img  id='img_panel' alt=''></img></div>
          <div>
              <label style={{"textAlign":"right"}} id='id_panel'>ID#</label>
              <label>Imagen PNG</label><input id='image_panel' name='image_panel' type='file' ></input>
              <label>Titulo</label><input id='title_panel' name='title_panel' type='text'></input>
              <label>Descripcion Corta</label><input id='desc_c_panel' name='desc_c' type='text'></input>
              <label>Descripcion Larga</label><textarea id='desc_l_panel' name='desc_l' cols={70} rows={10}></textarea>

              <div className='line_layout'>
                <label>Precio</label><input id='precio_panel' name='precio' type='number'></input>&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;
                <input id='radio_btn_panel' name='radio_btn' type='checkbox'></input>
                <label>Precio OFF</label>&nbsp;&nbsp;<input id='precio_off_panel' name='precio_off' type='number'></input>
              </div>
              
              <div className='line_layout'>
                <button>Borrar</button><button>Publicar</button>
                <button id='btn_nuevo' style={{'visibility':'hidden'}} onClick={()=>handlerReset()}>Nuevo</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;