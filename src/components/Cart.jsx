
//=========Import Locales==========
import '../styles/cart.css';
import {useCart} from "react-use-cart";

export function WidgetCart() {
const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
} = useCart();

let cartResult = <></>;
if (isEmpty) {
        cartResult = <p>Your cart is empty</p>;
}
else{
        cartResult = items.map((item) => (
                <article key={item.id}>
                        <span>{item.quantity} x {item.name}</span>
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

return (
        <div className="widget_cart">
                <div className="p_cart">
                        <span>Cart ({totalUniqueItems})</span>
                        <button>&times;</button>
                </div>

                <div className="w_cart">
                        {cartResult}
                </div>
        </div>
);
}
      