// Importing Components | Modules | Libraries
import React, {useContext} from 'react'
import NavbarComponent from '../Common/NavbarComponent';
import ImageContentButtonComponent from '../Cart/ImageContentButtonComponent';
import { UserCurrentLocationContext } from '../../Contexts/UserCurrentLocationContext';

const EmptyCartPage = () => {
    // Accessing Current Location From The Context.
    const {currentLocation , setCurrentLocation} = useContext(UserCurrentLocationContext);
    return (
        <div className='bg-slate-800'>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* Customised Navbar for this page Section */}
                    <NavbarComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation}/>
                </div>
                <div className='max-w-4xl ml-auto mr-auto'>
                    {/* Image | Content | Button Section */}
                    <ImageContentButtonComponent/>
                </div>
            </>
        </div>
    )
}

export default EmptyCartPage
