import React, {useState} from 'react'
import {addToCartAPI} from '../../Services/CartService'

const ItemAddComponent = ({ cartState , cartDispatch }) => {
    // Defining States.
    const [quantity , setQuantity] = useState(1);
    const [isAddedToCart , setIsAddedToCart] = useState(false);
    // Defining Handler Functions.
    const handleAddToCart = () => {
        setIsAddedToCart(true);
        cartDispatch({
            type : "ADD_TO_CART"
        });
    };
    const handleIncrement = () => {
        setQuantity(quantity + 1);
        cartDispatch({
            type : "INCREMENT_ITEM"
        });
    }
    const handleDecrement = () => {
        if (quantity > 1){
            setQuantity(quantity - 1);
        }
        else{
            setQuantity(1);
            setIsAddedToCart(false);
        }
        cartDispatch({
            type : "DECREMENT_ITEM"
        });
    }
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Add Button Section */}
                        <div>
                            {
                                isAddedToCart ? 
                                <div className='h-10 w-100 flex ai-c jc-sb'>
                                    <button className='h-10 pr-5 pl-5 bg-slate-200 rounded-sm hover:animate-glow-light' onClick={handleDecrement}>-</button>
                                    <input className='h-10 pr-5 pl-5 text-yummmzo-color' type="button" value={quantity} />
                                    <button className='h-10 pr-5 pl-5 bg-slate-200 rounded-sm hover:animate-glow-light' onClick={handleIncrement}>+</button>
                                </div>
                                :
                                <button onClick={handleAddToCart} className='h-10 pr-5 pl-5 bg-slate-200 rounded-sm hover:animate-glow-light'>Add To Cart</button>
                            }
                        </div>
                </div>
            </>
        </div>
    )
}

export default ItemAddComponent
