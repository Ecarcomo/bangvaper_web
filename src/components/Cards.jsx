//=========Import Globales==========
import React,{useState} from 'react';

//=========Import Locales==========
import '../styles/cards.css';
import { useCart } from "react-use-cart";
import { Modal ,ModalHeader,ModalBody,ModalFooter} from './Modal.jsx';




//let products = require('../data/productsData.json');/* obtengo JSON con datos de los productos en venta*/

//=============Clases de creacion de componentes==================
export const Card = props =>{

    var [showModal,setShowModal] = useState(false);



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
                    <p>{props.description.substring(0, 40)+"..."}</p>
                    <div className='da_btns_cards'>
                        <a className="btn btn-primary" href onClick={addCard}>Añadir al carrito</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="btn btn-secondary" href onClick={()=>setShowModal(true)}>Mas Info</a>
                    </div>
                </div>
            </div>
            <Modal show = {showModal}>
                <ModalHeader>
                    <h1><strong>{props.name}</strong></h1>
                </ModalHeader>
                <ModalBody>
                    <table>
                        <tr>
                            <td style={{"width":"60%"}}>
                                <p style={{textAlign:'justify'}}>
                                <ul>
                                {
                                    props.description.split('\n').map((linea,index)=>
                                        <li><h4 key={index}>{linea}</h4></li>
                                    )
                                }
                                </ul>
                                </p>
                            </td>
                            <td style={{"width":"40%","vertical-align":"top"}}>
                                <img src={props.imageUrl} alt={'Photo of ' + props.name} ></img>
                            </td>
                        </tr>
                    </table>
                </ModalBody>
                <ModalFooter>
                    <a  className="btn btn-secondary" href onClick={()=>setShowModal(false)}>Cerrar</a>
                </ModalFooter>
            </Modal>
        </div>
    );
    
}


export const ListCards = ({ products }) => {

    return (
        <div>
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