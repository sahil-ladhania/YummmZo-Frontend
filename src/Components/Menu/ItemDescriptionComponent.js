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
                        <h3 className='mb-5'>Paneer Achari</h3>
                        <p className='mb-5 fs-s'>Rs.269</p>
                    </div>
                    {/* Item Description Section */}
                    <div>
                        <p className='fs-s'>
                            Multigrain toasted Sub with chunks of paneer, achari mayo, pickled onion, capsicum, tomato and chilli mayo. <br />  Serving size - 240 g/ 589 kcal. Allergens - Contains wheat, rye, barley, oats, milk & soy.
                        </p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default ItemDescriptionComponent
