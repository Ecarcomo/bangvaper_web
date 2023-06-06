
//=========Import Locales==========
import '../styles/cart.css';
import {useCart} from "react-use-cart";

export const WidgetCart = () => {
        const {
                isEmpty,
                totalUniqueItems,
                items,
                getItem,
                updateItemQuantity,
                removeItem,
        } = useCart();

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


        return (
                <div className="widget_cart" id="widget_cart">
                        <div className="p_cart">
                                <span>Carrito ({totalUniqueItems} items) </span>
                                <button  id="btnClose" onClick={toggleCartWg}>↓</button>
                        </div>
                        <div className="w_cart">
                                {cartResult}
                        </div>
                        <div className="f_cart">
                                <h5>Total: $ {totalMount}</h5>
                        </div>
                        
                        
                </div>
        );
}


function  toggleCartWg(){
        document.getElementById('widget_cart').classList.toggle("closeCartAction");
        if(document.getElementById('btnClose').innerHTML=="↑"){
                document.getElementById('btnClose').innerHTML="↓"
        }
        else{
                document.getElementById('btnClose').innerHTML="↑"
        }
        

}

      