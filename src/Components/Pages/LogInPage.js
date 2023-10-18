// Importing Components | Modules | Libraries
import React, {useContext} from 'react'
import YummmZoLogoComponent from '../Common/YummmZoLogoComponent'
import LogInComponent from '../Auth/LogInComponent'
import { UserContext } from '../../Contexts/UserContext';

const LogInPage = () => {
    // Accessing Input States From The Context.
    const {email , setEmail , password , setPassword} = useContext(UserContext);
    return (
        <div className='bg-slate-800 h-screen'>
            <>
                <div className='max-w-6xl ml-auto mr-auto'>
                    {/* YummmZo Logo */}
                    <YummmZoLogoComponent/>
                    {/* Log In Form */}
                    <LogInComponent email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
                </div>
            </>
        </div>
    )
}

export default LogInPage
