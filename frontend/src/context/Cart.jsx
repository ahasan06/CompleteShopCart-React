import { createContext, useReducer } from "react";
import { cartReducer } from './../reducer/Cart';

export const CartContext = createContext();  // This creates the context

const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
