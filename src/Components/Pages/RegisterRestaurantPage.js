// Importing Components | Modules | Libraries
import React from 'react'
import { useParams } from 'react-router-dom';
import AddRestaurantFormComponent from '../Restaurant/AddRestaurantFormComponent';
import YummmZoBusinessNavbarComponent from '../Restaurant/YummmZoBusinessNavbarComponent';
import GoBackNextButtonsComponent from '../Restaurant/GoBackNextButtonsComponent';

const RegisterRestaurantPage = () => {
    // Getting ID.
    const { userId } = useParams();
    return (
        <div className=''>
            <>
                <div className='bg-navbar-gradient'>
                    {/* Navbar Component */}
                    <YummmZoBusinessNavbarComponent/>
                </div>
                <div className='max-w-4xl ml-auto mr-auto'>
                    {/* Go Back and Next Button Component */}
                    <GoBackNextButtonsComponent/>
                    {/* Restaurant Form Component */}
                    <AddRestaurantFormComponent/>
                </div>
            </>
        </div>
    )
}

export default RegisterRestaurantPage
