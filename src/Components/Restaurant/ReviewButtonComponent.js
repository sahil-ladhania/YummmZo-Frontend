import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ReviewButtonComponent = () => {
    // State Variables
    const [showReviewComponent , setShowReviewComponent] = useState(false);
    // Handler Function
    const showUserReviewComponent = () => {
        setShowReviewComponent(!showReviewComponent);
    }
    return (
        <div>
            <>
                {/* Main Component */}
                <div>
                    {/* Review Button Section */}
                    <button onClick={showUserReviewComponent} className='h-10 pr-5 pl-5 bg-signup-gradient text-white rounded-sm hover:animate-glow-light'>Reviews</button>
                </div>
                {/* Conditional Rendering */}
                {
                    showReviewComponent ?
                        <h1>show review comp</h1>
                        :
                        null
                }
            </>
        </div>
    )
}

export default ReviewButtonComponent
