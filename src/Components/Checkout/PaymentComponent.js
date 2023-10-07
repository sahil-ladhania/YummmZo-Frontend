import React from 'react'
import { CiWallet } from "react-icons/ci";

const PaymentComponent = () => {
    return (
        <div className=''>
            <>
                {/* Main Component */}
                <div className='w-full p-5 border-2 border-black rounded-sm'>
                    {/* Text Component */}
                    <div className='flex items-center'>
                        <CiWallet className='text-xl mr-2'/>
                        <span className='text-lg font-medium'>Payment</span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default PaymentComponent
