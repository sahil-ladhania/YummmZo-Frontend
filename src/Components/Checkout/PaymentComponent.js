import React from 'react'
import { CiWallet } from "react-icons/ci";

const PaymentComponent = () => {
    return (
        <div className=''>
            <>
                {/* Main Component */}
                <div className='bg-card-gradient w-full p-5 border-2 border-secondary rounded-sm'>
                    {/* Text Component */}
                    <div className='flex items-center'>
                        <CiWallet className='text-xl mr-2 text-secondary'/>
                        <span className='text-lg font-medium font-roboto text-secondary'>Payment</span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default PaymentComponent
