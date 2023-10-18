// Importing Components | Modules | Libraries
import React, { useContext, useEffect } from 'react';
import NavbarComponent from '../Common/NavbarComponent';
import DeliveryAddressComponent from '../Checkout/DeliveryAddressComponent';
import BillComponent from '../Checkout/BillComponent';
import PaymentComponent from '../Checkout/PaymentComponent';
import CancellationPolicyComponent from '../Checkout/CancellationPolicyComponent';
import { UserCurrentLocationContext } from '../../Contexts/UserCurrentLocationContext';

const CheckoutPage = () => {
    // Accessing Current Location From The Context.
    const {currentLocation , setCurrentLocation} = useContext(UserCurrentLocationContext);
    return (
        <div className='bg-slate-800'>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* Navbar Component */}
                    <NavbarComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation}/>
                    <div className='flex jc-sb'>
                        <div className='w-8/12 mr-10 mb-10'>
                            {/* Delivery Option Component */}
                            <DeliveryAddressComponent/>
                        </div>
                        <div className='w-4/12 ml-10 mb-10'>
                            {/* Bill Component */}
                            <BillComponent/>
                        </div>
                    </div>
                    <div className='flex jc-sb mb-20'>
                        <div className='w-8/12 mr-10 mb-10'>
                            {/* Payment Component */}
                            <PaymentComponent/>
                        </div>
                        <div className='w-4/12 ml-10 mb-10'>
                            {/* Cancellation Policy Component */}
                            <CancellationPolicyComponent/>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CheckoutPage
