import { useState , useRef} from 'react';
//=========Import Locales==========
import '../styles/cart.css';
import {useCart} from "react-use-cart";

export const WidgetCart = () => {
        const {
                isEmpty,
                totalItems,
                items,
                getItem,
                updateItemQuantity,
                removeItem,
        } = useCart();

        const [envioOption, setEnvioOption] = useState('si_envio');

        const inputRef1 = useRef(null);
        const inputRef2 = useRef(null);
        const inputRef3 = useRef(null);

        let cartResult = <></>;

        if (isEmpty) {
                cartResult = <p>Your cart is empty</p>;
        }
        else{
                cartResult = items.map((item) => 
                        (
                        <article key={item.id}>
                                <span>{item.quantity}x (${item.offer===0?item.price:item.offer} c/u) {item.offer===0?'':'OFF'} / {item.name}</span>
                                <button
                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                >
                                -
                                </button>
                                <button
                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                >
                                +
                                </button>
                                <button onClick={() => removeItem(item.id)}>&times;</button>
                        </article>
                        ));  
        }


        

        let totalMount = 0;
        
        items.map((item) => {
                totalMount+=((getItem(item.id).offer===0 ? getItem(item.id).price : getItem(item.id).offer)  * item.quantity)
        } ); 
                
  
        

        const handleOptionChange = (event) => {
                setEnvioOption(event.target.value);

                switch(envioOption){
                        case 'si_envio':
                                        inputRef1.current.disabled = true;
                                        inputRef2.current.disabled = true;
                                        inputRef3.current.disabled = true;
                                        break;
                        case 'no_envio':
                                        inputRef1.current.disabled = false;
                                        inputRef2.current.disabled = false;
                                        inputRef3.current.disabled = false;
                                        break;
                }
        };

        const handleClick = () => {
                // Acciones adicionales que puedes realizar antes de abrir el enlace
                // ...
                
                // Abrir el enlace en una nueva pestaña del navegador
                window.open('https://api.whatsapp.com/send?phone=1137658523', '_blank');
        };

        return (
                <div className="widget_cart" id="widget_cart">
                        <div className="p_cart">
                                <span>Carrito ({totalItems} items) </span>
                                <button  id="btnClose" onClick={toggleCartWg}>↓</button>
                        </div>
                        <div className="w_cart">
                                {cartResult}
                        </div>
                        <div className="f_cart">
                                <h5>Total: $ {totalMount}</h5>
                                <table className='cart_form'>
                                        <tr>    
                                                <td colSpan='4'>
                                                        <label>
                                                                Nombre:&nbsp;&nbsp;
                                                                <input
                                                                name='I_NAME'
                                                                type="text"
                                                                placeholder="Nombre / Apellido"
                                                                />
                                                        </label>
                                                </td>
                                                <td colSpan='3'>
                                                        <label>
                                                                <input
                                                                type="radio"
                                                                value="si_envio"
                                                                checked={envioOption === 'si_envio'}
                                                                onChange={handleOptionChange}
                                                                />
                                                                &nbsp;&nbsp;Con Envío
                                                        </label>
                                                </td>
                                                <td colSpan='3'>
                                                        <label>
                                                                <input
                                                                type="radio"
                                                                value="no_envio"
                                                                checked={envioOption === 'no_envio'}
                                                                onChange={handleOptionChange}
                                                                />
                                                                &nbsp;&nbsp;Sin Envío
                                                        </label>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td colSpan='3'>Provincia</td>
                                                <td colSpan='3'>Localidad</td>
                                                <td colSpan='1'>Codigo Postal</td>
                                                <td colSpan='3'></td>
                                        </tr>
                                        <tr>
                                                <td colSpan='3'>
                                                        <label>
                                                                <input
                                                                ref={inputRef1}
                                                                name='I_PROV'
                                                                type="text"
                                                                placeholder="Buenos Aires"
                                                                />
                                                        </label>
                                                </td>
                                                <td colSpan='3'>
                                                        <label>
                                                                <input
                                                                ref={inputRef2}
                                                                name='I_LOC'
                                                                type="text"
                                                                placeholder="Cuidad Autónoma De Buenos Aires"
                                                                />
                                                        </label>
                                                </td>
                                                <td colSpan='1'>
                                                        <label>
                                                                <input
                                                                ref={inputRef3}
                                                                name='I_COD'
                                                                type="number"
                                                                placeholder="0000"
                                                                />
                                                        </label>        
                                                </td>
                                                <td colSpan='3'>
                                                         <button onClick={handleClick}>Enviar Cotizacion</button>     
                                                </td>
                                        </tr>
                                </table>
                        </div>
                        
                        
                </div>
        );
}


function  toggleCartWg(){
        document.getElementById('widget_cart').classList.toggle("closeCartAction");
        if(document.getElementById('btnClose').innerHTML==="↑"){
                document.getElementById('btnClose').innerHTML="↓"
        }
        else{
                document.getElementById('btnClose').innerHTML="↑"
        }
        

}

      