import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




//=============Variables de datos Ulitilizables==================
const products = [
  {
    id:1,
    name:"NikBar 1500 PUFF Banana Ice",
    imageUrl:"https://nikbarofficial.com/images/BananaIce7.png",
    description:"Vaper electronico nikbar 10ml E-liquid",
    price: 3500
  },
  {
      id:2,
      name:"NikBar 1500 PUFF Cool Mint",
      imageUrl:"https://nikbarofficial.com/images/CoolMint3.png",
      description:"Vaper electronico nikbar 10ml E-liquid",
      price: 3500
  },
  {
    id:1,
    name:"NikBar 1500 PUFF Banana Ice",
    imageUrl:"https://nikbarofficial.com/images/BananaIce7.png",
    description:"Vaper electronico nikbar 10ml E-liquid",
    price: 3500
  },
  {
    id:2,
    name:"NikBar 1500 PUFF Cool Mint",
    imageUrl:"https://nikbarofficial.com/images/CoolMint3.png",
    description:"Vaper electronico nikbar 10ml E-liquid",
    price: 3500
  },
  {
    id:1,
    name:"NikBar 1500 PUFF Banana Ice",
    imageUrl:"https://nikbarofficial.com/images/BananaIce7.png",
    description:"Vaper electronico nikbar 10ml E-liquid",
    price: 3500
  },
  {
    id:2,
    name:"NikBar 1500 PUFF Cool Mint",
    imageUrl:"https://nikbarofficial.com/images/CoolMint3.png",
    description:"Vaper electronico nikbar 10ml E-liquid",
    price: 3500
  }
];


//=============Clases de creacion de componentes==================
class Card extends React.Component {
  render() {
    return (
      <div key= {this.props.id} className=" da_card col-sm-4">
        <img  src={this.props.imageUrl} alt={'Photo of ' + this.props.name} ></img>
        <div >
          <h5>{this.props.name}</h5>
          <h3>$ {this.props.price}</h3>
          <p >{this.props.description}</p>
          <a href={this.props.imageUrl} className="btn btn-primary">Añadir al carrito</a>
        </div>
      </div>
    );
  }
}

class ListCards extends React.Component {
  renderCard(a,b,c,d,e) {
    return <Card id={a} imageUrl={b} name={c} price={d} description= {e}/>;
  }

  render() {
    const texttest = 'Lista de cards productos:';

    return (
      <div>
        <div className="text">{texttest}</div>
        <div className="card-deck">
          {products.map(product => this.renderCard(  product.id,
                                                product.imageUrl,
                                                product.name,
                                                product.price,
                                                product.description
                                              )
          )}
        </div>
      </div>
    );
  }
}

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
