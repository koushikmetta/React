import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (item) => { },
    clearCart: () => { }
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {

        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const updatedItems = [...state.items];

        if (existingItemIndex > -1) {
            const existingItem = state.items[existingItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };

            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems };
    }
    if (action.type === 'DELETE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];

        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return { ...state, items: updatedItems };
    }

    if (action.type === 'CLEAR_ITEM') {
        return { ...state, items: [] }
    }
    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchcartAction] = useReducer(cartReducer, { items: [] });



    function addItem(item) {
        dispatchcartAction({ type: 'ADD_ITEM', item })
    }
    function removeItem(item) {
        dispatchcartAction({ type: 'DELETE_ITEM', item })
    }
    function clearCart() {
        dispatchcartAction({ type: 'CLEAR_ITEM' })
    }
    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
        clearCart
    };
    return (
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    )
}
export default CartContext;