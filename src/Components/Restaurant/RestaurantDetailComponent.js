import React from 'react'
import '../../Styles/Main.css'
import { UilStar } from '@iconscout/react-unicons'
import { UilRupeeSign } from '@iconscout/react-unicons'

const RestaurantDetailComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='h-300 w-300 flex fd-c jc-sb b-1-b-s mb-20'>
                    <img className='h-200 w-300' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lnw7syfhznp3wwkgybnf" alt="Bakingo-Image" />
                    <h3 className=''>Bakingo</h3>
                    <p className=''>Pastry</p>
                    <div className='flex jc-sb'>
                        <span className='flex ai-c'><UilStar className='h-15 w-a'/>4.2</span>
                        <span className=''>.</span>
                        <span className=''>19 MINS</span>
                        <span className=''>.</span>
                        <span className='flex ai-c'><UilRupeeSign className='h-15 w-a'/>300 FOR TWO</span>
                    </div>
                </div>
                {/* Main Component */}
            </>
        </div>
    )
}

export default RestaurantDetailComponent
