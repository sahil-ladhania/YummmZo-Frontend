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
                    <div className='restaurant-card'>
                        <img src={imageURL} alt={restaurantName} />
                        <div className='restaurant-info'>
                            <div className='mb-5 pt-1 font-semibold'>{restaurantName}</div>
                            <div className='mb-5 text-sm'>{cuisine}</div>
                            <div className='flex justify-between items-center'>
                                <span className='flex items-center text-sm'><CiStar className='text-xl mr-1 text-green-700'/>{rating}</span>
                                <span className=''>.</span>
                                <span className='text-sm'>{deliveryTime} MINS</span>
                                <span className=''>.</span>
                                <span className='flex items-center text-sm'><HiCurrencyRupee className='text-xl mr-1'/>{priceForTwo} FOR TWO</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </>
        </div>
    )
}

export default RestaurantComponent
