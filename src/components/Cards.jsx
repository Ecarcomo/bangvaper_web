//=========Import Globales==========
import React from 'react';

//=========Import Locales==========
import '../styles/cards.css';
import { useCart } from "react-use-cart";





//let products = require('../data/productsData.json');/* obtengo JSON con datos de los productos en venta*/

//=============Clases de creacion de componentes==================
function Card(props){

    const {addItem} = useCart();

    function PriceTag() {
        console.log(props);
        if (props.offer === 0) {
            return <div className='da_price-tag'><h3>$ {props.price}</h3></div>;
        }
        else {
            return <div className='da_price-tag da_offer'><h3>$ {props.price}</h3><h5>&nbsp;${props.offer}</h5></div>;
        }
    }

    function addCard() {
        addItem(props);
        document.getElementById('widget_cart').classList.remove("closeCartAction");
    }
   

    return (
        <div key={props.id} className=" da_card col-lg-3">
            <div className="da_card_container" >
                <img src={props.imageUrl} alt={'Photo of ' + props.name} ></img>
                <div className='da_card_info'>
                    <h5>{props.name}</h5>
                    {PriceTag()}
                    <p>{props.description}</p>
                    <div className='da_btns_cards'>
                        <a className="btn btn-primary" onClick={addCard}>Añadir al carrito</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="btn btn-secondary">Mas Info</a>
                    </div>
                </div>
            </div>
        </div>
    );
    
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