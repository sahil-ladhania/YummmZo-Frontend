import React from 'react'
import '../../Styles/Main.css'
import { UilWallet } from '@iconscout/react-unicons'

const PaymentComponent = () => {
    return (
        <div className=''>
            <>
                {/* Main Component */}
                <div className='w-600 p-10-20 b-1-b-s'>
                    {/* Text Component */}
                    <div className='flex ai-c'>
                        <UilWallet className='h-20 w-a mr-10'/>
                        <span>Payment</span>
                    </div>
                </div>
            </>
        </div>
    )
}

export default PaymentComponent
