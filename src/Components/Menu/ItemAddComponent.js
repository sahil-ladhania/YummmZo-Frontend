import React, {useState} from 'react'
import '../../Styles/Main.css'
import '../../Styles/Buttons.css'

const ItemAddComponent = () => {
    const [quantity , setQuantity] = useState(1);
    const [isAddedToCart , setIsAddedToCart] = useState(false);

    const handleQuantity = () => {
        setIsAddedToCart(true);
    }
    const handleAdd = () => {
        setQuantity(quantity + 1);
    }
    const handleLess = () => {
        if (quantity > 1){
            setQuantity(quantity - 1);
        }
        else{
            setQuantity(1);
            setIsAddedToCart(false);
        }
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
                                <div className='h-40 w-100 flex ai-c jc-sb'>
                                    <button className='h-40 w-30 b-1-t-s br-5 fs-r pointer' onClick={handleLess}>-</button>
                                    <input className='h-40 w-30 b-1-t-s br-5 fs-r shadow' type="button" value={quantity} />
                                    <button className='h-40 w-30 b-1-t-s br-5 fs-r pointer' onClick={handleAdd}>+</button>
                                </div>
                                :
                                <button onClick={handleQuantity} className='h-40 w-100 b-1-t-s br-5 fs-r pointer'>Add to Cart</button>
                            }
                        </div>
                </div>
            </>
        </div>
    )
}

export default ItemAddComponent
