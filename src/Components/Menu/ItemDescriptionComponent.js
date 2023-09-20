import React from 'react'

const ItemDescriptionComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Item Name and Price Section */}
                    <div>
                        <img className='h-15 w-a mb-5' src="https://www.clipartmax.com/png/full/299-2998556_vegetarian-food-symbol-icon-non-veg-symbol-png.png" alt="Veg-NonVeg-Icon" />
                        <h3 className='mb-5 fs-r ls-1'>Paneer Butter Masala</h3>
                        <p className='mb-5 fs-s fs-r ls-1 fw-500'>Rs.230</p>
                    </div>
                    {/* Item Description Section */}
                    <div>
                        <p className='fs-s fs-r c-g'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, atque fugit. Voluptate commodi iure nam dolorem ad provident. Possimus sit dolor obcaecati.
                        </p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default ItemDescriptionComponent
