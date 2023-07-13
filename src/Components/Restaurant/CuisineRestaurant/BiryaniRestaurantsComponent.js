import React from 'react'
import { Link } from 'react-router-dom';
import { HiCurrencyRupee } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";

const BiryaniRestaurantsComponent = ({restaurant}) => {
    const { imageURL , restaurantName , cuisine , rating , deliveryTime , priceForTwo } = restaurant;
    return (
        <div>
            <>
                {/* Main Component */}
                <Link className='td-n c-3d3d3d' to="/menu">
                    <div className='restaurant-card'>
                        <img src={imageURL} alt={restaurantName} />
                        <div className='restaurant-info'>
                            <div className='fs-r c-3d3d3d mb-5 ls-1 fs-m fw-500'>{restaurantName}</div>
                            <div className='fs-r c-525252 mb-5'>{cuisine}</div>
                            <div className='flex jc-sb ai-c'>
                                <span className='flex ai-c fs-r bc-277227 p-1-5 br-5 c-w fs-s'><AiFillStar className='h-15 w-a c-w fs-s'/>{rating}</span>
                                <span className='fs-r'>.</span>
                                <span className='fs-r c-3d3d3d fs-s'>{deliveryTime} MINS</span>
                                <span className='fs-r'>.</span>
                                <span className='flex ai-c fs-r fs-s'><HiCurrencyRupee className='h-15 w-a c-3d3d3d fs-s'/>{priceForTwo} FOR TWO</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </>
        </div>
    )
}

export default BiryaniRestaurantsComponent
