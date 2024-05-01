import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatter.js";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => { return totalPrice + item.quantity * item.price }, 0);

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }
    function handleCheckoutCart() {
        userProgressCtx.showCheckout();
    }

    return <Modal className="cart" open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
        <h2>Your Cart {(cartCtx.items.length < 1) && 'is Empty'}</h2>
        <ul>
            {cartCtx.items.map(
                item => <li className="cart-item" key={item.id}>
                    <p>{item.name} - {item.quantity} x {currencyFormatter.format(item.price)}</p>
                    <p className="cart-item-actions">
                        <button onClick={() => cartCtx.removeItem(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => cartCtx.addItem(item)}>+</button>
                    </p>
                </li>
            )}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            {(cartCtx.items.length > 0) && <Button onClick={handleCheckoutCart}>Checkout</Button>}
        </p>
    </Modal>
}