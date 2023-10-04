import React from 'react'
import { Link } from 'react-router-dom';

const CarouselsComponent = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div className='flex flex-col items-center h-screen'>
                    <img className='h-80 mb-10' src="https://cdni.iconscout.com/illustration/premium/thumb/food-delivery-5383871-4530005.png?f=webp" alt="" />
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-xl font-bold max-w-xs ml-auto mr-auto text-center mb-3'>Order from top & favourite restaurants</h1>
                        <span className='text-sm mb-5'>Ready to see top restaurants to order ?</span>
                        <button className='border-2 border-black p-2 mb-5'>Setup Your Location</button>
                        <span>Have an account ? <Link to="/login">Login</Link> </span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CarouselsComponent
