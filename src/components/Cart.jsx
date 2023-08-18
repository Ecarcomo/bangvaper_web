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

        const inputRef_PROV = useRef(null);
        const inputRef_LOC = useRef(null);
        const inputRef_COD = useRef(null);
        const inputRef_NAME = useRef(null);
        const inputRef_r1 = useRef(null);
        const inputRef_r2 = useRef(null);
        const lblRef_PROV= useRef(null);
        const lblRef_LOC = useRef(null);
        const lblRef_COD = useRef(null);
        
        

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
                                        inputRef_PROV.current.disabled = true;
                                        inputRef_LOC.current.disabled = true;
                                        inputRef_COD.current.disabled = true;
                                        lblRef_PROV.current.innerHTML="<del>Provincia</del>";
                                        lblRef_LOC.current.innerHTML="<del>Localidad</del>";
                                        lblRef_COD.current.innerHTML="<del>Codigo Postal</del>";
                                        break;
                        case 'no_envio':
                                        inputRef_PROV.current.disabled = false;
                                        inputRef_LOC.current.disabled = false;
                                        inputRef_COD.current.disabled = false;
                                        lblRef_PROV.current.innerHTML="Provincia*";
                                        lblRef_LOC.current.innerHTML="Localidad*";
                                        lblRef_COD.current.innerHTML="Codigo Postal*";
                                        break;
                        default:break;
                }
        };

        const handleClick = () => {
                // Acciones adicionales que puedes realizar antes de abrir el enlace

                if(inputRef_NAME.current.value === ''){
                        inputRef_NAME.current.placeholder = "Falta Nombre"
                        inputRef_NAME.current.style="background-color:#ffcccc";
                }
                else{
                        inputRef_NAME.current.style="background-color:#ffffff";
                        let salto = "%0A";

                        let textMSG = "Buenas , mi nombre es "+ String(inputRef_NAME.current.value) ;
                        textMSG += ", te consulto desde la web de BangVaper por ";
                        textMSG += (totalItems === 1 ? "el siguente producto:" : "los siguentes productos:")+ salto;
                        textMSG += "------------------------"+salto;
        
                        let textMSG_items = items.map((item) => 
                        (   
                                item.quantity+"x "+(item.offer===0?'':'OFF')+" / "+item.name
                        ));  
        
                        textMSG +=  textMSG_items.map((str) => str).join(salto) +salto;
                        textMSG += "------------------------"+salto;

                        

                       
                        if(envioOption === "si_envio"){
                                textMSG += "Con envío a :"      +       salto;
                                textMSG += "--Provincia:"       +       String(inputRef_PROV.current.value)+salto;
                                textMSG += "--Localidad:"       +       String(inputRef_LOC.current.value)+salto;
                                textMSG += "--Codigo postal: "  +       String(inputRef_COD.current.value);

                                if(inputRef_PROV.current.value === ''){
                                        inputRef_PROV.current.placeholder="Falta Provincia";
                                        inputRef_PROV.current.style="background-color:#ffcccc";
                                }
                                else{
                                        inputRef_PROV.current.style="background-color:#ffffff";
                                }
                                if(inputRef_LOC.current.value === ''){
                                        inputRef_LOC.current.placeholder="Falta Localidad";
                                        inputRef_LOC.current.style="background-color:#ffcccc";
                                }
                                else{
                                        inputRef_LOC.current.style="background-color:#ffffff";
                                }
                                if(inputRef_COD.current.value === ''){
                                        inputRef_COD.current.placeholder="Falta Codigo Postal";
                                        inputRef_COD.current.style="background-color:#ffcccc";
                                }
                                else{
                                        inputRef_COD.current.style="background-color:#ffffff";
                                }

                                if (inputRef_PROV.current.value !=='' & inputRef_LOC.current.value !=='' & inputRef_COD.current.value !=='' ){
                                        let URL = "https://api.whatsapp.com/send?phone="+1137658523+"&text="+textMSG;
                                        window.open(URL, "_blank");      
                                }

                        }
                        else{
                                textMSG += "Para retirar en domicilio por el barrio de Villa Crespo, CABA.";
                                // Abrir el enlace en una nueva pestaña del navegador
                                let URL = "https://api.whatsapp.com/send?phone="+1137658523+"&text="+textMSG;
                                window.open(URL, "_blank");
                        }
                      
                                
                        
                       
                }

             
                
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
                                                                Nombre*:&nbsp;&nbsp;
                                                                <input
                                                                ref={inputRef_NAME}
                                                                name='I_NAME'
                                                                type="text"
                                                                placeholder="Nombre / Apellido"
                                                                />
                                                        </label>
                                                </td>
                                                <td colSpan='1'>
                                                        <label>
                                                                <input
                                                                ref={inputRef_r1}
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
                                                                ref={inputRef_r2}
                                                                type="radio"
                                                                value="no_envio"
                                                                checked={envioOption === 'no_envio'}
                                                                onChange={handleOptionChange}
                                                                />
                                                                &nbsp;&nbsp;Retiro por Villa Crespo , CABA
                                                        </label>
                                                </td>
                                        </tr>
                                        <tr>
                                                <td ref={lblRef_PROV} colSpan='3'>Provincia</td>
                                                <td ref={lblRef_LOC} colSpan='3'>Localidad</td>
                                                <td ref={lblRef_COD} colSpan='1'>Codigo Postal</td>
                                                <td colSpan='3'></td>
                                        </tr>
                                        <tr>
                                                <td colSpan='3'>
                                                        <label>
                                                                <input
                                                                ref={inputRef_PROV}
                                                                name='I_PROV'
                                                                type="text"
                                                                placeholder="Buenos Aires"
                                                                />
                                                        </label>
                                                </td>
                                                <td colSpan='3'>
                                                        <label>
                                                                <input
                                                                ref={inputRef_LOC}
                                                                name='I_LOC'
                                                                type="text"
                                                                placeholder="Cuidad Autónoma De Buenos Aires"
                                                                />
                                                        </label>
                                                </td>
                                                <td colSpan='1'>
                                                        <label>
                                                                <input
                                                                ref={inputRef_COD}
                                                                name='I_COD'
                                                                type="number"
                                                                placeholder="0000"
                                                                />
                                                        </label>        
                                                </td>
                                                <td colSpan='3'>
                                                         <button onClick={handleClick}>Enviar Pedido </button>     
                                                </td>
                                        </tr>
                                        <tr>
                                                <td colSpan='10'>
                                                        Cierre del pedido y datos se finalizan via Whatsapp
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

      