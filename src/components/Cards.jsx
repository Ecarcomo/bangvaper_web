//=========Import Globales==========
import React from 'react';

//=========Import Locales==========
import '../styles/cards.css';



//let products = require('../data/productsData.json');/* obtengo JSON con datos de los productos en venta*/

//=============Clases de creacion de componentes==================
class Card extends React.Component {

    PriceTag() {
        console.log(this.props);
        if (this.props.offer === 0) {
            return <div className='da_price-tag'><h3>$ {this.props.price}</h3></div>;
        }
        else {
            return <div className='da_price-tag da_offer'><h3>$ {this.props.price}</h3><h5>&nbsp;${this.props.offer}</h5></div>;
        }
    }


    render() {
        return (
            <div key={this.props.id} className=" da_card col-lg-3">
                <div className="da_card_container" >
                    <img src={this.props.imageUrl} alt={'Photo of ' + this.props.name} ></img>
                    <div className='da_card_info'>
                        <h5>{this.props.name}</h5>
                        {this.PriceTag()}
                        <p>{this.props.description}</p>
                        <div className='da_btns_cards'>
                            <a href={this.props.imageUrl} className="btn btn-primary">Añadir al carrito</a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href={this.props.imageUrl} className="btn btn-secondary">Mas Info</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const ListCards = ({ products }) => {
    const texttest = 'Lista de cards productos:';

    return (
        <div>
            <div className="text">{texttest}</div>
            <div className="card-deck da_card-deck">
                {products.map(product =>
                    <Card
                        id={product.id}
                        imageUrl={product.imageUrl}
                        name={product.name}
                        price={product.price}
                        offer={product.offer_price}
                        description={product.description} />
                )}
            </div>
        </div>
    );
}