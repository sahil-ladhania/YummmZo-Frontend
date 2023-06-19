import React from 'react'
import { UilStar } from '@iconscout/react-unicons'
import { UilRupeeSign } from '@iconscout/react-unicons'

const PaneerRestaurantsComponent = (props) => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-300 w-300 flex fd-c jc-sb b-1-b-s mb-20'>
                    <img className='h-200 w-300' src={props.imgSrc} alt={props.imgAlt} />
                    <h3 className='fs-r'>{props.restaurantName}</h3>
                    <p className='fs-r'>{props.cuisine}</p>
                    <div className='flex jc-sb'>
                        <span className='flex ai-c fs-r'><UilStar className='h-15 w-a'/>{props.rating}</span>
                        <span className='fs-r'>.</span>
                        <span className='fs-r'>{props.deliveryTime}</span>
                        <span className='fs-r'>.</span>
                        <span className='flex ai-c fs-r'><UilRupeeSign className='h-15 w-a'/>{props.priceForTwo} FOR TWO</span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default PaneerRestaurantsComponent
