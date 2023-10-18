// Importing Components | Modules | Libraries
import React, {useContext} from 'react'
import FooterComponent from '../Common/FooterComponent';
import LocateMeComponent from '../Layout/LocateMeComponent';
import BannerComponent from '../Layout/BannerComponent';
import { UserCurrentLocationContext } from '../../Contexts/UserCurrentLocationContext';

const LandingPage = () => {
    // Accessing Current Location From The Context.
    const {currentLocation , setCurrentLocation} = useContext(UserCurrentLocationContext);
    return (
        <div className='bg-slate-800'>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* Locate Me | Login | Signup Section */}
                    <LocateMeComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation}/>
                    {/* Banner Section */}
                    <BannerComponent/>
                    {/* Footer Section */}
                    <FooterComponent/>
                </div>
            </>
        </div>
    )
}

export default LandingPage
