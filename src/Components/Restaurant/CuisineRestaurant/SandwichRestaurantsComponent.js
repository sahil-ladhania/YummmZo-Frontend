import React from 'react'
import { UilStar } from '@iconscout/react-unicons'
import { UilRupeeSign } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';
import '../../../Styles/Card.css'

const SandwichRestaurantsComponent = (props) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <Link className='td-n c-3d3d3d' to="/menu">
                    <div className='restaurant-card'>
                        <img src={props.imgSrc} alt={props.imgAlt} />
                        <div className='restaurant-info'>
                            <div className='fs-r c-3d3d3d mb-5 ls-1 fs-m fw-500'>{props.restaurantName}</div>
                            <div className='fs-r c-525252 mb-5'>{props.cuisine}</div>
                            <div className='flex jc-sb ai-c'>
                                <span className='flex ai-c fs-r bc-277227 p-1-5 br-5 c-w fs-s'><UilStar className='h-15 w-a c-w fs-s'/>{props.rating}</span>
                                <span className='fs-r'>.</span>
                                <span className='fs-r c-3d3d3d fs-s'>{props.deliveryTime}</span>
                                <span className='fs-r'>.</span>
                                <span className='flex ai-c fs-r fs-s'><UilRupeeSign className='h-15 w-a c-3d3d3d fs-s'/>{props.priceForTwo} FOR TWO</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </>
        </div>
    )
}

export default SandwichRestaurantsComponent
