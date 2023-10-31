// Importing Components | Modules | Libraries
import React, {useContext} from 'react'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent'
import LogInComponent from '../Auth/LogInComponent'
import { UserContext } from '../../Contexts/UserContext';
import { UserCurrentLocationContext } from '../../Contexts/UserCurrentLocationContext';
import { PageLoaderContext } from '../../Contexts/PageLoaderContext';

const LogInPage = () => {
    // Accessing Loading State From The Context.
    const {loading , setLoading} = useContext(PageLoaderContext);
    // Accessing Current Location From The Context.
    const {currentLocation , setCurrentLocation} = useContext(UserCurrentLocationContext);
    // Accessing Input States From The Context.
    const {formData , setFormData , auth , setAuth} = useContext(UserContext);
    return (
        <div className='h-screen'>
            <>
                <div className=''>
                    {/* YummmZo Logo */}
                    <div className='bg-navbar-gradient'>
                        <YummmZoLogoComponent/>
                    </div>
                    <div className='max-w-6xl ml-auto mr-auto'>
                        {/* Log In Form */}
                        <LogInComponent formData={formData} setFormData={setFormData} currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} auth={auth} setAuth={setAuth} loading={loading} setLoading={setLoading}/>
                    </div>
                </div>
            </>
        </div>
    )
}

export default LogInPage
