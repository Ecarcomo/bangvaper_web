//=========Import Globales==========
import React from 'react';



let products = require('../data/productsData.json');/* obtengo JSON con datos de los productos en venta*/ 

//=============Clases de creacion de componentes==================
class Card extends React.Component {

        PriceTag(){
                if(this.props.offer == 0){
                       return <div className='price_tag'><h3>$ {this.props.price}</h3></div>;
                }
                else{
                        return <div className='price_tag offer'><h3>$ {this.props.price}</h3><h5>&nbsp;${this.props.offer}</h5></div>;
                }
        }
        

        render() {
                return (
                <div key= {this.props.id} className=" da_card col-sm-3">
                <img  src={this.props.imageUrl} alt={'Photo of ' + this.props.name} ></img>
                <div className="da_infoCard" >
                        <h5>{this.props.name}</h5>
                        {this.PriceTag()}
                        <p >{this.props.description}</p>
                        <a href={this.props.imageUrl} className="btn btn-primary">Añadir al carrito</a>
                </div>
                </div>
                );
        }
}

export class ListCards extends React.Component {
renderCard(a,b,c,d,e,f) {
        return <Card id={a} imageUrl={b} name={c} price={d} offer={e} description={f}/>;
}

render() {
        const texttest = 'Lista de cards productos:';

        return (
        <div>
        <div className="text">{texttest}</div>
        <div className="card-deck da_card-deck">
        {products.map(product => this.renderCard(  product.id,
                                                product.imageUrl,
                                                product.name,
                                                product.price,
                                                product.offer_price,
                                                product.description
                                                )
        )}
        </div>
        </div>
        );
}
}