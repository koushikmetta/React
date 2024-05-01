import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/formatter";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => { return totalPrice + item.quantity * item.price }, 0);

    function handleCloseCheckout() {
        userProgressCtx.hideCheckout();
    }
    function handleCheckout(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());

        fetch('http://locatlhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                order: {
                    items: cartCtx.items,
                    customer: data
                }
            }
        });

    }
    return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleCloseCheckout}>
        <form onSubmit={handleCheckout}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
            <Input label='Full Name' type="text" id="name" />
            <Input label='Email' type="email" id="email" />
            <Input label='Street' type="text" id="street" />
            <div className="control-row">
                <Input label='Postal Code' type="text" id="postal-code" />
                <Input label='City' type="text" id="city" />
            </div>
            <p className="modal-actions">
                <Button type="button" textOnly onClick={handleCloseCheckout}>Close</Button>
                <Button>Submit Order</Button>
            </p>
        </form>
    </Modal>
}