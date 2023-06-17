import React from 'react'
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';
import DeliveryAddressComponent from '../Checkout/DeliveryAddressComponent';
import BillComponent from '../Checkout/BillComponent';
import PaymentComponent from '../Checkout/PaymentComponent';
import CancellationPolicyComponent from '../Checkout/CancellationPolicyComponent';
// CSS Files
import '../../Styles/Fonts.css'
import '../../Styles/Links.css'

const CheckoutPage = () => {
    return (
        <div>
            <>
                <div className='maxw-1000 minw-1000 ml-a mr-a'>
                    {/* Navbar Component */}
                    <NavbarComponent/>
                    <div className='flex jc-sb mb-20 h-350'>
                        {/* Delivery Option Component */}
                        <DeliveryAddressComponent/>
                        {/* Bill Component */}
                        <BillComponent/>
                    </div>
                    <div className='flex jc-sb mb-20 h-350'>
                        {/* Payment Component */}
                        <PaymentComponent/>
                        {/* Cancellation Policy Component */}
                        <CancellationPolicyComponent/>
                    </div>
                    {/* Footer Component */}
                    <FooterComponent/>
                </div>
            </>
        </div>
    )
}

export default CheckoutPage
