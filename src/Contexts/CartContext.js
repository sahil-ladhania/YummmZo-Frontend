import { createContext, useReducer } from 'react';
import { reducer } from '../Reducers/CartReducer';

// Defining Cart Context.
const CartContext = createContext();

// Defining Context Provider.
const CartContextProvider = ({children}) => {
    // Defining Initial State For Cart.
    const initialCartItems = [];
    // Initializing State Using useReducer.
    const [state , dispatch] = useReducer(reducer , initialCartItems);
    return(
        <CartContext.Provider value={{state , dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext , CartContextProvider};