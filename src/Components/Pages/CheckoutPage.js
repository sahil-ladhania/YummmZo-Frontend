// Importing Components | Modules | Libraries
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';
import DeliveryAddressComponent from '../Checkout/DeliveryAddressComponent';
import BillComponent from '../Checkout/BillComponent';
import PaymentComponent from '../Checkout/PaymentComponent';
import CancellationPolicyComponent from '../Checkout/CancellationPolicyComponent';
import { CartContext } from '../../Contexts/CartContext';
import { getCartDetailsForUser } from '../../Services/CartService';
// Importing CSS Files
import '../../Styles/Links.css'
import '../../Styles/Buttons.css'
import '../../Styles/Card.css'
import '../../Styles/Colors.css'
import '../../Styles/Layout.css'
import '../../Styles/Spacing.css'
import '../../Styles/AnimationAndTransition.css'
import '../../Styles/Text.css'
import '../../Styles/Input.css'
import '../../Styles/Navbar.css'
import '../../Styles/Footer.css'
import '../../Styles/Main.css'

const CheckoutPage = () => {
    // Accessing Cart Details From The Context.
    const { state , dispatch } = useContext(CartContext);
    // Getting ID.
    const { userId } = useParams();
    // Fetching Cart Details From Database.
    useEffect(() => {
        if(userId){
            // Fetch Cart Details Only If userId Is Available.
            getCartDetailsForUser(userId)
                .then((cartDetails) => {
                    console.log(`Cart Details : ${cartDetails}`);
                })
                .catch((error) => {
                    console.log(`Error Fetching Cart Details : ${error}`);
                })
        }
    }, [userId]);
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
