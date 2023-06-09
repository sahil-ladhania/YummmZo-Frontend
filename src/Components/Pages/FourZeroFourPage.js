// Importing Components | Modules | Libraries
import React from 'react'
import '../../Styles/Main.css'
import { UilArrowLeft } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
// Importing CSS Files
import '../../Styles/Links.css'
import '../../Styles/Buttons.css'
import '../../Styles/Card.css'
import '../../Styles/Colors.css'
import '../../Styles/Layout.css'
import '../../Styles/Spacing.css'
import '../../Styles/AnimationAndTransition.css'
import '../../Styles/Text.css'
import '../../Styles/Input.css'
import '../../Styles/Navbar.css'
import '../../Styles/Footer.css'
import '../../Styles/Main.css'

const FourZeroFourPage = () => {
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    <div className='flex fd-c jc-c ai-c'>
                        <img className='h-600 w-a' src="https://static.vecteezy.com/system/resources/previews/022/752/919/original/delivery-guy-taking-break-empty-state-illustration-editable-404-not-found-for-ux-ui-design-fast-food-restaurant-isolated-flat-cartoon-character-on-white-error-flash-message-for-website-app-vector.jpg" alt="404-Page" />
                        <Link to="/" className='td-n c-b flex ai-c jc-c b-1-t-s br-5 shadow p-0-10 h-40 w-a'>
                            <UilArrowLeft/>
                            <span className='fs-r fs-m'>Back to Home</span>
                        </Link>
                    </div>
                </div>
            </>
        </div> 
    )
}

export default FourZeroFourPage
