// Importing Components | Modules | Libraries
import React, { useContext, useEffect } from 'react';
import NavbarComponent from '../Common/NavbarComponent';
import DeliveryAddressComponent from '../Checkout/DeliveryAddressComponent';
import BillComponent from '../Checkout/BillComponent';
import PaymentComponent from '../Checkout/PaymentComponent';
import CancellationPolicyComponent from '../Checkout/CancellationPolicyComponent';

const CheckoutPage = () => {
    return (
        <div>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* Navbar Component */}
                    <NavbarComponent/>
                </div>
                <div className='max-w-4xl ml-auto mr-auto'>
                    <div className='flex jc-sb mb-20 h-350'>
                        {/* Delivery Option Component */}
                        <DeliveryAddressComponent/>
                        {/* Bill Component */}
                        {/* <BillComponent/> */}
                    </div>
                    <div className='flex jc-sb mb-20 h-350'>
                        {/* Payment Component */}
                        {/* <PaymentComponent/> */}
                        {/* Cancellation Policy Component */}
                        {/* <CancellationPolicyComponent/> */}
                    </div>
                </div>
            </>
        </div>
    )
}

export default CheckoutPage
