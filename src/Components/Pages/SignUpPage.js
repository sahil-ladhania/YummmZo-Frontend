// Importing Components | Modules | Libraries
import React, {useContext} from 'react'
import SignUpComponent from '../Auth/SignUpComponent'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent';
import { UserContext } from '../../Contexts/UserContext';

const SignUpPage = () => {
    // Accessing Input States From The Context.
    const {formData , setFormData} = useContext(UserContext);
    return (
        <div className='bg-page-background h-screen'>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* YummmZo Logo */}
                    <YummmZoLogoComponent/>
                    {/* Sign Up Form */}
                    <SignUpComponent formData={formData} setFormData={setFormData}/>
                </div>
            </>
        </div>
    )
}

export default SignUpPage
