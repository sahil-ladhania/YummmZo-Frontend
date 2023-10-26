// Importing Components | Modules | Libraries
import React, {useContext} from 'react'
import SignUpComponent from '../Auth/SignUpComponent'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent';
import { UserContext } from '../../Contexts/UserContext';
import { PageLoaderContext } from '../../Contexts/PageLoaderContext';

const SignUpPage = () => {
    // Accessing Loading State From The Context.
    const {loading , setLoading} = useContext(PageLoaderContext);
    // Accessing Input States From The Context.
    const {formData , setFormData} = useContext(UserContext);
    return (
        <div className='bg-page-background h-screen'>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* YummmZo Logo */}
                    <YummmZoLogoComponent/>
                    {/* Sign Up Form */}
                    <SignUpComponent formData={formData} setFormData={setFormData} loading={loading} setLoading={setLoading}/>
                </div>
            </>
        </div>
    )
}

export default SignUpPage
