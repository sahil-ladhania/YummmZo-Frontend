// Importing Components | Modules | Libraries
import React from 'react'
import '../../Styles/Main.css'
import { CiCircleChevLeft } from "react-icons/ci";
import { Link } from 'react-router-dom'

const FourZeroFourPage = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    <div className='flex flex-col justify-center items-center h-screen'>
                        <img className='h-96 w-auto mb-10' src="https://static.vecteezy.com/system/resources/previews/022/752/919/original/delivery-guy-taking-break-empty-state-illustration-editable-404-not-found-for-ux-ui-design-fast-food-restaurant-isolated-flat-cartoon-character-on-white-error-flash-message-for-website-app-vector.jpg" alt="404-Page" />
                        <Link to="/home" className='flex items-center justify-center h-10 border-2 border-black pr-3 pl-3 pt-2 pb-2 rounded-sm bg-slate-300'>
                            <span><CiCircleChevLeft className='text-2xl mr-2'/></span>
                            <span className='fs-r fs-m'>Back to Home</span>
                        </Link>
                    </div>
                </div>
            </>
        </div> 
    )
}

export default FourZeroFourPage
