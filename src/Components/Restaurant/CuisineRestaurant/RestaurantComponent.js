import React from 'react'
import { Link } from 'react-router-dom';
import { HiCurrencyRupee } from "react-icons/hi2";
import { CiStar } from "react-icons/ci";
import '../../../Styles/Card.css'

const RestaurantComponent = ({restaurant}) => {
    const { imageURL , restaurantName , cuisine , rating , deliveryTime , priceForTwo } = restaurant;
    return (
        <div>
            <>
                {/* Main Component */}
                <Link className='' to={`/menu/${restaurant._id}`}>
                    <div className='restaurant-card bg-secondary cursor-pointer'>
                        <img className='font-roboto text-yummmzo-color' src={imageURL} alt={restaurantName} />
                        <div className='restaurant-info'>
                            <div className='mb-5 pt-1 font-semibold font-roboto text-yummmzo-color'>{restaurantName}</div>
                            <div className='mb-5 text-sm font-roboto text-yummmzo-color'>{cuisine}</div>
                            <div className='flex justify-between items-center'>
                                <span className='flex items-center text-sm font-roboto text-yummmzo-color'><CiStar className='text-xl mr-1 text-green-700'/>{rating}</span>
                                <span className='font-roboto text-yummmzo-color'>.</span>
                                <span className='text-sm font-roboto text-yummmzo-color'>{deliveryTime} MINS</span>
                                <span className='font-roboto text-yummmzo-color'>.</span>
                                <span className='flex items-center text-sm font-roboto text-yummmzo-color'><HiCurrencyRupee className='text-xl mr-1 text-yummmzo-color'/>{priceForTwo} FOR TWO</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </>
        </div>
    )
}

export default RestaurantComponent
