import React, {createContext, useReducer} from "react";

// Creating Context.
const CartContext = createContext();

// Defining Context Provider Component.
const CartContextProvider = ({children}) => {
    // Defining Initial State.
    const initialCartState = {
        cartItems : []
    };
    // Defining Reducer Function.
    const cartReducer = (state , action) => {
        switch(action.type){
            case 'ADD_TO_CART':
                console.log("Added Item To Cart ...");
                return state;
            case 'INCREMENT_ITEM':
                console.log("Incremented Item To Cart ...");
                return state;
            case 'DECREMENT_ITEM':
                console.log("Decremented Item To Cart ...");
                return state;
            default :
                return state;
        };
    };
    // Implementing useReducer.
    const [state , dispatch] = useReducer(cartReducer , initialCartState);
    return(
        <CartContext.Provider value={{ cartState : state , cartDispatch : dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext , CartContextProvider};