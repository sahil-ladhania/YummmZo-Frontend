// Importing Components | Modules | Libraries
import React, {useContext} from 'react'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent'
import LogInComponent from '../Auth/LogInComponent'
import { UserContext } from '../../Contexts/UserContext';
import { UserCurrentLocationContext } from '../../Contexts/UserCurrentLocationContext';

const LogInPage = () => {
    // Accessing Current Location From The Context.
    const {currentLocation , setCurrentLocation} = useContext(UserCurrentLocationContext);
    // Accessing Input States From The Context.
    const {formData , setFormData , auth , setAuth} = useContext(UserContext);
    return (
        <div className='bg-page-background h-screen'>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* YummmZo Logo */}
                    <YummmZoLogoComponent/>
                    {/* Log In Form */}
                    <LogInComponent formData={formData} setFormData={setFormData} currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} auth={auth} setAuth={setAuth}/>
                </div>
            </>
        </div>
    )
}

export default LogInPage
