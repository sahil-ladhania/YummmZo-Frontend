import React from 'react'

const ItemDescriptionComponent = ({ menuItem , cartState , cartDispatch }) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className=''>
                    {/* Item Name and Price Section */}
                    <div className='flex flex-col'>
                        <img className='h-4 w-4 mb-2' src="https://www.clipartmax.com/png/full/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png" alt="Veg-NonVeg-Icon" />
                        <h3 className='text-md font-medium font-roboto text-secondary'>{menuItem.itemName}</h3>
                        <p className='text-sm font-medium mb-2 font-roboto text-secondary'>Rs.{menuItem.itemPrice}</p>
                    </div>
                    {/* Item Description Section */}
                    <div>
                        <p className='text-sm font-light font-roboto text-secondary'>
                            {menuItem.itemDescription}
                        </p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default ItemDescriptionComponent
