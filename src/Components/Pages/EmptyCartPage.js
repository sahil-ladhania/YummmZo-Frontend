// Importing Components | Modules | Libraries
import React, {useContext} from 'react'
import NavbarComponent from '../Common/NavbarComponent';
import ImageContentButtonComponent from '../Cart/ImageContentButtonComponent';
import { UserCurrentLocationContext } from '../../Contexts/UserCurrentLocationContext';
import { UserContext } from '../../Contexts/UserContext';
import { PageLoaderContext } from '../../Contexts/PageLoaderContext';

const EmptyCartPage = () => {
    // Accessing Loading State From The Context.
    const {loading , setLoading} = useContext(PageLoaderContext);
    // Accessing Input States From The Context.
    const {formData , setFormData , auth , setAuth} = useContext(UserContext);
    // Accessing Current Location From The Context.
    const {currentLocation , setCurrentLocation} = useContext(UserCurrentLocationContext);
    return (
        <div className='bg-gradient-tl-br'>
            <>
                <div className='bg-navbar-gradient'>
                    {/* Customised Navbar for this page Section */}
                    <NavbarComponent currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} auth={auth} setAuth={setAuth} loading={loading} setLoading={setLoading}/>
                </div>
                <div className='max-w-4xl ml-auto mr-auto'>
                    {/* Image | Content | Button Section */}
                    <ImageContentButtonComponent loading={loading} setLoading={setLoading}/>
                </div>
            </>
        </div>
    )
}

export default EmptyCartPage
