// Importing Components | Modules | Libraries
import React, {useContext} from 'react'
import SignUpComponent from '../Auth/SignUpComponent'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent';
import { UserContext } from '../../Contexts/UserContext';

const SignUpPage = () => {
    // Accessing Input States From The Context.
    const {firstName , setFirstName ,lastName , setLastName ,email , setEmail , password , setPassword} = useContext(UserContext);
    return (
        <div>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* YummmZo Logo */}
                    <YummmZoLogoComponent/>
                    {/* Sign Up Form */}
                    <SignUpComponent firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
                </div>
            </>
        </div>
    )
}

export default SignUpPage
