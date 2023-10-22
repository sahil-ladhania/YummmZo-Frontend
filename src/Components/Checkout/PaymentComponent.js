import React from 'react'
import { CiWallet } from "react-icons/ci";

const PaymentComponent = () => {
    return (
        <div className=''>
            <>
                {/* Main Component */}
                <div className='bg-secondary w-full p-5 border-2 border-yummmzo-color rounded-sm'>
                    {/* Text Component */}
                    <div className='flex items-center'>
                        <CiWallet className='text-xl mr-2 text-yummmzo-color'/>
                        <span className='text-lg font-medium font-roboto text-yummmzo-color'>Payment</span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default PaymentComponent
