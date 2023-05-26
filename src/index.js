//=========Import Globales==========
import React from 'react';

//=========Import Locales==========
import ReactDOM from 'react-dom/client';
import './index.css';
import {ListCards} from './components/Cards.jsx';



//=============Clases de creacion de componentes==================
class Content extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="slide">
          ---Portada Full Width---
        </div>
        <div className="seccion-productos">
        <ListCards />
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Content />);
