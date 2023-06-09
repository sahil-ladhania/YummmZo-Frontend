import React from 'react'
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';
import DeliveryAddressComponent from '../Checkout/DeliveryAddressComponent';
import BillComponent from '../Checkout/BillComponent';
import PaymentComponent from '../Checkout/PaymentComponent';
import CancellationPolicyComponent from '../Checkout/CancellationPolicyComponent';

const CheckoutPage = () => {
    return (
        <div>
            <>
                {/* Navbar Component */}
                <NavbarComponent/>
                {/* Delivery Option Component */}
                <DeliveryAddressComponent/>
                {/* Bill Component */}
                <BillComponent/>
                {/* Payment Component */}
                <PaymentComponent/>
                {/* Cancellation Policy Component */}
                <CancellationPolicyComponent/>
                {/* Footer Component */}
                <FooterComponent/>
            </>
        </div>
    )
}

export default CheckoutPage
