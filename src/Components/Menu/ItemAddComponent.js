import React, {useState} from 'react'

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
                                <div className='h-10 w-100 flex ai-c jc-sb'>
                                    <button className='h-10 pr-5 pl-5 bg-slate-200 rounded-sm' onClick={handleLess}>-</button>
                                    <input className='h-10 pr-5 pl-5 ' type="button" value={quantity} />
                                    <button className='h-10 pr-5 pl-5 bg-slate-200 rounded-sm' onClick={handleAdd}>+</button>
                                </div>
                                :
                                <button onClick={handleQuantity} className='h-10 pr-5 pl-5 bg-slate-200 rounded-sm'>Add to Cart</button>
                            }
                        </div>
                </div>
            </>
        </div>
    )
}

export default ItemAddComponent
